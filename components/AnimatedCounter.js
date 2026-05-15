'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ to = 100, duration = 2.2, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(eased * to);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);
  return <span ref={ref}>{prefix}{value.toLocaleString('en-IN', { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</span>;
}
