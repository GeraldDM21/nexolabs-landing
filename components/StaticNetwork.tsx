/* Version estatica de la red de nodos para pantallas pequenas.
   Es SVG plano, sin animacion por frame: no afecta el scroll. */

export default function StaticNetwork() {
  const nodes = [
    { x: 200, y: 60 },
    { x: 96, y: 140 },
    { x: 306, y: 132 },
    { x: 140, y: 250 },
    { x: 268, y: 258 },
    { x: 200, y: 190 },
    { x: 44, y: 224 },
    { x: 356, y: 216 },
    { x: 200, y: 330 },
  ];

  const links: Array<[number, number]> = [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 8],
    [1, 3],
    [2, 4],
  ];

  return (
    <svg
      viewBox="0 0 400 390"
      className="h-full w-full"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="netG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <radialGradient id="netHalo">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="190" r="150" fill="url(#netHalo)" />

      <g stroke="url(#netG)" strokeWidth="1" opacity="0.28">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>

      <circle
        cx="200"
        cy="190"
        r="46"
        fill="none"
        stroke="url(#netG)"
        strokeWidth="1"
        opacity="0.22"
      />

      <g fill="url(#netG)">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 5 ? 6 : 3.5}
            opacity={i === 5 ? 0.95 : 0.7}
          />
        ))}
      </g>
    </svg>
  );
}
