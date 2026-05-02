import { SlideLayout, DiagramSlot } from "../components/SlideLayout";
import { ProgramLandscapeDiagram } from "../components/ProgramLandscapeDiagram";

const stats = [
  { v: "4 → 1", l: "Stacks consolidated" },
  { v: "30+", l: "Applications in scope" },
  { v: "Mixed", l: "Ownership model" },
  { v: "Global", l: "Teams & stakeholders" },
];

export default function ComplexitySlide() {
  return (
    <SlideLayout eyebrow="Landscape" title="Program Complexity">
      <div className="grid h-[620px] grid-cols-12 gap-8">
        <div className="col-span-4 flex flex-col gap-5">
          {stats.map((s) => (
            <div key={s.l} className="glass-strong flex items-baseline justify-between p-6">
              <div className="text-5xl font-bold tracking-tight text-gradient-accent">{s.v}</div>
              <div className="text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="col-span-8">
          <DiagramSlot label="Program Landscape Overview">
            <ProgramLandscapeDiagram />
          </DiagramSlot>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Active teams</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Legacy apps</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Unowned components</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Multi-region authoring</span>
      </div>
    </SlideLayout>
  );
}
