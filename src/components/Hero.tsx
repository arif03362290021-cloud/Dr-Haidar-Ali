import React from 'react';
import { Calendar, MessageCircle, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DOCTOR_DATA } from '../data/doctorData';
import { createGeneralWhatsAppUrl } from '../utils/appointmentStorage';

interface HeroProps {
  onOpenBooking: () => void;
  lang: 'en' | 'ur';
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, lang }) => {
  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white pt-8 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Split Hero: Content Left, Authentic Doctor Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Doctor Identity & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed kicker without pill badges */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{lang === 'en' ? 'Verified Surgical Specialist' : 'تصدیق شدہ سرجیکل سپیشلسٹ'}</span>
              <span aria-hidden="true">·</span>
              <span>Reg: {DOCTOR_DATA.regNumber}</span>
              <span aria-hidden="true">·</span>
              <span>LRH Peshawar Trained</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              {lang === 'en' ? (
                <>
                  District Surgeon <br className="hidden sm:inline" />
                  <span className="text-teal-700">Doctor Haidar Ali</span>
                </>
              ) : (
                <>
                  ڈاکٹر حیدر علی <br className="hidden sm:inline" />
                  <span className="text-teal-700">کنسلٹنٹ جنرل سرجن</span>
                </>
              )}
            </h1>

            {/* Sub-headline & Verified Credentials */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
              {DOCTOR_DATA.title} · {DOCTOR_DATA.specialty}
              <span className="block text-sm sm:text-base font-normal text-slate-500 mt-1">
                MBBS · MCPS · FCPS General Surgery (CPSP)
              </span>
            </p>

            {/* Clinical Focus description */}
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
              {lang === 'en'
                ? 'Providing compassionate, expert surgical outpatient consultations and operative management for acute emergencies and elective conditions including appendix, gallbladder, hernia, hydrocele, hemorrhoids, and hysterectomy in Shabqadar.'
                : 'شبقدر اور ملحقہ علاقوں کے مریضوں کے لیے جنرل سرجری او پی ڈی، اپینڈکس، پتے کی پتھری، ہرنیا، ہائڈروصیل، بواسیر اور سرجیکل ایمرجنسیز کا مکمل و معیاری علاج۔'}
            </p>

            {/* Verified Trust points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3 Years Consultant Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Lady Reading Hospital (LRH) Background</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>OPD & Surgical Emergencies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Consultation Fee: PKR 700 – 1,000</span>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-lg bg-teal-700 text-white font-semibold text-sm hover:bg-teal-800 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? 'Book Appointment' : 'وقت بک کریں'}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 0342 0972086</span>
              </a>

              <a
                href="tel:03095958747"
                className="px-4 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Call: 0309 5958747</span>
              </a>
            </div>

            {/* Location & Timings Micro-Info */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Pakistan Plaza, Mechanai Road, Shabqadar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-700" />
                <span>Friday, Saturday & Sunday (Morning to Evening)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Doctor Profile Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Main Portrait Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="aspect-[4/5] relative bg-slate-100 overflow-hidden">
                  <img
                    src="/assets/aistudio/880ea911-3b93-4d62-91b6-7faf123430fe_2795352a.jfif"
                    alt="Doctor Haidar Ali, Consultant General Surgeon"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gracefully if path differs
                      const target = e.currentTarget;
                      target.src = '/public/assets/aistudio/880ea911-3b93-4d62-91b6-7faf123430fe_2795352a.jfif';
                    }}
                  />
                  {/* Subtle contrast scrim at base */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-5 text-white">
                    <p className="font-bold text-lg leading-tight">Dr. Haidar Ali</p>
                    <p className="text-xs text-slate-200 font-medium">
                      MBBS, MCPS, FCPS General Surgery
                    </p>
                    <p className="text-xs text-teal-300 font-medium mt-0.5">
                      Consultant General Surgeon · District Specialist
                    </p>
                  </div>
                </div>

                {/* Sub-strip with clinic details */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900 block">Pakistan Plaza, Shabqadar</span>
                    <span>Shop # 3-4, Mechanai Road</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-teal-800 block">Fri, Sat, Sun</span>
                    <span>OPD Consultation</span>
                  </div>
                </div>
              </div>

              {/* Inset Badge: Real Operating Room Photo */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-2.5 rounded-xl border border-slate-200 shadow-lg max-w-xs">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.04_PM_744813c3.jpeg"
                  alt="Dr. Haidar Ali performing general surgery"
                  className="w-14 h-14 rounded-lg object-cover object-center shrink-0 border border-slate-200"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.04_PM_744813c3.jpeg';
                  }}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block leading-tight">Sterile Surgical Theater</span>
                  <span className="text-slate-500">General surgeries & emergency management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Qualifications
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              MBBS, MCPS, FCPS
            </p>
            <p className="text-xs text-slate-500">General Surgery · CPSP Certified</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Experience
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">
              3 Years Experience
            </p>
            <p className="text-xs text-slate-500">Consultant & District Specialist</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Consultation Days
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              Fri, Sat & Sunday
            </p>
            <p className="text-xs text-slate-500">Morning to Evening OPD</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Consultation Fee
            </span>
            <p className="text-base sm:text-lg font-bold text-teal-800 tabular-nums">
              PKR 700 – 1,000
            </p>
            <p className="text-xs text-slate-500">Standard OPD Fee Transparency</p>
          </div>
        </div>
      </div>
    </section>
  );
};
