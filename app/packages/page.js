'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PACKAGES } from '@/lib/data';

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Health packages</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight text-balance">Designed by pathologists. <span className="gradient-text">For real life.</span></h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">Curated panels for every age and need — from foundational wellness to deep cardiac and metabolic screening.</p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className={`relative h-full rounded-3xl p-8 border shadow-soft hover:shadow-premium overflow-hidden ${i===1 ? 'bg-gradient-to-br from-slate-900 to-blue-950 text-white border-white/10' : 'bg-white border-black/5'}`}>
                {i===1 && <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-white/15 px-2 py-1 rounded-full"><Sparkles className="w-3 h-3" />Bestseller</div>}
                <div className={`text-xs uppercase tracking-[0.2em] ${i===1 ? 'text-blue-300' : 'text-blue-600'} font-semibold`}>{p.audience}</div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">₹{p.price}</span>
                  <span className={`text-sm line-through ${i===1 ? 'text-white/40' : 'text-muted-foreground'}`}>₹{p.mrp}</span>
                </div>
                <div className={`mt-1 text-xs ${i===1 ? 'text-white/60' : 'text-muted-foreground'}`}>{p.tests} tests · single visit</div>
                <ul className="mt-6 space-y-2.5">
                  {p.highlights.map((h) => (<li key={h} className="flex gap-2 text-sm"><Check className={`w-4 h-4 mt-0.5 ${i===1 ? 'text-emerald-300' : 'text-emerald-600'}`} />{h}</li>))}
                </ul>
                <Link href="/home-collection" className={`mt-8 inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full text-sm font-semibold ${i===1 ? 'bg-white text-foreground' : 'bg-foreground text-background'}`}>Book this package <ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
