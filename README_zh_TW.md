# 🎬 即夢 Seedance 2.0 使用手冊（全新多模態創作體驗）

[![English](https://img.shields.io/badge/English-Click-blue)](README.md) [![中文](https://img.shields.io/badge/中文-Click-blue)](README_zh.md) [![繁體中文](https://img.shields.io/badge/繁體中文-Current-brightgreen)](README_zh_TW.md) [![日本語](https://img.shields.io/badge/日本語-Click-blue)](README_ja.md) [![한국어](https://img.shields.io/badge/한국어-Click-blue)](README_ko.md) [![Español](https://img.shields.io/badge/Español-Click-blue)](README_es.md)

還記得從前只能用文字和首/尾幀「講故事」的日子嗎？我們一直夢想能做出一個真正聽得懂你表達的影片模型。今天，它終於來了！

即夢 Seedance 2.0 現在支援**影像、影片、音訊、文字**四種模態輸入，表達方式更豐富，生成過程也更精準可控。

你可以用一張圖定下畫面風格，用一段影片指定角色的動作和鏡頭變化，再用幾秒鐘的音訊帶起節奏氛圍……搭配提示詞，讓創作過程變得更自然、更高效，讓你搖身一變成為真正的「導演」。

在這次升級中，「**參考能力**」是最大的亮點：
- 📷 **參考影像：** 可精準還原畫面構圖與角色細節。
- 🎥 **參考影片：** 支援鏡頭語言、複雜動作節奏及創意特效的完美復刻。
- ⏱ **影片廷長：** 支援平滑廷長與銜接，可按用戶提示生成連續鏡頭。不僅是生成，還能「接著拍」。
- ✂️ **編輯能力增強：** 支援對既有影片進行角色更替、刪減或增加元素。

我們深知，影片創作不只是「生成」，更是對表達的極致控制。Seedance 2.0 不僅是多模態工具，更是一種全新的可控創作方式。

Seedance 2.0，多模態創作的新篇章。請大膽想像，剩下的交給它。

## 參數預覽

| 核心維度 | Seedance 2.0 |
| --- | --- |
| **圖片輸入與格式：** jpeg, png, webp, bmp, tiff, gif | ≤ 9 張 <br/> 大小：小於 30 MB |
| **影片輸入與格式：** mp4, mov | ≤ 3 個，總時長 [2, 15]s <br/> 大小：小於 50 MB <br/> 影片總像素數範圍：[480p (640×640) ~ 720p (834×1112)] |
| **音訊輸入與格式：** mp3, wav | ≤ 3 個，總時長不超過 15s <br/> 大小：小於 15MB |
| **文字輸入** | 自然語言 |
| **生成時長** | ≤ 15s，可自由選擇 4-15s |
| **聲音輸出** | 自帶音效/配樂 |
| **交互限制：** 目前支援的混合輸入總上限為 12 個檔案。建議優先上傳對畫面或節奏影響最大的素材，並合理分配不同模態的檔案數量。 |

## ⚠️ 溫馨提示：關於上傳寫實人臉素材的說明
由於平台合規要求，目前暫不支援上傳包含寫實真人臉部的素材（圖片和影片素材均不允許）。為保障用戶權益與生成安全，系統會自動攔截此類素材，上傳後將無法生成影片內容。

這意味著如果您上傳了真人照片（尤其是清晰可辨識的人臉），模型將無法處理對應的生成。我們理解這可能會帶來一些限制，但此舉是為了確保內容安全與平台規範運行。感謝大家的理解與配合！後續如有更新，我們會及時在文件中說明。

# 基礎能力顯著增強：更穩、更順、更像真的！ 

不只是多模態，Seedance 2.0 在基礎層面顯著增強，物理規律更合理、動作表現更自然流暢、指令理解更精準、風格保持更穩定，不僅能穩定完成複雜動作、連續運動等高難度生成任務，也讓整體影片效果更真實、更順滑，是一次底層能力的全面進化！


## Case 1

### Input

#### 📝 Prompt
```
女孩在優雅的曬衣服，曬完接着在桶裏拿出另一件，用力抖一抖衣服。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2

### Input

#### 📝 Prompt
```
畫裏面的人物心虛的表情，眼睛左右看了看探出畫框，快速的將手伸出畫框拿起可樂喝了一口，然後露出一臉滿足的表情，這時傳來腳步聲，畫中的人物趕緊將可樂放回原位，此時一位西部牛仔拿起杯子裏的可樂走了，最後鏡頭前推畫面慢慢變得純黑背景只有頂光照耀的罐裝可樂，畫面最下方出現藝術感字幕和旁白：“宜口可樂，不可不嘗！”
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3

### Input

#### 📝 Prompt
```
鏡頭小幅度拉遠（露出街頭全景）並跟隨女主移動，風吹拂着女主的裙襬，女主走在19世紀的倫敦大街上；女主走着走着右邊街道駛來一輛蒸汽機車，快速駛過女主身旁，風將女主的裙襬吹起，女主一臉震驚的趕忙用雙手向下捂住裙襬；背景音效爲走路聲，人羣聲，汽車聲等等
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4

### Input

#### 📝 Prompt
```
鏡頭跟隨黑衣男子快速逃亡，後面一羣人在追，鏡頭轉爲側面跟拍，人物驚慌撞倒路邊的水果攤爬起來繼續逃，人羣慌亂的聲音。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

# 多模態全面升級：影片創作進入「自由組合」時代！

## Seedance 2.0 多模態介紹

- **全面支援：** 支援上傳文字、圖片、影片、音訊，這些素材皆可作為主體或參考對象。
- **萬物皆可參考：** 你可以參考任何素材的動作、特效、形式、運鏡、人物、場景或聲音。只要提示詞描述清晰，模型就能夠精準理解。
- **Seedance 2.0 核心能力：** 強大的多模態參考能力（萬物皆可參考）+ 卓越的創意生成 + 精準的指令響應（理解力極佳）。
- **自然語言創作：** 只需用自然語言描述你想要的畫面和動作即可。請明確指出是「參考」還是「編輯」。素材較多時，建議檢查各個 @對象是否標記清晰，避免圖片、影片或角色順序混淆。

## 特殊使用方式（不設限，僅供參考）：
- 有首幀/尾幀圖？還想參考視頻動作？
 → 提示詞中寫清楚，如：“@圖1爲首幀，參考@視頻1的打鬥動作”
- 想延長一個已有的視頻？
 → 說明延長時間，如“將@視頻1延長 5s”，注意：此時選擇的生成時長應爲“新增部分”的時長（例如延長 5s，生成長度也選 5s
- 想融合多個視頻？
 → 提示詞中說明合成邏輯，如：“我要在@視頻1和@視頻2之間加一個場景，內容爲xxx”
- 沒音頻素材？可以直接參考視頻裏的聲音
- 想生成連續動作？
 → 可以在提示詞中加入連續性描述，如：“角色從跳躍直接過渡到翻滾，保持動作連貫流暢”@圖1@圖2@圖3...

## 那些過去棘手的影片製作難題，現在終於能輕鬆解決！
製作影片時總會遇到一些令人頭痛的問題：例如人臉走樣、動作不一致、影片廷長不自然、或是修改部分內容卻破壞了整體節奏。這次的多模態升級能將這些「陳年難題」一次解決。

### 一致性全面提升
您可能也遇過這些煩惱：畫面中人物前後長相不一、商品細節丟失、文字模糊、場景跳變、鏡頭風格無法統一等。這些創作中常見的一致性問題，在 2.0 中都能迎刃而解。
從人臉到服裝，再到文字細節，整體一致性更穩、更準。

## Case 1
### Input

#### 📝 Prompt
```
男人@圖片1下班後疲憊的走在走廊，腳步變緩，最後停在家門口，臉部特寫鏡頭，男人深呼吸，調整情緒，收起了負面情緒，變得輕鬆，然後特寫翻找出鑰匙，插入門鎖，進入家裏後，他的小女兒和一隻寵物狗，歡快的跑過來迎接擁抱，室內非常的溫馨，全程自然對話
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
將@視頻1中的女生換成戲曲花旦，場景在一個精美的舞臺上，參考@視頻1的運鏡和轉場效果，利用鏡頭匹配人物的動作，極致的舞臺美感，增強視覺衝擊力
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
參考 @視頻1的所有轉場和運鏡，一鏡到底，畫面以棋局爲起始，鏡頭左移，展示地板的黃色沙礫，鏡頭上移來到一個沙灘，沙灘上有足印，一個穿着白色素衣的女生在沙灘上漸行漸遠，鏡頭切到空中的俯拍視角，海水在沖刷（不要出現人物），無縫漸變轉場，沖刷的海浪變成飄動的窗簾，鏡頭拉遠，展示女孩的面部特寫，一鏡到底
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 提示詞
```
0-2秒畫面：快速四格閃切，紅、粉、紫、豹紋四款蝴蝶結依次定格，特寫緞面光澤與「chéri」品牌字樣。畫外音：「利用 Chéri 磁吸絲帶，展現無窮的唯美想像！」
3-6秒畫面：特寫銀色磁吸扣「喀噠」一聲吸合，再輕輕一拉分開，展示絲滑質感與便捷性。畫外音：「只需一秒鐘鎖定，完成你的專屬風格！」
7-12秒畫面：快速切換配戴場景：酒紅款別在大衣領口，通勤質感瞬間提升；粉色款綁在馬尾，甜美出街；紫色款繫在包帶，展現獨特高級感；豹紋款掛在西裝領口，盡顯時尚氣場。畫外音：「從大衣、包包到髮飾，打造多樣化且充滿個性的個人風格！」
13-15秒畫面：四款蝴蝶結並排陳列，品牌名「chéri，為您帶來即時的優雅之美！」
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
對@圖片2的包包進行商業化的攝像展示，包包的側面參考@圖片1，包包的表面材質參考@圖片3，要求將包包的細節均有所展示，背景音恢宏大氣
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 6
### Input

#### 📝 Prompt
```
把@圖片1作爲畫面的首幀圖，第一人稱視角，參考@視頻1的運鏡效果，上方場景參考@圖片2，左邊場景參考@圖片3，右邊場景參考@圖片4。
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 高難度/可控的運鏡和動作精準復刻 
以前想讓模型模仿電影裏的走位、運鏡或者複雜動作，要麼寫一堆細節提示詞，要麼乾脆做不到。而現在，只需要上傳一段參考視頻，就可以了

## Case 1
### Input

#### 📝 Prompt
```
參考@圖1的男人形象，他在@圖2的電梯中，完全參考@視頻1的所有運鏡效果還有主角的面部表情，主角在驚恐時希區柯克變焦，然後幾個環繞鏡頭展示電梯內視角，電梯門打開，跟隨鏡頭走出電梯，電梯外場景參考@圖片3，男人環顧四周，參考@視頻1用機械臂多角度跟隨人物的視線
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
參考@圖1的男人形象，他在@圖2的走廊中，完全參考@視頻1的所有運鏡效果，還有主角的面部表情，鏡頭跟隨主角在@圖2拐角奔跑，然後在@圖3的長廊裏，鏡頭從背面的跟隨視角，通過低視角環繞到主角正面；鏡頭再右搖90度拍攝@圖片4的分叉路口，急停後右搖180度，懟臉拍攝主角正面：主角氣喘吁吁，鏡頭跟隨主角的視角環顧四周，參考@視頻1裏急速的左右環繞運鏡展示場景，後拉到@圖片5的場景，繼續跟拍主角奔跑的側面視角
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

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
@圖片1的平板電腦作爲主體，運鏡參考@視頻1，推近到屏幕的特寫，鏡頭旋轉後平板反轉展示全貌，屏幕中的數據流一直在變化，周圍的環境逐漸變成科幻風格的數據空間
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
@圖片1的女星作爲主體，參考@視頻1的運鏡方式進行有節奏的推拉搖移，女星的動作也參考@視頻1中女子的舞蹈動作，在舞臺上活力十足地表演
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
參考@圖1@圖2長槍角色，@圖3@圖4雙刀角色，模仿@視頻1的動作，在@圖5的楓葉林中打鬥
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-5.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-6.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-7.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 6
### Input

#### 📝 Prompt
```
參考視頻1的人物動作，參考視頻2的環繞運鏡鏡頭語言，生成角色1和角色2的打鬥場面，打鬥發生在星夜中，打鬥的過程中有白色灰塵揚起，打鬥場面非常華麗，氣氛十分緊張。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 7
### Input

#### 📝 Prompt
```
參考視頻1的運鏡、畫面切換節奏，拿圖片1的紅色超跑進行復刻。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 創意模版 / 複雜特效精準復刻
不止能生圖寫故事，Seedance 2.0 還支持“照着模仿”——創意轉場、廣告成片、電影片段、複雜剪輯，只要你有參考圖或視頻，模型就能識別動作節奏、鏡頭語言、視覺結構，並精準復刻出來。不懂專業術語也沒關係，寫清楚你想參考的部分，比如“參考 @視頻1 的節奏和運鏡，@圖1 的角色造型”，模型就能高質量生成屬於你的版本。大膽試！它真的能做到

## Case 1
### Input

#### 📝 Prompt
```
將@視頻1的人物換成@圖片1，@圖片1爲首幀，人物帶上虛擬科幻眼鏡，參考@視頻1的運鏡，及近的環繞鏡頭，從第三人稱視角變成人物的主觀視角，在AI虛擬眼鏡中穿梭，來到@圖片2的深邃的藍色宇宙，出現幾架飛船穿梭向遠方，鏡頭跟隨飛船穿梭到@圖片3的像素世界，鏡頭低空飛過像素的山林世界，裏面的樹木生長形式出現，隨後視角仰拍，急速穿梭到@圖片4的淺綠色紋理的星球，鏡頭穿梭並掠過星球表面
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-5.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-6.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
參考第一張圖片裏模特的五官長相。模特分別穿着第2-6張參考圖裏的服裝湊近鏡頭，做出調皮、冷酷、可愛、驚訝、耍帥的造型，每一個造型穿着不同服裝，每次更換，畫面伴隨會切鏡，參考視頻的裏魚眼鏡頭效果、重影閃爍的炫影畫面效果，參考@視頻1的效果
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-7.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-8.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
參考視頻的廣告創意，用提供的羽絨服圖片，並參考鵝絨圖片、天鵝圖片，搭配以下廣告詞“這是根鵝絨，這是暖天鵝，這是能穿的極地天鵝絨羽絨服，新年穿得暖，生活過得暖”，生成新的羽絨服廣告視頻。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
黑白水墨風格，@圖片1的人物參考@視頻1的特效和動作，上演一段水墨太極功夫
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
將@視頻1的首幀人物替換成@圖片1，完全@參考視頻1的特效和動作，手裏的花蕊長出玫瑰花瓣，裂紋在臉部向上延伸，逐漸被雜草覆蓋，人物雙手拂過臉部，雜草變成粒子消散，最後變成@圖片2的長相
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 6
### Input

#### 📝 Prompt
```
由@圖片1的天花板開始，參考@視頻1的拼圖破碎效果進行轉場，“BELIEVE”字體替換成“Seedance”，參考@圖2的字體
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 7
### Input

#### 📝 Prompt
```
以黑幕開場，參考視頻1的粒子特效和材質，金色鎏金材質的沙礫從畫面左邊飄出並向右覆蓋，參考@視頻1的粒子吹散效果，@圖片1的字體逐漸出現在畫面中心
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 8
### Input

#### 📝 Prompt
```
@圖片1的人物參考@視頻1中的動作和表情變化，展示喫泡麪的抽象行爲
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 模型的創意性、劇情補全能力

## Case 1
### Input

#### 📝 Prompt
```
將@圖1以從左到右從上到下的順序進行漫畫演繹，保持人物說的臺詞與圖片上的一致，分鏡切換以及重點的情節演繹加入特殊音效，整體風格詼諧幽默；演繹方式參考@視頻1
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-1.jpg" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
參考@圖片1的專題片的分鏡頭腳本，參考@圖片1的分鏡、景別、運鏡、畫面和文案，創作一段15s的關於“童年的四季”的治癒系片頭
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
參考視頻1的音頻，根據圖1、圖2、圖3、圖4、圖5爲靈感，發散出一條情緒向的視頻。背景音樂參考@視頻1
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 視頻延長

## Case 1
### Input

#### 📝 Prompt
```
延長15s視頻，參考@圖片1、@圖片2的驢騎摩托車的形象，補充一段腦洞廣告
畫面1：側面固定鏡頭，驢騎着摩托車衝出棚欄，旁邊的雞受到驚嚇，
畫面2：驢騎着摩托在沙地盤旋，先特寫摩托輪胎，再切到半空中俯拍驢騎着摩托車做着盤旋特技，掀起煙霧
畫面3：背景是雪山鏡頭，驢騎着車從山坡飛越過，廣告語在主體背後，通過遮罩的形式（驢和摩托車飛過時）中間出現"Inspire Creativity,Enrich Life"，最後在摩托飛過，揚起一陣塵煙
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
將視頻延長6s，出現電吉他的激昂音樂，視頻中間出現“JUST DO IT”的廣告字體後逐漸淡化，鏡頭上移到天花板，一個健碩的男人拉着吊環，上半身穿着@圖1的緊身健身服，背面印有@圖2的“Fitness”logo，男人用健碩的上肢拉上吊環，隨後視頻中間出現“DO SOME SPORT”的廣告結束字體。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
將@視頻1延長15秒。1-5秒：光影透過百葉窗在木桌、杯身上緩緩滑過，樹枝伴隨着輕微呼吸般的晃動。6-10秒：一粒咖啡豆從畫面上方輕輕飄落，鏡頭向咖啡豆推進至畫面黑屏。11-15秒：英文漸顯第一行“Lucky Coffee ”，第二行“Breakfast”，第三行“AM 7:00-10:00”。
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
向前延長10s，溫暖的午後光線裏，鏡頭先從街角那排被微風掀動的遮陽篷開始，慢慢下移到牆根處幾株探出頭的小雛菊。緊接着，畫面裏出現主人公的紅色板鞋，他正蹲在街邊花攤前，笑着把一大捧向日葵攏進懷裏，花瓣蹭過他的白 T 恤。他轉身踏上滑板時，花攤老闆笑着喊了句 “小心花瓣飛啦！”，他衝老闆揮了揮手，然後纔開始滑行，幾片金黃的花瓣已經先一步從花束裏掙脫出來，落在了滑板的板面。
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 音色更準，聲音更真

## Case 1
### Input

#### 📝 Prompt
```
固定鏡頭，中央魚眼鏡頭透過圓形孔洞向下窺視，參考視頻1的魚眼鏡頭，讓@視頻2中的馬看向魚眼鏡頭，參考@視頻1中的說話動作，背景BGM參考@視頻3中的音效。
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-1.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-2.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
根據提供的寫字樓宣傳照，生成一段15秒電影級寫實風格的地產紀錄片，採用2.35:1寬銀幕，24fps，細膩的畫面風格，其中旁白的音色參考@視頻1，拍攝 “寫字樓的生態”，呈現樓內不同企業的運作，結合旁白闡述寫字樓如何成爲一個充滿活力的商業生態系統.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
在“貓狗吐槽間”裏的一段吐槽對話，要求情感豐沛，符合脫口秀表演：
喵醬（貓主持，舔毛翻眼）："家人們誰懂啊，我身邊這位，每天除了搖尾巴、拆沙發，就只會用那種“我超乖求摸摸”的眼神騙人類零食，明明拆家的時候比誰都兇，還好意思叫旺仔，我看叫“旺拆”還差不多哈哈哈“
旺仔（狗主持，歪頭晃尾巴）："你還好意思說我？你每天睡18個小時，醒了就蹭人類腿要罐頭，掉毛掉得人類黑衣服上全是你的毛，人家掃完地，你轉身又在沙發上滾一圈，還好意思裝高冷貴族？"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-3-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
豫劇經前橋段《鍘美案》的伴奏響起，左側的黑衣包拯指着右側的紅衣陳世美，咬牙切齒地唱着豫劇：“刀對鞘，真憑實據你敢不招？” 陳世美的眼珠左右滴溜溜亂轉，尋找着權宜之策，面色窘迫至極。此時，畫面外傳來一聲豫劇旦角的唸白：“且慢！”包拯和陳世美一齊向畫面右側看去。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
生成一個15秒的MV視頻。關鍵詞：穩重構圖 / 輕推拉 / 低角度英雄感 / 紀實但高級A超廣角建立鏡頭，低機位輕微仰拍，懸崖土路與復古旅行車佔畫面下三分之一，遠處海面與地平線拉開空間，夕陽側逆光體積光穿過塵粒，電影級構圖，真實膠片顆粒，微風吹動衣角。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-5-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 6
### Input

#### 📝 Prompt
```
畫面中間戴帽子的女孩溫柔地唱着說"I'm so proud of my family!"，之後轉身擁抱中間的黑人女孩。黑人女孩感動地回應"My sweetie, you're the heart of our family"，回抱她。左側的黃衣服男孩開心地說"Folks, let's dance together to celebrate!” 最右側的女孩緊接着回覆： “I'll bring the music!"，背景拉美音樂響起，左側穿橙色裙的女性（朱麗葉塔）笑着點頭，右側扎辮女性（路易莎）握緊拳頭揮動手臂。人羣中有人開始踏起步子，孩子們跟着節奏拍手，整個家族即將圍成圈，伴着歡快的音樂，裙襬飛揚，在五彩的街道上盡情舞動，傳遞着喜悅與溫暖。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-6-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 7
### Input

#### 📝 Prompt
```
固定鏡頭。站着的壯漢（隊長）握拳揮臂用西班牙語說着：“三分鐘後突襲！”，金髮隊員站在檢查槍械，綠髮隊員握緊戰術手電。黑人隊員搭肩問同伴用西班牙語說：“側翼包抄？”隊長點頭用西班牙語說：“老規矩，活口留審訊。”全員肅然，裝備碰撞聲中完成戰術手勢，默契起身，大家都嚴陣以待，左側兩個男生也爭先站起來準備戰鬥。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-7-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 8
### Input

#### 📝 Prompt
```
0-3秒：開頭鬧鐘響起來，畫面朦朧中出現畫面1； 
3-10秒：快速搖鏡頭，轉向對面特寫男人面部，男人無奈的叫女生起牀，語氣和音色參考@視頻1； 
10-12秒：女生撅着嘴躲進被子裏面； 
12-15秒：切換到男主全身，他嘆着氣說：”真拿你沒辦法！“
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 9
### Input

#### 📝 Prompt
```
@圖片1的猴子走向奶茶店櫃檯，鏡頭跟隨在他身後，一位@圖片2的比熊服務員正在吧檯處擦拭製作工具，猴子向服務員用四川口音點單：“幺妹兒，霸王別姬有得沒得？”
切鏡，特寫。
服務員放下手裏的活，怪異地看了老頭一眼後回答：“沒得，美式要不要得嘛”
切鏡，鏡頭給到猴子。
他撓了撓頭唸唸有詞：“沒事……？我有事！孫兒叫我來買個奶茶，就叫個撒子霸王別姬嘛”
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-9-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 10
### Input

#### 📝 Prompt
```
用科普風格和音色，將圖片1中的內容演繹出來，內容包括悟空爲過火焰山，到翠雲山向鐵扇公主借芭蕉扇。鐵扇公主因紅孩兒被悟空降伏拜觀音爲童子，母子分離，不肯借扇還欲報仇。悟空好言相勸無果，二人隨即起了爭執的小故事進行講解。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-1.jpg" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-10-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 鏡頭連貫性（一鏡到底）更強

## Case 1
### Input

#### 📝 Prompt
```
@圖片1@圖片2@圖片3@圖片4@圖片5，一鏡到底的追蹤鏡頭，從街頭跟隨跑步者上樓梯、穿過走廊、進入屋頂，最終俯瞰城市。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
以@圖片1爲首幀，畫面放大至飛機舷窗外，一團團雲朵緩緩飄至畫面中，其中一朵爲彩色糖豆點綴的雲朵，始終在畫面中居中，然後緩緩變形爲@圖片2的冰淇淋，鏡頭推遠回到機艙內，坐在窗邊的@圖片3伸手從窗外拿進冰淇淋，喫了一口，嘴巴上沾滿奶油，臉上洋溢出甜蜜的笑容
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-2-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
諜戰片風格，@圖片1作爲首幀畫面，鏡頭正面跟拍穿着紅風衣的女特工向前走，鏡頭全景跟隨，不斷有路人遮擋紅衣女子，走到一個拐角處，參考@圖片2的拐角建築，固定鏡頭紅衣女子離開畫面，走在拐角處消失，一個戴面具的女孩在拐角處躲着惡狠狠的盯着她，面具女孩形象參考@圖片3，只參考形象，女孩站在拐角處。鏡頭往前搖向紅衣女特工，她走進一座豪宅消失不見了，豪宅參考@圖片4。全程不要切鏡頭，一鏡到底。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
根據@圖片1外景的鏡頭，第一人稱主觀視角快推鏡頭到木屋內的環境場景近景，一隻小鹿@圖片2和一隻羊@圖片3在圍爐旁喝茶聊天，鏡頭推進特寫茶杯的樣式參考@圖片4.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-4-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
@圖片1@圖片2@圖片3@圖片4@圖片5，主觀視角一鏡到底的驚險過山車的鏡頭，過山車的速度越來越快。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-5.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-5-6.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 視頻編輯可用度高
有時候你已經有了一段視頻，不想從頭再找圖或重做一遍，只是希望調整其中一小段動作、延長幾秒鐘，或讓角色表現更貼近你的想法。現在你可以直接用已有視頻作爲輸入，在不改變其它內容的前提下，指定片段、動作或節奏進行定向修改。無需重頭生成，也能快速完成調整

## Case 1
### Input

#### 📝 Prompt
```
顛覆@視頻1裏的劇情，男人眼神從溫柔瞬間轉爲冰冷狠厲，在女主毫無防備的瞬間，猛地將女主從橋上往外推，把女主推進水裏。動作乾脆利落，帶着蓄謀已久的決絕，沒有絲毫猶豫，徹底顛覆原有的深情人物設定。女主墜入水中的瞬間，沒有尖叫，只有難以置信的眼神，她抬頭衝男主嘶吼：“你從一開始就在騙我！”男主站在橋上上，臉上露出陰冷的笑容，對着水面低聲說：“這是你欠我家族的。”
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
顛覆@視頻1的整個劇情
0–3秒畫面：西裝男坐在酒吧，神情冷靜，手裏輕晃酒杯。 鏡頭緩慢推進，光影高級、氛圍嚴肅。 環境音低沉，西裝男小聲說“這單生意，很大。”
3–6秒畫面：身後的女人表情緊張問“有多大？”西裝男抬眼，壓低聲音：“非常大。”鏡頭切手部特寫——他把酒杯放下，氣場拉滿。
6–9秒畫面：突然西裝男從桌下掏出—— 一大包體積誇張的零食禮包，“咚”的一聲重重放在桌上。
9–12秒畫面：身後的女人原本放在腰間的手，肌肉從僵硬到鬆弛，整個人表情放鬆。畫面氛圍輕鬆起來。
13–15秒畫面：西裝男拿出一包零食給女人，鏡頭拉遠展示酒館全景，畫面變得透明模糊—— 字幕彈出“再忙，也要記得喫點零食~”
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
視頻1中的女主唱換成圖片1的男主唱，動作完全模仿原視頻，不要出現切鏡，樂隊演唱音樂。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
將視頻1女人髮型變成紅色長髮，圖片1中的大白鯊緩緩浮出半個腦袋，在她身後。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 5
### Input

#### 📝 Prompt
```
視頻1鏡頭右搖，炸雞老闆忙碌地將炸雞遞給排隊的客戶，用普通話說“做完他的，做你的，大家文明排隊。”一說完，就去拿紙袋子去裝炸雞。特寫展示老闆拿印有圖1的紙袋子，特寫展示遞給客戶的手部特寫。
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-3.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 可進行音樂卡點

## Case 1
### Input

#### 📝 Prompt
```
海報中的女生在不停的換裝，服裝參考@圖片1@圖片2的樣式，手中提着@圖片3的包，視頻節奏參考@視頻
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-5.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-6.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
@圖片1@圖片2@圖片3@圖片4@圖片5@圖片6@圖片7中的圖片根據@視頻中的畫面關鍵幀的位置和整體節奏進行卡點，畫面中的人物更有動感，整體畫面風格更夢幻，畫面張力強，可根據音樂及畫面需求自行改變參考圖的景別，及補充畫面的光影變化
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-7.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-8.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
@圖片1@圖片2@圖片3@圖片4@圖片5@圖片6的風光場景圖，參考@視頻中的畫面節奏，轉場間畫面風格及音樂節奏進行卡點
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-7.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-8.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 4
### Input

#### 📝 Prompt
```
8秒智性博弈式戰鬥動漫片段，貼合復仇主題。0-3秒：分鏡圖1中女主轉身坐下，轉鏡頭，女主下了一步棋子，並說“你輸了”，參考分鏡圖2。3-4秒：快速搖鏡頭，轉向對面男人面部特寫，參考分鏡圖3，男人咬牙切齒，對結果很不滿。4-6秒：切鏡頭，俯拍，女人下了一步棋，對面的人們驚歎，參考分鏡圖4。6-8秒：鏡頭迅速向下搖，畫面黑屏轉場，後畫面漸亮，昏暗室內，女人看着窗外月色靜靜地說“我們走着瞧”，參考分鏡圖5。
```

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## 情緒演繹更好

## Case 1
### Input

#### 📝 Prompt
```
海報中的女生在不停的換裝，服裝參考@圖片1@圖片2的樣式，手中提着@圖片3的包，視頻節奏參考@視頻
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 2
### Input

#### 📝 Prompt
```
海報中的女生在不停的換裝，服裝參考@圖片1@圖片2的樣式，手中提着@圖片3的包，視頻節奏參考@視頻
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-2-4.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*

## Case 3
### Input

#### 📝 Prompt
```
海報中的女生在不停的換裝，服裝參考@圖片1@圖片2的樣式，手中提着@圖片3的包，視頻節奏參考@視頻
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" width="600"></a>

📥 *點擊 Gif 圖片下載視頻*


# 🏁 最後說兩句
Seedance 2.0 的多模態能力正處於不斷進化中，我們會持續更新能力、支持更多種輸入組合方式。希望這份使用手冊能幫你更自由地發揮創意！

如果你遇到了 Bug，或者有用法建議、需求場景，歡迎留言、私信、敲鑼打鼓告訴我們！我們會持續優化，一起把即夢變成真正讓你們開心、方便的生產力工具 ❤️
