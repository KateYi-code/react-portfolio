import { 
  Terminal, Layout, Code2, Database, 
  MapPin, Calendar, GraduationCap, Briefcase 
} from 'lucide-react';

export const personalInfo = {
  name: "Kate Yi",
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