import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function CertificationCard({ cert }) {
  return (
    <article className="glass-card glow-hover p-5 flex flex-col h-full items-center text-center">
      {/* Badge image */}
      {cert.badge_image && (
        <div className="mb-4 w-28 h-28 rounded-xl overflow-hidden bg-gray-800/50 dark:bg-gray-800 p-2">
          <img
            src={cert.badge_image}
            alt={cert.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )}

      <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
      <p className="text-sm text-muted mt-1 inline-flex items-center gap-1">
        <ShieldCheck size={14} className="text-violet-400" />
        {cert.issuer}
      </p>
      <span className="text-xs text-muted mt-1">{cert.date}</span>

      {cert.credly_url && (
        <a
          href={cert.credly_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <ExternalLink size={16} />
          Voir sur Credly
        </a>
      )}
    </article>
  );
}
