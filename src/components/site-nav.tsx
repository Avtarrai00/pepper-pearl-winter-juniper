import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { nav, profile } from "@/config/portfolio";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function sectionHref(id: string) {
  return `/#${id}`;
}

export function SiteNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spy, setSpy] = useState("home");
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const reduce = useReducedMotion();
  const active = current ?? spy;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (current) return;
      const marker = window.scrollY + 120;
      let next: string = nav[0].id;
      for (const item of nav) {
        const node = document.getElementById(item.id);
        if (node && node.offsetTop <= marker) next = item.id;
      }
      setSpy(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [current]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = panelRef.current;
    const focusable = () =>
      root ? Array.from(root.querySelectorAll<HTMLElement>("a, button")) : [];
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="relative mx-auto max-w-screen-xl">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-colors duration-200 sm:px-4",
            scrolled || open
              ? "border-line bg-bg/75 backdrop-blur-md"
              : "border-transparent bg-transparent",
          )}
        >
          <a href={sectionHref("home")} className="flex min-h-11 items-center gap-2 px-2" onClick={() => setOpen(false)}>
            <span className="status-pip" aria-hidden="true" />
            <span className="font-display text-sm font-semibold tracking-widest">{profile.wordmark}</span>
          </a>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={sectionHref(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm text-muted transition-colors hover:text-fg",
                  active === item.id && "text-fg",
                )}
              >
                {item.label}
                {active === item.id ? (
                  <span className="absolute inset-x-3 bottom-1 h-px bg-accent" aria-hidden="true" />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={sectionHref("contact")} className={cn(buttonStyles({ tone: "primary" }), "hidden md:inline-flex")}>
              Let's Connect
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id={menuId}
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-line bg-bg-2/95 p-4 backdrop-blur-md lg:hidden"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {nav.map((item) => (
                  <a
                    key={item.id}
                    href={sectionHref(item.id)}
                    className="min-h-11 rounded-xl px-3 py-3 text-lg text-fg"
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={sectionHref("contact")}
                className={cn(buttonStyles({ tone: "primary" }), "mt-3 w-full")}
                onClick={() => setOpen(false)}
              >
                Let's Connect
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
