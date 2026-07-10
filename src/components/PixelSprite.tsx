import type { CSSProperties, ReactElement } from "react";

/**
 * Hand-drawn pixel sprites, authored as character grids.
 * Each char maps to a fill color; anything unmapped ('.' etc.) is transparent.
 * Rendered as 1x1 SVG rects with crispEdges so they stay razor sharp at any size.
 */

export type SpriteName =
  | "basketball"
  | "sneaker"
  | "vinyl"
  | "gamepad"
  | "headphones"
  | "bolt"
  | "toad"
  | "cassette"
  | "clapper";

interface SpriteDef {
  rows: string[];
  colors: Record<string, string>;
}

const C = {
  orange: "#FF7A3D",
  orangeDark: "#C2521F",
  cream: "#F2EFE7",
  creamDim: "#D8D4C8",
  teal: "#3DDCC8",
  tealDark: "#23A08F",
  purple: "#B48CFF",
  yellow: "#FFD54D",
  yellowDark: "#E8A81C",
  green: "#6FBF73",
  greenDark: "#3E7A44",
  ink: "#0E0E12",
  outline: "#26262E",
  gray: "#3C3C48",
  grayLight: "#55535F",
  disc: "#2E2E38",
  groove: "#44444F",
  white: "#FFFFFF",
};

const SPRITES: Record<SpriteName, SpriteDef> = {
  basketball: {
    rows: [
      "...ooDoo...",
      "..oooDooo..",
      ".ooooDoooo.",
      "oooooDooooo",
      "oooooDooooo",
      "DDDDDDDDDDD",
      "oooooDooooo",
      "oooooDooooo",
      ".ooooDoooo.",
      "..oooDooo..",
      "...ooDoo...",
    ],
    colors: { o: C.orange, D: C.orangeDark },
  },

  sneaker: {
    rows: [
      ".xxxx........",
      ".xwwwx.......",
      ".xwlwx.......",
      ".xwwlwx......",
      ".xwwwlwxxxx..",
      "xwwwwwwwwwwwx",
      "xwaaaaawwwwwx",
      "xwwwwwwwwwwwx",
      "xsssssssssssx",
      ".xxxxxxxxxxx.",
    ],
    colors: {
      x: C.outline,
      w: C.cream,
      l: C.grayLight,
      a: C.orange,
      s: C.creamDim,
    },
  },

  vinyl: {
    rows: [
      "....kkkk....",
      "..kkkkkkkk..",
      ".kkkggggkkk.",
      ".kgkkkkkkgk.",
      "kkgkppppkgkk",
      "kkgkphhpkgkk",
      "kkgkphhpkgkk",
      "kkgkppppkgkk",
      ".kgkkkkkkgk.",
      ".kkkggggkkk.",
      "..kkkkkkkk..",
      "....kkkk....",
    ],
    colors: { k: C.disc, g: C.groove, p: C.purple, h: C.ink },
  },

  gamepad: {
    rows: [
      "..xxxxxxxxxx..",
      ".xbbbbbbbbbbx.",
      "xbbdbbbbbbbabx",
      "xbdddbbbbbtbtx",
      "xbbdbbbbbbbabx",
      ".xbbbbbbbbbbx.",
      ".xbbx....xbbx.",
      "..xx......xx..",
    ],
    colors: {
      x: C.outline,
      b: C.gray,
      d: C.cream,
      a: C.orange,
      t: C.teal,
    },
  },

  headphones: {
    rows: [
      "...hhhhhh...",
      "..hh....hh..",
      ".hh......hh.",
      ".h........h.",
      ".h........h.",
      "ccc......ccc",
      "ccp......pcc",
      "ccp......pcc",
      "ccc......ccc",
      ".cc......cc.",
    ],
    colors: { h: C.cream, c: C.gray, p: C.orange },
  },

  bolt: {
    rows: [
      ".....yyy",
      "....yyy.",
      "...yyy..",
      "..yyyyyy",
      ".yyyyyY.",
      "...yyY..",
      "..yyY...",
      ".yyY....",
      "yyY.....",
    ],
    colors: { y: C.yellow, Y: C.yellowDark },
  },

  toad: {
    rows: [
      "..gg....gg..",
      ".gwwg..gwwg.",
      ".gwkg..gwkg.",
      "gggggggggggg",
      "gggggggggggg",
      "gggmmmmmmggg",
      "gggggggggggg",
      ".gggggggggg.",
      "..ggg..ggg..",
    ],
    colors: { g: C.green, w: C.white, k: C.ink, m: C.greenDark },
  },

  clapper: {
    rows: [
      "xxxxxxxxxxxx",
      "xwwccwwccwwx",
      "xxxxxxxxxxxx",
      "xbbbbbbbbbbx",
      "xbwwwwwwbbbx",
      "xbbbbbbbbbbx",
      "xbwwwwbbbbbx",
      "xxxxxxxxxxxx",
    ],
    colors: { x: C.outline, w: C.cream, c: C.grayLight, b: C.gray },
  },

  cassette: {
    rows: [
      "xxxxxxxxxxxxxx",
      "xppppppppppppx",
      "xpwwwwwwwwwwpx",
      "xpwkwwwwwwkwpx",
      "xpwwwwwwwwwwpx",
      "xppppppppppppx",
      "xppxxxxxxxxppx",
      "xxxxxxxxxxxxxx",
    ],
    colors: { x: C.outline, p: C.purple, w: C.cream, k: C.ink },
  },
};

interface PixelSpriteProps {
  name: SpriteName;
  /** rendered width in px; height scales to the sprite's aspect ratio */
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function PixelSprite({
  name,
  size = 32,
  className,
  style,
  title,
}: PixelSpriteProps) {
  const def = SPRITES[name];
  const h = def.rows.length;
  const w = Math.max(...def.rows.map((r) => r.length));

  const rects: ReactElement[] = [];
  def.rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = def.colors[ch];
      if (fill) {
        rects.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />
        );
      }
    });
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={size}
      height={(size * h) / w}
      shapeRendering="crispEdges"
      className={className}
      style={style}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {rects}
    </svg>
  );
}
