# Directing — templates, film vocabulary, continuity, pacing, audio, QA

Pipeline used by top AI filmmakers is the classic film pipeline with the consistency lock in the middle: logline -> script -> beat sheet -> shot list -> style bible -> character bible + turnarounds -> location plates -> keyframes -> image-to-video -> voice/music/SFX -> edit, grade, loudness. Story and hook matter more than "secret prompts" (PJ Accetturo, [Saturation podcast](https://saturation.io/podcast/episode/pj-accetturo)); his team works in pods of writer, director, cinematographer, animator, editor ([Wrapbook](https://www.wrapbook.com/on-production-podcast/the-real-economics-of-ai-native-production-featuring-pj-accetturo)). *Total Pixel Space* (9:28, 2025 Runway AIFF Grand Prix) took over a year and tens of thousands of images ([Fortune](https://fortune.com/2025/07/03/runway-video-ai-3-billion-film-festival-founders-gaming-building-immersive-worlds/)).

---

## 1. Logline
```
When [INCITING EVENT], a [FLAWED PROTAGONIST] must [GOAL] before [STAKES/DEADLINE], but [ANTAGONISTIC FORCE].
Runtime: [12 min]   Format: [16:9 YouTube + 9:16 cut-downs]   Tone: [warm / epic / calm]
Channel: [history / kids]   Audience: [age band]   Lesson or thesis: [one sentence]
```

## 2. Beat sheet (scale to 10–20 min)
Short-film skeleton, stretched across sequences:
```
B1 Hook (0–3 s short-form; first 15–30 s long-form): striking image or question
B2 Setup: who, where, want                       (~10%)
B3 Inciting incident                             (~10–15%)
B4 Rising attempts: 2–3 escalating beats         (~35–40%)
B5 Low point / twist                             (~10%)
B6 Climax: choice / action                       (~15%)
B7 Resolution + final image (mirror of B1)       (~10%)
```
Long form: group beats into 3–5 **sequences**, each with its own mini-hook and end question. Percentages are a working guide, not from the notes.

## 3. Script format
```
## S03 — INT. BAZAAR CORRIDOR — LATE AFTERNOON
[Action] Mina walks frame-left to frame-right past the spice stall, the brass key bouncing on her chest.
NARRATOR (VO, warm, slow): «...Persian line...»
MINA (curious): «...»
[SFX] distant copper hammering. [Music] soft santur motif enters.
[Sources] (history only) Encyclopaedia Iranica, "Bazaar" — claim: ...
```

## 4. Style bible (`STYLE_v1`)
```
Medium/look: [hand-painted 2D animation, gouache backgrounds, clean ink line]
Palette: [5 named colours + hex, e.g. Saffron #F4A300, Lapis #26619C, Teal #2A9D8F, Brick #B5553C, Cream #F5EBDD]
Contrast: [low/soft]   Grain: [subtle film grain]
Lighting rule: [warm key from frame-left, cool fill, golden hour exteriors]
Lens/camera rule: [35mm & 50mm only; slow motivated moves; no handheld]
Composition rule: [centred symmetry for palaces; horizon on low third]
Motion cadence: [smooth 24fps / on 2s for 2D / 12fps feel for clay]
Forbidden (write positively in prompts): [no text, no logos, no photoreal skin, no lens flares]
Aspect & fps: [16:9, 24fps]
STYLE LOCK sentence (pasted verbatim at end of every prompt): "..."
Reference images: STYLE_ref_01.png, STYLE_ref_02.png
```
Save the style block in the project so it's in context every session ([invideo director's bible](https://invideo.io/faq/what-is-a-directors-bible-for-ai-filmmaking-and-how-do/)).

## 5. Character bible (one per character)
```
ID: CHAR_MINA       Role: protagonist       Voice: [ElevenLabs voice name / user's own] pace slow, warm
Descriptor block (≤40 words, NEVER paraphrase):
"Mina, 9-year-old girl, round face, big dark-brown eyes, short black bob with straight fringe, mustard-yellow knit sweater, teal scarf, brown corduroy trousers, red sneakers"
Proportions: [4 heads tall; head round; hands with 4 fingers + thumb]
Palette: skin #C68E6A, hair #1B1B1B, sweater #E0A526, scarf #2A9D8F, trousers #6B4A2E, shoes #C0392B
Wardrobe by phase: Outfit A (S01–S07) as above | Outfit B (S08–S12): [...]
Signature props: PROP_KEY brass key on cord around neck, always visible
Do-not-change: scarf colour, straight fringe, key on chest, red sneakers
Expressions: neutral, happy, sad, angry, surprised, thinking (sheet: CHAR_MINA_expr_v1.png)
Refs: CHAR_MINA_hero_v1.png, CHAR_MINA_turn_v1.png, CHAR_MINA_expr_v1.png [, LoRA: mina_v1.safetensors]
```
Keep identity separate from outfit in the sheets (face on mid-grey seamless; outfits as separate sheets) — the ai-film-pipeline method ([CLAUDE.md](https://raw.githubusercontent.com/Gregory-Esman/ai-film-pipeline/main/CLAUDE.md)).

## 6. Location bible (one per set)
```
ID: LOC_BAZAAR      Time: late afternoon      Weather: dusty, clear
Light sentence (verbatim in every shot of the scene): "late afternoon, warm low sun from frame-left through roof openings, soft long shadows, dust in the air"
Geography: entrance arch frame-left, spice stall centre, exit corridor frame-right (defines screen direction: journey = L->R)
Palette: brick, saffron, copper
Plates: LOC_BAZAAR_wide_v1 (establishing), _rev_v1 (reverse), _detail_spices_v1, _detail_lamps_v1
Scenes used: S03, S04, S09
```

## 7. Prop list
```
ID | Description (verbatim) | Owner | Scenes | State changes | Ref image
PROP_KEY | old brass key, ring-shaped bow, three teeth, worn patina, on a brown cord | Mina | S01–S12 | none | PROP_KEY_v1.png
```

## 8. Shot list (one row per generation; markdown table)
```
| Shot ID | Dur | Size | Angle | Lens | Move | Chars (outfit) | Loc (plate) | Action (one beat) | Dialogue/VO | Sound | Screen dir / axis | Continuity | Refs | Mode |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| S03_SH001 | 6 | EWS | high | 24mm | slow push-in | — | LOC_BAZAAR (wide) | establishing, dust in light | VO line 1 | amb crowd murmur | — | late afternoon | LOC_BAZAAR_wide | I2V |
| S03_SH002 | 5 | MS | eye | 35mm | track L->R | MINA (A) | LOC_BAZAAR (wide) | walks past spice stall | — | footsteps, copper hammering | L->R | key on chest | CHAR_MINA_turn, LOC_BAZAAR_wide | FLF2V |
| S03_SH003 | 4 | MCU | eye | 50mm | static | MINA (A), MERCHANT | LOC_BAZAAR (rev) | merchant offers jar | MERCHANT: «...» | — | Mina frame-left facing R | axis A | sheets x2, rev plate | talk |
```
Write the **last-frame needed** and **hand-off from** (e.g. "first = SH002 last") in Continuity.

---

## 9. Cinematic vocabulary (use these words in prompts)
Google lists dolly, tracking, crane, aerial, slow pan, POV; wide, close-up, extreme close-up, low angle, two-shot; shallow DOF, wide-angle, soft focus, macro, deep focus ([Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)). Consolidated list (standard film terms, not cross-checked against a film-school glossary):
- **Shot sizes:** extreme wide / establishing (EWS), wide / long (WS), full shot, medium wide / cowboy, medium (MS), medium close-up (MCU), close-up (CU), extreme close-up (ECU), insert / detail, two-shot, over-the-shoulder (OTS), POV.
- **Angles:** eye-level, low, high, bird's-eye / top-down, worm's-eye, Dutch / canted, overhead, profile, three-quarter.
- **Moves:** static / locked-off, pan, tilt, dolly in/out (push-in, pull-out), truck / crab, pedestal, crane / jib, boom, tracking / follow, orbit / arc (90° or 180°), handheld, gimbal glide, whip pan, crash zoom, dolly-zoom, rack focus, FPV drone, aerial reveal.
- **Lens / focus:** 14–24mm wide (space, distortion), 35mm (natural), 50mm (normal), 85mm (portrait compression), 135mm+ telephoto, macro, anamorphic (oval bokeh, horizontal flares), tilt-shift (miniature), shallow / deep DOF, bokeh, soft focus.
- **Lighting:** key / fill / rim, three-point, high-key, low-key, chiaroscuro, Rembrandt, silhouette, practicals, motivated light, golden hour, blue hour, overcast diffuse, hard vs soft, volumetric / god rays, haze, candlelight, oil lamp, moonlight, under-lighting, 3200K warm / 5600K cool, teal-and-orange.
- **Time / edit:** slow motion, time-lapse, speed ramp, freeze frame, match cut, smash cut, J-cut / L-cut.
- **Wan lighting tags** (community): edge lighting, underlighting, high contrast, overcast, side lighting, left-heavy composition.

**Universal shot formula** (maps onto Veo, Wan, Kling, Runway):
`[SHOT SIZE + ANGLE], [LENS/DOF], [ONE CAMERA MOVE + speed]. [CHARACTER BLOCK] [ONE ACTION, timed] in [LOCATION BLOCK], [TIME OF DAY]. [LIGHTING]. [MOOD]. [STYLE LOCK]. Audio: "[dialogue]"; SFX: ...; Ambient: ...`

---

## 10. Continuity checklist (per scene, before video)
- [ ] **180° rule:** axis defined; every dialogue shot says "A frame-left facing right, B frame-right facing left".
- [ ] **Screen direction:** journeys keep one direction unless a shot shows the turn.
- [ ] **Eyelines:** OTS / reverse pairs look to opposite sides ("looking off-screen right, slightly above lens").
- [ ] **Matching action:** shot N ends on a held pose; shot N+1 starts on the same pose (last frame -> first frame); cut on motion.
- [ ] **Wardrobe & props:** do-not-change list checked on every keyframe; outfit = phase in bible.
- [ ] **Time of day / weather:** one light sentence per scene, identical in all shots.
- [ ] **Geography:** establishing wide before close-ups; exits where the plate says.
- [ ] **Prop states:** lit/unlit, open/closed, full/empty consistent with prop list.
- [ ] **Character count:** ≤2–3 per video shot.
- [ ] **Hand-off frames repaired** (T8) and approved.
- [ ] **Contact sheet reviewed** before spending credits.

---

## 11. Pacing
- **Hook:** viewers decide in ~2–3 s; rewrite any opening that takes >3 s to land ([CapCut](https://www.capcut.com/create/short-form-video-hooks-first-3-second-patterns), vendor).
- **Short-form cadence:** micro-cuts 0.4–1.2 s in the first 2–3 shots; cut every 3–5 s; pattern interrupt every 5–8 s ([Opus](https://www.opus.pro/blog/youtube-shorts-hook-formulas), rules of thumb).
- **Long-form YouTube 16:9:** shots 4–8 s; establishing sequences allowed; hook still in first 15–30 s; a new visual idea (map, insert, new location) every 30–60 s (working guide).
- **Kids:** slower — hold shots 5–8 s, few zooms/whip-pans, calm palette, slow clear speech, pause for the child to "answer" (see `channels.md`).
- **Every format:** cut on action to hide clip boundaries and drift; J/L cuts on dialogue; 2–4 takes per shot, pick in the edit.

---

## 12. Audio pipeline & loudness
- **Native audio** (Veo 3.1, Kling 3.0) changes timbre/room tone clip to clip. **Decoupled** is safer for long films: record/generate the voice first, generate picture silent or ambience-only, then lip-sync (InfiniteTalk, Kling Lip Sync, sync.so — vendor claims) ([invideo](https://invideo.io/faq/what-is-ai-lip-sync-video-generation-and-how-does-it/), [sync.so](https://sync.so/blog/kling-lip-sync)). Audio-first: lock the voice performance before picture ([HackerNoon](https://hackernoon.com/an-audio-first-workflow-for-ai-video-dialogue-shots)).
- One voice per character, full lines; cut picture to the voice.
- Music & SFX: alvana-audio library (CC0, except `music/corporate/*` CC BY 4.0) — see `CLAUDE.md`; run `node get.mjs credits` at the end.
- **Levels (project standard):** VO -21, music -31 to -33, SFX -36 to -39; master **-14 LUFS integrated, -1 dBTP** ([Fora Soft](https://www.forasoft.com/learn/audio-for-video/articles-audio/lufs-targets-per-platform-2026); YouTube ~-13 to -15; TikTok/Reels reportedly nearer -16, vendor).
- ffmpeg master check: `ffmpeg -i film.mp4 -af loudnorm=I=-14:TP=-1:LRA=11:print_format=summary -f null -`

---

## 13. Edit & grade
- Assemble in shot-ID order; one grade/LUT over all clips; light uniform grain to blend models; frame-rate unify (24fps).
- Captions burned in (Persian RTL, Vazirmatn), inside safe zones; on 9:16 keep away from bottom UI.
- Tools: CapCut (fast, vertical), DaVinci Resolve (free grading, Fairlight loudness, retiming), Premiere Pro (general knowledge, not verified this session). On the VM: ffmpeg concat + Remotion titles.

---

## 14. QA — contact-sheet review
Make contact sheets on the VM from uploaded frames/clips:
```
# keyframes of a scene, 4 columns
ffmpeg -pattern_type glob -i 'uploads/<slug>/kf/S03_*first*.png' -vf "scale=480:-1,tile=4x3:padding=8" -frames:v 1 out/S03_kf_sheet.jpg
# first/mid/last of a clip
ffmpeg -i S03_SH012_v2.mp4 -vf "select='eq(n\,0)+eq(n\,40)+eq(n\,80)',scale=480:-1,tile=3x1" -vsync 0 -frames:v 1 out/S03_SH012_fml.jpg
```
Deliver with `node tools/deliver.mjs out/S03_kf_sheet.jpg --title "..."`.
Review each frame against: hero/turnaround (face, hair, proportions), outfit & props, palette vs style bible, light direction & time of day, screen direction & axis, background geography vs plate, anatomy (hands, fingers, limbs), morphing, text artifacts, tail blur, colour jump vs previous shot. Log issues as `S03_SH012 v2: scarf orange -> teal; regenerate from repaired first frame`.
Final film QA: watch at 1x end to end; check loudness; check subtitles vs VO; check every claim (history) and every frame for glitches (kids) before upload.
