import { Compass, GraduationCap, Hammer, type LucideIcon } from "lucide-react";
import { explorations } from "@/config/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = {
  building: Hammer,
  exploring: Compass,
  learning: GraduationCap,
};

export function Explorations() {
  const cards = explorations.filter((card) => card.title && card.body);
  if (cards.length === 0) return null;

  return (
    <section id="now" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow="Now"
          title="Current explorations."
          lede="What is being built, studied, and turned over. These notes are edited by hand — they are not a live status feed."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = icons[card.id] ?? Compass;
            return (
              <Reveal key={card.id}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-6">
                  <span className="absolute inset-x-0 top-0 h-px bg-accent" aria-hidden="true" />
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <span className="font-mono text-xs tracking-widest text-muted uppercase">{card.status}</span>
                  </div>
                  <p className="mt-8 font-mono text-xs tracking-widest text-accent uppercase">{card.kicker}</p>
                  <h3 className="mt-3 text-2xl text-fg">{card.title}</h3>
                  <p className="mt-3 text-muted">{card.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
