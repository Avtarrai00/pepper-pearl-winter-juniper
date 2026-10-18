import { about, profile } from "@/config/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-screen-xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading index="02" eyebrow="About" title={about.heading} />
          <div className="mt-8 max-w-xl space-y-5 text-lg text-muted">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal>
            <aside className="rounded-3xl border border-line bg-surface p-6">
              {profile.portraitSrc ? (
                <img
                  src={profile.portraitSrc}
                  alt=""
                  className="mb-6 aspect-[4/5] w-full rounded-2xl object-cover"
                />
              ) : null}
              <p className="font-mono text-xs tracking-widest text-accent">SIGNAL</p>
              <p className="mt-4 font-display text-3xl text-fg">A practice of making things legible.</p>
              <p className="mt-4 text-muted">
                The same questions show up in every study: what is the system doing, and what should a person still decide?
              </p>
              <ul className="mt-6 space-y-2">
                {about.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-3 text-sm text-fg">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {interest}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-12">
          {about.principles.map((principle) => (
            <Reveal key={principle.index}>
              <article className="h-full rounded-3xl border border-line bg-bg-2 p-6">
                <p className="font-mono text-xs tracking-widest text-accent">{principle.index}</p>
                <h3 className="mt-4 text-2xl text-fg">{principle.title}</h3>
                <p className="mt-3 text-muted">{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
