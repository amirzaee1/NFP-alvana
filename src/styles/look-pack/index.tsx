// Look Pack: six extra looks (Glow Sketch, Chalkboard, Minimal Line, Lego, PS2 low-poly, Explainer 3D)
// for ONE shared scene: side-view red convertible + driver, road, skyline, lamp, sign, clouds.
// Pure SVG in Remotion: no GPU, fast on CPU. Card: .claude/skills/nfp-alvana/styles/look-pack.md
import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export type LookId = "glow-sketch" | "chalkboard" | "minimal-line" | "lego" | "ps2" | "explainer-3d";
export const LOOKS: { id: LookId; fa: string; en: string }[] = [
  { id: "glow-sketch", fa: "اسکچ نورانی", en: "Glow Sketch" },
  { id: "chalkboard", fa: "تخته‌سیاه", en: "Chalkboard" },
  { id: "minimal-line", fa: "خط مینیمال", en: "Minimal Line" },
  { id: "lego", fa: "لگو", en: "Lego" },
  { id: "ps2", fa: "پلی‌استیشن ۲", en: "PS2 Low-Poly" },
  { id: "explainer-3d", fa: "اکسپلینر سه‌بعدی", en: "Explainer 3D" },
];

type Theme = {
  bg: string; sky?: [string, string]; line: string; lineW: number; accent: string; red: string; gold: string;
  fill: boolean; glow: boolean; rough: boolean; sparse: boolean; draw: boolean; step: number; font: string;
  tone: { building: string; road: string; cloud: string; car: string; skin: string; sign: string; lamp: string };
};
const FONT = "Vazirmatn, 'Noto Sans Arabic', system-ui, sans-serif";
const THEMES: Record<LookId, Theme> = {
  "glow-sketch": { bg: "#05060b", line: "#9fd8ff", lineW: 3, accent: "#ffd27a", red: "#ff3b3b", gold: "#ffc861", fill: false, glow: true, rough: false, sparse: false, draw: true, step: 1, font: FONT,
    tone: { building: "none", road: "none", cloud: "none", car: "none", skin: "none", sign: "none", lamp: "none" } },
  chalkboard: { bg: "#27433a", line: "#f4f1e8", lineW: 5, accent: "#ffe28a", red: "#ff7a6b", gold: "#ffe28a", fill: false, glow: false, rough: true, sparse: false, draw: true, step: 1, font: FONT,
    tone: { building: "none", road: "none", cloud: "none", car: "none", skin: "none", sign: "none", lamp: "none" } },
  "minimal-line": { bg: "#f6f4ef", line: "#2b2b2f", lineW: 1.6, accent: "#2b2b2f", red: "#e5322d", gold: "#2b2b2f", fill: false, glow: false, rough: false, sparse: true, draw: true, step: 1, font: FONT,
    tone: { building: "none", road: "none", cloud: "none", car: "none", skin: "none", sign: "none", lamp: "none" } },
  lego: { bg: "#8fd3ff", sky: ["#8fd3ff", "#d6f0ff"], line: "#1b1b1b", lineW: 3, accent: "#ffd400", red: "#e3000b", gold: "#ffd400", fill: true, glow: false, rough: false, sparse: false, draw: false, step: 2, font: FONT,
    tone: { building: "#0055bf", road: "#6b6e70", cloud: "#ffffff", car: "#e3000b", skin: "#ffd400", sign: "#f58624", lamp: "#ffd400" } },
  ps2: { bg: "#b8c7e6", sky: ["#6e86c7", "#d9c2a3"], line: "#1c2233", lineW: 3, accent: "#ffcf5c", red: "#c8281f", gold: "#ffcf5c", fill: true, glow: false, rough: false, sparse: false, draw: false, step: 4, font: FONT,
    tone: { building: "#52618f", road: "#3b3f4a", cloud: "#e6dfe9", car: "#c8281f", skin: "#d9a07a", sign: "#2f8f6b", lamp: "#ffcf5c" } },
  "explainer-3d": { bg: "#bfe6ff", sky: ["#8fd0ff", "#e9f7ff"], line: "none", lineW: 0, accent: "#ffb703", red: "#ff4d4d", gold: "#ffb703", fill: true, glow: false, rough: false, sparse: false, draw: false, step: 1, font: FONT,
    tone: { building: "#7aa2ff", road: "#5b6b8c", cloud: "#ffffff", car: "#ff4d4d", skin: "#ffc9a0", sign: "#2ec4b6", lamp: "#ffb703" } },
};

const W = 1920, H = 1080, ROAD_Y = 800;

const Scene: React.FC<{ look: LookId; t: number; f: number }> = ({ look, t, f }) => {
  const th = THEMES[look];
  const is = (l: LookId) => look === l;
  const stroke = th.line;
  const sw = th.lineW;
  const shape = (tone: string): any => ({
    fill: th.fill ? tone : "none", stroke, strokeWidth: sw, strokeLinejoin: "round" as const,
  });
  const seed = th.step > 1 ? Math.floor(f / th.step) * th.step : f;
  const drift = (seed * 0.9) % 400;
  const bob = Math.sin(seed / 6) * (is("lego") ? 2 : 4);
  const flicker = 0.82 + 0.18 * Math.sin(f / 5) * Math.sin(f / 13);
  const draw = th.draw ? interpolate(t, [0, 1.6], [0, 1], { extrapolateRight: "clamp" }) : 1;
  const dash = th.draw ? { pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 - draw } : {};
  const D = (p: object): any => ({ ...p, ...dash });

  // skyline
  const blds = [[120, 300, 140], [290, 380, 180], [500, 260, 130], [660, 440, 200], [900, 330, 150], [1080, 400, 190], [1300, 290, 140], [1470, 450, 210], [1710, 340, 170]];
  const shown = th.sparse ? blds.filter((_, i) => i % 3 === 0) : blds;

  const wheel = (cx: number) => {
    const a = (seed * 9) % 360;
    return (
      <g key={cx} transform={`translate(${cx} ${ROAD_Y - 38 + bob})`}>
        <circle r={58} {...shape("#1b1b1b")} {...D({})} />
        <circle r={30} {...shape(is("explainer-3d") ? "#dfe6f2" : "#cfd3d8")} stroke={stroke} />
        <g transform={`rotate(${a})`}>{[0, 72, 144, 216, 288].map((r) => <line key={r} x1={0} y1={0} x2={0} y2={-30} stroke={stroke === "none" ? "#8b93a5" : stroke} strokeWidth={Math.max(sw, 2)} transform={`rotate(${r})`} />)}</g>
      </g>
    );
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
      <defs>
        {th.sky && <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={th.sky[0]} /><stop offset="1" stopColor={th.sky[1]} /></linearGradient>}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed={Math.floor(f / 6)} result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="5" /></filter>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#1c3a63" floodOpacity="0.28" /></filter>
        <radialGradient id="lampGlow"><stop offset="0" stopColor={th.gold} stopOpacity="0.9" /><stop offset="1" stopColor={th.gold} stopOpacity="0" /></radialGradient>
        <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#000" opacity="0.12" /></pattern>
      </defs>
      <rect width={W} height={H} fill={th.sky ? "url(#sky)" : th.bg} />
      {is("chalkboard") && <rect width={W} height={H} fill="#fff" opacity="0.04" filter="url(#rough)" />}
      <g filter={th.glow ? "url(#glow)" : th.rough ? "url(#rough)" : is("explainer-3d") ? "url(#soft)" : undefined} fontFamily={th.font}>
        {/* clouds */}
        {(th.sparse ? [0] : [0, 1, 2]).map((i) => {
          const x = ((i * 700 + drift * (0.6 + i * 0.2) + 200) % 2300) - 250;
          const y = 150 + i * 70;
          return <g key={i} transform={`translate(${x} ${y})`}>
            {is("lego")
              ? <><rect x={0} y={20} width={230} height={44} {...shape(th.tone.cloud)} /><rect x={30} y={-4} width={120} height={28} {...shape(th.tone.cloud)} />{[45, 85, 125].map((sx) => <rect key={sx} x={sx} y={-12} width={24} height={10} {...shape(th.tone.cloud)} />)}</>
              : is("ps2")
                ? <polygon points="0,56 30,20 90,8 150,22 200,56" {...shape(th.tone.cloud)} />
                : <path d="M0 60 q0 -34 40 -34 q16 -34 62 -22 q40 -10 56 24 q42 0 42 32 z" {...shape(th.tone.cloud)} {...D({})} />}
          </g>;
        })}
        {/* skyline */}
        {shown.map(([x, h, w], i) => {
          const y = ROAD_Y - 60 - h;
          return <g key={i}>
            {is("ps2")
              ? <><polygon points={`${x},${y + 30} ${x + w / 2},${y} ${x + w},${y + 30} ${x + w},${ROAD_Y - 60} ${x},${ROAD_Y - 60}`} {...shape(th.tone.building)} /><polygon points={`${x + w / 2},${y} ${x + w},${y + 30} ${x + w},${ROAD_Y - 60} ${x + w / 2},${ROAD_Y - 60}`} fill="#00000033" /></>
              : <rect x={x} y={y} width={w} height={h} rx={is("explainer-3d") ? 22 : 0} {...shape(th.tone.building)} {...D({})} />}
            {is("lego") && Array.from({ length: Math.floor(w / 50) }).map((_, k) => <rect key={k} x={x + 12 + k * 46} y={y - 10} width={30} height={10} {...shape(th.tone.building)} />)}
            {!th.sparse && Array.from({ length: Math.floor(h / 70) }).map((_, r) => Array.from({ length: Math.floor(w / 50) }).map((__, c) => {
              const on = (i * 7 + r * 3 + c * 5 + Math.floor(f / 40)) % 4 !== 0;
              return <rect key={`${r}-${c}`} x={x + 14 + c * 44} y={y + 22 + r * 58} width={18} height={26} rx={is("explainer-3d") ? 5 : 0}
                fill={on ? (th.fill ? th.gold : "none") : "none"} stroke={on ? (th.fill ? "none" : th.gold) : "none"} strokeWidth={1.6} opacity={on ? flicker : 0} />;
            }))}
          </g>;
        })}
        {/* road */}
        <rect x={-20} y={ROAD_Y} width={W + 40} height={H - ROAD_Y + 20} {...shape(th.tone.road)} {...D({})} />
        <line x1={0} y1={ROAD_Y + 140} x2={W} y2={ROAD_Y + 140} stroke={th.fill ? "#f4f4f4" : th.accent} strokeWidth={is("minimal-line") ? 1.4 : 8} strokeDasharray="90 70" strokeDashoffset={-((seed * 12) % 160)} opacity={th.sparse ? 0.6 : 1} />
        {/* lamp post (left) */}
        <g>
          <path d={`M300 ${ROAD_Y} V 430 q0 -50 60 -50 h40`} {...shape("none")} {...D({})} />
          <circle cx={410} cy={392} r={is("explainer-3d") ? 20 : 14} {...shape(th.tone.lamp)} />
          {!th.sparse && <circle cx={410} cy={400} r={130} fill="url(#lampGlow)" opacity={flicker * (th.glow ? 0.9 : th.fill ? 0.35 : 0.5)} />}
        </g>
        {/* sign (right) */}
        <g>
          <line x1={1580} y1={ROAD_Y} x2={1580} y2={540} stroke={stroke === "none" ? "#8b93a5" : stroke} strokeWidth={Math.max(sw, 6)} {...dash} />
          <rect x={1480} y={450} width={200} height={100} rx={is("explainer-3d") ? 18 : 4} {...shape(th.tone.sign)} {...D({})} />
          <text x={1580} y={515} textAnchor="middle" fontSize={44} fontWeight={700} fill={th.fill ? "#fff" : stroke} stroke="none">{is("ps2") ? "SAVE" : "NFP"}</text>
        </g>
        {/* car */}
        <g transform={`translate(${W / 2 - 330 + Math.sin(seed / 40) * 12} 0)`}>
          <g transform={`translate(0 ${bob})`}>
            <ellipse cx={330} cy={ROAD_Y + 6} rx={300} ry={14} fill="#000" opacity={th.fill ? 0.25 : 0} />
            {/* driver */}
            <g transform="translate(300 0)">
              {is("lego")
                ? <><rect x={-24} y={ROAD_Y - 250} width={48} height={50} rx={6} {...shape(th.tone.skin)} /><rect x={-34} y={ROAD_Y - 200} width={68} height={70} {...shape("#1b1b1b")} /></>
                : <><circle cx={0} cy={ROAD_Y - 232} r={is("explainer-3d") ? 34 : 28} {...shape(th.tone.skin)} {...D({})} /><path d={`M-34 ${ROAD_Y - 130} q0 -70 34 -70 q34 0 34 70`} {...shape(is("explainer-3d") ? "#3a4a7a" : th.tone.sign === "none" ? "none" : "#2a2f45")} {...D({})} /></>}
              <circle cx={-10} cy={ROAD_Y - 236} r={2.4} fill={th.fill ? "#1b1b1b" : stroke} /><circle cx={10} cy={ROAD_Y - 236} r={2.4} fill={th.fill ? "#1b1b1b" : stroke} />
            </g>
            {/* body */}
            {is("ps2")
              ? <><polygon points={`40,${ROAD_Y - 70} 80,${ROAD_Y - 150} 250,${ROAD_Y - 150} 330,${ROAD_Y - 130} 520,${ROAD_Y - 130} 620,${ROAD_Y - 90} 640,${ROAD_Y - 40} 20,${ROAD_Y - 40}`} {...shape(th.tone.car)} /><polygon points={`330,${ROAD_Y - 130} 520,${ROAD_Y - 130} 620,${ROAD_Y - 90} 330,${ROAD_Y - 90}`} fill="#ffffff22" /></>
              : <path d={`M30 ${ROAD_Y - 60} q0 -62 72 -66 l160 -4 q30 -34 60 -2 l190 4 q96 6 118 40 q20 28 8 50 h-570 q-38 0 -38 -22 z`} {...shape(th.tone.car === "none" ? "none" : th.tone.car)} stroke={th.fill ? stroke : th.red} strokeWidth={Math.max(sw, 3) + (th.glow ? 1 : 0)} {...D({})} />}
            {/* windshield + headlight */}
            <path d={`M262 ${ROAD_Y - 128} l-30 -66`} stroke={th.fill ? stroke : th.red} strokeWidth={Math.max(sw, 3)} fill="none" {...dash} />
            <ellipse cx={610} cy={ROAD_Y - 78} rx={16} ry={10} {...shape(is("lego") || th.fill ? "#fff7c2" : "none")} stroke={th.fill ? stroke : th.gold} />
            {th.glow && <polygon points={`626,${ROAD_Y - 78} 900,${ROAD_Y - 130} 900,${ROAD_Y - 30}`} fill={th.gold} opacity={0.16} />}
            {wheel(150)}{wheel(500)}
          </g>
        </g>
      </g>
      {is("ps2") && <rect width={W} height={H} fill="url(#scan)" />}
    </svg>
  );
};

export const LookScene: React.FC<{ look?: LookId; label?: boolean }> = ({ look = "glow-sketch", label }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const meta = LOOKS.find((l) => l.id === look)!;
  const th = THEMES[look];
  return (
    <AbsoluteFill style={{ background: th.bg }}>
      <Scene look={look} t={f / fps} f={f} />
      {label && <div style={{ position: "absolute", left: 60, bottom: 50, fontFamily: FONT, fontSize: 46, fontWeight: 800, color: th.fill ? "#fff" : th.line, textShadow: th.fill ? "0 3px 12px #0008" : "none", direction: "rtl" }}>{meta.fa} · {meta.en}</div>}
    </AbsoluteFill>
  );
};

export const LOOK_FPS = 30;
export const LOOK_FRAMES = 150;
export const LOOK_PACK_FRAMES = LOOK_FRAMES * LOOKS.length;
// all six back to back, labeled: a quick comparison reel
export const LookPackReel: React.FC = () => (
  <AbsoluteFill>
    {LOOKS.map((l, i) => (
      <Sequence key={l.id} from={i * LOOK_FRAMES} durationInFrames={LOOK_FRAMES}><LookScene look={l.id} label /></Sequence>
    ))}
  </AbsoluteFill>
);
