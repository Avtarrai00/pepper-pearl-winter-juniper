import { useEffect, useRef, useState, type ComponentType, type PointerEvent } from "react";
import { profile } from "@/config/portfolio";
import { heroPointer } from "@/components/hero-pointer";
import { VisualBoundary } from "@/components/visual-boundary";
import { buttonStyles } from "@/components/ui/button";

function CssCore() {
  return (
    <div className="css-core" aria-hidden="true">
      <span className="css-ring css-ring-b" />
      <span className="css-ring" />
      <span className="css-gem" />
    </div>
  );
}

function Portrait() {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    let frameId = 0;
    const paint = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const x = reduce ? 0 : heroPointer.x * 12;
      const y = reduce ? 0 : heroPointer.y * 10 - heroPointer.scroll * 16;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frameId = requestAnimationFrame(paint);
    };
    frameId = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={frame} data-portrait className="will-change-transform">
      <figure className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
        {profile.portraitSrc ? (
          <img
            src={profile.portraitSrc}
            alt={profile.portraitAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-6">
            <p className="font-mono text-xs tracking-widest text-muted">PORTRAIT</p>
            <p className="font-display text-7xl text-fg" aria-hidden="true">
              A
            </p>
            <figcaption className="max-w-xs text-sm text-muted">
              Photo not added yet. The frame is ready for a portrait.
            </figcaption>
          </div>
        )}
      </figure>
    </div>
  );
}

function HeroStage() {
  const [CanvasView, setCanvasView] = useState<ComponentType<{ reduced: boolean }> | null>(null);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(motion.matches);
    apply();
    motion.addEventListener("change", apply);

    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowPower = Boolean(saveData || (memory !== undefined && memory > 0 && memory <= 2));
    let cancelled = false;
    if (!lowPower) {
      void import("@/components/hero-canvas").then((mod) => {
        if (cancelled) return;
        if (!mod.canUseWebgl()) {
          setFailed(true);
          return;
        }
        setCanvasView(() => mod.HeroCanvas);
      }).catch(() => {
        if (!cancelled) setFailed(true);
      });
    } else {
      setFailed(true);
    }

    const onScroll = () => {
      heroPointer.scroll = Math.min(window.scrollY / 700, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelled = true;
      motion.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative h-[26rem] sm:h-[30rem] lg:h-[40rem]">
      <div className="absolute inset-0">
        {failed || !CanvasView ? <CssCore /> : null}
        {CanvasView && !failed ? (
          <VisualBoundary fallback={<CssCore />}>
            <CanvasView reduced={reduced} />
          </VisualBoundary>
        ) : null}
      </div>
      <p className="absolute top-2 left-0 font-mono text-xs tracking-widest text-muted">
        CORE · 01
        <span className="mt-1 block text-fg/80">Computational object</span>
      </p>
      <div className="absolute inset-x-0 bottom-0 mx-auto w-[15.5rem] sm:w-[17.5rem] lg:inset-x-auto lg:right-0 lg:bottom-6 lg:w-72">
        <Portrait />
      </div>
    </div>
  );
}

const meta = [
  profile.location ? `Based in ${profile.location}.` : "",
  profile.interestsLine,
  profile.statusLine,
  profile.availability,
].filter(Boolean);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    heroPointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    heroPointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        heroPointer.x = 0;
        heroPointer.y = 0;
      }}
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-screen-xl gap-8 px-5 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <p className="rise font-mono text-xs tracking-widest text-muted uppercase">{profile.eyebrow}</p>
          <h1 className="rise rise-late mt-5 max-w-3xl text-4xl text-fg sm:text-5xl xl:text-6xl">
            <span className="block">{profile.headlineLead}</span>
            <span className="headline-accent mt-1 block">{profile.headlineAccent}</span>
          </h1>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <HeroStage />
        </div>

        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <p className="rise rise-later max-w-xl text-lg text-muted">{profile.summary}</p>
          <div className="rise rise-last mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={buttonStyles()}>
              Explore My Projects
            </a>
            <a href="#contact" className={buttonStyles({ tone: "quiet" })}>
              Let's Connect
            </a>
          </div>
          {meta.length > 0 ? (
            <ul className="mt-8 space-y-2">
              {meta.map((line) => (
                <li key={line} className="font-mono text-xs tracking-wide text-muted">
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
          <a href="#about" className="mt-10 inline-flex items-center gap-3 text-xs tracking-widest text-muted uppercase">
            <span className="scroll-line" aria-hidden="true" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
