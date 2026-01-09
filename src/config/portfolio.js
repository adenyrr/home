module.exports = {
  // === Informations personnelles ===
  name: "adenyrr",
  handle: "adenyrr",
  title: "adminsys cloud",
  tagline: "Administrateur système, cloud et self-hosting",
  short_bio: "Administrateur système passionné par l'infrastructure, chiffrement et open-source.",
  bio: `Je suis un adminsys orienté cloud, virtualisation et conteneurisation. Fasciné
  par l'open-source depuis très jeune, j'utilise GNU/Linux au quotidien et j'héberge
  l'intégralité de mes services à domicile.`,
  email: "adenyrr@proton.me",
  site_url: "https://adenyrr.me",

  // === Liens affichés dans le Header (barre de navigation) ===
  // Pour ajouter un lien : copier un bloc existant et modifier les valeurs
  // - label: texte pour l'accessibilité (aria-label)
  // - icon: nom de l'icône Lucide (ex: "Github", "Gitlab", "Linkedin", "MessageCircle")
  // - url: URL du lien (s'ouvre dans un nouvel onglet)
  header_links: [
    { label: "GitHub", icon: "Github", url: "https://github.com/adenyrr" },
    { label: "GitLab", icon: "Gitlab", url: "https://gitlab.com/adenyrr" },
    { label: "LinkedIn", icon: "Linkedin", url: "https://be.linkedin.com/in/mvanhede" },
    { label: "Discord", icon: "MessageCircle", url: "https://discord.gg/NWVukm7zE2" },
  ],

  // === Liens affichés dans le Hero ===
  // Pour ajouter un lien : copier un bloc existant et modifier les valeurs
  // - label: texte du bouton
  // - url: URL du lien (s'ouvre dans un nouvel onglet)
  // - icon: nom de l'icône Lucide (ex: "Library", "Server", "FileText", "Globe")
  // Le premier lien aura le style "gradient", les autres auront un style "outline"
  hero_links: [
    { label: "Documentation", url: "https://docu.adenyrr.me/", icon: "Library" },
    { label: "Infra", url: "https://infra.adenyrr.me/", icon: "Server" }
  ],

  // === Visibilité des sections ===
  sections: {
    projects: true,
    diplomas: true,
    certifications: true,
    jobs: true
  },

  // === Projets ===
  // Pour ajouter un projet : copier un bloc existant et modifier les valeurs
  // - id: identifiant unique
  // - title: titre du projet
  // - description: description courte
  // - tech: tableau de technologies utilisées (tags)
  // - icon: nom de l'icône Lucide (ex: "Library", "Server", "Code", "Globe")
  // - link: URL du site live
  // - repo: URL du repository
  // - year: année du projet
  // - image: URL de l'image du projet
  projects: [
    {
      id: "docu",
      title: "Documentation",
      description: "Documentation de l'infrastructure, tutoriels et bonnes pratiques (self-hosted).",
      tech: ["Zensical", "Services", "Réseau", "Documentation"],
      icon: "Library",
      link: "https://docu.adenyrr.me/",
      repo: "https://github.com/adenyrr/docu",
      year: 2024,
      image: "https://adenyrr.me/images/projects/docu.webp"
    },
    {
      id: "infra",
      title: "Infra opensource",
      description: "Réalisation d'une infrastructure entièrement basée sur des logiciels opensource.",
      tech: ["Proxmox", "CEPH", "K3s"],
      icon: "Server",
      link: "https://infra.adenyrr.me/",
      repo: "https://github.com/adenyrr/infra",
      year: 2023,
      image: "https://adenyrr.me/images/projects/infra.webp"
    }
  ],

  // === Diplômes ===
  // Pour ajouter un diplôme : copier un bloc existant et modifier les valeurs
  // - id: identifiant unique
  // - title: intitulé du diplôme
  // - institution: établissement
  // - period: période (ex: "2020 - 2023")
  // - description: description du contenu
  // - tags: tableau de compétences/mots-clés (optionnel)
  diplomas: [
    {
      id: "chimie",
      title: "CQ6 - Technicien Chimiste QC",
      institution: "IPES @ Ath",
      period: "2011 - 2013",
      description: "Chimie analytique, instrumentale, organique et mise en production. Analyse du suivi de la production, mise en conformité, respect des normes.",
      tags: ["Chimie", "QC", "Production"]
    },
    {
      id: "adminsys",
      title: "Adminsys - Coordination équipe & infra IT",
      institution: "A6k - E6k @ Charleroi",
      period: "2023 - 2026",
      description: "Infrastructure, Hardware, Troubleshooting, Customer Care. Réseau Cisco, Active Directory, gestion de projets. Introduction à AWS, Linux et VMWare.",
      tags: ["Infrastructure", "Cisco", "AWS", "Linux", "VMWare"]
    }
  ],

  // === Certifications (Credly) ===
  // Pour ajouter une certification : copier un bloc existant et modifier les valeurs
  // - id: identifiant unique
  // - title: nom de la certification
  // - issuer: organisme émetteur
  // - date: année d'obtention
  // - credly_url: lien vers le profil Credly
  // - badge_image: URL de l'image du badge (depuis Credly)
  certifications: [
    {
      id: "it-essentials",
      title: "IT Essentials",
      issuer: "Cisco",
      date: "2024",
      credly_url: "https://www.credly.com/users/adenyrr",
      badge_image: "https://images.credly.com/size/340x340/images/04e8034c-81f5-4f7f-ab23-e8b428c31ce9/ITE.png"
    },
    {
      id: "linux-essentials",
      title: "Linux Essentials",
      issuer: "Cisco",
      date: "2024",
      credly_url: "https://www.credly.com/users/adenyrr",
      badge_image: "https://images.credly.com/size/340x340/images/e8fe3d67-2967-43d0-bc4a-7a268a37f47b/image.png"
    }
  ],

  // === Expériences professionnelles ===
  // Pour ajouter une expérience : copier un bloc existant et modifier les valeurs
  // - id: identifiant unique
  // - title: intitulé du poste
  // - company: nom de l'entreprise
  // - location: lieu
  // - period: période (ex: "2020 - Présent")
  // - description: description du poste
  jobs: [
    {
      id: "e6k",
      title: "Adminsys",
      company: "A6k - E6k",
      location: "Charleroi",
      period: "2023 - Présent",
      description: "Administration système, gestion d'infrastructure, support IT."
    }
  ]
};
