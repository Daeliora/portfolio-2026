const projects = [

  {
    title: 'Booki',
    slug: 'booki',
    shortDescription: "Intégration responsive d'une interface de réservation de logements et d'activités à partir de maquettes desktop, tablette et mobile.",
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    
    images: {
      cover: '/images/projects/booki/cover.webp',
      gallery: [
        '/images/projects/booki/cover.webp',
        '/images/projects/booki/mobile.webp',
        '/images/projects/booki/components.webp',
      ],
    },

    links: {
      github: 'https://github.com/Daeliora/P2-Booki',
    },

    context: "Projet d'intégration réalisé à partir de maquettes fournies pour les versions desktop, tablette et mobile. L'objectif était de transformer ces maquettes en une interface web cohérente, responsive et conforme aux spécifications du projet.",
    
    objectives: [
      "Intégrer une interface à partir de maquettes UI",
      "Respecter les versions desktop, tablette et mobile",
      "Utiliser une structure HTML sémantique",
      "Créer une mise en page responsive sans framework CSS",
      "Produire un code conforme aux contraintes du projet",
    ],

    features: [
      "Navigation entre les sections Hébergements et Activités",
      "Interface de recherche",
      "Filtres visuels",
      "Cartes d'hébergements et d'activités",
      "Section des hébergements les plus populaires",
      "Interface responsive desktop, tablette et mobile",
    ],

    technicalStack: [
      {
        name: "HTML5",
        description: "Structuration sémantique des différentes sections de l'interface.",
      },
      {
        name: "CSS3",
        description: "Mise en forme et création de l'interface responsive.",
      },
      {
        name: "Flexbox",
        description: "Organisation de plusieurs éléments et composants de l'interface.",
      },
      {
        name: "CSS Grid",
        description: "Mise en page notamment utilisée pour organiser la section des activités.",
      },
      {
        name: "Media Queries",
        description: "Adaptation de l'interface aux différentes tailles d'écran.",
      },
    ],

    skills: [
      "Intégration HTML/CSS",
      "Responsive design",
      "HTML sémantique",
      "Flexbox",
      "CSS Grid",
      "Intégration à partir d'une maquette",
    ],

    challenges: [
      "Reproduire précisément la mise en page des maquettes",
      "Adapter l'organisation des contenus aux différents formats d'écran",
      "Maintenir une structure cohérente tout au long de l'intégration",
    ],

    results: "Une interface responsive reproduisant les maquettes fournies et adaptée aux formats desktop, tablette et mobile.",
    improvements: "Une évolution possible serait de rendre certaines fonctionnalités davantage interactives et de poursuivre l'amélioration de l'accessibilité et des performances.",
  },

  {
    title: 'Sophie Bluel',
    slug: 'sophie-bluel',
    shortDescription: "Développement d'une interface dynamique connectée à une API pour afficher, filtrer et administrer une galerie de projets.",
    technologies: ['JavaScript', 'API REST', 'DOM', 'Fetch'],
    
    images: {
      cover: '/images/projects/sophie-bluel/cover.webp',
      gallery: [
        '/images/projects/sophie-bluel/cover.webp',
        '/images/projects/sophie-bluel/login.webp',
        '/images/projects/sophie-bluel/home-editor.webp',
        '/images/projects/sophie-bluel/modale.webp',
      ],
    },
    
    links: {
      github: 'https://github.com/Daeliora/Portfolio-architecte-sophie-bluel',
    },
    
    context: "Projet de développement JavaScript réalisé à partir d'un site initialement statique. L'objectif était de connecter l'interface à une API afin de rendre la galerie dynamique et de permettre à un administrateur de gérer les projets.",
    
    objectives: [
      "Récupérer et afficher des données depuis une API",
      "Dynamiser une galerie existante avec JavaScript",
      "Mettre en place des filtres par catégorie",
      "Développer une interface d'administration",
      "Gérer l'authentification administrateur",
    ],

    features: [
      "Affichage dynamique des projets depuis une API",
      "Filtres par catégorie",
      "Authentification administrateur",
      "Ajout de projets",
      "Suppression de projets",
      "Prévisualisation des images avant envoi",
      "Modale d'administration avec plusieurs vues",
    ],

    technicalStack: [
      {
        name: "JavaScript",
        description: "Gestion de la logique interactive, des événements et de l'affichage dynamique.",
      },
      {
        name: "Fetch API",
        description: "Communication avec l'API pour récupérer et modifier les données.",
      },
      {
        name: "DOM API",
        description: "Création et mise à jour dynamique des éléments de la galerie.",
      },
      {
        name: "FormData",
        description: "Envoi des informations d'un projet et de son image vers l'API.",
      },
      {
        name: "FileReader",
        description: "Création d'une prévisualisation de l'image sélectionnée avant son envoi.",
      },
      {
        name: "localStorage",
        description: "Stockage du token d'authentification côté navigateur.",
      },
    ],

    skills: [
      "JavaScript",
      "Manipulation du DOM",
      "API REST",
      "Programmation asynchrone",
      "Gestion des événements",
      "Authentification",
      "Gestion de fichiers",
    ],

    challenges: [
      "Synchroniser la récupération des données API avec l'affichage de la galerie",
      "Gérer les différentes vues de la modale d'administration",
      "Transmettre des images à l'API avec FormData",
      "Gérer l'authentification et le token côté client",
    ],

    results: "Une interface dynamique connectée à une API, permettant aux visiteurs de filtrer les réalisations et aux administrateurs de gérer les projets depuis une interface dédiée.",
    improvements: "Une évolution possible serait de poursuivre l'amélioration de l'expérience utilisateur de l'interface d'administration et de renforcer les contrôles de validation des données.",
  },

  {
    title: 'Kasa',
    slug: 'kasa',
    shortDescription: "Développement d'une application de location immobilière avec React, composants réutilisables et navigation dynamique.",
    technologies: ['React', 'React Router', 'Vite', 'JavaScript', 'Sass'],
    
    images: {
      cover: '/images/projects/kasa/cover.webp',
      gallery: [
        '/images/projects/kasa/cover.webp',
        '/images/projects/kasa/logement.webp',
        '/images/projects/kasa/a-propos.webp',
        '/images/projects/kasa/error.webp',
      ],
    },

    links: {
      github: 'https://github.com/Daeliora/kasa',
    },

    context: "Projet de développement front-end réalisé avec React à partir de maquettes desktop et mobile. L'objectif était de construire une application moderne et responsive en organisant l'interface autour de composants réutilisables.",

    objectives: [
      "Développer une application avec React",
      "Créer des composants réutilisables",
      "Mettre en place une navigation dynamique",
      "Gérer des routes avec paramètres",
      "Respecter les maquettes desktop et mobile",
    ],

    features: [
      "Liste dynamique des logements",
      "Pages de logements avec routes dynamiques",
      "Slideshow d'images",
      "Composants Collapse",
      "Page À propos",
      "Page 404",
      "Interface responsive desktop et mobile",
    ],

    technicalStack: [
      {
        name: "React",
        description: "Construction de l'interface à partir de composants réutilisables.",
      },
      {
        name: "React Router",
        description: "Gestion de la navigation et des routes dynamiques de l'application.",
      },
      {
        name: "JavaScript",
        description: "Gestion des données, du state et de la logique de l'application.",
      },
      {
        name: "Sass",
        description: "Organisation des styles et gestion des variables et de l'imbrication.",
      },
    ],

    skills: [
      "JavaScript",
      "React",
      "Création de composants",
      "Props",
      "Gestion du state",
      "Hooks",
      "React Router",
      "Routes dynamiques",
      "Responsive design",
    ],

    challenges: [
      "Gérer le comportement du slideshow et ses différents cas limites",
      "Gérer les identifiants de logements inexistants",
      "Construire une architecture basée sur des composants réutilisables",
    ],

    results: "Une application responsive structurée autour de composants React réutilisables, avec navigation dynamique, interactions et gestion des erreurs.",
    improvements: "Une évolution possible serait d'ajouter de nouvelles fonctionnalités interactives et de poursuivre l'amélioration de l'expérience utilisateur.",
  },

  {
    title: 'Mon Vieux Grimoire',
    slug: 'mon-vieux-grimoire',
    shortDescription: "Développement d'une API REST sécurisée pour une application de partage et de notation de livres.",
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Multer',
      'Sharp',
    ],
    
    images: {
      cover: '/images/projects/mon-vieux-grimoire/cover.webp',
      gallery: [
        '/images/projects/mon-vieux-grimoire/cover.webp',
        '/images/projects/mon-vieux-grimoire/signup.webp',
        '/images/projects/mon-vieux-grimoire/ajout-livre.webp',
        '/images/projects/mon-vieux-grimoire/ajout-success.webp',
        '/images/projects/mon-vieux-grimoire/livre-note.webp',
        '/images/projects/mon-vieux-grimoire/livre-delete.webp',
      ],
    },
    
    links: {
      github: 'https://github.com/Daeliora/Mon-vieux-grimoire',
    },
    
    context: "Projet back-end réalisé dans le cadre de ma formation. Le frontend React était fourni ; mon travail a consisté à développer l'API, la base de données, l'authentification, la gestion des images et le système de notation.",

    objectives: [
      "Développer une API REST",
      "Mettre en place une base de données MongoDB",
      "Gérer l'authentification des utilisateurs",
      "Sécuriser les accès aux ressources",
      "Gérer les images envoyées par les utilisateurs",
      "Développer un système de notation",
    ],

    features: [
      "Inscription et connexion des utilisateurs",
      "Création, modification et suppression de livres",
      "Système de notation",
      "Classement des livres les mieux notés",
      "Contrôle des droits des utilisateurs",
      "Upload et optimisation des images",
    ],

    technicalStack: [
      {
        name: "Node.js / Express",
        description: "Création du serveur et développement de l'API REST.",
      },
      {
        name: "MongoDB / Mongoose",
        description: "Stockage et gestion des données de l'application.",
      },
      {
        name: "JWT / bcrypt",
        description: "Authentification des utilisateurs et sécurisation des mots de passe.",
      },
      {
        name: "Multer / Sharp",
        description: "Gestion, redimensionnement et conversion des images en WebP.",
      },
    ],

    skills: [
      "Node.js",
      "Express",
      "API REST",
      "MongoDB",
      "Mongoose",
      "Authentification JWT",
      "Sécurisation des données",
      "Gestion des fichiers",
    ],

    challenges: [
      "Sécuriser l'authentification et les ressources protégées",
      "Vérifier les droits des utilisateurs sur leurs propres livres",
      "Gérer les uploads et optimiser les images",
      "Éviter l'accumulation de fichiers inutilisés",
    ],

    results: "Une API REST sécurisée permettant de gérer les utilisateurs, les livres, les notations et les images, avec stockage des données dans MongoDB.",
    improvements: "Une évolution possible serait d'enrichir les fonctionnalités de l'API et de poursuivre le renforcement des mécanismes de sécurité et de validation.",
  },

  {
    title: 'Nina Carducci',
    slug: 'nina-carducci',
    shortDescription: "Audit et optimisation d'un site existant autour de la performance, du SEO, de l'accessibilité et de la correction de bugs.",
    technologies: [
      'SEO',
      'Accessibilité',
      'Performance',
      'HTML',
      'Bootstrap',
      'jQuery',
    ],
    
    images: {
      cover: '/images/projects/nina-carducci/cover.webp',
      gallery: [
        '/images/projects/nina-carducci/cover.webp',
        '/images/projects/nina-carducci/lighthouse-final.webp',
        '/images/projects/nina-carducci/modale.webp',
        '/images/projects/nina-carducci/wave.webp',
      ],
    },
    
    links: {
      github: 'https://github.com/Daeliora/P4_Nina-Carducci-WebSite',
    },
    
    context: "Projet d'audit et d'optimisation d'un site existant. L'intervention portait sur les performances, le référencement naturel, l'accessibilité et la correction de problèmes fonctionnels.",

    objectives: [
      "Améliorer les performances du site",
      "Optimiser le référencement naturel",
      "Améliorer l'accessibilité",
      "Corriger les bugs fonctionnels",
    ],

    optimizations: [
      "Conversion et compression des images en WebP",
      "Lazy loading des images secondaires",
      "Optimisation du LCP",
      "Chargement différé des scripts JavaScript",
      "Amélioration de la structure HTML sémantique",
      "Ajout de données structurées Schema.org",
      "Ajout des métadonnées Open Graph",
      "Amélioration des textes alternatifs",
      "Correction des labels du formulaire",
    ],

    technicalStack: [
      {
        name: "SEO",
        description: "Optimisation de la structure, des métadonnées et des données destinées aux moteurs de recherche.",
      },
      {
        name: "Performance",
        description: "Optimisation des images, du chargement des scripts et du Largest Contentful Paint.",
      },
      {
        name: "Accessibilité",
        description: "Amélioration des textes alternatifs, labels, structure sémantique et attributs ARIA.",
      },
      {
        name: "Schema.org",
        description: "Ajout de données structurées au format JSON-LD.",
      },
      {
        name: "Open Graph",
        description: "Optimisation des informations affichées lors du partage sur les réseaux sociaux.",
      },
    ],

    skills: [
      "SEO technique",
      "Web Performance",
      "Accessibilité",
      "HTML sémantique",
      "Optimisation des images",
      "Analyse avec Lighthouse",
      "Debugging avec DevTools",
    ],

    challenges: [
      "Diagnostiquer les problèmes d'un projet existant",
      "Identifier les causes des bugs avec les outils de développement",
      "Réduire le poids des médias sans dégrader leur utilisation",
      "Améliorer les performances tout en conservant le fonctionnement existant",
    ],

    results: {
      performance: {
        before: 64,
        after: 100,
      },
      accessibility: {
        before: 67,
        after: 96,
      },
      seo: {
        before: 73,
        after: 100,
      },
      bestPractices: {
        before: 100,
        after: 100,
      },
    },
    improvements: "Une évolution possible serait de poursuivre le suivi des performances, de l'accessibilité et du référencement afin d'identifier de nouvelles pistes d'optimisation.",
  },
];

export default projects;