'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, FileText, TrendingUp, TrendingDown, Calendar, User, LogOut, Bell, Search, ChevronRight, Activity } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { REPORTS } from '@/lib/data';

const TRENDS = [
  { name: 'HbA1c', value: '5.4', unit: '%', range: '< 5.7', trend: 'down', delta: '-0.3', color: 'emerald' },
  { name: 'Vitamin D', value: '28', unit: 'ng/mL', range: '30-100', trend: 'up', delta: '+6', color: 'amber' },
  { name: 'Cholesterol', value: '184', unit: 'mg/dL', range: '< 200', trend: 'down', delta: '-12', color: 'emerald' },
  { name: 'TSH', value: '2.1', unit: 'mIU/L', range: '0.4-4.0', trend: 'down', delta: '-0.2', color: 'emerald' },
];

export default function ReportDashboard() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-slate-50/60 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top bar */}
        <Reveal>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow text-white text-lg font-bold">AK</div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Welcome back</div>
                <div className="font-bold text-2xl tracking-tight">Aarav Kapoor</div>
                <div className="text-xs text-muted-foreground">Patient ID · RRDR-P-0084-321 · Age 32 · Male</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center"><Bell className="w-4 h-4" /></button>
              <Link href="/" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm font-semibold"><LogOut className="w-3.5 h-3.5" />Sign out</Link>
            </div>
          </div>
        </Reveal>

        {/* Health summary cards */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRENDS.map((t, i)=>(
            <Reveal key={t.name} delay={i*0.06}>
              <motion.div whileHover={{ y: -3 }} className="rounded-3xl p-6 bg-white border border-black/5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.name}</div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${t.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {t.trend === 'down' ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}{t.delta}
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-3xl font-bold tracking-tight">{t.value}</div>
                  <div className="text-xs text-muted-foreground">{t.unit}</div>
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">Normal: {t.range}</div>
                <div className="mt-4 relative h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }} viewport={{ once: true }} className={`absolute inset-y-0 left-0 rounded-full ${t.color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Reports list */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="rounded-3xl bg-white border border-black/5 shadow-soft overflow-hidden">
                <div className="p-6 flex items-center justify-between border-b border-black/5">
                  <div><h3 className="font-bold text-lg tracking-tight">My reports</h3><div className="text-xs text-muted-foreground mt-0.5">{REPORTS.length} reports · last 12 months</div></div>
                  <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" /><input placeholder="Search" className="pl-9 pr-3 py-2 rounded-full bg-slate-50 text-sm w-40 focus:outline-none" /></div>
                </div>
                <ul className="divide-y divide-black/5">
                  {REPORTS.map((r, i)=>(
                    <motion.li key={r.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="p-5 flex items-center gap-4 hover:bg-slate-50/60 transition">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center"><FileText className="w-5 h-5 text-blue-600" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold tracking-tight truncate">{r.test}</div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{r.date}</span>
                          <span>· {r.id}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${r.status === 'Ready' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{r.status}</span>
                      {r.status === 'Ready' ? (<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold"><Download className="w-3 h-3" />PDF</button>) : (<span className="text-xs text-muted-foreground">{r.size}</span>)}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Side */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-premium relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl" />
                <div className="text-xs uppercase tracking-wider text-blue-300">Next checkup</div>
                <div className="mt-2 text-2xl font-bold tracking-tight">In 28 days</div>
                <p className="mt-2 text-sm text-white/70">Quarterly Aarogya Advanced · 9 Jul 2025</p>
                <Link href="/home-collection" className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-foreground text-xs font-semibold">Reschedule <ChevronRight className="w-3.5 h-3.5" /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl p-6 bg-white border border-black/5 shadow-soft">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Activity className="w-3.5 h-3.5" />AI Insights</div>
                <div className="mt-3 text-sm leading-relaxed">Your Vitamin D has improved 27% since last quarter, but is still <b>below optimal</b>. Continue supplementation and 15 min daily sunlight exposure.</div>
                <Link href="/blogs" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">Read more <ChevronRight className="w-3 h-3" /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl p-6 bg-white border border-black/5 shadow-soft">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><User className="w-3.5 h-3.5" />Profile</div>
                <ul className="mt-3 space-y-2 text-sm"><li className="flex justify-between"><span className="text-muted-foreground">Blood group</span><span className="font-semibold">O+</span></li><li className="flex justify-between"><span className="text-muted-foreground">Allergies</span><span className="font-semibold">None</span></li><li className="flex justify-between"><span className="text-muted-foreground">Linked family</span><span className="font-semibold">3</span></li></ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
