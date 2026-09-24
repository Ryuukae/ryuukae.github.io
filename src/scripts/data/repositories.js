export const repositories = [
  {
    id: 'interactive-web-quiz',
    title: 'Interactive-Web-Quiz',
    description:
      'A flexible evaluation platform built for deploying customized assessments in any environment.',
    liveUrl: 'https://pages.ryuukae.io/interactive-web-quiz/src/',
    githubUrl: 'https://github.com/Ryuukae/interactive-web-quiz',
    image: '/resources/interactive-web-quiz/main-window.png',
    imageAlt: 'Screenshot of the Interactive-Web-Quiz site.',
    modalContent: {
      featuresText:
        'This evaluation platform provides a visual card-based builder interface for generating quizzes. It supports dual QAD and JSON data ingestion pipelines and utilizes auto-expanding textareas that adjust dynamically based on user input lengths.',
      cicdText:
        'Built with Vanilla JavaScript and orchestrated by Vite for bundling. The codebase enforces strict ESLint rules and utilizes GitHub Actions for continuous integration. Automated end-to-end testing is handled by Playwright, with Vitest covering unit testing.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      architectures: ['MVC Architecture', 'State Management'],
      libs: [
        'Vitest',
        'Playwright',
        'Vite',
        'ESLint',
        'Cspell',
        'Husky',
        'Commitlint',
        'Semantic-Release',
        'Lint-Staged',
        'GitHub Actions',
      ],
      images: [
        '/resources/interactive-web-quiz/main-window.png',
        '/resources/interactive-web-quiz/create-quiz-modal.png',
        '/resources/interactive-web-quiz/gui-builder-window.png',
        '/resources/interactive-web-quiz/text-editor-window.png',
        '/resources/interactive-web-quiz/question-details-modal.png',
      ],
    },
  },
  {
    id: 'multi-step-registration-form',
    title: 'Multi-step.Registration.Form',
    description:
      'A sleek, mobile-friendly multi-step registration form designed with accessibility and user experience in mind.',
    liveUrl: 'https://pages.ryuukae.io/Multi-step.Registration.Form/src/',
    githubUrl: 'https://github.com/Ryuukae/Multi-step.Registration.Form',
    image: '/resources/multi-step-registration-form/multi-step-registration-form-screenshot.jpg',
    imageAlt:
      'A visual showcase of the Multi-step Registration Form interface, highlighting the progress indicator, modular input steps, and dynamic error notification system.',
    modalContent: {
      featuresText:
        'A multi-step registration interface that breaks down user input into three sequential screens. Features include an interactive progress indicator, categorized color pills for user selections, and a detailed error communication system that highlights specific missing fields before allowing users to proceed. Built with a modular JavaScript structure, it separates concerns into dedicated files for data management, validation, and event handling. Form state is preserved locally to maintain data as users navigate backward and forward between the different steps.',
      cicdText:
        'This repository does not currently utilize automated CI/CD pipelines or testing frameworks. It is deployed as a static site via GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      architectures: ['State Management', 'Modular Architecture', 'Separation of Concerns'],
      libs: [],
      images: [
        '/resources/multi-step-registration-form/multi-step-registration-form-screenshot.jpg',
      ],
    },
  },
  {
    id: 'advanced-faq-page',
    title: 'Advanced-FAQ-Page',
    description:
      'A responsive FAQ component designed to showcase clean and minimalist aesthetics, adaptability across various screen sizes, smooth animations for an enhanced user experience, and accessibility features.',
    liveUrl: 'https://pages.ryuukae.io/advanced-faq-page/src/index.html',
    githubUrl: 'https://www.github.com/ryuukae/advanced-faq-page',
    image: '/resources/advanced-faq-page/advanced-faq-page-screenshot.jpg',
    imageAlt:
      'A desktop and mobile preview of the Advanced FAQ Page demonstrating interactive accordion menus, a clean minimalist aesthetic, and custom CSS color palettes.',
    modalContent: {
      featuresText:
        'A responsive accordion-style FAQ component featuring CSS-driven open and close animations, dynamic state toggling via JavaScript, and custom color palettes mapped via CSS variables for theme adjustments.',
      cicdText:
        'This project does not implement automated testing or continuous integration workflows. It is deployed directly as static assets via GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      architectures: ['Modular CSS', 'Event-Driven Architecture'],
      libs: [],
      images: ['/resources/advanced-faq-page/advanced-faq-page-screenshot.jpg'],
    },
  },
  {
    id: 'simple-faq-page',
    title: 'Simple-FAQ-Page',
    description:
      'A foundational building block for User Interface development demonstrating the elegance of minimalist design and semantic web practices.',
    liveUrl: 'https://pages.ryuukae.io/simple-faq-page/src',
    githubUrl: 'https://www.github.com/ryuukae/simple-faq-page',
    image: '/resources/simple-faq-page/simple-faq-page-screenshot.png',
    imageAlt:
      'A screenshot of the Simple FAQ Page displaying a streamlined, purely CSS-driven accordion interface focusing on typography and whitespace.',
    modalContent: {
      featuresText:
        'A purely CSS-driven accordion interface that requires zero client-side scripting. The design relies on semantic HTML structural tags and focuses heavily on typography and whitespace to create a minimalist layout.',
      cicdText:
        'This foundational project operates without an automated CI/CD pipeline or testing infrastructure and is deployed statically via GitHub Pages.',
      technologies: ['HTML5', 'CSS3'],
      architectures: ['Semantic Web', 'Static Architecture'],
      libs: [],
      images: ['/resources/simple-faq-page/simple-faq-page-screenshot.png'],
    },
  },
  {
    id: 'to-do-list',
    title: 'To-Do.List',
    description:
      'A simple to-do list application, this project demonstrates basic task management functionality with robust state persistence.',
    liveUrl: 'https://pages.ryuukae.io/To-Do.List',
    githubUrl: 'https://github.com/ryuukae/To-Do.List',
    image: '/resources/to-do-list/to-do-list-screenshot.jpg',
    imageAlt:
      'A snapshot of the To-Do List application featuring custom cursive typography, task entry fields, and a persistent list of completed and pending items.',
    modalContent: {
      featuresText:
        'A straightforward task manager that allows users to add, complete, and delete daily items. The UI integrates custom cursive web fonts (Caveat and Tangerine) for a personalized, handwritten aesthetic across the input fields and task lists.',
      cicdText:
        'This application does not feature automated testing or CI/CD pipelines. It is deployed manually as a static site via GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Fonts'],
      architectures: ['State Management', 'Local Persistence'],
      libs: [],
      images: ['/resources/to-do-list/to-do-list-screenshot.jpg'],
    },
  },
];
