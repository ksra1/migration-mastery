import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  X,
} from "lucide-react";
import { SLIDES } from "./slides";
import { PasswordGate } from "./PasswordGate";

function useDeckScale() {
  useLayoutEffect(() => {
    const apply = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      const s = Math.min(sx, sy);
      document.documentElement.style.setProperty("--deck-scale", String(s));
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
}

export function DeckShell({ slideId }: { slideId: number }) {
  const navigate = useNavigate();
  useDeckScale();
  const idx = Math.max(0, Math.min(SLIDES.length - 1, slideId - 1));
  const slide = SLIDES[idx];
  const [showGrid, setShowGrid] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);
  const hideTimer = useRef<number | null>(null);

  const goto = useCallback(
    (n: number) => {
      const target = Math.max(1, Math.min(SLIDES.length, n));
      navigate({ to: "/$slideId", params: { slideId: String(target) } });
    },
    [navigate]
  );

  const next = useCallback(() => goto(idx + 2), [goto, idx]);
  const prev = useCallback(() => goto(idx), [goto, idx]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape" || e.key === "g" || e.key === "G") {
          setShowGrid(false);
          e.preventDefault();
        }
        return;
      }
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        next();
        e.preventDefault();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prev();
        e.preventDefault();
      } else if (e.key === "Home") {
        goto(1);
      } else if (e.key === "End") {
        goto(SLIDES.length);
      } else if (e.key === "g" || e.key === "G") {
        setShowGrid(true);
      } else if (e.key === "f" || e.key === "F") {
        toggleFs();
      } else if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goto, showGrid]);

  // Fullscreen tracking
  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFs = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Auto-hide chrome in fullscreen
  useEffect(() => {
    if (!isFs) {
      setChromeVisible(true);
      return;
    }
    const onMove = () => {
      setChromeVisible(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setChromeVisible(false), 2200);
    };
    onMove();
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [isFs]);

  const Comp = slide.Component;

  return (
    <div className="deck-stage-wrapper">
      <div className="deck-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Comp />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top-left label */}
      <motion.div
        animate={{ opacity: chromeVisible ? 1 : 0 }}
        className="pointer-events-none fixed left-6 top-3 z-50 flex items-center gap-3"
      >
        <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {slide.eyebrow}
        </div>
      </motion.div>

      {/* Top-right: progress dots */}
      <motion.div
        animate={{ opacity: chromeVisible ? 1 : 0 }}
        className="fixed right-6 top-3 z-50 flex items-center gap-1.5"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${s.id}`}
            onClick={() => goto(s.id)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx
                ? "w-8 bg-primary shadow-[0_0_8px_var(--primary)]"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </motion.div>

      {/* Bottom pill */}
      <motion.div
        animate={{ opacity: chromeVisible ? 1 : 0, y: chromeVisible ? 0 : 12 }}
        className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="glass-strong flex items-center gap-1 px-2 py-2 text-sm shadow-[var(--shadow-elegant)]">
          <button
            onClick={prev}
            disabled={idx === 0}
            className="rounded-lg p-2 transition hover:bg-white/10 disabled:opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="px-3 font-mono text-xs tabular-nums text-muted-foreground">
            <span className="text-foreground">{String(idx + 1).padStart(2, "0")}</span>
            <span className="mx-1.5 text-white/20">/</span>
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>
          <button
            onClick={next}
            disabled={idx === SLIDES.length - 1}
            className="rounded-lg p-2 transition hover:bg-white/10 disabled:opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="mx-1 h-5 w-px bg-white/10" />
          <button
            onClick={() => setShowGrid(true)}
            className="rounded-lg p-2 transition hover:bg-white/10"
            aria-label="Grid overview"
            title="Overview (G)"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={toggleFs}
            className="rounded-lg p-2 transition hover:bg-white/10"
            aria-label="Toggle fullscreen"
            title="Present (F)"
          >
            {isFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      {/* Grid overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-8 py-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Overview
                </div>
                <div className="mt-1 text-2xl font-semibold">All slides</div>
              </div>
              <button
                onClick={() => setShowGrid(false)}
                className="glass rounded-full p-3 transition hover:bg-white/10"
                aria-label="Close overview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 pb-12">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      goto(s.id);
                      setShowGrid(false);
                    }}
                    className={`group relative aspect-video overflow-hidden rounded-2xl border text-left transition ${
                      i === idx
                        ? "border-primary shadow-[var(--shadow-glow)]"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 origin-center"
                      style={{
                        width: 1920,
                        height: 1080,
                        transform: "translate(-50%, -50%) scale(0.18)",
                      }}
                    >
                      <div className="h-full w-full" style={{ background: "var(--gradient-hero)" }}>
                        <s.Component />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent p-3">
                      <span className="text-xs font-medium">{s.title}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {String(s.id).padStart(2, "0")}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DeckRoute() {
  const { slideId } = useParams({ from: "/$slideId" });
  const n = parseInt(slideId, 10);
  return (
    <PasswordGate>
      <DeckShell slideId={Number.isFinite(n) ? n : 1} />
    </PasswordGate>
  );
}
