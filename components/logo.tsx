export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JBSandbox"
    >
      {/* brackets */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M 108 46 L 94 46 L 94 114 L 108 114" />
        <path d="M 532 46 L 546 46 L 546 114 L 532 114" />
      </g>
      {/* tiles */}
      <g fill="currentColor">
        <rect x="128" y="50" width="22" height="22" rx="3" />
        <rect x="156" y="68" width="22" height="22" rx="3" />
        <rect x="142" y="88" width="22" height="22" rx="3" opacity="0.55" />
      </g>
      {/* wordmark */}
      <text
        x="200"
        y="103"
        fill="currentColor"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="-1.2"
      >
        JBSandbox
      </text>
    </svg>
  );
}
