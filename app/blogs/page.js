'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { BLOGS } from '@/lib/data';

export default function BlogsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Insights</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl text-balance">The RRDR Journal.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">Pathologist-reviewed health insights, deep dives on common conditions, and practical guidance you can trust.</p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {BLOGS.map((b, i)=>(
            <Reveal key={b.slug} delay={i*0.06}>
              <motion.a whileHover={{ y: -4 }} className="group block rounded-3xl p-8 bg-gradient-to-br from-white to-slate-50/60 border border-black/5 shadow-soft hover:shadow-premium">
                <div className="flex items-center gap-3 text-xs"><span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold uppercase tracking-wider">{b.cat}</span><span className="text-muted-foreground">{b.date}</span><span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{b.read}</span></div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">{b.title}</h3>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">Read article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" /></div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
