# 🎬 即梦 Seedance 2.0 使用手册（全新多模态创作体验）

还记得从只能用文字和首/尾帧「讲故事」的那天起，我们就想做出一个真正听得懂你表达的视频模型。今天，它真的来了！

    即梦Seedance 2.0 现在支持图像、视频、音频、文本四种模态输入，表达方式更丰富，生成也更可控

你可以用一张图定下画面风格，用一个视频指定角色的动作和镜头的变化，再用几秒音频带起节奏氛围……搭配提示词，让创作过程变得更自然、更高效，也更像真正的“导演”。

这次升级中，“参考能力”是最大亮点：
- 📷 参考图像可精准还原画面构图、角色细节
- 🎥 参考视频支持镜头语言、复杂的动作节奏、创意特效的复刻
- ⏱ 视频支持平滑延长与衔接，可按用户提示生成连续镜头，不止生成，还能“接着拍”
- ✂️ 编辑能力同步增强，支持对已有视频进行角色更替、删减、增加

我们知道，视频创作从来不仅是“生成”，更是对表达的控制。2.0 不只是多模态，更是一种真正可控的创作方式

    Seedance 2.0，多模态创作，从这里启程。请你们大胆想象，其余的交给它

## 参数预览

|核心维度| Seedance 2.0 |
| --- | --- |
| 图片输入&格式：jpeg、png、webp、bmp、tiff、gif | ≤ 9 张 <br/> 大小：小于 30 MB |
| 视频输入&格式: mp4、mov | ≤ 3 个，总时长［2,15］s <br/> 大小：小于 50 MB<br/> 视频总像素数范围：[409600（640×640,480p）， 927408（834×1112,720p）] |
| 音频输入&格式：mp3、wav | ≤ 3 个，总时长不超过15s<br/> 大小：小于 15MB  |
| 文本输入 | 自然语言 |
| 生成时长 | ≤ 15s，可自由选择4-15s |
| 声音输出 | 自带音效/配乐 |
| 交互限制：目前支持的混合输入总上限是 12 个文件。建议优先上传对画面或节奏影响最大的素材，合理分配不同模态的文件数量  |

## ⚠️温馨提示：关于上传写实人脸素材的说明
由于平台合规要求，目前暂不支持上传包含写实真人脸部的素材（图片和视频素材均不行）。为保障用户权益与生成安全，系统会自动拦截此类素材，上传后将无法生成视频内容。
这意味着如果你上传了真人照片（尤其是清晰可辨识的人脸），模型将无法处理对应生成。
我们理解这可能会带来一些限制，但这一措施是为了确保内容安全和平台规范运行。感谢大家的理解与配合！后续如果有update我们会及时在文档里更新，再次感谢理解～

# 基础能力显著增强：更稳、更顺、更像真的！ 

不只是多模态，Seedance 2.0 在基础层面显著增强，物理规律更合理、动作表现更自然流畅、指令理解更精准、风格保持更稳定，不仅能稳定完成复杂动作、连续运动等高难度生成任务，也让整体视频效果更真实、更顺滑，是一次底层能力的全面进化！


## Case 1

### Input

#### 📝 Prompt
```
女孩在优雅的晒衣服，晒完接着在桶里拿出另一件，用力抖一抖衣服。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 2

### Input

#### 📝 Prompt
```
画里面的人物心虚的表情，眼睛左右看了看探出画框，快速的将手伸出画框拿起可乐喝了一口，然后露出一脸满足的表情，这时传来脚步声，画中的人物赶紧将可乐放回原位，此时一位西部牛仔拿起杯子里的可乐走了，最后镜头前推画面慢慢变得纯黑背景只有顶光照耀的罐装可乐，画面最下方出现艺术感字幕和旁白：“宜口可乐，不可不尝！”
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 3

### Input

#### 📝 Prompt
```
镜头小幅度拉远（露出街头全景）并跟随女主移动，风吹拂着女主的裙摆，女主走在19世纪的伦敦大街上；女主走着走着右边街道驶来一辆蒸汽机车，快速驶过女主身旁，风将女主的裙摆吹起，女主一脸震惊的赶忙用双手向下捂住裙摆；背景音效为走路声，人群声，汽车声等等
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 4

### Input

#### 📝 Prompt
```
镜头跟随黑衣男子快速逃亡，后面一群人在追，镜头转为侧面跟拍，人物惊慌撞倒路边的水果摊爬起来继续逃，人群慌乱的声音。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

# 多模态全面升级：视频创作进入“自由组合”时代！

## Seedance 2.0 多模态介绍

- 支持上传文本、图片、视频、音频，这些素材都可以被用作使用对象或参考对象。你可以参考任何内容的动作、特效、形式、运镜、人物、场景、声音，只要提示词写得清楚，模型都能理解。
- Seedance 2.0 = 多模态参考能力（可参考万物） + 强创意生成 + 指令响应精准（理解力很棒）
- 用自然语言描述你想要的画面和动作就可以啦，明确是参考，还是编辑～素材多的时候，建议你多检查一下各个 @对象有没有标清楚，别把图、视频、角色搞混了哦

## 特殊使用方式（不设限，仅供参考）：
- 有首帧/尾帧图？还想参考视频动作？
 → 提示词中写清楚，如：“@图1为首帧，参考@视频1的打斗动作”
- 想延长一个已有的视频？
 → 说明延长时间，如“将@视频1延长 5s”，注意：此时选择的生成时长应为“新增部分”的时长（例如延长 5s，生成长度也选 5s
- 想融合多个视频？
 → 提示词中说明合成逻辑，如：“我要在@视频1和@视频2之间加一个场景，内容为xxx”
- 没音频素材？可以直接参考视频里的声音
- 想生成连续动作？
 → 可以在提示词中加入连续性描述，如：“角色从跳跃直接过渡到翻滚，保持动作连贯流畅”@图1@图2@图3...

## 那些一直很难做的视频问题，现在真的能搞定了！
做视频总会碰到一些让人头疼的地方：比如人脸换了、动作不像、视频延长不自然、改着改着整个节奏都变了……这次多模态能把这些“老大难”问题一口气解决了，下面就是具体的使用案例👇

### 一致性全面提升 
你可能遇到过这些烦恼：画面里人物前后长得不一样、商品细节丢了、小字模糊、场景跳变、镜头风格无法统一……这些在创作中常见的一致性问题，现在在 2.0 中
都能被解决。从人脸到服装，再到字体细节，整体一致性更稳、更准

## Case 1
### Input

#### 📝 Prompt
```
男人@图片1下班后疲惫的走在走廊，脚步变缓，最后停在家门口，脸部特写镜头，男人深呼吸，调整情绪，收起了负面情绪，变得轻松，然后特写翻找出钥匙，插入门锁，进入家里后，他的小女儿和一只宠物狗，欢快的跑过来迎接拥抱，室内非常的温馨，全程自然对话
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 2
### Input

#### 📝 Prompt
```
将@视频1中的女生换成戏曲花旦，场景在一个精美的舞台上，参考@视频1的运镜和转场效果，利用镜头匹配人物的动作，极致的舞台美感，增强视觉冲击力
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 3
### Input

#### 📝 Prompt
```
参考 @视频1的所有转场和运镜，一镜到底，画面以棋局为起始，镜头左移，展示地板的黄色沙砾，镜头上移来到一个沙滩，沙滩上有足印，一个穿着白色素衣的女生在沙滩上渐行渐远，镜头切到空中的俯拍视角，海水在冲刷（不要出现人物），无缝渐变转场，冲刷的海浪变成飘动的窗帘，镜头拉远，展示女孩的面部特写，一镜到底
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 4
### Input

#### 📝 Prompt
```
0-2秒画面：快速四格闪切，红、粉、紫、豹纹四款蝴蝶结依次定格，特写缎面光泽与 “chéri” 品牌字样。画外音“Chéri 자석 리본으로 무궁무진한 아름다움을 연출해 보세요!”  
3-6秒画面：特写银色磁吸扣 “咔嗒” 吸合，再轻轻一拉分开，展示丝滑质感与便捷性。画外音“단 1초 만에 잠그고, 최고의 스타일을 완성하세요!”  
7-12 秒画面：快速切换佩戴场景：酒红款别在大衣领口，通勤氛围感拉满；粉色款绑在马尾，甜妹出街；紫色款系在包带，小众高级；豹纹款挂在西装领，辣妹气场全开。画外音“코트, 가방, 헤어 액세서리까지, 다재다능하고 개성 넘치는 스타일을 완성하세요!”  
13-15秒画面：四款蝴蝶结并排陈列，品牌名 “chéri, 당신에게 즉각적인 아름다움을 선사합니다!”
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 5
### Input

#### 📝 Prompt
```
对@图片2的包包进行商业化的摄像展示，包包的侧面参考@图片1，包包的表面材质参考@图片3，要求将包包的细节均有所展示，背景音恢宏大气
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## Case 6
### Input

#### 📝 Prompt
```
把@图片1作为画面的首帧图，第一人称视角，参考@视频1的运镜效果，上方场景参考@图片2，左边场景参考@图片3，右边场景参考@图片4。
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *点击 Gif 图片下载视频*

## 高难度/可控的运镜和动作精准复刻 
以前想让模型模仿电影里的走位、运镜或者复杂动作，要么写一堆细节提示词，要么干脆做不到。而现在，只需要上传一段参考视频，就可以了

## Case 1
### Input

#### 📝 Prompt
```
参考@图1的男人形象，他在@图2的电梯中，完全参考@视频1的所有运镜效果还有主角的面部表情，主角在惊恐时希区柯克变焦，然后几个环绕镜头展示电梯内视角，电梯门打开，跟随镜头走出电梯，电梯外场景参考@图片3，男人环顾四周，参考@视频1用机械臂多角度跟随人物的视线
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

## Case 2
### Input

#### 📝 Prompt
```
参考@图1的男人形象，他在@图2的走廊中，完全参考@视频1的所有运镜效果，还有主角的面部表情，镜头跟随主角在@图2拐角奔跑，然后在@图3的长廊里，镜头从背面的跟随视角，通过低视角环绕到主角正面；镜头再右摇90度拍摄@图片4的分叉路口，急停后右摇180度，怼脸拍摄主角正面：主角气喘吁吁，镜头跟随主角的视角环顾四周，参考@视频1里急速的左右环绕运镜展示场景，后拉到@图片5的场景，继续跟拍主角奔跑的侧面视角
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-5.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-6.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-7.gif" width="600"></a>

## Case 3
### Input

#### 📝 Prompt
```
@图片1的平板电脑作为主体，运镜参考@视频1，推近到屏幕的特写，镜头旋转后平板反转展示全貌，屏幕中的数据流一直在变化，周围的环境逐渐变成科幻风格的数据空间
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

## Case 4
### Input

#### 📝 Prompt
```
@图片1的女星作为主体，参考@视频1的运镜方式进行有节奏的推拉摇移，女星的动作也参考@视频1中女子的舞蹈动作，在舞台上活力十足地表演
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

## Case 5
### Input

#### 📝 Prompt
```
参考@图1@图2长枪角色，@图3@图4双刀角色，模仿@视频1的动作，在@图5的枫叶林中打斗
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-5.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-6.gif" width="600"></a>

## Case 6
### Input

#### 📝 Prompt
```
参考视频1的人物动作，参考视频2的环绕运镜镜头语言，生成角色1和角色2的打斗场面，打斗发生在星夜中，打斗的过程中有白色灰尘扬起，打斗场面非常华丽，气氛十分紧张。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

## Case 7
### Input

#### 📝 Prompt
```
参考视频1的运镜、画面切换节奏，拿图片1的红色超跑进行复刻。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>


# 🏁 最后说两句
Seedance 2.0 的多模态能力正处于不断进化中，我们会持续更新能力、支持更多种输入组合方式。希望这份使用手册能帮你更自由地发挥创意！

如果你遇到了 Bug，或者有用法建议、需求场景，欢迎留言、私信、敲锣打鼓告诉我们！我们会持续优化，一起把即梦变成真正让你们开心、方便的生产力工具 ❤️
