import React, { useState } from 'react';
import { Language, BookingEnquiry } from '../types';
import { content } from '../data/translations';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { VisualMedia } from './VisualMedia';

interface ContactLocationSectionProps {
  language: Language;
  onOpenBookingModal: (type?: 'table' | 'event' | 'produce') => void;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({
  language,
}) => {
  const t = content[language];

  // Inline enquiry form state
  const [formData, setFormData] = useState<BookingEnquiry>({
    type: 'table',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: 2,
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setFormError(
        language === 'it'
          ? 'Per favore compila tutti i campi obbligatori (Nome, Telefono, Data).'
          : 'Please complete all required fields (Name, Phone, Date).'
      );
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
  };

  const handleWhatsApp = () => {
    const textMsg =
      language === 'it'
        ? `Buongiorno Rossopistacchio! Vorrei richiedere una prenotazione per ${
            formData.type === 'table' ? 'un tavolo' : formData.type === 'event' ? 'un evento' : 'informazioni'
          }.\nNome: ${formData.name || 'Ospite'}\nTelefono: ${formData.phone || 'Non specificato'}\nData: ${formData.date || 'Da concordare'}\nOrario: ${formData.time}\nNumero ospiti: ${formData.guests}\nNote: ${formData.notes || 'Nessuna'}`
        : `Hello Rossopistacchio! I would like to enquire about a reservation for ${
            formData.type === 'table' ? 'a table' : formData.type === 'event' ? 'an event' : 'information'
          }.\nName: ${formData.name || 'Guest'}\nPhone: ${formData.phone || 'Not specified'}\nDate: ${formData.date || 'TBD'}\nTime: ${formData.time}\nGuests: ${formData.guests}\nNotes: ${formData.notes || 'None'}`;

    window.open(
      `https://wa.me/393935777319?text=${encodeURIComponent(textMsg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contatti" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Property Coordinates & Visiting Details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A64B32] font-semibold block mb-3">
              {t.contact.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#263B2D] leading-tight mb-4">
              {t.contact.title}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              {language === 'it'
                ? 'Siamo aperti per pranzo e cena su prenotazione. Accogliamo ospiti e feste private per farvi vivere la vera accoglienza della campagna di Nettuno.'
                : 'We are open for lunch and dinner by reservation. We welcome diners and private celebrations to share the authentic hospitality of Nettuno.'}
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#263B2D] shrink-0">
                  <MapPin className="w-5 h-5 text-[#A64B32]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-sm font-medium text-stone-800 mt-1">
                    {t.contact.addressValue}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rossopistacchio+Az.+Agrituristica+Via+Val+Pusteria+7+Nettuno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#263B2D] hover:text-[#A64B32] font-medium mt-1 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#A4AC76]" />
                    <span>{t.contact.mapCta}</span>
                  </a>
                </div>
              </div>

              {/* Telephone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#263B2D] shrink-0">
                  <Phone className="w-5 h-5 text-[#263B2D]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    {t.contact.phoneTitle}
                  </h4>
                  <a
                    href="tel:+393935777319"
                    className="text-base font-serif font-bold text-[#263B2D] hover:text-[#A64B32] block mt-1 transition-colors tabular-nums"
                  >
                    {t.contact.phoneValue}
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-800 font-medium mt-1 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{language === 'it' ? 'Scrivici subito su WhatsApp' : 'Message on WhatsApp now'}</span>
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#263B2D] shrink-0">
                  <Clock className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

              {/* Real Estate Location Photo Preview */}
              <div className="mt-8 rounded-lg overflow-hidden border border-stone-300/80 shadow-xs">
                <VisualMedia
                  mediaKey="hero-estate"
                  alt="La tenuta agrituristica Rossopistacchio a Nettuno"
                  aspectRatio="16:9"
                />
              </div>

              {/* Location Badge Card */}
              <div className="mt-4 p-4 rounded-lg bg-stone-200/50 border border-stone-300/70 text-xs text-stone-600 flex items-center justify-between">
                <span>Coordinate GPS: Nettuno (RM) · 41.48° N, 12.67° E</span>
                <span className="font-mono text-stone-500">Regione Lazio</span>
              </div>
        </div>

        {/* Right Column: Functional Interactive Enquiry Card */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-300/80 shadow-sm">
            <h3 className="font-serif text-2xl text-[#263B2D] mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              {t.contact.formDesc}
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#F5F0E6] rounded-xl border border-[#A4AC76]/60 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#263B2D] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#A4AC76]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#263B2D]">
                  {t.modal.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                  {t.modal.successMsg}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.modal.submitWhatsapp}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        type: 'table',
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '20:00',
                        guests: 2,
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto text-xs text-stone-500 hover:text-stone-800 underline"
                  >
                    {language === 'it' ? 'Invia un’altra richiesta' : 'Send another enquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Enquiry Type Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-2">
                    {t.modal.typeLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'table' })}
                      className={`p-2.5 rounded-md text-xs text-center border font-medium transition-colors ${
                        formData.type === 'table'
                          ? 'bg-[#263B2D] text-white border-[#263B2D]'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {t.modal.typeTable}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'event' })}
                      className={`p-2.5 rounded-md text-xs text-center border font-medium transition-colors ${
                        formData.type === 'event'
                          ? 'bg-[#263B2D] text-white border-[#263B2D]'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {t.modal.typeEvent}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'produce' })}
                      className={`p-2.5 rounded-md text-xs text-center border font-medium transition-colors ${
                        formData.type === 'produce'
                          ? 'bg-[#263B2D] text-white border-[#263B2D]'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {t.modal.typeProduce}
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                      {t.modal.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Mario Rossi"
                      className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                      {t.modal.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+39 333 1234567"
                      className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                    {t.modal.emailLabel} (opzionale)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mario@example.com"
                    className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                  />
                </div>

                {/* Date, Time & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                      {t.modal.dateLabel} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                      {t.modal.timeLabel}
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
                    >
                      <option value="12:30">12:30 (Pranzo)</option>
                      <option value="13:00">13:00 (Pranzo)</option>
                      <option value="13:30">13:30 (Pranzo)</option>
                      <option value="19:30">19:30 (Cena)</option>
                      <option value="20:00">20:00 (Cena)</option>
                      <option value="20:30">20:30 (Cena)</option>
                      <option value="21:00">21:00 (Cena)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                      {t.modal.guestsLabel}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                      className="w-full px-3.5 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                    {t.modal.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'it' ? 'Es. tavolo all’aperto, festeggiamento compleanno, intolleranze...' : 'E.g., outdoor table, birthday celebration, dietary requests...'}
                    className="w-full px-3.5 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D]"
                  />
                </div>

                {/* Submission Buttons: Direct & WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#263B2D] hover:bg-[#1A281F] text-white px-6 py-3 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#A4AC76]" />
                    <span>{t.modal.submitBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
