import React from 'react';

export default function Badge({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-300/60 dark:bg-purple-500/15 dark:text-purple-300 dark:border-purple-400/40">
      {children}
    </span>
  );
}