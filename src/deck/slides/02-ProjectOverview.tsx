import { motion } from "framer-motion";
import { StatTile } from "../components/SlideLayout";

export default function ProjectOverviewSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden px-32 pt-32 pb-24 deck-grid-bg flex flex-col justify-center">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Project Overview
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-[112px] font-bold leading-[1.05] tracking-tight text-gradient pb-4"
      >
        Enterprise AEM
        <br />
        Cloud Migration
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-8 max-w-3xl text-2xl leading-snug text-muted-foreground"
      >
        Consolidating <span className="text-foreground">4 on-prem stacks</span> into a
        unified, headless cloud platform — modernizing architecture, reducing operational
        overhead, and enabling scalable content delivery.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-14 grid grid-cols-4 gap-5"
      >
        <StatTile value="−75%" label="Infrastructure cost" sub="Annual run rate" accent="violet" />
        <StatTile value="100%" label="Migration completion" sub="All workloads on cloud" accent="cyan" />
        <StatTile value="6" label="DevOps team" sub="Optimized for cloud" accent="success" />
        <StatTile value="245+" label="People aligned" sub="Authors · Devs · Stakeholders" accent="warning" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="h-px w-12 bg-white/20" />
          Senior Engineering Manager
        </div>
        <div>Q4 2024 — Q4 2025</div>
      </motion.div>
    </div>
  );
}
