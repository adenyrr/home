# Gatsby Portfolio

Thème portfolio moderne et minimaliste construit avec Gatsby et Tailwind CSS.
Design inspiré d'un style futuriste avec effets glassmorphism et gradients violet/indigo.

## ✨ Fonctionnalités

- 🌙 **Dark/Light mode** avec détection automatique des préférences système
- 🎨 **Glassmorphism** et effets de glow au survol
- 📱 **Responsive** et optimisé mobile
- ⚡ **Performance** avec Gatsby (génération statique)
- 🔧 **Configuration simple** via un seul fichier JS
- 🌐 **Déploiement GitLab Pages** prêt à l'emploi

## 🛠️ Stack Technologique

### Framework & Runtime
| Technologie | Version | Description | Lien |
|-------------|---------|-------------|------|
| [Gatsby](https://www.gatsbyjs.com/) | ^5.0.0 | Générateur de sites statiques React | https://www.gatsbyjs.com/ |
| [React](https://react.dev/) | ^18.0.0 | Bibliothèque UI | https://react.dev/ |
| [Node.js](https://nodejs.org/) | 18+ | Runtime JavaScript | https://nodejs.org/ |

### Styling
| Technologie | Version | Description | Lien |
|-------------|---------|-------------|------|
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.0 | Framework CSS utility-first | https://tailwindcss.com/ |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | ^0.5.10 | Plugin typographie pour Tailwind | https://tailwindcss.com/docs/typography-plugin |
| [PostCSS](https://postcss.org/) | ^8.4.0 | Transformateur CSS | https://postcss.org/ |
| [Autoprefixer](https://autoprefixer.github.io/) | ^10.4.0 | Ajout automatique des préfixes CSS | https://autoprefixer.github.io/ |

### Icônes & Polices
| Technologie | Description | Lien |
|-------------|-------------|------|
| [Lucide React](https://lucide.dev/) | Bibliothèque d'icônes SVG | https://lucide.dev/ |
| [Inclusive Sans](https://fonts.google.com/specimen/Inclusive+Sans) | Police Google Fonts | https://fonts.google.com/specimen/Inclusive+Sans |

### Plugins Gatsby
| Plugin | Description |
|--------|-------------|
| gatsby-plugin-postcss | Intégration PostCSS/Tailwind |
| gatsby-plugin-react-helmet | Gestion des meta tags SEO |
| gatsby-plugin-image | Optimisation des images |
| gatsby-plugin-sharp | Traitement des images |
| gatsby-transformer-sharp | Transformation des images |
| gatsby-plugin-sitemap | Génération du sitemap XML |

### Déploiement
| Service | Description | Lien |
|---------|-------------|------|
| [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) | Hébergement statique gratuit | https://docs.gitlab.com/ee/user/project/pages/ |
| [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) | Pipeline de build automatique | https://docs.gitlab.com/ee/ci/ |

### Outils de Développement
| Outil | Description | Lien |
|-------|-------------|------|
| [VS Code](https://code.visualstudio.com/) | Éditeur de code | https://code.visualstudio.com/ |
| [GitHub Copilot](https://github.com/features/copilot) | Assistant IA (Claude Opus 4.5) | https://github.com/features/copilot |
| [Claude Opus 4.5](https://www.anthropic.com/claude) | Anthropic | https://www.anthropic.com/claude |
| [Raptor-mini Preview](https://www.github.com/copilot) | Github | https://www.anthropic.com/claude |

## 📁 Structure du Projet

```
gatsby-portfolio/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── config/         # Configuration du portfolio (portfolio.js)
│   ├── pages/          # Pages Gatsby
│   └── styles/         # Styles globaux (Tailwind)
├── static/             # Fichiers statiques (favicon, images)
├── gatsby-config.js    # Configuration Gatsby
├── tailwind.config.js  # Configuration Tailwind
└── .gitlab-ci.yml      # Pipeline CI/CD
```

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run develop

# Construire pour la production
npm run build

# Prévisualiser le build
npm run serve
```

## ⚙️ Configuration

Toute la configuration du portfolio se fait dans `src/config/portfolio.js` :
- Informations personnelles
- Liens header (avec icônes Lucide)
- Liens hero
- Projets (avec icônes configurables)
- Diplômes (avec tags)
- Certifications (badges)
- Expériences professionnelles

## 🎨 Thèmes

- **Dark mode** : Fond sombre (#0a0e14) avec gradients violet/rose
- **Light mode** : Fond clair (#fafafa) avec gradients indigo subtils
- Toggle manuel + détection automatique des préférences système

## 📝 Licence

Copyleft 🄯 — CC-BY-NC

---

*Conçu avec ❤️ par [adenyrr](https://adenyrr.me) assisté de Copilot*
