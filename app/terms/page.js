import Reveal from '@/components/Reveal';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">Legal</div>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-muted-foreground">Effective: June 2025</p>
        </Reveal>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>These Terms govern your use of RRDR Diagnostics services, including booking tests, home sample collection, the report portal, and any related software.</p>
          <h3 className="text-foreground text-lg font-bold">1. Eligibility</h3>
          <p>You must be 18+ to book services. Bookings on behalf of minors must be made by a parent or legal guardian.</p>
          <h3 className="text-foreground text-lg font-bold">2. Bookings & cancellations</h3>
          <p>Free cancellation up to 60 minutes before the scheduled slot. Sample collection is complimentary on orders ₹399+.</p>
          <h3 className="text-foreground text-lg font-bold">3. Medical disclaimer</h3>
          <p>Reports are diagnostic tools and not a substitute for clinical judgment. Please consult a qualified physician for interpretation.</p>
          <h3 className="text-foreground text-lg font-bold">4. Liability</h3>
          <p>Our liability is limited to the value of the diagnostic service rendered. We are not liable for indirect, incidental, or consequential damages.</p>
          <h3 className="text-foreground text-lg font-bold">5. Governing law</h3>
          <p>These Terms are governed by Indian law. Disputes are subject to the exclusive jurisdiction of courts in Mumbai.</p>
        </div>
      </div>
    </div>
  );
}
