'use client';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    n: '1',
    h: 'Information We Collect',
    body: (
      <>
        <p>Rroyals Diagnostics Research Pvt. Ltd. (&ldquo;Rroyals Diagnostics&rdquo; or the &ldquo;Company&rdquo;) may collect, process, and store certain information from users, patients, visitors, and customers in order to provide diagnostic, healthcare support, and website-related services efficiently and securely.</p>
        <p>The categories of information we may collect include the following:</p>

        <h4 className="text-foreground font-semibold mt-6">A. Personal Information</h4>
        <p>We may collect personal details that help us identify and communicate with you, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Residential or billing address</li>
          <li>Emergency contact information</li>
        </ul>

        <h4 className="text-foreground font-semibold mt-6">B. Medical and Diagnostic Information</h4>
        <p>To provide our diagnostic and healthcare-related services, we may collect and maintain medical and service-related information, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Patient identification number (Patient ID)</li>
          <li>Diagnostic and laboratory test reports</li>
          <li>Medical and diagnostic history</li>
          <li>Appointment and booking details</li>
          <li>Home sample collection requests and related information</li>
        </ul>

        <h4 className="text-foreground font-semibold mt-6">C. Technical and Usage Information</h4>
        <p>When you access or use our website, mobile applications, or digital platforms, we may automatically collect certain technical and analytical information, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Cookies and analytics data</li>
          <li>Website usage patterns and browsing behavior</li>
        </ul>
        <p>This information helps us improve website functionality, enhance user experience, maintain security, and optimize our services.</p>
      </>
    ),
  },
  {
    n: '2',
    h: 'How We Use Your Information',
    body: (
      <>
        <p>Rroyals Diagnostics Research Pvt. Ltd. (&ldquo;Rroyals Diagnostics&rdquo; or the &ldquo;Company&rdquo;) uses the information collected from users, patients, and website visitors for legitimate business, healthcare, operational, and legal purposes. The information collected may be used for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide diagnostic, pathology, and healthcare-related services</li>
          <li>To generate, manage, and provide access to diagnostic reports and test results</li>
          <li>To enable report downloads and patient account access</li>
          <li>To process bookings, appointments, and home sample collection requests</li>
          <li>To improve patient experience, customer support, and service quality</li>
          <li>To communicate important notifications, service updates, reminders, and responses to inquiries</li>
          <li>To send OTPs (One-Time Passwords), authentication messages, and account verification communications</li>
          <li>To monitor, maintain, and improve website functionality, performance, and security</li>
          <li>To analyze website usage trends and enhance user experience</li>
          <li>To maintain internal records and operational efficiency</li>
          <li>To comply with applicable medical, legal, regulatory, and governmental obligations</li>
        </ul>
        <p>The Company does not sell, rent, trade, or otherwise share patient or client personal information with third parties for marketing or commercial purposes. Any sharing of information, where necessary, is done only in accordance with applicable laws, regulatory requirements, or for the purpose of providing authorized services.</p>
      </>
    ),
  },
  {
    n: '3',
    h: 'How We Protect Information',
    body: (
      <>
        <p>We implement appropriate technical, administrative, and organizational security measures to safeguard your information against unauthorized access, misuse, alteration, disclosure, or destruction. Access to user accounts is protected through secure authentication credentials, and users are encouraged to maintain the confidentiality of their passwords, avoid sharing login details, and log out after each session to ensure account security.</p>
        <p>We further employ industry-standard security technologies and practices, including encryption, firewalls, secure socket layer (SSL) technology, access controls, and rate-limiting mechanisms, to help protect your personal information from potential security threats and breaches.</p>
        <p>While we continuously strive to use commercially acceptable means to protect your information, no method of electronic transmission or storage is completely secure. Accordingly, although we take reasonable precautions to safeguard your data, we cannot guarantee absolute security, and there remains an inherent risk that information may be accessed, disclosed, altered, or destroyed despite our security measures. By using our services, you acknowledge and accept these risks.</p>
      </>
    ),
  },
  {
    n: '4',
    h: 'Patient Report Access',
    body: (
      <>
        <p>Patient reports are accessible only after secure authentication or user credentials provided by the company.</p>
        <p>Access may require:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Mobile number verification</li>
          <li>OTP authentication</li>
          <li>Patient ID verification</li>
          <li>Other User Credentials</li>
        </ul>
        <p>Users are responsible for maintaining the confidentiality of their login credentials and OTP access.</p>
      </>
    ),
  },
  {
    n: '5',
    h: 'Data Security',
    body: (
      <>
        <p>We implement reasonable technical and organizational security measures to protect your information, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Secure HTTPS encryption</li>
          <li>Protected report access</li>
          <li>Access-controlled systems</li>
          <li>Secure cloud storage</li>
          <li>Authentication verification</li>
          <li>Limited internal data access</li>
        </ul>
        <p>While we strive to protect your data, no digital platform can guarantee absolute security.</p>
      </>
    ),
  },
  {
    n: '6',
    h: 'Cookies & Analytics',
    body: (
      <>
        <p>Our website may use cookies and analytics tools to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improve website functionality</li>
          <li>Analyze user behavior</li>
          <li>Enhance performance</li>
          <li>Personalize user experience</li>
        </ul>
        <p>Users may disable cookies through browser settings, although some features may not function properly.</p>
      </>
    ),
  },
  {
    n: '7',
    h: 'Third-Party Services',
    body: (
      <>
        <p>We may use trusted third-party services for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hosting</li>
          <li>Analytics</li>
          <li>OTP delivery</li>
          <li>Payment processing</li>
          <li>Cloud storage</li>
        </ul>
        <p>These providers are expected to maintain reasonable data protection standards.</p>
      </>
    ),
  },
  {
    n: '8',
    h: 'Data Retention',
    body: (
      <>
        <p>We retain patient and service-related information only for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>operational purposes,</li>
          <li>legal compliance,</li>
          <li>medical record requirements,</li>
          <li>and service continuity.</li>
        </ul>
        <p>Retention duration may vary depending on applicable regulations.</p>
      </>
    ),
  },
  {
    n: '9',
    h: 'User Rights',
    body: (
      <>
        <p>Users may request:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>access to their information,</li>
          <li>correction of inaccurate information,</li>
          <li>deletion requests where legally applicable,</li>
          <li>clarification regarding data usage.</li>
        </ul>
        <p>Requests may be submitted through official support channels.</p>
      </>
    ),
  },
  {
    n: '10',
    h: 'Medical Disclaimer',
    body: (
      <>
        <p>The information, reports, diagnostic results, and other content provided through the services, website, or communications of Rroyals Diagnostics Research Pvt. Ltd. (&ldquo;Rroyals Diagnostics&rdquo; or the &ldquo;Company&rdquo;) are intended solely for informational and diagnostic support purposes and should not be considered medical advice, diagnosis, treatment, or a substitute for professional healthcare consultation.</p>
        <p>Diagnostic test reports and related information must always be interpreted by a qualified medical practitioner in conjunction with clinical findings, patient history, and other relevant medical information. Users are strongly advised not to disregard professional medical advice or delay seeking medical treatment based on information obtained from our services or reports.</p>
        <p>While the Company makes reasonable efforts to ensure the accuracy, reliability, and timeliness of its diagnostic services and related information, no warranty or guarantee, express or implied, is made regarding the completeness, accuracy, or suitability of any report or content for a particular purpose.</p>
        <p>In case of any medical emergency or health concern, users should immediately consult a licensed healthcare professional or contact the nearest medical facility. Reliance on any information provided by the Company is solely at the user&rsquo;s own risk.</p>
        <p>The Company, its directors, employees, affiliates, laboratories, consultants, and service providers shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or reliance upon, any information, reports, or services provided through our platform or diagnostic facilities.</p>
      </>
    ),
  },
  {
    n: '11',
    h: "Children's Privacy",
    body: (
      <>
        <p>Our website are intended solely for authorized individuals associated with Rroyals Diagnostics Research Pvt. Ltd. (&ldquo;Rroyals Diagnostics&rdquo;) and are not directed toward individuals under the age of 18. The Company does not knowingly collect, solicit, or maintain personal information from anyone under 18 years of age, as our employment policies do not permit the hiring or engagement of Phlebotomists, Runners, or related personnel below the age of 18.</p>
        <p>Our services are not intentionally directed toward children without parental or guardian involvement. Information relating to minors may only be processed under appropriate supervision.</p>
      </>
    ),
  },
  {
    n: '12',
    h: 'Updates to This Privacy Policy',
    body: (
      <>
        <p>We reserve the right to update this Privacy Policy periodically to reflect operational, legal, or technological changes.</p>
        <p>Updated versions will be published on this page with the revised effective date.</p>
      </>
    ),
  },
  {
    n: '13',
    h: 'Contact Information',
    body: (
      <>
        <p>For privacy-related questions or concerns, please contact:</p>
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

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Legal</div>
          <h1 className="mt-3 text-5xl lg:text-6xl font-bold tracking-tight text-balance">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Privacy Policy for Rroyals Diagnostics Research Pvt. Ltd.</p>
          <p className="mt-1 text-sm text-muted-foreground">Effective Date: 01/04/2026</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground/80 font-medium">Welcome to Rroyals Diagnostics Research Pvt. Ltd.</p>
            <p>Rroyals Diagnostics Research Pvt. Ltd. (&ldquo;Rroyals Diagnostics&rdquo; or the &ldquo;Company&rdquo;) is committed to maintaining robust privacy protections for all its users, including both internal and external stakeholders. This Privacy Policy (&ldquo;Policy&rdquo;) has been developed to help you understand how we collect, use, disclose, store, and safeguard the information you provide while accessing our website, diagnostic services, and related platforms.</p>
            <p>We recognize the importance of your privacy and are dedicated to ensuring the confidentiality, integrity, and security of your personal information. This Policy outlines the types of information we may collect, the purposes for which such information is used, the measures implemented to protect it, and the rights and choices available to you regarding your personal data.</p>
            <p>By using our website or availing any of our services, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy.</p>
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
