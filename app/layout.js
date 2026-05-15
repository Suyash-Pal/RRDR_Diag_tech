import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'RRDR Diagnostics — Premium Pathology, Reimagined',
  description: 'NABL-accredited next-generation pathology and diagnostics with home sample collection across India. Same-day reports, doctor-verified, end-to-end secure.',
  openGraph: {
    title: 'RRDR Diagnostics — Premium Pathology, Reimagined',
    description: 'Same-day pathology reports. Home collection in 60 min. NABL accredited.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-foreground">
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
