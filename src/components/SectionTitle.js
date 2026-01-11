import React from "react";

export default function SectionTitle({ children }) {
  // Use a span (like the header link renders text) instead of h2
  // to avoid any heading-specific browser/Tailwind styles
  return (
    <div className="text-center mb-5 mt-2">
      <span
        className="text-3xl font-normal gradient-text"
      >
        {children}
      </span>
    </div>
  );
}
