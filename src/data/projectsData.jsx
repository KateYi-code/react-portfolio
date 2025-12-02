import CMSImg from '../images/CMSImg.jpg'; 
import planetImg from '../images/planet.gif';
import peggaImg from '../images/pegga.gif';

export const projectsData = [
  {
    title: "3D Gamified Task Manager",
    date: "09/2024",
    githubUrl: "https://github.com/KateYi-code/3D-Gamified-Task-Manager", 
    image: planetImg,
    tech: ["Next.js", "Three.js", "MongoDB", "Prisma", "Tailwind CSS", "PWA"],
    description: "An innovative personal productivity application that gamifies task management through an immersive 3D virtual planet. Users build and customize their own universe by completing Pomodoro-style focus sessions, merging habit formation with interactive WebGL visuals.",
    points: [
      "Developed a high-performance 3D environment using Three.js, enabling users to interactively rotate, zoom, and decorate their personal planet with assets earned from task completion.",
      "Architected a scalable full-stack solution using Next.js and MongoDB (via Prisma ORM), handling complex schemas for user achievements, inventory systems, and social interactions.",
      "Engineered a Progressive Web App (PWA) experience with offline functionality and push notifications, ensuring a native app-like experience across devices.",
      "Implemented a Pomodoro-style focus timer with real-time state management to track productivity metrics and trigger gamified reward logic."
    ]
  },

  {
    title: "Fullstack CMS Platform", 
    date: "10/2024 - 11/2024",
    githubUrl: "https://github.com/KateYi-code/Fullstack-CMS-Platform", 
    image: peggaImg, 
    tech: ["Svelte", "Node.js", "MySQL", "Java Swing", "REST API"],
    description: "Architected a scalable content management ecosystem bridging a modern web frontend with a dual-interface backend. Designed to handle complex user interactions and content versioning with enterprise-grade logic.",
    points: [
      "Engineered a secure RESTful API using Node.js/Express with JWT authentication and Role-Based Access Control (RBAC).",
      "Designed an optimized MySQL schema to support infinite-depth nested comments using recursive logic.",
      "Developed a 'Time Machine' feature for content version control, integrated with TinyMCE for rich-text editing.",
      "Built a unique hybrid architecture: a web-based client (Svelte) coupled with a desktop admin panel (Java Swing)."
    ]
  },

  // {
  //   title: "A Pokémon Battle Simulator",
  //   date: "09/2024",
  //   githubUrl: null, 
  //   image: null,
  //   tech: ["JavaScript", "Svelte", "CSS3", "State Management"],
  //   description: "An interactive turn-based combat game focusing on complex state management and fluid UI animations. Demonstrates strong command of modern frontend frameworks and game logic implementation.",
  //   points: [
  //     "Implemented complex turn-based game logic and damage calculation algorithms using Svelte Stores.",
  //     "Created fluid, high-performance battle animations using pure CSS3 and keyframes.",
  //     "Designed a responsive UI with dynamic health bar transitions and real-time combat logs."
  //   ]
  // }

];
