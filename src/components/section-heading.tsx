import { Reveal } from "@/components/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <header className="max-w-3xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          {index} / {eyebrow}
        </p>
        <h2 className="mt-4 text-4xl text-fg sm:text-5xl">{title}</h2>
        {lede ? <p className="mt-5 max-w-2xl text-lg text-muted">{lede}</p> : null}
      </header>
    </Reveal>
  );
}
