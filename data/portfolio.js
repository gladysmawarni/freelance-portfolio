// ============================================================
//  PORTFOLIO DATA 
// ============================================================

export const SITE = {
  name: "Gladys",
  initials: "G",
  tagline: "Analytics Engineer",
  seo: {
    title: "Gladys — Analytics Engineer",
    description: "Freelance Analytics Engineer",
  },
};

// ── Navigation — only 3 pages now ────────────────────────────
export const NAV = [
  { id: "home",  label: "Home"       },
  { id: "about", label: "Experience" },
  { id: "work",  label: "Work"       },
];

// ── Home section ──────────────────────────────────────────────
export const HOME = {
  // Path to your avatar image — put it in /public/avatar.jpg
  // and change this to "/avatar.jpg"
  avatar: "/avatar.jpg",
  avatarAlt: "profile photo",

  // Small italic quote shown under the greeting
  quote: "\"Turning messy data into clear stories.\"",

  greeting: "Hello, I'm",
  name: "Gladys.",
  role: "Freelancer Analytics Engineer",

  // Short intro paragraph
  intro: "I operate across the full spectrum of data and code, from deep technical work to simplifying complex ideas for non-technical audiences. I care about detail, accuracy, and clarity, and aim to make data both reliable and easy to understand.",

  // Social / contact links
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/gladys-mawarni", icon: "linkedin" },
    { label: "GitHub",   href: "https://github.com/gladysmawarni",      icon: "github"   },
    { label: "Upwork",   href: "https://upwork.com/freelancers/~01bf84b994acf51062", icon: "upwork" },
    { label: "Email",    href: "mailto:gladysmawarni.li@email.com",         icon: "email"    },
  ],

  // Skill icons row — add/remove freely
  // icon: "python" | "powerbi" | (more can be added in the component)
  skills: [
    { label: "Python",   icon: "python"  },
    { label: "SQL", icon: "sql"},
    { label: "Excel",   icon: "excel"  },
    { label: "Power BI", icon: "powerbi" },
    { label: "Tableau", icon: "tableau"},
    { label: "OpenAI", icon: "openai"},
    { label: "Anthropic", icon: "anthropic"},
    { label: "LangChain", icon: "langchain"},
    { label: "Pinecone", icon: "pinecone"},
    { label: "GCP", icon: "gcp"},
    { label: "make.com", icon: "make"},
    
  ],
};

// ── About section ─────────────────────────────────────────────
export const SECTIONS = {
  about: {
    tag: "Experience",
    heading: "My Professional Journey",
    // headingEm: "History.",
    intro: "Starting in academic research and scientific publishing, I moved into freelance analytics engineering where I deliver data solutions to clients worldwide.",

    // Big numbers that show up as a stats row
    stats: [
      { number: "10+", label: "Clients" },
      { number: "7",   label: "Countries" },
      { number: "5",   label: "Industries" },
      { number: "4",   label: "Years Exp." },
    ],

    // Most recent first
    timeline: [
      {
        title: "Freelancer",
        company: "Self-employed",
        period: "2023 – present",
        description: "Collaborated with a diverse clientele from various countries to provide data analysis solutions, optimising their business operations and decision-making processes. Continuously explored and implemented a wide range of data analysis tools and techniques to tailor solutions to each client's unique needs.",
        link: null,
        skills: ["Power BI", "DAX", "LLM", "RAG", "Agentic AI", "MCP", "AWS Sagemaker", "n8n", "make.com", "Playwright", "Time Series", "Javascript", "Pinecone", "Firebase", "GCP Cloud Run", "GCP Vertex"],
        featured: true,   // ← makes this card stand out with accent styling
        roles: [
          {
            title: "Digital PR Data Lead",
            description: "Managed and analyzed PR campaign data, turning insights into stories published on DR50+ sites with 100K+ traffic. Developed automation tools to streamline team workflows and improve efficiency.",
          },
          {
            title: "Assistant to Udemy Data Instructor",
            description: "Supported a top 1% instructor in developing their course and explore the latest tool in the market.",
          },
          {
            title: "Data & AI Engineer (Startup)",
            description: "Built databases, data workflows, LLM APIs, and Webflow integrations for a startup project.",
          },
          {
            title: "Fintech Data Engineer",
            description: "Developed API connections to global economic datasets (World Bank, IMF, Eurostat, OECD) to support data-driven fintech products and analytics.",
          },
          {
            title: "Power BI Dashboard Developer",
            description: "Developed dashboards and integrated data from multiple sources for a consulting firm with international clients.",
          },
          // add more roles here as needed
        ],
      },
      {
        title: "Teaching Assistant",
        company: "Ironhack Portugal",
        period: "2022 – 2023",
        description: "Assisted the lead instructor in teaching and refining students' technical abilities. Managed and guided students through their projects, developed software to streamline workflow and tasks, and actively contributed to the continuous development and updates of the course curriculum.",
        link: null,
        skills: ["Python", "MySQL", "Postgresql", "Tableau", "Flask", "Scikit-learn", "Tensorflow", "Pytorch", "Streamlit", "Selenium"],
      },
      {
        title: "Data Research Analyst",
        company: "Instituto Politécnico de Bragança",
        period: "2021",
        description: "Contributed to R&D efforts by collecting and analyzing data using statistical tools. Collaborated closely with professors to bolster research initiatives and played a key role in publishing a scientific journal.",
        link: "https://www.researchgate.net/publication/363003998_Factors_Affecting_the_Adventure_Tourism_Development_Index_A_Worldwide_Analysis",
        linkName: "Published Research",
        skills: ["R", "Excel", "Statistics"],
      },
    ],
  },

  work: {
    tag: "Portfolio",
    heading: "Where Data Becomes ",
    headingEm: "Things.",
    sub: "Projects & Case Studies",
    body: "From ETL pipelines to interactive dashboards — each project is a chance to solve something real.",
    cta: { label: "Get In Touch →", target: "home" },
    projects: [
      {
        title: "Automated News Discovery for Digital PR",
        short: "Identifies real-time news opportunities for PR campaigns using AI",
        industry: "Digital PR",
        image: "/projects/newsjacking-1.png",            // set to "/projects/project1.jpg" once you have an image
        tags: ["Python", "API"],
        description: `- **Python** script integrated with the **Claude API** to pull and analyze real-time news across selected industries\n- Classified stories as “recent” or “hot” to highlight the most time-sensitive opportunities\n - Generated and sent to the team every morning\n - Reduced manual research by filtering and surfacing high-potential topics, enabling faster and more consistent PR outreach`,
        gallery: [],            // add paths like ["/projects/p1-1.jpg", "/projects/p1-2.jpg"]
      },
      {
        title: "Data Intelligence Platform for Digital PR Campaigns",
        short: "AI-powered platform for discovering data-backed Digital PR story opportunities.",
        industry: "Digital PR",
        image: "/projects/dpr-idea-1.png",
        tags: ["Python", "API", "Streamlit"],
        description: `- A digital PR research platform powered by the **Claude API**, which identifies relevant publicly available datasets, reports, and studies based on a client’s company and industry context\n- Systematically analyzes target industries and retrieves high-quality insights from trusted public data sources and recently published research\n- Generates data-driven story ideas, including suggested headlines, tags, and concise summaries of key findings\n- Delivered as an interactive dashboard using **Streamlit**, enabling users to search by company or topic and instantly surface relevant research insights\n- Significantly reduced manual research effort by automating data discovery, filtering, and synthesis of high-potential PR opportunities\n- Improved DPR workflow efficiency by centralizing research, idea generation, and story tracking in a single platform`,
        gallery: ['/projects/dpr-idea-2.png'],
      },
      {
        title: "Project Three",
        short: "Customer segmentation analysis.",
        industry: "Healthcare",
        image: null,
        tags: ["Python", "Pandas"],
        description: `Detailed description of Project Three.\n\nWhat problem did you solve? What was the result?`,
        gallery: [],
      },
    ],
  },
};
