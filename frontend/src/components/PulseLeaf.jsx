// Signature motif: a heartbeat line that resolves into a leaf.
// Represents the hospital's blend of modern medicine (pulse) and Ayurveda (leaf).
export default function PulseLeaf({ className = "", color = "#D99A2B" }) {
  return (
    <svg
      viewBox="0 0 600 40"
      className={`pulse-leaf ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 H120 L140 6 L158 34 L176 20 H230
           C 250 6, 270 6, 285 20
           C 298 34, 320 40, 340 26
           C 355 15, 370 12, 380 20
           C 392 30, 410 8, 430 20
           H600"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
