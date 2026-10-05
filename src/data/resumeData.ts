export interface ResumeData {
  personal: {
    name: string;
    phone: string;
    email: string;
    githubUrl: string;
    githubDisplay: string;
    linkedinUrl: string;
    linkedinDisplay: string;
    location?: string;
  };
  summary: string;
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    startDate: string;
    endDate: string;
    techUsed: string;
    url: string;
    urlDisplay: string;
    bullets: string[];
  }[];
  education: {
    institution: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
    bullets: string[];
  }[];
  certifications: string[];
}

export const RESUME_DATA: ResumeData = {
  personal: {
    name: "Shubham Agrawal",
    phone: "8825388041",
    email: "shubhamagrawal.code@gmail.com",
    githubUrl: "https://github.com/AgrShubham",
    githubDisplay: "github.com/AgrShubham",
    linkedinUrl: "https://linkedin.com/in/shubham-agrawal-dev",
    linkedinDisplay: "linkedin.com/in/shubham-agrawal-dev",
    location: "",
  },
  summary:
    "Software Developer with hands-on experience building responsive web applications, mobile applications, and networked software using React, Type Script, JavaScript, Python, and modern development tools. Strong foundation in data structures, algorithms, object-oriented programming, APIs, and software engineering, with experience using AI-assisted development workflows for rapid implementation, debugging, code exploration, and iteration.",
  technicalSkills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Java", "Python", "C"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    },
    {
      category: "Backend & Networking",
      skills: ["Node.js", "Flask", "REST APIs", "Socket.IO", "UDP"],
    },
    {
      category: "Databases & Cloud",
      skills: ["SQL", "NoSQL", "Supabase", "AWS"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Android Studio", "Chrome DevTools", "Antigravity"],
    },
    {
      category: "Core",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Computer Networks", "Responsive Design"],
    },
  ],
  experience: [
    {
      company: "Amnesea",
      role: "Frontend Web Development Intern",
      startDate: "May 2023",
      endDate: "July 2023",
      location: "Remote",
      bullets: [
        "Developed reusable React.js and Tailwind CSS components to improve UI consistency across web pages.",
        "Integrated RESTful APIs with backend teams and optimized frontend behavior, contributing to reported *35%* lower page-load times.",
        "Resolved cross-browser issues and optimized responsive layouts, contributing to reported *20%* higher mobile user engagement.",
      ],
    },
  ],
  projects: [
    {
      name: "Remote Trackpad & Gamepad (Mobile App)",
      startDate: "Sep 2026",
      endDate: "",
      techUsed: "React Native | TypeScript | Python | UDP | Android",
      url: "https://github.com/AgrShubham/Remote-trackpad-app",
      urlDisplay: "github.com/AgrShubham/Remote-trackpad-app",
      bullets: [
        "Built an Android-to-Windows wireless peripheral system supporting trackpad, game-pad, keyboard, and media-control functionality.",
        "Implemented low-latency UDP input streaming with Wi-Fi host discovery and device pairing for real-time controls.",
        "Developed configurable control layouts with sensitivity, deadzones, haptic feedback and orientation support",
      ],
    },
    {
      name: "Remote Trackpad (Web application)",
      startDate: "Nov 2025",
      endDate: "",
      techUsed: "Python | Flask | Socket.IO | JavaScript | Pynput",
      url: "https://github.com/AgrShubham/remote_mouse",
      urlDisplay: "github.com/AgrShubham/remote_mouse",
      bullets: [
        "Built a browser-based wireless peripheral system that turns smartphones and tablets into a desktop trackpad, gamepad, and keyboard.",
        "Implemented real-time input communication using Socket.IO and user-space OS control through Pynput across all plateforms.",
        "Developed touch-driven interactions including gesture recognition, pointer acceleration, inertial scrolling, virtual gamepad controls, and keyboard input.",
      ],
    },
    {
      name: "Meme Generator",
      startDate: "July 2025",
      endDate: "",
      techUsed: "React | JavaScript | HTML | CSS | Canvas API",
      url: "https://github.com/AgrShubham/MemeGenerator",
      urlDisplay: "github.com/AgrShubham/MemeGenerator",
      bullets: [
        "Developed a React and JavaScript meme generator with real-time text rendering and Canvas API image manipulation.",
        "Implemented client-side image generation and downloads, removing dependency on server-side image processing.",
        "Built responsive layouts for mobile and desktop, enabling consistent functionality across screen sizes.",
      ],
    },
    {
      name: "Chef Claude",
      startDate: "Dec 2024",
      endDate: "",
      techUsed: "React | TypeScript | Tailwind CSS | Vite",
      url: "https://github.com/AgrShubham/Chef-Claude",
      urlDisplay: "github.com/AgrShubham/Chef-Claude",
      bullets: [
        "Built a responsive React and TypeScript recipe web application with real-time ingredient management and dynamic UI updates.",
        "Implemented React Hooks and reusable components to manage interactive state and reduce repetitive UI logic.",
        "Optimized the frontend using Vite and Tailwind CSS, delivering a lightweight and maintainable application architecture.",
      ],
    },
  ],
  education: [
    {
      institution: "Institute of Engineering and Science, IPS Academy",
      location: "Indore, India",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      startDate: "Sep 2021",
      endDate: "May 2025",
      bullets: [
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, OOP",
        "Achievement: 2nd Position — Udaan 2024 CSI Project Exhibition",
      ],
    },
  ],
  certifications: [
    "Machine Learning Foundations - AWS Academy",
    "Cloud Foundations - AWS Academy",
    "React.js Essential Training - LinkedIn Learning",
    "Learning Git and GitHub - LinkedIn Learning",
  ],
};
