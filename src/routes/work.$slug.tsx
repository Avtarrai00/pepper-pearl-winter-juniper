import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getProject, isHttpUrl, projects } from "@/config/portfolio";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — Avtar` },
      { name: "description", content: loaderData?.summary ?? "" },
    ],
  }),
  component: CaseStudy,
  notFoundComponent: MissingProject,
});

function CaseStudy() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);

  return (
    <SiteFrame current="projects">
      <article className="mx-auto max-w-screen-xl px-5 pt-32 pb-24 md:px-8">
        <Link to="/" hash="projects" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-fg">
          All projects
        </Link>
        <p className="mt-8 font-mono text-xs tracking-widest text-accent uppercase">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl text-fg sm:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{project.status}</span>
          <span className="font-mono text-xs text-muted">{project.year}</span>
          {isHttpUrl(project.demoUrl) ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-fg">
              Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {isHttpUrl(project.sourceUrl) ? (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-fg">
              Source <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <figure className="mt-12 overflow-hidden rounded-3xl border border-line">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1792}
            height={1008}
            className="aspect-video w-full object-cover"
          />
          <figcaption className="px-4 py-3 font-mono text-xs text-muted">
            Concept visual — not a screenshot of a shipped product.
          </figcaption>
        </figure>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <section>
              <h2 className="text-3xl text-fg">Overview</h2>
              <p className="mt-4 text-muted">{project.overview}</p>
            </section>
            <section>
              <h2 className="text-3xl text-fg">Why this exists</h2>
              <p className="mt-4 text-muted">{project.motivation}</p>
            </section>
            <section>
              <h2 className="text-3xl text-fg">Approach</h2>
              <ol className="mt-4 space-y-3">
                {project.approach.map((step, stepIndex) => (
                  <li key={step} className="flex gap-3 text-muted">
                    <span className="font-mono text-xs text-accent">0{stepIndex + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <section className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="text-2xl text-fg">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl text-fg">What the study is for</h2>
              <ul className="mt-4 space-y-3">
                {project.learnings.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </SiteFrame>
  );
}

function MissingProject() {
  return (
    <SiteFrame current="projects">
      <div className="mx-auto flex min-h-[70dvh] max-w-xl flex-col justify-center px-5">
        <h1 className="text-5xl text-fg">That study isn't here.</h1>
        <p className="mt-4 text-muted">It may have been renamed or removed from the project list.</p>
        <Link to="/" hash="projects" className="mt-8 inline-flex min-h-11 items-center text-fg">
          Back to projects
        </Link>
      </div>
    </SiteFrame>
  );
}
