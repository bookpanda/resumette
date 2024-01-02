export const fullVersionLink = "https://resume.bookpanda.dev";
export const sourceLink = "https://github.com/bookpanda/resumette";

export const introData = {
  name: "Idhibhat Pankam",
  nickname: "Margin",
  phone: import.meta.env.DEV ? import.meta.env.VITE_PHONE : "",
  email: import.meta.env.DEV ? import.meta.env.VITE_EMAIL : "",
  github: "bookpanda",
  linkedin: "idhibhat-pankam",
  location: "Bangkok, Thailand",
  website: "bookpanda.dev",
};

export const technologies = [
  {
    section: "Languages",
    details: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Go",
      "Python",
      "Java",
      "C++",
      "Bash",
      "SQL",
    ],
  },
  {
    section: "Frontend",
    details: ["React", "Nextjs", "tailwindcss", "shadcnUI", "materialUI"],
  },
  {
    section: "Backend",
    details: [
      "Nestjs",
      "gin",
      "gorm",
      ".NET",
      "NUnit",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "DynamoDB",
      "Lambda",
    ],
  },
  {
    section: "Technologies",
    details: [
      "REST",
      "GraphQL",
      "gRPC",
      "CI/CD",
      "microservices",
      "clean architecture",
      "TDD",
      "system design",
    ],
  },
  {
    section: "Tools",
    details: [
      "Git",
      "Docker",
      "Postman",
      "Portainer",
      "Grafana",
      "Jira",
      "Confluence",
    ],
  },
  {
    section: "IaaS, PaaS",
    details: ["AWS", "Azure", "Vercel", "Cloudflare", "Contabo"],
  },
];

export const educations = [
  {
    head: "Chulalongkorn University",
    details:
      "B.Eng. Computer Engineering, 2022-Present (Expected May 2026) (GPAX 3.94)",
  },
  {
    head: "Suankularb Wittayalai School",
    details: "Gifted, 2016-2022 (GPAX 3.99)",
  },
];

export const workExperiences = [
  {
    position: "Fullstack Software Engineer Intern",
    company: "Agoda",
    url: "https://careersatagoda.com/",
    years: ["June 2023", "October 2023"],
    details: [
      "Technologies used: React, TypeScript, .NET, SQL, GitLab",
      "Experimented with new features using A/B testing, measurements, and element usage tracking",
      "Created real-time dashboards for monitoring user behavior (Grafana, Superset (SQL))",
      "Wrote unit tests for both frontend and backend tasks (Jest, NUnit)",
      "Worked in a team of 4-5 people using Agile methodology (Scrum)",
    ],
  },
];

export const awards = [
  {
    name: "19th Young Webmaster Camp (2023)",
    details:
      "Thailand's largest annual web bootcamp. I joined the web programming major and collaborated with people from design, marketing, and content majors to pitch a bussiness model.",
  },
  {
    name: "JSCCE 2023 (The 20th International Joint Conference on Computer Science and Software Engineering) (2023)",
    details:
      "I published 'Two-stage Thai Misspelling Correction based on Pre-trained Language Models'. At the conference, I won the Best Presentation Award.",
  },
  {
    name: "5th ChAMP Software Engineering Track (2023)",
    details:
      "Mentorship program for engineering students who strives to be software engineers.",
  },
  {
    name: "2th AI Builders Programs (2022)",
    details:
      "8-week program where designated mentors help manifesting ideas into machine learning projects, I made a Natural Language Processing project on Thai words correction.",
  },
];

export const projects = [
  {
    name: "Problems Rating Web App",
    stack:
      "golang, gRPC, microservices, clean-architecture, redis, mysql, Reactjs, TypeScript",
    details: "University DSA grader problems rating app",
    url: "mygraderlist.bookpanda.dev",
    github: "github.com/bookpanda/mygraderlist",
  },
  {
    name: "Twitter Bot",
    stack: "golang, AWS DynamoDB, AWS Lambda",
    details: "Serverless cron-job that tweets random quotes from a database",
    url: "twitter.com/snappingthought",
    github: "github.com/bookpanda/snapping-thoughts",
  },
  {
    name: "Spotify Lyrics to Anki Cards Web App",
    stack:
      "Reactjs, TypeScript, tailwindcss, AWS Lambda, Spotify API, Azure Translator",
    details:
      "Makes Japanese Anki cards from ANY Spotify lyrics via word tokenization and translation",
    url: "lyrics2anki.bookpanda.dev",
    github: "github.com/bookpanda/Lyrics2Anki",
  },
  {
    name: "AutoPraeAksorn",
    stack: "Reactjs, TypeScript, materialUI, flask, pillow",
    details:
      "Automatically turns images into card stunts, inspired by Jaturamitr card stunts",
    url: "auto-prae-aksorn-client.vercel.app",
    github: "github.com/bookpanda/AutoPraeAksorn",
  },
  {
    name: "bookpanda.dev",
    stack: "Reactjs, TypeScript, materialUI, graphQL",
    details: "My personal website as gallery for my projects and resume",
    url: "bookpanda.dev",
    github: "github.com/bookpanda/bookpanda.dev",
  },
  {
    name: "PraeAksornSimulator",
    stack: "Java, JavaFX",
    details: "Game project about simulating card stunts in a football match",
    url: "",
    github: "github.com/bookpanda/PraeAksornSimulator",
  },
];

export const certs = [];

export const interests = [
  "Japanese language: Proficiency level N4 (Japanese fundamentals)",
  "Playing the guitar",
];
