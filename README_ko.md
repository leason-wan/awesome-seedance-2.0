# 🎬 Jimeng Seedance 2.0 사용자 매뉴얼 (멀티모달 창작의 새로운 경험)

[![English](https://img.shields.io/badge/English-Click-blue)](README.md) [![中文](https://img.shields.io/badge/中文-Click-blue)](README_zh.md) [![繁體中文](https://img.shields.io/badge/繁體中文-Click-blue)](README_zh_TW.md) [![日本語](https://img.shields.io/badge/日本語-Click-blue)](README_ja.md) [![한국어](https://img.shields.io/badge/한국어-Current-brightgreen)](README_ko.md) [![Español](https://img.shields.io/badge/Español-Click-blue)](README_es.md)

텍스트와 고정 프레임만으로 '이야기'를 전달해야 했던 한계를 넘어, 우리는 사용자의 의도를 완벽하게 이해하는 비디오 모델을 꿈꿔왔습니다. 그리고 드디어 오늘, 그 결실을 여러분께 선보입니다!

Jimeng Seedance 2.0은 이제 **이미지, 비디오, 오디오, 텍스트**의 네 가지 입력 방식을 지원하며, 더욱 풍부한 표현력과 정교한 제어 기능을 제공합니다.

이미지로 스타일을 설정하고, 비디오로 캐릭터의 움직임과 구도를 지정하며, 오디오 클립으로 리듬과 분위기까지—직관적인 프롬프트와 결합된 이 모든 과정은 창작을 더욱 자연스럽고 효율적으로 만들며, 여러분을 마치 실제 '감독'처럼 만들어줄 것입니다.

이번 업그레이드에서 가장 주목해야 할 점은 **"참조 능력(Reference Capabilities)"**입니다:
- 📷 **이미지 참조:** 이미지의 구도와 캐릭터의 디테일을 정교하게 복원합니다.
- 🎥 **비디오 참조:** 복잡한 연출 기법, 액션 리듬, 창의적인 특수 효과를 완벽하게 재현합니다.
- ⏱ **비디오 연장:** 자연스러운 확장과 연결을 지원합니다. 단순한 생성을 넘어선 '연속 촬영'의 경험을 제공합니다.
- ✂️ **편집 능력 강화:** 기존 영상 내 캐릭터 교체, 요소 삭제 및 추가 기능을 지원합니다.

비디오 제작은 단순한 '생성'이 아닙니다. 그것은 자신의 감정과 아이디어를 얼마나 통제하느냐의 문제입니다. Seedance 2.0은 진정한 의미의 멀티모달 제어형 창작 도구입니다.

Seedance 2.0과 함께하는 멀티모달 창작, 지금 바로 시작됩니다. 마음껏 상상하세요. 나머지는 저희에게 맡겨주십시오.

## 주요 사양 가이드

| 핵심 사양 | Seedance 2.0 |
| --- | --- |
| **이미지 입력 및 형식:** jpeg, png, webp, bmp, tiff, gif | 최대 9장 <br/> 크기: 30MB 미만 |
| **비디오 입력 및 형식:** mp4, mov | 최대 3개, 총 2~15초 <br/> 크기: 50MB 미만 <br/> 해상도 범위: [480p(640×640) ~ 720p(834×1112)] |
| **오디오 입력 및 형식:** mp3, wav | 최대 3개, 총 15초 이내 <br/> 크기: 15MB 미만 |
| **텍스트 입력** | 자연어 |
| **생성 시간** | 4~15초 (자유 선택 가능) |
| **사운드 출력** | 효과음/사운드트랙 포함 생성 |
| **입력 제한:** 현재 최대 12개의 파일 혼합 업로드를 지원합니다. 결과물에 가장 큰 영향을 미치는 요소를 우선 업로드하고 파일 수를 적절히 배분하는 것을 권장합니다. |

## ⚠️ 중요: 인물 실사 업로드 관련 지침
플랫폼 규정 준수에 따라, 실제 인물의 얼굴이 포함된 자료(이미지 및 비디오 모두 포함) 업로드는 현재 제한됩니다. 사용자의 권익 보호와 안전한 생성 환경 조성을 위해 시스템이 이를 자동으로 감지하며, 해당 자료 업로드 시 영상 생성이 진행되지 않습니다.

식별 가능한 실제 인물의 얼굴이 포함된 이미지를 업로드할 경우 모델이 이를 처리할 수 없음을 양해 부탁드립니다. 이는 콘텐츠 보안과 플랫폼의 안정적인 운영을 위한 조치입니다. 향후 정책 변경 시 본 문서를 통해 신속히 안내해 드리겠습니다.

# 기본 능력이 크게 향상되었습니다. 더욱 안정적이고, 부드러워지고, 현실감이 더해졌습니다!

멀티모달뿐만 아니라 Seedance 2.0은 기본 수준에서도 크게 향상되었습니다. 물리적 법칙이 더 합리적이고, 액션 수행이 더 자연스럽고 매끄럽고, 명령 이해가 더 정확하며, 스타일이 더 안정적으로 유지됩니다. 복잡한 동작, 연속 동작 및 기타 어려운 생성 작업을 안정적으로 완료할 수 있을 뿐만 아니라 전반적인 비디오 효과를 더욱 현실적이고 부드럽게 만들 수 있습니다. 이는 기본 기능의 포괄적인 진화입니다!


## 사례 1

### 입력

#### 📝 프롬프트
```
The girl was drying her clothes elegantly. After drying, she took out another piece in the bucket and shook the clothes vigorously.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2

### 입력

#### 📝 프롬프트
```
The character in the painting has a guilty expression. He looks left and right and looks out of the frame. He quickly reaches out of the frame to pick up the Coke and takes a sip. Then he shows a satisfied expression. At this time, footsteps are heard and the character in the painting quickly puts the Coke back. At this time, a western cowboy picks up the Coke in the cup and walks away. Finally, the camera moves forward and the picture slowly changes to a pure black background with only the canned Coke illuminated by the top light. Artistic subtitles and narration appear at the bottom of the picture: "Yikou Cola, you must try it!"
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3

### 입력

#### 📝 프롬프트
```
The camera zooms out slightly (revealing a panoramic view of the street) and follows the heroine. The wind blows the skirt of the heroine. The heroine is walking on the streets of London in the 19th century. The heroine is walking on the street on the right and a steam locomotive drives up. It passes quickly by the heroine. The wind blows up the skirt of the heroine. The heroine looks shocked and quickly covers the skirt with her hands. The background sound effects are the sound of walking, crowds, cars, etc.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4

### 입력

#### 📝 프롬프트
```
The camera follows the man in black as he flees quickly, followed by a group of people chasing him. The camera switches to side tracking. The character panics and knocks down a fruit stand on the roadside, gets up and continues to run away. The crowd makes panicked sounds.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

# 멀티모달 진화: 비디오 창작의 '무한 조합' 시대

## Seedance 2.0 멀티모달 개요

- **통합 업로드:** 텍스트, 이미지, 비디오, 오디오 업로드를 모두 지원하며, 이를 주요 피사체 또는 참조용 데이터로 활용할 수 있습니다.
- **범용 참조:** 모든 콘텐츠의 움직임, 특수 효과, 형태, 카메라 워크, 캐릭터, 배경 및 소리를 참조할 수 있습니다. 프롬프트가 명확할수록 모델이 더 정교하게 이해합니다.
- **성공 공식:** Seedance 2.0 = 범용 멀티모달 참조 능력 + 강력한 생성 모델 + 정교한 지시 이행 능력.
- **자연스러운 활용:** 자연어로 원하는 영상의 구성과 동작을 설명하세요. '참조'할 부분과 '편집'할 부분을 명확히 구분해주고, 요소가 많을 때는 @ 태그를 사용해 이미지, 비디오, 캐릭터를 정확히 지정하는 것이 좋습니다.

## 특수 용도(제한 없음, 참고용):
- 첫 번째 프레임/마지막 프레임 사진이 있나요? 아직도 비디오 작업을 참조하고 싶으십니까?
→ 프롬프트에 다음과 같이 명확하게 작성합니다. "@Picture 1은 첫 번째 프레임입니다. @Video 1의 전투 동작을 참조하세요."
- 기존 비디오를 확장하고 싶으십니까?
→ "@Video 1을 5초 연장"과 같이 연장 시간을 설명합니다. 참고: 이때 선택한 생성 기간은 "새 부품"의 기간이어야 합니다(예를 들어 5초로 확장하는 경우 생성 길이도 5초로 선택해야 합니다).
- 여러 비디오를 병합하고 싶으십니까?
→ "@video1과 @video2 사이에 장면을 추가하고 싶은데 콘텐츠가 xxx입니다."와 같이 프롬프트 단어에 합성 논리를 설명합니다.
- 오디오 자료가 없나요? 영상 속 소리를 직접 참고하실 수 있습니다
- 지속적인 모션을 생성하고 싶으십니까?
→ 프롬프트 단어에 다음과 같은 연속성 설명을 추가할 수 있습니다. "캐릭터가 점프에서 롤링으로 직접 전환하여 움직임을 일관되고 부드럽게 유지합니다." @그림 1 @ 그림 2 @ 그림 3...

## 고질적인 창작 고민, 이제 완벽히 해결할 수 있습니다!
영상을 만들 때 고생했던 부분들—프레임마다 바뀌는 얼굴, 어색한 움직임, 부자연스러운 연장, 편집 시 깨지는 리듬 등—을 Seedance 2.0의 멀티모달 기술로 해결하세요.

### 일관성의 비약적 개선
캐릭터의 모습이 앞뒤가 다르거나, 제품 디테일이 뭉개지고 작은 글씨가 흐릿해지는 일관성 문제들이 해결되었습니다. 얼굴부터 의상, 폰트의 아주 작은 디테일까지 더 안정적이고 정확하게 표현됩니다.

## 사례 1
### 입력

#### 📝 프롬프트
```
Man@Picture 1 After get off work, he walked tiredly in the corridor, his pace slowed down, and he finally stopped at the door of his home. A close-up shot of his face. The man took a deep breath, adjusted his emotions, put away his negative emotions, and became relaxed. Then he looked through the close-up to find the key and inserted the door lock. After entering the home, his little daughter and a pet dog happily ran over to receive a hug. The room was very warm, and the whole conversation was natural.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Replace the girls in @Video 1 with opera actresses. The scene is on a beautiful stage. Refer to the camera movements and transition effects of @Video 1, and use the lens to match the characters' movements to create the ultimate stage beauty and enhance the visual impact.
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
Refer to all the transitions and camera movements in @Video 1, one shot to the end. The picture starts with a chess game. The camera moves to the left to show the yellow gravel on the floor. The camera moves up to a beach. There are footprints on the beach. A girl in white plain clothes is gradually moving away on the beach. The camera cuts to an overhead shot in the air. The sea water is washing (no characters should be shown). Seamless gradient transition. The washed waves turn into fluttering curtains. The camera zooms out to show a close-up of the girl's face. One shot to the end.
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
0-2초: 빠른 4프레임 교차 편집. 레드, 핑크, 퍼플, 레오파드 패턴의 네 가지 리본이 순차적으로 정지 화면으로 나타나며, 새틴의 광택과 "chéri" 브랜드 명이 클로즈업됩니다. 보이스오버: "Chéri 마그네틱 리본으로 무궁무진한 아름다움을 연출해 보세요!"
3-6초: 실버 마그네틱 버클이 "찰칵" 소리를 내며 결합되었다가 부드럽게 분리되는 클로즈업. 실크 같은 질감과 편리함을 강조합니다. 보이스오버: "단 1초 만에 스타일을 완성하세요!"
7-12초: 다양한 스타일링 연출: 코트 깃의 버건디 리본(오피스룩), 포니테일의 핑크 리본(스트릿룩), 가방 스트랩의 퍼플 리본(하이엔드), 정장 칼라의 레오파드 리본(카리스마). 보이스오버: "코트부터 가방, 헤어까지 나만의 스타일을 완성하세요!"
13-15초: 네 가지 리본이 나란히 표시되며 브랜드 로고 노출: "Chéri—당신에게 즉각적인 아름다움을 선사합니다!"
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
Conduct a commercial photography display of the bag from @Picture 2. The side of the bag refers to @Picture 1, and the surface material of the bag refers to @Picture 3. It is required that all details of the bag be displayed, and the background sound is magnificent.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 6
### 입력

#### 📝 프롬프트
```
Take @Picture 1 as the first frame of the picture, first-person perspective, refer to the camera movement effect of @Video 1, the scene above refers to @Picture 2, the scene on the left refers to @Picture 3, and the scene on the right refers to @Picture 4.
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 매우 어렵고 제어 가능한 카메라 움직임과 움직임의 정밀한 재현
과거에는 모델이 영화 속 움직임, 카메라 움직임 또는 복잡한 움직임을 모방하기를 원하면 여러 가지 자세한 프롬프트를 작성해야 하거나 단순히 그렇게 할 수 없었습니다. 하지만 이제는 참고 영상만 업로드하면 끝입니다.

## 사례 1
### 입력

#### 📝 프롬프트
```
Refer to the image of the man in @Picture 1. He is in the elevator in @Picture 2. Completely refer to all the camera effects and facial expressions of the protagonist in @Video 1. When the protagonist is frightened, Hitchcock zooms in, and then several surround shots show the perspective inside the elevator. The elevator door opens, follow the camera out of the elevator. For the scene outside the elevator, refer to @Picture 3. The man looks around. Refer to @Video 1 to use a robotic arm to follow the character's line of sight from multiple angles.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Referring to the image of the man in @Picture 1, he is in the corridor of @Picture 2, completely referring to all the camera effects of @Video 1, as well as the facial expressions of the protagonist. The camera follows the protagonist running around the corner of @Picture 2, and then in the corridor of @Picture 3, the camera follows the perspective from the back and surrounds the front of the protagonist through a low angle of view; the camera then goes to the right Pan 90 degrees to shoot at the bifurcated intersection in @Picture 4, stop suddenly, pan right 180 degrees, and shoot the main character's face: the main character is panting, the camera follows the main character's perspective and looks around, refer to @Video 1's rapid left and right panning to show the scene, then zoom to the scene in @Picture 5, and continue to follow the side view of the main character running
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-5.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-6.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-7.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
@Picture 1 uses a tablet as the main subject. Refer to @Video 1 for the camera movement. Zoom in to a close-up of the screen. After the lens is rotated, the tablet is reversed to show the full picture. The data flow on the screen is constantly changing, and the surrounding environment gradually turns into a science fiction-style data space.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
The actress in @Picture 1 serves as the subject, referring to @Video 1's camera movement method to perform rhythmic push, pull and pan movements. The actress's movements also refer to the dance movements of the woman in @Video 1, performing energetically on the stage.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
Refer to @Picture 1 @Picture 2 for the spear character, @Picture 3 @Picture 4 for the double sword character, imitate the movements of @Video 1, and fight in the maple leaf forest of @Picture 5
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-5.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-6.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-7.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 6
### 입력

#### 📝 프롬프트
```
Referring to the character movements in Video 1 and the surrounding lens language of Video 2, a fight scene between Character 1 and Character 2 was generated. The fight took place in the starry night. During the fight, white dust was raised. The fight scene was very gorgeous and the atmosphere was very tense.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 7
### 입력

#### 📝 프롬프트
```
Refer to the camera movement and screen switching rhythm in Video 1, and reproduce the red supercar in Picture 1.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 창의적인 템플릿 / 복잡한 특수 효과의 정확한 재현
Seedance 2.0은 사진을 만들고 이야기를 쓸 수 있을 뿐만 아니라 창의적인 전환, 광고, 영화 클립 및 복잡한 편집 등 "모방"도 지원합니다. 참조 사진이나 비디오가 있으면 모델은 동작의 리듬, 렌즈 언어 및 시각적 구조를 식별하고 이를 정확하게 재현할 수 있습니다. 전문용어를 이해하지 못해도 상관없습니다. “@Video1의 리듬과 카메라 움직임, @Picture 1의 캐릭터 모델링 참고” 등 참고하고 싶은 부분을 명확하게 적어주시면 모델이 자신에게 맞는 버전을 고품질로 생성해 드립니다. 용기를 갖고 시도해 보세요! 정말 할 수 있어

## 사례 1
### 입력

#### 📝 프롬프트
```
Replace the characters in @Video 1 with @Picture 1, @Picture 1 is the first frame, the character puts on virtual science fiction glasses, refer to @Video 1's camera movements, and the close-up surround lens, from the third-person perspective to the character's subjective perspective, shuttle in the AI virtual glasses, and come to the deep blue universe of @Picture 2 , several spaceships appeared and shuttled into the distance. The camera followed the spacecraft to the pixel world of @Picture 3. The camera flew over the pixel mountain forest world at low altitude, and the growth forms of trees inside appeared. Then it shot from an upward angle and quickly shuttled to the light green textured planet of @Picture 4. The camera shuttled and passed over the surface of the planet.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-4.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-5.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-6.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Refer to the model’s facial features in the first picture. Models wear the clothes in the 2nd to 6th reference pictures and get closer to the camera, making naughty, cold, cute, surprised, and cool looks. Each look wears different clothes. Each time it is changed, the picture will be cut. Please refer to the fisheye lens effect and double flickering effect in the video. Please refer to the effect of @Video 1.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-6.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-7.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-8.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
Refer to the advertising creativity of the video, use the provided down jacket pictures, and refer to the goose down pictures and swan pictures, and match them with the following advertising words: "This is goose down, this is a warm swan, this is a wearable polar velvet down jacket. Wear warm clothes in the New Year and live a warm life." Generate a new down jacket advertising video.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-3.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-4.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
In black and white ink style, the characters in @Picture 1 refer to the special effects and movements in @Video 1 to stage an ink Tai Chi Kung Fu episode.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
Replace the character in the first frame of @Video 1 with @Picture 1, completely @ refer to the special effects and movements of Video 1. Rose petals grow from the stamens in the hand, and the cracks extend upward on the face, gradually covered by weeds. The character brushes his face with both hands, and the weeds turn into particles and dissipate, and finally become the appearance of @Picture 2
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 6
### 입력

#### 📝 프롬프트
```
Starting from the ceiling of @Picture 1, refer to the puzzle breaking effect of @Video 1 for transition, replace the font "BELIEVE" with "Seedance", refer to the font of @Picture 2
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 7
### 입력

#### 📝 프롬프트
```
It starts with a black screen. Refer to the particle effects and materials of Video 1. The golden gravel material floats out from the left side of the screen and covers it to the right. Refer to the particle blowing effect of @Video 1. The font of @Picture 1 gradually appears in the center of the screen.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 8
### 입력

#### 📝 프롬프트
```
The characters in @Picture 1 refer to the movements and expression changes in @Video 1 to show the abstract behavior of eating instant noodles.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 모델의 창의성과 플롯 완성도

## 사례 1
### 입력

#### 📝 프롬프트
```
Perform a comic interpretation of @Picture 1 in order from left to right and top to bottom, keeping the lines spoken by the characters consistent with the pictures, adding special sound effects to the storyboard switching and key plot interpretations, and the overall style is humorous; refer to @Video 1 for the interpretation method
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-1.jpg" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Refer to the storyboard script of @Picture1's feature film, refer to the storyboards, scenes, camera movements, pictures and copywriting of @Picture1, and create a 15-second healing title sequence about "The Four Seasons of Childhood"
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
Refer to the audio of video 1, and use Figures 1, 2, 3, 4, and 5 as inspiration to create an emotional video. Background music reference@video 1
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 비디오 확장

## 사례 1
### 입력

#### 📝 프롬프트
```
Extend the video to 15 seconds, refer to the image of a donkey riding a motorcycle in @Picture 1 and @Picture 2, and add an imaginative advertisement
Picture 1: Fixed shot from the side, the donkey rides a motorcycle and rushes out of the shed, and the chicken next to it is frightened.
Screen 2: The donkey is riding a motorcycle and circling in the sand. First, a close-up of the motorcycle tires, and then cut to a mid-air shot of the donkey doing circling stunts on a motorcycle, raising smoke.
Picture 3: The background is a shot of snowy mountains, with a donkey riding a car flying over the hillside. The slogan is behind the subject, and "Inspire Creativity, Enrich Life" appears in the middle in the form of a mask (when the donkey and the motorcycle fly by), and finally when the motorcycle flies by, a puff of dust and smoke is raised.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
The video is extended for 6 seconds, and the exciting music of electric guitar appears. The advertisement font of "JUST DO IT" appears in the middle of the video and then gradually fades. The camera moves up to the ceiling. A strong man is pulling the hanging ring. His upper body is wearing tight fitness clothes from @Picture 1, with the "Fitness" logo of @Picture 2 printed on the back. The man pulls up the hanging ring with his strong upper limbs, and then the advertisement ending font of "DO SOME SPORT" appears in the middle of the video.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
Extend @video1 by 15 seconds. 1-5 seconds: The light and shadow slowly slide over the wooden table and cup body through the blinds, and the branches sway like a slight breath. 6-10 seconds: A coffee bean falls gently from the top of the screen, and the camera moves towards the coffee bean until the screen goes black. 11-15 seconds: The first line in English is "Lucky Coffee", the second line is "Breakfast", and the third line is "AM 7:00-10:00".
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
Extending forward for 10 seconds, in the warm afternoon light, the camera starts from the row of awnings on the street corner that were fluttered by the breeze, and slowly moves down to a few small daisies sticking their heads out at the base of the wall. Immediately afterwards, the protagonist's red sneakers appeared on the screen. He was squatting in front of a street flower stall, smiling as he gathered a large handful of sunflowers into his arms, and the petals rubbed against his white T-shirt. When he turned around and stepped on the skateboard, the flower stall owner smiled and shouted, "Be careful of the petals flying!" He waved to the boss and then started to skate. Several golden petals had already broken free from the bouquet and landed on the board of the skateboard.
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 음색이 더 정확하고 소리가 더 현실적입니다.

## 사례 1
### 입력

#### 📝 프롬프트
```
Fixed lens, the central fisheye lens peeks down through the circular hole, refer to the fisheye lens in Video 1, let the horse in @Video 2 look towards the fisheye lens, refer to the speaking action in @Video 1, the background BGM refers to the sound effect in @Video 3.
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-1.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-2.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Based on the office building promotional photos provided, a 15-second film-level real estate documentary was generated, using a 2.35:1 wide screen, 24fps, and a delicate picture style. The voice of the narration was referred to @Video 1, and the "ecology of the office building" was shot to present the operations of different companies in the building. The narration was used to explain how the office building became a vibrant business ecosystem.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-3.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-4.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
A complaint dialogue in the "Cat and Dog Complaint Room" requires rich emotions and is consistent with a talk show performance:
Meow Jiang (hosted by Cat, licking fur and rolling eyes): "My family, who knows? The guy next to me, besides wagging his tail and tearing down the sofa every day, he only uses his eyes like "I'm so good, I want to be touched" to trick humans into snacking. He is obviously more aggressive than anyone else when it comes to tearing down homes, but he still has the nerve to call him Wangzai. I think calling him "Wangzai" is more or less, hahaha."
Wang Zai (dog host, tilting his head and wagging his tail): "You still have the nerve to talk to me? You sleep 18 hours a day, and when you wake up, you rub human legs to ask for cans. You shed hair so much that the human's black clothes are covered with your hair. After they sweep the floor, you turn around and roll around on the sofa. How do you still have the nerve to pretend to be a cold noble?"
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-1.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-3-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
The accompaniment of "The Case of Guillotine Beauty" in the prelude to the Henan opera sounded. Bao Zheng in black on the left pointed to Chen Shimei in red on the right, and sang Henan opera through gritted teeth: "Sword against sheath, with real evidence, do you dare not to move?" Chen Shimei's eyes were darting around, looking for expedients, with a look of extreme embarrassment. At this time, a voice from a leading actor in the Henan Opera came from outside the screen: "Wait a minute!" Bao Zheng and Chen Shimei both looked to the right side of the screen.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
Generate a 15-second MV video. Keywords: Steady framing / light push and pull / low-angle heroic sense / documentary but high-end A super wide-angle shot, low camera angle shot slightly, the cliff dirt road and retro station wagon occupy the lower third of the screen, the sea and the horizon in the distance open up space, the volumetric light of the sunset side passes through the dust particles, film-level composition, real film grains, the breeze blows the corners of the clothes.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-1.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-5-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 6
### 입력

#### 📝 프롬프트
```
The girl wearing a hat in the middle of the picture sings softly "I'm so proud of my family!", then turns around and hugs the black girl in the middle. The black girl emotionally responded "My sweetie, you're the heart of our family" and hugged her back. The boy in yellow clothes on the left said happily, "Folks, let's dance together to celebrate!" The girl on the far right immediately replied: "I'll bring the music!", Latin American music played in the background, the woman in the orange skirt on the left (Julietta) smiled and nodded, and the woman with braids on the right (Louisa) clenched her fists and waved her arms. Someone in the crowd started to take steps, children clapped along with the rhythm, and the whole family was about to form a circle. Accompanied by cheerful music, skirts flying, they danced on the colorful streets, spreading joy and warmth.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-6-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 7
### 입력

#### 📝 프롬프트
```
Fixed lens. The standing strong man (captain) clenched his fists and waved his arms and said in Spanish: "Attack in three minutes!" The blond team member stood checking the firearms, and the green-haired team member held onto the tactical flashlight. The black team members put their shoulders to each other and asked their companions in Spanish: "Flanking?" The captain nodded and said in Spanish: "Old rules, keep alive for interrogation." All members were solemn, completed tactical gestures amidst the sound of equipment clashing, and stood up in tacit understanding. Everyone was ready, and the two boys on the left also stood up first and prepared to fight.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-1.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-7-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 8
### 입력

#### 📝 프롬프트
```
0-3 seconds: The alarm clock sounds at the beginning, and picture 1 appears in the hazy screen;
3-10 seconds: Pan the camera quickly and turn to the opposite side to take a close-up of the man’s face. The man helplessly asks the girl to get up. The tone and timbre refer to @Video 1;
10-12 seconds: The girl pouted and hid under the quilt;
12-15 seconds: Switch to the whole body of the male protagonist, he sighed and said: "There is really nothing I can do against you!"
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 9
### 입력

#### 📝 프롬프트
```
Monkey in @Picture 1 walks towards the counter of the milk tea shop. The camera follows him. A Bichon Frize waiter in @Picture 2 is wiping the production tools at the bar. Monkey orders the waiter in a Sichuan accent: "Yao Meier, do you have a farewell to my concubine?"
Cut shot, close-up.
The waiter put down what he was doing, gave the old man a strange look and replied: "No, do you want American style?"
Cut to show the monkey.
He scratched his head and muttered something: "Is everything okay...? I have something to do! My grandson asked me to buy a milk tea, so I just called him Farewell My Concubine."
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-9-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 10
### 입력

#### 📝 프롬프트
```
Use popular science style and tone to interpret the content in picture 1, including Wukong going to Cuiyun Mountain to borrow a banana fan from Princess Iron Fan in order to cross the Flame Mountain. Princess Iron Fan wanted to take revenge because her red boy was surrendered by Wukong and worshiped Guanyin as a child. Mother and son were separated and she refused to borrow the fan in return. Wukong tried to persuade him to no avail, and the two immediately began to tell a story about their dispute.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-1.jpg" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-10-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 렌즈 연속성(끝까지 한 샷)이 더 강해졌습니다.

## 사례 1
### 입력

#### 📝 프롬프트
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5, a one-shot tracking shot, following the runner from the street up the stairs, through the corridor, onto the roof, and finally overlooking the city.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Taking @Picture 1 as the first frame, the picture is zoomed out of the plane window. Clouds slowly float into the frame. One of them is a cloud decorated with colorful jelly beans, always in the center of the picture, and then slowly transforms into the ice cream of @Picture 2. The camera zooms back to the cabin. @Picture 3, who is sitting by the window, reaches out to take the ice cream from the window and takes a bite. His mouth is covered with cream and a sweet smile spreads on his face.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-2-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
In the style of a spy film, @Picture 1 is the first frame. The camera follows the female agent in a red windbreaker walking forward. The camera follows the panoramic view. Passers-by keep blocking the woman in red as she walks to a corner. Refer to the corner building in @Picture 2. The fixed shot of the woman in red leaves the screen and disappears around the corner. A girl wearing a mask hides in the corner and stares at her fiercely. The image of the masked girl refers to @Picture 3. Only the image is referenced. The girl is standing at the corner. The camera panned forward to the female agent in red. She walked into a mansion and disappeared. For the mansion, please refer to @Picture 4. Don’t cut the camera during the whole process, just take one shot to the end.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-4.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
Based on the outdoor shot of @Picture 1, the first-person subjective perspective zooms in to a close-up view of the environment inside the wooden house. A deer @Picture 2 and a sheep @Picture 3 are drinking tea and chatting by the fire. The style of the close-up tea cup when the camera moves forward is referred to @Picture 4.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-4.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-4-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5, a thrilling shot of the roller coaster from the subjective perspective. The speed of the roller coaster is getting faster and faster.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-5.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-5-6.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 영상 편집에 대한 높은 활용도
때로는 이미 비디오가 있고 처음부터 그림을 찾거나 다시 실행하고 싶지 않지만 동작의 작은 부분을 조정하거나 몇 초만 연장하거나 캐릭터 성능을 아이디어에 더 가깝게 만들고 싶을 때가 있습니다. 이제 기존 비디오를 입력으로 직접 사용하고 다른 콘텐츠를 변경하지 않고도 대상 수정을 위한 클립, 동작 또는 리듬을 지정할 수 있습니다. 다시 생성할 필요가 없으며 조정이 빠르게 완료될 수 있습니다.

## 사례 1
### 입력

#### 📝 프롬프트
```
Subverting the plot in @Video 1, the man's eyes suddenly changed from gentle to cold and fierce. At the moment when the heroine was defenseless, he violently pushed the heroine from the bridge and pushed the heroine into the water. The movements are crisp and neat, with long-planned determination and no hesitation, completely subverting the original affectionate character setting. The moment the heroine fell into the water, there was no scream, only a look of disbelief. She looked up and shouted at the hero: "You have been lying to me from the beginning!" The hero stood on the bridge with a cold smile on his face and whispered to the water: "This is what you owe my family."
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
Subvert the entire plot of @video 1
0-3 seconds: A man in a suit is sitting in a bar with a calm expression and a glass of wine in his hand. The camera advances slowly, the light and shadow are advanced, and the atmosphere is serious. The ambient sound was low, and the man in a suit whispered, "This business is huge."
3-6 seconds: The woman behind her looks nervous and asks, "How big is it?" The man in the suit raises his eyes and lowers his voice: "It's very big." The camera cuts to a close-up of his hands - he puts down the wine glass, full of aura.
6-9 seconds of footage: Suddenly the man in a suit took out a large snack gift bag from under the table and placed it on the table with a thud.
9-12 seconds: The woman behind her hands originally placed on her waist, her muscles changed from stiff to relaxed, and her whole expression relaxed. The atmosphere of the picture becomes relaxed.
13-15 second screen: The man in a suit takes out a bag of snacks for the woman, the camera zooms out to show the panoramic view of the tavern, the picture becomes transparent and blurry - the subtitle pops up "No matter how busy you are, remember to eat some snacks~"
```

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-1.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
The female lead singer in video 1 is replaced by the male lead singer in picture 1. The movements are completely imitated in the original video. There should be no camera cuts. The band sings the music.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
Change the woman's hairstyle in video 1 to long red hair, and the great white shark in picture 1 slowly emerges half of her head behind her.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 5
### 입력

#### 📝 프롬프트
```
In Video 1, the camera pans to the right. The fried chicken boss is busy handing the fried chicken to the queuing customers, saying in Mandarin, "Do his job, do your job, everyone queues up in a civilized manner." After saying this, he goes to get the paper bag to put the fried chicken. A close-up shows the boss taking the paper bag with the picture 1 printed on it, and a close-up showing the hand passing it to the customer.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-1.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-2.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-3.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 뮤직카드 포인트 수행 가능

## 사례 1
### 입력

#### 📝 프롬프트
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-4.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-5.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-6.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
@Picture 1 @Picture 2 @Picture 3 @Picture 4 @Picture 5 @Picture 6 @Picture 7 The pictures in the picture are stuck according to the position and overall rhythm of the key frames in the @ video. The characters in the picture are more dynamic, the overall picture style is more dreamy, and the picture tension is strong. You can change the scene of the reference picture according to the music and picture needs, and supplement the light and shadow changes in the picture.
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-6.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-7.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-8.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5@Picture 6 of the scenery scene picture, refer to the picture rhythm in the @video, the picture style and music rhythm between transitions to make points
```

#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-6.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-7.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-8.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 4
### 입력

#### 📝 프롬프트
```
An 8-second intellectual game-style combat animation clip that fits the theme of revenge. 0-3 seconds: In the storyboard 1, the heroine turns around and sits down, then turns the camera. The heroine makes a move and says "you lose", refer to the storyboard 2. 3-4 seconds: Pan the camera quickly and turn to the close-up of the man opposite, refer to the storyboard 3. The man grits his teeth and is very dissatisfied with the result. 4-6 seconds: Cut to an overhead shot, the woman makes a move, and the people on the opposite side are amazed, refer to storyboard 4. 6-8 seconds: The camera pans down quickly, the screen transitions to black, then the screen gradually brightens, in a dark room, the woman looks at the moonlight outside the window and quietly says "We'll see", refer to storyboard 5.
```

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 감성적인 해석이 더 좋다

## 사례 1
### 입력

#### 📝 프롬프트
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-2.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-3.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 2
### 입력

#### 📝 프롬프트
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-3.png" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-2-4.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*

## 사례 3
### 입력

#### 📝 프롬프트
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### 영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-4.png" alt="1" width="400" height="auto">

#### 동영상
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" alt="1" width="400" height="auto">

### 산출
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" width="600"></a>

📥 *Gif 이미지를 클릭하시면 영상을 다운로드 받으실 수 있습니다*


# 🏁 마지막 두 마디
Seedance 2.0의 다중 모드 기능은 지속적으로 발전하고 있으며 계속해서 기능을 업데이트하고 더 많은 입력 조합을 지원할 것입니다. 이 사용 설명서가 귀하의 창의성을 더욱 자유롭게 표현하는 데 도움이 되기를 바랍니다!

버그가 발생하거나 사용 제안 또는 수요 시나리오가 있는 경우 메시지를 남기거나 개인 메시지를 보내거나 드럼을 쳐서 알려주세요! 우리는 Jimeng을 진정으로 행복하고 편리하게 만드는 생산성 도구로 만들기 위해 계속해서 최적화하고 협력할 것입니다 ❤️
