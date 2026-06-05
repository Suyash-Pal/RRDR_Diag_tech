'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Activity, Droplet, FlaskConical, ShieldCheck, Clock, Sparkles, ChevronRight, Star, BadgeCheck, Calendar, Home, FileText, Download, Microscope, HeartPulse, Stethoscope, TestTube, Beaker, Award, UserCheck, Zap, Building2 } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import Reveal from '@/components/Reveal';
import { TESTS, TESTIMONIALS } from '@/lib/data';

const HERO_IMG = 'https://images.unsplash.com/photo-1656331797721-b593b8f00297?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxsYWJvcmF0b3J5fGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85';
const LAB_IMG = 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85';
const PHLEBO_IMG = 'https://images.unsplash.com/photo-1621862926530-37a46ba900bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHxibG9vZCUyMHRlc3R8ZW58MHx8fGJsdWV8MTc3ODgzNjA4MXww&ixlib=rb-4.1.0&q=85';
const MICRO_IMG = 'https://images.unsplash.com/photo-1647083701153-b511157232ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwzfHxtaWNyb3Njb3BlfGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85';

function CursorGlow() {
  const x = useMotionValue(-200); const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30 });
  const sy = useSpring(y, { stiffness: 200, damping: 30 });
  useEffect(() => {
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed top-0 left-0 z-[5] hidden md:block">
      <div className="-translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-400/20 via-emerald-300/10 to-transparent blur-3xl" />
    </motion.div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  return (
    <section ref={ref} className="relative pt-36 lg:pt-44 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-blue-200/60 via-emerald-100/40 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div style={{ y, opacity }} className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground/70 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            NABL accredited · ISO 9001:2015 · 200,000+ patients
          </motion.div>

          <h1 className="mt-6 text-[40px] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-balance">
            <motion.span initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22,1,0.36,1] }} className="block">Diagnostics, reimagined</motion.span>
            <motion.span initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.22,1,0.36,1] }} className="block gradient-text">with luxury-grade care.</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Same-day pathology reports, doctor-verified, delivered to your dashboard. Sample collection across 41 cities — booked in under 60 seconds.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.8 }} className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/tests" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-premium">
              Book a Test <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link href="/report-login" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-sm font-semibold shadow-soft">
              <Download className="w-4 h-4" /> Download Report
            </Link>
            <Link href="/home-collection" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-foreground/70 hover:text-foreground">
              <Home className="w-4 h-4" /> Corporate Sample Collection <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />NABL accredited</div>
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-600" />6h average TAT</div>
            <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-500" />4.92 / 5 rated</div>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.22,1,0.36,1] }} className="relative mt-20 mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden shadow-premium border border-white/60 bg-gradient-to-br from-blue-50 to-emerald-50">
            <Image src={HERO_IMG} alt="Premium pathology lab" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />
            {/* Floating UI cards */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.9 }} className="absolute left-4 sm:left-8 top-6 sm:top-10 glass rounded-2xl p-3 sm:p-4 shadow-premium animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center"><HeartPulse className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <div className="text-[11px] text-foreground/60 uppercase tracking-wider">HbA1c · 3 month</div>
                  <div className="text-lg font-bold">5.4 <span className="text-xs font-medium text-emerald-600">Normal</span></div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.9 }} className="absolute right-4 sm:right-8 top-12 sm:top-20 glass rounded-2xl p-3 sm:p-4 shadow-premium" style={{ animationDelay: '1s' }}>
              <div className="text-[11px] text-foreground/60 uppercase tracking-wider">Sample collected</div>
              <div className="text-sm font-semibold mt-0.5">Phlebotomist en route</div>
              <div className="text-[11px] text-blue-600 mt-1 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />Arrives in 14 min</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.9 }} className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-8 glass rounded-2xl p-3 sm:p-4 shadow-premium flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <FileText className="w-5 h-5 text-blue-600" />
              <div className="text-sm font-semibold">Report ready</div>
              <div className="text-[11px] text-foreground/60">RRDR-2025-08431</div>
              <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-[10px] font-semibold">VERIFIED</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { v: 100000, suffix: '+', label: 'Reports processed', icon: FileText },
    { v: 12, suffix: ' yrs', label: 'Pathology expertise', icon: Award },
    { v: 99.97, suffix: '%', decimals: 2, label: 'Diagnostic accuracy', icon: ShieldCheck },
    { v: 10, suffix: '+', label: 'Specialist doctors', icon: Stethoscope },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-black/5 border border-black/5 shadow-soft">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-white p-8 lg:p-10">
              <it.icon className="w-5 h-5 text-blue-600 mb-4" />
              <div className="text-4xl lg:text-5xl font-bold tracking-tight">
                <AnimatedCounter to={it.v} suffix={it.suffix} decimals={it.decimals || 0} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularTests() {
  const popular = TESTS.slice(0, 6);
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Most booked</div>
              <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">Popular diagnostic tests</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Doctor-curated panels covering 92% of preventive screening needs.</p>
            </div>
            <Link href="/tests" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold hover:text-blue-600">View all tests <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }} className="group relative h-full rounded-3xl p-7 bg-white border border-black/5 shadow-soft hover:shadow-premium overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
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
                  {/* <div>
                    <span className="text-2xl font-bold">₹{t.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">₹{t.mrp}</span>
                  </div> */}
                  <Link href="/tests" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">Book <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCollectionFlow() {
  const steps = [
    { icon: Calendar, title: 'Book online', desc: 'Pick your test or package and choose a slot in under 60 seconds.' },
    { icon: Home, title: 'Sample collection', desc: 'Certified phlebotomist arrives at your door in 60–90 minutes.' },
    { icon: Microscope, title: 'Lab analysis', desc: 'Processed at NABL labs using FDA-cleared automated analyzers.' },
    { icon: Download, title: 'Download report', desc: 'Doctor-verified report on dashboard, WhatsApp & email — same day.' },
  ];
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">How it works</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">A frictionless diagnostic experience</h2>
            <p className="mt-4 text-muted-foreground">Four steps. Zero friction. Reports delivered the same day they’re collected.</p>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="relative mx-auto w-[72px] h-[72px] rounded-2xl glass shadow-premium flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-blue-600" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-white/60">
              <Image src={PHLEBO_IMG} alt="Phlebotomist" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 shadow-premium">
                <div className="text-xs uppercase tracking-widest text-foreground/60">Live tracking</div>
                <div className="mt-1 font-semibold">Sample collected in 28 min average</div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">Trained, certified, gentle.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">Our phlebotomists go through a 6-week clinical training program with 200+ hours of supervised practice. Each visit is GPS-tracked, temperature-controlled, and protocol-audited — so your sample reaches the lab in pristine condition.</p>
              <ul className="mt-6 space-y-3">
                {['Sterile, single-use vacutainers','Cold-chain transport (2–8°C)','Real-time ETA & GPS tracking','Vein-finding device for hard draws'].map((x,i)=>(
                  <li key={i} className="flex gap-3 items-center text-sm"><BadgeCheck className="w-4 h-4 text-emerald-600" />{x}</li>
                ))}
              </ul>
              <Link href="/home-collection" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold">Book home collection <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: UserCheck, title: 'Certified Medical Professionals', desc: 'Accurate diagnostics handled by experienced and certified clinicians dedicated to patient care and clinical precision.' },
    { icon: ShieldCheck, title: 'NABL Accredited Certification', desc: 'Quality assured by NABL accreditation — every workflow audited to ISO 15189 international laboratory standards.' },
    { icon: Award, title: 'ISO Medical Certificate', desc: 'ISO compliant medical operations — sample handling, storage and reporting governed by certified protocols.' },
    { icon: Zap, title: 'Fast Report Delivery', desc: 'Same-day turnaround for routine pathology. Reports delivered the moment they pass clinical verification.' },
    { icon: FileText, title: 'Digital & Hardcopy Reports', desc: 'Instant secure access on your patient dashboard, with optional hardcopy delivery anywhere in India.' },
    { icon: Building2, title: 'Corporate Health Checkups', desc: 'End-to-end occupational health programs trusted by leading enterprises — onsite drives and bulk reporting.' },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Why choose us</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">Trust, engineered into every report.</h2>
            <p className="mt-4 text-muted-foreground">Six clinical and operational commitments that make Rroyals Diagnostics the partner of choice for patients and enterprises across India.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="group h-full rounded-3xl p-7 bg-gradient-to-br from-white to-slate-50/60 border border-black/5 shadow-soft hover:shadow-premium">
                <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><it.icon className="w-5 h-5 text-white" /></div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ name, short, color }) {
  const display = short || name;
  const initials = display.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group shrink-0 w-[260px] h-[120px] rounded-2xl bg-white border border-black/5 shadow-soft hover:shadow-premium flex items-center px-6 gap-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div
        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold tracking-tight shadow-soft transition-transform duration-500 group-hover:scale-105"
        style={{ background: color || 'linear-gradient(135deg, #0f172a 0%, #172554 100%)' }}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-semibold tracking-tight text-foreground/85 group-hover:text-foreground transition-colors leading-snug line-clamp-2">{display}</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Enterprise client</div>
      </div>
    </motion.div>
  );
}

function TrustedByClients() {
  const CLIENTS = [
    { name: 'Compass Group', color: 'linear-gradient(135deg, #003DA5 0%, #0077C8 100%)' },
    { name: 'Sodexo India Services Pvt. Ltd.', short: 'Sodexo', color: 'linear-gradient(135deg, #ED1C24 0%, #c40c1e 100%)' },
    { name: 'Shine & Standard', color: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)' },
    { name: 'Life Pillar Foods', color: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)' },
    { name: 'Lemon Tree Hotels', color: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)' },
    { name: 'Rare Hospitality & Services Pvt. Ltd.', short: 'Rare Hospitality', color: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)' },
    { name: 'GDX Security Solutions Pvt. Ltd.', short: 'GDX Security', color: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' },
    { name: 'Shining Star Outsource Pvt. Ltd.', short: 'Shining Star', color: 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)' },
    { name: 'Duster Total Solutions Pvt. Ltd.', short: 'Duster Solutions', color: 'linear-gradient(135deg, #475569 0%, #64748b 100%)' },
    { name: 'Devyani International (Costa Coffee)', short: 'Costa Coffee', color: 'linear-gradient(135deg, #6F1D1B 0%, #8b2c2a 100%)' },
    { name: 'Shubram Hospital Solutions Pvt. Ltd.', short: 'Shubram Hospital', color: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)' },
  ];
  const TRACK = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="absolute inset-0 -z-10 opacity-60 grid-bg mask-fade-b" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Corporate Partners</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">Trusted by leading organizations.</h2>
            <p className="mt-4 text-muted-foreground text-balance">Delivering trusted healthcare and diagnostic services to renowned organizations across industries — hospitality, F&amp;B, security, facilities and hospitals.</p>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)' }}>
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        >
          {TRACK.map((c, i) => (<ClientCard key={i} {...c} />))}
        </motion.div>
      </div>

      {/* Compact grid below for full readability */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14">
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CLIENTS.map((c, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white border border-black/5 shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[13px] font-medium text-foreground/80 truncate">{c.short || c.name}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { v: '11+', l: 'Enterprise clients' },
              { v: '40,000+', l: 'Annual employee screenings' },
              { v: '99.5%', l: 'On-time corporate report SLA' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-premium relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="text-3xl font-bold tracking-tight">{s.v}</div>
                <div className="mt-1 text-xs text-white/70 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


 function LabInfrastructure() {
//   const LAB_ITEMS = [
//     { tag: 'Biochemistry', title: 'Roche cobas Pro', desc: 'Six-sigma automation for liver, kidney, lipid and metabolic panels.' },
//     { tag: 'Immunoassay', title: 'Siemens Atellica', desc: 'Hormone, vitamin and cardiac biomarkers at clinical reference precision.' },
//     { tag: 'Hematology', title: 'Sysmex XN Series', desc: 'High-throughput CBC, reticulocyte and body-fluid analysis with smart flagging.' },
//     { tag: 'Molecular', title: 'Abbott m2000 / NGS', desc: 'Quantitative PCR and next-generation sequencing for advanced diagnostics.' },
//   ];
//   return (
//     <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/60 to-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <Reveal>
//           <div className="flex items-end justify-between flex-wrap gap-4">
//             <div>
//               <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Built on global-grade platforms</div>
//               <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">Advanced laboratory infrastructure.</h2>
//               <p className="mt-3 text-muted-foreground max-w-xl">CAP-grade analyzers, calibrated daily and audited monthly — engineered for accuracy you can trust.</p>
//             </div>
//             <Link href="/services" className="text-sm font-semibold inline-flex items-center gap-1.5 hover:text-blue-600">Explore services <ArrowRight className="w-4 h-4" /></Link>
//           </div>
//         </Reveal>
//         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {LAB_ITEMS.map((d, i) => (
//             <Reveal key={i} delay={i * 0.07}>
//               <motion.div whileHover={{ y: -6 }} className="group rounded-3xl overflow-hidden bg-white border border-black/5 shadow-soft hover:shadow-premium">
//                 <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
//                   <div className="absolute inset-0 grid-bg opacity-50" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
//                   <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><FlaskConical className="w-5 h-5 text-white" /></div>
//                   <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
//                     <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full glass-dark text-white">{d.tag}</span>
//                     <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full glass-dark text-white">CAP-grade</span>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <div className="font-bold tracking-tight">{d.title}</div>
//                   <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{d.desc}</div>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
 }

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/60 to-emerald-100/40 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Loved by patients & doctors</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">A 4.92 rating, earned every report.</h2>
        </Reveal>
        <div className="relative mt-14 h-[260px]">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div key={idx} initial={false} animate={{ opacity: idx === i ? 1 : 0, y: idx === i ? 0 : 20, scale: idx === i ? 1 : 0.96 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }} className={`absolute inset-0 ${idx === i ? 'pointer-events-auto' : 'pointer-events-none'}`}>
              <div className="mx-auto max-w-3xl glass rounded-3xl p-8 lg:p-10 shadow-premium">
                <div className="flex justify-center gap-0.5 mb-4">{Array.from({length:5}).map((_,k)=>(<Star key={k} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                <p className="text-lg lg:text-xl leading-relaxed text-balance">“{t.text}”</p>
                <div className="mt-6 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-8 bg-foreground' : 'w-1.5 bg-foreground/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const items = ['NABL-MC-10027', 'ISO 9001-2015'];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Accredited & trusted</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Quality you can verify.</h2>
          </div>
        </Reveal>
        <center>
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {items.map((x, i) => (
            <Reveal key={x} delay={i * 0.05}>
              <div className="aspect-[3/2] rounded-2xl glass shadow-soft flex items-center justify-center">
                <span className="text-sm font-bold tracking-wider text-foreground/70">{x}</span>
              </div>
            </Reveal>
          ))}
        </div>
        </center>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] p-10 lg:p-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
            <div className="absolute inset-0 opacity-30">
              <Image src={MICRO_IMG} alt="" fill className="object-cover" sizes="100vw" />
            </div>
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-300 font-semibold">Take control of your health</div>
              <h2 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight text-balance">Book your health checkup today.</h2>
              <p className="mt-5 text-white/70 max-w-lg">A 12-minute appointment that protects the next 12 years of your life. Free home collection, same-day report, doctor-verified.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/packages" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-foreground text-sm font-semibold hover:scale-[1.02] transition-transform shadow-glow">Explore packages <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-dark text-sm font-semibold text-white">Book a test</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Hero />
      <TrustBar />
      <PopularTests />
      <HomeCollectionFlow />
      <WhyChooseUs />
      <TrustedByClients />
      <LabInfrastructure />
      <Testimonials />
      <Certifications />
      <FinalCTA />
    </>
  );
}
