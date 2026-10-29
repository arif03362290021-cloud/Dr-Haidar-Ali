import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';
import { DOCTOR_DATA } from '../data/doctorData';

export const EmergencyBanner: React.FC = () => {
  return (
    <aside aria-label="Surgical Emergency Notice" className="bg-rose-900 text-rose-50 px-4 py-3 border-y border-rose-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0" />
          <span>
            <strong>Acute Surgical Emergency?</strong> For suspected appendix rupture, severe trauma, or acute intestinal obstruction, contact Dr. Haidar Ali directly or proceed to the nearest emergency trauma center.
          </span>
        </div>
        <a
          href={`tel:${DOCTOR_DATA.phone}`}
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rose-800 hover:bg-rose-700 text-white font-bold text-xs border border-rose-700 transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span>Call Emergency: {DOCTOR_DATA.phone}</span>
        </a>
      </div>
    </aside>
  );
};
