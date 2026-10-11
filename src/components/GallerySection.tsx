import React, { useState } from 'react';
import { Language, GalleryItem } from '../types';
import { content, sampleGallery } from '../data/translations';
import { VisualMedia } from './VisualMedia';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'setting' | 'garden' | 'events'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const t = content[language];

  const filterTabs = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'food', label: t.gallery.filterFood },
    { key: 'setting', label: t.gallery.filterSetting },
    { key: 'garden', label: t.gallery.filterGarden },
    { key: 'events', label: t.gallery.filterEvents },
  ];

  const items =
    activeFilter === 'all'
      ? sampleGallery
      : sampleGallery.filter((item) => item.category === activeFilter);

  const currentIndex = selectedItem ? items.findIndex((i) => i.id === selectedItem.id) : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      setSelectedItem(items[currentIndex + 1]);
    } else if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(items[currentIndex - 1]);
    } else if (items.length > 0) {
      setSelectedItem(items[items.length - 1]);
    }
  };

  return (
    <section id="galleria" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
            {t.gallery.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#263B2D] leading-tight">
            {t.gallery.title}
          </h2>
        </div>

        {/* Filter Navigation (Clean Zero-Pill Segmented Controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === tab.key
                  ? 'bg-[#263B2D] text-[#F5F0E6]'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-stone-300/70 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative overflow-hidden">
              <VisualMedia
                mediaKey={item.mediaKey}
                alt={language === 'it' ? item.titleIt : item.titleEn}
                aspectRatio={item.aspectRatio}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-[#263B2D] px-3 py-1.5 rounded text-xs tracking-wider uppercase font-medium flex items-center gap-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t.gallery.viewLarger}</span>
                </span>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-stone-100 flex flex-col justify-between">
              <h4 className="font-serif text-base text-[#263B2D] font-medium group-hover:text-[#A64B32] transition-colors">
                {language === 'it' ? item.titleIt : item.titleEn}
              </h4>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                {language === 'it' ? item.descIt : item.descEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-950 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <span className="font-serif text-lg tracking-wide">
                {language === 'it' ? selectedItem.titleIt : selectedItem.titleEn}
              </span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-md transition-colors"
                aria-label="Chiudi finestra"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Media Presentation */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <VisualMedia
                mediaKey={selectedItem.mediaKey}
                alt={language === 'it' ? selectedItem.titleIt : selectedItem.titleEn}
                aspectRatio="16:9"
                className="w-full max-h-[60vh] object-contain"
              />

              {/* Prev / Next Controls */}
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                    aria-label="Precedente"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                    aria-label="Successivo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-4 sm:p-5 bg-stone-900 border-t border-white/10 text-xs text-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="font-serif italic text-stone-200 text-sm">
                {language === 'it' ? selectedItem.descIt : selectedItem.descEn}
              </p>
              <span className="text-[11px] text-stone-400 tracking-wider uppercase shrink-0">
                Rossopistacchio · Nettuno
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
