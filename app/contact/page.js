'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Get in touch</div>
          <h1 className="mt-3 text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl text-balance">We’re here — 24 / 7.</h1>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, t: 'Call', d: '+91-9069980136', sub: 'Mon–Sun, 24 hrs' },
            { icon: Mail, t: 'Email', d: 'support@rrdrindia.com', sub: 'Reply within 1 hour' },
            { icon: MapPin, t: 'Visit', d: 'Sector-52, Gurugram', sub: 'Baba Chitru Complex, Wazirabad' },
          ].map((c,i)=>(
            <Reveal key={i} delay={i*0.06}>
              <div className="rounded-3xl p-7 bg-white border border-black/5 shadow-soft">
                <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><c.icon className="w-5 h-5 text-white" /></div>
                <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                <div className="mt-1 font-bold text-lg tracking-tight">{c.d}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-14 glass rounded-3xl p-8 shadow-premium max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight">Send us a message</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
              <input placeholder="Email" className="px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
              <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
              <input placeholder="Subject" className="px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
              <textarea placeholder="Message" rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl bg-white border border-black/10 text-sm" />
            </div>
            <motion.button whileTap={{ scale: 0.98 }} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold">Send message <Send className="w-4 h-4" /></motion.button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
