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
    title: 'From Stethoscope to Keyboard: My Journey into Tech',
    excerpt: 'Read how Ananya Sharma, a former medical aspirant, found her passion in data science and is now leading a team at a top tech firm.',
    author: 'Ananya Sharma',
    date: 'July 15, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-1'),
    category: 'Success Story',
  },
  {
    title: 'Leveraging Your NEET Prep for Engineering Entrance',
    excerpt: "Your physics and chemistry knowledge is a superpower. Learn how to adapt your study strategies for exams like JEE, BITSAT, and more.",
    author: 'Prof. R. Mehta',
    date: 'July 12, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-2'),
    category: 'Expert Advice',
  },
  {
    title: 'The Resilient Mind: Overcoming Exam Setbacks',
    excerpt: 'A clinical psychologist shares strategies for building mental resilience, processing grief, and embracing a new chapter with confidence.',
    author: 'Dr. Priya Desai',
    date: 'July 10, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-3'),
    category: 'Mental Wellness',
  },
    {
    title: 'Why Tech Companies Value Med-Background Students',
    excerpt: 'Discover the unique analytical and problem-solving skills that make students with a biology background a surprising asset in the tech world.',
    author: 'HR Insights Weekly',
    date: 'July 8, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-4'),
    category: 'Career Insights',
  },
    {
    title: 'A Beginner\'s Guide to Your First Line of Code',
    excerpt: 'Feeling intimidated by programming? This gentle introduction will get you started with Python, one of the most versatile and beginner-friendly languages.',
    author: 'CodeNewbie',
    date: 'July 5, 2024',
    image: PlaceHolderImages.find((img) => img.id === 'article-5'),
    category: 'Getting Started',
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
  {
    question: "When faced with a complex problem, what is your first instinct?",
    options: [
      "Break it down into smaller, logical steps.",
      "Look for patterns and hidden connections in the data.",
      "Imagine a completely new way to approach it.",
      "Understand the human or real-world impact of the problem."
    ]
  },
  {
    question: "Which of these subjects from your NEET prep did you enjoy the most, regardless of marks?",
    options: [
      "Physics - understanding the fundamental laws and solving equations.",
      "Chemistry - seeing how different elements interact and form systems.",
      "Biology - memorizing complex systems and their functions.",
      "I enjoyed the process of rigorous, structured study itself."
    ]
  },
  {
    question: "You have a free weekend to learn something new. What do you pick?",
    options: [
      "Building a simple website or a small app.",
      "Reading about the latest breakthroughs in science and technology.",
      "Working on a hands-on project, like assembling a gadget or a model.",
      "Analyzing a social or economic trend using public data."
    ]
  },
  {
    question: "How do you prefer to work?",
    options: [
      "Alone, with deep focus on a single, challenging task.",
      "In a team, brainstorming and collaborating on ideas.",
      "A mix of both - individual work combined with team check-ins.",
      "Leading a project and organizing the tasks for others."
    ]
  },
  {
    question: "What kind of impact do you want to make with your career?",
    options: [
      "Create tangible products that people use every day.",
      "Solve large-scale, abstract problems that push humanity forward.",
      "Improve existing systems to make them more efficient and reliable.",
      "Directly help people by applying technology to health or social issues."
    ]
  }
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
