import React from 'react';
import { Language } from '../types';
import { content } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { Wine, Sparkles, Users, MessageSquare } from 'lucide-react';

interface EventsSectionProps {
  language: Language;
  onOpenBooking: (type: 'event') => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const t = content[language];

  return (
    <section id="eventi" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
            {t.events.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
            {t.events.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            {t.events.desc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenBooking('event')}
          className="inline-flex items-center gap-2 bg-[#263B2D] hover:bg-[#1A281F] text-[#F5F0E6] px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-all self-start lg:self-auto whitespace-nowrap shrink-0 shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-[#A4AC76]" />
          <span>{t.events.ctaEvent}</span>
        </button>
      </div>

      {/* Hero Visual Media: Twilight Celebration */}
      <div className="rounded-xl overflow-hidden border border-stone-300/80 shadow-md mb-12 relative">
        <VisualMedia
          mediaKey="events-celebration"
          alt="Festa serale all'aperto nella tenuta di Rossopistacchio con fili di lampadine e calici di vino"
          aspectRatio="16:9"
        />
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-[#263B2D]/90 backdrop-blur-md p-4 sm:p-5 rounded-lg text-[#F5F0E6] border border-white/10">
          <span className="text-xs uppercase tracking-wider text-[#A4AC76] font-semibold block mb-1">
            {language === 'it' ? 'Atmosfere Sotto le Stelle' : 'Under the Evening Sky'}
          </span>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            {language === 'it'
              ? 'Tavolate lunghe all’aperto, illuminazione soffusa con lucine calde e menù concordati con lo chef per rendere ogni festa memorabile.'
              : 'Long open-air banquet tables, soft fairy lighting, and customized seasonal farm menus to make every gathering truly memorable.'}
          </p>
        </div>
      </div>

      {/* 3 Dedicated Event Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Bachelorette Parties */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 hover:border-[#A64B32] transition-colors shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-md bg-[#F5F0E6] flex items-center justify-center text-[#A64B32] mb-5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif text-[#263B2D] mb-3">
              {t.events.card1Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.events.card1Desc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking('event')}
            className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-[#A64B32] hover:text-[#873B25] text-left transition-colors"
          >
            {language === 'it' ? 'Organizza la tua festa →' : 'Plan your party →'}
          </button>
        </div>

        {/* Card 2: Family Celebrations */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 hover:border-[#263B2D] transition-colors shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-md bg-[#F5F0E6] flex items-center justify-center text-[#263B2D] mb-5">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif text-[#263B2D] mb-3">
              {t.events.card2Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.events.card2Desc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking('event')}
            className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-[#263B2D] hover:text-[#1A281F] text-left transition-colors"
          >
            {language === 'it' ? 'Prenota per la famiglia →' : 'Book family event →'}
          </button>
        </div>

        {/* Card 3: Private Dinners & Long Tables */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 hover:border-[#A4AC76] transition-colors shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-md bg-[#F5F0E6] flex items-center justify-center text-[#28231F] mb-5">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif text-[#263B2D] mb-3">
              {t.events.card3Title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.events.card3Desc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking('event')}
            className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-[#263B2D] hover:text-[#1A281F] text-left transition-colors"
          >
            {language === 'it' ? 'Richiedi tavolo privato →' : 'Reserve private table →'}
          </button>
        </div>
      </div>
    </section>
  );
};
