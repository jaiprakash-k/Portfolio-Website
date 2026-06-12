import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  challenges: string;
  color: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 'nami',
    name: 'Nami Assistant',
    tagline: 'Offline-first voice AI with multi-service architecture',
    description: 'A modular, privacy-first voice assistant that operates entirely offline for wake word detection — no cloud dependency for activation. Built with a multi-service architecture that separates concerns across layers.',
    problem: 'Most voice assistants stream audio to centralized servers for wake word detection — a fundamental privacy violation. Nami runs wake word detection entirely on-device using lightweight neural models.',
    architecture: 'Microservice mesh: Wake word detector → Intent parser → Service router → Action executor. Each layer communicates through a local message bus, enabling independent scaling and failure isolation.',
    highlights: ['Offline wake word detection', 'Multi-service architecture', 'Web automation via Playwright', 'Privacy-first by design'],
    stack: ['Python', 'PyAudio', 'Playwright', 'FastAPI', 'SQLite', 'Docker'],
    challenges: 'Achieving sub-200ms wake word detection latency while running on CPU-only environments. Solved through model quantization and optimized audio pipeline buffering.',
    color: 'hsl(210, 100%, 56%)',
    accentColor: 'hsl(200, 100%, 70%)',
  },
  {
    id: 'resqlink',
    name: 'ResQlinK',
    tagline: 'Offline emergency mesh communication network',
    description: 'Peer-to-peer emergency communication system using BLE for infrastructure-free SOS broadcasting. Designed for disaster scenarios where cellular networks fail.',
    problem: 'In emergencies — earthquakes, floods, network outages — cellular infrastructure fails exactly when people need it most. ResQlinK creates a decentralized mesh that works without any central server.',
    architecture: 'BLE device discovery → Peer-to-peer handshake → Message relay chain → GPS-tagged SOS broadcast. Mesh-ready design allows messages to hop across multiple devices to reach help.',
    highlights: ['Offline BLE communication', 'Mesh-ready relay design', 'Real-time SOS broadcasting', 'GPS-tagged distress signals'],
    stack: ['React Native', 'BLE API', 'Node.js', 'WebSocket', 'GPS', 'SQLite'],
    challenges: 'BLE range limitations and connection instability under high-noise RF environments. Implemented adaptive retry with exponential backoff and multi-path message routing.',
    color: 'hsl(260, 80%, 60%)',
    accentColor: 'hsl(280, 90%, 75%)',
  },
  {
    id: 'rapidrx',
    name: 'RapidRX',
    tagline: 'Full-stack medicine delivery platform with role-based workflows',
    description: 'A full-stack medicine delivery MVP connecting customers with verified local pharmacies — handling inventory search, cart checkout, delivery partner workflows, pharmacy management, and PDF invoice generation.',
    problem: 'Local pharmacy ordering is fragmented across phone calls and walk-ins, with no unified system for discovery, verified inventory, or delivery coordination. RapidRX models the full lifecycle — search, order, fulfillment, delivery — across four distinct user roles.',
    architecture: 'Next.js App Router with Server Components for read-heavy pages (direct Prisma queries) and Client Components for interactive flows (cart, checkout, dashboards). All mutations route through /api handlers backed by Prisma → PostgreSQL, with NextAuth JWTs encoding a role field checked on every protected route.',
    highlights: ['Role-based auth (4 roles)', 'Geolocation pharmacy search', 'Server-side PDF invoices', 'Real-time order tracking'],
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    challenges: 'Implementing geolocation-aware pharmacy search using a Haversine-formula SQL query via Prisma raw queries — calculating great-circle distance to verified pharmacies, filtering by radius, and sorting by proximity, all while enforcing verification status at the database level.',
    color: 'hsl(145, 70%, 50%)',
    accentColor: 'hsl(155, 85%, 65%)',
  },
  {
    id: 'locallit',
    name: 'LocalLit',
    tagline: 'Real-time local book marketplace and exchange platform',
    description: 'A full-stack platform for discovering, buying, selling, and exchanging books within a local community — powered by real-time chat, direct book-for-book trade proposals, and a complete order management flow.',
    problem: 'Secondhand book trading is scattered across informal groups with no trust layer, structured listings, or direct communication. LocalLit unifies marketplace browsing, real-time negotiation, and exchange proposals into one platform.',
    architecture: 'React + Vite SPA communicating with an Express REST API over Axios, backed by Sequelize/MySQL. Socket.io provides bidirectional real-time chat (join_chat, send_message, typing indicators) layered alongside the stateless JWT-authenticated REST flow for listings, orders, and exchanges.',
    highlights: ['Real-time chat via Socket.io', 'Book-for-book exchange flow', 'JWT auth with bcrypt hashing', 'Reviews & seller ratings'],
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.io'],
    challenges: 'Designing the exchange system as a first-class flow alongside purchases — proposing, accepting, and tracking book-for-book trades required a separate data model and state machine running in parallel with the standard order pipeline, while keeping chat and exchange context in sync in real time.',
    color: 'hsl(28, 90%, 58%)',
    accentColor: 'hsl(40, 95%, 70%)',
  },
];

const TechPill = ({ tech, color }: { tech: string; color: string }) => (
  <motion.span
    className="font-mono text-xs px-3 py-1 border"
    style={{
      borderColor: `${color}40`,
      background: `${color}10`,
      color,
    }}
    whileHover={{ scale: 1.05, borderColor: color, background: `${color}20` }}
    transition={{ duration: 0.2 }}
  >
    {tech}
  </motion.span>
);

const NeuralBackground = ({ color }: { color: string }) => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    x: (i % 4) * 25 + 12.5,
    y: Math.floor(i / 4) * 33 + 16.5,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 0 }}>
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => {
          const dist = Math.sqrt((n.x - m.x) ** 2 + (n.y - m.y) ** 2);
          if (dist > 30) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={`${n.x}%`} y1={`${n.y}%`}
              x2={`${m.x}%`} y2={`${m.y}%`}
              stroke={color} strokeWidth="0.5" strokeOpacity="0.5"
            />
          );
        })
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={`${n.x}%`} cy={`${n.y}%`} r="3"
          fill={color} fillOpacity="0.6"
          className="animate-node-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  );
};

const MeshBackground = ({ color }: { color: string }) => {
  const cols = 8, rows = 6;
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" style={{ zIndex: 0 }}>
      {Array.from({ length: cols + 1 }, (_, i) =>
        Array.from({ length: rows + 1 }, (_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={`${(i / cols) * 100}%`}
            cy={`${(j / rows) * 100}%`}
            r={Math.random() > 0.7 ? '4' : '2'}
            fill={color}
            fillOpacity={Math.random() > 0.7 ? '0.8' : '0.3'}
            className={Math.random() > 0.7 ? 'animate-node-pulse' : ''}
            style={{ animationDelay: `${(i + j) * 0.15}s` }}
          />
        ))
      )}
      {Array.from({ length: cols }, (_, i) =>
        Array.from({ length: rows }, (_, j) => (
          <line
            key={`h-${i}-${j}`}
            x1={`${(i / cols) * 100}%`} y1={`${(j / rows) * 100}%`}
            x2={`${((i + 1) / cols) * 100}%`} y2={`${(j / rows) * 100}%`}
            stroke={color} strokeWidth="0.5" strokeOpacity="0.4"
          />
        ))
      )}
    </svg>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="relative border overflow-hidden"
      style={{ borderColor: `${project.color}25` }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      {/* Background visualization */}
      <div className="relative h-48 overflow-hidden" style={{ background: 'hsl(var(--surface))' }}>
        {index === 0 ? (
          <NeuralBackground color={project.color} />
        ) : (
          <MeshBackground color={project.color} />
        )}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 40%, hsl(var(--card)))` }}
        />
        <div className="absolute bottom-4 left-6">
          <span
            className="font-mono text-xs px-2 py-1"
            style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" style={{ background: 'hsl(var(--card))' }}>
        <h3
          className="font-heading font-bold text-2xl mb-2"
          style={{ color: 'hsl(var(--foreground))' }}
        >
          {project.name}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
          {project.tagline}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <span style={{ color: project.color }}>▸</span>
              {h}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <TechPill key={tech} tech={tech} color={project.color} />
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs flex items-center gap-2 transition-all duration-300"
          style={{ color: project.color }}
        >
          {expanded ? '[-] collapse case study' : '[+] open case study'}
        </button>

        {/* Expanded case study */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pt-6 space-y-5" style={{ borderTop: `1px solid ${project.color}20`, marginTop: '1rem' }}>
            {[
              { label: 'PROBLEM', content: project.problem },
              { label: 'ARCHITECTURE', content: project.architecture },
              { label: 'ENGINEERING CHALLENGE', content: project.challenges },
            ].map(({ label, content }) => (
              <div key={label}>
                <span className="font-mono text-xs mb-2 block" style={{ color: project.color }}>
                  // {label}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 hover:opacity-100"
        style={{ boxShadow: `inset 0 0 30px ${project.color}08` }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, hsl(var(--secondary) / 0.04) 0%, transparent 60%)' }}
      />

      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>02.</span> Projects
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <motion.h2
        className="font-heading font-bold mb-3"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'hsl(var(--foreground))' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Engineered, not designed.
      </motion.h2>
      <motion.p
        className="mb-12 text-sm"
        style={{ color: 'hsl(var(--muted-foreground))', maxWidth: '480px' }}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Systems built to solve hard constraints — offline-first, privacy-preserving, fault-tolerant.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
