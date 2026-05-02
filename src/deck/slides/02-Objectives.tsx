import { Layers, TrendingDown, Code2, Settings, Check, X } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";

const objectives = [
  { icon: Layers, title: "Consolidate", text: "Unify fragmented systems into a single cloud platform" },
  { icon: TrendingDown, title: "Reduce cost", text: "Lower infrastructure & DevOps operating overhead" },
  { icon: Code2, title: "Modernize", text: "Enable headless architecture for omnichannel delivery" },
  { icon: Settings, title: "Simplify", text: "Streamline user management and operational workflows" },
];

const before = [
  "Multiple independent stacks",
  "Nightly downtime for maintenance",
  "High operational overhead",
  "Inconsistent governance",
];
const after = [
  "Unified, cloud-native platform",
  "Zero downtime authoring",
  "Streamlined operations",
  "Centralized governance & access",
];

export default function ObjectivesSlide() {
  return (
    <SlideLayout eyebrow="Why" title="Business Objectives & Value">
      <div className="grid h-[640px] grid-cols-12 gap-8">
        {/* Objectives left */}
        <div className="col-span-7 grid grid-cols-2 gap-5">
          {objectives.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-strong flex flex-col gap-4 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-semibold">{title}</div>
                <div className="mt-2 text-base leading-snug text-muted-foreground">{text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After right */}
        <div className="col-span-5 flex flex-col gap-5">
          <div className="glass-strong flex-1 p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                <X className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Before · On-Prem
              </div>
            </div>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong flex-1 p-7" style={{ boxShadow: "var(--shadow-glow)" }}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success">
                <Check className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-success">
                After · Cloud
              </div>
            </div>
            <ul className="space-y-3">
              {after.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-foreground">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-success" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
