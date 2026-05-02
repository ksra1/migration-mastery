import { Quote } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";

const lessons = [
  {
    t: "Early alignment wins",
    d: "In large transformations, alignment in the first weeks compounds for the entire program.",
  },
  {
    t: "POCs drive decisions",
    d: "A working proof-of-concept ends architecture debates faster than any document.",
  },
  {
    t: "Cloud is process, not just code",
    d: "Migration succeeds when teams adapt their processes to platform constraints.",
  },
  {
    t: "Communication is the program",
    d: "Consistent, structured updates kept 245+ people moving in the same direction.",
  },
];

export default function LessonsSlide() {
  return (
    <SlideLayout eyebrow="Reflection" title="Lessons Learned">
      <div className="grid grid-cols-2 gap-6">
        {lessons.map(({ t, d }) => (
          <div key={t} className="glass-strong p-8">
            <Quote className="h-6 w-6 text-primary/60" />
            <div className="mt-4 text-2xl font-semibold leading-tight">{t}</div>
            <div className="mt-3 text-lg leading-snug text-muted-foreground">{d}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-end justify-between border-t border-white/10 pt-8">
        <div>
          <div className="text-3xl font-medium text-gradient-accent">Thank you.</div>
          <div className="mt-1 text-base text-muted-foreground">Happy to dive into any section in Q&A.</div>
        </div>
        <div className="text-right text-sm text-muted-foreground">
          <div className="font-medium text-foreground">Senior Engineering Manager</div>
          <div>Enterprise AEM Cloud Migration · 2024 — 2025</div>
        </div>
      </div>
    </SlideLayout>
  );
}
