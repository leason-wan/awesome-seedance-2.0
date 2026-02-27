# 🎬 Jimeng Seedance 2.0 User Manual (A New Multi-modal Creation Experience)

[![English](https://img.shields.io/badge/English-Current-brightgreen)](README.md) [![中文](https://img.shields.io/badge/中文-Click-blue)](README_zh.md) [![繁體中文](https://img.shields.io/badge/繁體中文-Click-blue)](README_zh_TW.md) [![日本語](https://img.shields.io/badge/日本語-Click-blue)](README_ja.md) [![한국어](https://img.shields.io/badge/한국어-Click-blue)](README_ko.md) [![Español](https://img.shields.io/badge/Español-Click-blue)](README_es.md)

We still remember the days when video creation was limited to simple text and fixed frames. Our goal has always been to build a video model that truly understands your vision. Today, that vision becomes reality!

Jimeng Seedance 2.0 now supports four input modalities: **Image, Video, Audio, and Text**, offering richer expression and unprecedented control over generation.

By using images to set the style, videos to specify movements and camera shifts, and audio snippets to define the rhythm and atmosphere—combined with intuitive prompts—the creative process becomes more natural, efficient, and professional.

With this upgrade, our "Reference Capabilities" are the key highlight:
- 📷 **Reference Images:** Accurately restore composition and character details.
- 🎥 **Reference Videos:** Support for complex cinematography, action rhythms, and creative special effects.
- ⏱ **Video Extension:** Smoothly extend and connect footage according to user prompts. It’s not just generation; it’s "continuous shooting."
- ✂️ **Enhanced Editing:** Support for character replacement, addition, or deletion within existing videos.

Video creation is about more than just "generation"—it’s about controlling expression. Seedance 2.0 is a truly multi-modal, controllable creative tool.

Seedance 2.0: Multi-modal creation starts here. Imagine boldly, and let the model handle the rest.

## Quick Start: Parameter Guide

| Core Specifications | Seedance 2.0 |
| --- | --- |
| **Image Input & Formats:** jpeg, png, webp, bmp, tiff, gif | ≤ 9 images <br/> Max Size: 30 MB |
| **Video Input & Formats:** mp4, mov | ≤ 3 videos, total duration [2, 15]s <br/> Max Size: 50 MB<br/> Resolution Range: [640×640 (480p) to 834×1112 (720p)] |
| **Audio Input & Formats:** mp3, wav | ≤ 3 clips, total duration ≤ 15s<br/> Max Size: 15MB |
| **Text Input** | Natural Language |
| **Generation Time** | 4 - 15s (Customizable) |
| **Audio Output** | Integrated Sound Effects/Soundtracks |
| **Input Limit:** Current mixed input limit is 12 files. We recommend prioritizing materials that have the most impact on visual style or rhythm. |

## ⚠️ Important: Policy on Realistic Human Faces
Due to platform compliance requirements, uploading materials featuring identifiable real human faces (both images and videos) is currently prohibited. To ensure safety and protect user rights, the system will automatically filter such materials, and video generation will be disabled for these uploads. 

This means that if you upload a clearly identifiable photo of a real person, the model will not be able to process the generation request. We appreciate your understanding as we work to maintain a secure and compliant platform. Should these policies update, we will notify you through this document.

# Enhanced Core Capabilities: Stable, Fluid, and Realistic!

Seedance 2.0 introduces significant advancements beyond multi-modality. Physics laws are more consistent, character movements are more natural, and instruction following is more precise. Whether it's complex actions, continuous movement, or maintaining a stable artistic style, the evolution of our underlying model ensures the overall video output is smoother and more lifelike than ever.


## Case 1

### Input

#### 📝 Prompt
```
The girl was drying her clothes elegantly. After drying, she took out another piece in the bucket and shook the clothes vigorously.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2

### Input

#### 📝 Prompt
```
The character in the painting has a guilty expression. He looks left and right, peering out of the frame. He quickly reaches out of the frame to grab a Coke and takes a sip, followed by a satisfied expression. Footsteps are heard, and he panics, quickly putting the Coke back. A western cowboy then enters the frame, picks up the Coke, and walks away. Finally, the camera moves forward as the scene fades to a black background with only the canned Coke illuminated by a spotlight. Text appears at the bottom: "A Sip of Cola—You’ve Got to Try It!"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3

### Input

#### 📝 Prompt
```
The camera zooms out slightly (revealing a panoramic view of the street) and follows the heroine. The wind blows the skirt of the heroine. The heroine is walking on the streets of London in the 19th century. The heroine is walking on the street on the right and a steam locomotive drives up. It passes quickly by the heroine. The wind blows up the skirt of the heroine. The heroine looks shocked and quickly covers the skirt with her hands. The background sound effects are the sound of walking, crowds, cars, etc.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4

### Input

#### 📝 Prompt
```
The camera follows the man in black as he flees quickly, followed by a group of people chasing him. The camera switches to side tracking. The character panics and knocks down a fruit stand on the roadside, gets up and continues to run away. The crowd makes panicked sounds.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

# Multi-modal Evolution: The "Mixed Media" Era of Video Creation

## Seedance 2.0 Multimodal Overview

- **Unified Uploads:** Supports text, images, videos, and audio. These can be used as direct subjects or stylistic references.
- **Versatile Referencing:** You can reference movements, special effects, shapes, camera work, characters, scenes, and sounds from any content.
- **The Formula:** Seedance 2.0 = Universal Multi-modal Reference + Powerful Creative Generation + Precise Instruction Following.
- **Natural Interaction:** Use natural language to describe your vision. Specify clearly whether you are "referencing" or "editing." For complex scenes, use the @ tag to distinguish between images, videos, and characters.

## Special usage (no limit, for reference only):
- Is there a first frame/last frame picture? Still want to refer to the video action?
→ Write clearly in the prompt, such as: "@Picture 1 is the first frame, refer to the fighting action of @Video 1"
- Want to extend an existing video?
→ Describe the extension time, such as "Extend @Video 1 by 5s". Note: The generated duration selected at this time should be the duration of the "new part" (for example, if extended by 5s, the generated length should also be selected as 5s.
- Want to merge multiple videos?
→ Explain the synthesis logic in the prompt word, such as: "I want to add a scene between @video1 and @video2, the content is xxx"
- No audio material? You can directly refer to the sound in the video
- Want to generate continuous motion?
→ You can add a continuity description in the prompt words, such as: "The character transitions directly from jumping to rolling, keeping the movements coherent and smooth" @Figure 1 @ Figure 2 @ Figure 3...

## Solving Long-standing Creative Challenges
Video creation often involves persistent hurdles: faces that shift between frames, erratic movements, unnatural extensions, or losing the rhythm during edits. Seedance 2.0’s multi-modal capabilities address these "chronic" issues directly.

### Enhanced Consistency
Common frustrations include inconsistent characters, lost product details, blurry text, or mismatched cinematographic styles. Seedance 2.0 solves these by ensuring stable and accurate rendering of faces, clothing, and even fine font details.

## Case 1
### Input

#### 📝 Prompt
```
Man@Picture 1 After get off work, he walked tiredly in the corridor, his pace slowed down, and he finally stopped at the door of his home. A close-up shot of his face. The man took a deep breath, adjusted his emotions, put away his negative emotions, and became relaxed. Then he looked through the close-up to find the key and inserted the door lock. After entering the home, his little daughter and a pet dog happily ran over to receive a hug. The room was very warm, and the whole conversation was natural.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Replace the girls in @Video 1 with opera actresses. The scene is on a beautiful stage. Refer to the camera movements and transition effects of @Video 1, and use the lens to match the characters' movements to create the ultimate stage beauty and enhance the visual impact.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
Refer to all the transitions and camera movements in @Video 1, one shot to the end. The picture starts with a chess game. The camera moves to the left to show the yellow gravel on the floor. The camera moves up to a beach. There are footprints on the beach. A girl in white plain clothes is gradually moving away on the beach. The camera cuts to an overhead shot in the air. The sea water is washing (no characters should be shown). Seamless gradient transition. The washed waves turn into fluttering curtains. The camera zooms out to show a close-up of the girl's face. One shot to the end.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
0-2s: A rapid four-frame montage. Four bows (red, pink, purple, and leopard print) are frozen in sequence with close-ups showing the satin sheen and the "chéri" branding. Voiceover: "Experience endless beauty with Chéri magnetic ribbons!"
3-6s: Close-up of a silver magnetic buckle "clicking" together and then gently pulled apart to show its silky texture and convenience. Voiceover: "Snap into perfection in just one second!"
7-12s: A fast-paced lifestyle montage: the burgundy bow fastened to a coat collar for a chic commute; the pink bow on a ponytail for a sweet street look; the purple bow on a bag strap for a high-end niche vibe; and the leopard print on a suit lapel for a bold, powerful presence. Voiceover: "From coats to hair accessories, complete your unique style!"
13-15s: Side-by-side display of the four bow types with the brand logo: "Chéri—Instantly Beautiful!"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
Conduct a commercial photography display of the bag from @Picture 2. The side of the bag refers to @Picture 1, and the surface material of the bag refers to @Picture 3. It is required that all details of the bag be displayed, and the background sound is magnificent.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 6
### Input

#### 📝 Prompt
```
Take @Picture 1 as the first frame of the picture, first-person perspective, refer to the camera movement effect of @Video 1, the scene above refers to @Picture 2, the scene on the left refers to @Picture 3, and the scene on the right refers to @Picture 4.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Highly difficult/controllable camera movements and precise reproduction of movements
In the past, if I wanted the model to imitate the movement, camera movement or complex movements in the movie, I would either have to write a bunch of detailed prompts or simply not be able to do it. But now, you only need to upload a reference video, and that’s it

## Case 1
### Input

#### 📝 Prompt
```
Refer to the image of the man in @Picture 1. He is in the elevator in @Picture 2. Completely refer to all the camera effects and facial expressions of the protagonist in @Video 1. When the protagonist is frightened, Hitchcock zooms in, and then several surround shots show the perspective inside the elevator. The elevator door opens, follow the camera out of the elevator. For the scene outside the elevator, refer to @Picture 3. The man looks around. Refer to @Video 1 to use a robotic arm to follow the character's line of sight from multiple angles.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Referring to the image of the man in @Picture 1, he is in the corridor of @Picture 2, completely referring to all the camera effects of @Video 1, as well as the facial expressions of the protagonist. The camera follows the protagonist running around the corner of @Picture 2, and then in the corridor of @Picture 3, the camera follows the perspective from the back and surrounds the front of the protagonist through a low angle of view; the camera then goes to the right Pan 90 degrees to shoot at the bifurcated intersection in @Picture 4, stop suddenly, pan right 180 degrees, and shoot the main character's face: the main character is panting, the camera follows the main character's perspective and looks around, refer to @Video 1's rapid left and right panning to show the scene, then zoom to the scene in @Picture 5, and continue to follow the side view of the main character running
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

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
@Picture 1 uses a tablet as the main subject. Refer to @Video 1 for the camera movement. Zoom in to a close-up of the screen. After the lens is rotated, the tablet is reversed to show the full picture. The data flow on the screen is constantly changing, and the surrounding environment gradually turns into a science fiction-style data space.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
The actress in @Picture 1 serves as the subject, referring to @Video 1's camera movement method to perform rhythmic push, pull and pan movements. The actress's movements also refer to the dance movements of the woman in @Video 1, performing energetically on the stage.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
Refer to @Picture 1 @Picture 2 for the spear character, @Picture 3 @Picture 4 for the double sword character, imitate the movements of @Video 1, and fight in the maple leaf forest of @Picture 5
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

📥 *Click on the Gif image to download the video*

## Case 6
### Input

#### 📝 Prompt
```
Referring to the character movements in Video 1 and the surrounding lens language of Video 2, a fight scene between Character 1 and Character 2 was generated. The fight took place in the starry night. During the fight, white dust was raised. The fight scene was very gorgeous and the atmosphere was very tense.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 7
### Input

#### 📝 Prompt
```
Refer to the camera movement and screen switching rhythm in Video 1, and reproduce the red supercar in Picture 1.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Creative templates / Accurate reproduction of complex special effects
Not only can you create pictures and write stories, Seedance 2.0 also supports "imitation" - creative transitions, commercials, movie clips, and complex editing. As long as you have reference pictures or videos, the model can identify the rhythm of the action, the lens language, and the visual structure, and accurately reproduce them. It doesn’t matter if you don’t understand professional terminology. Write clearly the parts you want to refer to, such as “Refer to @Video1’s rhythm and camera movement, @Picture 1’s character modeling”, and the model will be able to generate a version that belongs to you with high quality. Be brave and try! it can really do it

## Case 1
### Input

#### 📝 Prompt
```
Replace the characters in @Video 1 with @Picture 1, @Picture 1 is the first frame, the character puts on virtual science fiction glasses, refer to @Video 1's camera movements, and the close-up surround lens, from the third-person perspective to the character's subjective perspective, shuttle in the AI virtual glasses, and come to the deep blue universe of @Picture 2 , several spaceships appeared and shuttled into the distance. The camera followed the spacecraft to the pixel world of @Picture 3. The camera flew over the pixel mountain forest world at low altitude, and the growth forms of trees inside appeared. Then it shot from an upward angle and quickly shuttled to the light green textured planet of @Picture 4. The camera shuttled and passed over the surface of the planet.
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

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Refer to the model’s facial features in the first picture. Models wear the clothes in the 2nd to 6th reference pictures and get closer to the camera, making naughty, cold, cute, surprised, and cool looks. Each look wears different clothes. Each time it is changed, the picture will be cut. Please refer to the fisheye lens effect and double flickering effect in the video. Please refer to the effect of @Video 1.
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

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
Refer to the advertising creativity of the video, use the provided down jacket pictures, and refer to the goose down pictures and swan pictures, and match them with the following advertising words: "This is goose down, this is a warm swan, this is a wearable polar velvet down jacket. Wear warm clothes in the New Year and live a warm life." Generate a new down jacket advertising video.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
In black and white ink style, the characters in @Picture 1 refer to the special effects and movements in @Video 1 to stage an ink Tai Chi Kung Fu episode.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
Replace the character in the first frame of @Video 1 with @Picture 1, completely @ refer to the special effects and movements of Video 1. Rose petals grow from the stamens in the hand, and the cracks extend upward on the face, gradually covered by weeds. The character brushes his face with both hands, and the weeds turn into particles and dissipate, and finally become the appearance of @Picture 2
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 6
### Input

#### 📝 Prompt
```
Starting from the ceiling of @Picture 1, refer to the puzzle breaking effect of @Video 1 for transition, replace the font "BELIEVE" with "Seedance", refer to the font of @Picture 2
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 7
### Input

#### 📝 Prompt
```
It starts with a black screen. Refer to the particle effects and materials of Video 1. The golden gravel material floats out from the left side of the screen and covers it to the right. Refer to the particle blowing effect of @Video 1. The font of @Picture 1 gradually appears in the center of the screen.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 8
### Input

#### 📝 Prompt
```
The characters in @Picture 1 refer to the movements and expression changes in @Video 1 to show the abstract behavior of eating instant noodles.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## The creativity and plot completion ability of the model

## Case 1
### Input

#### 📝 Prompt
```
Perform a comic interpretation of @Picture 1 in order from left to right and top to bottom, keeping the lines spoken by the characters consistent with the pictures, adding special sound effects to the storyboard switching and key plot interpretations, and the overall style is humorous; refer to @Video 1 for the interpretation method
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-1.jpg" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Refer to the storyboard script of @Picture1's feature film, refer to the storyboards, scenes, camera movements, pictures and copywriting of @Picture1, and create a 15-second healing title sequence about "The Four Seasons of Childhood"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
Refer to the audio of video 1, and use Figures 1, 2, 3, 4, and 5 as inspiration to create an emotional video. Background music reference@video 1
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Video extension

## Case 1
### Input

#### 📝 Prompt
```
Extend the video to 15 seconds, refer to the image of a donkey riding a motorcycle in @Picture 1 and @Picture 2, and add an imaginative advertisement
Picture 1: Fixed shot from the side, the donkey rides a motorcycle and rushes out of the shed, and the chicken next to it is frightened.
Screen 2: The donkey is riding a motorcycle and circling in the sand. First, a close-up of the motorcycle tires, and then cut to a mid-air shot of the donkey doing circling stunts on a motorcycle, raising smoke.
Picture 3: The background is a shot of snowy mountains, with a donkey riding a car flying over the hillside. The slogan is behind the subject, and "Inspire Creativity, Enrich Life" appears in the middle in the form of a mask (when the donkey and the motorcycle fly by), and finally when the motorcycle flies by, a puff of dust and smoke is raised.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
The video is extended for 6 seconds, and the exciting music of electric guitar appears. The advertisement font of "JUST DO IT" appears in the middle of the video and then gradually fades. The camera moves up to the ceiling. A strong man is pulling the hanging ring. His upper body is wearing tight fitness clothes from @Picture 1, with the "Fitness" logo of @Picture 2 printed on the back. The man pulls up the hanging ring with his strong upper limbs, and then the advertisement ending font of "DO SOME SPORT" appears in the middle of the video.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
Extend @video1 by 15 seconds. 1-5 seconds: The light and shadow slowly slide over the wooden table and cup body through the blinds, and the branches sway like a slight breath. 6-10 seconds: A coffee bean falls gently from the top of the screen, and the camera moves towards the coffee bean until the screen goes black. 11-15 seconds: The first line in English is "Lucky Coffee", the second line is "Breakfast", and the third line is "AM 7:00-10:00".
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
Extending forward for 10 seconds, in the warm afternoon light, the camera starts from the row of awnings on the street corner that were fluttered by the breeze, and slowly moves down to a few small daisies sticking their heads out at the base of the wall. Immediately afterwards, the protagonist's red sneakers appeared on the screen. He was squatting in front of a street flower stall, smiling as he gathered a large handful of sunflowers into his arms, and the petals rubbed against his white T-shirt. When he turned around and stepped on the skateboard, the flower stall owner smiled and shouted, "Be careful of the petals flying!" He waved to the boss and then started to skate. Several golden petals had already broken free from the bouquet and landed on the board of the skateboard.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## The timbre is more accurate and the sound is more realistic

## Case 1
### Input

#### 📝 Prompt
```
Fixed lens, the central fisheye lens peeks down through the circular hole, refer to the fisheye lens in Video 1, let the horse in @Video 2 look towards the fisheye lens, refer to the speaking action in @Video 1, the background BGM refers to the sound effect in @Video 3.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-1.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-2.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Based on the office building promotional photos provided, a 15-second film-level real estate documentary was generated, using a 2.35:1 wide screen, 24fps, and a delicate picture style. The voice of the narration was referred to @Video 1, and the "ecology of the office building" was shot to present the operations of different companies in the building. The narration was used to explain how the office building became a vibrant business ecosystem.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-4.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
A complaint dialogue in the "Cat and Dog Complaint Room" requires rich emotions and is consistent with a talk show performance:
Meow Jiang (hosted by Cat, licking fur and rolling eyes): "My family, who knows? The guy next to me, besides wagging his tail and tearing down the sofa every day, he only uses his eyes like "I'm so good, I want to be touched" to trick humans into snacking. He is obviously more aggressive than anyone else when it comes to tearing down homes, but he still has the nerve to call him Wangzai. I think calling him "Wangzai" is more or less, hahaha."
Wang Zai (dog host, tilting his head and wagging his tail): "You still have the nerve to talk to me? You sleep 18 hours a day, and when you wake up, you rub human legs to ask for cans. You shed hair so much that the human's black clothes are covered with your hair. After they sweep the floor, you turn around and roll around on the sofa. How do you still have the nerve to pretend to be a cold noble?"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-3-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
The accompaniment of "The Case of Guillotine Beauty" in the prelude to the Henan opera sounded. Bao Zheng in black on the left pointed to Chen Shimei in red on the right, and sang Henan opera through gritted teeth: "Sword against sheath, with real evidence, do you dare not to move?" Chen Shimei's eyes were darting around, looking for expedients, with a look of extreme embarrassment. At this time, a voice from a leading actor in the Henan Opera came from outside the screen: "Wait a minute!" Bao Zheng and Chen Shimei both looked to the right side of the screen.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
Generate a 15-second MV video. Keywords: Steady framing / light push and pull / low-angle heroic sense / documentary but high-end A super wide-angle shot, low camera angle shot slightly, the cliff dirt road and retro station wagon occupy the lower third of the screen, the sea and the horizon in the distance open up space, the volumetric light of the sunset side passes through the dust particles, film-level composition, real film grains, the breeze blows the corners of the clothes.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-5-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 6
### Input

#### 📝 Prompt
```
The girl wearing a hat in the middle of the picture sings softly "I'm so proud of my family!", then turns around and hugs the black girl in the middle. The black girl emotionally responded "My sweetie, you're the heart of our family" and hugged her back. The boy in yellow clothes on the left said happily, "Folks, let's dance together to celebrate!" The girl on the far right immediately replied: "I'll bring the music!", Latin American music played in the background, the woman in the orange skirt on the left (Julietta) smiled and nodded, and the woman with braids on the right (Louisa) clenched her fists and waved her arms. Someone in the crowd started to take steps, children clapped along with the rhythm, and the whole family was about to form a circle. Accompanied by cheerful music, skirts flying, they danced on the colorful streets, spreading joy and warmth.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-6-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 7
### Input

#### 📝 Prompt
```
Fixed lens. The standing strong man (captain) clenched his fists and waved his arms and said in Spanish: "Attack in three minutes!" The blond team member stood checking the firearms, and the green-haired team member held onto the tactical flashlight. The black team members put their shoulders to each other and asked their companions in Spanish: "Flanking?" The captain nodded and said in Spanish: "Old rules, keep alive for interrogation." All members were solemn, completed tactical gestures amidst the sound of equipment clashing, and stood up in tacit understanding. Everyone was ready, and the two boys on the left also stood up first and prepared to fight.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-1.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-7-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 8
### Input

#### 📝 Prompt
```
0-3 seconds: The alarm clock sounds at the beginning, and picture 1 appears in the hazy screen;
3-10 seconds: Pan the camera quickly and turn to the opposite side to take a close-up of the man’s face. The man helplessly asks the girl to get up. The tone and timbre refer to @Video 1;
10-12 seconds: The girl pouted and hid under the quilt;
12-15 seconds: Switch to the whole body of the male protagonist, he sighed and said: "There is really nothing I can do against you!"
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 9
### Input

#### 📝 Prompt
```
Monkey in @Picture 1 walks towards the counter of the milk tea shop. The camera follows him. A Bichon Frize waiter in @Picture 2 is wiping the production tools at the bar. Monkey orders the waiter in a Sichuan accent: "Yao Meier, do you have a farewell to my concubine?"
Cut shot, close-up.
The waiter put down what he was doing, gave the old man a strange look and replied: "No, do you want American style?"
Cut to show the monkey.
He scratched his head and muttered something: "Is everything okay...? I have something to do! My grandson asked me to buy a milk tea, so I just called him Farewell My Concubine."
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-9-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 10
### Input

#### 📝 Prompt
```
Use popular science style and tone to interpret the content in picture 1, including Wukong going to Cuiyun Mountain to borrow a banana fan from Princess Iron Fan in order to cross the Flame Mountain. Princess Iron Fan wanted to take revenge because her red boy was surrendered by Wukong and worshiped Guanyin as a child. Mother and son were separated and she refused to borrow the fan in return. Wukong tried to persuade him to no avail, and the two immediately began to tell a story about their dispute.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-1.jpg" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-10-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Lens continuity (one shot to the end) is stronger

## Case 1
### Input

#### 📝 Prompt
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5, a one-shot tracking shot, following the runner from the street up the stairs, through the corridor, onto the roof, and finally overlooking the city.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Taking @Picture 1 as the first frame, the picture is zoomed out of the plane window. Clouds slowly float into the frame. One of them is a cloud decorated with colorful jelly beans, always in the center of the picture, and then slowly transforms into the ice cream of @Picture 2. The camera zooms back to the cabin. @Picture 3, who is sitting by the window, reaches out to take the ice cream from the window and takes a bite. His mouth is covered with cream and a sweet smile spreads on his face.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-2-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
In the style of a spy film, @Picture 1 is the first frame. The camera follows the female agent in a red windbreaker walking forward. The camera follows the panoramic view. Passers-by keep blocking the woman in red as she walks to a corner. Refer to the corner building in @Picture 2. The fixed shot of the woman in red leaves the screen and disappears around the corner. A girl wearing a mask hides in the corner and stares at her fiercely. The image of the masked girl refers to @Picture 3. Only the image is referenced. The girl is standing at the corner. The camera panned forward to the female agent in red. She walked into a mansion and disappeared. For the mansion, please refer to @Picture 4. Don’t cut the camera during the whole process, just take one shot to the end.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
Based on the outdoor shot of @Picture 1, the first-person subjective perspective zooms in to a close-up view of the environment inside the wooden house. A deer @Picture 2 and a sheep @Picture 3 are drinking tea and chatting by the fire. The style of the close-up tea cup when the camera moves forward is referred to @Picture 4.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-4.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-4-5.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5, a thrilling shot of the roller coaster from the subjective perspective. The speed of the roller coaster is getting faster and faster.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-5.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-5-6.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## High usability for video editing
Sometimes you already have a video, and you don’t want to find a picture from scratch or redo it, but you just want to adjust a small part of the action, extend it by a few seconds, or make the character performance closer to your idea. Now you can directly use existing videos as input and specify clips, actions or rhythms for targeted modifications without changing other content. No need to re-generate, and adjustments can be completed quickly

## Case 1
### Input

#### 📝 Prompt
```
Subverting the plot in @Video 1, the man's eyes suddenly changed from gentle to cold and fierce. At the moment when the heroine was defenseless, he violently pushed the heroine from the bridge and pushed the heroine into the water. The movements are crisp and neat, with long-planned determination and no hesitation, completely subverting the original affectionate character setting. The moment the heroine fell into the water, there was no scream, only a look of disbelief. She looked up and shouted at the hero: "You have been lying to me from the beginning!" The hero stood on the bridge with a cold smile on his face and whispered to the water: "This is what you owe my family."
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
Subvert the entire plot of @video 1
0-3 seconds: A man in a suit is sitting in a bar with a calm expression and a glass of wine in his hand. The camera advances slowly, the light and shadow are advanced, and the atmosphere is serious. The ambient sound was low, and the man in a suit whispered, "This business is huge."
3-6 seconds: The woman behind her looks nervous and asks, "How big is it?" The man in the suit raises his eyes and lowers his voice: "It's very big." The camera cuts to a close-up of his hands - he puts down the wine glass, full of aura.
6-9 seconds of footage: Suddenly the man in a suit took out a large snack gift bag from under the table and placed it on the table with a thud.
9-12 seconds: The woman behind her hands originally placed on her waist, her muscles changed from stiff to relaxed, and her whole expression relaxed. The atmosphere of the picture becomes relaxed.
13-15 second screen: The man in a suit takes out a bag of snacks for the woman, the camera zooms out to show the panoramic view of the tavern, the picture becomes transparent and blurry - the subtitle pops up "No matter how busy you are, remember to eat some snacks~"
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-1.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
The female lead singer in video 1 is replaced by the male lead singer in picture 1. The movements are completely imitated in the original video. There should be no camera cuts. The band sings the music.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
Change the woman's hairstyle in video 1 to long red hair, and the great white shark in picture 1 slowly emerges half of her head behind her.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 5
### Input

#### 📝 Prompt
```
In Video 1, the camera pans to the right. The fried chicken boss is busy handing the fried chicken to the queuing customers, saying in Mandarin, "Do his job, do your job, everyone queues up in a civilized manner." After saying this, he goes to get the paper bag to put the fried chicken. A close-up shows the boss taking the paper bag with the picture 1 printed on it, and a close-up showing the hand passing it to the customer.
```

#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-2.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-3.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Can perform music card points

## Case 1
### Input

#### 📝 Prompt
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
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

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
@Picture 1 @Picture 2 @Picture 3 @Picture 4 @Picture 5 @Picture 6 @Picture 7 The pictures in the picture are stuck according to the position and overall rhythm of the key frames in the @ video. The characters in the picture are more dynamic, the overall picture style is more dreamy, and the picture tension is strong. You can change the scene of the reference picture according to the music and picture needs, and supplement the light and shadow changes in the picture.
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

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
@Picture 1@Picture 2@Picture 3@Picture 4@Picture 5@Picture 6 of the scenery scene picture, refer to the picture rhythm in the @video, the picture style and music rhythm between transitions to make points
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

📥 *Click on the Gif image to download the video*

## Case 4
### Input

#### 📝 Prompt
```
An 8-second intellectual game-style combat animation clip that fits the theme of revenge. 0-3 seconds: In the storyboard 1, the heroine turns around and sits down, then turns the camera. The heroine makes a move and says "you lose", refer to the storyboard 2. 3-4 seconds: Pan the camera quickly and turn to the close-up of the man opposite, refer to the storyboard 3. The man grits his teeth and is very dissatisfied with the result. 4-6 seconds: Cut to an overhead shot, the woman makes a move, and the people on the opposite side are amazed, refer to storyboard 4. 6-8 seconds: The camera pans down quickly, the screen transitions to black, then the screen gradually brightens, in a dark room, the woman looks at the moonlight outside the window and quietly says "We'll see", refer to storyboard 5.
```

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Emotional interpretation is better

## Case 1
### Input

#### 📝 Prompt
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-3.gif" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 2
### Input

#### 📝 Prompt
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
```
#### Image
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-3.png" alt="1" width="400" height="auto">

### Output
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-2-4.gif" width="600"></a>

📥 *Click on the Gif image to download the video*

## Case 3
### Input

#### 📝 Prompt
```
The girl in the poster is constantly changing her clothes. The clothes refer to the style of @Picture 1 @Picture 2. She is holding the bag from @Picture 3. The rhythm of the video refers to @Video.
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

📥 *Click on the Gif image to download the video*


# 🏁 Closing Words
The multi-modal capabilities of Seedance 2.0 are constantly evolving. We are committed to updating our features and supporting even more input combinations. We hope this manual helps you unleash your creativity!

If you encounter bugs, have suggestions, or want to share specific use cases, please reach out to us! We will continue to optimize the model to ensure Jimeng remains a tool that brings both productivity and joy to your creative journey. ❤️
