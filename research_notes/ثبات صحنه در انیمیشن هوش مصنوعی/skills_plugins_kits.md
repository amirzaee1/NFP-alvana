# Skills, MCP servers, plugins and open-source kits for AI animation / film-making (as of Nov 2026)

Method note: web search + fetch of READMEs. GitHub API (star counts, last-push dates) was NOT reachable from this session, so star counts are missing unless a source quoted them. Treat "maturity" judgements as approximate. Several registry sites (skills.sh, skillsmp, claudemarketplaces, smithery) are aggregators; the underlying GitHub repo is the primary source.

## 1. Claude / agent skills for animation, video, storyboard, directing, video-model prompting, Remotion, Manim

### Takeaway
There is no official Anthropic skill for film/storyboarding in the public anthropics/skills repo (its creative skills are algorithmic-art, canvas-design, slack-gif-creator). The useful material is community skills: several storyboard/Veo-prompt skills, a full "AI film director" kit (Gregory-Esman/ai-film-pipeline), an official Remotion skill from the Remotion team, and Manim skills. In this Claude environment, Anthropic-hosted skills `animated-short-film` and `flow-character-sheet` are also available (observed in this session's skill list, not documented publicly in sources found).

### Cited Findings
**Official / first-party**
- anthropics/skills creative skills: `algorithmic-art` (p5.js generative art, seeded randomness, flow fields), `canvas-design` (static PNG/PDF posters), `slack-gif-creator` (animated GIFs with Slack-size validators); install via `npx skills add` pointing at anthropics/skills. Third-party directory says the repo holds ~16 skills (unverified count). — [mcpservers.org Slack Gif Creator](https://mcpservers.org/agent-skills/anthropic/slack-gif-creator); [mcpservers.org creative skills](https://mcpservers.org/claude-skills/creative)
- No search result showed an official Anthropic storyboard/film/Remotion/Manim skill in anthropics/skills. — (gap; see search [result](https://mcpservers.org/claude-skills/creative))
- Remotion team publishes an official Remotion skill for Claude Code: `npx skills add remotion`. — [skillsmp remotion-dev](https://skillsmp.com/creators/remotion-dev/remotion)
- Environment observation (this session): Anthropic-provided skills `anthropic-skills:animated-short-film` ("turn one sentence into a painterly cinematic short film: story, image prompts for character, location and object sheets, one timestamped master video prompt with a style lock") and `anthropic-skills:flow-character-sheet` ("consistent character reference pack: hero image, 8-view turnaround, face/detail sheets, outfit swaps in Google Flow with Nano Banana, for Gemini Omni video"). Also `anthropic-skills:prompt-master` (prompts for image/video AI). No public URL found.

**Community storyboard / director / video-prompt skills**
- aicontentskills/ai-video-storyboard-skill — brief → multi-shot production plan with cinematic prompts, visual-consistency rules, post-production checklist; install = copy SKILL.md to `~/.claude/skills`; MIT. — [GitHub](https://github.com/aicontentskills/ai-video-storyboard-skill)
- smixs/visual-skills ("an AI Film Director for your agent") — `video` skill writes prompts like a director; outputs storyboard table, prompt audit, director treatment, or Veo JSON; attribution line required on copies; En/Ru README. — [skillsmp](https://skillsmp.com/creators/smixs/visual-skills); repo github.com/smixs/visual-skills
- H4pplness/storyboard-skill — short-form (<60 s) storyboards; outputs storyboard-poster prompts + video prompts. — [README](https://raw.githubusercontent.com/H4pplness/storyboard-skill/main/README.md)
- leegonzales/veo3-prompter — ideas → Veo 3.1 prompts with cinematic structure, audio direction, multi-shot choreography. — [Smithery](https://smithery.ai/skills/leegonzales/veo3-prompter); mirror [claude-plugins.dev](https://claude-plugins.dev/skills/@majiayu000/claude-skill-registry/veo3-prompter)
- square-zero-labs/video-prompting-skill — agent skill for video prompting. — [repo README via jsdelivr](https://cdn.jsdelivr.net/gh/square-zero-labs/video-prompting-skill@main/README.md)
- michaelboeding/skills — `video-generation` (wraps Veo 3.1 scripts: extension, batch from scenes file) and `video-producer-agent`. — [skills.sh](https://skills.sh/michaelboeding/skills/video-generation); [claudepluginhub](https://www.claudepluginhub.com/skills/michaelboeding-skills/video-producer-agent)
- krishamaze/skills `google-flow-prompting` — Flow prompting guide (claims Ingredients = 3 images, "Ultra tier only" — unverified). — [skills.sh](https://skills.sh/krishamaze/skills/google-flow-prompting)
- Others found in registries (not inspected): asebesta `veo-video`, clawdbot `veo`, yonatangross/orchestkit `video-storyboarding` & `manim-visualizer`, guia-matthieu `ai-video-prompting`, zysilm `gemini-video-producer`, agricidaniel `claude-video-generate`, "cinematic-short" (storyboard → keyframes → chained Veo 3.1 clips). — [skills.sh veo-video](https://skills.sh/asebesta/claude-skills/veo-video); [skills.sh orchestkit](https://skills.sh/yonatangross/orchestkit/video-storyboarding); [claudemarketplaces](https://claudemarketplaces.com/skills/guia-matthieu/clawfu-skills/ai-video-prompting); [skillsmp zysilm](https://skillsmp.com/creators/zysilm/video-producer-skill/skills-gemini-video-producer); [claudskills cinematic-short](https://claudskills.com/skills/cinematic-short/)

**Full "AI film" skill kits**
- Gregory-Esman/ai-film-pipeline (MIT) — Claude Code project with skills: `ai-film-director` orchestrator (guided 7-phase w/ gates or pro 5-step), `banana-pro-director` (Nano Banana Pro image prompts, v2.0), `cinema-worldbuilder` (Seedance video prompts, Pro 2.0), `video-qa` (ffmpeg drift/continuity QC vs references). Stages: character/environment/prop bibles + shot list → locked reference sheets (face on mid-gray seamless, identity separate from outfit) → prompts → user generates in Higgsfield/ArtCraft and logs in generation-log.md → QA → post (Topaz upscale, Suno music). Every prompt standalone; references attached in numbered `@imageN` order. — [CLAUDE.md](https://raw.githubusercontent.com/Gregory-Esman/ai-film-pipeline/main/CLAUDE.md)
- wilwaldon/Claude-Code-Video-Toolkit. — [GitHub](https://github.com/wilwaldon/Claude-Code-Video-Toolkit) (not inspected)

**Remotion / Manim / code animation**
- Remotion official skill (above); udnisap `remotion-best-practices`; av `remotion-bits`; mathews-tom/praxis-skills `remotion-video` and `concept-to-video`; eigent-ai skill covering Remotion + Manim. — [skills.sh udnisap](https://skills.sh/udnisap/skills/remotion-best-practices); [claudemarketplaces remotion-bits](https://claudemarketplaces.com/skills/av/remotion-bits/remotion-bits); [skills.sh praxis](https://www.skills.sh/mathews-tom/praxis-skills/remotion-video); [skillsmp eigent](https://skillsmp.com/skills/eigent-ai-agent-skills-skills-image-and-video-generation-remotion-skill-md)
- adithya-s-k/manim_skill — two skills (Manim Community + ManimGL), `npx skills add adithya-s-k/manim_skill`; also Yusuke710 manim plugin (3Blue1Brown-style), awesome-skills/manim-skill, affaan-m `manim-video`. — [GitHub](https://github.com/adithya-s-k/manim_skill); [claudepluginhub Yusuke710](https://www.claudepluginhub.com/plugins/yusuke710-manim-skill); [GitHub awesome-skills](https://github.com/awesome-skills/manim-skill)

### Inferences
- For this kit (Persian Remotion studio), the most directly reusable patterns are: ai-film-pipeline's "bible + locked reference + numbered refs + QA" loop, and smixs/visual-skills' storyboard-table / Veo-JSON outputs. The in-environment `flow-character-sheet` and `animated-short-film` skills already cover character sheets + Flow prompting.
- Many registry skills are thin prompt wrappers; quality varies, inspect SKILL.md before adopting.

### Gaps
- No star counts / last-commit dates (GitHub API blocked). Could not confirm maintenance status of most community skills.
- No dedicated three.js film skill found in searches (only this repo's own 3d-animator).
- No public page for Anthropic's `animated-short-film` / `flow-character-sheet` skills was found.

## 2. MCP servers for ComfyUI, Google Veo/Gemini/Flow, Runway, Kling, Luma, ElevenLabs, Higgsfield, fal.ai, Replicate

### Takeaway
Official/first-party MCPs now exist for ComfyUI (Comfy-Org/comfy-mcp + hosted Comfy Cloud MCP), Google genmedia on Vertex (experimental Go servers for Veo/Imagen/Lyria/Chirp), fal.ai (hosted), ElevenLabs (hosted, incl. a "creative" endpoint), and Higgsfield (hosted connector). Runway, Luma, Kling and Replicate appear only via community or multi-provider servers. Google Flow itself has no API/MCP found.

### Cited Findings
**ComfyUI**
- Comfy-Org/comfy-mcp (official, beta, 42 tools) — stdio server wrapping comfy-cli; run workflow JSON, text→image, async jobs, video contact sheets, node/model/template search, workflow validate/edit/vary, launch/restart ComfyUI. `pip install comfy-mcp "comfy-cli>=1.14.0"`. Python ≥3.10. License AGPL-3.0-or-later OR commercial. Recommends ≥24 GB VRAM for local video. Hosted alternative: Comfy Cloud MCP at https://cloud.comfy.org/mcp (runs on Comfy Cloud GPUs). Remote ComfyUI via COMFYUI_URL. — [README](https://raw.githubusercontent.com/Comfy-Org/comfy-mcp/main/README.md)
- artokun/comfyui-mcp (MIT) — "local-first control plane": 38 MCP tools, 42 bundled skills (Flux, WAN, LTX 2.3, Qwen, etc. model guides, prompt-engineering, troubleshooting), installer packs, slash commands (/comfy:gen, /comfy:debug, /comfy:recipe), 4 sub-agents, hooks (VRAM check); downloads models from HF/CivitAI/Comfy Registry, installs node packs; targets local, LAN, or Comfy Cloud. Install `npx -y comfyui-mcp` or `/plugin marketplace add artokun/comfyui-mcp` → `/plugin install comfy`. Node 22.14+. npm versions reached 0.52.x. — [README](https://raw.githubusercontent.com/artokun/comfyui-mcp/main/README.md); [unpkg 0.52.205](https://app.unpkg.com/comfyui-mcp@0.52.205/files/README.md)
- Other community: shawnrushefsky/comfyui-mcp (images/audio/video, Docker), joenorton/comfyui-mcp-server (Python, iterative refine), alecc08/comfyui-mcp (TS, images), ericwanghp/ComfyUI_MCP, jonpojonpo/comfy-ui-mcp-server. — [shawnrushefsky](https://github.com/shawnrushefsky/comfyui-mcp); [alecc08](https://github.com/alecc08/comfyui-mcp); [joenorton](https://awesome.ecosyste.ms/projects/github.com%2Fjoenorton%2Fcomfyui-mcp-server)

**Google Veo / Gemini / Imagen / Flow**
- GoogleCloudPlatform/vertex-ai-creative-studio `experiments/mcp-genmedia` — Go MCP servers `mcp-veo-go`, `mcp-imagen-go`, Chirp 3 HD, Lyria, Gemini; needs GCP project + GCS bucket; stdio or `--transport http`; one-line binary installer; labelled experimental. — [docs](https://googlecloudplatform.github.io/vertex-ai-creative-studio/experiments/mcp-genmedia/); [Gemini CLI guide](https://googlecloudplatform.github.io/vertex-ai-creative-studio/experiments/mcp-genmedia/agents/geminicli/)
- Same repo has a "Veo 3 Character Consistency Demo". — [link](https://googlecloudplatform.github.io/vertex-ai-creative-studio/experiments/veo3-item-consistency/)
- Community Gemini-API Veo servers: `veo-mcp-server` (PyPI; Veo 3.1 t2v, i2v, extension), alohc/veo-mcp-server, dayongd1/mcp-veo3, `gemini-media-mcp` (PyPI), @stevekaplanai/google-ai-mcp (npm). — [PyPI veo-mcp-server](https://pypi.org/project/veo-mcp-server); [GitHub alohc](https://github.com/alohc/veo-mcp-server); [lobehub dayongd1](https://lobehub.com/mcp/dayongd1-mcp-veo3); [PyPI gemini-media-mcp](https://pypi.org/project/gemini-media-mcp/)
- Google Flow: consistency via "Ingredients" (reuse same character/object reference images across clips); Flow defaults to Nano Banana Pro; Nano Banana images can be used directly as ingredients. No Flow API/MCP found. — [Flow help](https://support.google.com/flow/answer/16353334?hl=en); [Android Authority](https://www.androidauthority.com/google-flow-nano-banana-redesign-3644398)

**fal.ai / Replicate / multi-provider**
- fal.ai official hosted MCP at mcp.fal.ai/mcp; works in Claude Code/Desktop/Cursor; needs fal API key (catalog includes Veo 3, Kling, etc.). — [fal docs](https://fal.ai/docs/documentation/setting-up/mcp); [fal.ai/mcp](https://fal.ai/mcp)
- RamboRogers/fal-image-video-mcp (community; Veo 3, Kling 2.1 Master tools). — [glama](https://glama.ai/mcp/servers/@RamboRogers/fal-image-video-mcp)
- VidFlux MCP (hosted, multi-model: Veo 3.1, Kling 3.0, Seedance 2.5, Hailuo H3). — [mcpservers.org](https://mcpservers.org/servers/vidflux-ai-mcp)
- `video-generation-mcp` (npm, community: Runway, Pika, Luma, Kling, MiniMax; Luma via REPLICATE_API_TOKEN). — [pkgstats](https://www.pkgstats.com/pkg:video-generation-mcp)
- Runway + Luma community server by Mamerto Fabian (t2v, i2v, Luma image/upscale). No official Runway/Luma/Replicate MCP found. — [Snyk article](https://snyk.io/articles/8-ai-mcp-servers-speeding-up-content-creator-workflows)

**ElevenLabs**
- Official hosted MCP https://api.elevenlabs.io/v1/mcp (OAuth) and ElevenCreative endpoint https://api.elevenlabs.io/v1/mcp-creative (regional EU/India/Singapore URLs); the old local elevenlabs-mcp is deprecated. — [ElevenLabs docs](https://elevenlabs.io/docs/eleven-api/resources/mcp-server); [Creative MCP](https://elevenlabs.io/docs/eleven-creative/mcp.md)
- Environment observation: the ElevenLabs connector in this session exposes creative_generate_image / generate_video / generate_speech, flows (canvas), brand kits, voice design.

**Higgsfield**
- Official remote MCP: add custom connector https://mcp.higgsfield.ai/mcp in Claude (Settings → Connectors); for Claude Code Higgsfield recommends its CLI `@higgsfield/cli` + skills package; every generation spends credits. — [Higgsfield help](https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent); [Higgsfield blog](https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio); [creatify explainer](https://creatify.ai/zh/blog/what-is-higgsfield-mcp-what-it-does-what-it-costs-and-how-to-use-it)
- Environment observation: the Higgsfield connector in this session has tools for character sheets (`get_workflow_instructions` workflow "character-sheet"), `show_characters`, `manage_reference_elements`, `generate_video_batch`, `scene_builder_3d_*` (3D scene + camera angles), `motion_control`, `upscale_video`, `estimate_video_cost`.

### Inferences
- For a phone/cloud user without GPU: hosted MCPs (fal.ai, Higgsfield, ElevenLabs Creative, Comfy Cloud MCP) are the practical route; local ComfyUI MCPs need a GPU box.
- Kling/Runway/Luma are best reached through fal.ai or Higgsfield rather than unmaintained single-vendor community servers.

### Gaps
- Official Runway, Luma, Kling, Replicate MCP servers: none found (may exist but not surfaced).
- Pricing per second for Veo via each MCP not verified (one n8n listing claims Veo 3 API $0.50/s, unverified — [n8n 11594](https://n8n.io/workflows/11594)).

## 3. Open-source kits / pipelines automating AI short films

### Takeaway
Research-grade multi-agent pipelines exist (MovieAgent, FilmAgent, ViMax, MAViS, StoryDiffusion, Mora, AniDoc), with ViMax (HKUDS, MIT, paper June 2026) the most current and popular. Practitioner pipelines are mostly n8n templates and Claude Code kits (ai-film-pipeline, OpenCinema).

### Cited Findings
- HKUDS/ViMax (MIT) — "director, screenwriter, producer, video generator" agents; idea → script → shot planning → reference selection/consistency → render via external video model; paper arXiv 2606.07649 (June 2026, rev. July 2026); stars reported 5.5k–12k+ (conflicting). — [GitHub](https://github.com/HKUDS/ViMax); [arXiv](https://arxiv.org/abs/2606.07649); [dev.to review](https://dev.to/dibi8/vimax-review-agentic-multi-scene-video-generation-from-hkuds-5dc1)
- showlab/MovieAgent — training-free multi-agent CoT planning (director, screenwriter, storyboard artist, location manager); inference code released; StoryDiffusion and ROICtrl need manual setup for character customization; licence unspecified; ~276 stars at one snapshot. — [GitHub](https://github.com/showlab/MovieAgent); [arXiv 2503.07314](https://arxiv.org/abs/2503.07314v1); [sourcepulse](https://www.sourcepulse.org/projects/1867854)
- andyzlys/FilmAgent — multi-agent end-to-end film automation in 3D virtual spaces (Unity-style). — [GitHub](https://github.com/andyzlys/FilmAgent); [arXiv](https://arxiv.org/html/2501.12909v1)
- MAViS — multi-agent framework for long-sequence video storytelling (paper). — [arXiv 2508.08487](https://arxiv.org/html/2508.08487v5)
- arkdutt/FrameWork — pre-production: scripts, storyboards with AI images, shot lists. — [GitHub](https://github.com/arkdutt/FrameWork)
- junjamrk/OpenCinema — local-first AI video studio driven via MCP tools from Claude Code; source builds macOS/Linux. — [wiki](https://github.com/junjamrk/OpenCinema/wiki)
- Anil-matcha/Open-AI-Micro-Drama-Generator ("MicroDrama AI") — agentic micro-drama generator; LLM calls routed through one hosted endpoint (not fully local). — [README](https://raw.githubusercontent.com/Anil-matcha/Open-AI-Micro-Drama-Generator/main/README.md)
- Gregory-Esman/ai-film-pipeline (see §1). — [CLAUDE.md](https://raw.githubusercontent.com/Gregory-Esman/ai-film-pipeline/main/CLAUDE.md)
- n8n templates: #11594 consistent-character videos with Veo 3.1 + GPT-4o + Nano Banana (5 reference images, Telegram preview; needs OpenAI, KIE.AI, Blotato creds); #8158 Gemini emotional 5-scene story → images + Veo3 JSON prompts; #22248 consistent-character episodes (character sheet, keyframes, clips, VO) via GenMagic + Drive/Sheets; #4936 Veo 3 ad script builder → Google Docs. — [n8n 11594](https://n8n.io/workflows/11594-creating-consistent-character-videos-with-veo-31-gpt-4o-and-google-nanobanana/); [n8n 8158](https://n8n.io/workflows/8158-create-emotional-stories-with-gemini-ai-generate-images-and-veo3-json-prompts/); [n8n 22248](https://n8n.io/workflows/22248-create-consistent-character-episodes-from-a-form-with-genmagic-google-drive-and-sheets/); [n8n 4936](https://n8n.io/workflows/4936-veo-3-ad-script-builder-gpt-4-google-docs-integration/)
- Google codelab: "Generating Consistent Imagery with Gemini Nano Banana" (notebook). — [codelab](https://codelabs.developers.google.com/gemini-consistent-imagery-notebook)

### Inferences
- StoryDiffusion (HVision-NKU), Mora and AniDoc are 2024-era research repos; MovieAgent depending on manual StoryDiffusion setup suggests these are now components rather than maintained products. Treat as research references, not production tools.
- None of the open pipelines run usefully on a 4-core CPU VM; the reusable value for this kit is their *planning structure* (script → shot list → reference bible → per-shot prompts → QA).

### Gaps
- Did not verify current status/stars of StoryDiffusion (github.com/HVision-NKU/StoryDiffusion), Mora (github.com/lichao-sun/Mora), AniDoc (github.com/yihao-meng/AniDoc); no source fetched — flag as likely research/archival.
- No Make.com scenarios specifically for short films found.

## 4. ComfyUI custom node packs for consistent characters & video

### Takeaway
Core stack remains ComfyUI-Manager + VideoHelperSuite + KJNodes + kijai WanVideoWrapper (Wan 2.x incl. Wan 2.2 Animate) + Lightricks LTXVideo + controlnet_aux, with identity via PuLID-Flux II / IPAdapter / LoRA. cubiq's IPAdapter Plus is maintenance-only since Apr 2025 and cubiq PuLID_ComfyUI last pushed Oct 2024 (stale). Comfy.org now ships official template workflows (Wan 2.2 Animate, Wan 2.7 Reference-to-Video).

### Cited Findings
- ComfyUI_IPAdapter_plus (cubiq): "maintenance only" mode since 2025-04-14 (author no longer uses ComfyUI as main tool). — [GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)
- PuLID_ComfyUI (cubiq): last push 2024-10-05 per index; no formal deprecation notice found. — [ecosyste.ms](https://awesome.ecosyste.ms/projects/github.com%2Fcubiq%2FPuLID_ComfyUI); [GitHub](https://github.com/cubiq/PuLID_ComfyUI)
- PuLID Flux II workflow for consistent characters on Flux (claims to solve "model pollution"). — [RunComfy](https://www.runcomfy.com/comfyui-workflows/pulid-flux-ii-in-comfyui-consistent-character-ai-generation)
- Guidance: IP-Adapter/PuLID for fast reference identity; train a LoRA when a character must survive many scenes/styles; ControlNet for pose/composition; PuLID prioritises face, weaker on clothing/body. — [media.io guide](https://www.media.io/image-tips/comfyui-consistent-characters.html)
- Wan 2.2 Animate official Comfy workflow: character animation & replacement from single reference image + LoRA, preserves source motion; community notes 77-frame context windows chained (77+76). — [Comfy hub](https://comfy.org/hub/workflows/wan2-2-animate-character-animation-and-replacement-c2c4b45b7df5/); [gist](https://gist.github.com/yangdafish/36bbe0d3277cd66875eee1b2215ee95b)
- Wan 2.7 Reference-to-Video (API node workflow on comfy.org). — [Comfy workflow](https://comfy.org/workflows/api_wan2_7_r2v-113c9ab2c6d7/)
- ComfyUI-WanVideoWrapper (kijai): wrapper for WanVideo and related models. — [mirror](https://gitee.com/chen-leisures/ComfyUI-WanVideoWrapper); canonical github.com/kijai/ComfyUI-WanVideoWrapper
- Community r/StableDiffusion character workflow: Chroma1-HD + Flux.2 Dev + Wan 2.2 + LTX 2.3. — [r/StableDiffusion mirror](https://t.me/s/rStableDiffusion/62193)
- artokun/comfyui-mcp ships skills for WAN, LTX 2.3, Flux, Qwen and can install node packs automatically. — [README](https://raw.githubusercontent.com/artokun/comfyui-mcp/main/README.md)
- mckruz/comfyui-expert `comfyui-character-gen` agent skill. — [skills.sh](https://skills.sh/mckruz/comfyui-expert/comfyui-character-gen)
- Canonical repos (existence only, status not verified this session): ltdrdata/ComfyUI-Manager, Kosinkadink/ComfyUI-VideoHelperSuite, Kosinkadink/ComfyUI-AnimateDiff-Evolved, kijai/ComfyUI-KJNodes, Lightricks/ComfyUI-LTXVideo, Fannovel16/comfyui_controlnet_aux, cubiq/ComfyUI_InstantID, lldacing/ComfyUI_PuLID_Flux_ll, registry at https://registry.comfy.org — [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager); [VHS](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite); [AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved); [KJNodes](https://github.com/kijai/ComfyUI-KJNodes); [LTXVideo](https://github.com/Lightricks/ComfyUI-LTXVideo); [controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux)

### Inferences
- AnimateDiff-Evolved and InstantID are SD1.5/SDXL-era; for 2026 video work Wan/LTX wrappers dominate, so AnimateDiff is legacy.
- All require a GPU (comfy-mcp recommends ≥24 GB VRAM for local video), so for this CPU-only cloud VM the practical option is Comfy Cloud MCP or hosted APIs.

### Gaps
- Could not verify last-commit dates/stars for KJNodes, WanVideoWrapper, LTXVideo, VHS, AnimateDiff-Evolved, InstantID (GitHub API blocked).

## 5. Prompt-generation tools / formats for Veo 3 / Flow / Nano Banana

### Takeaway
There is no official Veo JSON schema; Google's guide uses a prose formula [Cinematography]+[Subject]+[Action]+[Context]+[Style & Ambiance]. JSON prompting is a community convention (model reads it as text) and works mainly as a discipline for consistency. Tools: Claude skills (veo3-prompter, visual-skills Veo JSON), Replicate's json-prompt app, a GitHub Pages JSON generator, n8n template producing Veo3 JSON.

### Cited Findings
- Neither Veo nor Sora documents a JSON schema; Google's Veo 3.1 guide uses prose formula [Cinematography]+[Subject]+[Action]+[Context]+[Style & Ambiance]. — [datallmlab](https://www.datallmlab.com/blog/json-prompts-for-ai-video.html)
- Community JSON fields: subject, action, camera, lens, lighting, style, audio; keep 3–6 sentences per scene; declare one visual grammar. — [anakin.ai](https://anakin.ai/blog/how-to-use-json-in-veo-3-prompts-formatting-guide); [veo3ai.io 2026 guide](https://www.veo3ai.io/blog/veo-3-json-prompt-generator-guide-2026); [tenten template](https://developer.tenten.co/veo-331-pro-json-prompting-step-by-step.md); [Artlist](https://artlist.io/blog/veo-3-json-prompts/); [ImagineArt](https://www.imagine.art/blogs/veo-3-json-prompting-guide); [dev.to Veo 3.1 best practices](https://dev.to/yigit-konur/best-practices-of-json-prompting-for-video-generation-models-examples-for-veo-31-1mc0)
- Sceptical take: "Should you prompt in JSON?" — [The Creative Possible](https://creativepossible.substack.com/p/should-you-prompt-in-json)
- Tools: Replicate `veo-3-apps/json-prompt` (hosted prompter); solvingtools JSON-Prompt-Gen (GitHub Pages). — [Replicate](https://replicate.com/veo-3-apps/json-prompt/api); [JSON-Prompt-Gen](https://solvingtools.github.io/JSON-Prompt-Gen/src/blog/veo-json-prompt-guide)
- Nano Banana 2 character-consistency guide (Runware docs). — [Runware](https://runware.ai/docs/models/google-nano-banana-2/guides/character-consistency)
- Google dev forum: "How to use Gemini Image for Veo character consistency"; separate report of identity drift in video-to-video even with Nano Banana Pro. — [discuss.google.dev](https://discuss.google.dev/t/how-to-use-gemini-image-for-veo-character-consistency-doogler-edition/259879); [drift report](https://discuss.ai.google.dev/t/major-identity-drift-and-character-consistency-failure-in-video-to-video-generation/173742)
- Flow refinement tools blog (Google). — [Google blog](https://blog.google/technology/google-labs/flow-refine-videos/); [new Flow tools](https://blog.google/innovation-and-ai/models-and-research/google-labs/new-google-flow-tools/)

### Inferences
- Best practice for an agent: keep a "character/style bible" block that is pasted verbatim into every shot prompt (prose or JSON), plus the same Ingredients images in Flow; this is what ai-film-pipeline, visual-skills and the flow-character-sheet skill all converge on.

### Gaps
- Flow Ingredients limit (3 images) and "Ultra tier only" claim come from a third-party skill page; not confirmed by Google.
- No dedicated, maintained custom GPT for Veo/Flow verified.
