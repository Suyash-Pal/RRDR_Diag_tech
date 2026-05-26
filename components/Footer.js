import Link from 'next/link';
import { Activity, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-black/5 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"><Activity className="w-5 h-5 text-white" strokeWidth={2.5} /></div>
              <div>
                <div className="font-bold tracking-tight text-lg">Rroyals Diagnostics</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Research Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">Rroyals Diagnostics Research Pvt. Ltd. — next-generation pathology and diagnostics, delivered with luxury-grade care. Trusted by patients and clinicians across India.</p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((I, i) => (<a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:shadow-glow transition-shadow"><I className="w-4 h-4" /></a>))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Diagnostics</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/tests" className="hover:text-blue-600">All Tests</Link></li>
              <li><Link href="/packages" className="hover:text-blue-600">Health Packages</Link></li>
              <li><Link href="/home-collection" className="hover:text-blue-600">Home Collection</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2 items-start"><Phone className="w-4 h-4 mt-0.5 text-blue-600" />+91-9069980136</li>
              <li className="flex gap-2 items-start"><Mail className="w-4 h-4 mt-0.5 text-blue-600" />support@rrdrindia.com</li>
              <li className="flex gap-2 items-start"><MapPin className="w-4 h-4 mt-0.5 text-blue-600" />Shop No. 12A, Baba Chitru Complex, Wazirabad, Sector-52, Gurugram, Haryana - 122003</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Rroyals Diagnostics Research Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6"><Link href="/privacy-policy" className="hover:text-foreground">Privacy</Link><Link href="/terms" className="hover:text-foreground">Terms</Link><Link href="/faq" className="hover:text-foreground">FAQ</Link></div>
        </div>
      </div>
    </footer>
  );
}
