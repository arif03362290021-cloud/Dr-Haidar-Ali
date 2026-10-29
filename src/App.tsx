import React, { useState } from 'react';
import { Header } from './components/Header';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { ClinicInfo } from './components/ClinicInfo';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PrivacyModal } from './components/PrivacyModal';
import { MedicalService } from './types';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);

  const [privacyModalState, setPrivacyModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | 'disclaimer';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  const handleOpenBooking = (service?: MedicalService) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenPrivacy = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setPrivacyModalState({
      isOpen: true,
      type,
    });
  };

  const handleClosePrivacy = () => {
    setPrivacyModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Header adhering to Top Bar Contract */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Emergency Alert Banner */}
      <EmergencyBanner />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} lang={lang} />

        {/* About Doctor Section */}
        <AboutDoctor lang={lang} />

        {/* Surgical Services & OPD */}
        <ServicesSection
          onSelectServiceForBooking={(service) => handleOpenBooking(service)}
          lang={lang}
        />

        {/* Clinic Schedule & Location */}
        <ClinicInfo lang={lang} />

        {/* Appointment Booking Engine */}
        <AppointmentSection
          initialService={selectedService}
          lang={lang}
        />

        {/* Contact Section */}
        <ContactSection lang={lang} />

        {/* Frequently Asked Questions */}
        <FAQSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} lang={lang} />

      {/* Interactive Modal Booking */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
        lang={lang}
      />

      {/* Legal & Privacy Modals */}
      <PrivacyModal
        isOpen={privacyModalState.isOpen}
        type={privacyModalState.type}
        onClose={handleClosePrivacy}
      />
    </div>
  );
}
