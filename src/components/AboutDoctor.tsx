import React from 'react';
import { Award, GraduationCap, Building2, Stethoscope, Clock, ShieldCheck, Check } from 'lucide-react';
import { DOCTOR_DATA } from '../data/doctorData';

interface AboutDoctorProps {
  lang: 'en' | 'ur';
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ lang }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>01. Professional Profile</span>
            <span aria-hidden="true">·</span>
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'About Doctor Haidar Ali' : 'ڈاکٹر حیدر علی کا تعارف اور اسناد'}
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            {lang === 'en'
              ? 'Doctor Haidar Ali is a Consultant General Surgeon and District Specialist with 3 years of consultant clinical experience. Dedicated to providing patient-centered surgical care, timely emergency interventions, and transparent clinical consultations in Shabqadar.'
              : 'ڈاکٹر حیدر علی صاحب کنسلٹنٹ جنرل سرجن اور ڈسٹرکٹ سپیشلسٹ ہیں۔ انہوں نے لیڈی ریڈنگ ہسپتال (LRH) پشاور سے جنرل سرجری کی اعلیٰ تربیت اور کالج آف فزیشنز اینڈ سرجنز پاکستان سے ایف سی پی ایس کی ڈگری مکمل کی۔'}
          </p>
        </div>

        {/* 2-Column Grid: Visual Proof Left, Detailed Credentials Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Visual Gallery of authentic doctor photos */}
          <div className="lg:col-span-5 space-y-4">
            {/* Surgery Photo */}
            <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="aspect-[4/3] relative">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.04_PM_744813c3.jpeg"
                  alt="Dr. Haidar Ali in Surgical Operating Theater"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.04_PM_744813c3.jpeg';
                  }}
                />
              </div>
              <div className="p-3.5 bg-slate-50 text-xs text-slate-600 border-t border-slate-200">
                <span className="font-semibold text-slate-900 block">Surgical Operating Theater</span>
                <span>Executing general surgery procedures and urgent emergency triage</span>
              </div>
            </div>

            {/* Clinic Signboard verification photo */}
            <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="aspect-[16/9] relative">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.03_PM_3e52938e.jpeg"
                  alt="Pak Health Care Clinic, Pakistan Plaza, Shabqadar"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.56.03_PM_3e52938e.jpeg';
                  }}
                />
              </div>
              <div className="p-3.5 bg-slate-50 text-xs text-slate-600 border-t border-slate-200">
                <span className="font-semibold text-slate-900 block">Pak Health Care Clinic Entrance</span>
                <span>Pakistan Plaza, Mechanai Road, Shabqadar Bazar (Shop # 3-4) · Reg: {DOCTOR_DATA.regNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Qualifications, Hospital Affiliation, Experience Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Credentials Card */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-teal-700" />
                <span>Verified Qualifications & Degrees</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      FCPS in General Surgery
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fellow of College of Physicians and Surgeons Pakistan (CPSP) — the highest surgical fellowship certification in Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      MCPS
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Member of College of Physicians and Surgeons Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      MBBS
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Bachelor of Medicine, Bachelor of Surgery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Registration & Training Background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Medical Registration</span>
                </div>
                <p className="text-lg font-bold text-slate-900 tabular-nums">
                  Reg: {DOCTOR_DATA.regNumber}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Registered Medical Practitioner (RMP) with Pakistan Medical Council.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Consultant Experience</span>
                </div>
                <p className="text-lg font-bold text-slate-900 tabular-nums">
                  {DOCTOR_DATA.experience}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Active surgical consultant and District Specialist.
                </p>
              </div>
            </div>

            {/* Surgical Residency & Institutional Background */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building2 className="w-4 h-4 text-teal-700" />
                <span>Hospital Affiliation & Residency</span>
              </div>
              <p className="text-sm text-slate-700">
                <strong>Lady Reading Hospital (LRH) Peshawar</strong> — Surgical Residency & Specialty Training in General Surgery.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Extensive clinical training in Lady Reading Hospital Peshawar, managing high-volume acute abdominal emergencies, complex trauma, elective gastrointestinal operations, and specialized post-operative patient management.
              </p>
            </div>

            {/* Practice Philosophy */}
            <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/50 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900">
                Patient Care Commitment
              </h4>
              <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                Doctor Haidar Ali believes in thorough clinical evaluation, clear patient communication regarding operative options, honest fee transparency (PKR 700 – 1,000 OPD consultation), and meticulous surgical follow-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
