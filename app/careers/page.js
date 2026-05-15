'use client';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const JOBS = [
  { role: 'Senior Pathologist (Hematology)', loc: 'Mumbai · Full-time', team: 'Clinical' },
  { role: 'Frontend Engineer — Patient Portal', loc: 'Bengaluru / Remote', team: 'Engineering' },
  { role: 'Phlebotomy Lead', loc: 'Delhi NCR · Field', team: 'Operations' },
  { role: 'Product Designer (Healthcare)', loc: 'Bengaluru · Hybrid', team: 'Design' },
  { role: 'Lab Technician — Molecular', loc: 'Pune · Full-time', team: 'Clinical' },
  { role: 'Data Scientist — AI Insights', loc: 'Remote, India', team: 'Engineering' },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Careers</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl text-balance">Help us redesign Indian healthcare.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">We hire pathologists, engineers, designers and operators who care deeply about craft. Six-week onboarding, world-class peers.</p>
        </Reveal>
        <div className="mt-14 grid gap-3">
          {JOBS.map((j,i)=>(
            <Reveal key={i} delay={i*0.04}>
              <motion.a whileHover={{ y: -2 }} className="group flex items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-black/5 shadow-soft hover:shadow-premium">
                <div>
                  <div className="font-bold tracking-tight text-lg">{j.role}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{j.team}</span><span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{j.loc}</span></div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors"><ArrowUpRight className="w-4 h-4" /></div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
