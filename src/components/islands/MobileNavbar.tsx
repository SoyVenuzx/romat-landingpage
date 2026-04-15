import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

type MobileNavbarProps = {
  navLinks: NavItem[];
};

export default function MobileNavbar({ navLinks }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = useCallback(() => {
    setIsVisible(true);
    window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    if (isVisible && isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  }, [closeMenu, isOpen, isVisible, openMenu]);

  useEffect(() => {
    if (!isVisible || isOpen) {
      return;
    }

    const closeTimeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 220);

    return () => {
      window.clearTimeout(closeTimeout);
    };
  }, [isOpen, isVisible]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) {
      return;
    }

    header.classList.toggle('mobile-menu-open', isVisible);

    return () => {
      header.classList.remove('mobile-menu-open');
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeMenu, isVisible]);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-[95] flex h-10 w-10 items-center justify-center rounded-xl bg-card/82 text-foreground backdrop-blur-sm transition-colors hover:bg-muted lg:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isVisible && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[90] lg:hidden"
        >
          <button
            type="button"
            className={`absolute inset-0 bg-navy/22 backdrop-blur-[2px] transition-opacity duration-200 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />

          <div
            className={`relative mx-4 mt-3 rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-[0_16px_34px_-16px_hsl(var(--navy)/0.35)] backdrop-blur-sm transition-all duration-200 ${
              isOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-3 opacity-0'
            }`}
          >
            <ul className="flex flex-col gap-1" aria-label="Menú principal">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-sm font-bold text-navy transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
