import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/config/portfolio";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { getRequest } = await import("@tanstack/react-start/server");
        const origin = new URL(getRequest().url).origin;
        const paths = ["/", ...projects.map((project) => `/work/${project.slug}`)];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
