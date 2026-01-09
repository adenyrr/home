import React from 'react';
import config from '../config/portfolio';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted">
        <p>Copyleft &#x1f12f; {new Date().getFullYear()} {config.name} — CC-BY-NC</p>
      </div>
    </footer>
  );
}