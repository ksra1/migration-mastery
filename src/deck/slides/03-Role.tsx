import { Compass, Users, GitMerge, Target } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";

const pillars = [
  {
    icon: Compass,
    title: "Technical decision-making",
    text: "Owned architecture choices and delivery execution end-to-end.",
  },
  {
    icon: Users,
    title: "Distributed team leadership",
    text: "Led globally distributed engineers across multiple applications.",
  },
  {
    icon: GitMerge,
    title: "Cross-team unblocking",
    text: "Resolved architectural conflicts and dependencies between teams.",
  },
  {
    icon: Target,
    title: "Stakeholder alignment",
    text: "Partnered with program leadership on scope, risk, and timelines.",
  },
];

export default function RoleSlide() {
  return (
    <SlideLayout eyebrow="Role" title="My Role & Leadership">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5">
          <div className="glass-strong p-8" style={{ boxShadow: "var(--shadow-glow)" }}>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Position
            </div>
            <div className="mt-3 text-4xl font-semibold leading-tight">
              Senior Engineering Manager
            </div>
            <div className="mt-2 text-lg text-muted-foreground">
              Program-level ownership across 4 stacks, 30+ apps
            </div>
          </div>

          <div className="mt-8 border-l-2 border-primary/60 pl-6">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Highlight
            </div>
            <p className="mt-3 text-3xl font-medium leading-snug text-gradient-accent">
              "Drove alignment between engineering execution and business goals while
              maintaining team stability through large-scale transformation."
            </p>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-strong p-7 transition hover:border-primary/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xl font-semibold">{title}</div>
              <div className="mt-2 text-base leading-snug text-muted-foreground">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
