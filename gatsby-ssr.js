const React = require("react");

// Inline script to apply theme class before React hydration to avoid FOUC
const setInitialTheme = `(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') { document.documentElement.classList.add('dark'); return; }
    if (theme === 'light') { document.documentElement.classList.remove('dark'); return; }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // silent
  }
})();`;

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    React.createElement('link', {
      key: 'favicon',
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }),
    React.createElement('link', {
      key: 'apple-touch-icon',
      rel: 'apple-touch-icon',
      href: '/favicon.png'
    })
  ]);

  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-initializer',
      dangerouslySetInnerHTML: { __html: setInitialTheme }
    })
  ]);
};