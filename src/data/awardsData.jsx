import { 
  Terminal, Layout, Code2, Database, 
  MapPin, Calendar, GraduationCap, Briefcase 
} from 'lucide-react';

import APMCM from '../images/APMCM.JPG';
import CUMCM from '../images/CUMCM.JPG';
import CUMCM_1 from '../images/CUMCM_1.JPG';
import CUSMC from '../images/CUSMC.JPG';
import CUSMC_1 from '../images/CUSMC_1.JPG';
import GBA from '../images/GBA.JPG';
import GBA_1 from '../images/GBA_1.JPG';
import MCM from '../images/MCM.JPG';
import TeddyCup from '../images/TeddyCup.JPG';
import TeddyCup_1 from '../images/TeddyCup_1.JPG';

export const awardsData = [
  {
    title: "China Undergraduate Mathematical Contest in Modeling (CUMCM)",
    award: "National First Prize",
    ranking: "Top 0.65%",
    date: "11/2020",
    description: "Led a 3-person team to solve an industrial optimization problem under strict 72-hour limits. Used MATLAB to implement heuristic algorithms.",
    tags: ["Optimization", "MATLAB", "Team Leadership"],
    image: CUMCM,
    translation: CUMCM_1
  },
  {
    title: "\"Teddy Cup\" National Data Mining Challenge",
    award: "National First Prize",
    ranking: "Top 1.4%",
    date: "06/2021",
    description: "Built a recommendation system for a massive dataset. Performed data cleaning, feature engineering, and sentiment analysis using Python.",
    tags: ["Data Mining", "Python", "NLP"],
    image: TeddyCup,
    translation: TeddyCup_1
  },
  {
    title: "Asia-Pacific Student Mathematical Modeling Competition (APMCM)",
    award: "Second Prize",
    ranking: "Top 15%", 
    date: "12/2020",
    description: "An international contest conducted entirely in English. Solved complex interdisciplinary problems using mathematical modeling and programmed solutions.",
    tags: ["International", "English", "Modeling"],
    image: APMCM 
  },
  {
    title: "National Undergraduate Statistical Modeling Competition",
    award: "National Third Prize",
    ranking: "National Level", // 经过校赛、省赛选拔进入国赛
    date: "11/2021",
    description: "Organized by the Statistical Education Society of China. Conducted in-depth statistical analysis and modeling on large-scale datasets.",
    tags: ["Statistics", "Data Analysis", "National"],
    image: CUSMC,
    translation: CUSMC_1
  },
  {
    title: "Mathematical Contest In Modeling (MCM/ICM)",
    award: "Meritorious Winner",
    ranking: "Top 7%",
    date: "04/2021",
    description: "Developed an environmental evaluation model using Analytic Hierarchy Process (AHP) and simulated pollutant diffusion.",
    tags: ["Global Contest", "Modeling", "English"],
    image: MCM
  },
  {
    title: "GBA Financial Mathematical Modelling Competition",
    award: "Innovation Bronze Award",
    ranking: "Top 0.3%",
    date: "12/2020",
    description: "Applied stochastic differential equations to model financial risk and predict stock market trends.",
    tags: ["Financial Math", "Stochastic", "Risk"],
    image: GBA,
    translation: GBA_1
  }
];