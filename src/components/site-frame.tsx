import type { ReactNode } from "react";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";

export function SiteFrame({ children, current }: { children: ReactNode; current?: string }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-3 focus:text-fg"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <SiteNav current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
