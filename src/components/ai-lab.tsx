import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { lab } from "@/config/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

function point(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: 50 + Math.cos(radians) * radius,
    y: 50 + Math.sin(radians) * radius,
  };
}

export function AiLab() {
  const [selected, setSelected] = useState(lab.nodes[0]?.id ?? "");
  const reduce = useReducedMotion();
  const active = lab.nodes.find((node) => node.id === selected) ?? lab.nodes[0];

  return (
    <section id="lab" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="05" eyebrow="AI Lab" title={lab.kicker} lede={lab.lede} />
          <p className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase">
            <span className="status-pip" aria-hidden="true" />
            {lab.modeLabel}
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-line bg-bg-2">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {lab.nodes.map((node) => {
                  const spot = point(node.angle, 32);
                  const on = node.id === active?.id;
                  return (
                    <line
                      key={node.id}
                      x1="50"
                      y1="50"
                      x2={spot.x}
                      y2={spot.y}
                      stroke="currentColor"
                      strokeWidth={on ? 0.45 : 0.28}
                      className={cn(on ? "text-accent" : "text-muted", reduce ? undefined : "lab-flow")}
                    />
                  );
                })}
                <circle cx="50" cy="50" r="3.4" className="fill-accent" />
                <circle cx="50" cy="50" r="6.5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
              </svg>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs tracking-widest text-fg">
                LAB
              </p>
              <div className="absolute inset-0 hidden lg:block">
                {lab.nodes.map((node) => {
                  const spot = point(node.angle, 32);
                  return (
                    <button
                      key={node.id}
                      type="button"
                      aria-pressed={node.id === active?.id}
                      onClick={() => setSelected(node.id)}
                      className={cn(
                        "absolute max-w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-left text-xs",
                        node.id === active?.id
                          ? "border-accent bg-surface text-fg"
                          : "border-line bg-bg/80 text-muted hover:text-fg",
                      )}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    >
                      {node.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 lg:hidden" role="group" aria-label="Lab topics">
              {lab.nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  aria-pressed={node.id === active?.id}
                  onClick={() => setSelected(node.id)}
                  className={cn(
                    "min-h-11 rounded-full border px-4 text-sm",
                    node.id === active?.id ? "border-accent bg-surface text-fg" : "border-line text-muted",
                  )}
                >
                  {node.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait" initial={false}>
              {active ? (
                <motion.article
                  key={active.id}
                  aria-live="polite"
                  className="rounded-3xl border border-line bg-surface p-6 md:p-8"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <p className="font-mono text-xs tracking-widest text-accent uppercase">Selected node</p>
                  <h3 className="mt-3 text-3xl text-fg">{active.label}</h3>
                  <p className="mt-4 text-muted">{active.summary}</p>
                  <ol className="mt-6 space-y-3">
                    {active.workflow.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm text-fg">
                        <span className="font-mono text-xs text-accent">0{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.article>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
