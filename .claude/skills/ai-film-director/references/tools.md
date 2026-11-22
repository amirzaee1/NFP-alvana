# Tools catalog — skills, MCPs, pipelines (as of Nov 2026)

**Maintenance caveat:** star counts and last-commit dates could not be checked (GitHub API blocked during research). Registry sites (skills.sh, skillsmp, smithery, claudemarketplaces) are aggregators — read the underlying repo's SKILL.md/README before installing anything. Many registry skills are thin prompt wrappers.

## 1. Already in this environment
- `anthropic-skills:flow-character-sheet` — hero image, 8-view turnaround, face/detail sheets, outfit swaps in Flow/Nano Banana for Omni. Use for Stage 4 character packs.
- `anthropic-skills:animated-short-film` — one sentence -> painterly short: story, sheet prompts, one timestamped master video prompt with style lock. Good for teasers / pilots.
- `anthropic-skills:prompt-master` — prompt optimisation for image/video AI.
- `nfp-alvana` (this repo) — Remotion titles, maps, subtitles, ElevenLabs tools, `deliver`.
- Connectors seen in session (user must have them connected): **ElevenLabs** (speech, voice design, image/video, flows), **Higgsfield** (character sheets, reference elements, video batches, 3D scene builder, upscale, cost estimates — spends credits).
No public page was found for the Anthropic-hosted skills.

## 2. Full AI-film kits (study the structure)
- **Gregory-Esman/ai-film-pipeline** (MIT) — Claude Code kit: `ai-film-director` orchestrator (7 phases with gates), `banana-pro-director`, `cinema-worldbuilder` (Seedance), `video-qa` (ffmpeg drift QC vs refs); refs attached in numbered `@imageN` order; generation-log.md. — https://raw.githubusercontent.com/Gregory-Esman/ai-film-pipeline/main/CLAUDE.md
- **HKUDS/ViMax** (MIT) — director / screenwriter / producer / generator agents; idea -> script -> shots -> reference consistency -> render; paper arXiv 2606.07649; stars reported 5.5k–12k+ (conflicting). — https://github.com/HKUDS/ViMax
- showlab/MovieAgent — multi-agent planning; needs manual StoryDiffusion setup; licence unspecified (research). — https://github.com/showlab/MovieAgent
- andyzlys/FilmAgent — multi-agent film in 3D virtual spaces (research). — https://github.com/andyzlys/FilmAgent
- MAViS — long-sequence video storytelling paper. — https://arxiv.org/html/2508.08487v5
- arkdutt/FrameWork — scripts, storyboards, shot lists. — https://github.com/arkdutt/FrameWork
- junjamrk/OpenCinema — local-first studio driven by MCP from Claude Code. — https://github.com/junjamrk/OpenCinema/wiki
- wilwaldon/Claude-Code-Video-Toolkit — not inspected. — https://github.com/wilwaldon/Claude-Code-Video-Toolkit
- Legacy/research: StoryDiffusion, Mora, AniDoc (2024-era, status unverified).

## 3. Storyboard / video-prompt skills
- aicontentskills/ai-video-storyboard-skill (MIT) — brief -> multi-shot plan, consistency rules, post checklist. — https://github.com/aicontentskills/ai-video-storyboard-skill
- smixs/visual-skills — "AI Film Director": storyboard table, prompt audit, director treatment, Veo JSON; attribution required. — https://skillsmp.com/creators/smixs/visual-skills
- H4pplness/storyboard-skill — <60 s storyboards + poster/video prompts. — https://raw.githubusercontent.com/H4pplness/storyboard-skill/main/README.md
- **leegonzales/veo3-prompter** — Veo 3.1 prompts, audio direction, multi-shot choreography. — https://smithery.ai/skills/leegonzales/veo3-prompter
- square-zero-labs/video-prompting-skill. — https://cdn.jsdelivr.net/gh/square-zero-labs/video-prompting-skill@main/README.md
- michaelboeding/skills `video-generation` (Veo 3.1 scripts, batch from scenes file) and `video-producer-agent`. — https://skills.sh/michaelboeding/skills/video-generation
- krishamaze `google-flow-prompting` (its "Ingredients Ultra-only" claim conflicts with Google). — https://skills.sh/krishamaze/skills/google-flow-prompting
- mckruz/comfyui-expert `comfyui-character-gen`. — https://skills.sh/mckruz/comfyui-expert/comfyui-character-gen
- Uninspected: asebesta `veo-video`, orchestkit `video-storyboarding`, guia-matthieu `ai-video-prompting`, zysilm `gemini-video-producer`, `cinematic-short`.

## 4. MCP servers
**ComfyUI**
- **Comfy-Org/comfy-mcp** (official, beta, 42 tools; AGPL-3.0 or commercial) — run workflow JSON, async jobs, video contact sheets, template search, validate/edit; `pip install comfy-mcp "comfy-cli>=1.14.0"`; ≥24GB VRAM for local video; remote via `COMFYUI_URL`. — https://raw.githubusercontent.com/Comfy-Org/comfy-mcp/main/README.md
- **Comfy Cloud MCP** (hosted, runs on Comfy Cloud GPUs) — `https://cloud.comfy.org/mcp`. Best fit for this GPU-less VM.
- **artokun/comfyui-mcp** (MIT) — 38 tools, 42 skills (Flux, WAN, LTX 2.3, Qwen guides), installs models/node packs, slash commands `/comfy:gen`, `/comfy:debug`, `/comfy:recipe`; local, LAN or Comfy Cloud; `npx -y comfyui-mcp` or `/plugin marketplace add artokun/comfyui-mcp` -> `/plugin install comfy`; Node 22.14+; npm 0.52.x. — https://raw.githubusercontent.com/artokun/comfyui-mcp/main/README.md
- Community: shawnrushefsky/comfyui-mcp, joenorton/comfyui-mcp-server, alecc08/comfyui-mcp.

**Google**
- GoogleCloudPlatform vertex-ai-creative-studio `mcp-genmedia` (experimental Go: Veo, Imagen, Lyria, Chirp, Gemini; needs GCP project + bucket). — https://googlecloudplatform.github.io/vertex-ai-creative-studio/experiments/mcp-genmedia/ (also a Veo 3 character-consistency demo).
- Community Veo: `veo-mcp-server` (PyPI), alohc/veo-mcp-server, dayongd1/mcp-veo3, `gemini-media-mcp`.
- **Google Flow: no API/MCP found** — prompts stay copy-paste.

**Hosted multi-model**
- **fal.ai MCP** (official, hosted) — `mcp.fal.ai/mcp`; needs fal key; Veo, Kling, Wan etc. — https://fal.ai/docs/documentation/setting-up/mcp
- VidFlux MCP (Veo 3.1, Kling 3.0, Seedance 2.5, Hailuo). — https://mcpservers.org/servers/vidflux-ai-mcp
- `video-generation-mcp` (npm; Runway, Pika, Luma, Kling, MiniMax). No official Runway/Luma/Kling/Replicate MCP found.

**Audio**
- **ElevenLabs MCP** (official, hosted, OAuth) — `https://api.elevenlabs.io/v1/mcp` and Creative `https://api.elevenlabs.io/v1/mcp-creative`; old local server deprecated. — https://elevenlabs.io/docs/eleven-api/resources/mcp-server

**Higgsfield**
- Official remote MCP `https://mcp.higgsfield.ai/mcp` (add as custom connector); for Claude Code they recommend `@higgsfield/cli` + skills; every generation spends credits. — https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent

## 5. Automation templates (n8n)
- #11594 consistent-character videos: Veo 3.1 + GPT-4o + Nano Banana (5 refs, Telegram preview). — https://n8n.io/workflows/11594-creating-consistent-character-videos-with-veo-31-gpt-4o-and-google-nanobanana/
- #8158 Gemini 5-scene story -> images + Veo3 JSON. — https://n8n.io/workflows/8158-create-emotional-stories-with-gemini-ai-generate-images-and-veo3-json-prompts/
- #22248 consistent-character episodes (sheet, keyframes, clips, VO) via GenMagic + Drive/Sheets. — https://n8n.io/workflows/22248-create-consistent-character-episodes-from-a-form-with-genmagic-google-drive-and-sheets/
- Google codelab: consistent imagery with Nano Banana. — https://codelabs.developers.google.com/gemini-consistent-imagery-notebook

## 6. Code animation (titles, maps, explainers)
- **Remotion official skill**: `npx skills add remotion` (this repo already uses Remotion via nfp-alvana). — https://skillsmp.com/creators/remotion-dev/remotion
- Manim: adithya-s-k/manim_skill (`npx skills add adithya-s-k/manim_skill`). — https://github.com/adithya-s-k/manim_skill

## 7. JSON prompt helpers (optional)
- Replicate `veo-3-apps/json-prompt`; solvingtools JSON-Prompt-Gen. No official Veo JSON schema exists — structure matters, not syntax.

## Recommendation for this user
1. Use this skill + `flow-character-sheet` for documents and Flow prompts (no install).
2. For video without a GPU: Comfy Cloud in the browser; if the user wants Claude to run it, connect **Comfy Cloud MCP** or **artokun/comfyui-mcp** -> Comfy Cloud (user adds account/key in environment settings; never in chat).
3. Study ai-film-pipeline's `video-qa` idea for drift checks; replicate with ffmpeg contact sheets here.
