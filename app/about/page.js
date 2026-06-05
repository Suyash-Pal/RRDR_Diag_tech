'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Award, Heart, Handshake, Check, FlaskConical, Microscope, Activity, Stethoscope, Beaker } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import Reveal from '@/components/Reveal';

const IMG = 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHxibHVlfDE3Nzg4MzYwODF8MA&ixlib=rb-4.1.0&q=85';

const SERVICES = [
  { icon: FlaskConical, text: 'Clinical laboratory and diagnostic testing' },
  { icon: Microscope, text: 'Pathology and disease screening services' },
  { icon: Beaker, text: 'Research and analytical support services' },
  { icon: Activity, text: 'Scientific and technical consultancy' },
  { icon: Stethoscope, text: 'Healthcare-focused diagnostic solutions for improved clinical decision-making' },
];

const VALUES = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We uphold the highest standards of ethics, transparency, and accountability in all aspects of our work.' },
  { icon: Award, title: 'Excellence', desc: 'We are committed to delivering quality-driven diagnostic and research services with precision, consistency, and professionalism.' },
  { icon: Sparkles, title: 'Innovation', desc: 'We continuously leverage advanced technologies and scientific developments to enhance diagnostic accuracy and healthcare solutions.' },
  { icon: Handshake, title: 'Commitment', desc: 'We are dedicated to supporting healthcare professionals and organizations through reliable services and meaningful partnerships.' },
  { icon: Heart, title: 'Compassion', desc: "We recognize the impact of healthcare on people's lives and strive to contribute positively through accessible, dependable, and patient-focused diagnostic services." },
];

const WHY = [
  'Accurate and reliable diagnostic services',
  'Quality-focused laboratory and research solutions',
  'Experienced and professional approach',
  'Commitment to innovation and continuous improvement',
  'Trusted support for healthcare professionals and institutions',
];

const STATS = [
  { v: 2020, suffix: '', label: 'Founded in Gurugram' },
  { v: 11, suffix: '+', label: 'Enterprise partners' },
  { v: 5, suffix: '', label: 'Core service lines' },
  { v: 100, suffix: '%', label: 'Quality-driven approach' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hero */}
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">About Us</div>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-5xl text-balance">
            Advancing healthcare through <span className="gradient-text">science, precision, and innovation.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15.5px]">
              <p>Rroyals Diagnostics Research Pvt. Ltd. is a professionally managed healthcare diagnostics and research organization dedicated to delivering reliable, accurate, and science-driven solutions that support better healthcare outcomes. Established in 2020 and registered in Gurugram, Haryana, we are committed to enhancing diagnostic excellence through advanced laboratory services, research, and innovation.</p>
              <p>Founded by <span className="text-foreground font-semibold">Ms. Meena Kirola</span> and <span className="text-foreground font-semibold">Mr. Sukhdev</span>, the company was established with a vision to bridge the gap between scientific advancement and quality healthcare. We believe that timely and accurate diagnostics play a critical role in disease prevention, treatment planning, and overall patient well-being.</p>
            </div>

            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-premium border border-white/60">
              <Image src={IMG} alt="Rroyals Diagnostics laboratory" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 shadow-premium">
                <div className="text-[11px] uppercase tracking-widest text-foreground/60">Headquartered in</div>
                <div className="mt-0.5 font-semibold tracking-tight">Sector-52, Gurugram, Haryana</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-black/5 border border-black/5 shadow-soft">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className="bg-white p-7 lg:p-9">
              <div className="text-3xl lg:text-4xl font-bold tracking-tight">
                <AnimatedCounter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </Reveal>
          ))}
        </div>

        {/* What We Do */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">What we do</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold tracking-tight text-balance">A comprehensive range of diagnostic & research services.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">At Rroyals Diagnostics Research, we provide a comprehensive range of healthcare diagnostic and research services. Our commitment to quality, precision, and innovation enables us to deliver dependable results that healthcare professionals, researchers, institutions, and organizations can trust.</p>
          </Reveal>
          <div className="space-y-3">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-soft hover:shadow-premium">
                  <div className="shrink-0 w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><s.icon className="w-5 h-5 text-white" /></div>
                  <p className="text-[15px] text-foreground/85 leading-relaxed pt-1.5">{s.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="mt-28 grid md:grid-cols-2 gap-6">
          <Reveal>
            <motion.div whileHover={{ y: -4 }} className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-white to-slate-50/60 border border-black/5 shadow-soft hover:shadow-premium overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-200/30 blur-3xl" />
              <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Our mission</div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Empowering better health outcomes.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">To deliver accurate, innovative, and reliable diagnostic and research solutions that empower healthcare professionals, advance scientific knowledge, and contribute to improved health outcomes for individuals and communities.</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.08}>
            <motion.div whileHover={{ y: -4 }} className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-premium overflow-hidden">
              <div className="absolute -top-28 -right-20 w-72 h-72 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="text-xs uppercase tracking-[0.2em] text-blue-300 font-semibold">Our vision</div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">A trusted leader in diagnostics & research.</h3>
              <p className="mt-5 text-white/75 leading-relaxed">To be recognized as a trusted leader in healthcare diagnostics and research by promoting scientific excellence, embracing innovation, and creating lasting value for patients, healthcare providers, and society.</p>
            </motion.div>
          </Reveal>
        </div>

        {/* Core Values */}
        <div className="mt-28">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Our core values</div>
              <h2 className="mt-3 text-3xl lg:text-5xl font-bold tracking-tight text-balance">Five principles that guide every decision.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }} className={`group h-full rounded-3xl p-7 bg-white border border-black/5 shadow-soft hover:shadow-premium ${i === VALUES.length - 1 ? 'lg:col-span-1 md:col-span-2' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow"><v.icon className="w-5 h-5 text-white" /></div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Why choose us</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold tracking-tight text-balance">Quality, accuracy, and partnership — by design.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">A diagnostics and research partner built around the needs of clinicians, institutions, and the patients they serve.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {WHY.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-black/5 shadow-soft"
                >
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-foreground/85 leading-relaxed">{w}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Closing statement */}
        <Reveal delay={0.1}>
          <div className="mt-28 relative overflow-hidden rounded-[32px] p-10 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/60 border border-black/5 shadow-soft">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-200/20 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">In closing</div>
              <p className="mt-5 text-2xl lg:text-3xl font-semibold tracking-tight leading-snug text-balance">
                At <span className="gradient-text">Rroyals Diagnostics Research Pvt. Ltd.</span>, we believe that accurate diagnostics are the foundation of effective healthcare. Through scientific expertise, advanced technology, and an unwavering commitment to quality, we continue to support better healthcare decisions and healthier communities.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
