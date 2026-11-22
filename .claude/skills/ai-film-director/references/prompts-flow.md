# Prompt templates — Google Flow (Nano Banana) images and Veo / Omni video

Status legend: **[G]** = based on Google's official Veo 3.1 guide ([Google Cloud, Oct 2025](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)); **[C]** = community method from the notes; **[U]** = authored for this kit, **untested** — validate on 3–4 generations before a production run.

Write prompts in English. Replace `[...]`. Paste the blocks (CHARACTER / LOCATION / LIGHT / STYLE) **verbatim** every time.

---

## 0. Fixed blocks (fill once in the bibles, paste everywhere) [C]
```
CHARACTER A: CHAR_MINA — Mina, 9-year-old girl, round face, big dark-brown eyes, short black bob with straight fringe, mustard-yellow knit sweater, teal scarf, brown corduroy trousers, red sneakers, brass key on a cord around her neck.
CHARACTER B: CHAR_[...] — [...]
LOCATION: LOC_BAZAAR — covered brick bazaar corridor, entrance arch frame-left, spice stall centre, exit corridor frame-right, hanging brass lamps.
LIGHT: late afternoon, warm low sun from frame-left through roof openings, soft long shadows, dust in the air.
STYLE: [one STYLE LOCK from section 4, verbatim].
```
Keep each descriptor ≤40 words. "Never paraphrase" is the whole method ([invideo character bible](https://invideo.io/faq/how-do-you-create-a-character-bible-for-ai-video-to-lock/), [technave](https://technave.com/gadget/How-to-get-consistent-characters-with-Google-Veo-3-and-Flow-43421.html)).

---

## 1. Nano Banana / Flow image prompts

Tips from the notes: generate all sheets and plates in the **same Nano Banana thread** with the same STYLE sentence; Nano Banana Pro is cleaner/more adherent, some find it "stock-photo-clean" — try both Pro and Nano Banana 2 and compare ([invideo](https://invideo.io/faq/how-do-you-create-a-multi-angle-character-turnaround/)). Use 2–3 refs with the same outfit/hair; don't mix outfits ([Artlist](https://artlist.io/blog/consistent-character-ai/)).

### T1. Hero character image [C/U]
```
Full-body character design of [NAME], [age range] [species/person], [height/build, e.g. 4 heads tall, rounded], [face: shape, eye colour, distinctive marks], [hair: colour, length, style], wearing [exact outfit: top, bottom, shoes, accessories with colours]. Neutral standing pose, facing camera, arms relaxed, plain mid-grey seamless background, even soft studio lighting. Style: [STYLE LOCK]. No text.
```
Generate 4–8, user picks one = canon (`CHAR_X_hero_v1.png`).

### T2. Turnaround sheet (attach hero) [C]
Two-pass method: identity first, then turnaround ([invideo](https://invideo.io/faq/how-do-you-create-a-character-reference-sheet-using-nano/)).
```
Using the attached image of [NAME], create a character reference sheet on a plain light-grey background: front view, three-quarter view, side profile, back view — full body, same scale, standing on one ground line — plus a head close-up and a mid-shot. Keep face, proportions, hair and outfit exactly identical to the attached image. Same [STYLE LOCK]. Clean layout, no labels, no text.
```

### T3. Expression sheet (attach hero + turnaround) [U]
```
Using the attached images of [NAME] (image 1 = identity, image 2 = turnaround), create an expression sheet: six head-and-shoulders portraits in a 3x2 grid on plain light-grey — neutral, happy, sad, angry, surprised, thinking. Same face, hair, outfit collar and [STYLE LOCK] in every cell. Even lighting, no labels, no text.
```
Optional hands/pose sheet: replace the six expressions with "open hand, pointing, holding [PROP], walking, running, sitting".

### T4. Location plate (empty set) [C]
```
Empty [location], [key props and positions: left / centre / right], [LIGHT block], [palette]. Wide establishing shot, eye level, [16:9 / 9:16]. Style: [STYLE LOCK]. No characters, no text.
```
Reverse angle (attach the wide):
```
Using the attached image as the same location, show the reverse angle: the camera now faces [the entrance arch], keeping every prop, material, colour and the same light direction consistent with the attached plate. Empty, no characters, no text. [STYLE LOCK].
```

### T5. Keyframe with refs (character placed in plate) [C/U]
```
Image 1 = [NAME A] (identity, face, outfit). Image 2 = [LOC_ID] plate (background, layout, light). [Image 3 = PROP_ID.]
Create the opening frame of shot [S03_SH012]: [shot size], [angle], [lens feel, e.g. 35mm, shallow depth of field]. [CHARACTER A block]. [NAME A] is [pose/action start, e.g. standing at the spice stall, reaching toward a jar] on frame-[left/right], facing [direction]. Background exactly as image 2. [LIGHT block]. [STYLE LOCK]. [16:9]. No text.
```

### T6. Multi-character still (2–5 people) [C/U]
Nano Banana Pro keeps up to 5 people consistent; compose groups as stills first, then animate ([Google](https://blog.google/technology/ai/nano-banana-pro/)). Keep the video shot itself to 2–3 subjects.
```
Image 1 = [A] sheet. Image 2 = [B] sheet. Image 3 = [C] sheet. Image 4 = [LOC] plate.
[Shot size], eye level. [A] stands frame-left facing right, [B] stands frame-right facing left, [C] sits centre in the background. [CHARACTER A block]. [CHARACTER B block]. [CHARACTER C block]. Each character keeps exactly the face, outfit and proportions of their reference. Background from image 4. [LIGHT block]. [STYLE LOCK]. No text.
```

### T7. Last frame from first frame (for FLF2V) [U]
```
Edit the attached frame (shot [ID] first frame) into the final moment of the same shot: [NAME] has now [end pose, e.g. lifted the jar to eye level and turned her head toward frame-right]. Camera [same / slightly closer, as after a slow push-in]. Keep face, outfit, background, props and light identical. [STYLE LOCK]. No text.
```

### T8. Drift repair (bad hand-off frame) [C/U]
Use Flow's lasso tool on the drifted region where possible ([Google Feb 2026](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates-february-2026/)).
```
Edit the attached frame: make [NAME]'s face, hair and outfit match the attached reference sheet exactly ([list the drift: the scarf is teal, not orange; the fringe is straight; the key hangs on the chest]). Change nothing else: keep pose, camera angle, background and lighting identical.
```

### T9. Prop sheet [U]
```
Product-style reference sheet of [PROP: e.g. an old brass key with a ring-shaped bow and three teeth, worn patina], shown front, side, back and in a hand for scale, plain light-grey background, even light. [STYLE LOCK]. No text.
```

### T10. Outfit change (same identity) [U]
```
Using the attached hero image of [NAME], keep the face, hair, body proportions and [STYLE LOCK] identical and change only the outfit to [outfit B with colours]. Same neutral pose, same background, no text.
```

---

## 2. Veo 3.1 / Omni video prompts (in Flow)

Clips: Veo 3.1 4/6/8 s, 720p/1080p, 16:9 or 9:16; Omni Flash 1.2 up to 15 s. Extend continues from the last 24 frames; Jump to keeps context from the last frame ([Flow FAQ](https://labs.google/fx/en-gb/tools/flow/faq)). Omni: text-only likeness unreliable, keep 2–3 subjects, multi-turn edits in one thread are most consistent ([invideo](https://invideo.io/blog/gemini-omni-flash-guide/)).

**Google formula [G]:** `[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]`
Official example: *"Medium shot, a tired corporate worker, rubbing his temples in exhaustion, in front of a bulky 1980s computer in a cluttered office late at night. The scene is lit by the harsh fluorescent overhead lights and the green glow of the monochrome monitor. Retro aesthetic, shot as if on 1980s color film, slightly grainy."*

**Audio syntax [G]:**
- Dialogue in quotes: `A woman says, "We have to leave now."`
- `SFX: thunder cracks in the distance.`
- `Ambient noise: the quiet hum of a starship bridge.`
- `Emotion: wonder and reverence.` (appears in Google examples)
- Negatives positively: "a desolate landscape with no buildings or roads", not "no man-made structures".

### V1. Ingredients to Video (max 3 refs in Veo) [G/C]
Official role phrasing: *"Using the provided images for the detective, the woman, and the office setting, create a medium shot of the detective behind his desk..."*
```
Using the provided images for [CHARACTER A], [CHARACTER B] and the [LOCATION], create a [shot size] [camera movement] shot.
[CHARACTER A block]. [CHARACTER B block].
Action: [one clear action, one beat].
[CHARACTER A] says in a [tone] voice, "[short line, under ~8 words]."
[LOCATION block]. [LIGHT block]. [STYLE LOCK].
SFX: [one or two sounds]. Ambient noise: [room tone].
Keep the characters' faces, outfits and proportions identical to the reference images.
```
Slot split for 2 characters: A sheet, B sheet, location plate.

### V2. Frames to Video, continuity shot [C/U]
```
Continue directly from the provided first frame. [Camera move, e.g. slow dolly-in] as [CHARACTER A] [action]. Same lighting, same time of day, same outfit. [Dialogue in quotes]. SFX: [...]. Ambient noise: [...]. [STYLE LOCK].
```

### V3. First + last frame transition [G]
Official: *"The camera performs a smooth 180-degree arc shot, starting with the front-facing view of the singer and circling around her to seamlessly end on the POV shot from behind her on stage..."*
```
The camera performs a [smooth 90-degree arc / slow push-in / crane up], starting on [frame 1 description] and ending exactly on [frame 2 description]. [Character action between]. Consistent lighting throughout. SFX: [...]. [STYLE LOCK].
```

### V4. Timestamped multi-shot (one 8–15 s generation) [G]
Official example (abridged): *"[00:00-00:02] Medium shot from behind a young female explorer ... pushes aside a large jungle vine to reveal a hidden path. [00:02-00:04] Reverse shot of the explorer's freckled face ... SFX: The rustle of dense leaves... [00:04-00:06] Tracking shot following the explorer ... Emotion: Wonder and reverence. [00:06-00:08] Wide, high-angle crane shot ... SFX: A swelling, gentle orchestral score begins to play."*
```
[STYLE LOCK]. [CHARACTER A block]. [CHARACTER B block]. [LOCATION block]. [LIGHT block].
[00:00-00:03] Wide shot, [action 1]. Ambient noise: [...].
[00:03-00:05] Close-up on [A]'s face, [reaction]. She says, "[line]."
[00:05-00:08] Over-the-shoulder shot from behind [B], [action 2]. SFX: [...].
```

### V5. Silent picture for decoupled audio [U]
Use when Persian dialogue will be added in the edit (recommended).
```
[Shot]. [CHARACTER block]. [Action]. [LOCATION/LIGHT/STYLE]. Ambient noise: [room tone only]. The character listens silently with mouth closed; no dialogue, no music.
```

### V6. Optional JSON wrapper [C]
No official schema exists; tests show structure matters, not JSON ([DataLLMLab](https://www.datallmlab.com/blog/json-prompts-for-ai-video.html), [The Creative Possible](https://creativepossible.substack.com/p/should-you-prompt-in-json)). Use only if the user edits fields more reliably this way.
```json
{
  "shot_id": "S03_SH012",
  "style": "[STYLE LOCK]",
  "characters": [{"id": "CHAR_MINA", "description": "[block]"}],
  "location": "[LOC block]",
  "lighting": "[LIGHT block]",
  "shot": {"size": "medium", "camera": "slow dolly-in", "lens": "35mm, shallow depth of field"},
  "action": "[one beat]",
  "dialogue": [{"speaker": "CHAR_MINA", "line": "[line]", "tone": "warm"}],
  "audio": {"sfx": "[...]", "ambient": "[...]", "music": "none"},
  "continuity": {"screen_direction": "L->R", "props": ["PROP_KEY"], "time_of_day": "late afternoon"},
  "avoid_by_description": "clean frame with no on-screen text or subtitles"
}
```

---

## 3. Short motion prompt for ComfyUI I2V (Wan / LTX) [C/U]
Wan responds to `Overall description + Shot number + Timestamp + Shot content` for multi-shot, and 80–120 words to avoid generic defaults ([Alibaba guide](https://www.alibabacloud.com/help/en/model-studio/text-to-video-prompt), community). For I2V from an approved keyframe, describe **motion**, not appearance again in detail:
```
[Shot size], [lens], [ONE camera move + speed, e.g. slow push-in]. [NAME, short descriptor] [one action with timing, e.g. lifts the jar slowly, then smiles]. Background stays still except [cloth sway / dust / lamp flicker]. [LIGHT sentence]. [STYLE LOCK]. Smooth, natural motion.
```
Negative (Wan/LTX field only, practitioner convention, not sourced): `blurry, extra fingers, deformed hands, text, watermark, logo, flicker, morphing face, colour shift`.

---

## 4. Style locks (paste verbatim as STYLE) — all **[U]** property-based, no studio names
Describe style by properties, not studio/artist names (ethics, refusals — [The Decoder](https://the-decoder.com/openai-blocks-artist-names-in-image-prompts-but-allows-studio-styles/)). For flat/traditional styles ask for limited motion (parallax, breathing, cloth sway).

**Stylized 3D kids**
```
stylized 3D CG animation, appealing rounded character design with large expressive eyes, soft subsurface-scattering skin, physically based materials, warm cinematic key light with soft bounce, gentle global illumination, shallow depth of field, rich but soft saturated palette, family-feature-film polish
```
**2D storybook (cel)**
```
hand-drawn 2D cel animation, clean thin ink lines, flat cel shading with soft single-tone shadows, lush painted watercolor-gouache backgrounds, billowing cumulus clouds, pastoral greens and sky blues, gentle wind in grass, nostalgic serene mood, limited animation on 2s
```
**Claymation**
```
stop-motion claymation, plasticine characters with visible fingerprints and tool marks, handmade miniature felt and cardboard set, slightly uneven frame cadence (animated on 2s, 12fps feel), practical miniature lighting, tiny depth of field like macro photography
```
(Expect anatomy issues on non-humanoid characters; Veo may ignore negatives there — [forum](https://discuss.google.dev/t/veo-3-1-model-ignores-negative-prompts-for-non-humanoid-character-anatomy/351836). Fix hand-off frames with T8.)

**Paper cut-out**
```
layered paper cut-out animation, construction-paper textures with torn and scissor-cut edges, flat layers with small drop shadows between planes, multiplane parallax, puppet-like jointed limbs, top-lit tabletop
```
**Watercolor storybook**
```
children's storybook watercolor illustration, wet-on-wet washes with soft blooms, visible paper grain, loose pencil underdrawing, white paper showing through, muted warm palette, gentle page-turn pacing
```
**Persian miniature** (traits from [Wikipedia](https://en.wikipedia.org/wiki/Persian_miniature), [World History Encyclopedia](https://www.worldhistory.org/article/1811/persian-miniature-painting/))
```
Persian court miniature painting, flat perspective with stacked tilted ground planes, no cast shadows, even light, round and three-quarter faces, jewel-tone mineral pigments (lapis ultramarine, malachite green, vermilion, red ochre), shell-gold and gold-leaf highlights, fine brush outlines, intricate floral and arabesque patterns, gold-ruled decorative border, cypress trees and stylized rocks; motion: gentle parallax and limited figure animation
```
**Realistic historical cinematic**
```
photoreal historical drama, natural skin texture, period-accurate handmade costumes and materials, 35mm and 50mm lenses, shallow depth of field, motivated natural light (sun, oil lamps, candles), soft haze, earthy desaturated palette with warm highlights, subtle film grain, slow motivated camera moves
```
(Realistic faces trigger more safety blocks and need YouTube "altered/synthetic" disclosure — see `channels.md`.)
