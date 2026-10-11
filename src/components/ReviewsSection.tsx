import React from 'react';
import { Language } from '../types';
import { content, sampleReviews } from '../data/translations';
import { Star, MapPin, Quote } from 'lucide-react';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const t = content[language];

  return (
    <section id="recensioni" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      {/* Editorial Trust Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
          {t.reviews.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
          {t.reviews.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
          {t.reviews.summary}
        </p>

        {/* Google Rating Block */}
        <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-stone-300/80 shadow-xs">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="font-bold text-sm text-[#263B2D] tabular-nums">4.7 / 5.0</span>
          <span className="text-stone-300">·</span>
          <span className="text-xs text-stone-600 font-medium">117 recensioni su Google Maps</span>
        </div>
      </div>

      {/* Attributable Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Focus */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 font-mono">{rev.date}</span>
              </div>

              <h4 className="font-serif text-lg font-semibold text-[#263B2D] mb-3">
                “{language === 'it' ? rev.focusIt : rev.focusEn}”
              </h4>

              <div className="relative">
                <Quote className="w-6 h-6 text-stone-200 absolute -top-3 -left-2 -z-0" />
                <p className="relative z-10 text-xs sm:text-sm text-stone-600 leading-relaxed font-serif italic">
                  {language === 'it' ? rev.quoteIt : rev.quoteEn}
                </p>
              </div>
            </div>

            {/* Author Attribution */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-800">{rev.author}</span>
              <span className="flex items-center gap-1 text-stone-400">
                <MapPin className="w-3 h-3 text-[#A64B32]" />
                <span>{rev.city}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quiet Google Maps verification note */}
      <div className="mt-10 text-center text-xs text-stone-500">
        <a
          href="https://maps.google.com/?q=Rossopistacchio+Az.+Agrituristica+Via+Val+Pusteria+7+Nettuno"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#A64B32] transition-colors underline underline-offset-4"
        >
          {language === 'it'
            ? 'Visualizza tutte le recensioni e foto verificate su Google Maps →'
            : 'View all verified reviews and guest photos on Google Maps →'}
        </a>
      </div>
    </section>
  );
};
