import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', id: 'About' },
  { label: 'Projects', id: 'Projects' },
  { label: 'Skills', id: 'Skills' },
  { label: 'Experience', id: 'Experience' },
  { label: 'Contact', id: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500"
      style={{
        background: scrolled ? 'hsl(var(--background) / 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid transparent',
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono text-sm font-semibold transition-all duration-300"
        style={{ color: 'hsl(var(--primary))' }}
      >
        JPK<span style={{ color: 'hsl(var(--muted-foreground))' }}>://</span>
      </button>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-mono text-xs transition-all duration-300 relative"
            style={{
              color: active === item.id ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
            }}
            onMouseEnter={e => {
              if (active !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--foreground))';
              }
            }}
            onMouseLeave={e => {
              if (active !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--muted-foreground))';
              }
            }}
          >
            {active === item.id && (
              <motion.span
                layoutId="nav-dot"
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{ background: 'hsl(var(--primary))' }}
              />
            )}
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo('contact')}
        className="font-mono text-xs px-4 py-2 border transition-all duration-300"
        style={{
          borderColor: 'hsl(var(--primary) / 0.5)',
          color: 'hsl(var(--primary))',
          background: 'hsl(var(--primary) / 0.05)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--primary) / 0.15)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--primary) / 0.05)';
        }}
      >
        ./Hire
      </button>
    </motion.nav>
  );
};

export default Navigation;
