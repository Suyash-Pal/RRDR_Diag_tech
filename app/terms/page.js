'use client';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    n: '1',
    h: 'Use of Website',
    body: (
      <>
        <p>The website is intended to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>provide healthcare and diagnostic service information,</li>
          <li>allow users to request bookings,</li>
          <li>enable report access,</li>
          <li>and facilitate communication with the diagnostic center.</li>
        </ul>
        <p>Users agree to use the platform only for lawful purposes.</p>
      </>
    ),
  },
  {
    n: '2',
    h: 'Eligibility',
    body: (
      <>
        <p>By using this platform, you confirm that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>the information provided is accurate,</li>
          <li>you are authorized to access the submitted medical information,</li>
          <li>and you will not misuse the services.</li>
        </ul>
      </>
    ),
  },
  {
    n: '3',
    h: 'Diagnostic Reports',
    body: (
      <>
        <p>Diagnostic reports provided through the platform are intended solely for:</p>
        <p>patient access, authorized medical consultation, and healthcare reference.</p>
        <p>Users must not:</p>
        <p>manipulate reports, misuse medical data, or attempt unauthorized access to other users&rsquo; information.</p>
      </>
    ),
  },
  {
    n: '4',
    h: 'Report Access & Security',
    body: (
      <>
        <p>Access to reports may require:</p>
        <p>OTP verification, patient identification, or additional authentication methods.</p>
        <p>Users are responsible for:</p>
        <p>maintaining confidentiality of OTPs, safeguarding login information, and ensuring authorized usage.</p>
      </>
    ),
  },
  {
    n: '5',
    h: 'Appointments & Bookings',
    body: (
      <>
        <p>Appointment and home collection requests submitted through the website are subject to:</p>
        <p>operational availability, service area coverage, and scheduling confirmation.</p>
        <p>Rroyals Diagnostics Research Pvt. Ltd. reserves the right to:</p>
        <p>reschedule, decline, or modify appointments where necessary.</p>
      </>
    ),
  },
  {
    n: '6',
    h: 'Payments',
    body: (
      <>
        <p>If online payments are enabled:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>users agree to provide valid payment information,</li>
          <li>all transactions are subject to verification,</li>
          <li>and refunds (if applicable) shall follow company policy.</li>
        </ul>
        <p>Pricing and package details may change without prior notice.</p>
      </>
    ),
  },
  {
    n: '7',
    h: 'Intellectual Property',
    body: (
      <>
        <p>All website content including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>text,</li>
          <li>graphics,</li>
          <li>branding,</li>
          <li>design,</li>
          <li>logos,</li>
          <li>layouts,</li>
          <li>and software components</li>
        </ul>
        <p>are the intellectual property of Rroyals Diagnostics Research Pvt. Ltd. unless otherwise stated.</p>
        <p>Unauthorized reproduction or redistribution is prohibited.</p>
      </>
    ),
  },
  {
    n: '8',
    h: 'Website Availability',
    body: (
      <>
        <p>While we strive for uninterrupted service, we do not guarantee:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>continuous availability,</li>
          <li>error-free functionality,</li>
          <li>or uninterrupted access.</li>
        </ul>
        <p>Temporary downtime may occur due to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>maintenance,</li>
          <li>server issues,</li>
          <li>upgrades,</li>
          <li>or technical limitations.</li>
        </ul>
      </>
    ),
  },
  {
    n: '9',
    h: 'Limitation of Liability',
    body: (
      <>
        <p>Rroyals Diagnostics Research Pvt. Ltd. shall not be held liable for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>indirect losses,</li>
          <li>technical interruptions,</li>
          <li>unauthorized access caused by user negligence,</li>
          <li>delays in communication,</li>
          <li>or misuse of downloaded reports.</li>
        </ul>
        <p>Users are encouraged to verify medical interpretations with qualified healthcare professionals.</p>
      </>
    ),
  },
  {
    n: '10',
    h: 'Third-Party Links',
    body: (
      <>
        <p>The website may contain links to external websites or third-party platforms.</p>
        <p>We are not responsible for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>third-party content,</li>
          <li>external privacy practices,</li>
          <li>or external service availability.</li>
        </ul>
      </>
    ),
  },
  {
    n: '11',
    h: 'User Conduct',
    body: (
      <>
        <p>Users agree not to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>attempt unauthorized system access,</li>
          <li>disrupt website operations,</li>
          <li>upload malicious software,</li>
          <li>misuse patient information,</li>
          <li>or engage in fraudulent activity.</li>
        </ul>
        <p>Violations may result in restricted access and legal action where applicable.</p>
      </>
    ),
  },
  {
    n: '12',
    h: 'Modifications to Terms',
    body: (
      <>
        <p>We reserve the right to update or modify these Terms and Conditions at any time.</p>
        <p>Updated terms will become effective upon publication on this page.</p>
      </>
    ),
  },
  {
    n: '13',
    h: 'Governing Law',
    body: (
      <>
        <p>These Terms and Conditions shall be governed by the applicable laws and jurisdiction of India.</p>
        <p>Any disputes arising from website usage shall fall under the jurisdiction of appropriate courts and legal authorities.</p>
      </>
    ),
  },
  {
    n: '14',
    h: 'Contact Information',
    body: (
      <>
        <p>For questions regarding these Terms and Conditions, contact:</p>
        <div className="mt-3 rounded-2xl bg-white border border-black/5 shadow-soft p-5 text-sm">
          <div className="font-semibold text-foreground">Rroyals Diagnostics Research Pvt. Ltd.</div>
          <div className="mt-1">Email: <a href="mailto:support@rrdrindia.com" className="text-blue-600">support@rrdrindia.com</a></div>
          <div>Phone: <a href="tel:+919069980136" className="text-blue-600">+91-9069980136</a></div>
          <div>Address: Shop No. 12A, Baba Chitru Complex, Wazirabad, Sector-52, Gurugram, Haryana - 122003</div>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Legal</div>
          <h1 className="mt-3 text-5xl lg:text-6xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-muted-foreground">Terms and Conditions for Rroyals Diagnostics Research Pvt. Ltd.</p>
          <p className="mt-1 text-sm text-muted-foreground">Effective Date: 01/04/2026</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground/80 font-medium">Welcome to Rroyals Diagnostics Research Pvt. Ltd.</p>
            <p>By accessing or using this website and related services, you agree to comply with the following Terms and Conditions.</p>
            <p>If you do not agree with these terms, please discontinue use of the platform.</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <motion.section className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center text-sm font-bold">{s.n}</div>
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">{s.h}</h2>
                </div>
                <div className="mt-4 pl-12 space-y-3 text-muted-foreground leading-relaxed text-[15px]">{s.body}</div>
              </motion.section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
