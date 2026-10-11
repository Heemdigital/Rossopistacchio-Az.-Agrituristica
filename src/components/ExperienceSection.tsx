import React from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { Sprout, Heart, Utensils, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const t = content[language];

  return (
    <section id="esperienza" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
          {t.experience.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
          {t.experience.title}
        </h2>
        <p className="mt-4 text-lg text-stone-700 leading-relaxed font-serif italic">
          “{t.experience.tagline}”
        </p>
      </div>

      {/* Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual Anchor */}
        <div className="lg:col-span-7 relative">
          <div className="rounded-lg overflow-hidden shadow-md border border-stone-300/80">
            <VisualMedia
              mediaKey="produce-harvest"
              alt="Raccolto quotidiano dell'orto di Rossopistacchio: pomodori freschi, carciofi ed erbe aromatiche"
              aspectRatio="4:3"
            />
          </div>
          {/* Subtle caption */}
          <p className="text-xs text-stone-500 italic mt-3 font-serif">
            {language === 'it'
              ? 'L’orto dell’agriturismo a Nettuno: ingredienti coltivati con cura e raccolti prima di ogni servizio.'
              : 'The farmstay garden in Nettuno: ingredients grown with care and harvested fresh before every service.'}
          </p>
        </div>

        {/* Narrative & Values Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <p className="text-stone-800 font-medium text-base sm:text-lg leading-relaxed">
            {t.experience.lead}
          </p>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.experience.body1}
          </p>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.experience.body2}
          </p>

          {/* Pillars List */}
          <div className="pt-4 border-t border-stone-300/70 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2.5">
              <Sprout className="w-4 h-4 text-[#A4AC76] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#263B2D]">
                  {language === 'it' ? 'Orto Proprio' : 'Estate Garden'}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {language === 'it' ? 'Verdure a km zero' : 'Zero-km produce'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Utensils className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#263B2D]">
                  {language === 'it' ? 'Pasta Tirata a Mano' : 'Handmade Pasta'}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {language === 'it' ? 'Ravioli artigianali' : 'Signature ravioli'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#263B2D]">
                  {language === 'it' ? 'Calore Familiare' : 'Warm Hospitality'}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {language === 'it' ? 'Accoglienza vera' : 'Genuine care'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#A4AC76] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#263B2D]">
                  {language === 'it' ? 'Arredi Unici' : 'Rustic Charm'}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {language === 'it' ? 'Dettagli curati' : 'Distinctive decor'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-300/80">
        {t.experience.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#263B2D] tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-500 mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
