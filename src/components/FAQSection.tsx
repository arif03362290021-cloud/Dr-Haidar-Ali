import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/doctorData';

interface FAQSectionProps {
  lang: 'en' | 'ur';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>06. Patient Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Frequently Asked Questions' : 'عام پوچھے جانے والے سوالات'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {lang === 'en'
              ? 'Clear and verified answers regarding Dr. Haidar Ali’s surgical practice and clinic policies.'
              : 'ڈاکٹر حیدر علی صاحب کے کلینک، اوقات اور علاج سے متعلق تصدیق شدہ معلومات۔'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {lang === 'en' ? faq.question : faq.questionUrdu}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
