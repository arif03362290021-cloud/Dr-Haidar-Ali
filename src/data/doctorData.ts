import { DoctorProfile, MedicalService } from '../types';

export const DOCTOR_DATA: DoctorProfile = {
  name: 'Doctor Haidar Ali',
  nameUrdu: 'ڈاکٹر حیدر علی',
  title: 'Consultant General Surgeon',
  titleUrdu: 'کنسلٹنٹ جنرل سرجن',
  specialty: 'District Specialist',
  specialtyUrdu: 'ڈسٹرکٹ سپیشلسٹ',
  regNumber: '24232-N',
  qualifications: [
    'MBBS',
    'MCPS',
    'FCPS General Surgery (CPSP)'
  ],
  experience: '3 years experience',
  experienceUrdu: '3 سالہ کلینیکل اور سرجیکل تجربہ',
  hospitalAffiliation: 'Lady Reading Hospital (LRH) Peshawar (Surgical Residency)',
  hospitalAffiliationUrdu: 'جنرل سرجری لیڈی ریڈنگ ہسپتال (LRH) پشاور',
  clinicName: 'Pak Health Care Clinic (Shop # 3-4), Pakistan Plaza',
  clinicNameUrdu: 'پاک ہیلتھ کئیر کلینک، پاکستان پلازہ دکان نمبر 3-4',
  clinicAddress: 'Mechanai Road, Shabqadar Bazar',
  clinicAddressUrdu: 'مچنی روڈ، شبقدر بازار',
  city: 'Shabqadar',
  country: 'Pakistan',
  workingDays: 'Friday, Saturday, and Sunday',
  workingDaysUrdu: 'جمعہ، ہفتہ اور اتوار',
  workingHours: 'Morning to Evening (9:00 AM – 7:00 PM)',
  workingHoursUrdu: 'صبح تا شام (9:00 بجے تا 7:00 بجے)',
  consultationFee: 'PKR 700 – 1,000',
  phone: '0309 5958747',
  phoneFormatted: '+92 309 5958747',
  whatsapp: '03420972086',
  whatsappFormatted: '+92 342 0972086',
  mapsQuery: 'Pakistan+Plaza+Mechanai+Road+Shabqadar+Bazar+Khyber+Pakhtunkhwa+Pakistan'
};

export const CLINIC_CONTACTS = {
  primaryDoctorPhone: '0309 5958747',
  primaryWhatsApp: '0342 0972086',
  shopNumber: 'Shop # 3-4, Pakistan Plaza',
  fullAddress: 'Mechanai Road, Shabqadar Bazar, Shabqadar, Khyber Pakhtunkhwa, Pakistan'
};

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'opd-consultation',
    title: 'General Surgery OPD Consultation',
    titleUrdu: 'جنرل سرجری او پی ڈی معائنہ',
    category: 'opd',
    shortDesc: 'Comprehensive clinical evaluation, pre-operative diagnostics, and post-operative follow-up care.',
    shortDescUrdu: 'جامع کلینیکل معائنہ، آپریشن سے قبل ضروری ٹیسٹ اور آپریشن کے بعد نگہداشت۔',
    details: [
      'Detailed clinical history & surgical examination',
      'Evaluation of lab diagnostics and imaging scans',
      'Second opinions on surgical recommendations',
      'Wound care, suture removal, and post-surgical monitoring'
    ],
    indications: 'Abdominal pain, unexplained lumps, surgical follow-ups, and pre-surgery assessments.',
    indicationsUrdu: 'پیٹ کا درد، جسم پر گانٹھیں یا گلٹیاں، اور آپریشن سے قبل ضروری معائنہ۔'
  },
  {
    id: 'surgical-emergencies',
    title: 'Surgical Emergencies Management',
    titleUrdu: 'سرجیکل ایمرجنسیز کا انتظام',
    category: 'emergency',
    shortDesc: 'Immediate triage, stabilization, and operative management of urgent acute surgical presentations.',
    shortDescUrdu: 'ہنگامی سرجیکل امراض، پیٹ کے اچانک شدید درد اور فوری آپریشن کے تقاضوں کی فوری دیکھ بھال۔',
    details: [
      'Acute abdomen evaluation and emergency triage',
      'Perforations, intestinal obstructions, and acute abdominal pain',
      'Trauma stabilization and acute surgical intervention',
      'Direct on-call coordination for prompt clinical action'
    ],
    indications: 'Severe acute abdominal pain, sudden abdominal rigidity, incarcerated hernia, and internal emergencies.',
    indicationsUrdu: 'اچانک شدید درد شکم، پھنسی ہوئی ہرنیا اور ہنگامی سرجیکل پیچیدگیاں۔'
  },
  {
    id: 'appendectomy',
    title: 'Appendectomy (Appendix Surgery)',
    titleUrdu: 'اپینڈکس کا آپریشن (Appendectomy)',
    category: 'surgical',
    shortDesc: 'Surgical excision of an inflamed or infected appendix to prevent life-threatening rupture and peritonitis.',
    shortDescUrdu: 'ورم زدہ یا خراب اپینڈکس کو بحفاظت نکالنے کا مکمل سرجیکل آپریشن۔',
    details: [
      'Prompt management of acute and subacute appendicitis',
      'Prevention of abdominal perforation and peritonitis',
      'Gentle dissection technique ensuring minimal discomfort',
      'Rapid post-operative mobilization and recovery protocols'
    ],
    indications: 'Sharp localized pain in lower right abdomen, fever, nausea, loss of appetite, and tenderness.',
    indicationsUrdu: 'پیٹ کے نچلے دائیں حصے میں تیز درد، الٹی یا متلی، اور بخار۔'
  },
  {
    id: 'cholecystectomy',
    title: 'Cholecystectomy (Gallbladder Surgery)',
    titleUrdu: 'پتے کا آپریشن اور پتھری کا علاج (Cholecystectomy)',
    category: 'surgical',
    shortDesc: 'Surgical removal of diseased gallbladder or gallstones causing severe pain, infection, or jaundice risks.',
    shortDescUrdu: 'پتے کی پتھری اور پتے کی سوزش سے مستقل نجات کے لیے معیاری سرجری۔',
    details: [
      'Complete surgical removal of symptomatic gallstones',
      'Relief from recurrent biliary colic and food intolerance',
      'Pre-operative ultrasound and liver function assessment',
      'Careful protection of bile duct anatomy and safe recovery'
    ],
    indications: 'Pain after fatty meals under right ribcage, recurrent indigestion, biliary colic, and cholecystitis.',
    indicationsUrdu: 'چکنائی والے کھانے کے بعد دائیں پسلی کے نیچے شدید درد، متلی اور بدہضمی۔'
  },
  {
    id: 'hernia-repair',
    title: 'Hernia Repair (Hernioplasty & Herniorrhaphy)',
    titleUrdu: 'ہرنیا کا آپریشن (Hernia Repair)',
    category: 'surgical',
    shortDesc: 'Anatomical repair of inguinal, umbilical, epigastric, or incisional abdominal wall hernias.',
    shortDescUrdu: 'ناف، پیٹ یا رانوں کے ابھار (ہرنیا) کا جدید میش اور محفوظ طریقہ کار سے علاج۔',
    details: [
      'Inguinal, femoral, umbilical, and incisional hernia repair',
      'High-grade tension-free mesh reinforcement when indicated',
      'Prevention of dangerous strangulation or bowel obstruction',
      'Post-op abdominal care guidance to prevent recurrence'
    ],
    indications: 'Visible swelling or bulge in groin or abdomen that enlarges with standing, coughing, or heavy lifting.',
    indicationsUrdu: 'ناف یا پیٹ پر ابھار جو کھانسنے، وزن اٹھانے یا کھڑے ہونے پر واضح ہو۔'
  },
  {
    id: 'hydrocele-surgery',
    title: 'Hydrocele Surgery (Hydrocelectomy)',
    titleUrdu: 'ہائڈروصیل کا آپریشن (Hydrocele)',
    category: 'surgical',
    shortDesc: 'Safe surgical drainage and excision of scrotal fluid collections causing swelling and discomfort.',
    shortDescUrdu: 'خصیے میں پانی جمع ہونے اور سوجن کو بحفاظت ختم کرنے کا آپریشن۔',
    details: [
      'Definitive elimination of scrotal fluid accumulation',
      'Low recurrence rate with meticulous surgical technique',
      'Outpatient or short stay procedure with smooth recovery',
      'Relief from heaviness, dragging sensation, and cosmetic concern'
    ],
    indications: 'Painless or dragging swelling of scrotum, enlargement, and physical discomfort during movement.',
    indicationsUrdu: 'خصیے کی غیر معمولی سوجن، بھاری پن اور چلنے پھرنے میں دشواری۔'
  },
  {
    id: 'hemorrhoid-piles',
    title: 'Hemorrhoidectomy & Piles Treatment',
    titleUrdu: 'بواسیر کا علاج اور آپریشن (Hemorrhoids / Piles)',
    category: 'surgical',
    shortDesc: 'Conservative and surgical management of internal and external hemorrhoids and anal conditions.',
    shortDescUrdu: 'خونی و بادی بواسیر کا جدید طبی و سرجیکل علاج اور تکلیف سے مستقل نجات۔',
    details: [
      'Evaluation of bleeding, prolapse, and pain severity',
      'Conservative dietary and pharmacological protocols for early grades',
      'Surgical excision for advanced, thrombosed, or prolapsed piles',
      'Management of associated anal fissure or fistula issues'
    ],
    indications: 'Rectal bleeding during bowel movements, painful swelling, prolapse, itching, and severe discomfort.',
    indicationsUrdu: 'پاخانے کے دوران خون آنا، درد، مسوں کا باہر نکلنا اور جلن۔'
  },
  {
    id: 'hysterectomy',
    title: 'Hysterectomy (Uterus Surgery)',
    titleUrdu: 'بچہ دانی کا آپریشن (Hysterectomy)',
    category: 'surgical',
    shortDesc: 'Surgical excision of uterus for fibroids, persistent severe bleeding, or structural uterine disorders.',
    shortDescUrdu: 'خواتین کے پیٹ کے پیچیدہ امراض، رسولی اور بچہ دانی کا مکمل و محفوظ آپریشن۔',
    details: [
      'Comprehensive pre-operative assessment and indication review',
      'Management of severe symptomatic uterine fibroids and bleeding',
      'Sterile operative protocols ensuring patient safety',
      'Thorough post-operative inpatient and outpatient recovery plan'
    ],
    indications: 'Large symptomatic fibroids, uncontrollable abnormal bleeding, chronic pelvic pain, and uterine pathology.',
    indicationsUrdu: 'بچہ دانی کی رسولیاں، غیر معمولی شدید خون بہنا اور پیٹ و پیلو کا پرانا درد۔'
  },
  {
    id: 'thyroid-soft-tissue',
    title: 'Thyroid & Soft Tissue Swellings',
    titleUrdu: 'تھائرائڈ (گلے کی گلٹی) اور جسمانی رسولیاں',
    category: 'surgical',
    shortDesc: 'Clinical examination and surgical excision of thyroid nodules, lipomas, sebaceous cysts, and soft tissue masses.',
    shortDescUrdu: 'گلے کی گلٹیوں، چربی والی رسولیوں اور سسٹس کا طبی معائنہ اور صفائی۔',
    details: [
      'Thyroid enlargement and nodule clinical evaluation',
      'Excision of lipomas, sebaceous cysts, and dermoid cysts',
      'Biopsy and histopathology coordination',
      'Minimal scarring surgical approach'
    ],
    indications: 'Lump in the neck/throat, persistent swelling under the skin, cosmetic concern, or increasing size.',
    indicationsUrdu: 'گلے کے سامنے ابھار، گردن یا جلد کے نیچے رسولیاں یا گلٹیاں۔'
  },
  {
    id: 'urological-evaluation',
    title: 'Kidney Stone, Bladder & Prostate Assessment',
    titleUrdu: 'گردے کی پتھری، مثانہ اور پروسٹیٹ کی تشخیص',
    category: 'opd',
    shortDesc: 'Surgical and clinical diagnostic evaluation of urinary calculi, bladder conditions, and benign prostatic enlargement.',
    shortDescUrdu: 'گردے اور مثانے کی پتھری، پیشاب میں رکاوٹ اور پروسٹیٹ کا سرجیکل معائنہ۔',
    details: [
      'Diagnostic review of ultrasound and CT KUB scans',
      'Evaluation of urinary outflow obstruction and hematuria',
      'Medical expulsion therapy guidance vs surgical referral',
      'Prostate enlargement (BPH) symptom scoring and plan'
    ],
    indications: 'Severe flank pain radiating to groin, painful or frequent urination, blood in urine, and urinary hesitancy.',
    indicationsUrdu: 'گردے اور کمر میں شدید درد، پیشاب میں جلن یا خون، اور پیشاب کی رکاوٹ۔'
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'How can I book an appointment with Dr. Haidar Ali?',
    questionUrdu: 'ڈاکٹر حیدر علی صاحب سے چیک اپ کے لیے وقت کیسے لیا جائے؟',
    answer: 'You can book an appointment directly through our online booking form on this website, or call the clinic at 0309 5958747. You can also send a message on WhatsApp (0342 0972086) for instant confirmation.'
  },
  {
    question: 'What are the clinic opening days and hours?',
    questionUrdu: 'کلینک کے کھلنے کے دن اور اوقات کیا ہیں؟',
    answer: 'Dr. Haidar Ali is available at Pak Health Care Clinic (Pakistan Plaza Shabqadar Bazar) on Friday, Saturday, and Sunday from Morning to Evening (approx. 9:00 AM to 7:00 PM).'
  },
  {
    question: 'Where is the clinic located in Shabqadar?',
    questionUrdu: 'کلینک شبقدر میں کس جگہ واقع ہے؟',
    answer: 'The clinic is located at Pak Health Care Clinic, Shop # 3-4, Pakistan Plaza, Mechanai Road, Shabqadar Bazar, Khyber Pakhtunkhwa, Pakistan.'
  },
  {
    question: 'What is the consultation fee?',
    questionUrdu: 'معائنے کی فیس کتنی ہے؟',
    answer: 'The standard OPD consultation fee is PKR 700 to 1,000. Procedure and surgery costs are communicated transparently depending on the specific surgical procedure and hospital facility required.'
  },
  {
    question: 'What degrees and surgical qualifications does Dr. Haidar Ali hold?',
    questionUrdu: 'ڈاکٹر صاحب کی ڈگریاں اور قابلیت کیا ہیں؟',
    answer: 'Dr. Haidar Ali holds MBBS, MCPS, and FCPS in General Surgery from the prestigious College of Physicians and Surgeons Pakistan (CPSP). He is PMC/PMDC registered (Reg: 24232-N) with surgical training from Lady Reading Hospital (LRH) Peshawar and over 3 years of specialist consultant experience.'
  },
  {
    question: 'What medical and surgical conditions are treated?',
    questionUrdu: 'کون کون سے امراض اور سرجریز کی جاتی ہیں؟',
    answer: 'Dr. Haidar Ali conducts General Surgery OPD and manages acute surgical emergencies. Key surgical procedures include appendectomy (appendix), cholecystectomy (gallbladder & stones), hernia repairs, hydrocele surgery, hemorrhoids (piles), hysterectomy (uterine surgery), thyroid and soft tissue masses, as well as kidney stone and prostate evaluations.'
  },
  {
    question: 'How are surgical emergencies handled?',
    questionUrdu: 'ہنگامی سرجیکل ایمرجنسی میں کیا کیا جائے؟',
    answer: 'For acute surgical emergencies (severe acute abdomen, appendix rupture suspicion, strangulated hernia), contact Dr. Haidar Ali immediately at 0309 5958747 or WhatsApp 0342 0972086, or report to the emergency unit of the nearest affiliated tertiary hospital.'
  }
];
