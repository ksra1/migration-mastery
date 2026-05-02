import { Server, Boxes } from "lucide-react";

const stacks = [
  { name: "Shop Experience", apps: 8, color: "violet" },
  { name: "Buy Experience", apps: 7, color: "cyan" },
  { name: "Owner Experience", apps: 9, color: "success" },
  { name: "B2C Sites + Microsites", apps: 8, color: "warning" },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  violet: { bg: "bg-violet/10", border: "border-violet/40", text: "text-violet", dot: "bg-violet" },
  cyan: { bg: "bg-cyan/10", border: "border-cyan/40", text: "text-cyan", dot: "bg-cyan" },
  success: { bg: "bg-success/10", border: "border-success/40", text: "text-success", dot: "bg-success" },
  warning: { bg: "bg-warning/10", border: "border-warning/40", text: "text-warning", dot: "bg-warning" },
};

export function ProgramLandscapeDiagram() {
  return (
    <div className="relative h-full w-full p-8">
      {/* On-prem container */}
      <div className="relative h-full w-full rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
        <div className="absolute -top-3 left-6 flex items-center gap-2 rounded-full border border-white/15 bg-background px-3 py-1">
          <Server className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            On-Premise · Legacy AEM
          </span>
        </div>

        <div className="grid h-full grid-cols-2 grid-rows-2 gap-5 pt-4">
          {stacks.map((s) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.name}
                className={`relative rounded-xl border ${c.border} ${c.bg} p-5 flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                    <span className={`text-xs font-medium uppercase tracking-[0.18em] ${c.text}`}>
                      AEM Stack
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">~{s.apps} apps</span>
                </div>
                <div className="mt-2 text-xl font-semibold text-foreground">{s.name}</div>

                {/* mini app tiles */}
                <div className="mt-3 grid flex-1 grid-cols-4 content-end gap-1.5">
                  {Array.from({ length: s.apps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-5 rounded-sm border ${c.border} bg-white/5`}
                    />
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Boxes className="h-3 w-3" />
                  Distinct dev team · separate stakeholders
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* footnote */}
      <div className="absolute bottom-2 right-8 text-[11px] text-muted-foreground">
        4 isolated stacks · 30+ applications · mixed ownership
      </div>
    </div>
  );
}
