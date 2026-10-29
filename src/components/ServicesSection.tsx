import React, { useState } from 'react';
import { 
  Stethoscope, 
  AlertCircle, 
  Activity, 
  Layers, 
  Droplet, 
  ShieldAlert, 
  HeartHandshake, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { MEDICAL_SERVICES } from '../data/doctorData';
import { MedicalService } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: MedicalService) => void;
  lang: 'en' | 'ur';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForBooking, 
  lang 
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'opd' | 'surgical' | 'emergency'>('all');

  const filteredServices = MEDICAL_SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'opd-consultation':
        return <Stethoscope className="w-5 h-5 text-teal-700" />;
      case 'surgical-emergencies':
        return <AlertCircle className="w-5 h-5 text-rose-600" />;
      case 'appendectomy':
        return <Activity className="w-5 h-5 text-teal-700" />;
      case 'cholecystectomy':
        return <Droplet className="w-5 h-5 text-teal-700" />;
      case 'hernia-repair':
        return <Layers className="w-5 h-5 text-teal-700" />;
      case 'hydrocele-surgery':
        return <Droplet className="w-5 h-5 text-teal-700" />;
      case 'hemorrhoid-piles':
        return <HeartHandshake className="w-5 h-5 text-teal-700" />;
      case 'hysterectomy':
        return <Activity className="w-5 h-5 text-teal-700" />;
      case 'thyroid-soft-tissue':
        return <Sparkles className="w-5 h-5 text-teal-700" />;
      default:
        return <Stethoscope className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
              <span>02. Clinical Specialties</span>
              <span aria-hidden="true">·</span>
              <span>General Surgery OPD & Procedures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Surgical Services & Treatments' : 'طبی خدمات اور آپریشنز'}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              {lang === 'en'
                ? 'Only verified procedures performed by Dr. Haidar Ali. Outpatient consultation fee is PKR 700 – 1,000.'
                : 'ڈاکٹر حیدر علی صاحب کی تصدیق شدہ طبی و سرجیکل خدمات۔ او پی ڈی معائنہ فیس 700 تا 1000 روپے ہے۔'}
            </p>
          </div>

          {/* Interactive filter tabs (clean segmented controls per anti-slop rules) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('surgical')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'surgical'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Surgeries
            </button>
            <button
              onClick={() => setActiveCategory('opd')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'opd'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              OPD Evaluation
            </button>
            <button
              onClick={() => setActiveCategory('emergency')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'emergency'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Emergency Care
            </button>
          </div>
        </div>

        {/* Services Bento-grid: Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isEmergency = service.category === 'emergency';
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-white rounded-xl p-6 border transition-all hover:shadow-md ${
                  isEmergency
                    ? 'border-rose-200 bg-rose-50/20'
                    : 'border-slate-200 hover:border-teal-300'
                }`}
              >
                <div className="space-y-4">
                  {/* Service Header: Icon + Category Indicator */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-slate-400 capitalize">
                        {service.category === 'surgical'
                          ? 'Surgical Procedure'
                          : service.category === 'opd'
                          ? 'Outpatient OPD'
                          : 'Urgent Care'}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-800 urdu-font mt-0.5">
                      {service.titleUrdu}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'en' ? service.shortDesc : service.shortDescUrdu}
                  </p>

                  {/* Indications / Common Symptoms */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block mb-1">
                      {lang === 'en' ? 'Clinical Indications:' : 'علامات و ضرورت:'}
                    </span>
                    <p className="text-xs text-slate-500 leading-normal">
                      {lang === 'en' ? service.indications : service.indicationsUrdu}
                    </p>
                  </div>

                  {/* Service details list */}
                  <div className="space-y-1.5 pt-1">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button at bottom */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Fee: <strong className="text-slate-800">PKR 700–1,000</strong>
                  </span>
                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-700 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Request Consultation' : 'معائنہ بک کریں'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
