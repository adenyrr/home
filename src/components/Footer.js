import React from "react";
import config from "../config/portfolio";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="footer-content">
        <div className="copyright">
          Copyleft CC - BY-NC{" "}
          <a href={config.site_url} target="_blank" rel="noopener noreferrer">
            {config.name}
          </a>
        </div>
        <div className="credits">
          <span>
            made with <span className="heart">❤️</span> by{" "}
            <a href={config.site_url} target="_blank" rel="noopener noreferrer">
              {config.name}
            </a>{" "}
            with{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            - hosted by{" "}
            <a
              href="https://gitlab.com/adenyrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
