import ecoBuildLabImage from "../assets/images/Projects/ecobuildlab.png";
import aroundImage from "../assets/images/Projects/around.png";

import libraryImage from "../assets/images/Projects/library.png";
import coffeeShopImage from "../assets/images/Projects/coffee-shop.png";
import patriaImage from "../assets/images/Projects/patria.png";
import estilizacionImage from "../assets/images/Projects/estilizacion.png";

const projects = [
  {
    id: "ecobuildlab",
    title: "EcoBuildLab",
    category: "FULL-STACK · PROYECTO FINAL",
    featured: true,

    description:
      "Plataforma Full-Stack que consume y procesa datos climáticos en tiempo real para transformarlos en indicadores y estrategias bioclimáticas. Diseñé y desarrollé la aplicación para convertir datos meteorológicos en información útil para la toma de decisiones de diseño sostenible.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Open-Meteo API",
      "Context API",
      "JWT",
      "Deployment & DDNS",
    ],

    image: ecoBuildLabImage,

    projectUrl: "https://ecobuildlab.duckdns.org/",

    githubFrontend: "https://github.com/Ximerm/ecobuildlab-frontend",

    githubBackend: "https://github.com/Ximerm/ecobuildlab-backend",

    caseStudy: {
      challenge:
        "Procesar y estructurar datos climáticos provenientes de APIs externas y transformarlos en información visual e indicadores útiles para apoyar decisiones de diseño.",

      solution:
        "Desarrollé una SPA Full-Stack que integra consumo de APIs, clasificación climática Caldas-Lang y generación de estrategias bioclimáticas. Implementé autenticación mediante JWT y persistencia de análisis e información histórica en MongoDB.",

      learning:
        "Consolidación de experiencia en el ciclo completo de desarrollo de software (End-to-End), incluyendo modelado de bases de datos NoSQL, arquitectura backend con Express, manejo de operaciones asíncronas y gestión de estado en el Front-End.",
    },
  },

  {
    id: "around-the-us",
    title: "Around The U.S.",
    category: "FULL-STACK · PROYECTO ACADÉMICO",
    featured: true,

    description:
      "Aplicación web Full-Stack desarrollada a lo largo de múltiples sprints técnicos. Integra una interfaz dinámica en React con una API REST propia para gestionar usuarios, perfiles, autorización de accesos y persistencia de contenido mediante MongoDB.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    image: aroundImage,

    projectUrl: "https://aroundxr.duckdns.org/",

    githubUrl: "https://github.com/Ximerm/web_project_api_full",

    caseStudy: {
      challenge:
        "Desarrollar una aplicación social interactiva bajo una metodología ágil (Sprints), enfocada en la gestión segura de sesiones de usuario, el control de acceso a recursos protegidos y el diseño responsive.",

      solution:
        "Creación de una SPA conectada a una API REST propia basada en Node.js y Express. Implementación de autenticación mediante JSON Web Tokens (JWT), protección de rutas y persistencia de datos en MongoDB.",

      learning:
        "Consolidación de conocimientos sobre el ciclo de vida de peticiones HTTP, manejo de middlewares de seguridad para rutas protegidas, gestión del almacenamiento de tokens y control de errores asíncronos.",
    },
  },

  {
    id: "rediseño-formularios",
    title: "Rediseño de formularios corporativos",
    category: "FRONT-END · PROYECTO PROFESIONAL",
    featured: false,

    description:
      "Modernización, reestructuración y estandarización visual de una suite de documentos institucionales. Implementación de una arquitectura semántica y estilos orientados a impresión para garantizar la consistencia gráfica y legibilidad en formularios operativos y reportes técnicos dinámicos.",

    technologies: ["HTML", "CSS", "Print CSS"],

    image: estilizacionImage,
    projectUrl: "https://rediseno-formularios.vercel.app/",

    githubUrl: "https://github.com/Ximerm/rediseno-formularios",
  },

  {
    id: "de-patria-a-patria",
    title: "De Patria a Patria",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Desarrollo de una interfaz web responsive a partir de un diseño de alta fidelidad en Figma. Implementación de layouts adaptativos con Flexbox y CSS Grid bajo la metodología BEM, utilizando media queries y estados interactivos para mantener una experiencia consistente en diferentes dispositivos.",

    technologies: ["HTML5", "CSS3", "BEM", "CSS Grid", "Responsive Design"],

    image: patriaImage,

    projectUrl: "https://ximerm.github.io/web_project_homeland/",
    githubUrl: "https://github.com/Ximerm/web_project_homeland",
  },

  {
    id: "triple-espresso",
    title: "Triple Espresso",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Desarrollo de una landing page para una cafetería y zona de estudio, a partir de un brief de diseño. Implementación de HTML semántico, CSS, Flexbox y metodología BEM, con ajustes posteriores para mejorar la adaptación del layout a diferentes anchos de pantalla.",

    technologies: ["HTML5", "CSS3", "BEM", "CSS Positioning"],

    image: coffeeShopImage,

    projectUrl: "https://web-project-coffeeshop-sigma.vercel.app/",
    githubUrl: "https://github.com/Ximerm/web_project_coffeeshop",
  },

  {
    id: "biblioteca-triple-peaks",
    title: "Biblioteca Triple Peaks",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Evolución y maquetación adaptativa de una plataforma web basada en un brief técnico. Implementación de HTML5 semántico y metodología BEM para estructurar una interfaz modular y mantenible.",

    technologies: ["HTML5", "CSS3", "BEM", "CSS Positioning"],

    image: libraryImage,

    projectUrl: "https://web-project-library-sigma.vercel.app/",
    githubUrl: "https://github.com/Ximerm/web_project_library",
  },
];

export default projects;
