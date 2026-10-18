import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { isHttpUrl, projects, type Project } from "@/config/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

function External({ href, children }: { href: string; children: string }) {
  if (!isHttpUrl(href)) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-muted hover:text-fg">
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-accent uppercase">{project.category}</p>
      <h3 className="mt-3 text-3xl text-fg sm:text-4xl">{project.title}</h3>
      <p className="mt-4 text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
        View case study
        <ArrowUpRight className="arrow-nudge size-4" aria-hidden="true" />
      </p>
    </div>
  );
}

function Media({ project }: { project: Project }) {
  return (
    <div className="project-frame overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="project-media aspect-video">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1792}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function Featured({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-12">
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className={cn("group block lg:col-span-7", flip && "lg:col-start-6")}
        >
          <Media project={project} />
        </Link>
        <div className={cn("lg:col-span-5", flip && "lg:col-start-1 lg:row-start-1")}>
          <p className="font-mono text-xs text-muted">{project.status}</p>
          <Link to="/work/$slug" params={{ slug: project.slug }} className="group mt-3 block">
            <ProjectBody project={project} />
          </Link>
          <div className="mt-4 flex flex-wrap gap-4">
            <External href={project.demoUrl}>Live demo</External>
            <External href={project.sourceUrl}>Source</External>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Supporting({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="flex h-full flex-col">
        <Link to="/work/$slug" params={{ slug: project.slug }} className="group block">
          <Media project={project} />
          <div className="mt-5">
            <p className="font-mono text-xs text-muted">{project.status}</p>
            <ProjectBody project={project} />
          </div>
        </Link>
        <div className="mt-4 flex flex-wrap gap-4">
          <External href={project.demoUrl}>Live demo</External>
          <External href={project.sourceUrl}>Source</External>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="Selected projects"
          title="Studies in intelligence, software, and interface."
          lede="These are editable concept studies. A case study opens only when there is something to read. Live and source links appear only when a real URL is set."
        />
        <div className="mt-16 space-y-20">
          {featured.map((project, index) => (
            <Featured key={project.slug} project={project} flip={index % 2 === 1} />
          ))}
        </div>
        {supporting.length > 0 ? (
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {supporting.map((project) => (
              <Supporting key={project.slug} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
