export const TESTS = [
  { slug: 'cbc', name: 'Complete Blood Count (CBC)', price: 349, mrp: 549, parameters: 28, time: '6 hrs', tag: 'Most Booked', description: 'Comprehensive analysis of red cells, white cells, hemoglobin & platelets to detect anemia, infections & immune disorders.' },
  { slug: 'thyroid', name: 'Thyroid Profile (TSH, T3, T4)', price: 599, mrp: 899, parameters: 3, time: '8 hrs', tag: 'Hormone', description: 'Evaluates thyroid gland function — essential for energy, metabolism, weight and mood.' },
  { slug: 'diabetes', name: 'Diabetes Screening (HbA1c + FBS)', price: 499, mrp: 799, parameters: 4, time: '6 hrs', tag: 'Lifestyle', description: 'Three-month sugar history and fasting glucose — gold-standard diabetes risk assessment.' },
  { slug: 'vitamin-d', name: 'Vitamin D (25-OH)', price: 1199, mrp: 1799, parameters: 1, time: '24 hrs', tag: 'Wellness', description: 'Detects deficiency linked to fatigue, bone weakness, immunity and mood disorders.' },
  { slug: 'liver', name: 'Liver Function Profile (LFT)', price: 549, mrp: 899, parameters: 12, time: '8 hrs', tag: 'Organ', description: 'Detailed enzymes, bilirubin and protein panel — assesses liver health and damage.' },
  { slug: 'kidney', name: 'Kidney Function Test (KFT)', price: 549, mrp: 899, parameters: 9, time: '8 hrs', tag: 'Organ', description: 'Creatinine, urea, electrolytes & GFR — early detection of kidney dysfunction.' },
  { slug: 'lipid', name: 'Lipid Profile', price: 449, mrp: 699, parameters: 8, time: '8 hrs', tag: 'Cardiac', description: 'Cholesterol, triglycerides & HDL/LDL — cardiovascular risk assessment.' },
  { slug: 'vitamin-b12', name: 'Vitamin B12', price: 899, mrp: 1299, parameters: 1, time: '24 hrs', tag: 'Wellness', description: 'Detects deficiency tied to fatigue, nerve issues and anemia.' },
];

export const PACKAGES = [
  { slug: 'aarogya-essential', name: 'Aarogya Essential', price: 1299, mrp: 3499, tests: 56, audience: 'Adults 25+', highlights: ['Complete Hemogram','Diabetes (HbA1c)','Lipid Profile','Liver & Kidney','Thyroid'] },
  { slug: 'aarogya-advanced', name: 'Aarogya Advanced', price: 2599, mrp: 6499, tests: 78, audience: 'Adults 35+', highlights: ['Cardiac Risk Markers','Vitamin D & B12','Iron Studies','HbA1c + Insulin','Full Hormonal Panel'] },
  { slug: 'women-wellness', name: 'Women Wellness Pro', price: 2199, mrp: 5299, tests: 64, audience: 'Women 25+', highlights: ['PCOS Hormonal Panel','Thyroid (T3,T4,TSH)','Iron + Ferritin','Vitamin D & B12','PAP HPV (optional)'] },
  { slug: 'men-vitality', name: 'Men Vitality', price: 2099, mrp: 4999, tests: 58, audience: 'Men 30+', highlights: ['Testosterone','PSA','Cardiac Risk','Liver & Kidney','Diabetes Panel'] },
  { slug: 'senior-care', name: 'Senior Care 360', price: 3299, mrp: 7499, tests: 92, audience: 'Adults 55+', highlights: ['Cardiac Markers','Diabetes + Insulin','Bone Health','Vit D, B12, Calcium','Full Organ Panel'] },
  { slug: 'pre-employment', name: 'Pre-Employment', price: 999, mrp: 2299, tests: 38, audience: 'Corporate', highlights: ['CBC','Liver','Kidney','Diabetes','Lipid'] },
];

export const DOCTORS = [
  { name: 'Dr. Ananya Mehra', role: 'Chief Pathologist, MD', exp: '22 yrs', img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc3RpY3N8ZW58MHx8fGJsdWV8MTc3ODgzNjA3NHww&ixlib=rb-4.1.0&q=85', specialties: ['Hematology','Molecular'] },
  { name: 'Dr. Rohan Khanna', role: 'Senior Consultant, DM', exp: '18 yrs', img: 'https://images.unsplash.com/photo-1613932179258-f75a8de3058f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzc4ODM2MDc0fDA&ixlib=rb-4.1.0&q=85', specialties: ['Endocrinology','Cardiac'] },
  { name: 'Dr. Priya Iyer', role: 'Microbiologist, PhD', exp: '15 yrs', img: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxsYWJvcmF0b3J5fGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85', specialties: ['Infectious Diseases','Genomics'] },
  { name: 'Dr. Aditya Verma', role: 'Biochemist, MD', exp: '20 yrs', img: 'https://images.unsplash.com/photo-1621862926530-37a46ba900bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHxibG9vZCUyMHRlc3R8ZW58MHx8fGJsdWV8MTc3ODgzNjA4MXww&ixlib=rb-4.1.0&q=85', specialties: ['Metabolic','Renal'] },
];

export const TESTIMONIALS = [
  { name: 'Aarav Kapoor', role: 'Patient · Mumbai', text: 'Phlebotomist arrived within 28 minutes. Reports came back the same evening with clear interpretations from a real doctor. This is what premium healthcare should feel like.', rating: 5 },
  { name: 'Dr. Neha Suri', role: 'Cardiologist · Bengaluru', text: 'I refer my patients to RRDR because their accuracy and turnaround are uncompromising. The reports are clean, structured, and clinically reliable.', rating: 5 },
  { name: 'Sameera Khan', role: 'Patient · Delhi', text: 'I dread blood tests, but they made me feel calm. The phlebotomist was gentle, professional, and even brought a tiny gift for my daughter.', rating: 5 },
  { name: 'Vivek Joshi', role: 'CEO · Sequoia Health', text: 'We use RRDR for our 400-member company wellness program. Operationally flawless. Patient experience is unmatched in India.', rating: 5 },
  { name: 'Ritu Banerjee', role: 'Patient · Kolkata', text: 'The dashboard makes tracking my health over time a joy. I can finally see trends in my Vitamin D, HbA1c and lipid profiles.', rating: 5 },
];

export const FAQS = [
  { q: 'How quickly are reports delivered?', a: 'Most routine pathology reports are delivered within 6–8 hours of sample receipt at our lab. Specialized molecular and histopathology reports may take 24–72 hours.' },
  { q: 'Is home sample collection really free?', a: 'Yes. Home collection is complimentary for bookings above ₹399. Our trained phlebotomists arrive within 60–90 minutes in serviced pin codes.' },
  { q: 'Are your labs NABL accredited?', a: 'All RRDR labs are NABL ISO 15189:2022 accredited. We also comply with CAP standards for select advanced diagnostics.' },
  { q: 'Do I need a doctor prescription to book a test?', a: 'No. You can book any direct-access test without a prescription. For insurance reimbursement, a prescription is recommended.' },
  { q: 'How are reports shared?', a: 'Reports are emailed, available via WhatsApp, and downloadable in PDF from your secure RRDR patient dashboard. Hard copies on request.' },
  { q: 'Do you offer corporate health checkups?', a: 'Yes. Our corporate wellness program serves 380+ companies across India with customized panels and bulk discounts.' },
];

export const BLOGS = [
  { slug: 'understanding-hba1c', title: 'Understanding HbA1c: The Three-Month Window Into Your Sugar', cat: 'Diabetes', read: '6 min', date: 'Jun 12, 2025' },
  { slug: 'vitamin-d-india', title: 'Why 76% of Urban Indians Are Vitamin D Deficient', cat: 'Wellness', read: '5 min', date: 'Jun 04, 2025' },
  { slug: 'thyroid-symptoms', title: 'Subtle Thyroid Symptoms You Should Never Ignore', cat: 'Hormones', read: '7 min', date: 'May 28, 2025' },
  { slug: 'preventive-checkups', title: 'The Science of Preventive Health Checkups After 30', cat: 'Preventive', read: '8 min', date: 'May 19, 2025' },
];

export const REPORTS = [
  { id: 'RRDR-2025-08431', test: 'Aarogya Advanced Package', date: '2025-06-18', status: 'Ready', size: '1.2 MB' },
  { id: 'RRDR-2025-08210', test: 'Vitamin D (25-OH)', date: '2025-05-22', status: 'Ready', size: '420 KB' },
  { id: 'RRDR-2025-07892', test: 'Thyroid Profile (T3, T4, TSH)', date: '2025-04-09', status: 'Ready', size: '510 KB' },
  { id: 'RRDR-2025-07444', test: 'Complete Blood Count', date: '2025-02-14', status: 'Ready', size: '380 KB' },
  { id: 'RRDR-2025-09112', test: 'Cardiac Risk Markers', date: '2025-06-20', status: 'In Progress', size: '—' },
];
