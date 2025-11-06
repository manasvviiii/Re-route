
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export const navLinks = [
  { href: '/empowerment', label: 'Empowerment Hub' },
  { href: '/domains', label: 'Domains' },
  { href: '/resources', label: 'Resources' },
  { href: '/community', label: 'Community' },
];

export const empowermentArticles = [
  {
    title: 'From NEET Setback to Rolls-Royce: The Rithuparna KS Story',
    excerpt: 'After not cracking NEET, Rithuparna KS pursued a new path and landed a high-paying technical job at Rolls-Royce, showcasing the success possible in engineering.',
    author: 'Rithuparna KS',
    date: 'July 22, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-1'),
    category: 'Success Story',
  },
  {
    title: 'Three NEET Attempts to Data Science Triumph: Sanjay\'s Journey',
    excerpt: 'An alumnus of IIT Madras\'s BS in Data Science, Sanjay turned three NEET failures into a successful career as an Associate Data Scientist at Syngenta.',
    author: 'Sanjay',
    date: 'July 19, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-2'),
    category: 'Career Pivot',
  },
  {
    title: 'Beyond Medicine: Anshika Jais on Finding Her Corporate Calling',
    excerpt: 'After two NEET attempts, Anshika Jais completed a B.Sc. from Miranda House, secured a corporate job, and now inspires others with her journey.',
    author: 'Anshika Jais',
    date: 'July 17, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-3'),
    category: 'Inspiration',
  },
    {
    title: 'Kangana Ranaut: When a Failed Exam Opens the Door to Stardom',
    excerpt: 'A failure in her Class 12 Chemistry exam redirected Kangana Ranaut from a medical career to becoming one of Bollywood\'s leading actresses.',
    author: 'Entertainment Weekly',
    date: 'July 14, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-4'),
    category: 'Celebrity Story',
  },
    {
    title: 'Ayushmann Khurrana: From PMT Failure to National Award Winner',
    excerpt: 'The beloved actor once failed the Pre-Medical Test (PMT), the precursor to NEET, but went on to become a successful actor.',
    author: 'Bollywood Insider',
    date: 'July 11, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-5'),
    category: 'Celebrity Story',
  },
];


export const engineeringDomains = [
  {
    slug: 'data-science',
    name: 'Data Science & Analytics',
    icon: 'DataScience',
    description: 'Turn raw data into meaningful insights. Data scientists use their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets.',
    skills: ['Python/R', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
    programs: ['B.Tech in Data Science', 'B.Tech in CSE (AI & ML)', 'Online Certifications'],
    jobOutlook: {
      title: 'Extremely High Growth',
      details: 'Projected to grow 35% from 2022 to 2032, much faster than the average for all occupations.',
    },
    salary: '₹6 - 15 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
  {
    slug: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: 'AIML',
    description: 'Be at the forefront of innovation by building intelligent systems that can learn and make decisions. This field is revolutionizing every industry from healthcare to finance.',
    skills: ['Python', 'TensorFlow/PyTorch', 'Algorithms', 'Natural Language Processing', 'Computer Vision'],
    programs: ['B.Tech in AI & ML', 'B.Tech in CSE', 'Specialized Masters Programs'],
    jobOutlook: {
      title: 'Explosive Demand',
      details: 'The AI market is projected to reach $1.8 trillion by 2030. Skills in AI are among the most in-demand globally.',
    },
    salary: '₹8 - 20 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
    {
    slug: 'electrical-engineering',
    name: 'Electrical & Electronics',
    icon: 'Electrical',
    description: 'Design and develop new electrical systems, solve problems, and test equipment. This core branch is vital for power generation, communications, and consumer electronics.',
     skills: ['Circuit Design', 'Microcontrollers', 'Signal Processing', 'Control Systems', 'VHDL/Verilog'],
    programs: ['B.Tech in Electrical Engineering (EE)', 'B.Tech in ECE'],
    jobOutlook: {
      title: 'Stable & Core Industry',
      details: 'Consistent demand in public and private sectors, with new growth in EV, renewable energy, and IoT.',
    },
    salary: '₹4 - 10 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
    {
    slug: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    icon: 'Mechanical',
    description: 'The broadest engineering discipline, focusing on designing, manufacturing, and maintaining mechanical systems. From robotics to automobiles, their work is everywhere.',
    skills: ['CAD/CAM', 'Thermodynamics', 'Fluid Mechanics', 'Robotics', 'Manufacturing Processes'],
    programs: ['B.Tech in Mechanical Engineering'],
    jobOutlook: {
      title: 'Foundation of Industry',
      details: 'Essential in manufacturing, automotive, aerospace, and energy sectors. Growing opportunities in automation and 3D printing.',
    },
    salary: '₹4 - 9 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
    {
    slug: 'software-development',
    name: 'Software Development',
    icon: 'Software',
    description: 'The art and science of creating the applications and systems that run on computers and other devices. It\'s a vast field with endless opportunities for creativity and problem-solving.',
    skills: ['Java/C++/Python', 'Data Structures & Algorithms', 'Web Frameworks (React, Node.js)', 'Databases (SQL, NoSQL)', 'Cloud Computing (AWS, Azure)'],
    programs: ['B.Tech in Computer Science (CSE)', 'B.Tech in IT', 'Bootcamps'],
    jobOutlook: {
      title: 'Evergreen & Evolving',
      details: 'Software developer roles are projected to grow 25% over the next decade. Constant need for skilled developers across all industries.',
    },
    salary: '₹5 - 18 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
  {
    slug: 'biotechnology',
    name: 'Biotechnology Engineering',
    icon: 'Biotech',
    description: 'A perfect pivot for NEET aspirants, this field applies engineering principles to biological systems to create new products for healthcare, agriculture, and the environment.',
    skills: ['Genetics', 'Microbiology', 'Bioprocess Engineering', 'Bioinformatics', 'Python'],
    programs: ['B.Tech in Biotechnology', 'B.Tech in Biomedical Engineering'],
    jobOutlook: {
      title: 'Niche & High-Impact',
      details: 'Strong growth in pharmaceuticals, genetic engineering, and sustainable tech. Your biology background is a direct advantage.',
    },
    salary: '₹5 - 12 LPA (Fresher to Mid-level)',
    heroImage: PlaceHolderImages.find((img) => img.id === 'domain-detail-hero'),
  },
];


export const aptitudeQuestions = [
    // *Core Aptitudes & Logic*
    {"q": "When faced with a complex system, I instinctively look for the *logical flow of data*, control loops, or algorithm efficiency.", "type": "Logic/Abstract", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I am most interested in designing a system for maximum *power efficiency*, signal clarity, or minimizing electrical noise.", "type": "Electronics/Power", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "My primary focus in any design is *material properties*, stress/strain, thermal tolerance, and the physics of motion/forces.", "type": "Physics/Mechanics", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I am deeply fascinated by *chemical reactions*, molecular structure, industrial scaling of processes, and mass/energy balances.", "type": "Chemistry/Process", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I enjoy projects that require complex *mathematical modeling* and advanced statistical analysis to predict future outcomes (e.g., market trends, system failures).", "type": "Math/Data", "options": ["1", "2", "3", "4", "5", "6", "7"]},

    // *Scenario Preferences*
    {"q": "*Scenario:* A new vehicle prototype failed due to vibration. I would focus on redesigning the *chassis, mounting points, and structural dampening*.", "type": "Structural/Mechanical", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "*Scenario:* A large factory is wasting resources. I would analyze the *supply chain, inventory management, and worker workflows* to optimize throughput.", "type": "Optimization/Management", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "*Scenario:* A city needs a new public transport system. I would prioritize planning the *bridges, road durability, traffic models, and concrete mixes*.", "type": "Infrastructure/Civil", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "*Scenario:* I want to create a new prosthetic limb. My interest is in the *bio-interface, sensor integration, and electronic control signals* from the body.", "type": "Biomedical/Electronics", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "*Scenario:* I am developing a new generation of aircraft. My passion is calculating *lift, drag, propulsion efficiency, and supersonic dynamics*.", "type": "Aerospace/Fluid", "options": ["1", "2", "3", "4", "5", "6", "7"]},

    // *Work Focus & Environment*
    {"q": "I prefer working with *code, digital hardware schematics, and simulation tools* rather than heavy physical machinery.", "type": "Digital Focus", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I am comfortable managing projects on a *construction site, in a manufacturing plant, or in resource extraction* (Fieldwork/HSE).", "type": "Fieldwork/Process", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I am drawn to solving problems related to *environmental sustainability, water treatment, or waste recycling*.", "type": "Environmental/Social", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I find more satisfaction in *improving existing systems* (efficiency, speed, cost) than in creating entirely new products.", "type": "Continuous Improvement", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I value working on small, *highly complex, custom electromechanical devices* with tight tolerances (e.g., surgical tools, robotics).", "type": "High Precision", "options": ["1", "2", "3", "4", "5", "6", "7"]},

    // *Deep Aptitude Probes*
    {"q": "I am better at understanding a *complex circuit board layout (PCB)* than a complex mechanical assembly drawing.", "type": "Aptitude Check (EE vs ME)", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I find *Big Data, statistical inference, and computational modeling* more exciting than physical laboratory experiments.", "type": "Aptitude Check (Data vs Chem/Bio)", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "When a machine breaks, my first instinct is to check the *power delivery, wiring, and sensor input/output*.", "type": "Troubleshooting (EE/ECE)", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "When a product fails, my first instinct is to investigate the *strength of the fasteners, choice of material, or bearing fatigue*.", "type": "Troubleshooting (ME/AE)", "options": ["1", "2", "3", "4", "5", "6", "7"]},
    {"q": "I am interested in how *business decisions, economic factors, and policy* influence the implementation of engineering solutions.", "type": "Management/Policy", "options": ["1", "2", "3", "4", "5", "6", "7"]},
];


export const resources = [
  {
    title: 'NPTEL - Free Courses by IITs',
    description: 'Access high-quality engineering courses from India\'s top institutes, free of charge.',
    link: 'https://nptel.ac.in/',
    category: 'Free Courses',
    image: PlaceHolderImages.find(i => i.id === 'resource-1') as ImagePlaceholder
  },
   {
    title: 'Coursera - Guided Projects',
    description: 'Learn job-relevant skills in under 2 hours with guided, hands-on projects from industry experts.',
    link: 'https://www.coursera.org/guided-projects',
    category: 'Hands-on Learning',
    image: PlaceHolderImages.find(i => i.id === 'resource-2') as ImagePlaceholder
  },
   {
    title: 'freeCodeCamp',
    description: 'A non-profit community that helps you learn to code by building projects. Thousands of articles, videos, and interactive lessons.',
    link: 'https://www.freecodecamp.org/',
    category: 'Coding Practice',
    image: PlaceHolderImages.find(i => i.id === 'resource-3') as ImagePlaceholder
  },
   {
    title: 'GeeksforGeeks',
    description: 'A go-to resource for computer science students, with a vast library of articles, tutorials, and coding problems.',
    link: 'https://www.geeksforgeeks.org/',
    category: 'Interview Prep',
    image: PlaceHolderImages.find(i => i.id === 'resource-4') as ImagePlaceholder
  },
]

export const forumTopics = [
    {
        id: 1,
        title: 'Feeling lost after results. What now?',
        author: 'Aspirant_24',
        replies: 42,
        lastReply: '3 hours ago',
        category: 'Emotional Support'
    },
    {
        id: 2,
        title: 'How to choose between CSE and ECE?',
        author: 'ConfusedStudent',
        replies: 18,
        lastReply: '5 hours ago',
        category: 'Domain Choice'
    },
    {
        id: 3,
        title: 'Best resources to start learning Python?',
        author: 'CodeNewbie',
        replies: 31,
        lastReply: '1 day ago',
        category: 'Learning Resources'
    },
    {
        id: 4,
        title: 'My success story: from NEET dropper to landing a job at Microsoft',
        author: 'PivotedAndProud',
        replies: 112,
        lastReply: '2 days ago',
        category: 'Success Stories'
    },
     {
        id: 5,
        title: 'Is a B.Tech from a private college worth it?',
        author: 'CollegeSearcher',
        replies: 67,
        lastReply: '2 days ago',
        category: 'Admissions'
    }
]

export const domainMatrix: Record<string, number[]> = {
    'Computer Science (AI/ML/Data)': [7, 3, 2, 1, 7, 1, 4, 1, 2, 1, 7, 1, 2, 5, 2, 2, 7, 2, 1, 4],
    'Computer Science (Core Software)': [7, 4, 2, 1, 5, 1, 3, 1, 1, 1, 7, 1, 2, 4, 1, 3, 6, 3, 1, 2],
    'Electrical Engineering (EE/ECE)': [5, 7, 3, 1, 4, 2, 3, 1, 5, 2, 6, 2, 3, 4, 5, 7, 4, 7, 3, 2],
    'Mechanical Engineering (ME)':   [4, 3, 7, 3, 3, 5, 4, 3, 3, 4, 2, 5, 3, 5, 6, 4, 2, 3, 7, 3],
    'Aerospace Engineering (AE)':    [5, 4, 7, 1, 4, 4, 2, 1, 1, 7, 3, 3, 2, 4, 7, 5, 3, 4, 7, 2],
    'Civil Engineering (CE)':        [2, 1, 4, 3, 3, 7, 4, 7, 1, 1, 1, 7, 7, 4, 3, 1, 2, 1, 2, 5],
    'Chemical Engineering (ChE)':    [3, 1, 3, 7, 3, 1, 5, 1, 3, 1, 1, 6, 6, 5, 4, 2, 4, 2, 1, 4],
    'Industrial Engineering (IE)':   [5, 2, 3, 2, 6, 2, 7, 3, 1, 2, 4, 4, 4, 7, 2, 3, 6, 1, 1, 7], 
    'Biomedical Engineering (BME)':  [4, 6, 3, 5, 3, 1, 2, 1, 7, 1, 4, 2, 3, 3, 7, 6, 3, 5, 1, 1], 
};

export const domainDescriptions: Record<string, string> = {
    'Computer Science (AI/ML/Data)':   "Focus: Advanced statistics, AI algorithms, computational modeling, and Big Data analysis. *Core Skills: Math, Logic, Data.* Path: Data Scientist, ML Engineer, Quant Analyst.",
    'Computer Science (Core Software)': "Focus: System architecture, robust application design, software development, and core algorithms. *Core Skills: Logic, Abstract Problem-Solving, Coding.* Path: Full-Stack Developer, Software Engineer, System Architect.",
    'Electrical Engineering (EE/ECE)': "Focus: Power generation, circuitry, communication systems, sensors, and control systems. *Core Skills: Electronics, Physics, High Precision.* Path: VLSI Designer, Power Systems Engineer, Embedded Systems Developer.",
    'Mechanical Engineering (ME)':     "Focus: Design, analysis, manufacturing, and maintenance of physical systems (engines, machines, HVAC). *Core Skills: Physics, Hands-on Design, Structural Analysis.* Path: Automotive Engineer, Robotics Specialist, Thermal Engineer.",
    'Aerospace Engineering (AE)':      "Focus: Design and analysis of aircraft/spacecraft, fluid dynamics, and propulsion systems. *Core Skills: Advanced Physics, Thermodynamics, High Precision Design.* Path: Aircraft Designer, Propulsion Specialist, Stress Analyst.",
    'Civil Engineering (CE)':          "Focus: Design and construction of public infrastructure, urban planning, and environmental structures. *Core Skills: Structural Integrity, Fieldwork, Societal Impact.* Path: Structural Engineer, Urban Planner, Construction Manager.",
    'Chemical Engineering (ChE)':      "Focus: Applying chemistry and physics to design and optimize industrial processes for material and product creation. *Core Skills: Chemistry, Process Flow, Mass/Energy Balance.* Path: Process Engineer, Materials Scientist, Pharmaceutical Engineer.",
    'Industrial Engineering (IE)':     "Focus: Optimizing complex processes, logistics, supply chains, and management. It's the engineering of 'efficiency'. *Core Skills: Optimization, Data, Management, Continuous Improvement.* Path: Operations Manager, Supply Chain Analyst, Quality Engineer.",
    'Biomedical Engineering (BME)':    "Focus: Applying engineering principles to biological systems and medicine (e.g., medical devices, bio-instrumentation). *Core Skills: Chemistry, Electronics, Societal Impact, High Precision.* Path: Medical Device Engineer, Clinical Engineer, Biomechanics Specialist.",
};
