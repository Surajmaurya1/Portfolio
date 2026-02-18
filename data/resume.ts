export const RESUME_DATA = {
  name: "Suraj Maurya",
  title: "Frontend Developer | React & Next.js Specialist",
  tagline:
    "Designing and engineering scalable, high-performance web interfaces with clean architecture and production-ready systems.",

  about: {
    title: "About",
    description:
      "I am a frontend developer specializing in building scalable, production-grade web applications using React.js and Next.js. My work focuses on clean component architecture, performance optimization, and maintainable UI systems. I collaborate closely with designers and backend engineers to translate complex product requirements into reliable, user-centric interfaces. Alongside delivery, I actively contribute to code quality through reviews, documentation, and mentoring junior developers.",
    highlights: [
      "Scalable component architecture",
      "API-driven frontend systems",
      "Performance optimization",
      "Design-to-code collaboration",
      "Production deployments",
      "Code reviews & mentoring",
    ],
  },

  experience: [
    {
      company: "Streamcore Web Technologies",
      role: "Software Developer (Frontend)",
      period: "June 2025 – Present",
      description:
        "Building and maintaining scalable frontend systems while supporting team growth.",
      impact: [
        "Architected reusable UI modules using scalable component systems",
        "Integrated REST APIs with robust loading and error-handling patterns",
        "Improved performance through lazy loading and code splitting",
        "Deployed and maintained production applications on Vercel",
        "Mentored 4–5 interns through code reviews and guidance",
        "Collaborated with design and backend teams on production releases",
      ],
    },
    {
      company: "Streamcore Web Technologies",
      role: "Frontend Developer Intern",
      period: "March 2025 – May 2025",
      description:
        "Delivered responsive UI features while learning production workflows.",
      impact: [
        "Implemented responsive UI components",
        "Resolved layout and styling inconsistencies",
        "Adopted scalable component structuring practices",
        "Worked with real-world Git and collaboration workflows",
      ],
    },
  ],

  projects: [
    {
      title: "Jenxkaro",
      tech: ["Next.js", "Tailwind CSS", "REST APIs"],
      description:
        "A scalable e-commerce frontend featuring structured product architecture, cart functionality, and a complete checkout flow.",
      highlights: [
        "Modular and reusable component design",
        "API-driven product and cart data",
        "Optimized state and data handling",
        "Clean and maintainable UI architecture",
      ],
      link: "https://jenxkaro.com/",
    },
    {
      title: "Bookmark App",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      description:
        "A secure bookmark management application allowing users to save and manage links with Google authentication.",
      highlights: [
        "Google authentication using Supabase Auth",
        "User-specific secure bookmark storage",
        "Type-safe frontend with TypeScript",
        "Minimal and accessible UI design",
        "Real-time database integration",
      ],
      link: "https://bookmark-mu-self.vercel.app/",
    },
    {
      title: "The Room",
      tech: ["React.js", "Framer Motion", "CSS"],
      description:
        "An immersive, motion-driven web experience focused on smooth transitions and interaction-led storytelling.",
      highlights: [
        "Motion-first UI using Framer Motion",
        "Smooth page transitions and micro-interactions",
        "Clean and modular component structure",
        "Fully responsive across devices",
      ],
      link: "https://the-room-gamma.vercel.app/",
    },
    {
      title: "Neurowel Foundation",
      tech: ["React.js", "Tailwind CSS"],
      description:
        "A responsive NGO platform focused on accessibility, clarity, and structured content delivery.",
      highlights: [
        "Accessibility-focused UI implementation",
        "Responsive layout system",
        "Scalable content architecture",
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
      "Error & loading state management",
    ],
    performance: [
      "Code Splitting",
      "Lazy Loading",
      "Frontend Performance Optimization",
    ],
    dev: ["Git", "GitHub", "Bitbucket", "Vercel", "CI/CD fundamentals"],
  },

  contacts: {
    email: "mailto:surajmaurya.pvt@gmail.com",
    linkedin: "https://www.linkedin.com/in/suraj-maurya-33a91325a",
    github: "https://github.com/Surajmaurya1",
  },
} as const;
