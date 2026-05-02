import { GitBranch, GitMerge, Package, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const sourceRepos = [
  { name: "shop-repo", tone: "cyan" },
  { name: "buy-repo", tone: "violet" },
  { name: "own-repo", tone: "success" },
  { name: "b2c-repo", tone: "warning" },
  { name: "shared-libs", tone: "default" },
];

const toneMap: Record<string, { border: string; bg: string; text: string }> = {
  cyan: { border: "border-cyan/40", bg: "bg-cyan/10", text: "text-cyan" },
  violet: { border: "border-violet/40", bg: "bg-violet/10", text: "text-violet" },
  success: { border: "border-success/40", bg: "bg-success/10", text: "text-success" },
  warning: { border: "border-warning/40", bg: "bg-warning/10", text: "text-warning" },
  default: { border: "border-white/15", bg: "bg-white/5", text: "text-muted-foreground" },
};

const envs = [
  { name: "Dev", desc: "Continuous integration", tone: "cyan" },
  { name: "Stage", desc: "QA · UAT · perf", tone: "warning" },
  { name: "Prod", desc: "Production release", tone: "success" },
];

export function PipelineDiagram() {
  return (
    <div className="relative flex h-full w-full flex-col p-10">
      <div className="grid flex-1 grid-cols-12 gap-8 min-h-0">
        {/* Source repos */}
        <div className="col-span-3 flex flex-col">
          <div className="mb-6 flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-muted-foreground" />
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Source repos
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4">
            {sourceRepos.map((r, i) => {
              const c = toneMap[r.tone];
              return (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className={`flex items-center gap-3 rounded-lg border ${c.border} ${c.bg} px-5 py-4`}
                >
                  <GitBranch className={`h-5 w-5 ${c.text}`} />
                  <span className="font-mono text-xl text-foreground">{r.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Submodule merge */}
        <div className="col-span-1 flex items-center justify-center">
          <motion.div
            animate={{ x: [-6, 6, -6], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-10 w-10 text-primary" />
          </motion.div>
        </div>

        {/* Monorepo */}
        <div className="col-span-3 flex flex-col">
          <div className="mb-6 flex items-center gap-2">
            <GitMerge className="h-6 w-6 text-primary" />
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-primary">
              GitHub submodules
            </span>
          </div>
          <div className="flex flex-1 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.55, ease: "easeOut" }}
              className="relative w-full overflow-hidden rounded-xl border border-primary/40 bg-primary/10 p-6 backdrop-blur-sm"
            >
              {/* shimmer sweep */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent"
                animate={{ x: ["0%", "400%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              />
              <div className="relative flex items-center gap-3">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-semibold text-foreground">aem-monorepo</div>
                  <div className="text-base text-muted-foreground">Single deployable artifact</div>
                </div>
              </div>
              <div className="relative mt-5 space-y-2 font-mono text-base text-muted-foreground whitespace-nowrap">
                <div>├─ /shop  ← submodule</div>
                <div>├─ /buy   ← submodule</div>
                <div>├─ /own   ← submodule</div>
                <div>├─ /b2c   ← submodule</div>
                <div>└─ /core  ← shared</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Arrow */}
        <div className="col-span-1 flex items-center justify-center">
          <motion.div
            animate={{ x: [-6, 6, -6], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <ArrowRight className="h-10 w-10 text-primary" />
          </motion.div>
        </div>

        {/* Adobe Cloud Manager pipeline */}
        <div className="col-span-4 flex flex-col">
          <div className="mb-6 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-violet" />
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-violet">
              Adobe Cloud Manager
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4">
            <div className="rounded-lg border border-violet/30 bg-violet/5 px-5 py-3.5 text-lg text-muted-foreground">
              Build · code quality gates · security scan
            </div>

            {/* RDE row — per-team on-demand environments */}
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  RDE · Rapid Dev Envs
                </span>
                <span className="text-[11px] text-muted-foreground/80">on-demand · per team</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sourceRepos.slice(0, 4).map((r, i) => {
                  const c = toneMap[r.tone];
                  const team = r.name.replace("-repo", "");
                  return (
                    <motion.div
                      key={r.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                      className={`rounded-md border ${c.border} ${c.bg} px-2 py-1.5 text-center`}
                    >
                      <div className={`text-xs font-bold ${c.text}`}>RDE</div>
                      <div className="font-mono text-[11px] text-foreground/80">{team}</div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-2 text-[11px] leading-snug text-muted-foreground">
                Team picks any branch for their app · others run prod branch · deploys from monorepo
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {envs.map((e, i) => {
                const c = toneMap[e.tone];
                return (
                  <motion.div
                    key={e.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                    className={`relative rounded-lg border ${c.border} ${c.bg} p-4 text-center`}
                  >
                    <div className={`text-2xl font-bold ${c.text}`}>{e.name}</div>
                    <div className="mt-1.5 text-sm text-muted-foreground">{e.desc}</div>
                    {i < envs.length - 1 && (
                      <motion.div
                        className="absolute -right-3 top-1/2 -translate-y-1/2 text-xs text-primary whitespace-nowrap"
                        animate={{ opacity: [0.4, 1, 0.4], x: [-2, 2, -2] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                      >
                        →
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3.5 text-lg text-muted-foreground">
              AEMaaCS deployment · zero-downtime rollout
            </div>
          </div>
        </div>
      </div>

      {/* Before/After footnote */}
      <div className="mt-6 grid grid-cols-2 gap-5">
        <div className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 text-lg text-muted-foreground">
          <span className="font-semibold text-foreground/80">Before:</span> 30+ Jenkins jobs · per-app pipelines · drift across stacks
        </div>
        <div className="rounded-lg border border-success/30 bg-success/5 px-5 py-4 text-lg text-muted-foreground">
          <span className="font-semibold text-success">After:</span> 1 monorepo · 1 Adobe pipeline · consistent gates Dev → Stage → Prod
        </div>
      </div>
    </div>
  );
}
