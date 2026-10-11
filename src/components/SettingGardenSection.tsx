import React from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { Trees, SunMedium, Compass } from 'lucide-react';

interface SettingGardenSectionProps {
  language: Language;
}

export const SettingGardenSection: React.FC<SettingGardenSectionProps> = ({ language }) => {
  const t = content[language];

  return (
    <section id="tenuta" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
          {t.setting.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
          {t.setting.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
          {t.setting.desc}
        </p>
      </div>

      {/* Dual Visual Composition: Outdoor Garden + Indoor Character */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left: Large Garden Dining View */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="rounded-lg overflow-hidden border border-stone-300/80 shadow-md">
            <VisualMedia
              mediaKey="garden-table"
              alt="Tavoli all'aperto nel giardino di Rossopistacchio all'ombra di pergolati ed ulivi"
              aspectRatio="4:3"
            />
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-serif text-[#263B2D] mb-1">
              {t.setting.feature1Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.setting.feature1Desc}
            </p>
          </div>
        </div>

        {/* Right: Indoor Atmosphere & Architectural Charm */}
        <div className="lg:col-span-5 flex flex-col justify-between mt-8 lg:mt-0">
          <div className="rounded-lg overflow-hidden border border-stone-300/80 shadow-md">
            <VisualMedia
              mediaKey="interior-dining"
              alt="Sale interne con travi a vista, arredi rustici caldi e atmosfera conviviale"
              aspectRatio="4:3"
            />
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-serif text-[#263B2D] mb-1">
              {t.setting.feature2Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.setting.feature2Desc}
            </p>
          </div>
        </div>
      </div>

      {/* The Territory & Landscape Callout Card */}
      <div className="bg-[#263B2D] text-[#F5F0E6] p-8 sm:p-10 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Trees className="w-6 h-6 text-[#A4AC76] shrink-0 mt-1" />
          <div>
            <h4 className="font-serif text-lg text-white mb-2">
              {language === 'it' ? 'La Campagna di Nettuno' : 'Nettuno Countryside'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'it'
                ? 'Immersa nel verde, riparata dai rumori, con ulivi secolari e brezze leggere che rinfrescano le serate estive.'
                : 'Nestled in lush greenery, sheltered from city noise, with centuries-old olive trees and refreshing summer breezes.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <SunMedium className="w-6 h-6 text-[#A4AC76] shrink-0 mt-1" />
          <div>
            <h4 className="font-serif text-lg text-white mb-2">
              {language === 'it' ? 'Vicinanza al Mare' : 'Near the Coast'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'it'
                ? 'A soli 4 km dal litorale tirrenico e dal borgo medievale di Nettuno, ideale per unire mare e cucina contadina.'
                : 'Just 4 km from the Tyrrhenian coast and the medieval village of Nettuno, effortlessly combining beach and countryside dining.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Compass className="w-6 h-6 text-[#A4AC76] shrink-0 mt-1" />
          <div>
            <h4 className="font-serif text-lg text-white mb-2">
              {language === 'it' ? 'A Meno di un’Ora da Roma' : 'Under 1 Hour from Rome'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'it'
                ? 'Facilmente raggiungibile dalla capitale e dalle città dei Castelli Romani lungo la Via Pontina.'
                : 'Easily accessible from Rome and the Castelli Romani along the Pontina route for relaxed day outings.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
