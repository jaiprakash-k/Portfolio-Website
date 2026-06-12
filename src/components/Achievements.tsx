import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
  rank: '3RD PLACE',
  event: 'QTHACK 2026',
  description: 'Built an RF Signal Router Simulator, ranked 3rd of 571 teams (1,476 participants) at SRMIST\'s national quantum hackathon.',
  color: 'hsl(var(--primary))',
},
{
  rank: '3RD PLACE',
  event: 'CONNECT THE DOTS 2026',
  description: 'Designed a production-ready centralized backend routing system, placing 3rd among 380+ teams at IIT Patna\'s infrastructure challenge.',
  color: 'hsl(var(--secondary))',
},
{
  rank: 'FINALIST',
  event: 'SEISMO HACK 1.0',
  description: 'Built ResQlink, a zero-connectivity BLE mesh SOS platform — top team from 130+ submissions for real-world offline-comm constraints.',
  color: 'hsl(var(--primary))',
},
{
  rank: '3RD PLACE',
  event: 'ECOHACK IDEATHON',
  description: 'Recognized for a technology-driven sustainable development solution in a competitive national field.',
  color: 'hsl(var(--secondary))',
},
{
  rank: 'ELITE + GOLD',
  event: 'NPTEL — JAVA',
  description: 'Scored 96% in IIT faculty-led national certification program on Programming in Java.',
  color: 'hsl(var(--primary))',
},
];

const certifications = [
  { name: 'NPTEL Java', detail: 'Elite + Gold (96%)', issuer: 'NPTEL', color: 'hsl(35, 90%, 60%)' },
  { name: 'Generative AI Foundations', detail: 'AWS Academy Graduate', issuer: 'AWS', color: 'hsl(28, 90%, 55%)' },
  { name: 'Fine-tuning Language Models', detail: 'Certificate', issuer: 'Hugging Face', color: 'hsl(45, 95%, 60%)' },
  { name: 'Full Stack Software Developer', detail: 'Professional Certificate', issuer: 'IBM', color: 'hsl(210, 100%, 56%)' },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, hsl(var(--secondary) / 0.04) 0%, transparent 60%)' }}
      />

      {/* Achievements */}
      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>05.</span> Achievements
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-24">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden border p-8"
            style={{ borderColor: `${a.color}30` }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ borderColor: `${a.color}60` }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(to right, ${a.color}, transparent)` }}
            />
            <div
              className="font-heading font-bold text-5xl mb-3 leading-none"
              style={{ color: a.color, textShadow: `0 0 30px ${a.color}50` }}
            >
              {a.rank}
            </div>
            <div className="font-heading font-semibold text-xl mb-2" style={{ color: 'hsl(var(--foreground))' }}>
              {a.event}
            </div>
            <p className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="font-mono text-xs mb-12 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>06.</span> Certifications
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="relative border p-5 group cursor-pointer overflow-hidden"
            style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            whileHover={{ borderColor: `${cert.color}50`, y: -4 }}
          >
            {/* Card glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.color}08, transparent 60%)` }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: cert.color }}
            />

            <div className="font-mono text-xs mb-4" style={{ color: cert.color }}>
              {cert.issuer}
            </div>
            <div className="font-heading font-semibold text-base mb-1" style={{ color: 'hsl(var(--foreground))' }}>
              {cert.name}
            </div>
            <div className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {cert.detail}
            </div>

            {/* Credential icon */}
            <div
              className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center border font-mono text-xs transition-all duration-300 opacity-30 group-hover:opacity-80"
              style={{ borderColor: cert.color, color: cert.color }}
            >
              ✓
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;