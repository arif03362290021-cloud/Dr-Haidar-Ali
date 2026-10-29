export interface MedicalService {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'opd' | 'surgical' | 'emergency';
  shortDesc: string;
  shortDescUrdu: string;
  details: string[];
  indications: string;
  indicationsUrdu: string;
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  phoneNumber: string;
  email?: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
  serviceId: string;
  serviceName: string;
  patientNotes?: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface DoctorProfile {
  name: string;
  nameUrdu: string;
  title: string;
  titleUrdu: string;
  specialty: string;
  specialtyUrdu: string;
  regNumber: string;
  qualifications: string[];
  experience: string;
  experienceUrdu: string;
  hospitalAffiliation: string;
  hospitalAffiliationUrdu: string;
  clinicName: string;
  clinicNameUrdu: string;
  clinicAddress: string;
  clinicAddressUrdu: string;
  city: string;
  country: string;
  workingDays: string;
  workingDaysUrdu: string;
  workingHours: string;
  workingHoursUrdu: string;
  consultationFee: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  mapsQuery: string;
}
