import React from 'react';
import Badge from './Badge';
import { GraduationCap } from 'lucide-react';

export default function DiplomaCard({ diploma }) {
  return (
    <article className="glass-card glow-hover p-5 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/80 to-indigo-600/80 flex items-center justify-center text-white shrink-0">
          <GraduationCap size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-tight">{diploma.title}</h3>
          <span className="text-xs text-muted">{diploma.period}</span>
        </div>
      </div>

      <p className="text-sm font-medium text-violet-400 dark:text-purple-400 mb-2">{diploma.institution}</p>
      <p className="text-sm text-muted flex-1">{diploma.description}</p>

      {diploma.tags && diploma.tags.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
          {diploma.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </article>
  );
}