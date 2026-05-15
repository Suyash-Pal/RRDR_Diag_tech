'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { DOCTORS } from '@/lib/data';

const EXTRA = [
  { name: 'Dr. Karthik Subramaniam', role: 'Histopathologist, MD', exp: '17 yrs', img: DOCTORS[0].img, specialties: ['Onco-pathology','Cytology'] },
  { name: 'Dr. Meera Bhattacharya', role: 'Geneticist, PhD', exp: '14 yrs', img: DOCTORS[2].img, specialties: ['NGS','Rare Disease'] },
  { name: 'Dr. Sahil Arora', role: 'Clinical Biochemist, MD', exp: '12 yrs', img: DOCTORS[3].img, specialties: ['Metabolic','Toxicology'] },
  { name: 'Dr. Tanya Roy', role: 'Hematologist, DM', exp: '16 yrs', img: DOCTORS[1].img, specialties: ['Bone Marrow','Coagulation'] },
];

export default function DoctorsPage() {
  const all = [...DOCTORS, ...EXTRA];
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Specialist team</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight text-balance">The pathologists behind every report.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">320+ board-certified specialists across pathology, hematology, biochemistry, microbiology and molecular diagnostics.</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {all.map((d, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="group rounded-3xl overflow-hidden bg-white border border-black/5 shadow-soft hover:shadow-premium">
                <div className="relative aspect-[4/5] bg-slate-100">
                  <Image src={d.img} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                    {d.specialties.map((s)=>(<span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full glass-dark text-white">{s}</span>))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-bold tracking-tight">{d.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{d.role} · {d.exp}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
