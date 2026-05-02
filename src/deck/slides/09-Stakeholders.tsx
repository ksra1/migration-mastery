import { SlideLayout } from "../components/SlideLayout";
import { Radio, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";

const cadence = [
  { when: "Daily", what: "Engineering standups · blocker triage", icon: Radio, cls: "bg-violet/15 text-violet" },
  { when: "Weekly", what: "Program sync with leadership", icon: Calendar, cls: "bg-cyan/15 text-cyan" },
  { when: "Bi-weekly", what: "Risk review with business stakeholders", icon: AlertTriangle, cls: "bg-warning/15 text-warning" },
  { when: "Monthly", what: "Outcomes & roadmap checkpoint", icon: CheckCircle2, cls: "bg-success/15 text-success" },
];

export default function StakeholdersSlide() {
  return (
    <SlideLayout eyebrow="Alignment" title="Stakeholder Management">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <div className="mb-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Communication cadence
          </div>
          <div className="grid grid-rows-4 gap-4">
            {cadence.map(({ when, what, icon: Icon, cls }) => (
              <div
                key={when}
                className="glass-strong flex items-center gap-5 p-5"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${cls}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {when}
                  </div>
                  <div className="mt-1 text-lg font-medium text-foreground">{what}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 flex flex-col">
          <div className="mb-5 text-sm uppercase tracking-[0.2em] text-transparent" aria-hidden>
            .
          </div>
          <div className="grid flex-1 grid-rows-2 gap-4">
            <div className="glass-strong flex flex-col p-6">
              <div className="text-lg font-semibold">Operating principles</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />Transparent progress reporting</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />Risks raised early with mitigations</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />One source of truth for timelines</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />Clear escalation paths</li>
              </ul>
            </div>
            <div className="glass flex flex-col justify-center p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Outcome</div>
              <p className="mt-2 text-base leading-snug">
                Zero escalations made it to executive level — risks were resolved
                at the working layer through consistent, structured communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
