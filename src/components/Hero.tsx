import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleField from './ParticleField';

const codeFragments = [
  'async fn scale()',
  'docker-compose up',
  'SELECT * FROM nodes',
  'kubectl apply -f',
  'const mesh = new THREE',
  'wake_word.detect()',
  'BROADCAST SOS',
  'BLE.connect(peer)',
  '> building...',
  'git push origin',
  'nginx -t && reload',
  'Privacy.first()',
];

const FloatingFragment = ({ text, delay, x, y }: { text: string; delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute font-mono text-xs pointer-events-none select-none"
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: [0, 0.4, 0.4, 0],
      y: [10, 0, -8, -20],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 5 + 3,
      ease: 'easeInOut',
    }}
    style={{
      left: x,
      top: y,
      position: 'absolute',
      color: 'hsl(210, 100%, 56%)',
      textShadow: '0 0 10px hsl(210, 100%, 56%, 0.6)',
    }}
  >
    {text}
  </motion.div>
);

const name = 'Jai Prakash K';

const Hero = () => {
  const [lettersVisible, setLettersVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLettersVisible(true), 400);
    const t2 = setTimeout(() => setTaglineVisible(true), 1600);
    const t3 = setTimeout(() => setCtaVisible(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Particle field */}
      <ParticleField />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(210, 100%, 56%, 0.06) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(260, 80%, 60%, 0.05) 0%, transparent 70%)',
          transform: 'translate(50%, 50%)',
        }}
      />

      {/* Floating code fragments */}
      {codeFragments.map((text, i) => (
        <FloatingFragment
          key={i}
          text={text}
          delay={i * 0.8}
          x={`${8 + (i % 5) * 18 + Math.random() * 10}%`}
          y={`${10 + Math.floor(i / 5) * 30 + Math.random() * 15}%`}
        />
      ))}

      {/* System status badge */}
      <motion.div
        className="absolute top-8 right-8 flex items-center gap-2 font-mono text-xs"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: 'hsl(var(--primary))',
            boxShadow: '0 0 8px hsl(var(--primary))',
            animation: 'node-pulse 2s ease-in-out infinite',
          }}
        />
        Building scalable systems since 2024
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-6xl">
        {/* Role label */}
        <motion.div
          className="font-mono text-sm mb-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: 'hsl(var(--primary))' }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '32px',
              height: '1px',
              background: 'hsl(var(--primary))',
            }}
          />
          Full Stack Developer
        </motion.div>

        {/* Name letters */}
        <h1 className="font-heading font-bold leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              className={letter === ' ' ? 'inline-block w-8' : 'inline-block'}
              initial={{ opacity: 0, y: 20 }}
              animate={lettersVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                color: 'hsl(var(--foreground))',
                textShadow: i > 3 && i < 11 ? '0 0 30px hsl(var(--primary) / 0.3)' : 'none',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <div className="overflow-hidden mb-10">
          <motion.p
            className="font-heading text-xl md:text-2xl font-light max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={taglineVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            Building scalable,{' '}
            <span
              style={{
                color: 'hsl(var(--secondary))',
                textShadow: '0 0 20px hsl(var(--secondary) / 0.4)',
              }}
            >
              privacy-first
            </span>{' '}
            intelligent systems.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-4 items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative font-mono text-sm px-6 py-3 border transition-all duration-500"
            style={{
              borderColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary))',
              background: 'hsl(var(--primary) / 0.05)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--primary) / 0.15)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px hsl(var(--primary) / 0.3)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--primary) / 0.05)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
            }}
          >
            view_projects()
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="font-mono text-sm px-6 py-3 transition-all duration-500"
            style={{ color: 'hsl(var(--muted-foreground))' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--foreground))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--muted-foreground))';
            }}
          >
            ./hire_me →
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          <span className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            scroll
          </span>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)), transparent)' }}
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3), transparent)' }}
      />
    </section>
  );
};

export default Hero;
