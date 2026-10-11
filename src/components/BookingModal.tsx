import React, { useState, useEffect } from 'react';
import { Language, BookingEnquiry, EnquiryType } from '../types';
import { content } from '../data/translations';
import { X, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialType?: EnquiryType;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  initialType = 'table',
}) => {
  const t = content[language];

  const [formData, setFormData] = useState<BookingEnquiry>({
    type: initialType,
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: 2,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialType) {
      setFormData((prev) => ({ ...prev, type: initialType }));
    }
  }, [initialType]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMessage(
        language === 'it'
          ? 'Compila i campi obbligatori (Nome, Telefono, Data).'
          : 'Please fill in all required fields (Name, Phone, Date).'
      );
      return;
    }
    setErrorMessage(null);
    setIsSubmitted(true);
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
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF7F2] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#263B2D] text-[#F5F0E6] p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#A4AC76] font-semibold block mb-1">
              {t.modal.sub}
            </span>
            <h3 className="font-serif text-2xl text-white">
              {t.modal.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-md transition-colors"
            aria-label={t.modal.close}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#263B2D] text-[#A4AC76] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#263B2D]">
                {t.modal.successTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                {t.modal.successMsg}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
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
                  onClick={onClose}
                  className="w-full sm:w-auto bg-stone-200 hover:bg-stone-300 text-stone-800 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  {t.modal.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Service Selection */}
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
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
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
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
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
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
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
                    className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                  {t.modal.emailLabel}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="mario@example.com"
                  className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
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
                    className="w-full px-3 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
                    {t.modal.timeLabel}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
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
                    className="w-full px-3 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
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
                  placeholder={language === 'it' ? 'Es. richieste speciali, intolleranze, festa...' : 'E.g., special requests, dietary needs, party details...'}
                  className="w-full px-3.5 py-2 rounded-md border border-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#263B2D] bg-white"
                />
              </div>

              {/* Actions */}
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

              <div className="text-[11px] text-stone-500 text-center pt-2">
                {t.modal.quickWhatsapp}{' '}
                <a href="tel:+393935777319" className="font-semibold text-[#263B2D] hover:underline">
                  +39 393 577 7319
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
