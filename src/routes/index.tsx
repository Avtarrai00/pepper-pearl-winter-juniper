import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { AiLab } from "@/components/ai-lab";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Explorations } from "@/components/explorations";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteFrame>
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <AiLab />
      <Journey />
      <Explorations />
      <Contact />
    </SiteFrame>
  );
}
