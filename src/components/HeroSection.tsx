import React from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { ArrowDown, Calendar, Compass } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const t = content[language];

  const handleScrollToExperience = () => {
    const el = document.querySelector('#esperienza');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Kicker & Unboxed Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300/80 pb-4 text-xs tracking-widest uppercase text-stone-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#263B2D]">{t.brand.name}</span>
          <span aria-hidden="true">·</span>
          <span>{t.brand.subtitle}</span>
          <span aria-hidden="true">·</span>
          <span>Nettuno, Roma</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-stone-500">
          <span>Google 4.7★ (117 recensioni)</span>
          <span aria-hidden="true">·</span>
          <span>Dal nostro orto alla tavola</span>
        </div>
      </div>

      {/* Main Grid: Headline + Visual Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-8">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold mb-4">
            {t.hero.kicker}
          </span>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-[#263B2D] leading-[1.08] tracking-tight text-balance">
            <span className="block">{t.hero.headlinePart1}</span>
            <span className="block italic font-normal text-[#A64B32]">{t.hero.headlinePart2}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">
            {t.hero.subhead}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 bg-[#263B2D] hover:bg-[#1A281F] text-[#F5F0E6] px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-all shadow-sm hover:shadow"
            >
              <Calendar className="w-4 h-4 text-[#A4AC76]" />
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <button
              type="button"
              onClick={handleScrollToExperience}
              className="inline-flex items-center gap-2 border border-stone-400/80 hover:border-[#263B2D] text-[#28231F] hover:text-[#263B2D] px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Compass className="w-4 h-4 text-stone-500" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Marquee Visual Framing */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg border border-stone-300/80">
            <VisualMedia
              mediaKey="hero-estate"
              alt="Panoramica reale della tenuta agrituristica Rossopistacchio a Nettuno"
              aspectRatio="16:9"
              priority={true}
            />
            {/* Visual Tag Overlay */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded flex items-center justify-between text-xs text-stone-700">
              <span className="font-serif italic text-sm text-[#263B2D]">
                Tenuta Rossopistacchio · Nettuno
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">
                Via Val Pusteria, 7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-stone-300/80 text-xs text-stone-600 gap-4">
        <button
          type="button"
          onClick={handleScrollToExperience}
          className="flex items-center gap-2 hover:text-[#263B2D] transition-colors group cursor-pointer"
        >
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#A64B32]" />
          <span className="tracking-widest uppercase">{t.hero.scrollPrompt}</span>
        </button>

        <div className="flex items-center gap-6 text-stone-500 tracking-wider">
          <span>Cucina Tipica Laziale</span>
          <span aria-hidden="true">·</span>
          <span>Pasta e Ravioli Fatti a Mano</span>
          <span aria-hidden="true">·</span>
          <span>Eventi e Feste Private</span>
        </div>
      </div>
    </section>
  );
};
