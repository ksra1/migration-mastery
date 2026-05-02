import { useEffect, useState, type ReactNode } from "react";
import { Lock } from "lucide-react";

const STORAGE_KEY = "deck-unlocked";
const PASSWORD = "#telus";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
      <form onSubmit={submit} className="glass-strong w-full max-w-sm p-8 shadow-[var(--shadow-elegant)]">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Protected</div>
            <div className="text-lg font-semibold">Enter password</div>
          </div>
        </div>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          className="w-full rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-base outline-none transition focus:border-primary"
          placeholder="Password"
          maxLength={64}
        />
        {error && <div className="mt-2 text-xs text-destructive">Incorrect password.</div>}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
