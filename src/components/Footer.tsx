import React from 'react';
import { ShieldCheck, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { DOCTOR_DATA, CLINIC_CONTACTS, MEDICAL_SERVICES } from '../data/doctorData';

interface FooterProps {
  onOpenPrivacy: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  lang: 'en' | 'ur';
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                HA
              </div>
              <div>
                <span className="font-bold text-sm text-white block">Dr. Haidar Ali</span>
                <span className="text-[11px] text-teal-400 font-medium block">
                  Consultant General Surgeon · District Specialist
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              MBBS, MCPS, FCPS General Surgery (CPSP Certified · Reg: {DOCTOR_DATA.regNumber}).
              Providing high-quality general surgical care, emergency triage, and comprehensive OPD consultations at Pakistan Plaza, Shabqadar.
            </p>

            <div className="flex items-center gap-2 text-teal-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-slate-300 font-medium">Lady Reading Hospital (LRH) Trained</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Doctor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Surgical Services
                </a>
              </li>
              <li>
                <a href="#clinic-timings" className="hover:text-white transition-colors">
                  Clinic Schedule
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Clinic Location
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Specialized Surgeries
            </h4>
            <ul className="space-y-2">
              {MEDICAL_SERVICES.slice(1, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Contact & Working Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Clinic Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACTS.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Fri, Sat, Sun · Morning to Evening (9am – 7pm)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:03095958747" className="hover:text-white transition-colors">
                  Call: 0309 5958747
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="https://wa.me/923420972086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 0342 0972086
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            © {currentYear} District Surgeon Doctor Haidar Ali. All rights reserved. Pak Health Care Clinic, Pakistan Plaza, Shabqadar.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPrivacy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPrivacy('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
