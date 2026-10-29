import React from 'react';
import { 
  Building, 
  MapPin, 
  CalendarDays, 
  Clock, 
  Banknote, 
  Phone, 
  ExternalLink, 
  MessageSquare,
  MessageCircle,
  Navigation
} from 'lucide-react';
import { DOCTOR_DATA, CLINIC_CONTACTS } from '../data/doctorData';

interface ClinicInfoProps {
  lang: 'en' | 'ur';
}

export const ClinicInfo: React.FC<ClinicInfoProps> = ({ lang }) => {
  // Check if clinic is open today
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
  const isClinicDayToday = dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Pakistan Plaza Mechanai Road Shabqadar Bazar Pakistan')}`;

  return (
    <section id="clinic-timings" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>03. Practice Location</span>
            <span aria-hidden="true">·</span>
            <span>OPD Timings & Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Clinic Schedule & Location' : 'کلینک کے اوقات اور لوکیشن'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Dr. Haidar Ali is available for regular consultations on Friday, Saturday, and Sunday at Pakistan Plaza, Shabqadar.'
              : 'ڈاکٹر حیدر علی صاحب ہر جمعہ، ہفتہ اور اتوار کو صبح تا شام پاکستان پلازہ شبقدر بازار میں دستیاب ہوتے ہیں۔'}
          </p>
        </div>

        {/* 2-Column Split: Timings & Fee Cards Left, Interactive Map & Real Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Schedule, Fee & Desk Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live Status Banner */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                isClinicDayToday
                  ? 'bg-teal-50 border-teal-200 text-teal-900'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <Clock className={`w-5 h-5 shrink-0 ${isClinicDayToday ? 'text-teal-700' : 'text-slate-500'}`} />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block">
                    {isClinicDayToday ? 'Clinic In Session Today' : 'Upcoming Clinic Days'}
                  </span>
                  <p className="text-sm font-semibold">
                    {isClinicDayToday
                      ? 'Dr. Haidar Ali is attending patients today (Morning to Evening)'
                      : 'Next OPD sessions: Friday, Saturday & Sunday'}
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-teal-700" />
                <span>Working Days & Timings</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-200 text-sm">
                  <span className="font-semibold text-slate-800">Friday (جمعہ)</span>
                  <span className="font-mono text-slate-600">9:00 AM – 7:00 PM (Morning to Evening)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-200 text-sm">
                  <span className="font-semibold text-slate-800">Saturday (ہفتہ)</span>
                  <span className="font-mono text-slate-600">9:00 AM – 7:00 PM (Morning to Evening)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-200 text-sm">
                  <span className="font-semibold text-slate-800">Sunday (اتوار)</span>
                  <span className="font-mono text-slate-600">9:00 AM – 7:00 PM (Morning to Evening)</span>
                </div>
                <div className="flex items-center justify-between py-2 text-xs text-slate-500">
                  <span>Monday – Thursday</span>
                  <span>Hospital Duties & Urgent Surgeries by prior call</span>
                </div>
              </div>
            </div>

            {/* Consultation Fee Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 shrink-0">
                <Banknote className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Transparent Consultation Fee
                </span>
                <p className="text-xl font-extrabold text-slate-900 mt-0.5 tabular-nums">
                  PKR 700 – 1,000
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fixed OPD consultation fee. Detailed diagnostics, lab requisitions, or procedural interventions are discussed with complete transparency.
                </p>
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block text-sm">
                Direct Contact & Inquiries
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:03095958747`}
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-500 transition-colors flex items-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">Contact Number:</span>
                    <span className="tabular-nums font-medium text-slate-700">0309 5958747</span>
                  </div>
                </a>
                <a
                  href={`https://wa.me/923420972086`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-emerald-500 transition-colors flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">WhatsApp:</span>
                    <span className="tabular-nums font-medium text-slate-700">0342 0972086</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Address & Map / Location Guide */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Details Card */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-teal-700" />
                <span>Clinic Address & Directions</span>
              </h3>

              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-bold text-slate-900 text-base">
                  {DOCTOR_DATA.clinicName}
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{CLINIC_CONTACTS.fullAddress}</span>
                </p>
                <p className="text-xs text-slate-500">
                  Landmark: Pakistan Plaza, Main Mechanai Road, Shabqadar Bazar, Khyber Pakhtunkhwa.
                </p>
              </div>

              {/* Real Signboard Photo for Patient Familiarity */}
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-inner">
                <div className="aspect-[16/10] relative">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.03_PM_3e52938e.jpeg"
                    alt="Dr. Haidar Ali Pak Health Care Clinic Signboard at Pakistan Plaza Shabqadar"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.03_PM_3e52938e.jpeg';
                    }}
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-slate-50 flex items-center justify-between">
                  <span>Look for this clinic signboard at Pakistan Plaza</span>
                  <span className="font-semibold text-slate-800">Shop # 3-4</span>
                </div>
              </div>

              {/* Working Google Maps Action */}
              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
