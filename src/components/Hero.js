import React from 'react';
import config from '../config/portfolio';
import { Library, Server, Code, Globe, Folder, FileText, Database, Cloud, Terminal, Cpu } from 'lucide-react';

// Map des icônes disponibles
const iconMap = {
  Library, Server, Code, Globe, Folder, FileText, Database, Cloud, Terminal, Cpu
};

export default function Hero() {
  const heroLinks = config.hero_links || [];

  return (
    <section className="relative py-20">
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up glass-card p-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 border border-indigo-300/60 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/20">
            {config.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4 pb-1">
            {config.name}
          </h1>
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary, var(--text))' }}>
            {config.short_bio}
          </p>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {config.bio}
          </p>

          {heroLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroLinks.map((link, index) => {
                const IconComponent = link.icon ? iconMap[link.icon] : null;
                return (
                  <a 
                    key={link.label}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={index === 0 
                      ? "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white font-medium hover:opacity-80 transition-opacity"
                      : "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-500/50 hover:bg-white/5 dark:hover:bg-white/10 transition-colors"
                    }
                  >
                    {IconComponent && <IconComponent size={18} />}
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}