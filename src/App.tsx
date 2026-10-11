import { useState, useEffect } from 'react';
import { Language, EnquiryType } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CuisineSection } from './components/CuisineSection';
import { SettingGardenSection } from './components/SettingGardenSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('rossopistacchio_lang');
    return (saved === 'en' || saved === 'it') ? saved : 'it';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<EnquiryType>('table');

  useEffect(() => {
    localStorage.setItem('rossopistacchio_lang', language);
  }, [language]);

  const handleOpenBooking = (type: EnquiryType = 'table') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  const handleQuickWhatsApp = () => {
    const message =
      language === 'it'
        ? 'Buongiorno! Desidero richiedere informazioni e disponibilità presso Rossopistacchio.'
        : 'Hello! I would like to enquire about availability and information at Rossopistacchio.';
    window.open(
      `https://wa.me/393935777319?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#28231F] flex flex-col selection:bg-[#A4AC76] selection:text-[#28231F]">
      {/* Top Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Editorial Storytelling Canvas */}
      <main className="flex-1">
        <HeroSection
          language={language}
          onOpenBooking={() => handleOpenBooking('table')}
        />

        <ExperienceSection language={language} />

        <CuisineSection
          language={language}
          onOpenBooking={() => handleOpenBooking('table')}
        />

        <SettingGardenSection language={language} />

        <EventsSection
          language={language}
          onOpenBooking={(type) => handleOpenBooking(type)}
        />

        <GallerySection language={language} />

        <ReviewsSection language={language} />

        <ContactLocationSection
          language={language}
          onOpenBookingModal={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <FooterSection
        language={language}
        onOpenBooking={() => handleOpenBooking('table')}
      />

      {/* Floating Action Affordance (Quick WhatsApp & Reservation) */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleQuickWhatsApp}
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Contatta su WhatsApp"
          title="WhatsApp +39 393 577 7319"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </button>

        <button
          type="button"
          onClick={() => handleOpenBooking('table')}
          className="hidden md:inline-flex items-center gap-2 bg-[#263B2D] hover:bg-[#1A281F] text-[#F5F0E6] px-4 py-3 rounded-full text-xs uppercase tracking-widest font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 border border-white/10"
        >
          <Calendar className="w-4 h-4 text-[#A4AC76]" />
          <span>{language === 'it' ? 'Prenota un Tavolo' : 'Book a Table'}</span>
        </button>
      </div>

      {/* Interactive Reservation & Event Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        initialType={bookingType}
      />
    </div>
  );
}
