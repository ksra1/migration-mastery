import { Cloud, Boxes, Layers, ShieldCheck } from "lucide-react";
import { SlideLayout, DiagramSlot, Pill } from "../components/SlideLayout";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";

const groups = [
  {
    icon: Cloud,
    title: "AEM as a Cloud Service",
    items: ["Author + Publish + built-in CDN", "Single platform, two delivery modes"],
  },
  {
    icon: Layers,
    title: "Headful (AEM Sites)",
    items: ["Shop — frequent content changes", "B2C sites + microsites — author-led"],
  },
  {
    icon: Boxes,
    title: "Headless (Next.js + GraphQL)",
    items: ["Buy — app-like commerce flow", "Own — personalized account UX", "Hosted on Google Cloud Run"],
  },
  {
    icon: ShieldCheck,
    title: "Why this split",
    items: ["Match delivery model to UX needs", "Reuse one content backbone", "Authors stay in AEM regardless of channel"],
  },
];

export default function ArchitectureSlide() {
  return (
    <SlideLayout eyebrow="Technical" title="Architecture Overview">
      <div className="grid h-[760px] grid-cols-12 gap-6">
        <div className="col-span-9">
          <DiagramSlot label="High-Level Architecture">
            <ArchitectureDiagram />
          </DiagramSlot>
        </div>
        <div className="col-span-3 flex flex-col gap-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="glass p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold">{title}</div>
              </div>
              <ul className="mt-2 space-y-1">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Qualities</div>
        <Pill tone="violet">Scalable</Pill>
        <Pill tone="cyan">Modular</Pill>
        <Pill tone="success">Cloud-native</Pill>
        <Pill tone="warning">Secure</Pill>
      </div>
    </SlideLayout>
  );
}
