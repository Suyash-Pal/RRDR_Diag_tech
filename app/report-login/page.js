'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png';

export default function ReportLogin() {
  const router = useRouter();
  const [phase, setPhase] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const submitPhone = (e) => { e.preventDefault(); if (phone.length >= 10) setPhase('otp'); };
  const submitOtp = (e) => { e.preventDefault(); if (otp.join('').length === 6) router.push('/report-dashboard'); };
  const setOtpAt = (i, v) => {
    const next = [...otp]; next[i] = v.slice(-1); setOtp(next);
    if (v && i < 5) document.getElementById(`otp-${i+1}`)?.focus();
  };
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-50" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/60 via-emerald-100/40 to-transparent blur-3xl" />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-4">
        <div className="glass rounded-3xl p-8 shadow-premium">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-soft ring-1 ring-black/5 bg-white">
              <Image src={LOGO} alt="Rroyals Diagnostics" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold tracking-tight">Rroyals Diagnostics Patient Portal</div>
              <div className="text-xs text-muted-foreground">Secure report access</div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {phase === 'phone' ? (
              <motion.form key="phone" onSubmit={submitPhone} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="mt-7">
                <h2 className="text-2xl font-bold tracking-tight">Welcome back</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter your mobile to receive a one-time code.</p>
                <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mobile number</label>
                <div className="mt-2 flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-white border border-black/10 focus-within:ring-2 focus-within:ring-blue-400/40">
                  <span className="text-sm font-semibold text-foreground/70">+91</span>
                  <input value={phone} onChange={(e)=>setPhone(e.target.value.replace(/\D/g,'').slice(0,10))} placeholder="98765 43210" className="flex-1 text-sm focus:outline-none bg-transparent" />
                </div>
                <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Patient ID (optional)</label>
                <input placeholder="RRDR-2025-08431" className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
                <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background text-sm font-semibold">Send OTP <ArrowRight className="w-4 h-4" /></button>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />HIPAA-grade encryption · ISO 27001 secure</div>
              </motion.form>
            ) : (
              <motion.form key="otp" onSubmit={submitOtp} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="mt-7">
                <h2 className="text-2xl font-bold tracking-tight">Verify OTP</h2>
                <p className="text-sm text-muted-foreground mt-1">Code sent to +91 {phone}. <button type="button" onClick={()=>setPhase('phone')} className="text-blue-600 font-medium">Change</button></p>
                <div className="mt-6 flex justify-between gap-2">
                  {otp.map((d, i)=>(<input key={i} id={`otp-${i}`} value={d} onChange={(e)=>setOtpAt(i, e.target.value)} maxLength={1} className="w-full aspect-square text-center text-xl font-bold rounded-2xl bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40" />))}
                </div>
                <button type="submit" className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background text-sm font-semibold">Access reports <ArrowRight className="w-4 h-4" /></button>
                <p className="mt-3 text-xs text-center text-muted-foreground">Didn’t receive code? <button type="button" className="text-blue-600 font-medium">Resend in 23s</button></p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">Demo · Enter any 10-digit number & any 6-digit code to continue.</p>
      </motion.div>
    </div>
  );
}
