import React from "react";
import Badge from "./Badge";
import {
  ExternalLink,
  FolderGit2,
  Library,
  Server,
  Code,
  Globe,
  Folder,
  FileText,
  Database,
  Cloud,
  Terminal,
  Cpu,
} from "lucide-react";

// Map des icônes disponibles
const iconMap = {
  Library,
  Server,
  Code,
  Globe,
  Folder,
  FileText,
  Database,
  Cloud,
  Terminal,
  Cpu,
};

export default function ProjectCard({ project }) {
  // Récupère l'icône depuis le nom configuré
  const IconComponent = project.icon ? iconMap[project.icon] : null;

  return (
    <article className="glass-card glow-hover p-5 flex flex-col h-full">
      {/* Project image */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden aspect-video bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Header with icon */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/80 to-indigo-600/80 flex items-center justify-center text-white shrink-0">
          {IconComponent ? (
            <IconComponent size={20} />
          ) : (
            project.title.charAt(0)
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-tight project-title">
            {project.title}
          </h3>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
      </div>

      <p className="text-sm text-muted flex-1">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech && project.tech.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-700 dark:border-gray-700 border-gray-200 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white font-medium hover:opacity-80 transition-opacity"
          >
            <ExternalLink size={14} />
            Voir le site
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-gray-500/50 hover:bg-white/5 dark:hover:bg-white/10 transition-colors"
          >
            <FolderGit2 size={14} />
            Code source
          </a>
        )}
      </div>
    </article>
  );
}
