import { 
  Terminal, Layout, Code2, Database, 
  MapPin, Calendar, GraduationCap, Briefcase 
} from 'lucide-react';

export const personalInfo = {
  name: "Yingrao Yi",
  role: "Full Stack Developer & Data Analyst",
  location: "Auckland, New Zealand",
  email: "yingraoyi@gmail.com",
  phone: "+64 2885253677",
  github: "https://github.com/KateYi-code",
  linkedin: "https://www.linkedin.com/in/yingrao-yi/", 
  bio: "Masters student in Information Technology at the University of Auckland with a strong background in Mathematics. Experienced in full-stack development (Svelte, React, Node.js) and data analysis. Passionate about building interactive web applications and solving complex problems with numerical algorithms."
};

export const skillsData = [
  { category: "Languages", icon: <Terminal size={20} />, items: ["Python", "Java", "JavaScript", "C++", "R", "Matlab"] },
  { category: "Frontend", icon: <Layout size={20} />, items: ["React", "Svelte", "HTML/CSS", "Figma", "Tailwind"] },
  { category: "Backend", icon: <Code2 size={20} />, items: ["Node.js", "Express", "Java Swing", "REST APIs"] },
  { category: "Data & Tools", icon: <Database size={20} />, items: ["SQL", "SPSS", "Git", "DbVisualizer", "Power BI"] }
];

export const projectsData = [
  {
    title: "A Pokémon Battle Simulator",
    date: "09/2024",
    tech: ["HTML/CSS", "JavaScript", "Node.js", "Svelte", "CSS Animations"],
    description: "A web-based combat game simulating battles between random Pokémon. Implemented dynamic animations, smooth HP bar transitions, and complex game logic using Svelte stores.",
    points: [
      "Dynamic battle animations and visual effects using CSS @keyframes.",
      "Smooth HP bar transitions and damage display.",
      "State management using Svelte stores for seamless game logic."
    ]
  },
  {
    title: "Peppa Pig+: A Blogging Website",
    date: "10/2024 - 11/2024",
    tech: ["Svelte", "Node.js", "Express", "Java Swing", "MySQL"],
    description: "A dynamic blogging platform with user registration, article management, and a 3-level nested commenting system.",
    points: [
      "Implemented RESTful backend API with JWT authentication.",
      "Integrated TinyMCE for rich text editing and an 'article time machine' for history.",
      "Built a 3-level nested commenting system (recursion).",
      "Admin panel built with Java Swing."
    ]
  }
];

export const experienceData = [
  {
    role: "Research Assistant",
    company: "Guangdong University of Technology",
    location: "Guangzhou, China",
    date: "06/2023 - 06/2024",
    description: "Conducted research on efficient numerical methods for solving fractional-order partial differential equations.",
    tags: ["Research", "Algorithms", "Mathematics"]
  },
  {
    role: "Business Analyst Intern",
    company: "Canton Fair",
    location: "Guangzhou, China",
    date: "02/2023 - 05/2023",
    description: "Optimized exhibition processes and analyzed product data using SQL and Power BI to generate actionable business insights.",
    tags: ["Data Analysis", "SQL", "Process Optimization"]
  },
  {
    role: "Data Analyst Intern",
    company: "China Life (Overseas) Co. Ltd.",
    location: "Macao SAR",
    date: "08/2022",
    description: "Leveraged LLMs to analyze insurance contract data and evaluated seasonal risk indexes for business development.",
    tags: ["LLMs", "Risk Analysis", "Insurance"]
  }
];