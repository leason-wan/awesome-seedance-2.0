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
女孩在优雅的晒衣服，晒完接着在桶里拿出另一件，用力抖一抖衣服。

#### Image
<img src="https://github.com/leason-wan/seedance-prompt/releases/download/test/1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/seedance-prompt/releases/download/video-assets/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600" alt="KTV Flirt POV Video Prompt: Girl Removing High Heel"></a>

📥 *点击图片下载视频*

## Case 2

### Input

#### 📝 Prompt
画里面的人物心虚的表情，眼睛左右看了看探出画框，快速的将手伸出画框拿起可乐喝了一口，然后露出一脸满足的表情，这时传来脚步声，画中的人物赶紧将可乐放回原位，此时一位西部牛仔拿起杯子里的可乐走了，最后镜头前推画面慢慢变得纯黑背景只有顶光照耀的罐装可乐，画面最下方出现艺术感字幕和旁白：“宜口可乐，不可不尝！”

#### Image
<img src="https://private-user-images.githubusercontent.com/26791952/555245137-b3704642-f2ce-40fc-8af5-e779d336e525.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIwOTQwOTUsIm5iZiI6MTc3MjA5Mzc5NSwicGF0aCI6Ii8yNjc5MTk1Mi81NTUyNDUxMzctYjM3MDQ2NDItZjJjZS00MGZjLThhZjUtZTc3OWQzMzZlNTI1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjI2VDA4MTYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5MDZjMDVlZTgxMmU1N2UxZmVjODdmYTY4OGY2MjRkYWNmNmVmMjliMTY3M2ZmY2ZjM2UxMjI5ZmIwZDZjYzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.3l6M76STrYjGxTBPsHoRERoGESrP2TMrP6k2ouePrFk" alt="1" width="400" height="auto">

### Output
https://github.com/user-attachments/assets/68e69cef-71de-427e-9988-85629c60e31c

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
#### Prompt
男人@图片1下班后疲惫的走在走廊，脚步变缓，最后停在家门口，脸部特写镜头，男人深呼吸，调整情绪，收起了负面情绪，变得轻松，然后特写翻找出钥匙，插入门锁，进入家里后，他的小女儿和一只宠物狗，欢快的跑过来迎接拥抱，室内非常的温馨，全程自然对话

#### Image
<img src="https://cdn.weniai.com/seedance/2-1-1.png" alt="1" width="400" height="auto">

### Output
<video 
  src="https://cdn.weniai.com/seedance/2-1-2.mp4" 
  controls 
  width="800" 
  style="max-width: 100%;"
>
  你的浏览器不支持 HTML5 视频播放，请更新浏览器后重试。
</video>

## Case 2
### Input
#### Prompt
将@视频1中的女生换成戏曲花旦，场景在一个精美的舞台上，参考@视频1的运镜和转场效果，利用镜头匹配人物的动作，极致的舞台美感，增强视觉冲击力

#### Video
<video 
  src="https://cdn.weniai.com/seedance/2-2-1.mp4" 
  controls 
  width="800" 
  style="max-width: 100%;"
>
  你的浏览器不支持 HTML5 视频播放，请更新浏览器后重试。
</video>

### Output
<video 
  src="https://cdn.weniai.com/seedance/2-2-2.mp4" 
  controls 
  width="800" 
  style="max-width: 100%;"
>
  你的浏览器不支持 HTML5 视频播放，请更新浏览器后重试。
</video>


# 🏁 最后说两句
Seedance 2.0 的多模态能力正处于不断进化中，我们会持续更新能力、支持更多种输入组合方式。希望这份使用手册能帮你更自由地发挥创意！

如果你遇到了 Bug，或者有用法建议、需求场景，欢迎留言、私信、敲锣打鼓告诉我们！我们会持续优化，一起把即梦变成真正让你们开心、方便的生产力工具 ❤️
