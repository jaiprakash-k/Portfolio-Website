import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillNode {
  id: string;
  label: string;
  group: 'frontend' | 'backend' | 'ai' | 'infra';
  x: number;
  y: number;
  connections: string[];
}

const nodes: SkillNode[] = [
  // Frontend
  { id: 'react', label: 'React', group: 'frontend', x: 15, y: 20, connections: ['ts', 'tailwind', 'next'] },
  { id: 'ts', label: 'TypeScript', group: 'frontend', x: 28, y: 10, connections: ['react', 'node'] },
  { id: 'tailwind', label: 'Tailwind', group: 'frontend', x: 10, y: 38, connections: ['react'] },
  { id: 'next', label: 'Next.js', group: 'frontend', x: 22, y: 30, connections: ['react', 'node'] },
  // Backend
  { id: 'node', label: 'Node.js', group: 'backend', x: 45, y: 15, connections: ['express', 'postgres', 'ts'] },
  { id: 'express', label: 'Express', group: 'backend', x: 55, y: 25, connections: ['node', 'postgres'] },
  { id: 'python', label: 'Python', group: 'backend', x: 42, y: 35, connections: ['fastapi', 'pytorch'] },
  { id: 'fastapi', label: 'FastAPI', group: 'backend', x: 55, y: 42, connections: ['python', 'postgres'] },
  { id: 'postgres', label: 'PostgreSQL', group: 'backend', x: 65, y: 18, connections: ['node', 'fastapi'] },
  // AI & Automation
  { id: 'pytorch', label: 'PyTorch', group: 'ai', x: 30, y: 62, connections: ['python', 'playwright'] },
  { id: 'playwright', label: 'Playwright', group: 'ai', x: 18, y: 72, connections: ['pytorch'] },
  { id: 'langchain', label: 'LangChain', group: 'ai', x: 42, y: 72, connections: ['python', 'pytorch'] },
  // Infrastructure
  { id: 'docker', label: 'Docker', group: 'infra', x: 72, y: 45, connections: ['kubernetes', 'nginx'] },
  { id: 'kubernetes', label: 'Kubernetes', group: 'infra', x: 82, y: 30, connections: ['docker'] },
  { id: 'nginx', label: 'Nginx', group: 'infra', x: 80, y: 60, connections: ['docker', 'node'] },
  { id: 'linux', label: 'Linux', group: 'infra', x: 70, y: 70, connections: ['docker', 'nginx'] },
];

const groupColors: Record<string, string> = {
  frontend: 'hsl(210, 100%, 56%)',
  backend: 'hsl(170, 80%, 50%)',
  ai: 'hsl(260, 80%, 65%)',
  infra: 'hsl(35, 90%, 60%)',
};

const groupLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & Automation',
  infra: 'Infrastructure',
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState<string | null>(null);

  const isConnected = (nodeId: string) => {
    if (!hovered) return false;
    const h = nodes.find(n => n.id === hovered);
    if (!h) return false;
    return h.connections.includes(nodeId) || nodeId === hovered;
  };

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.04) 0%, transparent 60%)' }}
      />

      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>03.</span> Skills
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className="font-heading font-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'hsl(var(--foreground))' }}
          >
            Skill constellation.
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Hover a node to reveal connections.
          </p>

          {/* Constellation SVG */}
          <div
            className="relative w-full border"
            style={{ paddingBottom: '56%', borderColor: 'hsl(var(--border))' }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ background: 'hsl(var(--surface))' }}
              viewBox="0 0 100 80"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connection lines */}
              {nodes.map(node =>
                node.connections.map(connId => {
                  const conn = nodes.find(n => n.id === connId);
                  if (!conn) return null;
                  const active = hovered === node.id || hovered === connId;
                  return (
                    <line
                      key={`${node.id}-${connId}`}
                      x1={node.x} y1={node.y}
                      x2={conn.x} y2={conn.y}
                      stroke={active ? groupColors[node.group] : 'hsl(var(--border))'}
                      strokeWidth={active ? '0.4' : '0.2'}
                      strokeOpacity={active ? 0.8 : 0.4}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  );
                })
              )}

              {/* Nodes */}
              {nodes.map(node => {
                const color = groupColors[node.group];
                const active = hovered === node.id;
                const connected = isConnected(node.id);
                const dimmed = hovered !== null && !active && !connected;
                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHovered(node.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {active && (
                      <circle cx={node.x} cy={node.y} r="4" fill={color} opacity="0.15">
                        <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.15;0;0.15" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={node.x} cy={node.y}
                      r={active ? '2.5' : '1.8'}
                      fill={color}
                      opacity={dimmed ? 0.2 : active ? 1 : 0.6}
                      style={{
                        transition: 'all 0.3s ease',
                        filter: active ? `drop-shadow(0 0 3px ${color})` : 'none',
                      }}
                    />
                    <text
                      x={node.x + 3} y={node.y + 1}
                      fontSize="3" fontFamily="JetBrains Mono, monospace"
                      fill={color}
                      opacity={dimmed ? 0.2 : active || connected ? 1 : 0.6}
                      style={{ transition: 'opacity 0.3s ease' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="lg:col-span-4 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="font-mono text-xs mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
            // GROUP_MAP
          </h3>
          {Object.entries(groupLabels).map(([key, label]) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: groupColors[key], boxShadow: `0 0 6px ${groupColors[key]}` }}
                />
                <span className="font-mono text-xs" style={{ color: groupColors[key] }}>
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 pl-5">
                {nodes
                  .filter(n => n.group === key)
                  .map(n => (
                    <span
                      key={n.id}
                      className="font-mono text-xs px-2 py-0.5 border transition-all duration-300 cursor-pointer"
                      style={{
                        borderColor: hovered === n.id ? groupColors[key] : `${groupColors[key]}30`,
                        background: hovered === n.id ? `${groupColors[key]}15` : 'transparent',
                        color: 'hsl(var(--muted-foreground))',
                      }}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {n.label}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
