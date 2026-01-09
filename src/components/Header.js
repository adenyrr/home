import React from 'react';
import ThemeToggle from './ThemeToggle';
import config from '../config/portfolio';
import { Github, Gitlab, Linkedin, MessageCircle, Twitter, Mail, Globe, ExternalLink } from 'lucide-react';

// Map des icônes disponibles pour le header
const iconMap = {
  Github, Gitlab, Linkedin, MessageCircle, Twitter, Mail, Globe, ExternalLink
};

export default function Header() {
  const headerLinks = config.header_links || [];

  return (
    <header className="sticky top-0 z-50 glass-card rounded-none border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a className="skip-link" href="#main">Aller au contenu</a>
        <a href="/" className="text-lg font-bold gradient-text">{config.name || 'Portfolio'}</a>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {headerLinks.map((link) => {
            const IconComponent = link.icon ? iconMap[link.icon] : null;
            return (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="text-muted hover:text-violet-400 transition-colors"
              >
                {IconComponent ? <IconComponent size={20} /> : link.label}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
