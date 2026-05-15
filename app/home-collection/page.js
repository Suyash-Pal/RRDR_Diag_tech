'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Home, MapPin, User, Phone, ArrowRight, ArrowLeft, Check, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STEPS = ['Test', 'Schedule', 'Patient', 'Confirm'];

export default function HomeCollectionPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ test: 'Aarogya Advanced', date: '', time: '', name: '', phone: '', address: '', pin: '' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold text-center">Home Sample Collection</div>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-center text-balance">Book in 60 seconds. Free across India.</h1>
        </Reveal>

        <div className="mt-12 glass rounded-3xl p-8 shadow-premium">
          {/* Progress */}
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <motion.div animate={{ backgroundColor: i <= step ? '#0a0a0a' : '#e5e7eb', color: i <= step ? '#fff' : '#9ca3af' }} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{i < step ? <Check className="w-4 h-4" /> : i + 1}</motion.div>
                {i < STEPS.length - 1 && (<div className="flex-1 h-px mx-2 bg-foreground/10 relative"><motion.div initial={false} animate={{ scaleX: i < step ? 1 : 0 }} style={{ originX: 0 }} className="absolute inset-0 bg-foreground" /></div>)}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-4 text-[11px] uppercase tracking-wider text-muted-foreground">
            {STEPS.map((s) => (<div key={s}>{s}</div>))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }} className="mt-8">
              {step === 0 && (
                <div>
                  <label className="text-sm font-semibold">Selected package / test</label>
                  <select value={form.test} onChange={(e)=>set('test', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm">
                    <option>Aarogya Advanced</option><option>Aarogya Essential</option><option>Women Wellness Pro</option><option>Men Vitality</option><option>Senior Care 360</option><option>Complete Blood Count</option><option>Thyroid Profile</option><option>Vitamin D</option>
                  </select>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Home Collection', 'Lab Visit'].map((x,i)=>(
                      <button key={x} className={`p-4 rounded-2xl border text-left ${i===0 ? 'border-foreground bg-foreground/5' : 'border-black/10 bg-white'}`}>
                        <div className="flex items-center gap-2 font-semibold text-sm"><Home className="w-4 h-4" />{x}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{i===0 ? 'Free · 60-90 min' : 'Walk-in · No wait'}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2"><Calendar className="w-4 h-4" />Date</label>
                    <input type="date" value={form.date} onChange={(e)=>set('date', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2"><Clock className="w-4 h-4" />Time slot</label>
                    <select value={form.time} onChange={(e)=>set('time', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm">
                      <option value="">Select slot</option><option>6:00 – 7:00 AM</option><option>7:00 – 8:00 AM</option><option>8:00 – 9:00 AM</option><option>9:00 – 10:00 AM</option>
                    </select>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-semibold flex items-center gap-2"><User className="w-4 h-4" />Full name</label><input value={form.name} onChange={(e)=>set('name', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" placeholder="Aarav Kapoor" /></div>
                  <div><label className="text-sm font-semibold flex items-center gap-2"><Phone className="w-4 h-4" />Mobile</label><input value={form.phone} onChange={(e)=>set('phone', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" placeholder="+91 98765 43210" /></div>
                  <div className="sm:col-span-2"><label className="text-sm font-semibold flex items-center gap-2"><MapPin className="w-4 h-4" />Address</label><textarea value={form.address} onChange={(e)=>set('address', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" rows={3} placeholder="House, street, locality" /></div>
                  <div><label className="text-sm font-semibold">PIN code</label><input value={form.pin} onChange={(e)=>set('pin', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" placeholder="400051" /></div>
                </div>
              )}
              {step === 3 && (
                <div className="text-center py-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220 }} className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center"><Check className="w-8 h-8 text-emerald-600" /></motion.div>
                  <h3 className="mt-5 text-2xl font-bold">Booking confirmed</h3>
                  <p className="mt-2 text-muted-foreground text-sm">A phlebotomist will arrive on {form.date || 'your selected date'} at {form.time || 'your selected slot'}. Reference: <b>RRDR-CN-{Math.floor(Math.random()*99999)}</b></p>
                  <Link href="/report-login" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold">Track in dashboard <ArrowRight className="w-4 h-4" /></Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-8 flex justify-between">
              <button onClick={back} disabled={step===0} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold disabled:opacity-40"><ArrowLeft className="w-4 h-4" />Back</button>
              <button onClick={next} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold">Continue <ArrowRight className="w-4 h-4" /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
