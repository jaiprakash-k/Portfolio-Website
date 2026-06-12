import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'CGPA', value: 8.4, suffix: '', decimals: 1 },
  { label: 'Projects Built', value: 10, suffix: '+', decimals: 0 },
  { label: 'Hackathon Recognition', value: 4, suffix: 'x', decimals: 0 },
];

const CounterStat = ({ label, value, suffix, decimals }: { label: string; value: number; suffix: string; decimals: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || !displayRef.current) return;
    const start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * eased;
      if (displayRef.current) {
        displayRef.current.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
      }
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, decimals]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'hsl(var(--primary))' }}>
        <span ref={displayRef}>0</span>
        <span>{suffix}</span>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>
        {label}
      </span>
    </div>
  );
};

const ArchitectureCube = () => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* 3D CSS cube-like structure */}
      <div className="relative" style={{ perspective: '600px' }}>
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d', width: '160px', height: '160px' }}
        >
          {/* Cube faces */}
          {[
            { transform: 'translateZ(80px)', label: 'API' },
            { transform: 'translateZ(-80px) rotateY(180deg)', label: 'DB' },
            { transform: 'rotateY(90deg) translateZ(80px)', label: 'UI' },
            { transform: 'rotateY(-90deg) translateZ(80px)', label: 'ML' },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg border"
              style={{
                transform: face.transform,
                background: 'hsl(var(--surface) / 0.8)',
                borderColor: 'hsl(var(--primary) / 0.4)',
                color: 'hsl(var(--primary))',
                boxShadow: 'inset 0 0 20px hsl(var(--primary) / 0.1)',
                backfaceVisibility: 'hidden',
              }}
            >
              {face.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Orbiting rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[120, 170, 220].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `hsl(${i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'} / 0.2)`,
              borderStyle: 'dashed',
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 10 + i * 4, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, hsl(var(--primary) / 0.04) 0%, transparent 60%)' }}
      />

      {/* Section label */}
      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>01.</span> About_me
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: 3D visual */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ArchitectureCube />

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8" style={{ borderTop: '1px solid hsl(var(--border))' }}>
            {stats.map((stat) => (
              <CounterStat 
                key={stat.label} 
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div
          className="lg:col-span-7 lg:pl-8"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2
            className="font-heading font-bold mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'hsl(var(--foreground))' }}
          >
            Systems thinker.
            <br />
            <span style={{ color: 'hsl(var(--primary))' }}>Builder by default.</span>
          </h2>

          <div className="space-y-4 mb-8">
            {[
              'Computer Science Engineering student at SRM Institute of Science and Technology — CGPA 8.4. Focused on building systems that are engineered for scale, not just functionality.',
              'Interned at Amdox Technologies India as a Web Developer — shipped frontend integrations, optimized performance bottlenecks, and wired production APIs into complex UIs.',
              'My work lives at the intersection of AI, automation, and distributed systems. I build tools that respect user privacy by design, not as an afterthought.',
            ].map((text, i) => (
              <motion.p
                key={i}
                className="leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.95rem' }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Institution badge */}
          <motion.div
            className="inline-flex items-center gap-3 border px-4 py-3 font-mono text-sm"
            style={{
              borderColor: 'hsl(var(--primary) / 0.3)',
              background: 'hsl(var(--primary) / 0.05)',
              color: 'hsl(var(--primary))',
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <span style={{ color: 'hsl(var(--muted-foreground))' }}>EDU://</span>
            SRM Institute of Science and Technology
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
