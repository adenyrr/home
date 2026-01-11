import React from "react";

export default function Badge({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-400/30">
      {children}
    </span>
  );
}
