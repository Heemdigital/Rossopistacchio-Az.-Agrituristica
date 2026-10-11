import React, { useState } from 'react';
import { Language } from '../types';
import { content, sampleMenu } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface CuisineSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const CuisineSection: React.FC<CuisineSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'antipasti' | 'primi' | 'secondi' | 'dolci'>('all');
  const t = content[language];

  const categories = [
    { key: 'all', label: t.cuisine.tabAll },
    { key: 'antipasti', label: t.cuisine.tabAntipasti },
    { key: 'primi', label: t.cuisine.tabPrimi },
    { key: 'secondi', label: t.cuisine.tabSecondi },
    { key: 'dolci', label: t.cuisine.tabDolci },
  ];

  const filteredDishes =
    activeCategory === 'all'
      ? sampleMenu
      : sampleMenu.filter((d) => d.category === activeCategory);

  return (
    <section id="cucina" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80 bg-stone-50/50 rounded-2xl my-8">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
            {t.cuisine.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
            {t.cuisine.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            {t.cuisine.desc}
          </p>
        </div>

        {/* Call to Action */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 bg-[#A64B32] hover:bg-[#873B25] text-white px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold transition-all self-start lg:self-auto whitespace-nowrap shrink-0 shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>{t.cuisine.ctaMenu}</span>
        </button>
      </div>

      {/* Hero Visual Feature: Handmade Ravioli with Artisanal Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white p-6 sm:p-8 rounded-xl border border-stone-300/70 shadow-xs">
        <div className="lg:col-span-6">
          <div className="rounded-lg overflow-hidden border border-stone-200">
            <VisualMedia
              mediaKey="cuisine-ravioli"
              alt="Ravioli artigianali fatti a mano con burro, salvia ed olio extravergine d'oliva"
              aspectRatio="4:3"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold">
            {language === 'it' ? 'Piatto Iconico' : 'Signature Specialty'}
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#263B2D]">
            {language === 'it'
              ? 'I Nostri Ravioli Fatti a Mano'
              : 'Our Handmade Signature Ravioli'}
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {language === 'it'
              ? 'Tirati al matterello con farina selezionata e uova fresche. Il ripieno sposa la ricotta fresca con le erbe spontanee dell’orto di Nettuno, conditi con burro fuso, salvia profumata e gocce di olio extravergine della tenuta.'
              : 'Hand-rolled with selected flour and fresh farm eggs. The filling balances sweet ricotta with wild herbs gathered from the Nettuno garden, finished with melted butter, garden sage, and estate extra virgin olive oil.'}
          </p>

          <ul className="space-y-2 pt-2 text-xs text-stone-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A4AC76]" />
              <span>{language === 'it' ? 'Pasta fresca preparata quotidianamente' : 'Fresh pasta rolled daily'}</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A4AC76]" />
              <span>{language === 'it' ? 'Ingredienti genuini dell’Agro Pontino' : 'Authentic ingredients from Agro Pontino'}</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A4AC76]" />
              <span>{language === 'it' ? 'Ricette di famiglia tramandate nel tempo' : 'Time-tested family culinary recipes'}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Multi-photo Editorial Culinary Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-xs">
          <VisualMedia
            mediaKey="cuisine-pasta"
            alt={language === 'it' ? 'Tagliatelle fresche fatte a mano' : 'Fresh handmade tagliatelle'}
            aspectRatio="4:3"
            className="rounded"
          />
          <div className="pt-3 px-1">
            <h4 className="font-serif text-sm font-semibold text-[#263B2D]">
              {language === 'it' ? 'Paste all’Uovo Tirate a Mano' : 'Hand-Rolled Fresh Egg Pasta'}
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              {language === 'it' ? 'Sfoglia ruvida della tradizione laziale' : 'Rustic traditional Lazio pasta dough'}
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-xs">
          <VisualMedia
            mediaKey="cuisine-antipasto"
            alt={language === 'it' ? 'Tagliere antipasto con verdure dell’orto' : 'Estate antipasto platter'}
            aspectRatio="4:3"
            className="rounded"
          />
          <div className="pt-3 px-1">
            <h4 className="font-serif text-sm font-semibold text-[#263B2D]">
              {language === 'it' ? 'Antipasti di Terra & Bruschette' : 'Estate Antipasti & Bruschette'}
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              {language === 'it' ? 'Olio extravergine e verdure sott’olio' : 'Estate extra virgin olive oil & preserves'}
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-xs">
          <VisualMedia
            mediaKey="cuisine-dessert"
            alt={language === 'it' ? 'Crostata casereccia con confettura' : 'Homemade rustic fruit tart'}
            aspectRatio="4:3"
            className="rounded"
          />
          <div className="pt-3 px-1">
            <h4 className="font-serif text-sm font-semibold text-[#263B2D]">
              {language === 'it' ? 'Dolci Casarecci & Tradizione' : 'Traditional Homemade Desserts'}
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              {language === 'it' ? 'Confetture preparate con frutta dei nostri terreni' : 'Preserves crafted from estate fruit'}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter Tabs (Zero-Pill: Clean Segmented Bar) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-stone-200">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key as any)}
            className={`px-4 py-2 rounded-md text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === cat.key
                ? 'bg-[#263B2D] text-[#F5F0E6] shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white p-6 rounded-lg border border-stone-200 hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                <span className="uppercase tracking-widest text-[#A64B32] font-semibold">
                  {language === 'it' ? dish.tagIt : dish.tagEn}
                </span>
                <span className="text-stone-400">·</span>
                <span className="uppercase tracking-wider text-stone-500 font-mono text-[11px]">
                  {dish.category}
                </span>
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#263B2D] mb-2">
                {language === 'it' ? dish.titleIt : dish.titleEn}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {language === 'it' ? dish.descIt : dish.descEn}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>{language === 'it' ? 'Produzione interna' : 'Estate made'}</span>
              <span className="font-serif italic text-stone-700">Rossopistacchio</span>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Kitchen Disclaimer */}
      <p className="mt-8 text-xs text-stone-500 text-center italic font-serif">
        {t.cuisine.note}
      </p>
    </section>
  );
};
