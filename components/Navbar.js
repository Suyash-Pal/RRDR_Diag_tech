'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/tests', label: 'Tests' },
  { href: '/packages', label: 'Packages' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none"
    >
      <div className={`pointer-events-auto mt-4 mx-4 w-full max-w-6xl transition-all duration-500 ${scrolled ? 'glass shadow-premium rounded-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-soft ring-1 ring-black/5 bg-white">
              <Image src={LOGO} alt="Rroyals Diagnostics" width={80} height={80} className="w-full h-full object-cover" priority />
              <span className="absolute inset-0 rounded-xl bg-emerald-500/35 pulse-ring pointer-events-none" />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-bold tracking-tight">RRDRINDIA</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">RROYALS DIAGNOSTICS RESEARCH PVT. LTD.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className="relative px-3 py-1.5 text-[13.5px] font-medium text-foreground/75 hover:text-foreground transition-colors">
                  <span>{l.label}</span>
                  {active && (
                    <motion.span layoutId="navActive" className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.06]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/report-login" className="hidden sm:inline-flex group relative items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white gradient-primary shadow-glow hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] transition-shadow">
              <Download className="w-3.5 h-3.5" />
              <span>Download Report</span>
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-30 blur-md transition" />
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center" aria-label="Menu">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden border-t border-black/5">
              <div className="p-4 grid gap-1">
                {LINKS.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={l.href} className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${pathname === l.href ? 'bg-foreground/[0.06]' : 'hover:bg-foreground/[0.04]'}`}>{l.label}</Link>
                  </motion.div>
                ))}
                <Link href="/report-login" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white gradient-primary">
                  <Download className="w-4 h-4" /> Download Report
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
