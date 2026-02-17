
export const RESUME_DATA = {
  name: "Suraj Maurya",
  title: "Frontend Developer | React & Next.js Specialist",
  tagline: "Building scalable, high-performance web applications with clean architecture and production-grade frontend systems.",
  about: {
    title: "About",
    description:
      "I am a frontend engineer experienced in building scalable UI systems using React.js and Next.js. I have a strong focus on performance optimization, reusable architecture, clean code, and real-world product delivery. I am comfortable collaborating cross-functionally and mentoring junior developers.",
    highlights: [
      "Component architecture",
      "API integration patterns",
      "Performance tuning",
      "Cross-browser reliability",
      "Production deployments",
      "Mentoring interns",
    ],
  },
  experience: [
    {
      company: "Streamcore Web Technologies",
      role: "Software Developer (Frontend)",
      period: "June 2025 – Present",
      description: "Architecting scalable UI modules and mentoring junior developers.",
      impact: [
        "Architected scalable UI modules using reusable component systems",
        "Integrated REST APIs with resilient error/loading handling patterns",
        "Improved performance using lazy loading and code splitting",
        "Deployed and maintained production builds on Vercel",
        "Mentored 2–3 interns and reviewed code",
        "Collaborated with design & backend teams on production releases",
      ],
    },
    {
      company: "Streamcore Web Technologies",
      role: "Frontend Developer Intern",
      period: "March 2025 – May 2025",
      description: "Delivering responsive UI features and fixing inconsistencies.",
      impact: [
        "Delivered responsive UI features",
        "Fixed UI inconsistencies",
        "Learned scalable component structure",
        "Followed real-world Git workflows",
      ],
    },
  ],
  projects: [
    {
      title: "Jenxkaro",
      tech: ["Next.js", "Tailwind", "REST APIs"],
      description:
        "A scalable e-commerce frontend with structured product architecture, cart system, and checkout flow.",
      highlights: [
        "Modular component design",
        "Dynamic API-driven data",
        "Optimized state handling",
        "Clean UI architecture",
      ],
      link: "#",
    },
    {
      title: "Neurowel Foundation",
      tech: ["React.js", "Tailwind CSS"],
      description:
        "An accessible and responsive NGO platform focused on content clarity and structured layout.",
      highlights: [
        "Accessibility-first approach",
        "Responsive layout system",
        "Scalable content structure",
      ],
      link: "#",
    },
  ],
  skills: {
    core: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"],
    architecture: [
      "Component-Based Architecture",
      "State Management",
      "Reusable UI Systems",
    ],
    api: [
      "REST APIs",
      "Axios",
      "JSON handling",
      "Error states & loading strategies",
    ],
    performance: ["Code Splitting", "Lazy Loading", "Performance Optimization"],
    dev: ["Git", "GitHub", "Bitbucket", "Vercel", "CI/CD basics"],
  },
  contacts: {
    email: "mailto:surajmaurya.pvt@gmail.com",
    linkedin: "https://www.linkedin.com/in/suraj-maurya-33a91325a",
    github: "https://github.com/Surajmaurya1",
  },
} as const;
