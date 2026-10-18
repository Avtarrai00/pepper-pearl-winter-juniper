import { isSafeHref, journey, profile } from "@/config/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { AnchorButton } from "@/components/ui/button";

export function Journey() {
  const entries = journey.filter((entry) => entry.title && entry.body);
  if (entries.length === 0 && !isSafeHref(profile.resumeUrl)) return null;

  return (
    <section id="journey" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="06"
            eyebrow="Journey"
            title="Always building. Always learning."
            lede="A short record of the work in motion. Empty chapters stay hidden."
          />
          {isSafeHref(profile.resumeUrl) ? (
            <AnchorButton href={profile.resumeUrl} tone="quiet">
              Résumé
            </AnchorButton>
          ) : null}
        </div>
        {entries.length > 0 ? (
          <ol className="mt-14 max-w-3xl border-l border-line">
            {entries.map((entry) => (
              <li key={entry.id} className="reveal relative pb-12 pl-8 last:pb-0">
                <span className="absolute top-1.5 -left-1 size-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-mono text-xs tracking-widest text-accent uppercase">
                  {entry.date} · {entry.kind}
                </p>
                <h3 className="mt-3 text-2xl text-fg">{entry.title}</h3>
                <p className="mt-3 text-muted">{entry.body}</p>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  );
}
