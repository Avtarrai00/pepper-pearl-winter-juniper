import {
  Bot,
  Boxes,
  Braces,
  Cloud,
  Container,
  Cpu,
  Database,
  GitBranch,
  Globe,
  MessagesSquare,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { capabilityGroups } from "@/config/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = {
  llm: Sparkles,
  assistants: MessagesSquare,
  agents: Bot,
  prompts: Workflow,
  models: Cpu,
  python: Braces,
  js: Braces,
  react: Boxes,
  next: Globe,
  api: Workflow,
  git: GitBranch,
  docker: Container,
  local: Cpu,
  cloud: Cloud,
  data: Database,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="Tools are evolving. Curiosity stays constant."
          lede="A map of what is being used, explored, or learned. These are interests, not scores."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <Reveal key={group.id}>
              <section aria-labelledby={`cap-${group.id}`}>
                <h3 id={`cap-${group.id}`} className="text-2xl text-fg">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => {
                    const Icon = icons[item.id] ?? Sparkles;
                    return (
                      <li key={item.id}>
                        <div className="group flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-transparent px-3 py-2 transition-colors hover:border-line hover:bg-surface focus-within:border-line">
                          <span className="flex items-center gap-3 text-sm text-fg">
                            <Icon
                              className="size-4 text-muted transition-colors group-hover:text-accent"
                              aria-hidden="true"
                            />
                            {item.name}
                          </span>
                          {item.focus ? (
                            <span className="font-mono text-xs tracking-wide text-muted">{item.focus}</span>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
