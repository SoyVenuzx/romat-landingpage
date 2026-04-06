import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

type MobileNavbarProps = {
  navLinks: NavItem[];
};

export default function MobileNavbar({ navLinks }: MobileNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground lg:hidden"
        aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-card/95 px-4 pb-5 pt-3 backdrop-blur-sm lg:hidden">
          <ul className="flex flex-col gap-1.5" aria-label="Menu principal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl border border-transparent px-4 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
