import { AppointmentRequest } from '../types';

const STORAGE_KEY = 'dr_haidar_appointments_v1';

export function getSavedAppointments(): AppointmentRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AppointmentRequest[];
  } catch (e) {
    console.error('Failed to read appointments from localStorage', e);
    return [];
  }
}

export function saveAppointment(appointment: Omit<AppointmentRequest, 'id' | 'createdAt' | 'status'>): AppointmentRequest {
  const existing = getSavedAppointments();
  
  // Generate human-friendly reference ID
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const id = `HA-${new Date().getFullYear()}-${randomSuffix}`;
  
  const newAppointment: AppointmentRequest = {
    ...appointment,
    id,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  const updated = [newAppointment, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist appointment', e);
  }

  return newAppointment;
}

export function isClinicDay(dateStr: string): boolean {
  if (!dateStr) return false;
  // Parse date
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  return dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0;
}

export function getDayName(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export function createWhatsAppBookingUrl(appointment: AppointmentRequest): string {
  const message = `السلام علیکم Doctor Haidar Ali!
I would like to confirm my appointment request.

📋 *Appointment Reference:* ${appointment.id}
👤 *Patient Name:* ${appointment.patientName}
📞 *Contact Number:* ${appointment.phoneNumber}
🗓️ *Preferred Date:* ${appointment.preferredDate} (${getDayName(appointment.preferredDate)})
⏰ *Preferred Time Slot:* ${appointment.preferredTimeSlot.toUpperCase()} (Morning / Afternoon / Evening)
🩺 *Service / Concern:* ${appointment.serviceName}
${appointment.patientNotes ? `📝 *Notes/Symptoms:* ${appointment.patientNotes}\n` : ''}
📍 *Clinic:* Pak Health Care Clinic, Pakistan Plaza, Shabqadar Bazar

Thank you!`;

  return `https://wa.me/923420972086?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppUrl(): string {
  const text = `السلام علیکم Doctor Haidar Ali, I am contacting you regarding consultation / surgical inquiry at Pak Health Care Clinic Shabqadar.`;
  return `https://wa.me/923420972086?text=${encodeURIComponent(text)}`;
}
