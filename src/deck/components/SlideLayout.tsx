import type { ReactNode } from "react";

export function SlideLayout({
  children,
  title,
  eyebrow,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden px-32 pt-24 pb-24 deck-grid-bg flex flex-col ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-8 glass-strong p-8 rounded-2xl">
          {eyebrow && (
            <div className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-primary">
              {eyebrow}
            </div>
          )}
          {title && (
            <h1 className="text-5xl font-bold tracking-tight text-gradient leading-[1.15] pb-2">
              {title}
            </h1>
          )}
        </header>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export function StatTile({
  value,
  label,
  sub,
  accent = "violet",
}: {
  value: string;
  label: string;
  sub?: string;
  accent?: "violet" | "cyan" | "success" | "warning";
}) {
  const accentMap: Record<string, string> = {
    violet: "from-violet/30 to-transparent border-violet/30",
    cyan: "from-cyan/30 to-transparent border-cyan/30",
    success: "from-success/30 to-transparent border-success/30",
    warning: "from-warning/30 to-transparent border-warning/30",
  };
  return (
    <div
      className={`glass-strong relative overflow-hidden p-8 bg-gradient-to-br ${accentMap[accent]}`}
    >
      <div className="text-6xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="mt-3 text-base font-medium text-muted-foreground">{label}</div>
      {sub && <div className="mt-1 text-sm text-muted-foreground/70">{sub}</div>}
    </div>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "violet" | "cyan" | "success" | "warning" }) {
  const tones: Record<string, string> = {
    default: "bg-white/5 text-foreground border-white/10",
    violet: "bg-violet/10 text-violet border-violet/30",
    cyan: "bg-cyan/10 text-cyan border-cyan/30",
    success: "bg-success/10 text-success border-success/30",
    warning: "bg-warning/10 text-warning border-warning/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function DiagramSlot({
  label = "Diagram",
  hint,
  children,
}: {
  label?: string;
  hint?: string;
  children?: ReactNode;
}) {
  return (
    <div className="glass relative flex h-full w-full items-center justify-center overflow-hidden">
      {children ? (
        children
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-primary/70">
            {label}
          </div>
          <div className="text-sm opacity-60">{hint ?? "Drop image or Mermaid here"}</div>
        </div>
      )}
    </div>
  );
}
