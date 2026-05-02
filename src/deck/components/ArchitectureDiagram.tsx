import {
  Cloud,
  Database,
  Globe,
  Users,
  Layers,
  Server,
  Cpu,
  ShieldCheck,
  Workflow,
  Image as ImageIcon,
  FileCode2,
  FileText,
  Boxes,
} from "lucide-react";
import { motion } from "framer-motion";
const nextLogo = "/brand/nextjs.svg";

/* ---------- primitives ---------- */

function Node({
  title,
  subtitle,
  meta,
  icon,
  tone = "default",
  className = "",
  mono = false,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  icon?: React.ReactNode;
  tone?: "default" | "violet" | "cyan" | "success" | "warning" | "primary";
  className?: string;
  mono?: boolean;
}) {
  const toneMap: Record<string, string> = {
    default: "border-white/15 bg-white/[0.04]",
    violet: "border-violet/40 bg-violet/[0.08]",
    cyan: "border-cyan/40 bg-cyan/[0.08]",
    success: "border-success/40 bg-success/[0.08]",
    warning: "border-warning/40 bg-warning/[0.08]",
    primary: "border-primary/40 bg-primary/[0.08]",
  };
  return (
    <div
      className={`relative flex items-center gap-2.5 rounded-lg border ${toneMap[tone]} px-3 py-2 backdrop-blur-sm ${className}`}
    >
      {icon && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/[0.06] ring-1 ring-white/10">
          {icon}
        </div>
      )}
      <div className="min-w-0 leading-tight">
        <div className={`truncate text-sm font-semibold text-foreground ${mono ? "font-mono" : ""}`}>{title}</div>
        {subtitle && <div className="truncate text-xs text-muted-foreground">{subtitle}</div>}
        {meta && (
          <div className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
            {meta}
          </div>
        )}
      </div>
    </div>
  );
}

function LayerLabel({ children, tone = "default" }: { children: React.ReactNode; tone?: string }) {
  const toneMap: Record<string, string> = {
    default: "text-muted-foreground border-white/10",
    violet: "text-violet border-violet/30",
    cyan: "text-cyan border-cyan/30",
    success: "text-success border-success/30",
    warning: "text-warning border-warning/30",
    primary: "text-primary border-primary/30",
  };
  return (
    <div
      className={`shrink-0 rotate-180 border-r px-2 py-1 text-center font-mono text-[9px] uppercase tracking-[0.25em] ${toneMap[tone]}`}
      style={{ writingMode: "vertical-rl" }}
    >
      {children}
    </div>
  );
}

/** Animated chevron used for ALL flow connectors (consistent pattern) */
function FlowChevron({
  label,
  direction = "down",
  tone = "default",
}: {
  label?: string;
  direction?: "down" | "up" | "right";
  tone?: "default" | "violet" | "cyan" | "warning";
}) {
  const toneMap: Record<string, { text: string; border: string }> = {
    default: { text: "text-muted-foreground/80", border: "border-white/20" },
    violet: { text: "text-violet", border: "border-violet/50" },
    cyan: { text: "text-cyan", border: "border-cyan/50" },
    warning: { text: "text-warning", border: "border-warning/50" },
  };
  const rotate = direction === "down" ? 90 : direction === "up" ? -90 : 0;
  const axis = direction === "right" ? "x" : "y";
  const delta = direction === "up" ? -4 : 4;

  return (
    <div className="relative flex items-center justify-center gap-2 py-0.5 pl-8">
      <motion.div
        animate={axis === "y" ? { y: [-delta / 2, delta / 2, -delta / 2] } : { x: [-delta / 2, delta / 2, -delta / 2] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className={`flex h-6 w-6 items-center justify-center rounded-full border ${toneMap[tone].border} bg-background/80 backdrop-blur-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 ${toneMap[tone].text}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </motion.div>
      {label && (
        <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${toneMap[tone].text}`}>{label}</span>
      )}
    </div>
  );
}

/* ---------- diagram ---------- */

export function ArchitectureDiagram() {
  return (
    <div className="relative flex h-full w-full flex-col gap-1.5 p-5">
      {/* ───────────── ROW 1 · Edge / Users (TOP — request entry) ───────────── */}
      <div className="relative flex items-stretch gap-3">
        <LayerLabel>Edge</LayerLabel>
        <div className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">End users · Web · Mobile</span>
            <motion.span
              className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-success"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">
            <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">TLS 1.3</span>
            <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">HTTP/3</span>
            <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">Global PoPs</span>
          </div>
        </div>
      </div>

      <FlowChevron label="HTTPS request" direction="down" />

      {/* ───────────── ROW 2 · Delivery / Apps (stretches to fill) ───────────── */}
      <div className="relative flex flex-1 items-stretch gap-3">
        <LayerLabel tone="primary">Delivery</LayerLabel>
        <div className="grid flex-1 grid-cols-2 gap-3">
          {/* Direct AEM (Headful) */}
          <div className="flex flex-col rounded-xl border border-cyan/30 bg-cyan/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan">
                Direct AEM Delivery
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/70">Adobe CDN</span>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2">
              <Node
                tone="cyan"
                icon={<Cpu className="h-4 w-4 text-cyan" />}
                title="Shop"
                subtitle="Headful · frequent updates"
                meta="/shop/* · SSR"
                className="h-full flex-col items-start gap-2"
              />
              <Node
                tone="warning"
                icon={<Cpu className="h-4 w-4 text-warning" />}
                title="B2C + Microsites"
                subtitle="Headful · author-led"
                meta="/business/* · campaigns/*"
                className="h-full flex-col items-start gap-2"
              />
            </div>
          </div>

          {/* Next.js apps (Headless) */}
          <div className="flex flex-col rounded-xl border border-violet/30 bg-violet/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-violet">
                Next.js Apps · Google Cloud Run
              </span>
              <div className="flex h-5 w-5 items-center justify-center rounded bg-black ring-1 ring-white/10">
                <img src={nextLogo} alt="Next.js" className="h-3 w-3" />
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2">
              <Node
                tone="violet"
                icon={<Cpu className="h-4 w-4 text-violet" />}
                title="Buy"
                subtitle="Headless · commerce flow"
                meta="ISR · /api/graphql"
                className="h-full flex-col items-start gap-2"
              />
              <Node
                tone="success"
                icon={<Cpu className="h-4 w-4 text-success" />}
                title="Own"
                subtitle="Headless · account UX"
                meta="Auth · personalized"
                className="h-full flex-col items-start gap-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dual connectors: headful → Dispatcher, headless → GraphQL */}
      <div className="grid grid-cols-2 gap-3 pl-8">
        <FlowChevron label="HTML · cache hit" direction="down" tone="cyan" />
        <FlowChevron label="GraphQL · JSON" direction="down" tone="violet" />
      </div>

      {/* ───────────── ROW 3 · AEMaaCS Platform ───────────── */}
      <div className="relative flex items-stretch gap-3">
        <LayerLabel tone="violet">Platform</LayerLabel>
        <div className="relative flex-1 rounded-xl border border-violet/40 bg-violet/[0.05] p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-violet" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet">
                Adobe Experience Manager · Cloud Service
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
              <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">Auto-scale</span>
              <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">Adobe CDN</span>
            </div>
          </div>

          {/* Dispatcher → Publisher (Publisher holds all artifacts) */}
          <div className="flex items-stretch gap-3">
            {/* Dispatcher gateway */}
            <div className="flex w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-cyan/[0.08] p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/[0.06] ring-1 ring-white/10">
                <ShieldCheck className="h-5 w-5 text-cyan" />
              </div>
              <div className="text-center leading-tight">
                <div className="text-sm font-semibold text-foreground">Dispatcher</div>
                <div className="text-xs text-muted-foreground">Reverse proxy</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-cyan/80">Cache · WAF</div>
              </div>
            </div>

            {/* Animated chevron — consistent with other flow arrows */}
            <div className="flex shrink-0 items-center">
              <FlowChevron direction="right" tone="violet" />
            </div>

            {/* Publisher containing all artifacts */}
            <div className="flex flex-1 flex-col rounded-lg border-2 border-violet/50 bg-violet/[0.06] p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-violet" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet">
                    Publisher
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  HTL · Sling · Headful + Headless
                </span>
              </div>
              <div className="grid flex-1 grid-cols-5 gap-2">
                <Node
                  tone="violet"
                  icon={<Layers className="h-4 w-4 text-violet" />}
                  title="Pages"
                  meta="HTML · SSR"
                />
                <Node
                  tone="violet"
                  icon={<ImageIcon className="h-4 w-4 text-violet" />}
                  title="Assets"
                  meta="DAM · binaries"
                />
                <Node
                  tone="violet"
                  icon={<FileText className="h-4 w-4 text-violet" />}
                  title="Content Fragments"
                  meta="Structured JSON"
                />
                <Node
                  tone="violet"
                  icon={<Boxes className="h-4 w-4 text-violet" />}
                  title="Experience Fragments"
                  meta="Reusable HTML"
                />
                <Node
                  tone="violet"
                  icon={<Workflow className="h-4 w-4 text-violet" />}
                  title="GraphQL Endpoint"
                  meta="Persisted queries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlowChevron label="Publish replication" direction="up" tone="warning" />

      {/* ───────────── ROW 4 · Authoring (BOTTOM — feeds the platform) ───────────── */}
      <div className="relative flex items-stretch gap-3">
        <LayerLabel tone="warning">Authoring</LayerLabel>
        <div className="flex flex-1 items-stretch gap-3 rounded-xl border border-warning/30 bg-warning/[0.05] p-3">
          {/* Authors chip */}
          <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-warning/40 bg-warning/[0.08] px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.06] ring-1 ring-white/10">
              <Users className="h-4 w-4 text-warning" />
            </div>
            <div className="text-center leading-tight">
              <div className="text-[12px] font-semibold text-foreground">200+ Authors</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">SSO · RBAC</div>
            </div>
          </div>

          {/* Author Tier with 4 pillars */}
          <div className="flex flex-1 flex-col rounded-lg border border-warning/40 bg-warning/[0.04] p-2.5">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <FileCode2 className="h-3 w-3 text-warning" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-warning">
                  AEM Author Tier
                </span>
              </div>
              <span className="font-mono text-[9px] text-muted-foreground/70">Edit UI · Workflows · OAuth</span>
            </div>
            <div className="grid flex-1 grid-cols-4 gap-2">
              <Node
                tone="warning"
                icon={<Layers className="h-3.5 w-3.5 text-warning" />}
                title="Site Authoring"
                meta="Pages · Templates"
              />
              <Node
                tone="warning"
                icon={<FileText className="h-3.5 w-3.5 text-warning" />}
                title="Content Fragments"
                meta="Models · i18n"
              />
              <Node
                tone="warning"
                icon={<Boxes className="h-3.5 w-3.5 text-warning" />}
                title="Experience Fragments"
                meta="Reusable blocks"
              />
              <Node
                tone="warning"
                icon={<ImageIcon className="h-3.5 w-3.5 text-warning" />}
                title="Assets (DAM)"
                meta="Renditions · Smart Imaging"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
