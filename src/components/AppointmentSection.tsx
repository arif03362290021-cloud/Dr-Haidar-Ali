import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Search,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { DOCTOR_DATA, MEDICAL_SERVICES } from '../data/doctorData';
import { AppointmentRequest, MedicalService } from '../types';
import { 
  saveAppointment, 
  isClinicDay, 
  getDayName, 
  createWhatsAppBookingUrl,
  getSavedAppointments 
} from '../utils/appointmentStorage';

interface AppointmentSectionProps {
  initialService?: MedicalService | null;
  onClearInitialService?: () => void;
  lang: 'en' | 'ur';
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ 
  initialService, 
  lang 
}) => {
  // Form State
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [selectedServiceId, setSelectedServiceId] = useState(initialService ? initialService.id : 'opd-consultation');
  const [patientNotes, setPatientNotes] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // Status & Feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedAppointment, setSubmittedAppointment] = useState<AppointmentRequest | null>(null);
  const [viewHistory, setViewHistory] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate min date (tomorrow or today)
  const todayStr = new Date().toISOString().split('T')[0];

  // Update selected service if parent prop changes
  React.useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validations
    if (!patientName.trim()) {
      setErrorMsg('Please enter the patient full name.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid phone number (e.g., 0342 0972086).');
      return;
    }

    if (!preferredDate) {
      setErrorMsg('Please select a preferred appointment date.');
      return;
    }

    if (preferredDate < todayStr) {
      setErrorMsg('Appointment date cannot be in the past.');
      return;
    }

    if (!isClinicDay(preferredDate)) {
      const dayName = getDayName(preferredDate);
      setErrorMsg(
        `Dr. Haidar Ali conducts regular clinic on Friday, Saturday, and Sunday. You selected a ${dayName}. Please choose a Friday, Saturday, or Sunday.`
      );
      return;
    }

    if (!privacyAgreed) {
      setErrorMsg('Please check the privacy consent agreement to proceed.');
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
      // Reset form
      setPatientName('');
      setPhoneNumber('');
      setEmail('');
      setPreferredDate('');
      setPatientNotes('');
      setPrivacyAgreed(false);
    } catch (err) {
      setErrorMsg('An error occurred while saving your appointment. Please call 0309 5958747 directly.');
    }
  };

  const savedList = getSavedAppointments();
  const filteredHistory = savedList.filter(
    (app) =>
      app.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phoneNumber.includes(searchQuery) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>04. Online Scheduling</span>
            <span aria-hidden="true">·</span>
            <span>Direct WhatsApp Confirmation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Book an Appointment with Dr. Haidar Ali' : 'ڈاکٹر صاحب سے چیک اپ کے لیے وقت مقرر کریں'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Schedule your consultation for Friday, Saturday, or Sunday at Pak Health Care Clinic, Pakistan Plaza Shabqadar.'
              : 'جمعہ، ہفتہ یا اتوار کے لیے پاک ہیلتھ کئیر کلینک پاکستان پلازہ شبقدر میں معائنہ شیڈول کریں۔'}
          </p>
        </div>

        {/* Success Modal/Card after Submission */}
        {submittedAppointment && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-teal-50 border border-teal-200 shadow-sm transition-all animate-in fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-700" />
                  <span>Appointment Request Registered Successfully!</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Reference: #{submittedAppointment.id}
                </h3>
                <div className="text-sm text-slate-700 space-y-1">
                  <p>
                    <strong>Patient:</strong> {submittedAppointment.patientName} ·{' '}
                    <strong>Phone:</strong> {submittedAppointment.phoneNumber}
                  </p>
                  <p>
                    <strong>Scheduled Date:</strong> {submittedAppointment.preferredDate} ({getDayName(submittedAppointment.preferredDate)}) ·{' '}
                    <span className="capitalize">
                      <strong>Slot:</strong> {submittedAppointment.preferredTimeSlot}
                    </span>
                  </p>
                  <p>
                    <strong>Service:</strong> {submittedAppointment.serviceName}
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Standard OPD Consultation Fee: PKR 700 – 1,000 payable upon arrival.
                  </p>
                </div>
              </div>

              {/* Action: Send WhatsApp Confirmation */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={createWhatsAppBookingUrl(submittedAppointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to Doctor via WhatsApp</span>
                </a>
                <button
                  onClick={() => setSubmittedAppointment(null)}
                  className="px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Book Another
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                Patient Appointment Request
              </h3>
              <button
                type="button"
                onClick={() => setViewHistory(!viewHistory)}
                className="text-xs text-teal-700 hover:text-teal-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>{viewHistory ? 'Hide Stored Requests' : 'Lookup My Appointments'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                <p>{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Muhammad Ahmad"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="0342 0972086"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Optional Email & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Medical Service / Condition <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  >
                    {MEDICAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Date & Preferred Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date (Fri / Sat / Sun only) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                  {preferredDate && (
                    <p
                      className={`text-xs mt-1 font-medium ${
                        isClinicDay(preferredDate) ? 'text-teal-700' : 'text-rose-600'
                      }`}
                    >
                      {getDayName(preferredDate)}:{' '}
                      {isClinicDay(preferredDate)
                        ? 'Valid clinic day (Morning to Evening)'
                        : 'Doctor operates on Friday, Saturday & Sunday only'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Available Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['morning', 'afternoon', 'evening'] as const).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTimeSlot(slot)}
                        className={`py-2 px-2 text-xs font-semibold rounded-lg capitalize border transition-all cursor-pointer ${
                          preferredTimeSlot === slot
                            ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Morning (9am-1pm) · Afternoon (2pm-5pm) · Evening (5pm-7pm)
                  </span>
                </div>
              </div>

              {/* Row 4: Optional Short Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Medical Concern or Previous History <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    placeholder="Describe symptoms, duration, previous surgery reports or ultrasound findings..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 5: Privacy Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  required
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <label htmlFor="privacy-consent" className="text-xs text-slate-600 cursor-pointer">
                  I consent to sharing this appointment request with Dr. Haidar Ali for clinical scheduling. Patient medical records are strictly kept confidential and not shared with any third party.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Appointment Request</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Timings Reminder, Fee Transparency & Quick Call */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Clinic Schedule Summary</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2 border-b border-slate-100 pb-3">
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">Days:</span>
                  <span>Friday, Saturday & Sunday</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">Hours:</span>
                  <span>9:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">OPD Fee:</span>
                  <span className="font-bold text-teal-800">PKR 700 – 1,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">Location:</span>
                  <span>Pakistan Plaza, Shabqadar</span>
                </li>
              </ul>

              <div className="space-y-2 pt-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">Need Immediate Assistance?</span>
                <p>
                  For acute surgical emergencies or direct confirmation, you can reach Dr. Haidar Ali directly:
                </p>
                <a
                  href={`tel:${DOCTOR_DATA.phone}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {DOCTOR_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Privacy notice banner */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Data Privacy Guarantee</span>
              </div>
              <p>
                Appointment requests are securely stored on your device and sent directly to the doctor. We do not sell or expose patient personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Stored Appointments Lookup Tab */}
        {viewHistory && (
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Your Stored Appointment Requests
                </h4>
                <p className="text-xs text-slate-500">
                  Requests saved on this browser session for Dr. Haidar Ali
                </p>
              </div>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name or reference..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>
            </div>

            {filteredHistory.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-400">
                No appointment records found matching your query.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredHistory.map((item) => (
                  <div
                    key={item.id}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 text-sm">
                        #{item.id}
                      </span>
                      <span className="text-slate-500 ml-2">
                        · {item.patientName} ({item.phoneNumber})
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {item.serviceName} · {item.preferredDate} ({item.preferredTimeSlot})
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={createWhatsAppBookingUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded bg-emerald-600 text-white font-semibold flex items-center gap-1.5 hover:bg-emerald-700 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Send WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
