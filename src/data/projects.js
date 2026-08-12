const projects = [

  {
    title: 'Booki',
    slug: 'booki',
    shortDescription: "Intégration responsive d'une interface de réservation de logements et d'activités.",
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    image: '/images/booki-cover.webp',
    links: {
      github: 'https://github.com/Daeliora/P2-Booki',
    },
    context: "Projet d'intégration réalisé dans le cadre de ma formation de développeuse web à partir d'une maquette fournie.",
    
    objectives: [
      'Intégrer une interface à partir d’une maquette',
      'Respecter la structure et les contraintes graphiques fournies',
      'Adapter l’interface aux différents formats d’écran',
      'Mettre en place une navigation et des éléments interactifs accessibles',
    ],

    technicalStack: [
      {
        name: 'HTML',
        description:
          'Structuration sémantique des différentes sections de la page.',
      },
      {
        name: 'CSS',
        description:
          'Mise en forme de l’interface et création de la mise en page responsive.',
      },
      {
        name: 'Responsive Design',
        description:
          'Adaptation de l’interface aux différentes tailles d’écran.',
      },
    ],

    skills: [
      'Intégration HTML/CSS',
      'Responsive design',
      'Structuration sémantique',
      'Reproduction d’une maquette',
      'Organisation d’une interface web',
    ],

    results: "Une interface responsive reproduisant la structure et l'identité visuelle demandées à partir de la maquette.",
    improvements: "Une évolution possible serait de rendre certaines fonctionnalités davantage interactives et de poursuivre l'amélioration de l'accessibilité et des performances.",
  },

  {
    title: 'Sophie Bluel',
    slug: 'sophie-bluel',
    shortDescription: "Développement d'une interface dynamique permettant de gérer une galerie de projets via une API.",
    technologies: ['JavaScript', 'API REST', 'DOM', 'Fetch'],
    image: '/images/sophie-bluel-cover.webp',
    links: {
      github: 'https://github.com/Daeliora/Portfolio-architecte-sophie-bluel',
    },
    context: "Projet de développement JavaScript réalisé dans le cadre de ma formation. Le repository contient une partie frontend et une partie backend.",

    objectives: [
      'Dynamiser une interface existante avec JavaScript',
      'Récupérer et afficher des données provenant d’une API',
      'Mettre en place des filtres par catégorie',
      'Développer une interface d’administration permettant de gérer les projets',
    ],

    technicalStack: [
      {
        name: 'JavaScript',
        description:
          'Développement de la logique interactive et manipulation du DOM.',
      },
      {
        name: 'API REST',
        description:
          'Récupération et modification des données du portfolio via des requêtes HTTP.',
      },
      {
        name: 'Fetch',
        description:
          'Communication avec l’API pour récupérer et envoyer les données.',
      },
    ],

    skills: [
      'Manipulation du DOM',
      'Appels API',
      'JavaScript asynchrone',
      'Gestion des événements',
      'Authentification',
      'Création d’une interface d’administration',
    ],

    results: "Une interface dynamique permettant d'afficher les projets depuis l'API, de les filtrer et de les gérer depuis une interface d'administration.",
    improvements: "Une évolution possible serait de poursuivre l'amélioration de l'expérience utilisateur de l'interface d'administration et de renforcer les contrôles de validation des données.",
  },

  {
    title: 'Kasa',
    slug: 'kasa',
    shortDescription: "Développement d'une application de location immobilière avec React.",
    technologies: ['React', 'React Router', 'Vite', 'Sass'],
    image: '/images/kasa-cover.webp',
    links: {
      github: 'https://github.com/Daeliora/kasa',
    },
    context: "Projet de développement front-end réalisé avec React dans le cadre de ma formation de développeuse web.",

    objectives: [
      'Développer une application avec React',
      'Créer des composants réutilisables',
      'Mettre en place la navigation entre les différentes pages',
      'Respecter une maquette et les contraintes responsive',
    ],

    technicalStack: [
      {
        name: 'React',
        description:
          "Bibliothèque utilisée pour construire l'interface et organiser l'application en composants.",
      },
      {
        name: 'React Router',
        description:
          "Gestion de la navigation entre les différentes pages de l'application.",
      },
      {
        name: 'Vite',
        description:
          'Outil utilisé pour le développement et la construction du projet front-end.',
      },
      {
        name: 'Sass',
        description:
          'Préprocesseur CSS utilisé pour organiser et maintenir les styles du projet.',
      },
    ],

    skills: [
      'Architecture React',
      'Création de composants réutilisables',
      'Gestion de la navigation',
      'Responsive design',
      'Organisation d’un projet front-end',
    ],

    results: "Une application de location immobilière développée avec React et structurée autour de composants réutilisables et d'un système de navigation.",
    improvements: "Une évolution possible serait d'ajouter de nouvelles fonctionnalités interactives et de poursuivre l'amélioration de l'expérience utilisateur.",
  },

  {
    title: 'Mon Vieux Grimoire',
    slug: 'mon-vieux-grimoire',
    shortDescription: "Développement du back-end d'une application de notation et de gestion de livres.",
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Multer',
      'Sharp',
    ],
    image: '/images/mon-vieux-grimoire-cover.webp',
    links: {
      github: 'https://github.com/Daeliora/Mon-vieux-grimoire',
    },
    context: "Projet back-end réalisé dans le cadre de ma formation. L'objectif était de développer l'API d'une application permettant aux utilisateurs de gérer et noter des livres.",

    objectives: [
      'Développer une API REST',
      'Mettre en place une base de données MongoDB',
      'Gérer l’authentification des utilisateurs',
      'Créer les fonctionnalités de gestion des livres et des notations',
      'Sécuriser et optimiser le traitement des images',
    ],

    technicalStack: [
      {
        name: 'Node.js / Express',
        description:
          'Création du serveur et développement des différentes routes de l’API.',
      },
      {
        name: 'MongoDB / Mongoose',
        description:
          'Stockage et gestion des données de l’application dans une base de données MongoDB.',
      },
      {
        name: 'JWT / bcrypt',
        description:
          'Gestion de l’authentification et sécurisation des mots de passe.',
      },
      {
        name: 'Multer / Sharp',
        description:
          'Gestion, traitement et optimisation des images envoyées par les utilisateurs.',
      },
    ],

    skills: [
      'Création d’une API REST',
      'Conception de routes Express',
      'Gestion d’une base MongoDB',
      'Authentification',
      'Sécurisation des données',
      'Gestion et optimisation des images',
    ],

    results: "Une API fonctionnelle permettant notamment la création de comptes, l'authentification, la gestion des livres et des notations.",
    improvements: "Une évolution possible serait d'enrichir les fonctionnalités de l'API et de poursuivre le renforcement des mécanismes de sécurité et de validation.",
  },

  {
    title: 'Nina Carducci',
    slug: 'nina-carducci',
    shortDescription: "Optimisation d'un site de photographe pour améliorer son référencement, ses performances et son accessibilité.",
    technologies: [
      'SEO',
      'Accessibilité',
      'Performance',
      'HTML',
      'Bootstrap',
      'jQuery',
    ],
    image: '/images/nina-carducci-cover.webp',
    links: {
      github: 'https://github.com/Daeliora/P4_Nina-Carducci-WebSite',
    },
    context: "Projet d'optimisation d'un site web existant réalisé dans le cadre de ma formation.",

    objectives: [
      'Améliorer le référencement naturel du site',
      'Optimiser les performances',
      'Améliorer l’accessibilité',
      'Structurer correctement les informations destinées aux moteurs de recherche',
    ],

    technicalStack: [
      {
        name: 'SEO',
        description:
          'Optimisation des métadonnées, du contenu et de la structure du site pour améliorer son référencement.',
      },
      {
        name: 'Open Graph',
        description:
          'Mise en place des métadonnées nécessaires au partage du site sur les réseaux sociaux.',
      },
      {
        name: 'Schema.org',
        description:
          'Ajout de données structurées afin de fournir davantage de contexte aux moteurs de recherche.',
      },
      {
        name: 'Performance',
        description:
          'Optimisation du chargement des ressources et des images.',
      },
    ],

    skills: [
      'SEO technique',
      'Accessibilité web',
      'Optimisation des performances',
      'Métadonnées',
      'Données structurées',
      'Optimisation des images',
    ],

    results: "Un site optimisé au niveau de sa structure, de ses métadonnées, de ses images et de différents aspects liés au référencement et à l'accessibilité.",
    improvements: "Une évolution possible serait de poursuivre le suivi des performances et du référencement dans le temps afin d'identifier de nouvelles pistes d'optimisation.",
  },
];

export default projects;