import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import config from "../config/portfolio";
import {
  Github,
  Gitlab,
  Linkedin,
  MessageCircle,
  Twitter,
  Mail,
  Globe,
  ExternalLink,
} from "lucide-react";

// Map des icônes disponibles pour le header
const iconMap = {
  Github,
  Gitlab,
  Linkedin,
  MessageCircle,
  Twitter,
  Mail,
  Globe,
  ExternalLink,
};

export default function Header() {
  const headerLinks = config.header_links || [];
  const displayName = config.header_name || `${config.name}.home`;

  const [activeHost, setActiveHost] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") setActiveHost(window.location.hostname);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 glass-card rounded-none border-x-0 border-t-0"
      style={{ borderRadius: 0 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between header-inner">
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <a href="/" className="text-2xl font-normal gradient-text header-title">
          {displayName || "Portfolio"}
        </a>
        <nav className="header-text-links hidden sm:flex items-center gap-3 ml-6 text-sm font-medium">
          {[
            { label: "/articles", url: "https://blog.adenyrr.me" },
            { label: "/docu", url: "https://docu.adenyrr.me" },
            { label: "/home", url: "https://adenyrr.me" },
            { label: "/infra", url: "https://infra.adenyrr.me" },
          ].map((link) => {
            let hostname = "";
            try {
              hostname = new URL(link.url).hostname;
            } catch (e) {}
            // Style /home like the active link (as on the blog) or when hostname matches
            const isActive =
              link.label === "/home" || (activeHost && activeHost === hostname);
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`header-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
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
