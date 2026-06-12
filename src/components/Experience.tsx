import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timelineEvents = [
  {
    year: '2025',
    title: 'Web Developer Intern',
    company: 'Amdox Technologies India',
    bullets: [
      'Shipped frontend integrations across multiple product modules',
      'Optimized rendering performance, reducing TTI by ~30%',
      'Wired production REST APIs into complex UI components',
      'Collaborated with backend team on data contract design',
    ],
    color: 'hsl(var(--primary))',
    colorRaw: 'hsl(210, 100%, 56%)',
  },
  {
    year: '2024',
    title: 'B.Tech Computer Science Engineering',
    company: 'SRM Institute of Science and Technology',
    bullets: [
      'CGPA: 8.4 — consistent academic performance',
      'Focus on distributed systems, ML, and software architecture',
      'Active member of coding and hackathon club',
    ],
    color: 'hsl(var(--secondary))',
    colorRaw: 'hsl(260, 80%, 60%)',
  },
];

interface EventProps {
  event: typeof timelineEvents[0];
  index: number;
}

const TimelineEvent = ({ event, index }: EventProps) => {
  const nodeRef = useRef(null);
  const nodeInView = useInView(nodeRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, x: -20 }}
      animate={nodeInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      {/* Node dot on timeline */}
      <div
        className="absolute -left-10 top-6 flex items-center justify-center"
        style={{ transform: 'translateX(-50%)' }}
      >
        <motion.div
          className="w-3 h-3 rounded-full border-2"
          style={{
            borderColor: event.colorRaw,
            background: 'hsl(var(--background))',
          }}
          animate={nodeInView ? {
            boxShadow: [
              `0 0 0px ${event.colorRaw}`,
              `0 0 12px ${event.colorRaw}`,
              `0 0 0px ${event.colorRaw}`,
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Content card */}
      <div
        className="border p-6 relative"
        style={{ borderColor: `${event.colorRaw}25`, background: 'hsl(var(--card))' }}
      >
        {/* Horizontal connector to timeline */}
        <div
          className="absolute left-0 top-6 h-px -ml-10"
          style={{ width: '40px', background: `${event.colorRaw}50` }}
        />

        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
          <div>
            <h3 className="font-heading font-bold text-lg" style={{ color: 'hsl(var(--foreground))' }}>
              {event.title}
            </h3>
            <p className="font-mono text-sm" style={{ color: event.colorRaw }}>
              {event.company}
            </p>
          </div>
          <span
            className="font-mono text-xs px-3 py-1"
            style={{
              border: `1px solid ${event.colorRaw}30`,
              background: `${event.colorRaw}10`,
              color: event.colorRaw,
            }}
          >
            {event.year}
          </span>
        </div>

        <ul className="space-y-2">
          {event.bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <span style={{ color: event.colorRaw, flexShrink: 0, marginTop: '2px' }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, hsl(var(--primary) / 0.04) 0%, transparent 60%)' }}
      />

      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>04.</span> Experience
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="max-w-3xl">
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'hsl(var(--border))' }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <div className="space-y-12 pl-10">
            {timelineEvents.map((event, i) => (
              <TimelineEvent key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
