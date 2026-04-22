"use client";

interface OrnamentalDividerProps {
  className?: string;
  light?: boolean;
}

export default function OrnamentalDivider({ className = "", light = false }: OrnamentalDividerProps) {
  const color = light ? "rgba(248,245,240,0.3)" : "rgba(212,175,55,0.5)";
  const dotColor = light ? "#F8F5F0" : "#D4AF37";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />
      {/* Central ornament */}
      <div className="flex items-center gap-2">
        <span style={{ color: dotColor, fontSize: "8px" }}>◆</span>
        <span style={{ color: dotColor, fontSize: "12px" }}>❋</span>
        <span style={{ color: dotColor, fontSize: "8px" }}>◆</span>
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${color})`,
        }}
      />
    </div>
  );
}
