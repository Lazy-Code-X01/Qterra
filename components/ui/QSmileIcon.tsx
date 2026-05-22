/**
 * QTerra smiley Q icon — filled circle face + diagonal tail = Q shape.
 *
 * qFill     — colour of the circle and tail
 * faceColor — colour of eyes + smile (should contrast with qFill)
 */
export default function QSmileIcon({
  size = 22,
  qFill = "#A8D32E",
  faceColor = "white",
}: {
  size?: number;
  qFill?: string;
  faceColor?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" width={size} height={size}>
      {/* Face circle */}
      <circle cx="44" cy="44" r="34" fill={qFill} />

      {/* Eyes */}
      <circle cx="33" cy="38" r="5" fill={faceColor} />
      <circle cx="55" cy="38" r="5" fill={faceColor} />

      {/* Smile */}
      <path
        d="M30 54 Q44 68 58 54"
        stroke={faceColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Q tail — diagonal stroke from bottom-right of circle */}
      <line
        x1="68" y1="68"
        x2="86" y2="86"
        stroke={qFill}
        strokeWidth="13"
        strokeLinecap="round"
      />
    </svg>
  );
}
