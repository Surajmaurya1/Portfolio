
export const RESUME_DATA = {
  name: "Suraj Maurya",
  title: "Frontend Developer | React & Next.js Specialist",
  tagline: "Building scalable, high-performance web applications with clean architecture and production-grade frontend systems.",
  about: {
    title: "About",
    description:
      "I am a frontend developer focused on building scalable, production-ready web applications using React.js and Next.js. My work emphasizes clean component architecture, performance optimization, and maintainable codebases. I have experience integrating APIs, collaborating closely with design and backend teams, and translating product requirements into reliable, user-centric interfaces. I also contribute to team growth through code reviews and mentoring junior developers.",
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
        "Mentored 4-5 interns and reviewed code",
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
      link: "https://jenxkaro.com/",
    },
    {
  title: "Bookmark App",
  tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  description:
    "A simple and secure bookmark management app that allows users to save and manage website links using Google authentication.",
  highlights: [
    "Google authentication with Supabase Auth",
    "Secure user-based bookmark storage",
    "Type-safe frontend using TypeScript",
    "Clean and minimal UI with Tailwind CSS",
    "Real-time database integration with Supabase",
  ],
  link: "https://bookmark-mu-self.vercel.app/",
},
{
  title: "The Room",
  tech: ["React.js", "Framer Motion", "CSS"],
  description:
    "An immersive, animation-driven web experience focused on smooth interactions and motion-based UI storytelling.",
  highlights: [
    "Motion-first UI using Framer Motion",
    "Smooth page transitions and micro-interactions",
    "Clean component structure",
    "Responsive across devices",
  ],
  link: "https://the-room-gamma.vercel.app/",
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
