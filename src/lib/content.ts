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
    excerpt: 'The beloved actor once failed the Pre-Medical Test (PMT), the precursor to NEET, proving that career paths can lead to unexpected and great success.',
    author: 'Bollywood Insider',
    date: 'July 11, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-5'),
    category: 'Celebrity Story',
  },
    {
    title: 'The Pivot: How Changing Your Dream Can Redefine Success',
    excerpt: 'Success isn\'t a straight line. This article explores the psychology of changing long-held goals and finding happiness in unexpected places.',
    author: 'Re-route Editorial',
    date: 'July 2, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-6'),
    category: 'Motivation',
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
  { "q": "I enjoy thinking about algorithms, logical sequences, and writing structured instructions.", "type": "Aptitude", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I am fascinated by how things move (e.g., engines, vehicles) and like understanding physical mechanics.", "type": "Interest", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I am interested in large-scale infrastructure, urban development, and structural stability (e.g., bridges, buildings).", "type": "Interest", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I find electronic gadgets, circuits, communication systems (e.g., Wi-Fi, sensors) captivating.", "type": "Aptitude", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I have a strong aptitude for Chemistry and enjoy studying material transformation and processes.", "type": "Aptitude", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "My hobbies involve breaking down complex problems into smaller, manageable steps (e.g., coding, complex gaming).", "type": "Hobby", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I enjoy building, fixing, or tinkering with physical objects and tools in my free time.", "type": "Hobby", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I am keenly aware of environmental issues and interested in sustainable or green technology.", "type": "Interest", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I enjoy working with data, statistics, and trends to make informed decisions.", "type": "Aptitude", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] },
  { "q": "I am comfortable working in a laboratory setting or managing complex manufacturing processes.", "type": "Hobby", "options": ["Not at all", "Slightly", "Moderately", "Highly", "Very Highly"] }
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
    'Computer Science (CSE)':           [5, 1, 1, 3, 1, 5, 1, 2, 5, 1],
    'Mechanical Engineering (ME)':      [3, 5, 3, 2, 2, 3, 5, 3, 3, 4],
    'Civil Engineering (CE)':           [2, 4, 5, 1, 2, 2, 5, 5, 2, 3],
    'Electrical/Electronics (ECE/EE)':  [4, 2, 1, 5, 1, 4, 3, 2, 4, 2],
    'Chemical Engineering (ChE)':       [3, 1, 3, 1, 5, 2, 1, 5, 4, 5],
    'Aerospace Engineering (AE)':       [4, 5, 2, 3, 2, 4, 4, 3, 3, 3],
    'Industrial Engineering (IE)':      [4, 3, 4, 2, 2, 4, 3, 5, 5, 4],
    'Petroleum Engineering (PE)':       [3, 3, 4, 2, 4, 2, 3, 4, 4, 5],
};

export const domainDescriptions: Record<string, string> = {
    'Computer Science (CSE)': "Focuses on software, data structures, algorithms, AI, and cybersecurity. Path: Software Developer, Data Scientist, Systems Analyst.",
    'Mechanical Engineering (ME)': "Deals with the design, analysis, manufacturing, and maintenance of mechanical systems. Path: Automotive Engineer, Robotics Specialist, Thermal Engineer.",
    'Civil Engineering (CE)': "Involves the design and construction of public and private works, such as infrastructure, bridges, and environmental structures. Path: Structural Engineer, Urban Planner, Construction Manager.",
    'Electrical/Electronics (ECE/EE)': "Covers power generation, electrical devices, circuitry, and communication systems like sensors and VLSI design. Path: Circuit Designer, Power Systems Engineer, Telecommunications Expert.",
    'Chemical Engineering (ChE)': "Applies principles of chemistry, physics, and life sciences to design and operate industrial chemical processes. Path: Process Engineer, Materials Scientist, Pharmaceutical Engineer.",
    'Aerospace Engineering (AE)': "Involves the design, manufacture, and testing of aircraft, spacecraft, missiles, and related equipment. Path: Aircraft Designer, Propulsion Specialist, Space Systems Engineer.",
    'Industrial Engineering (IE)': "Optimizes complex processes, systems, and organizations by eliminating waste of time, money, and materials. Path: Operations Manager, Supply Chain Analyst, Quality Engineer.",
    'Petroleum Engineering (PE)': "Focuses on the extraction and production of oil and gas resources from the Earth. Path: Drilling Engineer, Reservoir Engineer, Production Manager.",
};
