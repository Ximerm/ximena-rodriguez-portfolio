import ecoBuildLabImage from "../assets/images/Projects/ecobuildlab.png";
import aroundImage from "../assets/images/Projects/around.png";

import project01Before from "../assets/images/Projects/proyecto01_antes.png";
import project01After from "../assets/images/Projects/proyecto01_despues.png";

import project02Before from "../assets/images/Projects/proyecto02_antes.png";
import project02After from "../assets/images/Projects/proyecto02_despues.png";

import libraryImage from "../assets/images/Projects/library.png";
import coffeeShopImage from "../assets/images/Projects/coffee-shop.png";
import patriaImage from "../assets/images/Projects/patria.png";

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

    projectUrl: "AQUI-VA-EL-LINK-DE-AROUND",

    githubUrl: "AQUI-VA-EL-GITHUB-DE-AROUND",

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
    id: "estilizacion-interfaces",
    title: "Estilización de interfaces corporativas",
    category: "FRONT-END · PROYECTO PROFESIONAL",
    featured: false,

    description:
      "Modernización de documentos corporativos mediante plantillas HTML y CSS. Implementación de una estructura semántica y estilos orientados a impresión para mejorar la consistencia visual, legibilidad y presentación de información operativa.",

    technologies: ["HTML", "CSS", "Print CSS"],

    image: null,

    type: "before-after",

    beforeImage: project01Before,
    afterImage: project01After,
  },

  {
    id: "reportes-tecnicos",
    title: "Rediseño y maquetación de reportes técnicos",
    category: "FRONT-END · PROYECTO PROFESIONAL",
    featured: false,

    description:
      "Refactorización de una interfaz de reportes industriales mediante HTML y CSS. Implementación de una nueva jerarquía visual e identidad de marca para mejorar la legibilidad de tablas y datos técnicos.",

    technologies: ["HTML", "CSS", "Print CSS"],

    image: null,

    type: "before-after",

    beforeImage: project02Before,
    afterImage: project02After,
  },

  {
    id: "de-patria-a-patria",
    title: "De Patria a Patria",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Desarrollo de una interfaz web responsive a partir de un diseño de alta fidelidad en Figma. Implementación de layouts adaptativos con Flexbox y CSS Grid bajo la metodología BEM, integrando media queries y estados interactivos para garantizar una experiencia consistente en diferentes dispositivos.",

    technologies: ["HTML5", "CSS3", "BEM", "CSS Grid", "Responsive Design"],

    image: patriaImage,

    projectUrl: "AQUI-VA-EL-LINK",
    githubUrl: "AQUI-VA-EL-GITHUB",
  },

  {
    id: "triple-expresso",
    title: "Triple Expresso",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Desarrollo de una interfaz web adaptativa a partir de especificaciones técnicas de diseño. Implementación de HTML semántico, CSS y metodología BEM para estructurar una interfaz modular, escalable y mantenible.",

    technologies: ["HTML5", "CSS3", "BEM", "Responsive Design"],

    image: coffeeShopImage,

    projectUrl: "AQUI-VA-EL-LINK",
    githubUrl: "AQUI-VA-EL-GITHUB",
  },

  {
    id: "biblioteca-triple-peaks",
    title: "Biblioteca Triple Peaks",
    category: "FRONT-END · PROYECTO ACADÉMICO",
    featured: false,

    description:
      "Evolución y maquetación adaptativa de una plataforma web basada en un brief técnico. Implementación de HTML5 semántico y metodología BEM para estructurar una interfaz modular y mantenible, desarrollando desde cero nuevas secciones de contenido, navegación y el footer.",

    technologies: ["HTML5", "CSS3", "BEM", "Responsive Design"],

    image: libraryImage,

    projectUrl: "AQUI-VA-EL-LINK",
    githubUrl: "AQUI-VA-EL-GITHUB",
  },
];

export default projects;
