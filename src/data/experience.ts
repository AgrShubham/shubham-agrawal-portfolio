export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Internship" | "Full-time" | "Freelance";
  description: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  honors: string[];
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  pdfUrl?: string;
  duration?: string;
  skills: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Amnesea",
    role: "Frontend Web Development Intern",
    period: "May 2023 – July 2023",
    location: "Remote",
    type: "Internship",
    description: [
      "Developed modular, reusable React.js and Tailwind CSS components, establishing consistent design patterns across all user-facing web pages.",
      "Collaborated with backend engineering teams to integrate RESTful endpoints, optimizing client-side data fetching and state caching.",
      "Contributed to reported 35% reduction in frontend page-load times through image optimization and bundle splitting.",
      "Investigated cross-browser compatibility discrepancies and tuned responsive breakpoint behaviors, contributing to reported 20% higher mobile user engagement.",
    ],
    skills: ["React.js", "Tailwind CSS", "REST APIs", "Performance Optimization", "Responsive Design"]
  }
];

export const EDUCATION: EducationItem = {
  institution: "Institute of Engineering and Science, IPS Academy",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  period: "Sep 2021 – May 2025",
  location: "Indore, India",
  honors: [
    "🏆 2nd Position — Udaan 2024 CSI Project Exhibition",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Computer Networks & Protocols",
    "Operating Systems & Process Management",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Software Engineering"
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "aws-cloud-foundations",
    name: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "Aug 22, 2024",
    credentialId: "1mNIxVxM",
    verifyUrl: "https://www.credly.com/go/1mNIxVxM",
    image: "/certificates/aws-cloud-foundations.png",
    pdfUrl: "/certificates/aws-cloud-foundations.pdf",
    duration: "20 hours",
    skills: ["Cloud Architecture", "Core Compute & S3", "IAM Security", "VPC Networking"]
  },
  {
    id: "aws-machine-learning",
    name: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    issueDate: "Mar 08, 2025",
    credentialId: "olUPF91W",
    verifyUrl: "https://www.credly.com/go/olUPF91W",
    image: "/certificates/aws-machine-learning.png",
    pdfUrl: "/certificates/aws-machine-learning.pdf",
    duration: "20 hours",
    skills: ["ML Pipelines", "Computer Vision", "NLP Foundations", "AWS SageMaker"]
  },
  {
    id: "linkedin-react",
    name: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    issueDate: "Apr 26, 2023",
    credentialId: "Adr69Q9vQcdM1iv-WezQ_t6Jqg4c",
    image: "/certificates/linkedin-react-essential-training.png",
    duration: "2h 1m",
    skills: ["Component Lifecycle", "Hooks (useState, useEffect)", "State Management", "Virtual DOM"]
  },
  {
    id: "linkedin-git",
    name: "Learning Git and GitHub",
    issuer: "LinkedIn Learning",
    issueDate: "May 12, 2023",
    credentialId: "ATqCLCtXXqM5Eq40a6HkEg39tvoU",
    image: "/certificates/linkedin-git-github.png",
    duration: "1h 52m",
    skills: ["Git CLI", "Branching Workflows", "Merge Conflicts", "PR Code Reviews"]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python 3", "Java", "C", "SQL"]
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React 19",
      "React Native",
      "Next.js 16",
      "Tailwind CSS v4",
      "Vite",
      "HTML5 Canvas",
      "CSS3",
      "Web Audio API"
    ]
  },
  {
    title: "Systems & Networking",
    skills: [
      "UDP Datagram Streaming",
      "WebSockets / Socket.IO",
      "Win32 API (user32.dll)",
      "Node.js",
      "Flask",
      "RESTful APIs",
      "JSON-LD Schema SEO"
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Android Studio",
      "Chrome DevTools",
      "Figma",
      "Antigravity",
      "Linux / Bash"
    ]
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/AgrShubham",
  linkedin: "https://linkedin.com/in/shubham-agrawal-dev",
  email: "shubhamagrawal.code@gmail.com",
  phone: "+91 8825388041",
  location: "Indore / Remote, India",
};
