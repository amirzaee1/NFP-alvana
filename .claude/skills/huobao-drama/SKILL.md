---
name: huobao-drama
description: Huobao Drama (火宝短剧) — open-source AI short-drama studio installed in this cloud VM. Novel/idea → script rewrite → character/scene/prop extraction → image prompts → storyboard segments (8–15 s, 2–4 sub-shots) → video (MiniMax H3, Seedance 2.0, Wan 3.0) → FFmpeg stitch and export. Use when the user wants Huobao, an AI short drama / series episode, automatic script-to-storyboard-to-video, or to run its agents (script_rewriter, extractor, storyboard_breaker, prompt_generator) by hand.
---

# Huobao Drama (installed copy)

Source: https://github.com/chatfire-AI/huobao-drama — licence **CC BY-NC-SA 4.0 (non-commercial)**. Tell the user before any monetised use.

## Start it (each new session; the VM is wiped between sessions)
`bash scripts/huobao-setup.sh` → clones to `/home/user/huobao-drama`, installs, builds the UI, starts it on `http://localhost:5679` (UI + API `/api/v1`, log `/tmp/huobao.log`).
- The frontend lockfile points to a private aliyun npm mirror that the cloud proxy blocks; the script rewrites it to registry.npmjs.org.
- Data (SQLite + generated files) lives in `/home/user/huobao-drama/data` and is lost with the VM. Copy finished episodes out with `node tools/deliver.mjs`.
- The UI is only reachable inside the VM (the user's phone cannot open localhost). Drive it via the HTTP API (`backend/src/routes/*.ts`: dramas, episodes, characters, scenes, props, storyboards, tasks, merge, aiConfigs) or screenshot it with Playwright.

## Providers (set in Settings → stored in DB table `ai_service_configs`, never in files)
- Text: OpenAI-compatible or Gemini. Image: OpenAI, Gemini, Volcano Engine. Video: Volcano Seedance 2.0, **MiniMax H3** (API `POST {baseUrl}/v2/video_generation`, poll `/v2/query/video_generation/{id}`; 4–15 s; prompt ≤ 7000 chars; refs ≤ 9 images, 3 videos, 3 audio, 12 total; ratios 16:9 9:16 1:1 4:3 3:4 21:9; first_frame / last_frame / reference_image roles; audio is always native), Alibaba Wan 3.0.
- Every provider needs the user's API key and the host allowed in the environment network settings (add it as a Network secret). Never ask for keys in chat.

## Its pipeline knowledge (usable without the app)
`agents/` and `prompts/` hold the English versions of its four agents' skills and system prompts:
- `script-rewriter.md` — novel/idea → formatted script.
- `extractor.md` — dedup characters, scenes, props.
- `storyboard-breaker.md` — script → segments: one segment = one video task, 8–15 s, 2–4 sub-shots of 2–6 s, hard cuts inside, never crosses scenes; beat boundaries force a new segment; total length ≈ script length ÷ reading speed; segments ≈ total ÷ 12 s.
- `prompt-generator-*.md` — character / scene / prop image prompts and storyboard video prompts.
Combine with `ai-film-director` (bibles, continuity) and MiniMax's official H3 prompt format (`integrated_multimodal_description` / `overall_soundscape` / `non_diegetic_music`, `[Shot N] At 00:03.500, the camera cuts to…`, camera = type + amplitude + speed, dialogue `(S1) says: <d>[English] …</d>`).
