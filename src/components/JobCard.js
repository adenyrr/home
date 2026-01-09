import React from 'react';

export default function JobCard({ job }) {
  return (
    <article className="glass-card glow-hover p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-xl font-bold">{job.title}</h3>
          <p className="text-blue-400 font-medium">{job.company}</p>
        </div>
        <div className="text-right md:text-left">
          <span className="text-sm text-muted">{job.period}</span>
          {job.location && (
            <p className="text-xs text-muted">{job.location}</p>
          )}
        </div>
      </div>

      {job.description && (
        <p className="text-muted">{job.description}</p>
      )}
    </article>
  );
}