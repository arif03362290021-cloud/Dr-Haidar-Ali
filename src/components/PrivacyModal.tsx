import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { DOCTOR_DATA } from '../data/doctorData';

interface PrivacyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'disclaimer';
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-teal-400" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-teal-400" />}
            {type === 'disclaimer' && <AlertCircle className="w-5 h-5 text-amber-400" />}
            <h3 className="font-bold text-base">
              {type === 'privacy' && 'Patient Privacy Policy'}
              {type === 'terms' && 'Terms of Use & Clinical Inquiries'}
              {type === 'disclaimer' && 'Medical & Surgical Disclaimer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Patient Data Confidentiality:</strong> At the clinical practice of <strong>{DOCTOR_DATA.name}</strong> (Pak Health Care Clinic, Pakistan Plaza, Shabqadar), patient privacy and confidentiality are of paramount importance.
              </p>
              <p>
                <strong>2. Information Collected:</strong> We only collect information voluntarily provided by patients when requesting appointments or sending inquiries: patient full name, contact telephone number, preferred consultation day, and brief symptoms notes.
              </p>
              <p>
                <strong>3. Usage of Data:</strong> Information collected through this website is strictly used for patient scheduling, appointment confirmation, and direct clinical communication with Doctor Haidar Ali. We do not sell, license, or share your contact details with marketing firms.
              </p>
              <p>
                <strong>4. WhatsApp & Third-Party Communication:</strong> Appointment requests transmitted via WhatsApp are protected under WhatsApp end-to-end encryption protocols between the patient and the doctor.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>1. Acceptance of Terms:</strong> By utilizing this website to explore medical services or submit appointment requests with Dr. Haidar Ali, you agree to these operational terms.
              </p>
              <p>
                <strong>2. Scope of Online Inquiries:</strong> Online scheduling and messages submitted through this portal represent appointment booking requests and do not constitute an established doctor-patient surgical relationship until an in-person physical clinical examination is conducted by Dr. Haidar Ali at the clinic.
              </p>
              <p>
                <strong>3. Clinic Attendance:</strong> Dr. Haidar Ali conducts regular outpatient consultations on <strong>Friday, Saturday, and Sunday (Morning to Evening)</strong> at Pakistan Plaza, Mechanai Road, Shabqadar Bazar. While every effort is made to maintain schedule precision, clinical emergencies and urgent surgical procedures take clinical precedence.
              </p>
              <p>
                <strong>4. Fee Schedule:</strong> Outpatient consultation fee is PKR 700 to 1,000. Procedural and operative costs are discussed transparently in person following clinical evaluation.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <strong>Important Notice:</strong> The information contained on this website is for informational and educational purposes only and cannot substitute for professional in-person medical diagnosis, physical surgical examination, or treatment.
              </div>
              <p>
                <strong>1. No Direct Remote Diagnosis:</strong> No diagnosis, surgical prognosis, or treatment plan can be conclusively formulated without an in-person examination, physical palpation, and review of verified laboratory/radiological diagnostic reports.
              </p>
              <p>
                <strong>2. Surgical Emergencies:</strong> If you or a family member is experiencing severe acute abdominal pain, suspected appendicitis rupture, acute bowel obstruction, uncontrollable bleeding, or severe bodily trauma, please do not wait for an online reply. Immediately contact the clinic emergency phone (<strong>{DOCTOR_DATA.phone}</strong>) or proceed to the nearest tertiary emergency department.
              </p>
              <p>
                <strong>3. Surgical Outcomes:</strong> Medicine and general surgery inherently involve biological variations. Dr. Haidar Ali adheres to the highest standards of evidence-based surgical practice, sterilization, and care endorsed by the College of Physicians and Surgeons Pakistan.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
