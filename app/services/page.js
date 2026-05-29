'use client';
import { motion } from 'framer-motion';
import { HeartPulse, Eye, FlaskConical, Stethoscope, Syringe, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

const SERVICES = [
  {
    icon: HeartPulse,
    tag: 'Preventive',
    name: 'General Health Checkup',
    desc: 'Complete physical examination and health assessment designed to evaluate overall health condition, identify early concerns, and support preventive healthcare.',
    items: [
      'General Physical Examination',
      'Height, Weight, BMI',
      'Pulse Rate & BP',
      'FAT%',
      'Systemic Examination',
      'Skin Examination',
      'Abdomen Check',
    ],
  },
  {
    icon: Eye,
    tag: 'Vision Care',
    name: 'Vision Screening',
    desc: 'Comprehensive eye and vision screening services for evaluating visual clarity, eye coordination, and color recognition.',
    items: ['Distant Vision', 'Near Vision', 'Color Vision'],
  },
  {
    icon: FlaskConical,
    tag: 'Pathology',
    name: 'Laboratory Investigations',
    desc: 'Advanced laboratory and pathology testing services using modern diagnostic methods for accurate health assessment and reporting.',
    items: [
      'CBC with ESR',
      'Urine Routine Examination',
      'Random Blood Sugar',
      'Blood Grouping RH Type',
      'VDRL Test',
      'Widal Test',
      'HIV Test',
      'X-ray Chest PA',
    ],
  },
  {
    icon: Stethoscope,
    tag: 'Cardio-Pulmonary',
    name: 'Respiratory & Cardiac Assessment',
    desc: 'Detailed respiratory and cardiovascular evaluations focused on monitoring lung function and heart health.',
    items: ['Respiratory System Examination', 'Cardio-Vascular System Examination'],
  },
  {
    icon: Syringe,
    tag: 'Immunization',
    name: 'Vaccination & Immunization',
    desc: 'Preventive vaccination and immunization services designed to support long-term protection against infectious diseases.',
    items: ['Hepatitis A Vaccine', 'Hepatitis B Vaccine', 'Typhoid Vaccine', 'Tetanus'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Our services</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl text-balance">Comprehensive care, <span className="gradient-text">under one roof.</span></h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">A focused spectrum of preventive, diagnostic, and immunization services — delivered with the same precision and warmth across every visit.</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const isWide = i === SERVICES.length - 1 && SERVICES.length % 2 === 1;
            return (
              <Reveal key={s.name} delay={i * 0.06} className={isWide ? 'md:col-span-2' : ''}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="group relative h-full rounded-3xl p-8 lg:p-10 bg-white border border-black/5 shadow-soft hover:shadow-premium overflow-hidden"
                >
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/30 to-emerald-200/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow shrink-0">
                      <s.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{s.tag}</span>
                  </div>

                  <h2 className="mt-7 text-2xl lg:text-3xl font-bold tracking-tight">{s.name}</h2>
                  <p className="mt-3 text-sm lg:text-[15px] text-muted-foreground leading-relaxed max-w-prose">{s.desc}</p>

                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/50 font-semibold mb-4">Services Included</div>
                    <ul className={`grid ${isWide ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'} gap-x-6 gap-y-2.5`}>
                      {s.items.map((it, k) => (
                        <motion.li
                          key={it}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ delay: 0.05 + k * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} />
                          </span>
                          <span>{it}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
