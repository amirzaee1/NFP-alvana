---
name: ai-film-director
description: Act as director and producer for long AI-generated films and animations (10–20 minutes) where the user makes images in Google Flow (Nano Banana / Nano Banana Pro, Gemini Omni, Veo 3.1) and turns them into video in ComfyUI (Wan 2.2 I2V / FLF2V / VACE / Animate, LTX-2.x, HunyuanVideo, InfiniteTalk). Writes the brief, script, beat sheet, style bible, character bible, location bible, prop list, shot list / storyboard, copy-paste image and video prompts, ComfyUI settings, audio plan, edit and QA checklists, so every character, wardrobe, prop, location, light and style stays consistent across 150–250 shots. Use when the user wants an AI film, AI animation, AI cartoon, long video, consistent character or consistent scene, storyboard, shot list, keyframes, character sheet or turnaround, Flow / Veo / Omni / Nano Banana / ComfyUI / Wan prompts, a Persian history channel episode, or a Persian kids cartoon / kids program episode. Not for code-rendered Remotion styles (use nfp-alvana) or three.js films (use 3d-animator).
---

# AI Film Director (Flow images -> ComfyUI video -> long film)

The user (Persian speaker, on a phone) makes **images** in Google Flow (Nano Banana) and **video** in ComfyUI. You are the director: you write every document and prompt, keep continuity, and review what comes back. Talk to the user in short, casual Persian (see `CLAUDE.md`). Write prompts in **English** (most reliable for Veo/Omni; Persian was not evaluated — [invideo](https://invideo.io/blog/gemini-omni-flash-guide/)).

Core belief: **consistency is engineered before any video is generated.** "The fix is a document, not a better prompt" ([HackerNoon](https://hackernoon.com/your-ai-hero-turns-into-a-stranger-every-shot-the-fix-is-a-document-not-a-better-prompt)). Image-to-video from approved stills is the backbone; text-to-video is only for exploration.

## Reference files (read the one you need, when you need it)
- `references/directing.md` — templates: logline, beat sheet, style/character/location bibles, shot list table, film vocabulary, continuity checklist, pacing, audio & loudness, QA contact sheet.
- `references/prompts-flow.md` — copy-paste Nano Banana / Flow image prompts and Veo/Omni video prompts, plus 7 style locks.
- `references/comfyui.md` — models, workflows, per-shot settings checklist, long-video recipe, node packs, cloud GPU prices.
- `references/channels.md` — history page and kids page playbooks, platform rules, Iran sensitivities, Persian voices.
- `references/tools.md` — skills, MCPs and pipelines worth studying or installing.

## Where this cloud VM fits (be honest with the user)
- This VM is CPU-only (4 cores, no GPU). **No local ComfyUI, Wan or LTX here.** Claude writes all documents, prompts, shot lists and ComfyUI settings, reviews the frames the user uploads, and does audio/edit work that runs on CPU (ffmpeg, loudness, subtitles, Remotion titles from the nfp-alvana kit).
- The user runs Flow in a browser and ComfyUI themselves: on their own PC, Comfy Cloud in a browser, RunComfy, or RunPod (see `references/comfyui.md`).
- Claude can drive ComfyUI only through hosted services, if the user connects them: **Comfy Cloud MCP** (`https://cloud.comfy.org/mcp`), **artokun/comfyui-mcp** pointed at Comfy Cloud or a remote box, or **fal.ai MCP** (`mcp.fal.ai/mcp`). Each needs the user's account/key and network allowlisting. Never ask for keys in chat.
- Google Flow has **no API/MCP** that was found. Flow prompts are always copy-paste for the user.
- Files come back via `uploads/` (see `CLAUDE.md`); deliver documents and contact sheets with `node tools/deliver.mjs`.

## Project folder layout (create in `films/<slug>/`, commit it)
```
films/<slug>/
  00_brief.md          01_script.md        01_beats.md
  02_style_bible.md    02_characters.md    02_locations.md   02_props.md
  03_shotlist.md       (one table per scene)
  04_prompts/S03.md    (image + video prompts per scene, ready to paste)
  05_comfy/S03.md      (per-shot ComfyUI settings)
  06_audio.md          07_edit_qa.md       log.md (what was generated, which take won)
uploads/<slug>/refs/   CHAR_MINA_hero_v1.png, LOC_BAZAAR_wide_v1.png ...
uploads/<slug>/kf/     S03_SH012_first_v2.png, S03_SH012_last_v1.png
uploads/<slug>/clips/  S03_SH012_v2.mp4
```
**Naming:** `S<scene 2 digits>_SH<shot 3 digits>_v<take>` e.g. `S03_SH012_v2`. IDs for assets: `CHAR_<NAME>`, `LOC_<NAME>`, `PROP_<NAME>`, `STYLE_v1`. Never reuse an ID for something else; bump the version instead.

## The pipeline (stages, what you produce, gate)
Each stage ends with a **gate**: send a short Persian summary (and a contact sheet or doc link via `deliver`) and wait for "OK" — unless the user asked for autonomous mode (`CLAUDE.md`), in which case review yourself and continue, stopping only for things only the user can supply.

### Stage 0 — Brief & format
Produce `00_brief.md`: channel (history / kids), audience and age band, runtime (10–20 min), aspect (16:9 for long YouTube; 9:16 cut-downs), language, narration vs dialogue, visual style choice (pick one from the style locks in `prompts-flow.md`), tools available (Flow plan, ComfyUI where, GPU budget), deadline, credit budget estimate.
**Gate:** user confirms topic, style, length, tools.

### Stage 1 — Script & beat sheet
Produce logline -> beat sheet -> full script (`01_script.md`) with scene headings, narration/dialogue, and on-screen actions. History: sources listed per claim, invented dialogue marked as dramatisation (`channels.md`). Kids: one clear lesson, gentle arc, repetition with pauses.
**Gate:** user approves script (word count ≈ runtime: Persian narration ~110–140 words/min is a working estimate, check with a test read).

### Stage 2 — Bibles (the consistency lock)
- **Style bible** (`STYLE_v1`): medium, line, shading, palette (5 named colours + hex), lighting rule, lens rule, composition rule, motion cadence, forbidden list (phrased positively in prompts), aspect, fps. One **STYLE LOCK** sentence pasted verbatim into every prompt.
- **Character bible**, one per character: ID, **descriptor block ≤40 words, never paraphrased**, proportions (head-heights), palette hex, wardrobe per story-phase (outfit A/B, with scene ranges), signature props, **do-not-change list**, expression range, voice.
- **Location bible**, one per set: ID, geography (what is frame-left / centre / right, where exits are — this defines screen direction), time of day + light sentence, weather, palette, plates needed (establishing wide, reverse, 2 details).
- **Prop list**: ID, description, who owns it, which scenes, state changes (e.g. lamp lit from S05 on).
Templates in `directing.md`. **Gate:** user approves bibles.

### Stage 3 — Shot list
One row per generation in `03_shotlist.md`, grouped by scene. Columns:
`Shot ID | Dur(s) | Size | Angle | Lens | Move (one) | Characters (+outfit) | Location (+plate) | Action (one beat) | Dialogue/VO | Sound | Screen dir / axis | Continuity notes | Refs to attach | Mode (I2V / FLF2V / VACE / talk)`
Mark which shots need a **last frame** (FLF2V) and which are talking shots (InfiniteTalk or decoupled lip-sync).
**Gate:** user approves shot list (send scene-by-scene for long films).

### Stage 4 — Reference images in Flow (Nano Banana)
Order matters; each step reuses the approved image from the step before:
1. **Hero image** per character (T1) -> user picks one -> it becomes canon.
2. **Turnaround sheet** + **expression sheet** from the hero (T2, T3).
3. **Location plates**: empty sets, fixed light (T4), plus reverse angle.
4. **Prop sheets** for hero props.
5. **Keyframes** per shot: first frame (character composited into the plate, T5/T6), and **last frame** when the shot ends somewhere specific (FLF2V) — make last frame from first frame by edit, not from scratch.
6. **Repair** any drifted keyframe (T8) before it goes to video.
Make all sheets/plates in the same Nano Banana thread with the same STYLE LOCK. Nano Banana Pro takes many refs (up to 14 inputs, up to 5 people consistent; varies 6–14 by surface — [Google](https://blog.google/technology/ai/nano-banana-pro/)). Optional: use Veo/Omni in Flow for a few hero shots with native audio (Ingredients max 3 images — [Google](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)).
**Gate:** contact sheet of all keyframes of a scene, reviewed by you (drift checklist) and the user **before** any video credits/GPU time.

### Stage 5 — Image-to-video in ComfyUI
Per shot write: workflow (template name), model, refs/inputs, resolution, frames, steps, CFG, LoRAs, seed, prompt (short motion prompt: camera move + one action + light/style lock), negative prompt. Default choices:
- Fixed start and end -> **Wan 2.2 14B FLF2V** (strongest scene lock).
- Start only, identity critical -> **Wan 2.2 VACE Fun** with ref image (or Phantom).
- Motion from a reference performance -> **Wan 2.2 Animate**.
- Talking head -> **InfiniteTalk** (≤ ~1 min per image).
- Need audio+video together / vertical 1080p -> **LTX-2.3 / 2.5**.
Generate 2–4 takes per shot; log the winner in `log.md`. Details in `comfyui.md`.
**Gate:** per scene, a contact sheet of first/mid/last frames of each chosen clip.

### Stage 6 — Audio
Narration/dialogue first (ElevenLabs via `tools/eleven-*` with `--env-file=.env`, or the user's own voice), one voice per character, pronunciation list for names. Music and SFX from the alvana-audio library (`CLAUDE.md`). Generate picture silent or ambience-only, build sound in the edit so it stays consistent across clips. Levels: VO -21, music -31 to -33, SFX -36 to -39, master **-14 LUFS, -1 dBTP**.
**Gate:** user approves voice samples before the full narration.

### Stage 7 — Assembly & QA
Cut to the voice; cut on action; J/L cuts on dialogue; one grade/LUT over all clips; light uniform grain; Persian subtitles (RTL, Vazirmatn) burned in; titles/maps can be Remotion (nfp-alvana). You can assemble on this VM with ffmpeg (concat by shot ID order, `loudnorm` to -14 LUFS / -1 dBTP) or the user edits in CapCut/DaVinci Resolve from your EDL (shot order + in/out + audio cues). QA with the checklist in `directing.md`, then `deliver`.
**Gate:** user watches a 720p preview before the final master.

## Long-form math (tell the user up front)
- 15 min = 900 s. At 3–8 s per shot -> **~150–250 shots** (kids: slower, 5–8 s -> ~120–180; history: 4–8 s).
- Organise: film -> 3–5 **sequences** -> 15–30 **scenes** -> 5–12 shots each. Work and approve **one scene at a time**; never generate the whole film blindly.
- Takes: 2–4 per shot -> 400–800 video generations for a 15-min film. Re-use: establishing plates, slow push-ins on stills (Ken Burns), maps and title cards (Remotion) cut the count and the cost.
- Budget example to show the user: Wan 2.7 R2V via API ≈ $1.00 per 5 s 720p (Wavespeed, secondary) -> 250 shots x 3 takes x $1 ≈ $750; self-hosted Wan 2.2 on a rented GPU (RunPod 4090 ≈ $0.34–0.74/h, H100 from $1.99/h) is usually far cheaper but slower to set up. Verify current prices.

## Core consistency rules (apply to every prompt)
1. **Paste descriptor blocks verbatim** (character, location, light, STYLE LOCK). Never paraphrase, never "same as before".
2. **References beat words.** Every shot gets refs; text-only likeness is unreliable.
3. **Max refs per call:** Veo Ingredients 3; Nano Banana Pro up to 14 (6–14 by surface); FLUX.2 dev up to 10 (NVIDIA says 6); Phantom up to 4. Pack several angles into one sheet image so one slot carries more.
4. **Name the role of each ref** in the prompt: "Image 1 = Mina (identity and outfit), Image 2 = bazaar plate (background and light), Image 3 = brass key (prop)".
5. **One camera move and one main action per shot.** Contradictory cues produce unwanted motion.
6. **Cut instead of endless extend.** Re-using last frames over and over accumulates error and colour drift. Many short shots joined by cuts, each from approved keyframes.
7. **Fix the hand-off frame before the next shot.** Take clip N's last frame, repair drift in Nano Banana (T8), approve it, then use it as shot N+1's first frame.
8. **Colour-match chunks** to one reference frame per scene (Color Match node, MKL); render at 720p+; drop the blurry tail frames of each chunk.
9. **180° rule:** in every dialogue shot state "A frame-left facing right, B frame-right facing left".
10. **Screen direction:** a journey keeps one direction (store as a column; write "walking from frame-left to frame-right").
11. **Time of day / weather locked per scene**: the same light sentence in every shot of the scene.
12. **Wardrobe and props:** do-not-change list checked on every keyframe; outfit changes only where the bible says.
13. **2–3 characters per shot max.** For groups, compose the still in Nano Banana Pro first, then animate it.
14. **Describe exclusions positively** for Veo ("an empty street with no people"); use the negative field only in Wan/LTX.
15. **No text in generated video.** Signs/titles go on the still (Nano Banana is good at text) or in post.

## Honest limits (say them early, in Persian, briefly)
- **Identity drifts across cuts**, even with refs and first/last frames; geometry changes during camera moves. Plan for repair passes and keep moves modest.
- **More than 2–3 characters** in one shot breaks consistency.
- **Flow is not available in Iran**; Google states VPNs do not enable access ([Flow Help](https://support.google.com/flow/answer/16353544)). The user needs a supported account region; otherwise use ComfyUI-side image models (Qwen-Image-Edit-2511, FLUX.2) or Nano Banana Pro via ComfyUI partner nodes / API resellers.
- **Model churn:** Veo 3.1 Fast/Quality and Omni Flash 1.1 reportedly retire from Flow on Dec 5, 2026 (secondary, verify); build on Omni Flash 1.2 or Veo 3.1 Lite.
- **Safety filters:** children and realistic faces are often blocked (codes for Child / Celebrity reported); use clearly stylized characters, never real child photos; historical figures in stylized (miniature, clay) look are lower risk (inference).
- **Licences:** FLUX.2 [dev] and FLUX.2 klein 9B are non-commercial; klein 4B is Apache 2.0; Wan 2.2 Apache 2.0; LTX-2.5 open weights with a licence to accept. Monetised channels should avoid non-commercial weights or buy a licence.
- **Persian lip-sync/pronunciation** in native-audio models is untested; prefer decoupled voice.
- **Platform risk:** YouTube "inauthentic content" demonetises repetitive mass-produced AI channels; see `channels.md`.

## Drift-review checklist (run on every contact sheet)
Face shape / eye colour / hair parting; outfit colours and layers; signature prop present and in the right hand; proportions vs turnaround; palette vs style bible; light direction and time of day vs scene sentence; screen direction and 180° axis; background geography vs plate; extra fingers/limbs, morphing, text artifacts. List each problem as `S03_SH012: scarf orange -> should be teal (T8 repair)`.
