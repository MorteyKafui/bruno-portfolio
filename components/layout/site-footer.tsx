import Link from "next/link";
import { Wordmark } from "@/components/navigation/wordmark";
import { primaryNavigation } from "@/data/navigation";
import { footer } from "@/data/home";
import { professor } from "@/data/professor";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark bg-ink text-ivory">
      <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="flex flex-col gap-6 md:col-span-6">
          <p className="font-display text-display-md leading-none">
            {professor.name}
            <span className="text-teal-bright">.</span>
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-cool-gray">
            {footer.descriptor}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-8">
          <p className="text-eyebrow mb-6 text-cool-gray">Explore</p>
          <ul className="flex flex-col gap-3">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ivory/80 transition-colors duration-300 hover:text-teal-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {professor.links.length > 0 && (
          <div className="md:col-span-2 md:col-start-11">
            <p className="text-eyebrow mb-6 text-cool-gray">Profiles</p>
            <ul className="flex flex-col gap-3">
              {professor.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-ivory/80 transition-colors duration-300 hover:text-teal-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="container-editorial flex flex-col gap-3 border-t border-ivory/10 py-6 text-xs text-cool-gray sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {professor.fullName}. All rights reserved.
        </p>
        <Wordmark name={professor.name} className="text-base text-ivory" />
      </div>
    </footer>
  );
}
