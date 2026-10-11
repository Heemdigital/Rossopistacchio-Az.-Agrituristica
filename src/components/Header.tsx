import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (type?: 'table' | 'event' | 'produce') => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#esperienza', label: t.nav.experience },
    { href: '#cucina', label: t.nav.cuisine },
    { href: '#tenuta', label: t.nav.setting },
    { href: '#eventi', label: t.nav.events },
    { href: '#galleria', label: t.nav.gallery },
    { href: '#contatti', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0E6]/95 backdrop-blur-md border-b border-stone-300/70 shadow-xs py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-serif tracking-wide text-[#263B2D] hover:text-[#A64B32] transition-colors whitespace-nowrap shrink-0 font-medium"
          >
            ROSSOPISTACCHIO
          </a>

          {/* Zone 2: Single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm tracking-wide text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#263B2D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#263B2D] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Language Switcher & 1 Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center text-xs tracking-wider border border-stone-300/80 rounded-md px-2 py-1.5 bg-white/70">
              <Globe className="w-3.5 h-3.5 text-stone-500 mr-1.5" />
              <button
                type="button"
                onClick={() => onLanguageChange('it')}
                className={`px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                  language === 'it'
                    ? 'font-bold text-[#263B2D]'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
                aria-label="Passa all'italiano"
              >
                IT
              </button>
              <span className="text-stone-300 px-0.5" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                  language === 'en'
                    ? 'font-bold text-[#263B2D]'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onOpenBooking('table')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#263B2D] text-[#F5F0E6] hover:bg-[#1A281F] active:bg-black px-5 py-2.5 rounded-md text-xs uppercase tracking-widest font-medium transition-all shadow-xs hover:shadow whitespace-nowrap shrink-0"
            >
              <span>{t.nav.bookTable}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A4AC76]" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#263B2D] hover:bg-stone-200/50 rounded-md transition-colors"
              aria-label={t.nav.menuToggle}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#263B2D] text-[#F5F0E6] flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-2xl font-serif tracking-wider">ROSSOPISTACCHIO</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-stone-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-2xl sm:text-3xl font-serif text-stone-200 hover:text-[#A4AC76] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-stone-400">Lingua / Language:</span>
              <button
                type="button"
                onClick={() => onLanguageChange('it')}
                className={`px-3 py-1 rounded text-xs tracking-wider uppercase ${
                  language === 'it' ? 'bg-[#A4AC76] text-[#28231F] font-bold' : 'text-stone-300'
                }`}
              >
                Italiano
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded text-xs tracking-wider uppercase ${
                  language === 'en' ? 'bg-[#A4AC76] text-[#28231F] font-bold' : 'text-stone-300'
                }`}
              >
                English
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('table');
              }}
              className="w-full sm:w-auto text-center bg-[#A64B32] hover:bg-[#873B25] text-white px-6 py-3 rounded text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {t.nav.bookTable}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
