function ChairArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <ellipse cx="200" cy="330" rx="126" ry="17" fill="rgba(28,22,14,0.10)" />
      <path
        d="M126 158c0-21 16-38 37-38h74c21 0 38 17 38 38v84H126v-84Z"
        fill={accent}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M126 196h149" stroke={dark} strokeWidth="2.4" opacity="0.5" />
      <path
        d="M108 242h185c13 0 23 10 23 23v17H85v-17c0-13 10-23 23-23Z"
        fill={accent}
        stroke={dark}
        strokeWidth="3"
      />
      <path
        d="M110 282 96 326M291 282l14 44M145 282l-6 44M256 282l6 44"
        stroke={dark}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M118 166c22-16 62-20 89-8" stroke={dark} strokeWidth="2.2" opacity="0.4" fill="none" />
    </>
  );
}

function LampArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <ellipse cx="200" cy="336" rx="118" ry="16" fill="rgba(28,22,14,0.10)" />
      <ellipse cx="138" cy="322" rx="47" ry="11" fill={dark} />
      <path d="M138 322V138c0-48 62-72 108-44 20 12 34 32 38 56" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M284 150h48l-16 56h-16l-16-56Z" fill={accent} stroke={dark} strokeWidth="3" />
      <path d="M292 149c2-19 30-19 32 0" fill="none" stroke={dark} strokeWidth="3" />
      <ellipse cx="308" cy="210" rx="28" ry="7" fill={accent} opacity="0.35" />
      <path d="M256 120c12-20 32-28 54-24" stroke={accent} strokeWidth="2" fill="none" opacity="0.5" />
    </>
  );
}

function VaseArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <ellipse cx="200" cy="332" rx="112" ry="15" fill="rgba(28,22,14,0.10)" />
      <path d="M54 326h292" stroke={dark} strokeWidth="2" opacity="0.35" />
      <path
        d="M168 176c-6-18 4-32 22-34h20c18 2 28 16 22 34-4 13 16 32 20 64 5 41-19 74-52 74s-57-33-52-74c4-32 24-51 20-64Z"
        fill={accent}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M190 154v-22h34v22" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M204 132c-4-38 8-64 30-80M210 120c-18-22-38-30-54-28M216 108c22-14 42-14 58-6" stroke={dark} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M232 52c4-14 16-20 30-16-2 14-14 22-30 16ZM156 92c-14-6-16-18-10-30 14 2 20 14 10 30ZM274 102c14-2 22 6 24 18-14 2-22-6-24-18Z" fill={palette[1]} opacity="0.75" />
      <path d="M176 250c0-18 10-32 24-36" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  );
}

function TableArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <ellipse cx="200" cy="332" rx="122" ry="16" fill="rgba(28,22,14,0.10)" />
      <ellipse cx="200" cy="176" rx="108" ry="30" fill={accent} stroke={dark} strokeWidth="3" />
      <path d="M92 176v12c0 17 48 30 108 30s108-13 108-30v-12" fill={accent} stroke={dark} strokeWidth="3" />
      <path d="M150 214h100l-8 106h-84l-8-106Z" fill={accent} stroke={dark} strokeWidth="3" />
      <path d="M154 244h92M158 274h84" stroke={dark} strokeWidth="2" opacity="0.35" />
      <path d="M148 320h104" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M120 170c26-12 58-18 92-16" stroke="rgba(255,255,255,0.35)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </>
  );
}

function SofaArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <ellipse cx="200" cy="334" rx="148" ry="17" fill="rgba(28,22,14,0.10)" />
      <path
        d="M112 190c0-18 14-32 32-32h112c18 0 32 14 32 32v50H112v-50Z"
        fill={accent}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M112 224h176" stroke={dark} strokeWidth="2.2" opacity="0.4" />
      <path
        d="M86 240h228c11 0 20 9 20 20v34H66v-34c0-11 9-20 20-20Z"
        fill={accent}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M140 240v54M260 240v54" stroke={dark} strokeWidth="2.4" opacity="0.45" />
      <path d="M94 294 86 330M306 294l8 36M122 294l-4 36M278 294l4 36" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <path d="M128 200c22-14 54-16 78-6M214 194c20-8 44-4 56 8" stroke="rgba(255,255,255,0.35)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  );
}

function ShelfArt({ palette }) {
  const [accent, dark] = palette;
  return (
    <>
      <path d="M126 306V176a74 74 0 0 1 148 0v130" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M104 306h192" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M126 236h148M126 292h148" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M156 236v-22h18v22M262 236v-30h16v30" fill={accent} stroke={dark} strokeWidth="2.4" />
      <path d="M170 214c-4-26 6-48 22-58M176 208c-14-14-30-18-42-14M180 194c14-8 28-6 38 2" stroke={palette[1]} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M198 292v-40h20v40M226 292v-26h20v26" fill="none" stroke={dark} strokeWidth="2.6" />
      <circle cx="238" cy="214" r="14" fill={accent} stroke={dark} strokeWidth="2.4" />
    </>
  );
}

const artMap = {
  chair: ChairArt,
  lamp: LampArt,
  vase: VaseArt,
  table: TableArt,
  sofa: SofaArt,
  shelf: ShelfArt,
};

export default function ProductArt({ product, className = "", label }) {
  const Art = artMap[product?.art] ?? ChairArt;
  const palette = product?.palette ?? ["#b0553a", "#3d3a33"];
  return (
    <div
      className={`product-art ${className}`}
      style={{ backgroundColor: product?.tint ?? "#e6dace" }}
      role="img"
      aria-label={label ?? product?.name ?? "Product illustration"}
    >
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <Art palette={palette} />
      </svg>
    </div>
  );
}
