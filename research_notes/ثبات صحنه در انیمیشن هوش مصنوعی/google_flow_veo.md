# Character & Scene Consistency with Google's Tools (Flow, Veo 3.1, Gemini Omni, Nano Banana, Gemini app, Whisk) — state as of Nov 2026

Research note (compiled 2026-11-22). Network limits: blog.google, labs.google, ai.google.dev, support.google.com, discuss.google.dev and androidauthority.com could not be fetched from this session, so many facts below come from search-result snippets of those pages and from secondary sources. Only cloud.google.com was fetched in full. Treat secondary-source numbers (credits, retirement dates) as "verify before relying on".

**Big picture for late 2026 (important change):** At Google I/O 2026 (May 19/20, sources disagree), Google launched **Gemini Omni** (video-first "any input to any output" model). Omni Flash is now the default video model in the Gemini app and Flow; Veo 3.1 is being phased out in consumer surfaces. Most "Veo 3.1 + Flow" tutorials from late 2025 to early 2026 still apply in workflow terms (ingredients, frames, extend), but the model underneath is changing.

---

## 1. Flow features, limits, plans, availability

### Takeaway
Flow (renamed "Google Flow" at I/O 2026) is the hub: Nano Banana images (Whisk/ImageFX folded in), Ingredients to Video, Frames to Video, Extend, Jump to, Scenebuilder, camera controls, native audio, plus Omni Flash and a Flow Agent. Clips are short (Veo 3.1: 4/6/8 s; Omni Flash 1.2: up to 15 s), and long films are built by chaining. Flow is not available in Iran and Google says VPNs do not enable access.

### Cited Findings
**Models and their status**
- Google introduced Gemini Omni at I/O 2026. Omni Flash rolled out "to all Google AI Plus, Pro and Ultra subscribers globally through the Gemini app and Google Flow". Google says Omni keeps "characters, backgrounds and movement consistent even after users make changes to a video" and supports conversational, multi-turn editing — [Google blog: Introducing Gemini Omni](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/); [Decrypt](https://decrypt.co/368393/google-unveils-gemini-omni-next-gen-ai-video-builder-simulate-world)
- Flow was rebranded "Google Flow" at the I/O 2026 keynote, alongside Google Flow Music. Google also introduced **Flow Agent**, an assistant that can "brainstorm scenes, organize assets, recommend plot changes, and batch-edit projects" — [Wikipedia: Veo](https://en.wikipedia.org/wiki/Veo_(text-to-video_model)); [DEV Community](https://dev.to/alifar/google-expands-gemini-video-creation-across-flow-vids-and-the-gemini-app-5a8e)
- **Gemini Omni 1.2 Flash** (reported Nov 5, 2026) brings native 15-second clips (up from 10 s in 1.1), multi-turn conversational editing, "better reference following" and "more consistent results". Free users can try some features in Flow; developers can use it in the Gemini API — [Android Authority](https://www.androidauthority.com/google-gemini-omni-1-2-flash-announced-3732209/); [zooop.ai review](https://zooop.ai/blog/gemini-omni-flash-review)
- Reported deprecations (secondary, verify): Veo 3.1 preview models removed from the Gemini API on Oct 22, 2026, with Omni Flash recommended; in Flow, **Veo 3.1 Fast, Veo 3.1 Quality and Omni Flash 1.1 retire on Dec 5, 2026**, replaced by Omni Flash 1.2 or Veo 3.1 Lite. Veo 3.1 stays on Google Cloud (Vertex / enterprise) — [nhimg.org](https://nhimg.org/google-gemini-omni-and-flow-explained); [costgoat](https://costgoat.com/pricing/google-veo); [zooop.ai](https://zooop.ai/blog/gemini-omni-flash-review). One secondary source says Veo 3.0 and Veo 2 API endpoints retired June 30, 2026 — [nerdschalk](https://nerdschalk.com/google-flow-ai-2026-updates-you-need-to-know-nano-banana-veo-3-1/) (unverified).
- Veo 3.1 tiers in Flow: Lite, Fast, Quality, all with native audio (SFX, ambience, speech) — [nerdschalk](https://nerdschalk.com/google-flow-ai-2026-updates-you-need-to-know-nano-banana-veo-3-1/); [DeepMind Veo page](https://deepmind.google/models/veo/)

**Feature set**
- Feb 2026 Flow update: Whisk and ImageFX moved into Flow; Nano Banana is the default image model; new **lasso tool** (select a region, ask for edits in natural language) and **Insert** (add elements to a scene) — [Google blog: Flow updates Feb 2026](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates-february-2026/)
- **Extend:** continues the action using "the last 24 frames" of a generation. **Jump to:** "transition to a new shot while preserving context from the last frame" (good for putting the same character in a new situation). **Scenebuilder:** add a clip and build next shots "with Gemini helping keep things consistent" — [Flow FAQ (labs.google)](https://labs.google/fx/en-gb/tools/flow/faq)
- Saving a frame: use "+" on a frame to save it as an asset, then use it as the first frame of the next clip in Frames to Video — [DataCamp Veo 3.1 guide](https://www.datacamp.com/tutorial/veo-3-1-complete-guide-with-examples)
- Extend only works on clips generated in Flow with Veo 3.1 (not uploaded video); Google said Extend can produce videos "lasting for a minute or more" (Oct 2025) — [Google blog: Veo 3.1 in Flow](https://blog.google/innovation-and-ai/products/veo-updates-flow/); [DataCamp](https://www.datacamp.com/tutorial/veo-3-1-complete-guide-with-examples)
- Omni Flash in Flow: source clips for edit/extend must be 10 s or shorter (1.1 era) — [roo.beehiiv / invideo reviews via search](https://invideo.io/blog/gemini-omni-flash-guide/)
- **Veo 3.1 specs (Oct 2025 Cloud guide):** 720p or 1080p; 16:9 or 9:16; clip length 4, 6 or 8 s; add/remove object uses Veo 2 and has no audio; all outputs carry SynthID — [Google Cloud: Ultimate prompting guide for Veo 3.1](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- **Ingredients to Video update (Jan 2026):** up to **3 reference images** (character, object or scene); native **9:16** in this mode; **1080p and 4K upscaling**; Google recommends making ingredients with Nano Banana Pro in Gemini app or Flow. Available in Gemini app, YouTube, Flow, Google Vids, Gemini API, Vertex AI — [Google blog: Veo 3.1 Ingredients to Video](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/); [Google Developers blog](https://developers.googleblog.com/en/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/)
- API: references passed as `reference_images` in the `generate_videos` config, model `veo-3.1-generate-preview` (2025 launch; preview now reportedly removed) — [Google Developers blog](https://developers.googleblog.com/en/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/)
- One third-party guide says Flow Ingredients character consistency is "Ultra tier only"; this conflicts with Google's Jan 2026 post listing broad availability — [skills.sh google-flow-prompting](https://skills.sh/krishamaze/skills/google-flow-prompting) vs [Google blog](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)

**Pricing / credits (secondary sources, checked ~Oct 2026)**
- Google AI Pro $19.99/mo with 1,000 monthly credits; Ultra tiers $99.99 (10,000) and $199.99 (25,000); everyone gets 50 daily credits on top — [wavespeed](https://wavespeed.ai/blog/cost-and-billing/google-flow-pricing-2026/); [saascrmreview](https://saascrmreview.com/google-flow-pricing/)
- Veo 3.1 Fast 20 credits (10 on Ultra); Veo 3.1 Quality 100 credits on all tiers; Veo 3.1 Lite 10 credits per 720p clip (5 on Ultra). Roughly 50 Fast or 10 Quality clips/month on Pro — [veopricing.com](https://www.veopricing.com/veo-flow-credits-calculator/); [costgoat](https://costgoat.com/pricing/google-veo)
- Omni Flash is bundled into Flow on Plus, Pro, Ultra — [vidau](https://www.vidau.ai/google-flow-ai-update-2026-complete-guide/)

**Availability (Iran)**
- Google's "Where you can use Flow" list runs "...Indonesia, Iraq, Ireland, Israel..." with no Iran; "Google Flow is not currently available in all countries where Google AI Pro is offered" and "VPNs will not enable access in unsupported regions" — [Google Flow Help: Where you can use Flow](https://support.google.com/flow/answer/16353544)
- Separately, users report realistic-person image uploads to Veo being blocked by country (e.g., England; "images containing humans are not permitted for video generation in your country") — [Google AI dev forum](https://discuss.ai.google.dev/t/so-google-veo-wont-let-me-use-images-of-realistic-people-because-i-am-in-england-even-though-the-images-are-generated-using-an-ai-so-they-are-not-real-people/98350)

### Inferences
- For a long animation, plan in 8 s (Veo) or 10–15 s (Omni) shots and chain them; "Extend" is for continuous action, "Jump to" for cuts with preserved context, Frames-to-Video for precise hand-offs.
- Anyone starting a project in Dec 2026 should build on Omni Flash 1.2 (or Veo 3.1 Lite) in Flow, since Fast/Quality Veo are reportedly leaving Flow.
- For an Iran-based user, Flow access is officially unsupported; Google's own help text says VPNs do not work around this (account region/payment country are likely checked). Practical alternative: third-party platforms that resell Veo/Nano Banana via API, but those were outside this research scope.

### Gaps
- Exact Omni Flash credit costs per clip, its aspect ratios and its reference-image limit in Flow: not found in primary sources.
- Exact per-extension length and maximum total length of Extend in 2026: not confirmed.
- Current state of camera-control presets UI in Flow in 2026: no primary source fetched.
- Official Dec 5 retirement notice: only secondary sources.

---

## 2. Official Google prompt guidance for Veo; JSON prompts

### Takeaway
Google's official formula is prose: **[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]**, with dialogue in quotes, `SFX:` and `Ambient noise:` labels, positive phrasing instead of negatives, and timestamped segments for multi-shot clips. JSON prompts are a community habit with no official schema; tests are anecdotal — structure matters, not the format.

### Cited Findings
- Formula and components (Cinematography = camera work and composition; Subject; Action; Context = environment; Style & ambiance = aesthetic, mood, lighting) — [Google Cloud blog, Oct 16 2025](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Camera vocabulary: dolly, tracking, crane, aerial, slow pan, POV; wide shot, close-up, extreme close-up, low angle, two-shot; shallow depth of field, wide-angle, soft focus, macro, deep focus — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Audio syntax: `A woman says, "We have to leave now."`; `SFX: thunder cracks in the distance`; `Ambient noise: the quiet hum of a starship bridge` — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Negatives: describe exclusions positively, e.g. "a desolate landscape with no buildings or roads" instead of "no man-made structures" — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Timestamp prompting: `[00:00-00:02] ... [00:02-00:04] ...` to direct a multi-shot sequence in one 8 s generation (full example in Templates section) — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Use Gemini to expand short prompts into cinematic detail — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- A forum report says Veo 3.1 ignores negative prompts for non-humanoid character anatomy (3D animation) — [Google dev forum](https://discuss.google.dev/t/veo-3-1-model-ignores-negative-prompts-for-non-humanoid-character-anatomy/351836)
- Omni reviewers: English prompts are most reliable; other languages not formally evaluated — [invideo Omni guide](https://invideo.io/blog/gemini-omni-flash-guide/)
- JSON: "neither Google nor OpenAI documents a JSON prompt schema for video" — [DataLLMLab](https://www.datallmlab.com/blog/json-prompts-for-ai-video.html). Self-reported claims of 78% vs 34% first-try success (no methodology) — [DEV Community](https://dev.to/solo_dev_0101/technical-deep-dive-veo-31-json-prompt-engineering-1p0h). Balanced tests: JSON sometimes wins, sometimes loses; consistent structure matters more — [The Creative Possible](https://creativepossible.substack.com/p/should-you-prompt-in-json); [Morph Studio](https://www.morphstudio.com/article/ai-video-generation-are-json-prompts-really-better-than-natural-language)

### Inferences
- JSON's real benefit for consistency is editorial: it forces you to keep a fixed "character" and "location" block that you paste unchanged into every shot. The same is achieved with labelled prose blocks (see templates). Use whichever the team edits more reliably.
- Write prompts in English even for Persian-language films; put Persian dialogue in quotes only if testing shows acceptable lip-sync/pronunciation (no source evaluated Persian).

### Gaps
- No official Omni-specific prompt guide was retrieved (blog.google/ai.google.dev blocked).
- No controlled study on JSON vs prose for Veo/Omni.

---

## 3. Character reference sheets with Nano Banana, reused as ingredients

### Takeaway
Make one approved "hero" image per character with Nano Banana Pro (or Nano Banana 2), then a turnaround/expression sheet from it, then feed 1–3 of those images (Veo Ingredients max = 3) plus a location plate into each shot, and paste the same text descriptor every time. Nano Banana Pro can blend up to 14 inputs and keep up to 5 people consistent within one image.

### Cited Findings
- Nano Banana Pro: combine up to 14 reference images and keep the appearance of up to 5 people consistent; the exact input limit varies by surface (6–14) — [Google blog: Introducing Nano Banana Pro](https://blog.google/technology/ai/nano-banana-pro/); prompting tips — [Google: 7 tips for Nano Banana Pro](https://blog.google/products/gemini/prompting-tips-nano-banana-pro/)
- Some sources say Nano Banana 2 has the largest reference budget (up to 14) — [Krea docs](https://www.krea.ai/docs/user-guide/features/nano-banana-2); [Runware character-consistency guide](https://runware.ai/docs/models/google-nano-banana-2/guides/character-consistency). One source attributes 14-image limit to "Nano Banana 2 Lite" — [Atlas Cloud](https://www.atlascloud.ai/blog/guides/nanobanana-14-reference-images-consistency) (conflicting)
- Veo 3.1 Ingredients: up to 3 reference images (character, object or scene) — [Google blog Jan 2026](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- Official workflow: make character + setting images with Nano Banana, then use Ingredients and "reference them by role in the prompt", e.g. "Using the provided images for the detective, the woman, and the office setting..." — [Google Cloud guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Two-pass sheet: lock identity portrait first, then a 4-angle turnaround (front, 3/4, side, back) plus face close-up and mid-shot on a neutral background — [invideo FAQ](https://invideo.io/faq/how-do-you-create-a-character-reference-sheet-using-nano/)
- Nano Banana Pro has higher prompt adherence for sheets, but some find it "stock-photo-clean"; generate on both and compare — [invideo FAQ](https://invideo.io/faq/how-do-you-create-a-multi-angle-character-turnaround/)
- Feeding a starting frame plus the sheet into ingredients keeps characters stable across camera moves (YouTube tutorial summary) — [oakgen summary of "Consistent Character Sheets in Nano Banana"](https://oakgen.ai/youtube-summaries/how-to-create-consistent-character-reference-sheets-in-nano-banana-f4HcdR3cd4M)
- Use the exact same character description in every prompt together with references — [technave](https://technave.com/gadget/How-to-get-consistent-characters-with-Google-Veo-3-and-Flow-43421.html)
- Use 2–3 high-quality references with the same outfit and hairstyle; don't mix outfits unless the story changes wardrobe — [Artlist](https://artlist.io/blog/consistent-character-ai/)
- Omni: text-only likeness is unreliable — a reference image is needed; keep scenes to 2–3 subjects, crowded prompts break consistency — [invideo Omni guide](https://invideo.io/blog/gemini-omni-flash-guide/)
- Google has a dev-forum "Doogler Edition" guide on Gemini Image for Veo character consistency (not fetched) — [discuss.google.dev](https://discuss.google.dev/t/how-to-use-gemini-image-for-veo-character-consistency-doogler-edition/259879)

### Inferences
- Because Veo Ingredients allows only 3 slots, for a two-character scene a practical split is: char A sheet (or hero), char B sheet, location plate. Combine several angles into one sheet image so one slot carries more information.
- For multi-character shots, first compose a still with Nano Banana Pro (it handles up to 5 people), then use that still as the first frame — more reliable than asking the video model to combine separate refs.
- Style lock: generate every sheet and plate in the same Nano Banana chat/session with the same style sentence, and include one style reference image when possible.

### Gaps
- Official limit of reference images for Omni Flash in Flow: not found.
- Whether Flow's "save as ingredient/character" asset library persists named characters across projects in 2026: not confirmed.

---

## 4. Scene continuity techniques

### Takeaway
Continuity comes from images, not words: carry the last frame forward (Extend / Jump to / save frame → Frames to Video), use one fixed location plate per set, keep a fixed lighting/time-of-day sentence, reuse identical descriptor blocks, and for Omni do edits inside one multi-turn thread where consistency is strongest.

### Cited Findings
- Extend uses the last 24 frames; Jump to preserves context from the last frame — [Flow FAQ](https://labs.google/fx/en-gb/tools/flow/faq)
- Scene Builder chains clips by continuing from the previous clip's final frame — [vidau](https://www.vidau.ai/google-flow-ai-update-2026-complete-guide/)
- First & last frame workflow: make start frame and complementary end frame (e.g., different POV) with Nano Banana, then describe the transition and audio — [Google Cloud guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Ingredients update emphasises background and object consistency and reusing an object, background or texture across scenes — [Google blog Jan 2026](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- Omni: single-scene multi-turn consistency "works extremely well", cross-cut consistency with changing lighting/framing is "still imperfect"; some users report characters redesigned between turns — [atlascloud Omni test](https://www.atlascloud.ai/blog/ai-updates/gemini-omni-multi-turn-consistency-editing); [roo.beehiiv](https://roo.beehiiv.com/p/i-tested-gemini-omni-for-3-days-here-s-the-honest-truth)
- Even with references and first/last frames, Veo 3.1 can change geometry/details during camera moves — [Google AI dev forum](https://discuss.ai.google.dev/t/veo-3-1-consistency-help-preventing-hallucinations-in-professional-dental-workflow-gemini-2-5-veo-pipeline/111898)
- Vague mood-based prompts cause drift; describe one shot at a time with a named style (e.g., 2D animation) — [Medium: How to use Gemini Veo to make full cartoons](https://medium.com/@rabbieinhorn/how-to-use-gemini-veo-to-make-full-cartoons-c91fdb825f40)

### Inferences
- Shot recipe: (1) location plate (empty set, fixed lighting) made in Nano Banana; (2) composite the character into the plate as the shot's first frame; (3) animate with Frames/Ingredients; (4) take the last frame, fix it in Nano Banana if anything drifted (lasso edit), and use it as next first frame. Re-fixing the hand-off still stops drift from accumulating.
- Keep camera moves modest when detail fidelity matters (forum evidence shows drift during moves).
- Write time-of-day as a fixed phrase ("late afternoon, warm low sun from frame left, soft long shadows") and never vary it within a scene.

### Gaps
- No primary-source numbers on how many chained extensions before quality degrades.

---

## 5. Failure modes and fixes; animation styles

### Takeaway
Main failures: face/outfit drift across cuts, geometry changes during camera moves, ignored negatives for non-humanoid anatomy, crowded multi-subject scenes, safety false-positives on children/realistic faces, and (anecdotally) garbled on-screen text. Stylized (Pixar-like 3D, 2D, clay) characters avoid many realistic-person blocks, but no source tested styles specifically.

### Cited Findings
- Drift across cuts and redesigns between turns (Omni) — [atlascloud](https://www.atlascloud.ai/blog/ai-updates/gemini-omni-multi-turn-consistency-editing); [roo.beehiiv](https://roo.beehiiv.com/p/i-tested-gemini-omni-for-3-days-here-s-the-honest-truth)
- Negative prompts ignored for non-humanoid anatomy in 3D animation — [Google dev forum](https://discuss.google.dev/t/veo-3-1-model-ignores-negative-prompts-for-non-humanoid-character-anatomy/351836)
- Keep 2–3 subjects max — [invideo](https://invideo.io/blog/gemini-omni-flash-guide/)
- "Prominent people" errors in Flow sometimes pass in the Gemini app — [invideo / roo reviews via search](https://invideo.io/blog/gemini-omni-flash-guide/)
- Veo 3.1 blocked images of a user's own Nano Banana Pro avatar — [Google AI dev forum](https://discuss.ai.google.dev/t/veo-3-1-blocking-images-of-our-own-ai-avatar-generated-using-nano-banana-pro/114368)
- Nano Banana Pro over-aggressive IMAGE_SAFETY on non-NSFW fashion images — [Google AI dev forum](https://discuss.ai.google.dev/t/nano-banana-pro-non-nsfw-fashion-images-blocked-due-to-aggressive-image-safety-filtering/121805)

### Inferences
- Text: generate signs/titles in Nano Banana (strong at text) on the still, or add text in post (Remotion) instead of asking the video model to render it.
- For kids' animation, a clearly stylized description ("stylized 3D animated feature style, big expressive eyes, soft rounded shapes" rather than naming Pixar) plus stylized reference images is the safer route; avoid photoreal child faces entirely.
- Claymation: mention "stop-motion clay animation, visible fingerprints, slightly choppy 12fps feel" in the fixed style block; expect anatomy issues on non-humanoid characters — fix the hand-off frames in Nano Banana.

### Gaps
- No source found with tested tips on text rendering in Veo/Omni video, or style-specific (Pixar-like, 2D, clay) consistency comparisons; Reddit r/VEO3 / r/aivideo threads were not retrieved.

---

## 6. Safety policies (children, historical figures) and SynthID

### Takeaway
Uploads or generations with children and realistic people are frequently blocked (child and celebrity filter codes documented by users), sometimes depending on country; there is no consolidated official page on historical figures. All outputs carry invisible SynthID plus C2PA; since Aug 2026 the visible watermark can be turned off in most countries.

### Cited Findings
- Vertex AI filters input images/videos that violate the GCP Acceptable Use Policy, Generative AI Prohibited Use Policy or AI Principles — [Vertex AI Responsible AI guidelines](https://cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Vertex users report blocks with codes 17301594 (Child) and 15236754 (Celebrity) — [Google AI dev forum](https://discuss.ai.google.dev/t/veo-3-1-blocking-images-of-our-own-ai-avatar-generated-using-nano-banana-pro/114368); a developer asked for human review over a fictional 17-year-old character and `allow_adult` with references — [forum](https://discuss.ai.google.dev/t/human-review-requested-veo-3-1-reference-images-and-allow-adult-for-a-fictional-17-year-old-character/179169); "Safety protocols prevent the use of children (my own or AI generated)" — [forum](https://discuss.ai.google.dev/t/safety-protocols-prevent-the-use-of-children-my-own-or-ai-generated-for-proper-purposes/110551)
- Adobe Firefly (using Veo) reportedly disallows video with children in most models incl. Veo 3.1 Fast — [Adobe community](https://community.adobe.com/bug-reports-403/overly-restrictive-ai-video-creation-1628021)
- Third-party claim: Nano Banana 2 (Feb 27, 2026) added restrictions on public figures/celebrities, face swapping, outfit swapping on real people, financial image manipulation — [laozhang blog](https://blog.laozhang.ai/en/posts/gemini-image-generation-people-restriction) (unverified)
- All Veo 3.1 outputs carry SynthID — [Google Cloud guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Aug 14, 2026: Settings > Media Watermark toggle in Gemini and Flow removes the visible badge on images/videos/songs (Nano Banana, Omni, Lyria) for new files; not shown in countries where visible AI marks are required; SynthID and C2PA Content Credentials stay in every file; users can ask Gemini to check a file for SynthID — [TechRepublic](https://www.techrepublic.com/article/news-google-gemini-visible-watermarks-optional/); [TechRadar](https://techradar.com/ai-platforms-assistants/gemini/gemini-now-lets-you-turn-off-the-visible-watermark-on-your-ai-creations-heres-how-to-do-it-and-how-your-content-is-still-flagged-as-ai)

### Inferences
- Children's-story projects: depict children as clearly stylized cartoon characters, avoid real child photos as references, and expect occasional false-positive blocks; keep adult/neutral framing.
- Historical figures (e.g., Persian poets): likely treated like public figures where realistic; a stylized, non-photoreal depiction (miniature painting, clay figure) is the lower-risk route — but this is inference, no official source.

### Gaps
- No official Google page on historical-figure depiction in Veo/Omni/Nano Banana was found.
- Current public availability of the standalone SynthID Detector in 2026 not confirmed.

---

## 7. Ready copy-paste prompt templates

### Takeaway
Templates below combine Google's official structure (Cloud guide) with the community "fixed descriptor block" method. Paste the CHARACTER / LOCATION / STYLE blocks unchanged into every shot.

### Cited Findings
- Official example of ingredient role-referencing: "Using the provided images for the detective, the woman, and the office setting, create a medium shot of the detective behind his desk. He looks up at the woman and says in a weary voice, "Of all the offices in this town, you had to walk into mine."" — [Google Cloud guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Official timestamp example: "[00:00-00:02] Medium shot from behind a young female explorer with a leather satchel and messy brown hair in a ponytail, as she pushes aside a large jungle vine to reveal a hidden path. [00:02-00:04] Reverse shot of the explorer's freckled face, her expression filled with awe as she gazes upon ancient, moss-covered ruins in the background. SFX: The rustle of dense leaves, distant exotic bird calls. [00:04-00:06] Tracking shot following the explorer as she steps into the clearing and runs her hand over the intricate carvings on a crumbling stone wall. Emotion: Wonder and reverence. [00:06-00:08] Wide, high-angle crane shot, revealing the lone explorer standing small in the center of the vast, forgotten temple complex, half-swallowed by the jungle. SFX: A swelling, gentle orchestral score begins to play." — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- Official first/last frame transition example: "The camera performs a smooth 180-degree arc shot, starting with the front-facing view of the singer and circling around her to seamlessly end on the POV shot from behind her on stage..." — [same](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)

### Inferences (templates — authored for this guide, not from Google)

**T1. Character hero image (Nano Banana Pro)**
```
Full-body character design of [NAME], [age range] [species/person], [height/build], [face: shape, eye color, distinctive marks], [hair: color, length, style], wearing [exact outfit: top, bottom, shoes, accessories with colors]. Neutral pose, facing camera, plain light-grey background, even soft studio lighting. Style: [STYLE LOCK sentence]. No text.
```

**T2. Turnaround / reference sheet (attach T1 image)**
```
Using the attached image of [NAME], create a character reference sheet on a plain light-grey background: front view, three-quarter view, side profile, back view (full body, same scale, aligned on one ground line), plus a head close-up with three expressions (neutral, happy, surprised). Keep face, proportions, hair and outfit exactly identical to the attached image. Same [STYLE LOCK]. Clean layout, no labels, no text.
```

**T3. Location plate (empty set)**
```
Empty [location], [key props and their positions: left / center / right], [time of day + light direction: e.g., late afternoon, warm low sun from frame left through the window, soft long shadows], [color palette]. Wide establishing shot, eye level, 16:9. Style: [STYLE LOCK]. No characters, no text.
```

**T4. Fixed blocks to paste into every shot**
```
CHARACTER A: [NAME], [one-line identity: age, build, face, hair], wearing [exact outfit]. 
CHARACTER B: ...
LOCATION: [same sentence as T3, shortened].
LIGHT: [same time-of-day sentence, never changed within the scene].
STYLE: [STYLE LOCK, e.g., "stylized 3D animated feature look, soft rounded shapes, big expressive eyes, subsurface-scattered skin, gentle global illumination"] / ["hand-drawn 2D cartoon, clean black outlines, flat cel shading, limited palette"] / ["stop-motion claymation, visible fingerprints on clay, felt and cardboard set, slightly choppy stop-motion movement"].
```

**T5. Ingredients-to-Video shot (Veo 3.1 / Omni; attach char sheet(s) + plate, max 3 in Veo)**
```
Using the provided images for [CHARACTER A], [CHARACTER B] and the [LOCATION], create a [shot size] [camera movement] shot.
[CHARACTER A block]. [CHARACTER B block].
Action: [one clear action, one beat].
[CHARACTER A] says in a [tone] voice, "[short line, under ~8 words]."
LOCATION / LIGHT / STYLE blocks.
SFX: [one or two sounds]. Ambient noise: [room tone].
Keep the characters' faces, outfits and proportions identical to the reference images.
```

**T6. Frames-to-Video continuity shot (first frame = last frame of previous clip)**
```
Continue directly from the provided first frame. [Camera move, e.g., slow dolly-in] as [CHARACTER A] [action]. Same lighting, same time of day, same outfit. [Dialogue line in quotes]. SFX: [...]. Ambient noise: [...]. STYLE block.
```

**T7. First + last frame transition**
```
The camera performs a [move: smooth 90-degree arc / slow push-in / crane up], starting on [description of frame 1] and ending exactly on [description of frame 2]. [Character action between]. Consistent lighting throughout. SFX: [...].
```

**T8. Timestamped multi-shot (one 8–15 s generation)**
```
STYLE + CHARACTER + LOCATION blocks.
[00:00-00:03] Wide shot, [action 1]. Ambient noise: [...].
[00:03-00:05] Close-up on [CHARACTER A]'s face, [reaction]. She says, "[line]."
[00:05-00:08] Over-the-shoulder shot from behind [CHARACTER B], [action 2]. SFX: [...].
```

**T9. Optional JSON wrapper (same content; no official schema)**
```json
{
  "style": "[STYLE LOCK]",
  "characters": [{"id": "A", "description": "[CHARACTER A block]"}],
  "location": "[LOCATION block]",
  "lighting": "[LIGHT block]",
  "shot": {"size": "medium", "camera": "slow dolly-in", "lens": "35mm, shallow depth of field"},
  "action": "[one beat]",
  "dialogue": [{"speaker": "A", "line": "[line]", "tone": "warm"}],
  "audio": {"sfx": "[...]", "ambient": "[...]"},
  "avoid_by_description": "clean frame with no on-screen text or subtitles"
}
```

**T10. Drift repair (Nano Banana, on a bad hand-off frame)**
```
Edit the attached frame: make [CHARACTER A]'s face, hair and outfit match the attached reference sheet exactly ([list the drifted detail, e.g., the scarf is red, not orange; the hair parting is on the left]). Change nothing else: keep pose, camera angle, background and lighting identical.
```

### Gaps
- Templates are untested here; validate on 3–4 generations before a full production run.
