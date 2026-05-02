import { SlideLayout, DiagramSlot, Pill } from "../components/SlideLayout";
import { PipelineDiagram } from "../components/PipelineDiagram";

export default function PipelinesSlide() {
  return (
    <SlideLayout eyebrow="Delivery" title="Monorepo approach using Adobe Cloud Pipelines">
      <div className="grid h-[720px] grid-cols-12 gap-8">
        <div className="col-span-9">
          <DiagramSlot label="Pipeline Flow">
            <PipelineDiagram />
          </DiagramSlot>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div className="glass p-6">
            <div className="text-2xl font-semibold">Monorepo via submodules</div>
            <p className="mt-3 text-lg text-muted-foreground leading-snug">
              Code from per-stack repos is composed into one deployable monorepo using GitHub submodules — teams keep
              their repos, the platform gets a single artifact.
            </p>
          </div>
          <div className="glass p-6">
            <div className="text-2xl font-semibold">Adobe Cloud Manager</div>
            <p className="mt-3 text-lg text-muted-foreground leading-snug">
              One pipeline runs build, code-quality and security gates, then promotes to Dev → Stage → Prod on AEMaaCS
              with zero-downtime deploys.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Pill tone="violet">1 pipeline</Pill>
            <Pill tone="cyan">Consistent gates</Pill>
            <Pill tone="success">Zero-downtime</Pill>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
