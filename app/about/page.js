'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import Reveal from '@/components/Reveal';

const IMG = 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85';

export default function AboutPage() {
  const stats = [
    { v: 22, suffix: '+', label: 'Years of pathology' },
    { v: 184, suffix: '', label: 'Cities served' },
    { v: 38, suffix: '', label: 'NABL labs' },
    { v: 320, suffix: '+', label: 'Specialist doctors' },
  ];
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Our story</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance">Built by clinicians. <span className="gradient-text">Engineered like Apple.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Rroyals Diagnostics Research Pvt. Ltd. was founded by a team of clinicians and engineers who believed Indian diagnostics deserved a fundamental redesign — with patient experience, accuracy, and elegance at the center.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 relative aspect-[21/9] rounded-[28px] overflow-hidden shadow-premium">
            <Image src={IMG} alt="RRDR Lab" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i)=>(
            <Reveal key={i} delay={i*0.06}>
              <div className="rounded-3xl p-7 glass shadow-soft">
                <div className="text-4xl font-bold tracking-tight"><AnimatedCounter to={s.v} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal><h2 className="text-4xl lg:text-5xl font-bold tracking-tight">A different kind of diagnostics company.</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>We invest deeply in clinical operations and quality systems — because diagnostic reports are only as reliable as the processes behind them. Every workflow is built around precision, traceability, and patient safety.</p>
              <p>Our labs run on Roche cobas, Siemens Atellica and Abbott Architect platforms, calibrated daily and audited monthly. Our software stack — booking, dispatch, LIMS, dashboard — is built in-house.</p>
              <p>The result is a diagnostics experience that feels less like a hospital errand, and more like a thoughtful, premium service. Quietly extraordinary.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Award, t: 'Accuracy first', d: 'Six-sigma quality controls across every sample.' },
            { icon: ShieldCheck, t: 'Patient first', d: 'Same-day reporting, doctor verified.' },
            { icon: Sparkles, t: 'Design first', d: 'A diagnostic experience worth talking about.' },
            { icon: Globe, t: 'India first', d: 'Built for Indian patients, by Indian pathologists.' },
          ].map((v,i)=>(
            <Reveal key={i} delay={i*0.06}>
              <div className="rounded-3xl p-7 bg-white border border-black/5 shadow-soft hover:shadow-premium transition">
                <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><v.icon className="w-5 h-5 text-white" /></div>
                <h3 className="mt-5 font-bold tracking-tight">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
