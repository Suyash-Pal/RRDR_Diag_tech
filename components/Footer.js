import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png';
const socialLinks = [
  {
    icon: Twitter,
    url: "https://x.com/rrdrindia",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/rrdrindia2020/ ",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61590559828128",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@rrdrindia2020",
  },
];
export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-black/5 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-soft ring-1 ring-black/5 bg-white">
                <Image src={LOGO} alt="Rroyals Diagnostics" width={88} height={88} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold tracking-tight text-lg">Rroyals Diagnostics</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Research Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">Rroyals Diagnostics Research Pvt. Ltd. — next-generation pathology and diagnostics, delivered with luxury-grade care. Trusted by patients and clinicians across India.</p>
            <div className="mt-6 flex items-center gap-3">
  {socialLinks.map(({ icon: Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full glass flex items-center justify-center hover:shadow-glow transition-shadow"
    >
      <Icon className="w-4 h-4" />
    </a>
  ))}
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
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                <a href="tel:+919069980136" className="hover:text-foreground transition-colors">+91-9069980136</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                <a href="mailto:support@rrdrindia.com" className="hover:text-foreground transition-colors">support@rrdrindia.com</a>
              </li>
              <li className="flex gap-2 items-start group">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/rYBuSSRPv82gcYFM6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View RRDR Diagnostics on Google Maps"
                  className="leading-snug hover:text-foreground transition-colors"
                >
                  Shop No. 12A, Baba Chitru Complex, Wazirabad, Sector-52, Gurugram, Haryana - 122003
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="relative inline-block">
                      View on Google Maps
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
                    </span>
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </li>
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
