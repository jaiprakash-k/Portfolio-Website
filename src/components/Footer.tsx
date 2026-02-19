import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="relative px-6 md:px-16 lg:px-24 py-10"
      style={{ borderTop: '1px solid hsl(var(--border))' }}
    >
      {/* Top line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), hsl(var(--secondary) / 0.4), transparent)',
        }}
      />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Designed and engineered by
          </p>
          <p className="font-heading font-semibold text-sm mt-1" style={{ color: 'hsl(var(--foreground))' }}>
            Jai Prakash K
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            {new Date().getFullYear()}
          </span>
          <div className="h-px w-8" style={{ background: 'hsl(var(--border))' }} />
          <span
            className="font-mono text-xs"
            style={{ color: 'hsl(var(--primary) / 0.6)' }}
          >
            Built with React + TypeScript
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: 'hsl(140, 70%, 50%)',
              boxShadow: '0 0 6px hsl(140, 70%, 50%)',
              animation: 'node-pulse 2s ease-in-out infinite',
            }}
          />
          <span className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Available for opportunities
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
