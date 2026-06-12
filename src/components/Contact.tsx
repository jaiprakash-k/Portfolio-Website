import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const COMMANDS = {
  connect: {
    output: [
      '> Initiating connection...',
      '> LinkedIn: linkedin.com/in/jai-prakash-k',
      '> Status: ONLINE ✓',
    ],
  },
  hire: {
    output: [
      '> Opening recruitment channel...',
      '> Email: kjaiprakash000@gmail.com',
      '> Available for: Full-time, Internship, Contract',
      '> Response time: < 24 hours',
    ],
  },
  collaborate: {
    output: [
      '> Scanning for collaboration opportunities...',
      '> Open to: Hackathons, OSS, Side projects',
      '> GitHub: github.com/jaiprakash-k',
      '> DM to align on tech stack ✓',
    ],
  },
  help: {
    output: [
      '> Available commands:',
      '>   connect    — Social profiles',
      '>   hire       — Recruitment info',
      '>   collaborate — Open source / projects',
      '>   clear      — Reset terminal',
    ],
  },
};

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: '> Jai Prakash K — Contact Terminal v1.0' },
    { type: 'output', content: '> Type: connect | hire | collaborate | help' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [{ type: 'input', content: `$ ${cmd}` }];

    if (trimmed === 'clear') {
      setHistory([{ type: 'output', content: '> Terminal cleared. Type help for commands.' }]);
      setInput('');
      return;
    }

    if (COMMANDS[trimmed as keyof typeof COMMANDS]) {
      const { output } = COMMANDS[trimmed as keyof typeof COMMANDS];
      output.forEach(line => newLines.push({ type: 'output', content: line }));
    } else if (trimmed === '') {
      // do nothing
    } else {
      newLines.push({ type: 'error', content: `> Command not found: "${trimmed}". Try: help` });
    }

    setHistory(prev => [...prev, ...newLines, { type: 'output', content: '' }]);
    setCmdHistory(prev => [cmd, ...prev]);
    setCmdIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(next === -1 ? '' : cmdHistory[next] || '');
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.05) 0%, transparent 60%)' }}
      />

      <motion.div
        className="font-mono text-xs mb-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        <span style={{ color: 'hsl(var(--primary))' }}>07.</span> Contact
        <div className="flex-1 h-px ml-4" style={{ background: 'hsl(var(--border))' }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'hsl(var(--foreground))' }}
          >
            Let's build
            <br />
            <span style={{ color: 'hsl(var(--primary))' }}>something real.</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Open to engineering roles, technical partnerships, and ambitious projects.
            Use the terminal or reach out directly.
          </p>

          {/* Social links */}
          <div className="space-y-3">
            {[
              { label: 'GitHub', handle: 'github.com/jaiprakash-k', href: 'https://github.com/jaiprakash-k', color: 'hsl(var(--foreground))' },
              { label: 'LinkedIn', handle: 'linkedin.com/in/jaiprakash-k', href: 'https://linkedin.com/in/jaiprakash-k', color: 'hsl(var(--primary))' },
              { label: 'Email', handle: 'kjaiprakash000@gmail.com', href: 'mailto:kjaiprakash000@gmail.com', color: 'hsl(var(--secondary))' },
            ].map(({ label, handle, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-mono text-xs w-16" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {label}
                </span>
                <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
                <span
                  className="font-mono text-xs transition-all duration-300"
                  style={{ color }}
                >
                  {handle}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div
            className="border overflow-hidden"
            style={{ borderColor: 'hsl(var(--primary) / 0.3)', background: 'hsl(var(--surface))' }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-3 px-4 py-3 border-b"
              style={{ borderColor: 'hsl(var(--border))' }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(0, 80%, 60%)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(35, 90%, 60%)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(140, 70%, 50%)' }} />
              </div>
              <span className="font-mono text-xs ml-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
                contact.sh — jai@portfolio
              </span>
            </div>

            {/* Terminal body */}
            <div
              className="p-4 h-72 overflow-y-auto font-mono text-xs space-y-1"
              onClick={() => inputRef.current?.focus()}
              style={{ cursor: 'text' }}
            >
              {history.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.type === 'input'
                      ? 'hsl(var(--foreground))'
                      : line.type === 'error'
                        ? 'hsl(0, 80%, 65%)'
                        : 'hsl(var(--muted-foreground))',
                    minHeight: line.content === '' ? '0.75rem' : 'auto',
                  }}
                >
                  {line.content}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2">
                <span style={{ color: 'hsl(var(--primary))' }}>$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none font-mono text-xs"
                  style={{ color: 'hsl(var(--foreground))' }}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="type a command..."
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>

          <p className="font-mono text-xs mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
            ↑↓ navigate history · Enter to execute · ESC to clear input
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;