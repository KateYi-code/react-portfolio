
import CIS2021 from '../images/CIS2021.jpg'; 
import IVCNZ2025 from '../images/IVCNZ2025.jpg'; 

export const researchData = [
  {
    id: 1,
    type: "optimization",
    title: "Optimizing Uncertain Express Delivery Path Planning Problems with Time Window by Ant Colony Optimization",
    conference: "2021 17th International Conference on Computational Intelligence and Security (CIS)",
    role: "First Author / Algorithm Researcher",
    date: "2021",
    location: "International Conference",
    image: CIS2021,
    summary: "Addressed the complexity of real-world logistics where delivery times are uncertain. Developed a robust mathematical model using Ant Colony Optimization (ACO) to find optimal delivery routes within strict time windows.",
    skills: ["Python", "Ant Colony Optimization", "Mathematical Modeling", "Operations Research", "Matlab/C++"],
    hrTakeaway: "Demonstrates strong ability in mathematical modeling and solving NP-hard optimization problems. Proves capability to handle uncertainty in business logic and improve operational efficiency."
  },
  {
    id: 2,
    type: "vision",
    title: "Nissl-stained Histological Slice Image Completion Based on Cortical Masks",
    conference: "Image and Vision Computing New Zealand (IVCNZ) 2025",
    role: "First Author / Computer Vision Engineer",
    date: "Dec 2025",
    location: "New Zealand",
    image: IVCNZ2025,
    summary: "Proposed a novel image inpainting approach for completing missing regions in biological tissue slides (Nissl-stained). Utilized cortical masks to guide the generation process, significantly improving the structural consistency of medical data for downstream analysis.",
    skills: ["PyTorch/TensorFlow", "Computer Vision", "Image Inpainting", "Medical Image Analysis", "Deep Learning"],
    hrTakeaway: "Highlights expertise in Generative AI and Computer Vision. Shows experience dealing with noisy, unstructured real-world medical data and attention to detail in high-stakes environments."
  }
];