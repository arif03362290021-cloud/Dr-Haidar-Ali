import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { DOCTOR_DATA, CLINIC_CONTACTS } from '../data/doctorData';
import { createGeneralWhatsAppUrl } from '../utils/appointmentStorage';

interface ContactSectionProps {
  lang: 'en' | 'ur';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!senderName.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    if (!senderPhone.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }

    if (!messageText.trim()) {
      setFormError('Please write your message or medical query.');
      return;
    }

    // Format WhatsApp message
    const formatted = `السلام علیکم Doctor Haidar Ali!
Inquiry from Website:

👤 Name: ${senderName.trim()}
📞 Phone: ${senderPhone.trim()}
💬 Message: ${messageText.trim()}

Sent from Pak Health Care Clinic Web Portal.`;

    const waUrl = `https://wa.me/923420972086?text=${encodeURIComponent(formatted)}`;
    setFormSent(true);

    // Open WhatsApp in new window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Pakistan Plaza Mechanai Road Shabqadar Bazar Pakistan'
  )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>05. Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Reach Doctor & Clinic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Contact Dr. Haidar Ali' : 'ڈاکٹر حیدر علی صاحب سے رابطہ کریں'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'For OPD appointments, surgical advice, emergency consultations, or clinic directions in Shabqadar.'
              : 'او پی ڈی چیک اپ، سرجری مشورے، ایمرجنسی یا کلینک لوکیشن رہنمائی کے لیے رابطہ کریں۔'}
          </p>
        </div>

        {/* 2-Column Grid: Contact Information Left, Interactive Direct Inquiry Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone, WhatsApp, and Address */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Contact Phone Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Contact Number
                </span>
                <p className="text-lg font-bold text-slate-900 tabular-nums">
                  0309 5958747
                </p>
                <div className="pt-1">
                  <a
                    href="tel:03095958747"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900"
                  >
                    <span>Click to Call Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  WhatsApp Number
                </span>
                <p className="text-lg font-bold text-slate-900 tabular-nums">
                  0342 0972086
                </p>
                <div className="pt-1">
                  <a
                    href="https://wa.me/923420972086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800"
                  >
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Timings */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">
                    {DOCTOR_DATA.clinicName}
                  </span>
                  <span>{CLINIC_CONTACTS.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">
                    Clinical OPD Hours
                  </span>
                  <span>Friday, Saturday & Sunday · Morning to Evening (9am – 7pm)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Send Direct Message to Dr. Haidar Ali
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this form to connect directly with Dr. Haidar Ali's WhatsApp (0342 0972086).
            </p>

            {formSent ? (
              <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 space-y-3 text-center">
                <CheckCircle2 className="w-8 h-8 text-teal-700 mx-auto" />
                <h4 className="font-bold text-base">Inquiry Prepared for WhatsApp!</h4>
                <p className="text-xs text-teal-800">
                  Your message has been formatted and opened on WhatsApp. If WhatsApp did not open automatically, tap below:
                </p>
                <div className="pt-2">
                  <a
                    href={createGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setSenderName('');
                    setSenderPhone('');
                    setMessageText('');
                  }}
                  className="block mx-auto text-xs text-slate-600 hover:text-slate-900 underline pt-2 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Tariq Khan"
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="03xx xxxxxxx"
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Question or Condition <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Ask about surgery, consultation timing, or specific symptoms..."
                    className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct WhatsApp to Doctor (0342 0972086)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
