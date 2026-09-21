import { CaseStudy, EducationItem, AchievementItem, SkillCategory } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  // Design work — SkillCraft Technology internship
  {
    id: 'fitness-app',
    category: 'design',
    title: 'Fitness app — interface redesign',
    role: 'UI/UX Design Intern, SkillCraft Technology · 2025',
    problemOrWhat: 'Screens had grown inconsistent over time, making the app feel harder to use than the workouts inside it needed to be.',
    approachOrRole: 'Audited existing flows, then rebuilt key screens in Figma with a consistent visual language and clearer hierarchy.',
    outcome: 'Delivered a more usable, visually consistent design ready to hand off for implementation.',
    tags: ['Figma', 'UI/UX Audit', 'Design System', 'Mobile App'],
    iconType: 'fitness',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Fitness and workout telemetry tracking user interface design',
  },
  {
    id: 'ecommerce-site',
    category: 'design',
    title: 'E-commerce site — interface redesign',
    role: 'UI/UX Design Intern, SkillCraft Technology · 2025',
    problemOrWhat: 'Product browsing and checkout felt cluttered, with weak visual hierarchy between primary and secondary actions.',
    approachOrRole: 'Restructured layout and typography to foreground products and calls to action, iterating on feedback from the design mentor.',
    outcome: 'Cleaner, more scannable screens with consistent spacing and component use across the site.',
    tags: ['Figma', 'E-commerce', 'Checkout Flow', 'Typography'],
    iconType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Modern e-commerce platform browsing and checkout web layout',
  },
  {
    id: 'news-website',
    category: 'design',
    title: 'News website — interface redesign',
    role: 'UI/UX Design Intern, SkillCraft Technology · 2025',
    problemOrWhat: 'Dense article layouts made it hard to scan headlines and distinguish sections at a glance.',
    approachOrRole: 'Introduced clearer type hierarchy and section structure, balancing story density with readability.',
    outcome: 'A more navigable layout that keeps the site\'s content density without feeling overwhelming.',
    tags: ['Figma', 'Information Architecture', 'Editorial Design', 'Web Layout'],
    iconType: 'news',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Editorial newspaper publication layout and typography hierarchy',
  },

  // Engineering builds — independent projects
  {
    id: 'vehicle-service-booking',
    category: 'engineering',
    title: 'Vehicle Service Booking Platform',
    role: 'End-to-end design & build · React.js, Node.js, Express, MongoDB',
    problemOrWhat: 'Lets users book vehicle services, track status in real time, and view service history, with a full booking and service-management flow.',
    approachOrRole: 'Designed the interface and user flow, then built it: a React frontend consuming REST APIs, a relational data model, and CRUD operations across every layer.',
    tags: ['React.js', 'Node.js', 'REST APIs', 'MongoDB'],
    iconType: 'service',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Vehicle Service Booking Platform diagnostic workshop and online scheduling interface',
  },
  {
    id: 'vehicle-pre-booking',
    category: 'engineering',
    title: 'Vehicle Pre-Booking System',
    role: 'Interface & system design · PHP, SQL, HTML, CSS',
    problemOrWhat: 'A real-time reservation system that handles concurrent booking requests across peak and non-peak hours without double-booking.',
    approachOrRole: 'Designed the booking interface and flow, and built the reservation logic on a normalized database schema.',
    tags: ['PHP', 'SQL', 'DBMS'],
    iconType: 'booking',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Automotive fleet reservation and schedule management system',
  },
  {
    id: 'agentic-ai-course-planner',
    category: 'engineering',
    title: 'Agentic AI Course Planner',
    role: 'User flow & build · Python, IBM Cloud',
    problemOrWhat: 'An AI agent that generates a personalized course roadmap based on a learner\'s stated goals and available time.',
    approachOrRole: 'Designed the input-to-roadmap user flow and built the agent on IBM Cloud during a virtual internship with AICTE and Edunet Foundation.',
    tags: ['Python', 'IBM Cloud', 'Agentic AI'],
    iconType: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Agentic AI neural network learning pathway and autonomous course planning architecture',
  },
  {
    id: 'vehicle-maintenance-tracker',
    category: 'engineering',
    title: 'Vehicle Maintenance Tracker',
    role: 'Build · Java, HTML, CSS',
    problemOrWhat: 'Logs a vehicle\'s maintenance history and reminds the user when the next service is due.',
    approachOrRole: 'Built the application in Java with a simple, uncluttered interface, applying core OOP principles throughout.',
    tags: ['Java', 'OOP'],
    iconType: 'maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Vehicle maintenance logs, diagnostic tools and service reminders',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Design',
    skills: [
      'UI / UX design',
      'Wireframing & prototyping',
      'Visual consistency & hierarchy',
      'Figma',
      'Canva',
    ],
  },
  {
    title: 'Development',
    skills: [
      'Java, Python, JavaScript, C',
      'SQL & relational databases (DBMS)',
      'React.js, Node.js, Express',
      'REST APIs',
      'HTML5, CSS3',
    ],
  },
  {
    title: 'Working style',
    skills: [
      'Problem-solving under ambiguity',
      'Clear written & verbal communication',
      'Cross-functional collaboration',
      'Time management',
      'Fast, self-directed learning',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'K. Ramakrishnan College of Engineering',
    degree: 'Bachelor of Technology, Information Technology',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA: 8.24 / 10',
  },
  {
    institution: 'Swami Dayananda Matric Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2021 – 2023',
    score: '83%',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'patents',
    text: 'Co-inventor on 2 filed patents: Police Investigation (2024) and Modified Speed Bump (2025)',
  },
  {
    id: 'prize1',
    text: '1st Prize, AI-Web Forge & 1st Prize, Technical Marketing — Paavai College of Engineering',
  },
  {
    id: 'prize2',
    text: '3rd Prize, Vibe Coding — Paavai College of Engineering',
  },
  {
    id: 'certifications',
    text: 'Python Certification (GUVI & IIT Madras); AI Certification (IBM); NPTEL IoT — 77%',
  },
  {
    id: 'treasurer',
    text: 'Department Treasurer — managed budgeting and financial reporting for student events',
  },
  {
    id: 'symposium',
    text: 'Organized a college technical symposium attended by 200+ participants',
  },
];

export const QUICK_FACTS = [
  { label: 'Based in', value: 'Thiruvarur, Tamil Nadu, India' },
  { label: 'Studying', value: 'B.Tech, Information Technology' },
  { label: 'Graduating', value: '2027' },
  { label: 'CGPA', value: '8.24 / 10' },
  { label: 'Design tools', value: 'Figma, Canva' },
  { label: 'Also codes in', value: 'Java, Python, JavaScript' },
];
