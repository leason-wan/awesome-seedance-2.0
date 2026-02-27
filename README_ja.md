# 🎬 Jimeng Seedance 2.0 ユーザーマニュアル (次世代マルチモーダル創作体験)

テキストや静止画だけで「ストーリー」を伝えていた時代を経て、私たちはついに、ユーザーの意図を真に理解し、自在に表現できるビデオモデルを開発しました。本日、その集大成となる Seedance 2.0 を皆さまにお届けします！

Jimeng Seedance 2.0 は、**画像、ビデオ、オーディオ、テキスト**の4つのモーダル入力に対応。より豊かな表現力と、かつてないほど精密な制御を可能にしました。

画像でスタイルのトーンを決め、ビデオでキャラクターの動きや構図を指定し、数秒のオーディオでリズムや雰囲気を吹き込む。直感的なプロンプトと組み合わせることで、創作プロセスはより自然で効率的になり、あなたを真の「ディレクター」へと変貌させます。

今回のアップデート最大のハイライトは、強力な**「参照能力（Reference Capabilities）」**です：
- 📷 **画像参照：** 構図やキャラクターの詳細を正確に再現・維持します。
- 🎥 **ビデオ参照：** 複雑なアクションのリズム、高度なカメラワーク、創造的な特殊効果を完璧にエミュレートします。
- ⏱ **ビデオ延長：** 滑らかな拡張と接続をサポート。単なる生成を超えた「連続撮影」のような体験を提供します。
- ✂️ **編集機能の強化：** 既存ビデオ内のキャラクター入れ替え、要素の削除・追加を直感的に行えます。

ビデオ制作は単なる「生成」ではなく、いかに表現を「コントロール」できるかが重要です。Seedance 2.0 は真に制御可能な、次世代のマルチモーダル創作ツールです。

Seedance 2.0 で、あなたの想像を現実に。大胆なアイデアを膨らませてください。形にするのは、私たちの役割です。

## 主要スペックガイド

| 主要項目 | Seedance 2.0 |
| --- | --- |
| **画像入力スペック:** jpeg, png, webp, bmp, tiff, gif | 最大9枚 <br/> サイズ: 30MB未満 |
| **ビデオ入力スペック:** mp4, mov | 最大3本、合計2〜15秒 <br/> サイズ: 50MB未満 <br/> 解像度範囲: [480p(640×640) ~ 720p(834×1112)] |
| **オーディオ入力スペック:** mp3, wav | 最大3本、合計15秒以内 <br/> サイズ: 15MB未満 |
| **テキスト入力** | 自然言語 |
| **生成時間** | 4〜15秒 (自由選択可能) |
| **音声出力** | 効果音/BGM生成を含む |
| **制限事項:** 現在、最大12ファイルまでの混合入力に対応しています。仕上がりに最も影響を与える素材を優先してアップロードし、各モードのファイル数を適切に割り当てることを推奨します。 |

## ⚠️ 重要：実写の顔素材アップロードに関するガイドライン
プラットフォームの規約遵守のため、現在、実在する人物の顔を含む素材（静止画・動画の両方）のアップロードは制限されています。ユーザーの権利保護と安全な生成環境を維持するため、システムがこれらを自動検知し、該当素材がアップロードされた場合はビデオ生成が行われません。

識別可能な人物の顔写真をアップロードした場合、モデルは対応する生成を行うことができません。これはコンテンツのセキュリティとプラットフォームの健全な運営を確保するための措置です。何卒ご理解とご協力をお願い申し上げます。今後のアップデートについては、本ドキュメントにて随時ご案内いたします。

# 基本性能が大幅に強化：より安定、よりスムーズに、よりリアルに！

マルチモーダルなだけでなく、Seedance 2.0 は基本レベルでも大幅に強化されました。物理法則はより合理的で、アクションパフォーマンスはより自然でスムーズで、コマンドの理解はより正確で、スタイルはより安定しています。複雑なアクション、連続モーション、その他の困難な生成タスクを安定して完了できるだけでなく、全体的なビデオ効果をよりリアルでスムーズにすることもできます。これは、基礎となる機能の包括的な進化です。


## ケース 1

### 入力

#### 📝 プロンプト
```
女の子は優雅に服を干していました。乾いた後、彼女はバケツの中に別の服を取り出し、激しく振りました。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2

### 入力

#### 📝 プロンプト
```
絵の中の人物は罪悪感を持った表情をしています。彼は左右を見てフレームの外に見えます。彼はすぐにフレームから手を伸ばしてコーラを拾い、一口飲みます。すると彼は満足そうな表情を浮かべる。このとき、足音が聞こえ、絵の中の人物が急いでコーラを元に戻します。このとき、西部のカウボーイがカップに入ったコーラを拾って立ち去ります。最後に、カメラが前方に移動し、画面はゆっくりと真っ黒な背景に変わり、缶コーラだけがトップライトに照らされます。写真の下部には芸術的な字幕とナレーションが表示されます。「Yikou Cola、ぜひ試してみてください!」
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3

### 入力

#### 📝 プロンプト
```
カメラはわずかにズームアウトし（通りのパノラマビューが表示されます）、ヒロインを追跡します。風でヒロインのスカートがなびきます。ヒロインは19世紀のロンドンの街を歩いています。ヒロインが右側の通りを歩いていると、蒸気機関車が走ってきます。あっという間にヒロインの前を通り過ぎていきます。風でヒロインのスカートがめくれ上がります。ヒロインは驚いた様子で、急いでスカートを手で隠します。背景効果音は歩行音、人混み、車の音などです。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4

### 入力

#### 📝 プロンプト
```
カメラは素早く逃走する黒服の男と、彼を追いかける集団を追う。カメラはサイドトラッキングに切り替わります。キャラクターはパニックに陥り、道端の果物屋を倒し、立ち上がって逃走を続けます。群衆はパニックに陥った音を立てます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

# マルチモーダル総合進化：ビデオ制作は「自由な組み合わせ」の時代へ！

## Seedance 2.0 マルチモーダルの概要

- **多様な入力に対応:** テキスト、画像、ビデオ、オーディオのアップロードをサポート。これらは主要なオブジェクトとしても、参照用データとしても活用可能です。
- **あらゆる要素を参照:** 動き、特殊効果、フォルム、カメラワーク、キャラクター、シーン、サウンドなど、素材に含まれる要素を自在に参照できます。プロンプトが明確であるほど、モデルの理解は深まります。
- **Seedance 2.0 の強み:** 圧倒的なマルチモーダル参照能力 ＋ 強力な創造的生成 ＋ 精密な指示遂行（理解力）。
- **自然な対話:** 欲しい映像やアクションを自然言語で説明するだけです。「参照」なのか「編集」なのかを明確に伝えましょう。素材が多い場合は、@タグ（@画像1 など）を使用して、どの素材がどの役割を果たすかを指定するのが効率的です。

## 特別な使用法 (制限なし、参照のみ):
- 最初のフレーム/最後のフレームの画像はありますか?それでもビデオアクションを参照したいですか?
→ プロンプトに「@Picture 1 は最初のフレームです。@Video 1 の戦闘アクションを参照してください」のように明確に記述します。
- 既存のビデオを拡張したいですか?
→「Extend @Video 1 by 5s」のように延長時間を記述します。注: この時点で選択される生成された長さは、「新しいパート」の長さである必要があります (たとえば、5 秒延長された場合、生成される長さも 5 秒として選択される必要があります)。
- 複数のビデオを結合したいですか?
→「@video1 と @video2 の間にシーンを追加したい、コンテンツは xxx です」など、プロンプトの単語で合成ロジックを説明します。
- 音声素材はありませんか?動画内の音声を直接参照できます
- 連続的なモーションを生成したいですか?
→ プロンプトの単語に連続性の説明を追加できます。「キャラクターは、ジャンプからローリングに直接移行し、動きの一貫性とスムーズさを保ちます。」@図 1 @ 図 2 @ 図 3...

## これまで解決困難だったビデオ制作の悩みを、一気に解消！
以前のビデオ生成で見られた「途中で顔が変わる」「動きに一貫性がない」「不自然に映像が伸びる」「一部を変えると全体のリズムが狂う」といった課題。Seedance 2.0 のマルチモーダル機能は、これらを鮮やかに解決します。

### 一貫性（コンシステンス）の飛躍的な向上
「前後のカットでキャラクターの顔が違う」「商品のディテールがぼやける」「小さな文字が読み取れない」「シーンが急に飛ぶ」……こうした一貫性の問題は、2.0で解決されました。
表情から衣装、フォントの細部に至るまで、全編を通して安定した描写が可能です。

## ケース 1
### 入力

#### 📝 プロンプト
```
男性@写真1 仕事を終えて疲れた様子で廊下を歩いていたところ、ペースが落ち、ついに自宅の玄関で立ち止まりました。彼の顔のクローズアップショット。男は深呼吸をして感情を整え、ネガティブな感情を捨て、リラックスした状態になった。それから彼はクローズアップで覗いて鍵を見つけ、ドアロックを差し込みました。家に入ると、幼い娘と飼い犬が嬉しそうに駆け寄り、抱擁を求めた。部屋はとても暖かく、会話全体が自然でした。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@Video 1 の女の子をオペラ女優に置き換えます。舞台は美しいステージ上。 @Video 1のカメラの動きやトランジション効果を参考に、キャラクターの動きに合わせてレンズを使用することで、究極の舞台美を生み出し、視覚的なインパクトを高めます。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
@Video 1 のすべてのトランジションとカメラの動きを、ワンショットから最後まで参照してください。絵はチェスの試合から始まります。カメラが左に移動して、床上の黄色の砂利が表示されます。カメラはビーチに移動します。砂浜には足跡が残っています。白い私服を着た少女が砂浜を少しずつ遠ざかっていく。カメラは空中でのオーバーヘッドショットに切り替わります。海水が洗っています（文字は表示されません）。シームレスなグラデーション遷移。洗われた波ははためくカーテンに変わります。カメラはズームアウトして、少女の顔のクローズアップを表示します。最後まで一発。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
0〜2秒：4フレームの高速カット。赤、ピンク、紫、ヒョウ柄の4つのリボンが順に映し出され、サテンの光沢と「chéri」のブランド名をクローズアップ。ナレーション：「Chéri（シェリ）のマグネティック・リボンで、無限の美しさを演出しましょう！」
3〜6秒：シルバーのマグネットバックルが「カチッ」と音を立てて繋が、その後ゆっくりと離れるクローズアップ。滑らかな質感と利便性を強調。ナレーション：「わずか1秒で、理想のスタイルへ。」
7〜12秒：着用シーンのクイック切り替え：バーガンディのリボンはコートの襟に（通勤スタイル）、ピンクはポニーテールに（ストリートで可愛く）、パープルはバッグのストラップに（ハイエンドなアクセント）、ヒョウ柄はスーツの襟に（圧倒的なオーラ）。ナレーション：「コート、バッグ、ヘアアクセサリーまで、あなたらしさを最大限に輝かせます。」
13〜15秒：4色のリボンが並んで表示され、ブランドロゴが浮かび上がる。ナレーション：「Chéri、瞬時に届ける、あなたの美しさ。」
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
@写真2のバッグをメインに、コマーシャル風の映像を制作します。バッグの側面は@写真1、表面素材は@写真3を参照してください。バッグの細部まで鮮明に映し出し、素晴らしいBGMを加えてください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 6
### 入力

#### 📝 プロンプト
```
@Picture 1 を写真の最初のフレーム、一人称視点として取り、@Video 1 のカメラ移動エフェクトを参照します。上のシーンは @Picture 2 を参照し、左側のシーンは @Picture 3 を参照し、右側のシーンは @Picture 4 を参照します。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## 難易度・制御性の高いカメラの動きと動きの正確な再現
以前は、映画内の動き、カメラの動き、または複雑な動きをモデルに模倣させたい場合、詳細なプロンプトを大量に作成する必要があるか、単にそれができないかのどちらかでした。しかし、今後は参考ビデオをアップロードするだけで済みます。

## ケース 1
### 入力

#### 📝 プロンプト
```
@写真 1 の男性の画像を参照してください。@写真 2 で彼はエレベーターに乗っています。@動画 1 の主人公のすべてのカメラ効果と表情を完全に参照してください。主人公が怯えているとき、ヒッチコックはズームインし、その後いくつかのサラウンド ショットでエレベーター内の視点が表示されます。エレベーターのドアが開き、カメラを追ってエレベーターから出ます。エレベーターの外の様子は@写真3をご参照ください。男性は辺りを見回します。ロボット アームを使用してキャラクターの視線を複数の角度から追跡するには、@ビデオ 1 を参照してください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@Picture 1 の男性の画像を参照すると、彼は @Picture 2 の廊下にいます。これは、@Video 1 のすべてのカメラ効果と主人公の表情を完全に参照しています。 @写真2の角を走り回る主人公をカメラが追い、@写真3の廊下でカメラは後ろからの視点を追い、低い画角で主人公の正面を囲みます。次に、カメラが右に移動します。90 度パンして、@写真 4 の二股交差点で撮影します。突然停止し、右に 180 度パンして、主人公の顔を撮影します。主人公は喘いでいます。カメラは主人公の視点に従い、周囲を見回します。@ビデオ 1 の急速な左右のパンを参照してシーンを表示します。次に、@写真 5 のシーンにズームし、走っている主人公の側面を追跡し続けます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-5.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-6.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-7.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
@写真 1 はタブレットを主要な被写体として使用しています。カメラの動きは@動画1を参照してください。画面を拡大して拡大します。レンズを回転させた後、タブレットを反転して全体像を表示します。画面上のデータの流れは常に変化し、周囲の環境は徐々にSF風のデータ空間に変わっていきます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
@Picture 1 の女優は被写体として機能し、@Video 1 のカメラ移動方法を参照して、リズミカルに押したり引いたりパンしたりする動きを実行します。女優の動きは、@Video 1 の女性がステージ上で精力的に踊るダンスの動きも参照しています。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
槍キャラは@画像1 @画像2、双剣キャラは@画像3 @画像4を参照し、@動画1の動きを真似して@画像5の紅葉林で戦ってください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-5.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-6.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-7.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 6
### 入力

#### 📝 プロンプト
```
ビデオ 1 のキャラクターの動きとビデオ 2 の周囲のレンズ言語を参照して、キャラクター 1 とキャラクター 2 の間の戦闘シーンが生成されました。戦いは星降る夜に行われた。戦いの最中、白い粉が舞い上がった。戦闘シーンはとても綺麗で、緊張感のある雰囲気でした。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 7
### 入力

#### 📝 プロンプト
```
動画 1 のカメラの動きと画面切り替えのリズムを参考に、写真 1 の赤いスーパーカーを再現してください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## クリエイティブなテンプレート / 複雑な特殊効果を正確に再現
Seedance 2.0 は、画像を作成したりストーリーを書いたりできるだけでなく、クリエイティブなトランジション、コマーシャル、ムービー クリップ、複雑な編集などの「模倣」もサポートしています。参考となる写真やビデオがあれば、モデルはアクションのリズム、レンズ言語、視覚的構造を識別し、それらを正確に再現します。専門用語がわからなくても大丈夫です。 「@Video1のリズムやカメラの動き、@Picture1のキャラクターモデリングを参考に」など、参考にしたい部分を明記しておけば、高品質で自分だけのモデルが生成されます。勇気を出して試してみてください！それは本当にできる

## ケース 1
### 入力

#### 📝 プロンプト
```
@Video 1 の文字を @Picture 1 に置き換えます。@Picture 1 が最初のフレームです。キャラクターは仮想 SF メガネをかけ、@Video 1 のカメラの動きとクローズアップ サラウンド レンズを参照して、三人称視点からキャラクターの主観的な視点まで、AI 仮想メガネをシャトルし、@Picture 2 の紺碧の宇宙に来ると、いくつかの宇宙船が現れて遠くへシャトルします。カメラは宇宙船を追って@写真3のピクセル世界へ向かいました。カメラはピクセル山林世界の上空を低空で飛行し、内部の木の成長形態が現れました。次に、上向きの角度から撮影し、@写真 4 の薄緑色のテクスチャーのある惑星にすばやく往復しました。カメラは往復して惑星の表面を通過しました。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-4.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-5.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-6.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
最初の写真のモデルの顔の特徴を参照してください。モデルたちは参考写真2枚目から6枚目までの衣装を着てカメラに近づき、エッチな表情、冷たそうな表情、かわいい表情、びっくりした表情、クールな表情を見せています。それぞれのルックスは異なる服を着ています。変更するたびに画像がカットされます。ビデオの魚眼レンズ効果と二重フリッカー効果を参照してください。 @Video1の効果を参考にしてください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-6.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-7.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-8.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
ビデオの広告創造性を参照し、提供されたダウン ジャケットの写真を使用し、グース ダウンの写真と白鳥の写真を参照し、次の広告の言葉と組み合わせます。「これはグース ダウン、これは暖かい白鳥、これは着用可能なポーラー ベルベットのダウン ジャケットです。新年には暖かい服を着て、暖かい生活を送りましょう。」新しいダウン ジャケットの広告ビデオを生成します。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-3.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-4.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
白黒のインク スタイルで、@写真 1 のキャラクターは @ビデオ 1 の特殊効果と動きを参照して、インクの太極拳カンフー エピソードを演出します。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
@動画 1 の最初のフレームのキャラクターを @写真 1 に置き換えます。完全に @ 動画 1 の特殊効果と動きを参照してください。手の雄しべからバラの花びらが伸び、顔には亀裂が上向きに伸び、徐々に雑草で覆われます。キャラクターが両手で顔を撫でると、雑草が粒子となって消え、最終的に@写真2の姿になります。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 6
### 入力

#### 📝 プロンプト
```
@画像1の天井から、トランジションは@動画1のパズル崩しエフェクトを参照、フォント「BELIEVE」を「Seedance」に置き換え、@画像2のフォントを参照
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 7
### 入力

#### 📝 プロンプト
```
黒い画面から始まります。動画 1 のパーティクル エフェクトとマテリアルを参照してください。金色の砂利マテリアルが画面の左側から飛び出し、右側を覆います。 @Video 1のパーティクル吹き出しエフェクトを参照してください。@Picture 1のフォントが画面中央に徐々に現れます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 8
### 入力

#### 📝 プロンプト
```
@写真 1 のキャラクターは、@動画 1 の動作と表情の変化を参照して、インスタント ラーメンを食べるという抽象的な動作を示しています。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## モデルの創造性とプロット完成能力

## ケース 1
### 入力

#### 📝 プロンプト
```
@Picture 1 を左から右、上から下の順にコミック的に解釈し、キャラクターが話すセリフと絵の一貫性を保ち、ストーリーボードの切り替えや重要なプロットの解釈に特別な音響効果を追加し、全体的なスタイルはユーモラスです。解釈方法は@Video1を参照してください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-1.jpg" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@Picture1 の長編映画の絵コンテ台本を参考に、@Picture1 の絵コンテ、シーン、カメラの動き、絵、コピーライティングを参考にして、「幼少期の四季」をテーマにした 15 秒の癒しのタイトルシーケンスを作成します。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
ビデオ 1 の音声を参照し、図 1、2、3、4、および 5 をインスピレーションとして使用して、感情的なビデオを作成します。 BGM リファレンス@ビデオ 1
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ビデオ拡張子

## ケース 1
### 入力

#### 📝 プロンプト
```
動画を 15 秒に延長し、@Picture 1 と @Picture 2 のバイクに乗ったロバの画像を参照し、想像力豊かな広告を追加します。
写真 1: 横からの固定ショット。ロバがバイクに乗って小屋から飛び出し、隣のニワトリが怯えています。
画面 2: ロバがバイクに乗って砂の上を旋回しています。最初にオートバイのタイヤのクローズアップがあり、次に煙を上げながらオートバイで旋回スタントを行うロバの空中ショットに切り替わります。
写真 3: 背景は雪山のショットで、車に乗ったロバが丘の中腹を飛んでいます。スローガンは主題の後ろにあり、「創造性を刺激し、人生を豊かにする」がマスクの形で中央に表示され（ロバとバイクが通過するとき）、最後にバイクが通過するとき、砂ぼこりと煙が上がります。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
動画は6秒延長され、エレキギターの刺激的な音楽が登場。動画の途中で「JUST DO IT」の広告フォントが表示され、徐々に消えていきます。カメラは天井まで移動します。屈強な男が吊り輪を引いている。彼の上半身は @写真 1 のタイトなフィットネスウェアを着ており、背中に @写真 2 の「Fitness」のロゴがプリントされています。男が力強い上肢で吊り輪を引き上げると、映像の途中に「DO SOME SPORT」の広告エンディングフォントが現れる。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
@video1 を 15 秒延長します。 1～5秒：光と影がブラインドを通して木製のテーブルとカップ本体の上をゆっくりと滑り、枝がわずかな息のように揺れます。 6 ～ 10 秒: コーヒー豆が画面の上部から静かに落ち、画面が暗くなるまでカメラがコーヒー豆に向かって移動します。 11～15秒：英語の1行目は「Lucky Coffee」、2行目は「Breakfast」、3行目は「AM 7:00-10:00」です。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
暖かい午後の光の中で、カメラは前方に 10 秒間伸び、風にはためく街角の日よけの列から始まり、壁の根元に頭を突き出している数輪の小さなヒナギクまでゆっくりと移動します。その直後、主人公の赤いスニーカーが画面に現れた。彼は花の屋台の前にしゃがみ込み、一握りのヒマワリを腕に抱えて微笑み、その花びらが白いTシャツにこすれた。振り返ってスケートボードを踏むと、花店の店主が笑顔で「花びらが舞うから気をつけてね！」と叫んだ。彼はボスに手を振り、それからスケートを始めた。すでに数枚の金色の花びらが花束から飛び出て、スケートボードの板の上に落ちていました。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## 音色がより正確になり、サウンドがよりリアルになりました

## ケース 1
### 入力

#### 📝 プロンプト
```
固定レンズ、円形の穴から中央の魚眼レンズが覗いています。ビデオ 1 の魚眼レンズを参照してください。@ビデオ 2 の馬に魚眼レンズのほうを向けさせます。@ビデオ 1 の発話アクションを参照してください。背景 BGM は @ビデオ 3 の効果音を参照しています。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-1.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-2.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
提供されたオフィスビルのプロモーション写真に基づいて、2.35:1 のワイド画面、24fps、繊細な映像スタイルを使用して、15 秒の映画レベルの不動産ドキュメンタリーが生成されました。ナレーションの音声は @Video 1 を参照し、ビル内のさまざまな企業の業務を紹介する「オフィスビルのエコロジー」を撮影しました。ナレーションは、オフィスビルがどのようにして活気のあるビジネスエコシステムになったかを説明するために使用されました。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-3.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-4.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
「犬猫の苦情室」での苦情対話には豊かな感情が必要であり、トークショーのパフォーマンスと一致しています。
ニャー・ジャン（猫にホストされ、毛皮をなめながら目を丸くする）：「うちの家族、誰が知ってる？ 私の隣の男は、毎日尻尾を振ってソファを引き裂く以外に、人間を騙して間食をさせるために、「とてもいい、触られたい」という目だけを使っている。彼は明らかに家を壊すことに関しては誰よりも攻撃的だが、それでも彼をワンザイと呼ぶ勇気を持っている。私は彼を「ワンザイ」と呼ぶのは多かれ少なかれだと思う、ハハハ。」
ワン・ザイ（犬の主人、首を傾げ、尻尾を振る）：「まだ私に話しかける度胸があるの？あなたは1日18時間寝ていて、目が覚めると人間の足をさすって缶をねだるの。人間の黒い服が髪の毛で隠れるほど抜け毛が多い。床を掃除した後は向きを変えてソファの上でごろごろする。どうしてまだ冷たい貴族のふりをする度胸があるの？」
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-1.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-3-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
河南歌劇の前奏曲「ギロチン美女事件」の伴奏が響いた。左側の黒い服を着た鮑正は、右側の赤い服を着た陳世美を指差し、歯を食いしばりながら河南オペラを歌った。「剣を鞘に当て、本物の証拠を持って、あえて動かないのか？」陳世美さんの目は極度の当惑の表情で、方便を探してキョロキョロしていた。このとき、画面の外から河南オペラの主役の俳優の「ちょっと待って！」の声が聞こえた。鮑正と陳詩美は二人とも画面の右側を見つめた。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
15秒のMVビデオを生成します。キーワード：安定したフレーミング / 軽い押し引き / ローアングルのヒロイックセンス / ドキュメンタリーなのにハイエンド 超広角ショット、ややローカメラアングルで撮影、崖の未舗装道路とレトロなステーションワゴンが画面の下 3 分の 1 を占め、遠くに海と地平線が空間を広げ、夕焼け側の体積光が塵の粒子を通り抜け、フィルムレベルの構図、本物のフィルム粒子、風が服の角をなでる。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-1.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-5-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 6
### 入力

#### 📝 プロンプト
```
写真の中央で帽子をかぶった少女は「家族をとても誇りに思います！」と静かに歌い、振り向いて中央の黒人の少女を抱きしめた。黒人少女は「かわいい子、あなたは私たちの家族の中心です」と感情的に反応し、彼女を抱きしめ返した。左側の黄色い服を着た男の子は、「みんな、一緒に踊ってお祝いしましょう！」と嬉しそうに言いました。右端の女の子は即座に「音楽を持ってきます！」と答え、ラテンアメリカ音楽がバックグラウンドで流れ、左側のオレンジ色のスカートの女性（ジュリエッタ）は微笑んでうなずき、右側の三つ編みの女性（ルイザ）は拳を握り、腕を振った。群衆の誰かがステップを踏み始め、子供たちはリズムに合わせて手拍子をし、家族全員が輪を作ろうとしていました。陽気な音楽に合わせてスカートをはためかせ、カラフルな街路で踊り、喜びと温もりを広げました。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-6-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 7
### 入力

#### 📝 プロンプト
```
固定レンズ。立っている屈強な男（キャプテン）は拳を握り、腕を振り、スペイン語で「3分以内に攻撃せよ！」と言った。金髪のチームメンバーは立って銃器をチェックし、緑髪のチームメンバーは戦術用懐中電灯を握っていた。黒人チームのメンバーは肩を寄せ合い、スペイン語で仲間に「側面攻撃？」と尋ねた。船長はうなずき、スペイン語で「古い規則だ。尋問のために生かしておけ」と言った。メンバー全員が厳粛な表情で、機材のぶつかり合う音の中、戦術的なジェスチャーを終え、暗黙の了解で立ち上がった。全員が準備を整え、左側の二人の少年も最初に立ち上がって戦う準備をしました。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-1.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-7-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 8
### 入力

#### 📝 プロンプト
```
0 ～ 3 秒: 最初に目覚まし時計が鳴り、かすんだ画面に画像 1 が表示されます。
3 ～ 10 秒: カメラを素早くパンし、反対側を向いて男性の顔をクローズアップします。男は力なく少女に立ち上がるように頼みます。トーンと音色は @Video 1 を参照します。
10～12秒: 女の子は口をとがらせてキルトの下に隠れました。
12 ～ 15 秒: 男性主人公の全身に切り替えて、彼はため息をついてこう言いました。「あなたに対して私にできることは本当に何もありません!」
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 9
### 入力

#### 📝 プロンプト
```
@写真1の猿はミルクティーショップのカウンターに向かって歩きます。カメラは彼を追いかけます。 @写真 2 のビションフリーゼのウェイターは、バーで生産ツールを拭いています。猿はウェイターに四川訛りで「ヤオ・マイヤー、私の妾に別れを告げますか？」と注文した。
カットショット、クローズアップ。
ウェイターは自分のやっていることを置いて、老人に不思議そうな顔をしてこう答えた。「いいえ、アメリカ式にしたいのですか？」
猿が見えるようにカットします。
彼は頭をかきながら何かをつぶやいた。「大丈夫だった……？用事があるんだ！孫がミルクティーを買ってきてほしいと言ってきたので、さらば妾と呼んだんだ」
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-9-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 10
### 入力

#### 📝 プロンプト
```
写真 1 の内容を一般的な科学のスタイルとトーンを使用して解釈します。これには、火炎山を越えるために、翠雲山に行って鉄扇姫からバナナ扇子を借りに行く悟空も含まれます。アイアンファン王女は、赤い息子が悟空に引き渡され、幼い頃に観音を崇拝していたため、復讐したいと考えていました。母と息子は引き離され、母は代わりに扇風機を借りることを拒否した。悟空は彼を説得しようとしたが無駄で、二人はすぐに自分たちの争いについて話し始めた。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-1.jpg" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-10-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## レンズの連続性（1枚から最後まで）が強い

## ケース 1
### 入力

#### 📝 プロンプト
```
@写真 1@写真 2@写真 3@写真 4@写真 5 は、通りからランナーを追って階段を上り、廊下を通って屋上に上がり、最後に街を一望するワンショットのトラッキング ショットです。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@Picture 1 を最初のフレームとして、画像を平面ウィンドウからズームアウトします。雲がゆっくりとフレームの中に浮かんでいきます。そのうちの 1 つは、色とりどりのジェリービーンズで飾られた雲で、常に写真の中央にあり、@写真 2 のアイスクリームにゆっくりと変化します。カメラはキャビンにズームバックします。 @写真 3 は窓際に座っていて、窓からアイスクリームを取るために手を伸ばして一口食べています。口の中はクリームで覆われ、優しい笑顔が顔に広がります。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-2-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
スパイ映画のスタイルでは、@Picture 1 が最初のフレームです。赤いウインドブレーカーを着て前を歩く女性エージェントをカメラが追う。カメラはパノラマビューを追跡します。赤い服を着て曲がり角に向かう女性を通行人が妨害し続ける。 @写真2の角の建物を参照してください。赤い服を着た女性の固定ショットが画面から離れ、角のあたりで消えます。マスクをかぶった少女が部屋の隅に隠れて熾烈な視線を向ける。仮面の少女の画像は＠画像３を参考にしています。画像のみを参考にしています。女の子は角に立っています。カメラは赤い服を着た女性エージェントに向かってパンしました。彼女は邸宅に入り、姿を消しました。邸宅については@写真4を参照してください。途中でカメラをカットせず、最後まで1枚で撮ります。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-4.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
@写真 1 の屋外ショットに基づいて、一人称主観視点で木造住宅内の環境をクローズアップして表示します。鹿@写真2と羊@写真3が火のそばでお茶を飲みながらおしゃべりしています。カメラが前進したときの接写ティーカップのスタイルは@写真4を参照してください。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-4.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-4-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
@写真 1@写真 2@写真 3@写真 4@写真 5 は、ジェット コースターのスリル満点のショットを主観視点で撮影したものです。ジェットコースターの速度はますます速くなります。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-5.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-5-6.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## 動画編集における高い操作性
すでにビデオがあり、最初から画像を探したりやり直したりするのではなく、アクションの一部を調整したり、数秒延長したり、キャラクターのパフォーマンスをアイデアに近づけたりしたい場合があります。他のコンテンツを変更することなく、既存のビデオを入力として直接使用し、ターゲットを絞った変更のクリップ、アクション、またはリズムを指定できるようになりました。再生成が不要で短時間で調整が完了

## ケース 1
### 入力

#### 📝 プロンプト
```
@ビデオ 1 のプロットを覆し、男の目は突然、穏やかな目から冷酷で激しい目へと変わりました。ヒロインが無防備になった瞬間、乱暴にヒロインを橋から突き落とし、ヒロインを水中に突き落とした。動きはキビキビと端正で、長年の計画を持って決意し、躊躇することなく、原作の愛情深いキャラクター設定を完全に覆します。ヒロインが水に落ちた瞬間、悲鳴は上がらず、信じられないという表情だけがあった。彼女は顔を上げて主人公に向かって叫びました。「あなたは最初から私に嘘をついていました！」主人公は冷たい笑みを浮かべて橋の上に立って、水に向かってささやきました。「これがあなたが私の家族に借りているものです。」
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@video 1 の陰謀全体を覆す
0 ～ 3 秒: スーツを着た男性がバーに座り、ワイングラスを手に穏やかな表情を浮かべています。カメラはゆっくりと進み、光と影が進み、シリアスな雰囲気が漂います。周囲の音が小さくなり、スーツ姿の男性が「このビジネスは大きいよ」とささやいた。
3 ～ 6 秒: 後ろの女性が緊張した様子で「どれくらい大きいですか?」と尋ねます。スーツを着た男性は目を上げ、声を低くして「とても大きいですね」と言う。カメラは彼の手のクローズアップに切り込みます。彼はオーラに満ちてワイングラスを置きます。
6～9秒の映像: 突然、スーツを着た男性がテーブルの下から大きなスナック菓子のギフト袋を取り出し、ドスンという音を立ててテーブルの上に置きました。
9〜12秒: 最初は腰に手を置いていた女性の筋肉が硬直した状態から弛緩した状態に変化し、全体の表情がリラックスしました。絵の雰囲気が和らぎます。
13～15秒画面：スーツを着た男性が女性のためにスナックの入った袋を取り出す。居酒屋の全景を映すためにカメラがズームアウトすると、写真が透明になってぼやける。「どんなに忙しくても、スナックを食べるのを忘れずに～」という字幕が表示される。
```

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-1.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
ビデオ 1 の女性リード シンガーは、写真 1 の男性リード シンガーに置き換えられています。動きは元のビデオで完全に模倣されています。カメラカットがあってはなりません。バンドが音楽を歌います。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
ビデオ 1 の女性の髪型を長い赤い髪に変更すると、写真 1 のホホジロザメが頭の半分を彼女の後ろからゆっくりと現れます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 5
### 入力

#### 📝 プロンプト
```
ビデオ 1 では、カメラが右にパンします。フライドチキンのボスは、並んでいる客にフライドチキンを手渡すのに忙しく、北京語で「自分の仕事をしなさい、自分の仕事をしなさい、みんな礼儀正しい態度で並んでいるのよ」と言いました。そう言って唐揚げを入れる紙袋を取りに行く。上司が写真 1 が印刷された紙袋を受け取る様子と、紙袋を顧客に渡す手の拡大図です。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-1.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-2.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-3.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ミュージックカードポイントを実行できる

## ケース 1
### 入力

#### 📝 プロンプト
```
ポスターの女の子は頻繁に服を着替えています。服装は@写真1 @写真2のスタイルを参考にしています。彼女は@写真3のバッグを持っています。ビデオのリズムは@ビデオを参考にしています。
```
#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-4.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-5.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-6.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
@写真1 @写真2 @写真3 @写真4 @写真5 @写真6 @写真7 写真内の写真は、@ビデオ内のキーフレームの位置と全体のリズムに従って貼り付けられています。絵の中の人物はよりダイナミックで、全体的な絵のスタイルはより夢のようで、絵の緊張感は強いです。音楽や映像のニーズに合わせて参照映像のシーンを変更し、映像内の光と影の変化を補うことができます。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-6.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-7.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-8.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
@写真 1@写真 2@写真 3@写真 4@写真 5@写真 6 の風景シーンの写真、@ビデオ内の写真のリズム、トランジション間の写真のスタイルと音楽のリズムを参照してポイントを作成します。
```

#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-6.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-7.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-8.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 4
### 入力

#### 📝 プロンプト
```
復讐をテーマにした8秒の知的なゲーム風の戦闘アニメーションクリップ。 0～3秒：コンテ1ではヒロインが振り返って座り、カメラを向けます。ヒロインが行動を起こし、「あなたの負けです」と言います。ストーリーボード 2 を参照してください。 3 ～ 4 秒: カメラを素早くパンして、反対側の男性のクローズアップに向きます。ストーリーボード 3 を参照してください。男性は歯を食いしばり、結果に非常に不満です。 4 ～ 6 秒: 俯瞰ショットにカットされ、女性が動き出し、反対側の人々が驚く。絵コンテ 4 を参照。 6 ～ 8 秒: カメラが素早くパンダウンし、画面が黒に移行し、その後徐々に画面が明るくなります。暗い部屋で、女性が窓の外の月明かりを見つめ、静かに「見てみましょう」と言います。絵コンテ 5 を参照。
```

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## 感情的な解釈の方が良い

## ケース 1
### 入力

#### 📝 プロンプト
```
ポスターの女の子は頻繁に服を着替えています。服装は@写真1 @写真2のスタイルを参考にしています。彼女は@写真3のバッグを持っています。ビデオのリズムは@ビデオを参考にしています。
```
#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-2.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-3.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 2
### 入力

#### 📝 プロンプト
```
ポスターの女の子は頻繁に服を着替えています。服装は@写真1 @写真2のスタイルを参考にしています。彼女は@写真3のバッグを持っています。ビデオのリズムは@ビデオを参考にしています。
```
#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-3.png" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-2-4.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*

## ケース 3
### 入力

#### 📝 プロンプト
```
ポスターの女の子は頻繁に服を着替えています。服装は@写真1 @写真2のスタイルを参考にしています。彼女は@写真3のバッグを持っています。ビデオのリズムは@ビデオを参考にしています。
```
#### 画像
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-4.png" alt="1" width="400" height="auto">

#### ビデオ
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" alt="1" width="400" height="auto">

### 出力
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" width="600"></a>

📥 *ビデオをダウンロードするにはGIF画像をクリックしてください*


# 🏁 最後に 2 つの言葉
Seedance 2.0 のマルチモーダル機能は常に進化しており、今後も機能を更新し、より多くの入力の組み合わせをサポートする予定です。このユーザーマニュアルがあなたの創造性をより自由に表現するのに役立つことを願っています。

バグが発生した場合、または使用上の提案やシナリオの要望がある場合は、メッセージを残すか、プライベート メッセージを送信するか、ドラムを叩いてお知らせください。私たちは今後も最適化を続け、協力して Jimeng を本当に幸せで便利にする生産性ツールに変えていきます ❤️
