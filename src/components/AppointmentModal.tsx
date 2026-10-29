import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle 
} from 'lucide-react';
import { DOCTOR_DATA, MEDICAL_SERVICES } from '../data/doctorData';
import { AppointmentRequest, MedicalService } from '../types';
import { 
  saveAppointment, 
  isClinicDay, 
  getDayName, 
  createWhatsAppBookingUrl 
} from '../utils/appointmentStorage';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: MedicalService | null;
  lang: 'en' | 'ur';
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
  lang,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [selectedServiceId, setSelectedServiceId] = useState(initialService ? initialService.id : 'opd-consultation');
  const [patientNotes, setPatientNotes] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedAppointment, setSubmittedAppointment] = useState<AppointmentRequest | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!patientName.trim()) {
      setErrorMsg('Please enter the patient full name.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid phone number (e.g. 0342 0972086).');
      return;
    }

    if (!preferredDate) {
      setErrorMsg('Please select an appointment date.');
      return;
    }

    if (preferredDate < todayStr) {
      setErrorMsg('Appointment date cannot be in the past.');
      return;
    }

    if (!isClinicDay(preferredDate)) {
      const dayName = getDayName(preferredDate);
      setErrorMsg(
        `Dr. Haidar Ali operates clinic on Friday, Saturday, and Sunday. You picked ${dayName}. Please choose a Friday, Saturday, or Sunday.`
      );
      return;
    }

    if (!privacyAgreed) {
      setErrorMsg('Please accept the privacy consent agreement.');
      return;
    }

    const serviceObj = MEDICAL_SERVICES.find((s) => s.id === selectedServiceId);
    const serviceName = serviceObj ? serviceObj.title : 'General Surgery OPD';

    try {
      const saved = saveAppointment({
        patientName: patientName.trim(),
        phoneNumber: cleanPhone,
        email: email.trim() || undefined,
        preferredDate,
        preferredTimeSlot,
        serviceId: selectedServiceId,
        serviceName,
        patientNotes: patientNotes.trim() || undefined,
      });

      setSubmittedAppointment(saved);
    } catch (err) {
      setErrorMsg('An error occurred. Please contact the clinic at 0309 5958747.');
    }
  };

  const resetAndClose = () => {
    setSubmittedAppointment(null);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base leading-tight">
              {lang === 'en' ? 'Book Consultation · Dr. Haidar Ali' : 'چیک اپ بکنگ · ڈاکٹر حیدر علی'}
            </h3>
            <p className="text-xs text-slate-300">
              Pak Health Care Clinic, Pakistan Plaza Shabqadar (Fri, Sat, Sun)
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedAppointment ? (
            <div className="space-y-4 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-teal-700" />
              </div>

              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                  Request Received
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">
                  Reference: #{submittedAppointment.id}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Saved successfully. Send via WhatsApp to confirm your slot directly with Dr. Haidar Ali.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
                <p>
                  <strong>Patient:</strong> {submittedAppointment.patientName} ({submittedAppointment.phoneNumber})
                </p>
                <p>
                  <strong>Date:</strong> {submittedAppointment.preferredDate} ({getDayName(submittedAppointment.preferredDate)})
                </p>
                <p>
                  <strong>Slot:</strong> {submittedAppointment.preferredTimeSlot.toUpperCase()} · <strong>Fee:</strong> PKR 700 – 1,000 OPD
                </p>
                <p>
                  <strong>Service:</strong> {submittedAppointment.serviceName}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={createWhatsAppBookingUrl(submittedAppointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp to Doctor</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>{errorMsg}</p>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Patient full name"
                      className="w-full pl-8.5 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="0342 0972086"
                      className="w-full pl-8.5 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Medical Specialty / Concern <span className="text-rose-500">*</span>
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                >
                  {MEDICAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date (Fri, Sat, Sun only) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-8.5 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                  {preferredDate && (
                    <p
                      className={`text-[11px] mt-1 font-medium ${
                        isClinicDay(preferredDate) ? 'text-teal-700' : 'text-rose-600'
                      }`}
                    >
                      {getDayName(preferredDate)}: {isClinicDay(preferredDate) ? 'Clinic open' : 'Must be Fri, Sat or Sun'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['morning', 'afternoon', 'evening'] as const).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTimeSlot(slot)}
                        className={`py-1.5 px-1 text-[11px] font-semibold rounded capitalize border transition-all cursor-pointer ${
                          preferredTimeSlot === slot
                            ? 'bg-teal-700 text-white border-teal-700'
                            : 'bg-white text-slate-700 border-slate-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Symptoms or Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  placeholder="Brief summary of condition..."
                  className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  id="modal-privacy"
                  type="checkbox"
                  required
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <label htmlFor="modal-privacy" className="text-[11px] text-slate-600 cursor-pointer leading-tight">
                  I consent to sharing this information for clinical scheduling with Dr. Haidar Ali.
                </label>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
