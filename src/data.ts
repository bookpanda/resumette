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
      "TypeScript",
      "Node.js",
      "Go",
      "Python",
      "Java",
      "C#",
      "C++",
      "SQL",
      "日本語 (N4)",
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
      "GORM",
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
    details: ["Git", "Docker", "Postman", "Portainer", "Grafana", "Jira"],
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
      "B.Eng. Computer Engineering, 2022-Present (Expected May 2026) (GPAX 3.91)",
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
      "Technologies used: React, Redux, TypeScript, Jest, .NET, NUnit, SQL, GitLab",
      "Experimented with new features using A/B testing, measurements, and element usage tracking",
      "Created real-time dashboards for monitoring user behavior (Grafana, Superset (SQL))",
      "Wrote unit tests for both frontend and backend tasks",
      "Worked in a team of 4-5 people using Agile methodology (Scrum)",
    ],
  },
];

export const activities = [
  {
    name: "Information System Development, Student Government (2023-present)",
    details:
      "Worked as backend developer in a team of 4-5 people for the university.",
  },
  {
    name: "19th Young Webmaster Camp (2023)",
    details:
      "Thailand's largest annual web bootcamp. Joined the web programming major and collaborated with people from design, marketing, and content majors to pitch a bussiness model.",
  },
  {
    name: "JSCCE 2023 (The 20th International Joint Conference on Computer Science and Software Engineering) (2023)",
    details:
      "Published 'Two-stage Thai Misspelling Correction based on Pre-trained Language Models', won the Best Presentation Award at the conference.",
  },
  {
    name: "5th ChAMP Software Engineering Track (2023)",
    details:
      "Mentorship program for engineering students who strives to be software engineers.",
  },
];

export const projects = [
  {
    name: "Problems Rating Web App",
    stack:
      "Go, gRPC, microservices, clean architecture, Redis, MySQL, React, TypeScript",
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
      "Makes Japanese Anki cards from ANY Spotify lyrics via word tokenization and translation",
    url: "lyrics2anki.bookpanda.dev",
    github: "github.com/bookpanda/Lyrics2Anki",
  },
  {
    name: "AutoPraeAksorn",
    stack: "React, TypeScript, materialUI, flask, pillow",
    details:
      "Automatically turns images into card stunts, inspired by Jaturamitr card stunts",
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
