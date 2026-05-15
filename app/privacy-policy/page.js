import Reveal from '@/components/Reveal';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 prose prose-slate">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Legal</div>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 2025</p>
        </Reveal>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>At RRDR Diagnostics Pvt. Ltd. (“RRDR”, “we”, “us”), your privacy is a clinical responsibility. This policy describes what data we collect, why we collect it, and how we protect it.</p>
          <h3 className="text-foreground text-lg font-bold">1. Data we collect</h3>
          <p>Personal identifiers, contact details, clinical samples, diagnostic results, and limited device/usage information necessary to deliver your test and dashboard.</p>
          <h3 className="text-foreground text-lg font-bold">2. How we use your data</h3>
          <p>To deliver diagnostic services, generate and share reports, comply with medico-legal obligations, and (only with consent) to improve our products via aggregated analytics.</p>
          <h3 className="text-foreground text-lg font-bold">3. Security</h3>
          <p>HIPAA-grade encryption at rest (AES-256) and in transit (TLS 1.3). ISO 27001 certified. Strict role-based access. Independent penetration testing every quarter.</p>
          <h3 className="text-foreground text-lg font-bold">4. Your rights</h3>
          <p>Access, correction, deletion, and portability of your data. Email <b>privacy@rrdr.health</b> for any request — responded within 72 hours.</p>
          <h3 className="text-foreground text-lg font-bold">5. Contact</h3>
          <p>Data Protection Officer · RRDR Diagnostics · BKC, Mumbai 400051 · privacy@rrdr.health</p>
        </div>
      </div>
    </div>
  );
}
