'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, TestTube, Clock, Beaker, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { TESTS } from '@/lib/data';

export default function TestsPage() {
  const [q, setQ] = useState('');
  const filtered = TESTS.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Diagnostic catalog</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight text-balance">All tests, transparently priced.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">Browse 1,200+ pathology, biochemistry, hematology and molecular tests. Verified by MD pathologists.</p>
        </Reveal>
        <div className="mt-12 max-w-xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search Vitamin D, CBC, Thyroid..." className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass shadow-soft text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.03}>
              <motion.div whileHover={{ y: -4 }} className="group rounded-3xl p-7 bg-white border border-black/5 shadow-soft hover:shadow-premium">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center"><TestTube className="w-5 h-5 text-blue-600" /></div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{t.tag}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{t.description}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-foreground/70">
                  <span className="flex items-center gap-1"><Beaker className="w-3.5 h-3.5" />{t.parameters} parameters</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{t.time}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div><span className="text-2xl font-bold"></span><span className="ml-2 text-sm text-muted-foreground line-through"></span></div>
                  <Link href="/home-collection" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">Add <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
