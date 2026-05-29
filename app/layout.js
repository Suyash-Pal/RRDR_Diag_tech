import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Rroyals Diagnostics Research Pvt. Ltd. — Premium Pathology, Reimagined',
  description: 'Rroyals Diagnostics Research Pvt. Ltd. — next-generation pathology and diagnostics with home sample collection across India. Same-day reports, end-to-end secure.',
  icons: {
    icon: 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png',
    shortcut: 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png',
    apple: 'https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png',
  },
  openGraph: {
    title: 'Rroyals Diagnostics Research Pvt. Ltd. — Premium Pathology, Reimagined',
    description: 'Same-day pathology reports. Home collection. Secure patient portal.',
    type: 'website',
    images: ['https://customer-assets.emergentagent.com/job_luxury-health-tech/artifacts/99s439vg_RPLLogo.png'],
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
