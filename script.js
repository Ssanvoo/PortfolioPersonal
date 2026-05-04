document.addEventListener('DOMContentLoaded', () => {
  const supportedLanguages = ['es', 'fr', 'en'];

  const translations = {
    es: {
      meta: {
        title: 'Marco Sanvoisin Guijarro | Portfolio Back-End Java',
        description: 'Portfolio personal de Marco Sanvoisin Guijarro, desarrollador Back-End Java con foco en QA Automation e IA para equipos multilingües.',
      },
      a11y: {
        skipLink: 'Saltar al contenido principal',
        siteLogo: 'Ir al inicio',
        siteNav: 'Navegación principal',
        languageSwitcher: 'Idiomas del portfolio',
        heroPanel: 'Resumen rápido del perfil',
        emailLabel: 'Enviar un correo a Marco Sanvoisin Guijarro',
        linkedinLabel: 'Abrir LinkedIn de Marco Sanvoisin Guijarro en una nueva pestaña',
        languageButtons: {
          es: 'Cambiar a español',
          fr: 'Cambiar a francés',
          en: 'Cambiar a inglés',
        },
      },
      nav: ['Perfil', 'Experiencia', 'Skills', 'Proyectos', 'Idiomas', 'Contacto'],
      hero: {
        eyebrow: 'Back-End Java · QA Automation · Testing · IA',
        title: 'Desarrollo software fiable, automatizable y preparado para entornos críticos.',
        lead: 'Soy Marco Sanvoisin Guijarro, un perfil técnico orientado a back-end Java. Trabajo con mentalidad de producto, foco en rendimiento y una base sólida en sistemas.',
        ctaPrimary: 'Contactar',
        ctaSecondary: 'Ver proyectos',
        points: [
          'Back-End Java con interés en arquitectura, APIs, persistencia y mantenimiento.',
          'QA Automation y pruebas funcionales para reducir riesgo y retrabajo.',
          'Trabajo cómodo en español, francés e inglés en equipos multilingües.',
        ],
        profileLabel: 'Perfil profesional',
        profileTitle: 'Desarrollador orientado a backend y calidad',
        profileText: 'Combino desarrollo, automatización de pruebas, y capacidad para moverme en equipos multidisciplinares.',
        stats: [
          ['Lenguajes', 'Java, Kotlin, SQL'],
          ['Enfoque', 'Backend'],
          ['Idiomas', 'Español, francés e inglés'],
        ],
      },
      about: {
        eyebrow: 'Perfil',
        title: 'Una base técnica pensada para construir y verificar software sólido',
        description: 'Mi foco está en desarrollar soluciones backend mantenibles, automatizar la validación de calidad y entender el software desde el código hasta su despliegue, operación y uso real.',
        cards: [
          { title: 'QA Automation', text: 'Automatización de pruebas funcionales y validación de regresión para ayudar a entregar software más estable y predecible.' },
        ],
      },
      experience: {
        eyebrow: 'Experiencia',
        title: 'Experiencia relevante para equipos de calidad, automatización y entrega',
        cards: [
          { meta: 'Minsait (Indra) · Prácticas', title: 'Calidad funcional y automatización', text: 'Participación en la definición y ejecución de pruebas, diseño de casos, organización en Jira y automatización con Playwright y TypeScript. Esta etapa refuerza mi capacidad para validar software en entornos exigentes y colaborar con equipos técnicos.' },
          { meta: 'Decillion World', title: 'Coordinación técnica y desarrollo web', text: 'Experiencia liderando tareas en un equipo pequeño y colaborando en la creación de una web con WordPress, HTML y CSS, con atención tanto al detalle visual como a la entrega.' },
          { meta: 'Erasmus+ en Malta', title: 'Soporte técnico y redes', text: 'Resolución de incidencias, mantenimiento de equipos, mejora de redes internas y trabajo en un entorno internacional donde la comunicación en varios idiomas era parte del día a día.' },
          { meta: 'MediaMarkt', title: 'Entorno operativo y trato con clientes', text: 'Trabajo bajo presión, gestión de stock y atención al cliente, habilidades útiles para colaborar con equipos multidisciplinares y entender necesidades reales de usuarios.' },
        ],
      },
      skills: {
        eyebrow: 'Skills',
        title: 'Tecnologías y herramientas que forman mi base técnica',
        groups: ['Desarrollo', 'Calidad y automatización', 'Entorno técnico', 'Sistemas y enfoque'],
      },
      projects: {
        eyebrow: 'Proyectos',
        title: 'Proyectos y trabajos que refuerzan mi perfil técnico',
        description: 'No se trata de mostrar cantidad, sino de enseñar iniciativas que demuestren criterio, disciplina técnica y capacidad para entregar software útil en QA, backend e integración.',
        cards: [
          { tag: 'QA Automation', title: 'Automatización de validaciones funcionales', text: 'Un ejemplo de trabajo orientado a fiabilidad: casos de prueba, ejecución automatizada y reducción del esfuerzo manual en escenarios repetibles.', tech: ['Playwright', 'TypeScript', 'Jira'] },
          { tag: 'Desarrollo de página web / Web', title: 'Sitio web institucional con WordPress', text: 'Trabajo web donde combiné personalización visual, estructura de contenido y ajustes técnicos para publicar una presencia digital funcional.', tech: ['WordPress', 'HTML', 'CSS'] },
          { tag: 'Videojuego para móviles', title: 'Stickman Hook como evidencia técnica adicional', text: 'Puede aparecer como proyecto complementario para mostrar lógica de juego, control de escenas y trabajo con físicas, pero sin quitar protagonismo al enfoque backend.', tech: ['Unity', 'C#', 'Trabajo en equipo'] },
        ],
      },
      languages: {
        eyebrow: 'Idiomas',
        title: 'Capacidad para trabajar en contextos multilingües',
        cards: [
          { title: 'Español', text: 'Nativo. Comunicación profesional fluida y natural.' },
          { title: 'Francés', text: 'Nivel alto, útil para interacción técnica y atención en entornos reales.' },
          { title: 'Inglés', text: 'Nivel intermedio-alto para documentación, coordinación y trabajo diario.' },
        ],
      },
      education: {
        eyebrow: 'Formación',
        title: 'Una trayectoria académica alineada con desarrollo y sistemas',
        cards: [
          { title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma', text: 'IES Luis Braille · 2024–2026' },
          { title: 'Grado Medio en Sistemas Microinformáticos y Redes', text: 'IES Luis Braille · 2022–2024' },
        ],
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Hablemos de backend, automatización y software que funcione de verdad',
        description: 'Si buscas un perfil técnico con base en desarrollo Java, QA Automation e IA, puedes contactarme directamente.',
        emailButton: 'Email',
        linkedinButton: 'LinkedIn',
        availabilityTitle: 'Disponibilidad',
        availabilityText: 'Abierto a oportunidades en desarrollo backend, calidad, automatización y entornos técnicos donde el detalle importa.',
        locationTitle: 'Ubicación',
        locationText: 'Madrid, España',
        transportTitle: 'Transporte',
        transportText: 'Carné B disponible para movilidad local.',
        addressTitle: 'Datos de contacto',
      },
      footerLink: 'Volver arriba',
      footer: '© {year} Marco Sanvoisin Guijarro. Portfolio personal orientado a Back-End Java.',
    },
    fr: {
      meta: {
        title: 'Marco Sanvoisin Guijarro | Portfolio Développeur Back-End Java',
        description: 'Portfolio personnel de Marco Sanvoisin Guijarro, développeur Back-End Java avec un focus sur QA Automation et IA pour des équipes multilingues.',
      },
      a11y: {
        skipLink: 'Aller au contenu principal',
        siteLogo: 'Aller en haut de page',
        siteNav: 'Navigation principale',
        languageSwitcher: 'Langues du portfolio',
        heroPanel: 'Résumé rapide du profil',
        emailLabel: 'Envoyer un e-mail à Marco Sanvoisin Guijarro',
        linkedinLabel: 'Ouvrir le LinkedIn de Marco Sanvoisin Guijarro dans un nouvel onglet',
        languageButtons: {
          es: 'Passer à l’espagnol',
          fr: 'Passer au français',
          en: 'Passer à l’anglais',
        },
      },
      nav: ['Profil', 'Expérience', 'Compétences', 'Projets', 'Langues', 'Contact'],
      hero: {
        eyebrow: 'Back-End Java · QA Automation · Testing · IA',
        title: 'Un développement logiciel fiable, automatisable et prêt pour les environnements critiques.',
        lead: 'Je suis Marco Sanvoisin Guijarro, un profil technique orienté back-end Java. Je travaille avec une logique produit, un focus sur la performance et une base solide en systèmes.',
        ctaPrimary: 'Contacter',
        ctaSecondary: 'Voir les projets',
        points: [
          'Back-End Java avec un intérêt pour l’architecture, les API, la persistance et la maintenance.',
          'QA Automation et tests fonctionnels pour réduire les risques et la reprise de travail.',
          'À l’aise en espagnol, français et anglais au sein d’équipes multilingues.',
        ],
        profileLabel: 'Profil professionnel',
        profileTitle: 'Développeur orienté backend et qualité',
        profileText: 'Je combine développement, automatisation de tests et capacité à évoluer dans des équipes pluridisciplinaires.',
        stats: [
          ['Langages', 'Java, Kotlin, SQL'],
          ['Orientation', 'Backend'],
          ['Langues', 'Espagnol, français et anglais'],
        ],
      },
      about: {
        eyebrow: 'Profil',
        title: 'Une base technique pensée pour construire et vérifier des logiciels solides',
        description: 'Mon objectif est de développer des solutions backend maintenables, d’automatiser la validation qualité et de comprendre le logiciel du code jusqu’au déploiement, à l’exploitation et à l’usage réel.',
        cards: [
          { title: 'QA Automation', text: 'Automatisation des tests fonctionnels et validation de régression pour livrer un logiciel plus stable et prévisible.' },
        ],
      },
      experience: {
        eyebrow: 'Expérience',
        title: 'Une expérience utile pour les équipes de qualité, d’automatisation et de livraison',
        cards: [
          { meta: 'Minsait (Indra) · Stage', title: 'Qualité fonctionnelle et automatisation', text: 'Participation à la définition et à l’exécution de tests, à la conception des cas de test, à l’organisation dans Jira et à l’automatisation avec Playwright et TypeScript. Cette expérience renforce ma capacité à valider des logiciels dans des environnements exigeants et à collaborer avec des équipes techniques.' },
          { meta: 'Decillion World', title: 'Coordination technique et développement web', text: 'Expérience de leadership sur des tâches dans une petite équipe et participation à la création d’un site avec WordPress, HTML et CSS, avec autant d’attention portée au détail visuel qu’à la livraison.' },
          { meta: 'Erasmus+ à Malte', title: 'Support technique et réseaux', text: 'Résolution d’incidents, maintenance d’équipements, amélioration des réseaux internes et travail dans un environnement international où la communication en plusieurs langues faisait partie du quotidien.' },
          { meta: 'MediaMarkt', title: 'Environnement opérationnel et relation client', text: 'Travail sous pression, gestion des stocks et relation client, des compétences utiles pour collaborer avec des équipes pluridisciplinaires et comprendre les besoins réels des utilisateurs.' },
        ],
      },
      skills: {
        eyebrow: 'Compétences',
        title: 'Technologies et outils qui structurent ma base technique',
        groups: ['Développement', 'Qualité et automatisation', 'Environnement technique', 'Systèmes et approche'],
      },
      projects: {
        eyebrow: 'Projets',
        title: 'Des projets et travaux qui renforcent mon profil technique',
        description: 'L’objectif n’est pas d’en montrer beaucoup, mais de présenter des initiatives qui démontrent du jugement, de la rigueur technique et la capacité à livrer un logiciel utile en QA, backend et intégration.',
        cards: [
          { tag: 'QA Automation', title: 'Automatisation des validations fonctionnelles', text: 'Un exemple de travail orienté fiabilité : cas de test, exécution automatisée et réduction des efforts manuels sur les scénarios répétitifs.', tech: ['Playwright', 'TypeScript', 'Jira'] },
          { tag: 'Développement de site web / Web', title: 'Site institutionnel avec WordPress', text: 'Un travail web où j’ai combiné personnalisation visuelle, structure du contenu et ajustements techniques pour publier une présence digitale fonctionnelle.', tech: ['WordPress', 'HTML', 'CSS'] },
          { tag: 'Jeu vidéo mobile', title: 'Stickman Hook comme preuve technique complémentaire', text: 'Peut apparaître comme un projet complémentaire pour montrer la logique de jeu, la gestion des scènes et le travail avec la physique, sans enlever la priorité au focus backend.', tech: ['Unity', 'C#', "Travail d’équipe"] },
        ],
      },
      languages: {
        eyebrow: 'Langues',
        title: 'Capacité à travailler dans des contextes multilingues',
        cards: [
          { title: 'Espagnol', text: 'Natif. Communication professionnelle fluide et naturelle.' },
          { title: 'Français', text: 'Niveau élevé, utile pour les échanges techniques et les contextes réels.' },
          { title: 'Anglais', text: 'Niveau intermédiaire-avancé pour la documentation, la coordination et le travail quotidien.' },
        ],
      },
      education: {
        eyebrow: 'Formation',
        title: 'Un parcours académique aligné avec le développement et les systèmes',
        cards: [
          { title: 'Diplôme supérieur en Développement d’Applications Multiplateformes', text: 'IES Luis Braille · 2024–2026' },
          { title: 'Diplôme intermédiaire en Systèmes Microinformatiques et Réseaux', text: 'IES Luis Braille · 2022–2024' },
        ],
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Parlons backend, automatisation et logiciel qui fonctionne vraiment',
        description: 'Si vous recherchez un profil technique avec une base en développement Java, QA Automation et IA, vous pouvez me contacter directement.',
        emailButton: 'E-mail',
        linkedinButton: 'LinkedIn',
        availabilityTitle: 'Disponibilité',
        availabilityText: 'Ouvert aux opportunités en développement backend, qualité, automatisation et environnements techniques où le détail compte.',
        locationTitle: 'Localisation',
        locationText: 'Madrid, Espagne',
        transportTitle: 'Transport',
        transportText: 'Permis B disponible pour les déplacements locaux.',
        addressTitle: 'Coordonnées',
      },
      footerLink: 'Retour en haut',
      footer: '© {year} Marco Sanvoisin Guijarro. Portfolio personnel orienté Back-End Java.',
    },
    en: {
      meta: {
        title: 'Marco Sanvoisin Guijarro | Back-End Java Portfolio',
        description: 'Personal portfolio of Marco Sanvoisin Guijarro, a Back-End Java developer focused on QA Automation and AI for multilingual teams.',
      },
      a11y: {
        skipLink: 'Skip to main content',
        siteLogo: 'Go to the top of the page',
        siteNav: 'Main navigation',
        languageSwitcher: 'Portfolio languages',
        heroPanel: 'Quick profile summary',
        emailLabel: 'Send an email to Marco Sanvoisin Guijarro',
        linkedinLabel: 'Open Marco Sanvoisin Guijarro’s LinkedIn in a new tab',
        languageButtons: {
          es: 'Switch to Spanish',
          fr: 'Switch to French',
          en: 'Switch to English',
        },
      },
      nav: ['Profile', 'Experience', 'Skills', 'Projects', 'Languages', 'Contact'],
      hero: {
        eyebrow: 'Back-End Java · QA Automation · Testing · AI',
        title: 'Reliable, automatable software ready for critical environments.',
        lead: 'I am Marco Sanvoisin Guijarro, a technical profile focused on back-end Java. I work with a product mindset, a focus on performance and a solid background in systems.',
        ctaPrimary: 'Contact',
        ctaSecondary: 'View projects',
        points: [
          'Back-End Java with a strong interest in architecture, APIs, persistence and maintainability.',
          'QA Automation and functional testing to reduce risk and rework.',
          'Comfortable working in Spanish, French and English within multilingual teams.',
        ],
        profileLabel: 'Professional profile',
        profileTitle: 'Developer focused on backend and quality',
        profileText: 'I combine development, test automation and the ability to work in cross-functional teams.',
        stats: [
          ['Languages', 'Java, Kotlin, SQL'],
          ['Focus', 'Backend'],
          ['Languages', 'Spanish, French and English'],
        ],
      },
      about: {
        eyebrow: 'Profile',
        title: 'A technical foundation built to create and verify solid software',
        description: 'My focus is on building maintainable backend solutions, automating quality validation and understanding software from the code all the way to deployment, operation and real usage.',
        cards: [
          { title: 'QA Automation', text: 'Functional test automation and regression validation to help deliver more stable and predictable software.' },
        ],
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Relevant experience for quality, automation and delivery teams',
        cards: [
          { meta: 'Minsait (Indra) · Internship', title: 'Functional quality and automation', text: 'Involved in test definition and execution, test case design, Jira organisation and automation with Playwright and TypeScript. This experience strengthens my ability to validate software in demanding environments and collaborate with technical teams.' },
          { meta: 'Decillion World', title: 'Technical coordination and web development', text: 'Experience leading tasks in a small team and contributing to a website built with WordPress, HTML and CSS, balancing visual detail with delivery.' },
          { meta: 'Erasmus+ in Malta', title: 'Technical support and networking', text: 'Incident resolution, equipment maintenance, internal network improvements and work in an international environment where communication in several languages was part of everyday work.' },
          { meta: 'MediaMarkt', title: 'Operational environment and customer service', text: 'Work under pressure, stock management and customer support, skills that help when collaborating with multidisciplinary teams and understanding real user needs.' },
        ],
      },
      skills: {
        eyebrow: 'Skills',
        title: 'Technologies and tools that shape my technical foundation',
        groups: ['Development', 'Quality and automation', 'Technical environment', 'Systems and approach'],
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Projects and work that strengthen my technical profile',
        description: 'The goal is not to show a lot, but to highlight initiatives that demonstrate judgment, technical discipline and the ability to deliver useful software in QA, backend and integration.',
        cards: [
          { tag: 'QA Automation', title: 'Functional validation automation', text: 'A work sample focused on reliability: test cases, automated execution and less manual effort on repetitive scenarios.', tech: ['Playwright', 'TypeScript', 'Jira'] },
          { tag: 'Web page development / Web', title: 'Institutional website with WordPress', text: 'A web project where I combined visual customization, content structure and technical adjustments to ship a functional digital presence.', tech: ['WordPress', 'HTML', 'CSS'] },
          { tag: 'Mobile video game', title: 'Stickman Hook as additional technical evidence', text: 'It can appear as a complementary project to show game logic, scene control and work with physics, without taking focus away from the backend narrative.', tech: ['Unity', 'C#', 'Teamwork'] },
        ],
      },
      languages: {
        eyebrow: 'Languages',
        title: 'Ability to work in multilingual contexts',
        cards: [
          { title: 'Spanish', text: 'Native. Fluent and natural professional communication.' },
          { title: 'French', text: 'High level, useful for technical communication and real-world interactions.' },
          { title: 'English', text: 'Upper-intermediate level for documentation, coordination and day-to-day work.' },
        ],
      },
      education: {
        eyebrow: 'Education',
        title: 'An academic path aligned with development and systems',
        cards: [
          { title: 'Higher Degree in Multi-platform Application Development', text: 'IES Luis Braille · 2024–2026' },
          { title: 'Intermediate Degree in Microcomputer Systems and Networks', text: 'IES Luis Braille · 2022–2024' },
        ],
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let’s talk backend, automation and software that really works',
        description: 'If you are looking for a technical profile with a background in Java development, QA Automation and AI, you can contact me directly.',
        emailButton: 'Email',
        linkedinButton: 'LinkedIn',
        availabilityTitle: 'Availability',
        availabilityText: 'Open to opportunities in backend development, quality, automation and technical environments where detail matters.',
        locationTitle: 'Location',
        locationText: 'Madrid, Spain',
        transportTitle: 'Transport',
        transportText: 'Driving licence available for local mobility.',
        addressTitle: 'Contact details',
      },
      footerLink: 'Back to top',
      footer: '© {year} Marco Sanvoisin Guijarro. Personal portfolio focused on Back-End Java.',
    },
  };

  const yearNode = document.querySelector('[data-current-year]');
  const titleNode = document.querySelector('title');
  const metaDescriptionNode = document.querySelector('meta[name="description"]');
  const skipLink = document.querySelector('.skip-link');
  const siteLogo = document.querySelector('.site-logo');
  const siteNav = document.querySelector('.site-nav');
  const languageSwitcher = document.querySelector('.language-switcher');
  const languageButtons = Array.from(document.querySelectorAll('.language-switcher__button'));
  const header = document.querySelector('.site-header');
  const navLinks = Array.from(document.querySelectorAll('.site-nav__link'));
  const sections = Array.from(document.querySelectorAll('main > section[id]'));
  const footerLinkNode = document.querySelector('.site-footer__link');
  const footerTextNode = document.querySelector('.site-footer__text');
  const heroPanel = document.querySelector('.hero__panel');

  const getInitialLanguage = () => {
    try {
      const storedLanguage = window.localStorage.getItem('portfolio-language');
      if (supportedLanguages.includes(storedLanguage)) {
        return storedLanguage;
      }
    } catch {
      // Some browsing contexts disable storage.
    }

    const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
    if (supportedLanguages.includes(browserLanguage)) {
      return browserLanguage;
    }

    return 'es';
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === 'string') {
      element.textContent = value;
    }
  };

  const setTextList = (elements, values) => {
    elements.forEach((element, index) => {
      if (element && typeof values[index] === 'string') {
        element.textContent = values[index];
      }
    });
  };

  const setCardContent = (cards, data) => {
    cards.forEach((card, index) => {
      const entry = data[index];
      if (!entry) return;

      const meta = card.querySelector('.timeline-card__meta, .project-card__tag');
      const title = card.querySelector('.info-card__title, .timeline-card__title, .skill-group__title, .project-card__title, .language-card__title, .education-card__title, .contact-card__title');
      const text = card.querySelector('.info-card__text, .timeline-card__text, .project-card__text, .language-card__text, .education-card__text, .contact-card__text');

      if (meta && typeof entry.tag === 'string') {
        meta.textContent = entry.tag;
      }
      if (title && typeof entry.title === 'string') {
        title.textContent = entry.title;
      }
      if (text && typeof entry.text === 'string') {
        text.textContent = entry.text;
      }
    });
  };

  const setProjectTech = (cards, techLists) => {
    cards.forEach((card, index) => {
      const techItems = Array.from(card.querySelectorAll('.project-card__tech li'));
      const techValues = techLists[index];
      if (!techValues) return;
      setTextList(techItems, techValues);
    });
  };

  const setSkillGroupTitles = (titles) => {
    const groupTitles = Array.from(document.querySelectorAll('.skills .skill-group__title'));
    setTextList(groupTitles, titles);
  };

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  const setActiveNavLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const applyLanguage = (language) => {
    const copy = translations[language] ?? translations.es;
    const currentYear = new Date().getFullYear().toString();

    document.documentElement.lang = language;

    if (titleNode) {
      titleNode.textContent = copy.meta.title;
    }
    if (metaDescriptionNode) {
      metaDescriptionNode.setAttribute('content', copy.meta.description);
    }
    if (skipLink) {
      skipLink.textContent = copy.a11y.skipLink;
    }
    if (siteLogo) {
      siteLogo.setAttribute('aria-label', copy.a11y.siteLogo);
    }
    if (siteNav) {
      siteNav.setAttribute('aria-label', copy.a11y.siteNav);
    }
    if (languageSwitcher) {
      languageSwitcher.setAttribute('aria-label', copy.a11y.languageSwitcher);
    }
    if (heroPanel) {
      heroPanel.setAttribute('aria-label', copy.a11y.heroPanel);
    }

    navLinks.forEach((link, index) => {
      if (copy.nav[index]) {
        link.textContent = copy.nav[index];
      }
    });

    setText('.hero__eyebrow', copy.hero.eyebrow);
    setText('.hero__title', copy.hero.title);
    setText('.hero__lead', copy.hero.lead);
    setText('.hero__actions .button--primary', copy.hero.ctaPrimary);
    setText('.hero__actions .button--secondary', copy.hero.ctaSecondary);
    setTextList(Array.from(document.querySelectorAll('.hero__highlights .hero__highlight')), copy.hero.points);
    setText('.profile-card__label', copy.hero.profileLabel);
    setText('.profile-card__title', copy.hero.profileTitle);
    setText('.profile-card__text', copy.hero.profileText);
    setTextList(Array.from(document.querySelectorAll('.profile-stats__term')), copy.hero.stats.map((item) => item[0]));
    setTextList(Array.from(document.querySelectorAll('.profile-stats__value')), copy.hero.stats.map((item) => item[1]));

    setText('.about .section__eyebrow', copy.about.eyebrow);
    setText('.about .section__title', copy.about.title);
    setText('.about .section__description', copy.about.description);
    setCardContent(Array.from(document.querySelectorAll('.about .info-card')), copy.about.cards);

    setText('.experience .section__eyebrow', copy.experience.eyebrow);
    setText('.experience .section__title', copy.experience.title);
    setCardContent(Array.from(document.querySelectorAll('.experience .timeline-card')), copy.experience.cards);

    setText('.skills .section__eyebrow', copy.skills.eyebrow);
    setText('.skills .section__title', copy.skills.title);
    setSkillGroupTitles(copy.skills.groups);

    setText('.projects .section__eyebrow', copy.projects.eyebrow);
    setText('.projects .section__title', copy.projects.title);
    setText('.projects .section__description', copy.projects.description);
    const projectCards = Array.from(document.querySelectorAll('.projects .project-card'));
    setCardContent(projectCards, copy.projects.cards);
    setProjectTech(projectCards, copy.projects.cards.map((card) => card.tech));

    setText('.languages .section__eyebrow', copy.languages.eyebrow);
    setText('.languages .section__title', copy.languages.title);
    setCardContent(Array.from(document.querySelectorAll('.languages .language-card')), copy.languages.cards);

    setText('.education .section__eyebrow', copy.education.eyebrow);
    setText('.education .section__title', copy.education.title);
    setCardContent(Array.from(document.querySelectorAll('.education .education-card')), copy.education.cards);

    setText('.contact .section__eyebrow', copy.contact.eyebrow);
    setText('.contact .section__title', copy.contact.title);
    setText('.contact .section__description', copy.contact.description);

    const emailButton = document.querySelector('.contact__actions .button--primary');
    const linkedinButton = document.querySelector('.contact__actions .button--secondary');
    if (emailButton) {
      emailButton.textContent = copy.contact.emailButton;
      emailButton.setAttribute('aria-label', copy.a11y.emailLabel);
    }
    if (linkedinButton) {
      linkedinButton.textContent = copy.contact.linkedinButton;
      linkedinButton.setAttribute('aria-label', copy.a11y.linkedinLabel);
    }

    const contactCards = Array.from(document.querySelectorAll('.contact .contact-card'));
    if (contactCards[0]) {
      setText('.contact-card--address .contact-card__title', copy.contact.addressTitle);
    }
    if (contactCards[1]) {
      setTextList(Array.from(contactCards[1].querySelectorAll('.contact-card__title, .contact-card__text')), [copy.contact.availabilityTitle, copy.contact.availabilityText]);
    }
    if (contactCards[2]) {
      setTextList(Array.from(contactCards[2].querySelectorAll('.contact-card__title, .contact-card__text')), [copy.contact.locationTitle, copy.contact.locationText]);
    }
    if (contactCards[3]) {
      setTextList(Array.from(contactCards[3].querySelectorAll('.contact-card__title, .contact-card__text')), [copy.contact.transportTitle, copy.contact.transportText]);
    }

    if (footerTextNode) {
      footerTextNode.innerHTML = copy.footer.replace('{year}', `<span data-current-year>${currentYear}</span>`);
    }
    if (footerLinkNode) {
      footerLinkNode.textContent = copy.footerLink;
    }

    languageButtons.forEach((button) => {
      const buttonLanguage = button.dataset.lang;
      const isActive = buttonLanguage === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
      if (copy.a11y.languageButtons[buttonLanguage]) {
        button.setAttribute('aria-label', copy.a11y.languageButtons[buttonLanguage]);
      }
    });

    try {
      window.localStorage.setItem('portfolio-language', language);
    } catch {
      // Ignore storage failures and keep the switcher functional.
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.lang;
      if (supportedLanguages.includes(selectedLanguage)) {
        applyLanguage(selectedLanguage);
      }
    });
  });

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target?.id) {
          setActiveNavLink(activeEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-15% 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (targetId) {
        setActiveNavLink(targetId);
      }
    });
  });

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  const initialLanguage = getInitialLanguage();
  applyLanguage(initialLanguage);

  if (window.location.hash) {
    setActiveNavLink(window.location.hash.slice(1));
  } else if (sections[0]?.id) {
    setActiveNavLink(sections[0].id);
  }
});
