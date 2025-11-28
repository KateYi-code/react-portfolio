import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  ExternalLink, 
  ChevronDown, 
  Moon, 
  Sun,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Scroll Spy for Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data extracted from Resume
  const personalInfo = {
    name: "Yingrao Yi",
    role: "Full Stack Developer & Data Analyst",
    location: "Auckland, New Zealand",
    email: "Myingraoyi@gmail.com",
    github: "https://github.com/KateYi-code",
    linkedin: "#", 
    bio: "Masters student in Information Technology at the University of Auckland with a strong background in Mathematics. Experienced in full-stack development (Svelte, React, Node.js) and data analysis. Passionate about building interactive web applications and solving complex problems with numerical algorithms."
  };

  const skills = [
    { category: "Languages", icon: <Terminal size={20} />, items: ["Python", "Java", "JavaScript", "C++", "R", "Matlab"] },
    { category: "Frontend", icon: <Layout size={20} />, items: ["React", "Svelte", "HTML/CSS", "Figma", "Tailwind"] },
    { category: "Backend", icon: <Code2 size={20} />, items: ["Node.js", "Express", "Java Swing", "REST APIs"] },
    { category: "Data & Tools", icon: <Database size={20} />, items: ["SQL", "SPSS", "Git", "DbVisualizer", "Power BI"] }
  ];

  const projects = [
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

  const experience = [
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

  const education = [
    {
      degree: "Master of Science in Information Technology",
      school: "University of Auckland",
      date: "07/2024 - Ongoing",
      location: "Auckland, New Zealand"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      school: "University of Guangdong Technology",
      date: "09/2010 - 06/2023",
      location: "Guangzhou, China"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 shadow-sm transition-colors duration-300 ${darkMode ? 'bg-slate-900/90 backdrop-blur' : 'bg-white/90 backdrop-blur'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              YY
            </span>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-500'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Hi, I'm <br/>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg">
              {personalInfo.role} based in {personalInfo.location}. 
              Turning complex data into actionable insights and building interactive web experiences.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition dark:border-slate-700 dark:hover:bg-slate-800">
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-teal-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className={`relative p-8 rounded-2xl border shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
               <pre className="text-sm font-mono overflow-hidden">
                <code className="language-javascript text-blue-600 dark:text-blue-400">
{`const developer = {
  name: "Yingrao Yi",
  skills: [
    "React", 
    "Svelte", 
    "Python", 
    "Data Analysis"
  ],
  passion: "Problem Solving"
};

developer.build("Future");`}
                </code>
               </pre>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-slate-500">Building responsive, dynamic applications with React & Svelte.</p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="font-semibold mb-2">Data Analysis</h3>
              <p className="text-sm text-slate-500">Extracting insights using SQL, Python, and BI tools.</p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="font-semibold mb-2">Algorithms</h3>
              <p className="text-sm text-slate-500">Implementing numerical methods for complex modeling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm hover:shadow-md transition`}>
              <div className="flex items-center space-x-3 mb-4 text-blue-600">
                {skillGroup.icon}
                <h3 className="font-bold text-lg">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group rounded-2xl overflow-hidden border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                       <h3 className="text-2xl font-bold group-hover:text-blue-600 transition">{project.title}</h3>
                       <p className="text-sm text-slate-500 mt-1">{project.date}</p>
                    </div>
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                       <Layout size={20} />
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {project.points.map((point, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                        <span className="mr-2 text-blue-500">•</span>
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium border border-blue-200 text-blue-600 rounded bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center mt-1 sm:mt-0">
                  <Calendar size={14} className="mr-1" /> {exp.date}
                </span>
              </div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                <Briefcase size={16} className="mr-2 opacity-75" />
                {exp.company}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                 {exp.tags.map(tag => (
                   <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">
                     #{tag}
                   </span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className={`flex items-start p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'} shadow-sm`}>
                <div className="mr-4 p-3 bg-teal-100 text-teal-600 rounded-lg dark:bg-teal-900/30">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
                  <div className="flex items-center mt-2 text-sm text-slate-500">
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
                  </div>
                  <div className="flex items-center mt-1 text-sm text-slate-500">
                    <Calendar size={14} className="mr-1" />
                    {edu.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        <p className="text-slate-500 mb-4">
          Built with React, Tailwind CSS & Lucide Icons.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={personalInfo.github} className="text-slate-400 hover:text-blue-500 transition">
            <Github size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-blue-500 transition">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-xs text-slate-400 mt-8">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}