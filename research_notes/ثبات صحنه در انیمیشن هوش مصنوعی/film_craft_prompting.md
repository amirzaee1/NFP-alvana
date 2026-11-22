# Film-making Craft for AI Video, Tool-Agnostic (as of Nov 2026)

Research notes for the report writer. Scope: pre-production to edit, prompt formulas, vocabulary, continuity, animation styles, audio, and editing for consistent, cinematic animated shorts made with Veo, Kling, Runway, Sora, Wan, Midjourney and Nano Banana.

**How these notes were made.** This cloud session has a restricted network. I could fetch only one primary page in full: the Google Cloud Veo 3.1 prompting guide. These fetches failed because the hosts are not allowed: pjace.beehiiv.com, blog.fal.ai, curiousrefuge.com, docs.cloud.google.com, and cookbook.openai.com. Everything else comes from search-result summaries. They are marked "(search snippet)" where the detail could not be checked against the full page. Craft knowledge that I could not source in this session is kept under Inferences or Gaps, not stated as cited fact.

---

## 1. Pipeline used by top AI filmmakers, with document templates

### Takeaway
Professional AI shorts follow the classic film pipeline. The difference is that **consistency is engineered before any video is generated**. Teams lock character sheets, turnarounds, a style bible and location plates first. Then they generate keyframes (stills) and animate them with image-to-video, rather than relying on text-to-video. Practitioners consistently say that story and the hook matter more than secret prompts.

### Cited Findings
- PJ Accetturo (Genre.ai) published a free "Make an AI TV Show in 15 Easy Steps" guide about a 25-minute fully AI show made in about 3 months. Its step list could not be fetched (host blocked). — [PJ's Newsletter](https://pjace.beehiiv.com/p/make-an-ai-tv-show-in-15-easy-steps) (search snippet)
- Accetturo staffs projects in **pods of five: writer, director, cinematographer, animator, editor**. This means the traditional film roles survive in AI production. — [Wrapbook On Production podcast](https://www.wrapbook.com/on-production-podcast/the-real-economics-of-ai-native-production-featuring-pj-accetturo) (search snippet)
- Accetturo found that no top AI filmmaker's prompts beat any other's. He says the hook and storytelling matter more, and that AI creators without film backgrounds struggle because they don't understand story. — [Saturation podcast](https://saturation.io/podcast/episode/pj-accetturo) (search snippet)
- He also published a reusable Midjourney prompt format for cinematic AI films. — [PJ's Newsletter, "PJ's secret Midjourney prompt"](https://pjace.beehiiv.com/p/pj-s-secret-midjourney-prompt) (search snippet; content not verified)
- Curious Refuge describes a "professional workflow" for consistent characters that combines several tools and "typically takes some back and forth". The steps themselves could not be fetched. — [Curious Refuge](https://curiousrefuge.com/blog/how-to-create-consistent-ai-characters) (search snippet)
- A "director's bible" (also called a style, visual or production bible) covers camera, lighting, palette, composition, mood and sound. The source recommends building multi-angle character sheets and **locking them before generating any video**, then attaching them as references to every prompt. It also suggests saving the style block to the agent's persistent context. — [invideo FAQ: director's bible](https://invideo.io/faq/what-is-a-directors-bible-for-ai-filmmaking-and-how-do/), [invideo FAQ: character bible](https://invideo.io/faq/how-do-you-create-a-character-bible-for-ai-video-to-lock/) (vendor content)
- "The fix is a document, not a better prompt." The argument is that character drift is solved with a written character bible, not prompt tweaking. — [HackerNoon](https://hackernoon.com/your-ai-hero-turns-into-a-stranger-every-shot-the-fix-is-a-document-not-a-better-prompt) (search snippet)
- Google's own Veo 3.1 workflow follows the same pattern. Generate reference images of each character and the setting with Gemini 2.5 Flash Image (Nano Banana). Then reuse the same images ("Ingredients to Video") in every shot prompt. — [Google Cloud Blog, Ultimate prompting guide for Veo 3.1](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Runway says Gen-4 References keep characters, locations and objects consistent across scenes, starting from a single reference image. — [Runway Research: Introducing Gen-4](https://runwayml.com/research/introducing-runway-gen-4), [Runway Help: Gen-4 References](https://help.runwayml.com/hc/en-us/articles/39789879462419) (search snippet)
- Kling 3.0 keeps subjects recognizable across shots with "Elements" (references written as `@Element1`, `@Element2` in the prompt) and the Omni multi-element workflow. — [Kling: Omni reference workflows](https://kling.ai/blog/kling-video-3-omni-reference-workflows-multi-element), [fal.ai Kling 3.0 guide](https://blog.fal.ai/kling-3-0-prompting-guide) (search snippets)
- Festival-level work is image-heavy. Jacob Adler's *Total Pixel Space* won the 2025 Runway AIFF Grand Prix. He worked on the 9:28 film for over a year and generated tens of thousands of images. Gold went to *JAILBIRD* (Andrew Salter) and Silver to *ONE* (Ricardo Villavicencio and Edward Saatchi). — [Fortune](https://fortune.com/2025/07/03/runway-video-ai-3-billion-film-festival-founders-gaming-building-immersive-worlds/), [AIFF](https://aiff.runwayml.com) (search snippets)

### Inferences
- The canonical 2026 pipeline:
  1. Logline
  2. Script
  3. Beat sheet
  4. Shot list
  5. Style bible
  6. Character bible and turnarounds
  7. Location plates
  8. Keyframes (start frame, optionally end frame)
  9. Image-to-video (or reference-to-video)
  10. Voice, music and SFX
  11. Edit, grade and loudness
- Steps 5 to 8 are the "consistency lock". Every vendor guide (Google, Runway, Kling) has converged on references, and none relies on text-only descriptions.
- "Animate a still" (image-to-video) is the consistency backbone. Text-to-video is for exploration only.

**Copy-paste templates**

```
LOGLINE (1 sentence)
When [INCITING EVENT], a [FLAWED PROTAGONIST] must [GOAL] before [STAKES/DEADLINE], but [ANTAGONISTIC FORCE].
Runtime: [60s / 3 min]   Format: [9:16 Reel / 16:9]   Tone: [whimsical / melancholic]
```

```
BEAT SHEET (short film, 60-180 s)
B1 Hook (0-3s): striking image/question
B2 Setup: who, where, want
B3 Inciting incident
B4 Rising attempts (2-3 beats, escalate)
B5 Low point / twist
B6 Climax: choice/action
B7 Resolution + final image (mirror of B1)
```

```
SHOT LIST (one row per generation)
#  | Beat | Dur(s) | Shot size | Angle | Lens | Move | Subject+Action | Screen dir | Refs used | Dialogue/SFX | Notes
01 | B1   | 4      | EWS       | high  | 24mm | slow push-in | Mina walks L->R across bazaar | L->R | CHAR_MINA, LOC_BAZAAR, STYLE | Ambient: crowd murmur | keyframe 01A
```

```
STYLE BIBLE (paste verbatim as STYLE LOCK at end of every prompt)
Medium/look: [e.g., hand-painted 2D animation, gouache backgrounds, clean ink line]
Palette: [5 named colours + hex]   Contrast: [low/soft]   Grain: [subtle film grain]
Lighting rule: [warm key from frame-left, cool fill, golden hour]
Lens/camera rule: [35mm & 50mm only; slow motivated moves; no handheld]
Composition rule: [centered symmetrical; horizon low third]
Forbidden: [no text, no logos, no photoreal skin, no lens flares]
Aspect & fps: [9:16, 24fps]
```

```
CHARACTER BIBLE (one per character; ID token reused everywhere)
ID: CHAR_MINA
Descriptor block (<=40 words, never paraphrase): "Mina, 9-year-old girl, round face, big dark-brown eyes,
short black bob with straight fringe, mustard-yellow knit sweater, teal scarf, brown corduroy trousers, red sneakers"
Turnaround: front / 3/4 / profile / back / expressions sheet (happy, sad, angry, surprised) / hands
Props: [brass key on cord around neck, always visible]
Do-not-change: [scarf colour, fringe, key]
```

```
LOCATION PLATE
ID: LOC_BAZAAR   Time: late afternoon   Weather: dusty, clear
Key geography: entrance arch screen-left, spice stall centre, exit corridor screen-right (defines screen direction)
Plates: establishing wide, reverse angle, 2 close details
```

### Gaps
- The exact 15 steps in Accetturo's guide and Curious Refuge's tool-by-tool workflow could not be retrieved (hosts blocked).
- No detailed making-of for the 2025/2026 AIFF winners turned up. There is also no reliable public account of the tool stacks of named AI studios.

---

## 2. Prompt formulas, descriptor blocks, style locks, negative prompts and JSON

### Takeaway
All the major models answer best to a **film-director-style sentence order**. Lead with cinematography (shot size, lens, camera move), then subject, action, setting, lighting, style, and finally audio. Consistency comes from reusing a **fixed descriptor block and style lock word for word**, alongside reference images. Phrase constraints positively. JSON prompts help only because they force structure; there is no evidence that the JSON syntax itself improves results.

### Cited Findings
- **Google's Veo 3.1 formula: `[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]`.** Example from the guide: "Medium shot, a tired corporate worker, rubbing his temples in exhaustion, in front of a bulky 1980s computer in a cluttered office late at night. The scene is lit by the harsh fluorescent overhead lights and the green glow of the monochrome monitor. Retro aesthetic, shot as if on 1980s color film, slightly grainy." — [Google Cloud Blog, Veo 3.1 guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Veo audio syntax:** put dialogue in quotation marks (`A woman says, "We have to leave now."`). Label effects `SFX: thunder cracks in the distance.` and background sound `Ambient noise: the quiet hum of a starship bridge.`. An `Emotion:` tag also appears in the examples. — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Veo timestamp prompting** puts several shots in one 8 s generation, using lines like `[00:00-00:02] Medium shot from behind a young female explorer ...`, `[00:02-00:04] Reverse shot of the explorer's freckled face ...`. Clips run 4, 6 or 8 s, at 720p or 1080p, in 16:9 or 9:16. — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Veo on negative phrasing:** "Specify 'a desolate landscape with no buildings or roads' instead of 'no man-made structures'". In other words, describe what you want. — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Veo reference reuse** repeats the same lead phrase in every shot: "Using the provided images for the detective, the woman, and the office setting, create a medium shot of the detective behind his desk...". **First-and-last-frame** mode: "The camera performs a smooth 180-degree arc shot, starting with the front-facing view of the singer and circling around her to seamlessly end on the POV shot from behind her on stage." — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Sora 2:** OpenAI's cookbook reportedly uses a **shot-list format**: camera, lens, lighting, palette, action beats (counted in seconds), then dialogue. Third-party summaries disagree on whether it has 4 or 5 blocks. Clip length (4/8/12 s) and resolution are API parameters, not prose. — [OpenAI Cookbook, Sora 2 prompting guide](https://cookbook.openai.com/examples/sora/sora2_prompting_guide) (not fetched); summaries: [fal.ai](https://fal.ai/learn/devs/how-to-write-prompts-sora-2), [Leonardo](https://www.leonardo.ai/news/sora-prompt-guide), [Artlist](https://artlist.io/blog/sora-2-prompting/)
- **Kling 3.0:** write prompts as scene direction rather than object lists. One guide's layer order is scene, characters, action, camera, then audio and style. Automatic Multi-Shot lets the model plan coverage; Custom Multi-Shot defines each shot and its duration. Total length limits are reported inconsistently (up to 6 shots; about 15 s total; 3 to 15 s clips). — [Kling Multi-Shot guide](https://kling.ai/blog/kling-video-3-multi-shot-guide), [Kling prompt guide](https://kling.ai/blog/kling-ai-prompt-guide), [Magic Hour Kling 3.0 reference](https://magichour.ai/blog/kling-30-reference-guide) (search snippets)
- **Runway Gen-4/4.5:** prompt elements include camera motion, motion style and timing, direction and speed, and subject motion. Describe the motion first, then reinforce a locked camera in natural language. Contradictory cues backfire: in Runway's example, a "motionless parked car" plus camera movement produced unwanted motion. A third-party guide advises one clear action per clip. — [Runway Academy prompt guide](https://academy.runwayml.com/prompt-guide), [Runway AI camera prompts](https://runway.com/resources/ai-camera-prompts), [Runway Image-to-Video guide](https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide), [Picsart](https://picsart.com/tutorials/how-to-generate-videos-with-runway-gen-4) (search snippets)
- **Runway references:** the references carry identity and the prompt carries context, action and atmosphere. — [ImagineArt, Gen-4 References](https://www.imagine.art/blogs/prompt-guide-runway-gen-4-references) (third party)
- **Wan (Alibaba):** the official guide controls light source, lighting environment, shot size, camera angle, lens and camera movement, and includes a cinematic term dictionary. Its multi-shot formula is `Overall description + Shot number + Timestamp + Shot content`. Wan 2.7 dropped the `shot_type` parameter. Community advice: 80 to 120 words, because short prompts fall back to a generic "cinematic" default. — [Alibaba Cloud Model Studio video prompt guide](https://www.alibabacloud.com/help/en/model-studio/text-to-video-prompt), [Indie Hackers](https://www.indiehackers.com/post/wan-2-2-what-s-new-how-to-write-killer-prompts-840ecb2713), [Scenario Wan 2.2](https://help.scenario.com/en/articles/wan-2-2-models-the-essentials/) (search snippets)
- **JSON evidence:** no official Google statement says Veo parses JSON. The Gemini JSON-schema feature is a separate thing. A widely shared claim of an "89% reduction in cross-contamination errors" gives no methodology. A side-by-side video test concluded that structure matters, not JSON. A vc.ru article is titled "JSON prompts in VEO 3: BUSTED". — [DataLLM Lab](https://www.datallmlab.com/blog/json-prompts-for-ai-video.html), [DEV Community (89% claim)](https://dev.to/yigit-konur/best-practices-of-json-prompting-for-video-generation-models-examples-for-veo-31-1mc0), [Lilys AI summary](https://lilys.ai/notes/1154049), [vc.ru](https://vc.ru/ai/2630266-json-promting-mify-i-realnost), [Artlist JSON guide](https://artlist.io/blog/veo-3-json-prompts/)

### Inferences
- A **universal formula** that maps onto every model above:
  `[SHOT SIZE + ANGLE], [LENS/DOF], [CAMERA MOVE + speed]. [CHARACTER DESCRIPTOR BLOCK] [ONE ACTION, with timing] in [LOCATION DESCRIPTOR], [TIME OF DAY]. [LIGHTING]. [MOOD]. [STYLE LOCK]. Audio: "[dialogue]"; SFX: ...; Ambient: ...`
- Keep **one camera move and one main action per clip**. Runway, Picsart and the Sora summaries all point this way.
- Use JSON only as an internal **authoring and templating format**, for example when an LLM fills fields from the shot list. Then flatten it to prose or keep it as structured text. Do not promise it gives better results.

**Copy-paste: universal shot prompt**
```
[Medium close-up, eye-level, 50mm, shallow depth of field, slow push-in.]
[CHAR_MINA descriptor block, verbatim.] She lifts the brass key to the lock and hesitates, then turns it.
Setting: [LOC_ATTIC descriptor, verbatim], late afternoon.
Lighting: warm sunbeam from a small window frame-left, dust motes, soft cool fill.
Mood: curious, hushed.
STYLE LOCK: [paste style bible line verbatim].
Audio: SFX: a heavy metallic click. Ambient: creaking wooden beams. No music.
```

**Copy-paste: multi-shot / timestamp (Veo, Wan, Kling custom multi-shot)**
```
Overall: [STYLE LOCK]. Characters: [CHAR_A], [CHAR_B]. Location: [LOC_X].
[00:00-00:03] Shot 1 - Wide establishing, high angle, static: ...
[00:03-00:05] Shot 2 - Medium, over-the-shoulder of CHAR_A toward CHAR_B: ... CHAR_B says, "..."
[00:05-00:08] Shot 3 - Close-up reverse on CHAR_A, slow push-in: ... SFX: ...
```

**Copy-paste: structured (JSON) authoring template**, to flatten before sending if the model is prose-only:
```json
{
  "shot_id": "03",
  "duration_s": 6,
  "camera": {"size": "medium close-up", "angle": "low", "lens": "35mm", "move": "slow dolly-in", "dof": "shallow"},
  "subject": "CHAR_MINA (descriptor block verbatim)",
  "action": "turns the brass key, eyes widen",
  "setting": "LOC_ATTIC, late afternoon",
  "lighting": "warm window key frame-left, cool fill, dust motes",
  "mood": "wonder",
  "style_lock": "STYLE_BIBLE_v1 (verbatim)",
  "audio": {"dialogue": null, "sfx": "metallic click", "ambient": "creaking beams", "music": "none"},
  "continuity": {"screen_direction": "L->R", "props": ["brass key"], "time_of_day": "late afternoon"},
  "avoid_phrased_positively": "empty attic with bare wooden floor"
}
```

**Negative-prompt guidance**
- Veo and Sora: describe positively, as above.
- Kling and Wan expose a negative-prompt field. Common entries there: `blurry, extra fingers, deformed hands, text, watermark, logo, flicker, morphing face`. These are practitioner convention; I found no authoritative source for them in this session.

### Gaps
- Could not verify the exact block structure in OpenAI's Sora 2 cookbook (host blocked; secondary sources conflict).
- Midjourney and Nano Banana-specific consistency parameters (e.g., Midjourney `--cref`/`--sref`/`--oref`, or omni-reference in v7) were not researched or verified this session.
- Current Sora 2 availability is unclear: one source says Leonardo lost access after a provider-side change. One unverified source also claims Veo 3 shuts down on 30 June 2026. — [Leonardo](https://www.leonardo.ai/news/sora-prompt-guide), [DEV comparison](https://dev.to/alexmercer_creatives/kling-3-pro-vs-veo-31-comparing-the-best-ai-video-models-of-2026-1d9)

---

## 3. Cinematic vocabulary for prompts

### Takeaway
The models are trained on film language and respond to standard terms. Google, Runway, Wan and Kling all list shot size, angle, lens/focus, camera move and lighting as the core controls.

### Cited Findings
- Veo 3.1 terms. Movement: "dolly shot, tracking shot, crane shot, aerial view, slow pan, POV shot". Composition: "wide shot, close-up, extreme close-up, low angle, two-shot". Lens and focus: "shallow depth of field, wide-angle lens, soft focus, macro lens, deep focus". The examples also use "reverse shot", "high-angle crane shot" and "180-degree arc shot". — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Wan community lighting and shot tags: edge lighting, underlighting, high contrast, overcast, side lighting, medium close-up, low angle, over-the-shoulder, left-heavy composition. — [Hugging Face tutorial](https://www.huggingface.co/blog/MonsterMMORPG/how-to-prompt-wan-models-full-tutorial-and-guide) (search snippet)
- Wan camera motion terms: pan, tilt, dolly, orbital arc, crane. — [Scenario](https://help.scenario.com/en/articles/wan-2-2-models-the-essentials/), [ImagineArt Wan 2.2](https://help.imagine.art/ai-models/video-models/wan-2.2) (search snippets)

### Inferences
Consolidated prompt vocabulary. These are standard film terms; a StudioBinder-style glossary could not be fetched to cross-check them.
- **Shot sizes:** extreme wide / establishing (EWS), wide / long (WS), full shot, medium wide / cowboy, medium (MS), medium close-up (MCU), close-up (CU), extreme close-up (ECU), insert / detail, two-shot, over-the-shoulder (OTS), POV.
- **Angles:** eye-level, low angle, high angle, bird's-eye / top-down, worm's-eye, Dutch / canted, overhead, profile, three-quarter.
- **Camera moves:** static / locked-off, pan, tilt, dolly in / out (push-in, pull-out), truck / crab left-right, pedestal, crane / jib up-down, boom, tracking / follow, orbit / arc (90 or 180 degrees), handheld, Steadicam / gimbal glide, whip pan, crash zoom, dolly-zoom (Vertigo), rack focus, FPV drone, aerial reveal.
- **Lens and focus:** 14 to 24mm wide (distortion, space), 35mm (natural), 50mm (normal), 85mm (portrait compression), 135mm+ telephoto, macro, anamorphic (oval bokeh, horizontal flares), tilt-shift (miniature), shallow / deep depth of field, bokeh, soft focus.
- **Lighting:** key / fill / rim (back) light, three-point, high-key, low-key, chiaroscuro, Rembrandt, silhouette, practical lights, motivated light, golden hour, blue hour, overcast diffuse, hard vs soft light, volumetric light / god rays, haze, neon, candlelight, moonlight, under-lighting, color temperature (warm 3200K / cool 5600K), teal-and-orange grade.
- **Motion and time:** slow motion, time-lapse, speed ramp, freeze frame, match cut, smash cut, J-cut / L-cut (editing).

### Gaps
- StudioBinder and No Film School glossaries were not fetched. I did not cross-check the vocabulary list against a primary film-school source this session.

---

## 4. Continuity rules for AI shots

### Takeaway
Classic continuity rules apply unchanged. AI adds one more failure mode, drift in identity, wardrobe and props. You enforce continuity in **the shot list and keyframes**: screen direction column, props list, time of day, and the references per shot. Each prompt then re-states those items explicitly.

### Cited Findings
- Veo's guide shows continuity craft directly. It sequences reverse shots ("Reverse shot of the explorer's freckled face") and reuses the same character and setting images across shots to keep identity consistent. — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Reference images beat text descriptions for keeping a character consistent. — [Artlist: consistent character AI](https://artlist.io/blog/consistent-character-ai/), [ImagineArt: character consistency](https://www.imagine.art/blogs/ai-character-consistency-film-studio) (search snippets)

### Inferences
These are standard film grammar; no primary source was fetched for them this session. A general reference is [Wikipedia: 180-degree rule](https://en.wikipedia.org/wiki/180-degree_rule) (not fetched).
- **180-degree rule:** keep the camera on one side of the axis between two characters. In prompts, state "CHAR_A on frame-left facing right, CHAR_B on frame-right facing left" in **every** shot of the dialogue.
- **Screen direction:** a journey keeps the same direction (e.g., always left to right) unless a shot shows the turn. Store it as a shot-list column and write "walking from frame-left to frame-right".
- **Eyelines:** in OTS / reverse pairs, the eyeline goes to the opposite side of frame. Write "looking off-screen right, slightly above lens".
- **Matching action:** end shot N on a held pose and start shot N+1 on the same pose. Use the last frame of clip N as the start frame of clip N+1 (first/last-frame mode), and cut on motion.
- **Props and wardrobe:** a "do-not-change" list in the character bible, pasted verbatim. Re-check every keyframe before animating.
- **Time of day and weather:** lock them per scene, and use the same lighting sentence in every shot of the scene.
- **Geography:** the location plate defines where the exits are. An establishing wide comes before the close-ups.
- **QA step:** a contact sheet of all keyframes, reviewed for drift before spending video credits.

### Gaps
- I found no rigorous source on how reliably each model obeys "frame-left / frame-right" instructions.

---

## 5. Animation-specific styles, and the legal/ethical side of naming studios

### Takeaway
Describe a style by its **visual properties**: medium, line, shading, palette, texture, motion cadence. Don't use studio or artist names. That works across all tools, avoids refusals, and is more ethical. OpenAI's stated policy blocks living-artist names but allowed "broader studio styles", and enforcement was inconsistent. Artistic style is generally not copyrightable, but the training-data lawsuits are unresolved.

### Cited Findings
- OpenAI added a refusal for prompts "in the style of a living artist" but permits "broader studio styles". Asking for "Hayao Miyazaki style" was rejected while "Studio Ghibli style" was allowed, and enforcement varied between attempts. — [The Decoder](https://the-decoder.com/openai-blocks-artist-names-in-image-prompts-but-allows-studio-styles/), [TechCrunch](https://techcrunch.com/2025/03/26/openais-viral-studio-ghibli-moment-highlights-ai-copyright-concerns)
- Legal framing: individual artworks are protected by copyright, but artistic style generally is not. OpenAI did not say whether Ghibli films were in its training data. Related artist lawsuits (e.g., Karla Ortiz) are pending. — [TechCrunch](https://techcrunch.com/2025/03/26/openais-viral-studio-ghibli-moment-highlights-ai-copyright-concerns), [Law Journal Newsletters](https://www.lawjournalnewsletters.com/2025/05/01/chatgpts-ghibli-style-images-are-testing-copyright-law) (search snippets; 2025 coverage, current policy not confirmed)
- **Persian miniature, the visual traits to prompt:**
  - flat perspective without shadows or chiaroscuro
  - even light
  - three-quarter and round faces
  - several moments and spaces shown at once
  - mineral pigments: ultramarine from lapis lazuli, malachite green, vermilion, red ochre
  - shell gold and gold leaf on halos, jewelry and throne edges
  - paper dyed or sprinkled with gold or silver
  - decorative ruled borders
  - subjects from royal hunts, battles, mythology and poetry

  Sources: [Wikipedia: Persian miniature](https://en.wikipedia.com/wiki/Persian_miniature), [World History Encyclopedia](https://www.worldhistory.org/article/1811/persian-miniature-painting/), [BIPS: materials and techniques](https://bips.ac.uk/?p=2506) (search snippets)

### Inferences
Property-based style locks; no studio names are needed. These are my compositions, not sourced templates.
- **"Pixar-like" 3D:** `stylized 3D CG animation, appealing rounded character design with large expressive eyes, soft subsurface-scattering skin, physically based materials, warm cinematic key light with soft bounce, shallow depth of field, rich saturated palette, family-feature-film polish`
- **"Ghibli-like" 2D:** `hand-drawn 2D cel animation, clean thin ink lines, flat cel shading with soft single-tone shadows, lush painted watercolor-gouache backgrounds, billowing cumulus clouds, pastoral greens and sky blues, gentle wind in grass, nostalgic serene mood, limited animation on 2s`
- **Claymation / stop-motion:** `stop-motion claymation, plasticine characters with visible fingerprints and tool marks, handmade miniature set, slightly uneven frame cadence (animated on 2s, 12fps feel), practical miniature lighting, tiny depth of field like macro photography`
- **Paper cut-out:** `layered paper cut-out animation, construction-paper textures with torn and scissor-cut edges, flat layers with small drop shadows between planes, multiplane parallax, puppet-like jointed limbs, top-lit tabletop`
- **Persian miniature:** `Persian court miniature painting, flat perspective with stacked tilted ground planes, no cast shadows, even light, jewel-tone mineral pigments (lapis ultramarine, malachite green, vermilion), shell-gold and gold-leaf highlights, fine brush outlines, intricate floral and arabesque patterns, gold-ruled decorative border, cypress trees and stylized rocks; motion: gentle parallax and limited figure animation`
- **Watercolor storybook:** `children's storybook watercolor illustration, wet-on-wet washes with soft blooms, visible paper grain, loose pencil underdrawing, white paper showing through, muted warm palette, gentle page-turn pacing`
- For flat or traditional styles, ask for **limited motion** (parallax, breathing, cloth sway). Big camera moves tend to break the flat look, a common practitioner observation that I did not source.
- Ethically, avoid living-artist names, and for commercial work avoid studio names too. Use your own style bible and, where possible, your own reference frames.

### Gaps
- I found no systematic test of how each video model (Veo, Kling, Wan, Runway) renders these style keywords. 2026 policy updates on studio-name prompts were not found either.

---

## 6. Audio: voice, music, SFX, lip-sync and loudness

### Takeaway
There are two dialogue pipelines.
- **Native audio:** Veo 3.1 and Kling 3.0 generate dialogue, SFX and ambience with the picture. Veo is often judged more natural.
- **Decoupled:** record the voice first (e.g., ElevenLabs), generate a mouth-closed or neutral clip, then lip-sync in Kling or with sync.so.

Mix to about **-14 LUFS integrated with a -1 dBTP true-peak ceiling** for social platforms.

### Cited Findings
- Veo prompt syntax for dialogue, SFX and ambience is in section 2. — [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Kling VIDEO 3.0 "Native Audio" generates dialogue, lip movement, expressions, ambience and SFX together in 3 to 15 s generations. — [Kling: best lip sync video AI](https://kling.ai/blog/best-lip-sync-video-ai) (search snippet; vendor)
- The decoupled workflow: ElevenLabs dialogue track, then a Kling clip from the reference image with the mouth closed, then Kling Lip Sync applies the audio. — [invideo FAQ](https://invideo.io/faq/what-is-ai-lip-sync-video-generation-and-how-does-it/), [Tom's Guide](https://www.tomsguide.com/ai/ai-image-video/kling-just-added-lip-syncing-and-its-a-game-changer-for-ai-video) (search snippets)
- An "audio-first" workflow for dialogue shots: lock the voice performance before generating picture. — [HackerNoon](https://hackernoon.com/an-audio-first-workflow-for-ai-video-dialogue-shots) (title/snippet only)
- In one author's 2026 comparison, Veo 3.1 dialogue and lip-sync were more natural and accurate. Kling 3 Pro audio was usable but often needed post work, while Kling was stronger on cinematography and multi-shot. This is not a controlled benchmark. — [DEV Community](https://dev.to/alexmercer_creatives/kling-3-pro-vs-veo-31-comparing-the-best-ai-video-models-of-2026-1d9)
- sync.so says Kling's own lip-sync is tuned for Kling clips, and that its sync-3 model works on footage from any generator. This is a vendor claim. — [sync.so](https://sync.so/blog/kling-lip-sync)
- **Loudness:** -14 LUFS integrated / -1 dBTP is the common cross-platform target. YouTube is about -13 to -15. One vendor says TikTok and Reels normalize nearer -16 LUFS. Platforms apply one playback gain change, so a louder master just gets turned down. No primary Meta or TikTok spec was found. — [Fora Soft LUFS targets 2026](https://www.forasoft.com/learn/audio-for-video/articles-audio/lufs-targets-per-platform-2026), [OpenClip](https://openclip.app/learn/audio-normalization), [Opus](https://opus.pro/blog/best-loudness-normalizers) (search snippets; conflicting figures noted)

### Inferences
- For multi-shot shorts, generate the picture **silent or with ambience only**. Build dialogue, music and SFX in the edit, so the sound stays consistent across clips. Native audio changes from clip to clip in timbre and room tone.
- Use one cloned or designed voice per character, recorded as full lines, and cut the picture to the voice.
- Mix: dialogue about -21 LUFS short-term region, music bed about 10 dB under dialogue, SFX under that. Then the final master at -14 LUFS / -1 dBTP. These levels match the project's own CLAUDE.md levels, not an external source.
- Check that the music and SFX are licensed (CC0 libraries).

### Gaps
- There are no official ElevenLabs, Meta or TikTok loudness docs, and no controlled lip-sync accuracy benchmark across tools.

---

## 7. Editing tools and pacing for Reels, Shorts and YouTube

### Takeaway
The edit is where AI clips become a film: pick the best takes, cut on action, layer sound, grade for consistency. Short-form pacing rules of thumb:
- a hook in the first 1 to 3 s
- micro-cuts at the open
- a cut about every 3 to 5 s
- a pattern interrupt about every 5 to 8 s

These are editorial conventions, not platform specs.

### Cited Findings
- Hook window: viewers decide within about 2 to 3 s. Rewrite any opening line that takes more than 3 s to reach its point. — [CapCut: hook patterns](https://www.capcut.com/create/short-form-video-hooks-first-3-second-patterns), [CapCut: hook formulas](https://www.capcut.com/create/short-form-video-hooks) (vendor)
- Cadence: micro-cuts of 0.4 to 1.2 s in the first 2 or 3 shots; cuts or pattern interrupts every 3 to 5 s; pattern interrupts every 5 to 8 s after the opening. A/B test hooks with the body unchanged. One anecdote reports 2-second retention rising from 62% to 84% after trimming a hook (unverified). — [Opus: YouTube Shorts hooks](https://www.opus.pro/blog/youtube-shorts-hook-formulas), [Opus: viral TikToks first 3 s](https://www.opus.pro/blog/viral-tiktoks-first-3-seconds-2026), [DEV: hook engineering](https://dev.to/bulkdl/hook-engineering-the-science-of-the-first-3-seconds-in-short-form-video-2026-2jp9) (search snippets)
- Accetturo: the hook matters more than prompts. — [Saturation podcast](https://saturation.io/podcast/episode/pj-accetturo)

### Inferences
- **Tools:**
  - **CapCut:** fast vertical editing, auto-captions, templates; good for Reels and Shorts.
  - **DaVinci Resolve:** free tier; colour grading to unify clips from different generators; Fairlight for loudness metering; frame interpolation and retiming.
  - **Premiere Pro:** team and agency workflows; Essential Sound and loudness normalization.

  These are general tool knowledge, not verified in this session.
- **Long-form YouTube (16:9):** a slower rhythm (shots of 4 to 8 s). An establishing sequence is allowed, but the first 15 to 30 s still need a hook.
- **Every format:** cut on action between generated clips, to hide boundaries and drift. Use J- and L-cuts for dialogue. Apply one grade (LUT) over all clips. Add a light uniform film grain to blend models. Generate 2 to 4 takes per shot and pick in the edit.
- **Captions:** burn them in for silent autoplay, inside the platform safe zones, away from the bottom UI on 9:16.

### Gaps
- No official YouTube, Instagram or TikTok pacing guidance was found. The figures are vendor and creator rules of thumb.
- No sources were fetched on CapCut, Resolve or Premiere AI-specific features for 2026.
