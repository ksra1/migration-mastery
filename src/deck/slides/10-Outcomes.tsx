import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CountUp({ to, suffix = "", prefix = "", duration = 1.2 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return (
    <span>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function OutcomesSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden px-32 py-24 deck-grid-bg flex flex-col justify-center">
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-primary">
        Results
      </div>
      <h1 className="text-7xl font-bold tracking-tight text-gradient">Outcomes & Impact</h1>

      <div className="mt-16 grid grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="col-span-6 glass-strong p-10"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <div className="text-[160px] font-bold leading-none tracking-tighter text-gradient-accent">
            <CountUp to={75} suffix="%" />
          </div>
          <div className="mt-2 text-2xl font-medium">Infrastructure cost reduction</div>
          <div className="text-base text-muted-foreground">Annual run-rate savings</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="col-span-6 grid grid-cols-2 gap-6"
        >
          <div className="glass-strong flex flex-col justify-center p-8">
            <div className="text-7xl font-bold tracking-tight">
              <CountUp to={100} suffix="%" />
            </div>
            <div className="mt-2 text-base text-muted-foreground">Migration completion</div>
          </div>
          <div className="glass-strong flex flex-col justify-center p-8">
            <div className="text-7xl font-bold tracking-tight">14→6</div>
            <div className="mt-2 text-base text-muted-foreground">DevOps optimized</div>
          </div>
          <div className="glass-strong flex flex-col justify-center p-8">
            <div className="text-5xl font-bold tracking-tight">Zero</div>
            <div className="mt-2 text-base text-muted-foreground">Author downtime</div>
          </div>
          <div className="glass-strong flex flex-col justify-center p-8">
            <div className="text-5xl font-bold tracking-tight">Unified</div>
            <div className="mt-2 text-base text-muted-foreground">Deployment & governance</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
