import { nav, profile } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl tracking-widest">{profile.wordmark}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">Exploring intelligence. Engineering possibilities.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.id} href={`/#${item.id}`} className="text-sm text-muted hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2 border-t border-line px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono">© {new Date().getFullYear()} {profile.name}</p>
        <p>Studies marked as concepts are explorations, not launched products.</p>
      </div>
    </footer>
  );
}
