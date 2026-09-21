import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'work', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200"
            style={{ 
              backgroundColor: 'color-mix(in srgb, var(--paper) 90%, transparent)',
              borderColor: 'var(--line)' 
            }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-serif font-semibold text-xl tracking-tight transition-opacity hover:opacity-80"
          style={{ color: 'var(--ink)' }}
        >
          Vaishnavia M
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <nav aria-label="Main Navigation">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-sm font-medium transition-colors pb-1 border-b"
                      style={{
                        color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
                        borderColor: isActive ? 'var(--ink)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="h-4 w-[1px]" style={{ backgroundColor: 'var(--line)' }} />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-1.5 rounded border transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            style={{ 
              borderColor: 'var(--line)', 
              color: 'var(--ink-soft)' 
            }}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden lg:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-emerald-800" />
                <span className="hidden lg:inline">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded border cursor-pointer"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-800" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded border cursor-pointer"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-b px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--line)' }}
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-medium transition-colors"
                    style={{ color: activeSection === link.id ? 'var(--ink)' : 'var(--ink-soft)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
