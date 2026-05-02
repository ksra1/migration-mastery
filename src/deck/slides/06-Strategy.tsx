import { SlideLayout, Pill } from "../components/SlideLayout";

const efforts = [
  { tier: "Minimal Fixes", color: "text-success", desc: "Lift-and-shift with config tweaks", count: "~40%" },
  { tier: "Moderate Refactor", color: "text-warning", desc: "Targeted code & integration changes", count: "~35%" },
  { tier: "Full Rewrite", color: "text-violet", desc: "Headless transformation (Next.js + GraphQL)", count: "~25%" },
] as const;

const milestones = [
  { q: "Q4 2024", t: "Portfolio analysis & classification" },
  { q: "Q1 2025", t: "Foundation: AEMaaCS Setup" },
  { q: "Q2 2025", t: "Wave 1 migrations (minimal fixes)" },
  { q: "Q3 2025", t: "Wave 2 (refactors) + headless POCs" },
  { q: "Q4 2025", t: "Final rewrites · 100% migration" },
];

export default function StrategySlide() {
  return (
    <SlideLayout eyebrow="Approach" title="Migration Strategy">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <div className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Classification model
          </div>
          <div className="flex gap-3">
            <Pill tone="cyan">Headful (traditional AEM)</Pill>
            <span className="text-muted-foreground">vs</span>
            <Pill tone="violet">Headless (Next.js + GraphQL)</Pill>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-3 gap-5">
          {efforts.map((e) => (
            <div key={e.tier} className="glass-strong p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-xl font-semibold">{e.tier}</div>
                <div className={`text-3xl font-bold ${e.color}`}>{e.count}</div>
              </div>
              <div className="mt-2 text-base text-muted-foreground">{e.desc}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="col-span-12 mt-4">
          <div className="mb-4 text-base uppercase tracking-[0.2em] text-muted-foreground">
            Roadmap · Q4 2024 → Q4 2025
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />
            <div className="grid grid-cols-5 gap-4">
              {milestones.map((m, i) => (
                <div key={m.q} className="relative">
                  <div
                    className={`mx-auto mb-4 h-3 w-3 rounded-full ring-4 ring-background ${
                      i === milestones.length - 1
                        ? "bg-primary shadow-[0_0_16px_var(--primary)]"
                        : "bg-primary/70"
                    }`}
                  />
                  <div className="glass p-5 text-center">
                    <div className="text-sm font-mono uppercase tracking-widest text-primary">
                      {m.q}
                    </div>
                    <div className="mt-2 text-base leading-snug text-foreground">{m.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
