import { Users2, MessagesSquare, Eye, HeartHandshake } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";

const pillars = [
  {
    icon: Users2,
    title: "Reorganized teams",
    text: "Restructured squads across multiple projects to match the new platform model.",
  },
  {
    icon: MessagesSquare,
    title: "Collaboration forums",
    text: "Established engineering, DevOps, and program-level syncs for shared decision-making.",
  },
  {
    icon: Eye,
    title: "Shared visibility",
    text: "Unified Jira workflows and centralized documentation for cross-team transparency.",
  },
  {
    icon: HeartHandshake,
    title: "Morale & stability",
    text: "Protected team focus during organizational and technical transitions.",
  },
];

export default function TeamSlide() {
  return (
    <SlideLayout eyebrow="People" title="Team & Culture">
      <div className="grid h-[620px] grid-cols-12 gap-8">
        <div className="col-span-7 grid grid-cols-2 gap-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-strong p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xl font-semibold">{title}</div>
              <div className="mt-2 text-base leading-snug text-muted-foreground">{text}</div>
            </div>
          ))}
        </div>

        <div className="col-span-5 glass-strong relative flex flex-col justify-between overflow-hidden p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Culture in practice</div>
            <p className="mt-4 text-2xl font-medium leading-snug text-gradient-accent">
              "Stable teams ship transformations. Reorganization without trust slows everything down."
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">Authors</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">Developers</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">DevOps</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">Stakeholders</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">Testers & Analytics</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-[11px] leading-tight text-muted-foreground">Release & Program Mgrs</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
