export const fullVersionLink = "https://resume.bookpanda.dev";
export const sourceLink = "https://github.com/bookpanda/resumette";
import { default as cloudPractitioner } from "./certs/cloud-practitioner.png";

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
      "Go",
      "C#",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      "C++",
      "SQL",
      "日本語 (N3)",
    ],
  },
  {
    section: "Fullstack",
    details: [
      "React",
      "Redux",
      "tailwindcss",
      "shadcnUI",
      "ASP.NET",
      "gin",
      "GORM",
      "Redis",
      "S3",
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
      "JWT",
      "OAuth",
      "caching",
    ],
  },
  {
    section: "IaaS, PaaS",
    details: ["AWS", "Docker", "Kubernetes", "Vercel", "Cloudflare", "Contabo"],
  },
  {
    section: "Tools",
    details: ["Git", "Postman", "DBeaver", "Portainer", "Lens", "Grafana"],
  },
];

export const educations = [
  {
    head: "Chulalongkorn University",
    details:
      "B.Eng. Computer Engineering, 2022-Present (Expected May 2026) (GPAX 3.91)",
  },
];

export const workExperiences = [
  {
    position: "Fullstack Software Engineer Intern",
    company: "Agoda",
    url: "https://careersatagoda.com/",
    years: ["June 2023", "October 2023"],
    details: [
      "Technologies used: React, Redux, TypeScript, Jest, .NET, NUnit, MSSQL, Grafana",
      "Experimented with new features using A/B testing, measurements, and element tracking for thousands of users",
      "Delivered features that serve tens of thousands of property owners",
      "Created real-time dashboards for monitoring user behavior using Grafana, Superset (SQL)",
    ],
  },
  {
    position: "Backend Software Engineer Intern",
    company: "Agoda",
    url: "https://careersatagoda.com/",
    years: ["June 2023", "July 2023"],
    details: [
      "Technologies used: GitLab Actions, Nginx, Scala, Play Framework, MSSQL",
      "Migrated Finance Backoffice (internal tool) to PrivateCloud (internal cloud)",
      "Sped up the image build process by 50% by optimizing the Dockerfile",
      "Migrated Generic Adjustment (internal tool) scenarios data source from Hadoop to MSSQL",
    ],
  },
];

export const activities = [
  {
    name: "Information System Development, Student Government (Dec 2023-present)",
    details:
      "Working as backend developer in a team of 4-5 people for the university.",
  },
  {
    name: "JSCCE 2023 (The 20th International Joint Conference on Computer Science and Software Engineering) (2023)",
    details:
      "Published 'Two-stage Thai Misspelling Correction based on Pre-trained Language Models', won the Best Presentation Award at the conference.",
  },
];

export const projects = [
  {
    name: "Pet Adoption Web App (Backend)",
    stack: "Go, fiber, gRPC, Redis, PostgreSQL",
    details: "Contributed to the Animal Welfare Club 'Johnjud' app",
    url: "github.com/isd-sgcu/johnjud-gateway",
    github: "github.com/isd-sgcu/johnjud-backend",
  },
  {
    name: "Problems Rating Web App",
    stack: "Go, fiber, gRPC, Redis, MySQL, React, TypeScript",
    details: "University DSA grader problems rating app",
    url: "mygraderlist.bookpanda.dev",
    github: "github.com/bookpanda/mygraderlist",
  },
  {
    name: "Twitter Bot",
    stack: "Go, DynamoDB, Lambda",
    details: "Serverless cron-job that tweets random quotes from a database",
    url: "twitter.com/snappingthought",
    github: "github.com/bookpanda/snapping-thoughts",
  },
  {
    name: "Spotify Lyrics to Anki Cards Web App",
    stack: "React, TypeScript, Lambda, Python, Spotify API, Azure Translator",
    details:
      "Makes Japanese Anki cards from ANY Spotify lyrics by tokenization and translation",
    url: "lyrics2anki.bookpanda.dev",
    github: "github.com/bookpanda/Lyrics2Anki",
  },
  {
    name: "AutoPraeAksorn",
    stack: "React, TypeScript, materialUI, flask, pillow",
    details:
      "Turns images into card stunts, inspired by Jaturamitr card stunts",
    url: "auto-prae-aksorn-client.vercel.app",
    github: "github.com/bookpanda/AutoPraeAksorn",
  },
  {
    name: "bookpanda.dev",
    stack: "React, TypeScript, materialUI, graphQL",
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

export const certs = [
  {
    image: cloudPractitioner,
    url: "https://www.credly.com/badges/3cc5547a-7c07-46a7-817f-7cd346df3c7e/public_url",
  },
];
