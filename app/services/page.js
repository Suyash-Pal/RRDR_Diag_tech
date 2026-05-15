'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, Dna, Activity, HeartPulse, Brain, Baby, Pill, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const SERVICES = [
  { icon: Microscope, name: 'Pathology', desc: 'Histopathology, cytopathology, and onco-pathology with subspecialty review.' },
  { icon: FlaskConical, name: 'Biochemistry', desc: 'Liver, kidney, lipid, diabetes and metabolic panels on Roche cobas.' },
  { icon: Activity, name: 'Hematology', desc: 'CBC, coagulation, bone marrow & flow cytometry studies.' },
  { icon: Dna, name: 'Molecular & Genomics', desc: 'PCR, NGS, BRCA, cardiac and onco-genomic panels.' },
  { icon: HeartPulse, name: 'Cardiac', desc: 'Troponin, NT-proBNP, lipid risk, CK-MB & advanced biomarkers.' },
  { icon: Brain, name: 'Endocrinology', desc: 'Thyroid, cortisol, sex hormones, growth and pituitary panels.' },
  { icon: Baby, name: 'Pediatric & Maternal', desc: 'Newborn screening, antenatal panels, TORCH and NIPT.' },
  { icon: Pill, name: 'Therapeutic Drug Monitoring', desc: 'Drug levels and toxicology by LC-MS/MS.' },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Diagnostic services</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl text-balance">Every test. Under one roof.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">A complete spectrum of pathology, biochemistry, and molecular diagnostics — with subspecialty review on every complex case.</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i)=>(
            <Reveal key={i} delay={i*0.04}>
              <motion.div whileHover={{ y: -4 }} className="h-full rounded-3xl p-7 bg-white border border-black/5 shadow-soft hover:shadow-premium">
                <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><s.icon className="w-5 h-5 text-white" /></div>
                <h3 className="mt-5 font-bold tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link href="/tests" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">Explore tests <ArrowRight className="w-3.5 h-3.5" /></Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
