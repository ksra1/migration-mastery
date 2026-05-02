import { motion } from "framer-motion";
const telusLogo = "/brand/telus-digital.svg";

const presentedTo = ["A", "B", "C"];

export default function HeroSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden px-32 py-24 deck-grid-bg flex flex-col">
      {/* glow orbs — slow drift */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full bg-primary/25 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-10 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.78_0.16_220/0.12),transparent_60%)]" />

      {/* Top: Telus Digital logo */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="inline-flex rounded-2xl bg-white/95 px-5 py-3 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
          <img src={telusLogo} alt="Telus Digital" className="h-10 w-auto" />
        </div>
      </motion.div>

      {/* Center: Case Study */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Case Study
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-[120px] font-bold leading-[1.05] tracking-tight text-gradient pb-4"
        >
          Engineering
          <br />
          Manager Interview
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 text-2xl text-muted-foreground"
        >
          Enterprise AEM Cloud Migration · Project Overview
        </motion.p>
      </div>

      {/* Bottom: presented by / to */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 grid grid-cols-2 gap-12"
      >
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Presented by
          </div>
          <div className="mt-3 text-3xl font-semibold text-foreground">
            Sravan Kollapudi
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Senior Engineering Manager
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Presented to
          </div>
          <div className="mt-3 flex flex-col gap-1">
            {presentedTo.map((name) => (
              <div key={name} className="text-2xl font-medium text-foreground/90">
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
