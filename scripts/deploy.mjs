import { spawnSync } from 'node:child_process';

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function capture(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.status !== 0) {
    process.stderr.write(result.stderr || '');
    process.exit(result.status ?? 1);
  }

  return result.stdout.trim();
}

function ensureCleanGitTree() {
  const status = capture('git', ['status', '--short']);
  if (status) {
    console.error('Refusing to deploy with uncommitted changes because deploy success must create a git tag on a committed state.');
    console.error('Commit or stash your changes first, then rerun `npm run deploy`.');
    process.exit(1);
  }
}

function formatTagName() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const timestamp = [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
  ].join('') + '-' + [
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join('');
  const shortSha = capture('git', ['rev-parse', '--short', 'HEAD']);
  return `deploy-${timestamp}-${shortSha}`;
}

function ensureTagDoesNotExist(tagName) {
  const result = spawnSync('git', ['rev-parse', '-q', '--verify', `refs/tags/${tagName}`], {
    stdio: 'ignore',
  });

  if (result.status === 0) {
    console.error(`Tag already exists: ${tagName}`);
    process.exit(1);
  }
}

ensureCleanGitTree();

run('npm', ['run', 'build']);
run('npm', ['run', 'cf:deploy']);

const tagName = formatTagName();
ensureTagDoesNotExist(tagName);
run('git', ['tag', '-a', tagName, '-m', `Deploy ${tagName}`]);

console.log(`Created git tag ${tagName}`);
console.log(`Push it with: git push origin ${tagName}`);
