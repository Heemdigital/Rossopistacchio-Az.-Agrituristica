import React from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { ArrowUp, Instagram, MapPin, Phone, Mail } from 'lucide-react';

interface FooterSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const t = content[language];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A281F] text-[#F5F0E6] pt-20 pb-12 border-t border-white/10">
      {/* Final Cinematic Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="border border-white/15 rounded-2xl p-8 sm:p-14 bg-gradient-to-br from-[#263B2D] to-[#1A281F] text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#A4AC76] font-semibold block mb-3">
              Rossopistacchio · Nettuno
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4 text-balance">
              {language === 'it'
                ? 'Il tuo posto a tavola ti aspetta.'
                : 'Your place at the table awaits.'}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              {language === 'it'
                ? 'Contattaci per riservare il tuo tavolo o organizzare un evento privato indimenticabile immerso nella campagna laziale.'
                : 'Get in touch to reserve your table or organize an unforgettable private gathering nestled in the Italian countryside.'}
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#A64B32] hover:bg-[#873B25] text-white px-8 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <span>{language === 'it' ? 'Contatta Rossopistacchio' : 'Contact Rossopistacchio'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#" className="text-2xl font-serif tracking-wider text-white font-medium block mb-3">
              ROSSOPISTACCHIO
            </a>
            <p className="text-xs uppercase tracking-widest text-[#A4AC76] mb-4">
              Azienda Agrituristica · Nettuno, Roma
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rossopistacchioagriturismo/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 hover:bg-white/15 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Instagram Rossopistacchio"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://rossopistacchio.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-400 hover:text-white transition-colors underline underline-offset-4"
              >
                rossopistacchio.it
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#esperienza" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href="#cucina" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.cuisine}
                </a>
              </li>
              <li>
                <a href="#tenuta" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.setting}
                </a>
              </li>
              <li>
                <a href="#eventi" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.events}
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#recensioni" className="hover:text-[#A4AC76] transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              {t.footer.contacts}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
                <span>Via Val Pusteria, 7, 00048 Nettuno RM, Italia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A4AC76] shrink-0" />
                <a href="tel:+393935777319" className="hover:text-white transition-colors tabular-nums">
                  +39 393 577 7319
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A4AC76] shrink-0" />
                <a href="mailto:info@rossopistacchio.it" className="hover:text-white transition-colors">
                  info@rossopistacchio.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.vatNotice} · {t.footer.rights}</p>
          <button
            type="button"
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>{language === 'it' ? 'Torna all’inizio' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
