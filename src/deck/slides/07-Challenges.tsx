import { Layers3, CalendarClock, CloudOff } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";

const items = [
  {
    icon: Layers3,
    bar: "bg-violet",
    iconBg: "bg-violet/15 text-violet",
    label: "text-violet",
    challenge: "Headless vs Traditional AEM",
    detail: "Teams resisted moving away from AEM-driven UI; concern around developer dependency.",
    resolution:
      "Built a proof-of-concept demonstrating real-time content updates via headless — converted skeptics with working software.",
  },
  {
    icon: CalendarClock,
    bar: "bg-cyan",
    iconBg: "bg-cyan/15 text-cyan",
    label: "text-cyan",
    challenge: "Migration Timing Constraints",
    detail: "Business-critical campaigns blocked standard migration windows.",
    resolution:
      "Planned weekend migrations, ran team training drills, and implemented automated rollback strategies.",
  },
  {
    icon: CloudOff,
    bar: "bg-warning",
    iconBg: "bg-warning/15 text-warning",
    label: "text-warning",
    challenge: "Cloud Platform Constraints",
    detail: "Slower pipelines and a unified deployment model reduced release flexibility.",
    resolution:
      "Adapted release strategy and DevOps processes to align with cloud limitations — fewer, more reliable releases.",
  },
];

export default function ChallengesSlide() {
  return (
    <SlideLayout eyebrow="Decisions" title="Key Challenges & Decisions">
      <div className="grid grid-cols-3 gap-6">
        {items.map(({ icon: Icon, bar, iconBg, label, challenge, detail, resolution }) => (
          <div key={challenge} className="glass-strong overflow-hidden">
            <div className={`h-1 w-full ${bar}`} />
            <div className="p-7">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-2xl font-semibold leading-tight">{challenge}</div>
              <div className="mt-3 text-base leading-snug text-muted-foreground">{detail}</div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className={`text-xs font-medium uppercase tracking-[0.2em] ${label}`}>
                  Resolution
                </div>
                <div className="mt-2 text-base leading-snug text-foreground">{resolution}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
