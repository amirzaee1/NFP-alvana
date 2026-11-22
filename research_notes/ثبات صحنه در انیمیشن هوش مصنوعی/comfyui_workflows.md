# ComfyUI and Open-Model Workflows for Consistent Characters, Scenes and Image-to-Video (as of Nov 2026)

Method note: these notes come from web search snippets dated up to late 2026. Direct page fetches of docs.comfy.org failed because the host is not on this cloud session's network allowlist, so the official Comfy docs pages were read only through search-result summaries. Numbers for VRAM and price come mostly from third-party guides unless marked official. Verify them before relying on them.

## (a) Image consistency methods: which to use, and which suit cartoon/kids vs realistic historical

### Takeaway
In late 2026 the main way to get consistent characters is reference-based editing models: Qwen-Image-Edit-2511, FLUX.2 [dev] with up to 10 references, FLUX.2 [klein], and Nano Banana Pro through API nodes. You generate one hero image or a turnaround sheet, then make every other shot as an edit of it. A trained LoRA (ai-toolkit) is still the most reliable option for a character that recurs many times. Face-ID adapters like IP-Adapter, InstantID and PuLID are older, face-focused tools from the U-Net era. They give up editability and are a poor fit for cartoon characters.

### Cited Findings
- **Qwen-Image-Edit-2511** (the current Qwen edit release, after 2509): the ComfyUI docs say it has better character consistency, multi-person editing, LoRA support and stronger geometric reasoning. The native template uses the bf16 diffusion model. — [ComfyUI docs: Qwen-Image-Edit-2511](https://docs.comfy.org/tutorials/image/qwen/qwen-image-edit-2511.md)
- A community guide pairs Qwen-Image-Edit with the Qwen2.5-VL 7B text encoder and a "multiple angles" LoRA to make several views of one character, which works as a turnaround-sheet method. — [stable-diffusion-art.com](https://stable-diffusion-art.com/qwen-image-edit-multiple-angle-lora/)
- **FLUX.2 [dev]** (released Nov 25, 2025): BFL says it can reference up to 10 images at once "with the best character / product / style consistency available today". NVIDIA's announcement says six. — [BFL blog](https://bfl.ai/blog/flux-2); [NVIDIA blog](https://blogs.nvidia.com/blog/rtx-ai-garage-flux-2-comfyui)
- FLUX.2 [dev] has day-0 ComfyUI support. Comfy says "24GB+ strongly recommended for high-res". BFL's own reference script needs H100-class VRAM. An fp8 build made with NVIDIA and ComfyUI targets consumer GPUs. — [Comfy blog](https://blog.comfy.org/p/flux2-state-of-the-art-visual-intelligence); [BFL flux2 README](https://raw.githubusercontent.com/black-forest-labs/flux2/HEAD/README.md)
- FLUX.2 [dev] is under a **Non-Commercial License**; a commercial license is sold separately. — [BFL flux2 README](https://raw.githubusercontent.com/black-forest-labs/flux2/HEAD/README.md)
- **FLUX.2 [klein]**: the 4B model is Apache 2.0 and the 9B is non-commercial. Both do text-to-image and single- or multi-reference editing. For 4B VRAM, Comfy docs say about 8GB and BFL's launch post says about 13GB. — [Comfy blog: Klein](https://blog.comfy.org/p/flux2-klein-4b-fast-local-image-editing); [BFL Klein post](https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence); [ComfyUI docs: Klein](https://docs.comfy.org/tutorials/flux/flux-2-klein)
- BFL's guide on character consistency in editing says FLUX keeps a character recognizable over several sequential edits, starting from one reference photo. — [BFL docs](https://docs.bfl.ai/guides/usecases_editing_character_consistency)
- **Flux Kontext** (older than FLUX.2): described as strong for character and layout consistency across about 10 references, but more technical to drive. Practitioners use it to avoid training a LoRA per character, but say a LoRA still wins for characters that recur heavily. RunComfy publishes a Kontext + PuLID workflow. — [Higgsfield blog](https://higgsfield.ai/blog/Why-Does-Your-AI-Characters-Face-Keep-Changing); [dev.to](https://dev.to/qcrao/character-consistency-in-ai-comics-3-tricks-that-beat-lora-training-for-me-3ad7); [RunComfy Kontext+PuLID](https://www.runcomfy.com/comfyui-workflows/flux-kontext-pulid-consistent-character-generation)
- **PuLID / InstantID / IP-Adapter**: the PuLID paper says ID methods like InstantID raise identity similarity but cost editability. The InstantCharacter paper says adapter methods such as IP-Adapter were built for U-Net models and scale poorly to diffusion transformers. A 2026 paper still uses PuLID as a baseline to beat. — [PuLID paper](https://arxiv.org/html/2404.16022v2); [InstantCharacter paper](https://arxiv.org/html/2504.12395v1); [arXiv 2602.13994](https://arxiv.org/html/2602.13994)
- **LoRA training with ai-toolkit (Ostris)** supports FLUX.1, FLUX.2, FLUX.2 Klein, Qwen-Image, Z-Image, SDXL, SD1.5, Wan 2.1/2.2, LTX 2/2.3 and others. — [a2a-mcp.org guide (third party)](https://a2a-mcp.org/blog/ostris-ai-toolkit)
- LoRA training VRAM (third-party, RunComfy): Qwen-Image or Qwen-Image-2512 needs 24GB+, with 32GB+ more comfortable. Wan 2.2 14B needs 24GB only with short clips and quantization; 48GB+ is recommended. — [RunComfy Qwen-Image-2512 guide](https://www.runcomfy.com/trainer/ai-toolkit/qwen-image-2512-lora-training); [RunComfy Wan 2.2 guide](https://www.runcomfy.com/trainer/ai-toolkit/wan-2-2-t2v-14b-lora-training)
- A June 2026 Runflow guide gives a typical pipeline: build a character sheet, train a character LoRA on it, then load the LoRA in a FLUX graph. RunComfy's "Consistent Character Creator 4.0" builds a FLUX.2 dataset in the same way. — [Runflow](https://www.runflow.io/blog/comfyui-consistent-characters-flux); [RunComfy CCC 4.0](https://www.runcomfy.com/pt/comfyui-workflows/consistent-character-creator-4-0-comfyui-flux-2-dataset)
- Community hybrid workflows combine Qwen-Image-Edit with FLUX.2 Klein 9B, or chain Chroma1-HD, Flux.2 Dev, Wan 2.2 and LTX 2.3. — [wizdroid HF workflows](https://huggingface.co/wizdroid/comfyui-workflows); [r/StableDiffusion via Telegram mirror](https://t.me/s/rStableDiffusion/62193)
- **Nano Banana Pro** runs inside ComfyUI as a Partner (API) node and is billed in Comfy credits. — [Comfy docs: Nano Banana Pro](https://docs.comfy.org/tutorials/partner-nodes/google/nano-banana-pro/workflow); [Comfy partner pricing](https://docs.comfy.org/tutorials/partner-nodes/pricing)
- A community post notes that image-editing models still struggle with character consistency, "especially for stylized characters". — [r/StableDiffusion via Telegram mirror](https://t.me/s/rStableDiffusion/62193)

### Inferences
- **Cartoon/kids style**: start with a clean flat-colour character sheet made with Qwen-Image-Edit-2511 or FLUX.2, plus the multiple-angles LoRA, and make each shot as a reference edit. Face-ID adapters (PuLID, InstantID) are trained on real faces, so they are the wrong tool here. A small style-and-character LoRA (ai-toolkit on Qwen-Image or FLUX.2 Klein 4B) is the strongest fix if the character drifts. This is inferred from the editability and U-Net findings above, not from a benchmark.
- **Realistic historical**: reference editing with FLUX.2 [dev] (multi-reference) or Nano Banana Pro, with PuLID still usable for face identity on FLUX.1 graphs. Mind the FLUX.2 dev non-commercial license; Klein 4B (Apache 2.0) and Qwen are safer for commercial work.
- **ControlNet (pose/depth)** for staging is still in use, but the edit models now take pose and layout from instructions and reference images. Use it when exact blocking matters.
- **Older or legacy tools**: IP-Adapter Plus on SDXL, InstantID, and OmniGen v1 are older options and no longer state of the art. I found no 2026 source that recommends OmniGen or ACE++.

### Gaps
- I found no head-to-head benchmark of Qwen-Image-Edit-2511, FLUX.2 and Nano Banana Pro for character consistency, and none specific to cartoon or kids styles.
- I found no 2026 sources on ACE++, OmniGen 2 or FluxGym; their status is unverified.
- I found no reliable figure for FLUX.2 LoRA training VRAM.

## (b) Image-to-video: which models preserve identity and background, clip lengths, VRAM, speed

### Takeaway
The open-weights options are Wan 2.2 (the last open Wan, Apache 2.0), LTX-2 / 2.3 / 2.5 (Lightricks, audio and video, 22B), and HunyuanVideo 1.5 (8.3B, 24GB). Wan 2.5, 2.6 and 2.7 are **API-only**. For identity, VACE or reference-to-video beats plain I2V, and first-last-frame (FLF2V) best locks both start and end of a scene. Wan 2.2 Animate handles character motion transfer and replacement. Lightx2v or Lightning LoRAs cut Wan to 4 steps. Older tools: CogVideoX, CausVid, and Wan 2.1-only flows are superseded.

### Cited Findings
- **Wan 2.2 FLF2V** has native ComfyUI support through the "Wan2.2 14B FLF2V" template: you upload start and end images to two LoadImage nodes. — [Comfy blog: Wan2.2 FLF2V](https://blog.comfy.org/p/wan22-flf2v-comfyui-native-support); [ComfyUI docs: Wan 2.2](https://docs.comfy.org/tutorials/video/wan/wan2_2)
- A VACE start-to-end route also exists in Kijai's WanVideoWrapper (WanVideoVACEStartToEndFrame); the native route uses WanFirstLastFrameToVideo. — [comfyui-mcp skill file (third party)](https://unpkg.com/comfyui-mcp@0.49.0/plugin/skills/wan-flf-video/SKILL.md)
- **Wan 2.2 Animate** (wan2.2_animate_14B_bf16 with the wan_2.1 VAE) does character animation and replacement. Width and height must be multiples of 16, and the docs advise starting small to avoid running out of VRAM. There is a core-only workflow that needs your own preprocessing and a fuller one with custom nodes. — [ComfyUI docs: Wan2.2 Animate](https://docs.comfy.org/tutorials/video/wan/wan2-2-animate); [Comfy hub: Animate character replacement](https://comfy.org/hub/workflows/wan-animate-2-2-character-replacement-workflow-840b6e4c3983/)
- **Wan 2.2 VACE Fun** takes a reference image and a prompt (WanVaceToVideo node). One blog reports that VACE keeps faces and clothing more consistent than standard I2V, where the subject drifts. Another community note says Fun VACE 2.2 is better than VACE 2.1. Phantom (up to 4 references) and MAGREF are alternatives for multi-subject consistency. — [RunComfy VACE Fun workflow](https://www.runcomfy.com/comfyui-workflows/wan2-2-vace-fun-in-comfyui-image-animation-workflow); [wan27.org blog](https://wan27.org/blog/wan-2-2-vace-explained); [Banodoco KB: Wan](https://nathanshipley.github.io/banodoco-kb/kb/wan/index.html)
- A Wan 2.2 14B Fun Control workflow JSON is public. — [HF dataset](https://huggingface.co/datasets/stablediffusiontutorials/wan-workflows/blob/main/Wan2.2_14B_Fun_Control.json)
- **Wan 2.5, 2.6 and 2.7 have no open weights.** Comfy says open weights cover Wan 2.1 and 2.2, while 2.5 and later run only through Partner Nodes. Wan 2.6 is "a cloud API model accessible through ComfyUI partner nodes". — [Comfy: Wan workflows](https://comfy.org/workflows/model/wan/); [Comfy: Wan 2.6](https://comfy.org/p/supported-models/wan2-6/); [Comfy blog: Wan 2.5 preview](https://blog.comfy.org/p/wan-25-preview-api-nodes-in-comfyui); [Atlas Cloud](https://www.atlascloud.ai/de/blog/tips/is-wan-3.0-open-source)
- **Wan 2.7 Reference-to-Video** (API) supports single-character, multi-character and multi-shot output at native 1080p, 2 to 10 seconds. It is on Comfy hub, fal, Replicate and Together. Wavespeed lists 720p at $1.00 for 5s and $1.50 for 10s. Clear, distinct reference clips give better identity. — [Together AI](https://together.ai/models/wan-27-r2v); [fal](https://fal.ai/models/fal-ai/wan/v2.7/reference-to-video/llms.txt); [Wavespeed](https://wavespeed.ai/blog/posts/introducing-alibaba-wan-2-7-reference-to-video-on-wavespeedai); [Comfy hub workflow](https://comfy.org/hub/workflows/wan2-7-reference-to-video-113c9ab2c6d7/)
- **Speed LoRAs for Wan 2.2 (lightx2v / Lightning)**: distilled models need 4 steps without CFG, with a claimed 20x speed-up. A community test gives about 89s for a 512x848 clip with the 4+4-step LightX2V setup, and about 37s with a 2-step variant at some quality cost. Lowering the LoRA strength removes the speed benefit and can blur the output. — [lightx2v Wan2.2-Distill-Models](https://huggingface.co/lightx2v/Wan2.2-Distill-Models); [Leon1000 2-step](https://huggingface.co/Leon1000/Wan2.2_I2V_LightX2V_2Step); [Wan2.2-Lightning GitHub](https://github.com/ModelTC/Wan2.2-Lightning)
- Wan 2.2 14B VRAM: lightx2v ships separate configs for 80GB cards and for 24GB cards like the 4090. FP8 builds of 14B I2V with a Lightning LoRA are common. — [lightx2v Distill Models](https://huggingface.co/lightx2v/Wan2.2-Distill-Models)
- **LTX-2** (Lightricks): native ComfyUI support from day 0 with I2V templates; the distilled version runs in 8 steps. Lightricks lists 32GB+ VRAM; FP8, GGUF and NVFP4 builds and low-VRAM loader nodes help, and NVIDIA claims NVFP4 is up to 3x faster with 60% less VRAM. — [ComfyUI docs: LTX-2](https://docs.comfy.org/tutorials/video/ltx/ltx-2); [Lightricks ComfyUI-LTXVideo](https://github.com/Lightricks/ComfyUI-LTXVideo); [NVIDIA guide](https://www.nvidia.com/en-gb/geforce/news/rtx-ai-video-generation-guide)
- **LTX-2.3**: new VAE for sharper detail, cleaner audio, and native vertical 1080x1920. — [Comfy LTX model page](https://comfy.org/workflows/model/ltx/)
- **LTX-2.5**: open weights (a 22B audio-video "world model"; dev and distilled variants; you must accept a license, and it is "open weights" but not OSI open source). ComfyUI has native T2V, I2V and FLF2V workflows and also a Partner Node. Comfy says it needs ComfyUI 0.32.0+. Third-party coverage mentions native multi-shot and a diffusion decoder, plus a 10s video from an image in 6.8s on NVIDIA superchips. — [Comfy blog: LTX-2.5](https://blog.comfy.org/p/ltx-25-day-0-support-in-comfyui); [HF Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5); [RunPod blog](https://runpod.io/blog/ltx-2-5-the-open-weights-world-model-built-for-speed-and-how-to-run-it-on-runpod); [NYU Shanghai RITS](https://rits.shanghai.nyu.edu/ai/ltx-2-5-adds-native-multi-shot-video-and-a-diffusion-decoder/); [VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights)
- **HunyuanVideo 1.5**: 8.3B parameters, runs on 24GB consumer GPUs, with a 720p T2V and I2V model and a 1080p super-resolution upscaler, natively in ComfyUI. I2V needs the sigclip_vision_patch14_384 model, the Qwen2.5-VL 7B encoder and ByT5. Wan2GP claims it runs in as little as 6GB. — [ComfyUI docs: HunyuanVideo 1.5](https://docs.comfy.org/tutorials/video/hunyuan/hunyuan-video-1-5); [Comfy blog](https://blog.comfy.org/p/hunyuanvideo-15-native-support); [HF tencent/HunyuanVideo-1.5](https://huggingface.co/tencent/HunyuanVideo-1.5)
- **FramePack / F1** (on HunyuanVideo 13B): 6GB VRAM whatever the length, up to 60s. On a 4090 it runs 2.5 s/frame (1.5 s/frame with TeaCache). An 8GB laptop test took 56 minutes for 5s, limited by system RAM. Sources disagree on whether quality falls off after about 4s. — [FramePack GitHub](https://github.com/lllyasviel/framepack); [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/framepack-can-generate-ai-videos-locally-with-just-6gb-of-vram); [lilting.ch test](https://lilting.ch/en/articles/local-long-video-fastwan-framepack-rocm)
- **Lip-sync: InfiniteTalk** has a native ComfyUI node (WanInfiniteTalkToVideo) on top of Wan 2.1 I2V, with single and multi-speaker patches and settings for length, motion_frame_count and audio_scale. Good up to about 1 minute from one image; after that colour shift grows. **MultiTalk** is older and limited to about 15s. Kijai's wrapper has a long I2V Multi/InfiniteTalk node with a frame_window_size setting. — [ComfyUI docs: InfiniteTalk](https://docs.comfy.org/tutorials/video/wan/wan-infinitetalk); [InfiniteTalk GitHub](https://github.com/MeiGen-AI/InfiniteTalk); [wanx-troopers](https://wanx-troopers.github.io/infinite-talk.html)
- **API video models in ComfyUI** (Kling, Seedance 2.5, Wan 2.6/2.7, LTX-2.5, Nano Banana Pro and others) are billed in credits: 211 credits = 1 USD, and video cost = credits per second x duration. Seedance-1-5-pro was due to retire on Nov 11, 2026. — [Comfy partner nodes pricing](https://docs.comfy.org/tutorials/partner-nodes/pricing)

### Inferences
- For "keep the same scene": make the keyframes with the image methods in (a), then use **Wan 2.2 FLF2V** (start and end both fixed) or **LTX-2.5 FLF2V**. That gives the strongest background and identity lock, because the model only fills in the motion between images you already approved.
- For character identity across shots without fixed end frames, use Wan 2.2 VACE Fun or Phantom (local), or Wan 2.7 R2V (API).
- Clip length per generation: Wan 2.2 is short (around 5s, typical for the model; no exact figure was confirmed here); Wan 2.7 R2V 2 to 10s; LTX-2.x longer, with audio. Use InfiniteTalk for talking heads up to about 1 minute.
- On a CPU-only VM like this project's, none of these run locally in practice. Use cloud GPU or API nodes.

### Gaps
- I could not confirm official Wan 2.2 clip-length and VRAM numbers (fetching docs.comfy.org was blocked), or VRAM for 5B TI2V.
- I found no head-to-head identity or background benchmark across Wan, LTX and Hunyuan, and nothing on LatentSync's 2026 status. Kling, Runway, Luma and Hailuo per-clip prices in ComfyUI were not retrieved.
- HunyuanVideo-Avatar and CogVideoX were not researched in 2026 sources. CogVideoX is likely legacy, but that is unconfirmed.

## Long-video continuity: chaining last frames, VACE extension, context windows, colour drift

### Takeaway
There is no official fix. The practical recipe from the community: extend with several trailing frames as VACE context (not a single last frame), drop the blurry final frames of each chunk, render at 720p or higher, and colour-match every chunk to one reference frame (Color Match node, MKL). FLF2V between pre-approved keyframes avoids most drift.

### Cited Findings
- Re-using the last frame again and again accumulates error and colour drift. — [HF discussion, LTX-2.3 workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows/discussions/132)
- VACE chained extension often causes colour mismatch. Public "infinite extension / loop" workflows include colour-fix options. — [Civitai VACE Seamless/Infinite Extension](https://civitai.com/models/1775203); [Wan VACE Masking & Extension](https://comfy.icu/models/1536883/Wan-VACE-Masking-Extension-Seamlessly-Extend-Join-and-Auto-Fill-Existing-Videos-While-Maintaining-Motion)
- Supply several last frames (for example 16) as VACE initial frames. But cutting the last 4 latents (16 frames) does not give a correctly encoded Wan latent sequence, and Wan2GP advises dropping at least the last 4 frames of each window because VACE's last frames tend to be blurry. — [wanx-troopers extensions](https://wanx-troopers.github.io/extensions.html); [Wan2GP commit](https://huggingface.co/spaces/zxymimi23451/Wan2GP_you_must_clone_this_space_to_use_it/commit/453823e140999e3e14df7c27cc0836f090e68dda)
- Colour-match frames to one reference image, for example with the ComfyUI Color Match node set to MKL. This may fail if the scene changes a lot. Keeping resolution at 720p or higher reportedly reduces drift. — [HF discussion](https://huggingface.co/RuneXX/LTX-2.3-Workflows/discussions/132); [wanx-troopers](https://wanx-troopers.github.io/extensions.html)
- An alternative is to build a drift-free "skeleton" with FramePack or SkyReels V2 extension, then patch in changes with VACE. — [wanx-troopers](https://wanx-troopers.github.io/extensions.html)
- VACE assumes bidirectional attention over the whole clip, so it does not suit streaming, and fixed chunk sizes limit first+last-frame extension. — [arXiv 2602.14381](https://arxiv.org/html/2602.14381)
- Kijai's WanVideoWrapper includes a context-windows MultiTalk example workflow. — [HF mirror of WanVideoWrapper example](https://huggingface.co/aliensmn/ComfyUI-WanVideoWrapper/blob/main/example_workflows/wanvideo_multitalk_test_context_windows_01.json)
- FramePack's design (frame context packing, forward-only F1) is aimed at preventing drift. — [FramePack paper](https://arxiv.org/html/2504.12626v3)

### Inferences
- For a story animation, plan the film as many short shots joined by cuts, each made from approved keyframes with FLF2V, rather than one long continuous extension. That avoids most drift, and cuts are normal in editing anyway.

### Gaps
- I found no quantitative comparison of the drift fixes; all are anecdotal community advice.

## Cloud options to run ComfyUI without a GPU, and rough costs

### Takeaway
Comfy Cloud (official, credits, 96GB RTX 6000 Pro, same credit pool as API nodes) is the simplest option. RunComfy is managed and billed per second. RunPod is the cheapest for raw GPUs. API-only routes (fal, Replicate, Wavespeed, Together) skip ComfyUI entirely and charge per clip.

### Cited Findings
- **Comfy Cloud** moved to usage-based credits tied to active GPU time, runs on RTX 6000 Pro 96GB, and cut GPU prices 30% as of Jan 23, 2026. A third party lists an entry tier of 400 credits for $20 a month. Partner nodes and Cloud GPU time share one credit balance. — [Comfy blog: Cloud pricing](https://blog.comfy.org/p/comfy-cloud-new-features-and-pricing); [Comfy Cloud pricing](https://www.comfy.org/cloud/pricing); [wireflow (third party)](https://www.wireflow.ai/blog/best-comfyui-cloud-pricing-tools-in-2026); [Comfy partner pricing](https://docs.comfy.org/tutorials/partner-nodes/pricing)
- **RunComfy**: per-second billing. H100 costs $4.49/hr pay-as-you-go or $3.59/hr on Pro; H200 $5.75 or $4.59 (updated Jun 1, 2026); the T4/A4000 tier is about $0.99/hr. It also hosts ai-toolkit LoRA training. — [RunComfy pricing](https://www.runcomfy.com/assets/pricing); [RunComfy trainer](https://www.runcomfy.com/trainer/ai-toolkit/getting-started)
- **RunPod**: H100 80GB from $1.99/hr on-demand, A40 from $0.35/hr, L40S from $0.79/hr, billed per second. A third party lists the RTX 4090 at $0.34 to $0.74/hr. — [RunPod pricing](https://www.runpod.io/gpu-cloud/pricing); [picassoia comparison](https://blog.picassoia.com/runpod-vs-comfy-cloud-cheapest-way-to-run-comfyui)
- **API routes**: Wan 2.7 R2V is on fal, Replicate (wan-video/wan-2.7-r2v) and Together; Wavespeed charges $1.00 per 5s at 720p. — [Replicate](https://replicate.com/wan-video/wan-2.7-r2v/llms.txt); [Wavespeed](https://wavespeed.ai/blog/posts/introducing-alibaba-wan-2-7-reference-to-video-on-wavespeedai)

### Inferences
- For a phone-based user with a CPU-only VM: the lowest-friction routes are API endpoints (fal or Replicate, called by script, which needs a key and network allowlist) or Comfy Cloud in a browser. RunPod is the cheapest per hour but takes setup.

### Gaps
- ThinkDiffusion pricing and Comfy Cloud's exact credit-per-GPU-minute rate were not found. fal and Replicate per-second prices for Wan 2.2 or LTX were not retrieved.

## Where to find vetted workflows

### Takeaway
Start from the official ComfyUI Template Library (built into ComfyUI, mirrored at comfy.org/workflows and comfy.org/hub), then Kijai's wrapper example workflows, then curated community sources (Civitai, RunComfy, Banodoco KB). Check node versions before use.

### Cited Findings
- Official templates are searchable by name in the ComfyUI Template Library (for example "Wan2.2 14B FLF2V"); the web mirrors are by model and by tag. — [ComfyUI docs: Wan 2.2](https://docs.comfy.org/tutorials/video/wan/wan2_2); [comfy.org Wan workflows](https://comfy.org/workflows/model/wan/); [comfy.org image-edit tag](https://www.comfy.org/ar/workflows/tag/image-edit/); [Comfy blog: new template library](https://blog.comfy.org/p/new-template-library-and-partner)
- Comfy hub pages host workflows such as Wan 2.2 Animate character replacement and Wan 2.7 R2V. — [Comfy hub](https://comfy.org/hub/workflows/wan-animate-2-2-character-replacement-workflow-840b6e4c3983/)
- Community knowledge bases: Banodoco KB (Wan, LTX-2) and wanx-troopers (extension, InfiniteTalk). — [Banodoco KB Wan](https://nathanshipley.github.io/banodoco-kb/kb/wan/index.html); [Banodoco KB LTX2](https://nathanshipley.github.io/banodoco-kb/kb/ltx2/index.html); [wanx-troopers](https://wanx-troopers.github.io/extensions.html)
- Public workflow JSON collections are on Hugging Face (stablediffusiontutorials wan-workflows and Flux2-Klein-workflows; RuneXX LTX-2.3 workflows). — [HF wan-workflows](https://huggingface.co/datasets/stablediffusiontutorials/wan-workflows/blob/main/Wan2.2_14B_FLF2v.json); [HF Klein workflows](https://huggingface.co/datasets/stablediffusiontutorials/Flux2-Klein-workflows/blob/main/Flux2_klein_image_edit_4b_base.json)
- A comment on a Comfy blog post reports a broken Wan 2.2 Animate template at one point, so check templates are current. — [Comfy blog comments](https://blog.comfy.org/p/wan22-flf2v-comfyui-native-support/comments)
- FramePack maintainers say the GitHub repo is the only official site; lookalike sites exist. — [FramePack GitHub](https://github.com/lllyasviel/framepack)

### Inferences
- Prefer official templates and Kijai or Lightricks repos over Patreon-gated or SEO sites. Many 2026 search results were SEO aggregators of mixed reliability.

### Gaps
- OpenArt and comfyworkflows.com were not checked in this pass.
