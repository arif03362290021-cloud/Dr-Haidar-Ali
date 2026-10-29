import React, { useState } from 'react';
import { Calendar, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { DOCTOR_DATA } from '../data/doctorData';

interface HeaderProps {
  onOpenBooking: () => void;
  lang: 'en' | 'ur';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About Doctor' : 'تعارف' },
    { href: '#services', label: lang === 'en' ? 'Surgical Services' : 'سرجری خدمات' },
    { href: '#clinic-timings', label: lang === 'en' ? 'Clinic Timings' : 'اوقات' },
    { href: '#location', label: lang === 'en' ? 'Location & Contact' : 'رابطہ و پتہ' },
    { href: '#faqs', label: lang === 'en' ? 'FAQs' : 'سوالات' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-bar for quick emergency contact notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="font-medium text-slate-200">
              {lang === 'en' ? 'Consultant General Surgeon · District Specialist' : 'کنسلٹنٹ جنرل سرجن · ڈسٹرکٹ سپیشلسٹ'}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">
              Reg: {DOCTOR_DATA.regNumber} · MBBS, MCPS, FCPS General Surgery
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${DOCTOR_DATA.phone}`}
              className="text-teal-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {DOCTOR_DATA.phone}</span>
            </a>
            <button
              onClick={onToggleLang}
              className="text-xs px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title="Switch language"
            >
              {lang === 'en' ? 'اردو' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 nav links) - Zone 3 (1 primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 text-slate-900 group">
          <div className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            HA
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 block leading-tight whitespace-nowrap">
              Dr. Haidar Ali
            </span>
            <span className="text-xs text-teal-700 font-medium block whitespace-nowrap">
              {lang === 'en' ? 'Consultant General Surgeon' : 'کنسلٹنٹ جنرل سرجن'}
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 active:scale-95 transition-all shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? 'Book Appointment' : 'وقت بک کریں'}</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'en' ? 'Book Appointment' : 'وقت بک کریں'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
