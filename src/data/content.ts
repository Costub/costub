import type { SpriteName } from "../components/PixelSprite";

// ── Links ────────────────────────────────────────────────────────────────
export const links = {
  github: "https://github.com/costub",
  // TODO: replace with your real LinkedIn URL
  linkedin: "https://www.linkedin.com/in/kaustubh-mhaisekar",
  email: "kaustubh.m0803@gmail.com",
  resume: "/resume.pdf",
};

// ── Projects ─────────────────────────────────────────────────────────────
export interface Project {
  num: string;
  name: string;
  oneliner: string;
  description: string;
  tags: string[];
  sprite: SpriteName;
  accent: string; // CSS var
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    num: "01",
    name: "FeedFM",
    oneliner: "Your feeds, but as an AI radio station.",
    description:
      "Pick a subreddit, an X profile, or a keyword — FeedFM writes a scripted radio show around the posts and narrates it with ElevenLabs voices. Tone, host voice and show length are all yours. Share links included.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI", "ElevenLabs"],
    sprite: "headphones",
    accent: "var(--orange)",
    github: "https://github.com/costub/FeedFM",
    live: "https://feed-fm.xyz/",
  },
  {
    num: "02",
    name: "Dhoondle",
    oneliner: "Wordle × Bandle — Bollywood edition.",
    description:
      "A daily song-guessing game built on instrumental stems. Every wrong guess unlocks another layer of the track, with proximity hints across movie, artist and decade. Daily puzzles, an archive, and leaderboards.",
    tags: ["Next.js", "Web Audio API", "Supabase", "Spotify API"],
    sprite: "vinyl",
    accent: "var(--purple)",
    github: "https://github.com/costub/dhundle",
    live: "https://dhoondle.fun/",
  },
  {
    num: "03",
    name: "Autotoad",
    oneliner: "A voice instrument that lives in your browser.",
    description:
      "Sing into it: real-time autotune, a harmonizer, playable instruments, FX and quantized looping — all client-side DSP on SharedArrayBuffer. Headphones on, Chrome open, go make something weird.",
    tags: ["TypeScript", "Web Audio", "Vite", "Real-time DSP"],
    sprite: "toad",
    accent: "var(--teal)",
    github: "https://github.com/costub/autotoad",
    live: "https://autotoad.vercel.app",
  },
];

// ── Experience ───────────────────────────────────────────────────────────
export const journeyLine =
  "These days I'm building and owning AI and agentic workflows at Goldman Sachs — shipping agents that take the busywork out of investment research. The full story is in the resume.";

export const education =
  "B.E. Information Technology · Pune Institute of Computer Technology · 9.38 CGPA · AI-ML honors";

export const badges = [
  "Patent — sign-language video-calling utility (Aikyam)",
  "GS Analyst Impact Fund — 5th globally, $5K grant",
];

// ── Beyond the code ──────────────────────────────────────────────────────
export interface Interest {
  sprite: SpriteName;
  title: string;
  line: string;
  accent: string;
  href?: string;
  linkLabel?: string;
}

export const interests: Interest[] = [
  {
    sprite: "basketball",
    title: "Hoops",
    line: "Warriors die-hard: I'll watch Steph Curry highlights at 3am to clear my head. On weekends I hate on George Russell too.",
    accent: "var(--orange)",
  },
  {
    sprite: "sneaker",
    title: "Sneakers",
    line: "Certified sneakerhead. If I'm not burning tokens, I'm burning money on sneakers — the rotation doesn't fund itself.",
    accent: "var(--yellow)",
  },
  {
    sprite: "cassette",
    title: "Beats",
    line: "Producer, DJ — there's always a DAW running or decks spinning",
    accent: "var(--purple)",
  },
  {
    sprite: "gamepad",
    title: "Games",
    line: "Controller in hand since before I could type. Ranked grind and cozy games alike.",
    accent: "var(--teal)",
  },
];

export const marqueeWords = [
  { word: "HOOPS", sprite: "basketball" as SpriteName },
  { word: "SNEAKERS", sprite: "sneaker" as SpriteName },
  { word: "BEATS", sprite: "cassette" as SpriteName },
  { word: "GAMES", sprite: "gamepad" as SpriteName },
  { word: "AI AGENTS", sprite: "bolt" as SpriteName },
  { word: "VIDEO EDITS", sprite: "clapper" as SpriteName },
];
