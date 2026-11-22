# ComfyUI — models, workflows and settings for consistency and image-to-video (as of Nov 2026)

Source caveat: docs.comfy.org could not be fetched during research; many numbers (VRAM, prices) are third-party. **Verify before relying on them.** None of this runs on the CPU-only cloud VM — the user runs it locally, on Comfy Cloud, RunComfy or RunPod, or Claude drives it via a hosted MCP (see `tools.md`).

---

## 1. Image consistency (characters, sheets, keyframes)

| Need | Use | Notes |
|---|---|---|
| Edit-based shots from one hero/sheet | **Qwen-Image-Edit-2511** | Better character consistency, multi-person editing, LoRA support, geometric reasoning; native template uses bf16 ([docs](https://docs.comfy.org/tutorials/image/qwen/qwen-image-edit-2511.md)). Pair with Qwen2.5-VL 7B encoder + "multiple angles" LoRA for turnarounds ([guide](https://stable-diffusion-art.com/qwen-image-edit-multiple-angle-lora/)). |
| Multi-reference composition | **FLUX.2 [dev]** | Up to 10 refs per BFL (NVIDIA says 6) ([BFL](https://bfl.ai/blog/flux-2)). 24GB+ recommended for high-res; fp8 build for consumer GPUs ([Comfy blog](https://blog.comfy.org/p/flux2-state-of-the-art-visual-intelligence)). **Non-commercial licence**; commercial licence sold separately ([README](https://raw.githubusercontent.com/black-forest-labs/flux2/HEAD/README.md)). |
| Fast, commercial-safe edits | **FLUX.2 [klein] 4B** | **Apache 2.0**; T2I + single/multi-ref editing; ~8GB (Comfy) vs ~13GB (BFL) VRAM ([Comfy blog](https://blog.comfy.org/p/flux2-klein-4b-fast-local-image-editing), [docs](https://docs.comfy.org/tutorials/flux/flux-2-klein)). **klein 9B is non-commercial.** |
| Same as Flow, inside ComfyUI | **Nano Banana Pro partner node** | Billed in Comfy credits ([docs](https://docs.comfy.org/tutorials/partner-nodes/google/nano-banana-pro/workflow)). Useful if Flow is unavailable (Iran). |
| A character recurring in 100+ shots | **Character LoRA via ai-toolkit (Ostris)** | Supports FLUX.1/2, FLUX.2 Klein, Qwen-Image, Z-Image, SDXL, Wan 2.1/2.2, LTX 2/2.3 ([guide, 3rd party](https://a2a-mcp.org/blog/ostris-ai-toolkit)). VRAM (RunComfy): Qwen-Image 24GB+ (32GB comfy); Wan 2.2 14B 48GB+ recommended ([Qwen](https://www.runcomfy.com/trainer/ai-toolkit/qwen-image-2512-lora-training), [Wan](https://www.runcomfy.com/trainer/ai-toolkit/wan-2-2-t2v-14b-lora-training)). Hosted training on RunComfy. |
| Exact blocking / pose | ControlNet (pose/depth), controlnet_aux | Edit models now take pose from instructions; use ControlNet when blocking must be exact. |

Pipeline for a LoRA ([Runflow, Jun 2026](https://www.runflow.io/blog/comfyui-consistent-characters-flux)): character sheet -> 20–40 varied stills of the approved character -> train LoRA -> load LoRA in every keyframe graph. RunComfy "Consistent Character Creator 4.0" builds a FLUX.2 dataset the same way ([link](https://www.runcomfy.com/pt/comfyui-workflows/consistent-character-creator-4-0-comfyui-flux-2-dataset)). (Dataset size is a working estimate, not from the notes.)

**By style (inference from the notes, no benchmark):**
- Cartoon / kids: flat-colour sheet with Qwen-Image-Edit-2511 or FLUX.2 + multiple-angles LoRA, each shot as a reference edit; small style+character LoRA on Qwen-Image or FLUX.2 Klein 4B if it drifts. **Face-ID adapters (PuLID, InstantID) are trained on real faces — wrong tool for cartoons.** Edit models still struggle "especially for stylized characters" (community).
- Realistic historical: FLUX.2 dev multi-ref (mind licence) or Nano Banana Pro; PuLID still usable on FLUX.1 graphs (PuLID Flux II).
- Legacy (avoid for new work): IP-Adapter Plus (cubiq, maintenance-only since Apr 2025), PuLID_ComfyUI (cubiq, last push Oct 2024), InstantID, AnimateDiff, OmniGen v1, Flux Kontext (older than FLUX.2).

---

## 2. Image-to-video models

| Model | Mode | Facts from notes |
|---|---|---|
| **Wan 2.2 14B FLF2V** | first + last frame | Native template "Wan2.2 14B FLF2V": two LoadImage nodes ([Comfy blog](https://blog.comfy.org/p/wan22-flf2v-comfyui-native-support)). Strongest scene lock. Native node `WanFirstLastFrameToVideo`; Kijai route `WanVideoVACEStartToEndFrame`. |
| **Wan 2.2 I2V 14B** | first frame | Apache 2.0, last open Wan. Clip ~5 s typical (not confirmed). |
| **Wan 2.2 VACE Fun** | ref image + prompt | `WanVaceToVideo`; keeps faces/clothing more consistent than plain I2V; Fun VACE 2.2 > VACE 2.1 ([RunComfy](https://www.runcomfy.com/comfyui-workflows/wan2-2-vace-fun-in-comfyui-image-animation-workflow), [Banodoco](https://nathanshipley.github.io/banodoco-kb/kb/wan/index.html)). Alternatives: Phantom (≤4 refs), MAGREF. |
| **Wan 2.2 Animate** | motion transfer / replace | `wan2.2_animate_14B_bf16` + wan_2.1 VAE; W/H multiples of 16; start small ([docs](https://docs.comfy.org/tutorials/video/wan/wan2-2-animate)). 77-frame windows chained (77+76) per community. |
| **Wan 2.5 / 2.6 / 2.7** | API only | No open weights; partner nodes. **Wan 2.7 R2V**: single/multi-character, multi-shot, 1080p, 2–10 s; fal / Replicate / Together; Wavespeed $1.00/5 s, $1.50/10 s at 720p ([Together](https://together.ai/models/wan-27-r2v), [Wavespeed](https://wavespeed.ai/blog/posts/introducing-alibaba-wan-2-7-reference-to-video-on-wavespeedai)). |
| **LTX-2 / 2.3 / 2.5** (Lightricks) | T2V, I2V, FLF2V, audio+video | LTX-2: distilled 8 steps, 32GB+ (FP8/GGUF/NVFP4 help) ([docs](https://docs.comfy.org/tutorials/video/ltx/ltx-2)). 2.3: new VAE, cleaner audio, native 1080x1920 vertical. 2.5: 22B open weights (licence to accept, not OSI), native multi-shot, needs ComfyUI 0.32.0+ ([Comfy blog](https://blog.comfy.org/p/ltx-25-day-0-support-in-comfyui)). |
| **HunyuanVideo 1.5** | T2V, I2V | 8.3B, 24GB, 720p + 1080p SR upscaler; I2V needs sigclip_vision_patch14_384, Qwen2.5-VL 7B, ByT5 ([docs](https://docs.comfy.org/tutorials/video/hunyuan/hunyuan-video-1-5)). Wan2GP claims 6GB. |
| **FramePack / F1** | long I2V | 6GB VRAM, up to 60 s; 4090 2.5 s/frame (1.5 with TeaCache); disagreement on quality after ~4 s. Only official site is GitHub ([repo](https://github.com/lllyasviel/framepack)). |
| **InfiniteTalk** | lip-sync from audio | Native `WanInfiniteTalkToVideo` on Wan 2.1 I2V; single/multi speaker; settings length, motion_frame_count, audio_scale; good to ~1 min per image, colour shift grows after ([docs](https://docs.comfy.org/tutorials/video/wan/wan-infinitetalk)). MultiTalk older (~15 s). |

**Speed: lightx2v / Lightning LoRAs for Wan 2.2** — 4 steps, **CFG 1 (no CFG)**, claimed 20x; ~89 s for 512x848 with 4+4 steps; 2-step variant ~37 s with quality loss. **Don't lower LoRA strength** — it removes the speed gain and can blur. Separate configs for 80GB and 24GB cards ([lightx2v](https://huggingface.co/lightx2v/Wan2.2-Distill-Models), [Lightning](https://github.com/ModelTC/Wan2.2-Lightning)).

**Choosing per shot:**
- Start and end both approved -> Wan 2.2 FLF2V (or LTX-2.5 FLF2V).
- Identity across shots without an end frame -> Wan 2.2 VACE Fun / Phantom (local) or Wan 2.7 R2V (API).
- Character performance from a reference clip -> Wan 2.2 Animate.
- Talking narrator/host -> InfiniteTalk.
- Superseded: CogVideoX, CausVid, Wan 2.1-only flows (likely legacy, unconfirmed).

---

## 3. Long-video recipe (community, anecdotal — no quantitative comparison exists)
1. **Prefer cuts.** Plan many short shots from approved keyframes (FLF2V) rather than one long extension.
2. When you must extend: feed **several trailing frames (~16) as VACE context**, not a single last frame ([wanx-troopers](https://wanx-troopers.github.io/extensions.html)).
3. **Drop the blurry tail:** discard at least the last 4 frames of each VACE window (Wan2GP advice). Note: cutting the last 4 latents (16 frames) does not give a correctly encoded Wan latent sequence — trim in pixel space.
4. **Colour Match** every chunk to one reference frame per scene: Color Match node, method **MKL** (fails if the scene changes a lot) ([HF discussion](https://huggingface.co/RuneXX/LTX-2.3-Workflows/discussions/132)).
5. Render at **720p or higher** (reportedly less drift).
6. Alternative: build a drift-free skeleton with FramePack or SkyReels V2, then patch changes with VACE.
7. Public "infinite extension" workflows with colour fix: [Civitai VACE Seamless](https://civitai.com/models/1775203), [Wan VACE Masking & Extension](https://comfy.icu/models/1536883/Wan-VACE-Masking-Extension-Seamlessly-Extend-Join-and-Auto-Fill-Existing-Videos-While-Maintaining-Motion).

---

## 4. Per-shot ComfyUI settings checklist (fill one per shot in `05_comfy/Sxx.md`)
```
Shot: S03_SH012   Take: v1   Mode: FLF2V | I2V | VACE | Animate | InfiniteTalk
Workflow/template: [e.g. "Wan2.2 14B FLF2V" from Template Library, ComfyUI version ____]
Model files: [diffusion model + precision (bf16/fp8/GGUF)], VAE, text encoder
Inputs: first = uploads/<slug>/kf/S03_SH012_first_v2.png   last = ..._last_v1.png
        refs (role each): [image 1 = CHAR_MINA identity] [image 2 = LOC_BAZAAR]
Resolution: [1280x720 / 720x1280]  (multiples of 16; Animate requires it)
Frames / fps: [81 @16 / match plan] -> duration [s]
Steps / CFG / sampler / scheduler: [4 / 1.0 with lightx2v LoRA]  or  [20–30 / 3.5–5 without] (typical, verify per template)
LoRAs + strength: [lightx2v 1.0] [CHAR_MINA_lora 0.8]
Seed: [fixed number; record it]
Positive prompt: [short motion prompt, prompts-flow.md §3, STYLE LOCK verbatim]
Negative prompt: [blurry, extra fingers, deformed hands, text, watermark, flicker, morphing face, colour shift]
Long-shot handling: [VACE context 16 frames | drop last 4 frames | Color Match MKL to S03_ref.png]
Output name: S03_SH012_v1.mp4 (+ save last frame PNG for hand-off)
Check after render: identity / outfit / prop / light / screen direction / hands / tail blur
```
Step and CFG ranges without speed LoRA are typical community values, not from the notes — read them off the template.

---

## 5. Node packs (core stack)
- ComfyUI-Manager — [ltdrdata](https://github.com/ltdrdata/ComfyUI-Manager); registry https://registry.comfy.org
- VideoHelperSuite (load/save video, frames) — [Kosinkadink](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)
- KJNodes (incl. colour match, utilities) — [kijai](https://github.com/kijai/ComfyUI-KJNodes)
- WanVideoWrapper (Wan 2.x, VACE, Animate, MultiTalk/InfiniteTalk, context windows) — github.com/kijai/ComfyUI-WanVideoWrapper
- ComfyUI-LTXVideo — [Lightricks](https://github.com/Lightricks/ComfyUI-LTXVideo)
- controlnet_aux (pose/depth preprocessors) — [Fannovel16](https://github.com/Fannovel16/comfyui_controlnet_aux)
- PuLID Flux II (realistic faces on Flux) — lldacing/ComfyUI_PuLID_Flux_ll
- Legacy: IPAdapter Plus (maintenance-only), cubiq PuLID (stale), InstantID, AnimateDiff-Evolved.
Status/stars of these could not be verified (GitHub API blocked).

---

## 6. Cloud GPU options (rough prices, verify)
- **Comfy Cloud** (official, browser): usage-based credits on RTX 6000 Pro 96GB; prices cut 30% Jan 23, 2026; entry ~400 credits for $20/mo (3rd party); same credit pool as partner/API nodes ([pricing](https://www.comfy.org/cloud/pricing)). Has a hosted MCP (`https://cloud.comfy.org/mcp`). Easiest for a phone user.
- **RunComfy** (managed, per second): H100 $4.49/h ($3.59 Pro), H200 $5.75 ($4.59), T4/A4000 ~$0.99/h (Jun 2026); hosts ai-toolkit training ([pricing](https://www.runcomfy.com/assets/pricing)).
- **RunPod** (raw GPU, per second): H100 80GB from $1.99/h, L40S $0.79/h, A40 $0.35/h; RTX 4090 $0.34–0.74/h (3rd party) ([pricing](https://www.runpod.io/gpu-cloud/pricing)). Cheapest, more setup.
- **API, no ComfyUI:** fal, Replicate (`wan-video/wan-2.7-r2v`), Together, Wavespeed ($1.00 / 5 s 720p for Wan 2.7 R2V).
- **ComfyUI partner nodes:** 211 credits = $1; video cost = credits/s x duration ([pricing](https://docs.comfy.org/tutorials/partner-nodes/pricing)).
- Comfy-mcp recommends ≥24GB VRAM for local video.

---

## 7. Where to get vetted workflows
1. Built-in **ComfyUI Template Library** (search by name, e.g. "Wan2.2 14B FLF2V"); web mirrors [comfy.org/workflows](https://comfy.org/workflows/model/wan/) and comfy.org/hub (Wan 2.2 Animate character replacement, [Wan 2.7 R2V](https://comfy.org/hub/workflows/wan2-7-reference-to-video-113c9ab2c6d7/)).
2. Kijai WanVideoWrapper and Lightricks example workflows.
3. Knowledge bases: [Banodoco KB Wan](https://nathanshipley.github.io/banodoco-kb/kb/wan/index.html), [Banodoco LTX2](https://nathanshipley.github.io/banodoco-kb/kb/ltx2/index.html), [wanx-troopers](https://wanx-troopers.github.io/extensions.html).
4. HF JSON collections: [Wan2.2 14B FLF2V](https://huggingface.co/datasets/stablediffusiontutorials/wan-workflows/blob/main/Wan2.2_14B_FLF2v.json), [Wan2.2 Fun Control](https://huggingface.co/datasets/stablediffusiontutorials/wan-workflows/blob/main/Wan2.2_14B_Fun_Control.json), [Flux2 Klein edit 4B](https://huggingface.co/datasets/stablediffusiontutorials/Flux2-Klein-workflows/blob/main/Flux2_klein_image_edit_4b_base.json), RuneXX LTX-2.3 workflows, [wizdroid hybrids](https://huggingface.co/wizdroid/comfyui-workflows).
5. Civitai / RunComfy community workflows — check node versions; one Wan 2.2 Animate template was reported broken at one point. Avoid Patreon-gated and SEO aggregator sites.
