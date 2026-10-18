import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFrame } from "@/components/site-frame";
import { profile, seo } from "@/config/portfolio";
import { Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "theme-color", content: "#07070B" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      ...(profile.siteUrl ? [{ rel: "canonical", href: profile.siteUrl }] : []),
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <SiteFrame>
      <div className="mx-auto flex min-h-[70dvh] max-w-xl flex-col justify-center px-5 py-32">
        <p className="font-mono text-xs tracking-widest text-accent">404</p>
        <h1 className="mt-4 text-5xl text-fg">This page isn't on the map.</h1>
        <p className="mt-4 text-muted">The address may be mistyped, or that page was never added.</p>
        <Link to="/" className="mt-8 inline-flex min-h-11 items-center text-fg underline-offset-4 hover:underline">
          Back home
        </Link>
      </div>
    </SiteFrame>
  );
}
