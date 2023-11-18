export const fullVersionLink = "https://resumette-five.vercel.app/";
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
    section: "Languages:",
    details: "JavaScript, TypeScript, Node.js, Go, Python, Java, C++",
  },
  {
    section: "Library and Frameworks:",
    details: "React, Nextjs, tailwindcss, Nestjs, graphQL, gorm, gin, gRPC",
  },
  {
    section: "Tools:",
    details: "Git, GitHub, Docker",
  },
  {
    section: "IaaS, PaaS:",
    details: "Vercel, Cloudflare, Azure, Contabo",
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
    years: ["June, 2023", "October, 2023"],
    details: [
      "Technologies used: React, TypeScript, .NET, SQL, GitLab",
      "Experiemented new features using A/B testing, measurements, and element usage tracking",
      "Created real-time dashboards for monitoring user behavior (Grafana, Superset (SQL))",
      "Wrote unit tests for both frontend and backend tasks (Jest, NUnit)",
      "Worked in a team of 4-5 people by using Agile methodology (Scrum)",
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
    name: "MyGraderList",
    stack:
      "golang, gRPC, microservices, clean-architecture, redis, mysql, Reactjs, TypeScript",
    details: "University DSA grader problems rating app",
    url: "mygraderlist.bookpanda.dev",
    github: "github.com/bookpanda/mygraderlist",
  },
  {
    name: "Lyrics2Anki",
    stack: "Reactjs, TypeScript, tailwindcss, flask, Spotify API, Azure",
    details:
      "Makes Japanese Anki cards from ANY Spotify lyrics via word tokenization.",
    url: "lyrics2anki.vercel.app",
    github: "github.com/bookpanda/Lyrics2Anki",
  },
  {
    name: "AutoPraeAksorn",
    stack: "Reactjs, TypeScript, materialUI, flask, pillow",
    details:
      "Automatically turns images into card stunts, inspired by Jaturamitr card stunts.",
    url: "auto-prae-aksorn-client.vercel.app",
    github: "github.com/bookpanda/AutoPraeAksorn",
  },
  {
    name: "salad-croissant-kurikkaa",
    stack: "Nestjs, redis, postgresql, webSocket, Reactjs, TypeScript",
    details: "Experimental real-time multiplayer clicker app using.",
    url: "salad-croissant-kurikkaa.vercel.app",
    github: "github.com/bookpanda/salad-croissant-kurikkaa",
  },
  {
    name: "bookpanda.dev",
    stack: "Reactjs, TypeScript, materialUI, graphQL",
    details: "My personal website as gallery for my projects and resume.",
    url: "bookpanda.dev",
    github: "github.com/bookpanda/bookpanda.dev",
  },
  {
    name: "PraeAksornSimulator",
    stack: "Java, JavaFX",
    details: "Game project about simulating card stunts in a football match.",
    url: "",
    github: "github.com/bookpanda/PraeAksornSimulator",
  },
];

export const certs = [
  {
    name: "156/180 score on JLPT N4 exam (taken in 2023)",
    details:
      "Japanese Language Proficiency Test in N4 level (Japanese fundamentals)",
  },
  {
    name: "7.5/9 score on IELTS exam (taken in 2021)",
    details:
      "International English Language Testing System, getting a 7-8 score means being a good user who has operational command of the language, though with occasional inaccuracies.",
  },
];

export const interests = ["Japanese language", "Playing the guitar"];
