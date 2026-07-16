'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Home, Building2, MapPin, User, Phone, ArrowRight, ArrowLeft, Check, Clock, AlertCircle, Loader2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STEPS = ['Test', 'Schedule', 'Patient', 'Confirm'];

const COLLECTION_TYPES = [
  { id: 'Corporate Collection', icon: Building2, label: 'Corporate Collection', sub: 'Onsite at your office · 60–90 min' },
  { id: 'Lab Visit', icon: Home, label: 'Lab Visit', sub: 'Walk-in at our centre · No wait' },
];

export default function HomeCollectionPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    test: 'Aarogya Advanced',
    collection: 'Corporate Collection',
    date: '',
    time: '',
    name: '',
    phone: '',
    address: '',
    pin: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState('');
  const [submitError, setSubmitError] = useState('');

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validatePhone = () => {
    const digits = (form.phone || '').replace(/\D/g, '');
    if (digits.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const next = async () => {
    // Validate before leaving the patient step (step 2 → 3)
    if (step === 2) {
      if (!validatePhone()) return;
      // Submit booking → email (via Web3Forms, client-side)
      setSending(true);
      setSubmitError('');
      const ref = 'RRDR-CN-' + Math.floor(Math.random() * 99999).toString().padStart(5, '0');
      try {
        const accessKey = '7a7c2ab2-ba1e-4eb4-bd5c-3046128a5e40';
        const plainMessage = [
          `New booking received from the Rroyals Diagnostics website.`,
          ``,
          `Reference  : ${ref}`,
          `Package    : ${form.test}`,
          `Type       : ${form.collection}`,
          `Date       : ${form.date || 'Not provided'}`,
          `Time slot  : ${form.time || 'Not provided'}`,
          ``,
          `-- Patient Details --`,
          `Name    : ${form.name || 'Not provided'}`,
          `Mobile  : +91 ${form.phone}`,
          `Address : ${form.address || 'Not provided'}`,
          `PIN     : ${form.pin || 'Not provided'}`,
          ``,
          `Please contact the patient to confirm the booking.`,
        ].join('\n');

        // Submit via a classic HTML form post into a hidden iframe.
        // This bypasses CORS entirely (form submissions are not CORS-controlled).
        // Web3Forms will receive the data and dispatch the email server-side.
        const fields = {
          access_key: accessKey || '',
          subject: `New Sample Collection Booking · ${ref}`,
          from_name: 'Rroyals Diagnostics Booking',
          reference: ref,
          package: form.test,
          collection_type: form.collection,
          booking_date: form.date,
          booking_time: form.time,
          patient_name: form.name,
          patient_mobile: `+91 ${form.phone}`,
          patient_address: form.address,
          patient_pin: form.pin,
          message: plainMessage,
        };

        await new Promise((resolve) => {
          const iframeName = `w3iframe_${Date.now()}`;
          const iframe = document.createElement('iframe');
          iframe.name = iframeName;
          iframe.style.display = 'none';
          document.body.appendChild(iframe);

          const formEl = document.createElement('form');
          formEl.action = 'https://api.web3forms.com/submit';
          formEl.method = 'POST';
          formEl.target = iframeName;
          formEl.enctype = 'multipart/form-data';
          Object.entries(fields).forEach(([k, v]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = k;
            input.value = v ?? '';
            formEl.appendChild(input);
          });
          document.body.appendChild(formEl);

          let done = false;
          const finish = () => {
            if (done) return; done = true;
            // Cleanup after a brief delay so the request finishes
            setTimeout(() => {
              try { document.body.removeChild(formEl); } catch (_) {}
              try { document.body.removeChild(iframe); } catch (_) {}
            }, 4000);
            resolve();
          };
          iframe.addEventListener('load', finish);
          // Safety net in case load event never fires (some browsers when response is opaque)
          setTimeout(finish, 3500);
          formEl.submit();
        });

        setReference(ref);
        setStep(3);
      } catch (e) {
        setSubmitError('Network error while sending the email. Your details are saved on this page.');
        setReference(ref);
        setStep(3);
      } finally {
        setSending(false);
      }
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold text-center">Sample Collection</div>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-center text-balance">Book in 60 seconds. Free across India.</h1>
        </Reveal>

        <div className="mt-12 glass rounded-3xl p-8 shadow-premium">
          {/* Progress */}
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <motion.div animate={{ backgroundColor: i <= step ? '#0a0a0a' : '#e5e7eb', color: i <= step ? '#fff' : '#9ca3af' }} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{i < step ? <Check className="w-4 h-4" /> : i + 1}</motion.div>
                {i < STEPS.length - 1 && (<div className="flex-1 h-px mx-2 bg-foreground/10 relative"><motion.div initial={false} animate={{ scaleX: i < step ? 1 : 0 }} style={{ originX: 0 }} className="absolute inset-0 bg-foreground" /></div>)}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-4 text-[11px] uppercase tracking-wider text-muted-foreground">
            {STEPS.map((s) => (<div key={s}>{s}</div>))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }} className="mt-8">
              {step === 0 && (
                <div>
                  <label className="text-sm font-semibold">Selected package / test</label>
                  <select value={form.test} onChange={(e)=>set('test', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40">
                    <option>Aarogya Advanced</option><option>Aarogya Essential</option><option>Women Wellness Pro</option><option>Men Vitality</option><option>Senior Care 360</option><option>Complete Blood Count</option><option>Thyroid Profile</option><option>Vitamin D</option><option>Corporate Package</option>
                  </select>
                  <div className="mt-6">
                    <label className="text-sm font-semibold">Collection type</label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {COLLECTION_TYPES.map((c) => {
                        const selected = form.collection === c.id;
                        return (
                          <motion.button
                            key={c.id}
                            type="button"
                            onClick={() => set('collection', c.id)}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                            aria-pressed={selected}
                            className={`relative p-4 rounded-2xl border text-left transition-all ${selected ? 'border-foreground bg-foreground/5 shadow-soft' : 'border-black/10 bg-white hover:border-black/20'}`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 font-semibold text-sm"><c.icon className="w-4 h-4" />{c.label}</div>
                              <motion.span
                                initial={false}
                                animate={{ scale: selected ? 1 : 0, opacity: selected ? 1 : 0 }}
                                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                                className="w-5 h-5 rounded-full bg-foreground text-background flex items-center justify-center"
                              >
                                <Check className="w-3 h-3" strokeWidth={3} />
                              </motion.span>
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2"><Calendar className="w-4 h-4" />Date</label>
                    <input type="date" value={form.date} onChange={(e)=>set('date', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2"><Clock className="w-4 h-4" />Time slot</label>
                    <select value={form.time} onChange={(e)=>set('time', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40">
                      <option value="">Select slot</option><option>6:00 – 7:00 AM</option><option>7:00 – 8:00 AM</option><option>8:00 – 9:00 AM</option><option>9:00 – 10:00 AM</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2"><User className="w-4 h-4" />Full name</label>
                    <input value={form.name} onChange={(e)=>set('name', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="Aarav Kapoor" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4" />Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e)=>{ set('phone', e.target.value); if (phoneError) setPhoneError(''); }}
                      className={`mt-2 w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${phoneError ? 'border-red-400' : 'border-black/10'}`}
                      placeholder="+91 98765 43210"
                      inputMode="tel"
                    />
                    {phoneError && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600"><AlertCircle className="w-3 h-3" />{phoneError}</div>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold flex items-center gap-2"><MapPin className="w-4 h-4" />Address</label>
                    <textarea value={form.address} onChange={(e)=>set('address', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" rows={3} placeholder="House, street, locality" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">PIN code</label>
                    <input value={form.pin} onChange={(e)=>set('pin', e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="400051" inputMode="numeric" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220 }} className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center"><Check className="w-8 h-8 text-emerald-600" /></motion.div>
                  <h3 className="mt-5 text-2xl font-bold">Booking confirmed</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Thank you{form.name ? `, ${form.name}` : ''}. Our team will reach out on +91 {form.phone || '—'} shortly.
                    {form.date && form.time ? ` Scheduled for ${form.date} at ${form.time}.` : ''}
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">Reference: <b className="text-foreground">{reference}</b></div>
                  {submitError ? (
                    <div className="mt-5 mx-auto max-w-md text-[12px] text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  ) : (
                    <div className="mt-5 mx-auto max-w-md text-[12px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 inline-flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" />A confirmation email has been sent to our care team.
                    </div>
                  )}
                  <div className="mt-8">
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold">Back to home <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-8 flex justify-between items-center">
              <button onClick={back} disabled={step===0 || sending} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold disabled:opacity-40"><ArrowLeft className="w-4 h-4" />Back</button>
              <button onClick={next} disabled={sending} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold disabled:opacity-60">
                {sending ? (<><Loader2 className="w-4 h-4 animate-spin" />Sending…</>) : (<>{step === 2 ? 'Confirm booking' : 'Continue'} <ArrowRight className="w-4 h-4" /></>)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
