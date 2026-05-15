'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { FAQS } from '@/lib/data';

export default function FAQPage() {
  const [open, setOpen] = useState(0);
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Frequently asked</div>
          <h1 className="mt-3 text-5xl lg:text-6xl font-bold tracking-tight text-balance">Answers, transparently.</h1>
        </Reveal>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i)=>{
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i*0.04}>
                <div className="rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden">
                  <button onClick={()=>setOpen(isOpen ? -1 : i)} className="w-full p-5 flex items-center justify-between gap-4 text-left">
                    <span className="font-semibold tracking-tight">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center">{isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
