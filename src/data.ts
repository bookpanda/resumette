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
  website: "",
};

export const technologies = [
  {
    section: "Languages:",
    details: "JavaScript, TypeScript, Node.js, Python, C, C++, Java",
  },
  {
    section: "Library and Frameworks:",
    details:
      "React, Next, Bootstrap, TailwindCSS, MaterialUI, NestJS, GraphQL, Laravel, discord.js, PyThaiNLP, HuggingFace, scikit-learn, NumPy, Pandas",
  },
  {
    section: "Tools:",
    details: "Git, GitHub, Visual Studio, Markdown, LaTeX",
  },
  {
    section: "IaaS, PaaS:",
    details: "Vercel, Cloudflare",
  },
];

export const educations = [
  {
    head: "Suankularb Wittayalai School (Middle School)",
    details: "Gifted, 2016-2019 (GPAX 3.99)",
  },
  {
    head: "Suankularb Wittayalai School (High School)",
    details: "Gifted, 2019-2022 (GPAX 3.99)",
  },
  {
    head: "Chulalongkorn University",
    details:
      "B.Eng. Computer Engineering, 2022-Present (Expected May 2026) (GPAX 3.91)",
  },
];

export const workExperiences = [{}];

export const awards = [
  {
    name: "1st Place & Gold Medal Award in the 16th Thailand Olympiad in Informatics (2020)",
    details:
      "Thailand's annual national competition for computer science problems where nearly 100 selected participants come to solve algorithmic puzzles. Winning a medal can guarantee acceptance into almost every Thai university.",
  },
  {
    name: "IPST Camp 1 (2021)",
    details:
      "Selection Camp for finding IOI representatives of Thailand, made it to the selection round with 25 people.",
  },
  {
    name: "Silver Medal Award in Thailand Computing Olympiad (2020)",
    details:
      "A pre-test for the 16th Thailand Olympiad in Informatics, involving computer science problems and many algorithms.",
  },
  {
    name: "2th AI Builders Programs (2022)",
    details:
      "8-week program where designated mentors help manifesting ideas into machine learning projects, I made a Natural Language Processing project on Thai words correction.",
  },
  {
    name: "22th Larngear Camp (2023)",
    details:
      "Introduction camp to the world of Engineering for highschool students, organized by the Faculty of Engineering, Chulalongkorn University. I volunteered as staff.",
  },
  {
    name: "1st and 3rd Find Myself Camp (2019, 2023)",
    details:
      "Activity Camp for grade 9 students to kindle their journey to find their paths and passions. I volunteered as staff in the 1st camp and as organizer in the 3rd.",
  },
  {
    name: "Dare to Speak Camp (2020)",
    details:
      "Activity Camp for middle schoolers to improve their confidence in public speaking. I volunteered as organizer.",
  },
];

export const projects = [
  {
    name: "Intania Department Calculator",
    details:
      "Calculates your grades to assess your chance of getting into desired engineering department.",
    url: "intania-department-calculator.vercel.app",
  },
  {
    name: "AutoPraeAksorn",
    details:
      "Automatically turns images into card stunts (Prae Aksorn), inspired by Jaturamitr card stunts.",
    url: "auto-prae-aksorn-client.vercel.app",
  },
  {
    name: "AniTimeline",
    details:
      "A webapp that shows data from the AniList's public API by user's ID.",
    url: "ani-timeline-client.vercel.app",
  },
  {
    name: "Thai2Kana",
    details:
      "A program that tries to convert the Thai language into Katakana script using Wanakana and PyThaiNLP libraries.",
    url: "thai2-kana-client.vercel.app",
  },
  {
    name: "Thinc's 1-week Hack to School Project (Frontend)",
    details:
      "Make an education platform app within a week. My job in the team was making frontend.",
    url: "kita.cunny.dev",
  },
  {
    name: "Thinc's 10-day Project (Frontend)",
    details:
      "Make a group project within 10 days. My team made a productivity app for creating tasks and doing pomodoro (I made the frontend).",
    url: "github.com/Leomotors/producktivity",
  },
  {
    name: "WanchanBERTa-Thai-Grammarly",
    details:
      "NLP project using WanchanBERTa to correct misspelled Thai words. Dataset used is VISTEC-TP-TH-2021 dataset.",
    url: "github.com/bookpanda/WanchanBERTa-Thai-Grammarly",
  },
];

export const certs = [
  {
    name: "7.5/9 score on IELTS exam (taken in 2021)",
    details:
      "International English Language Testing System, getting a 7-8 score means being a good user who has operational command of the language, though with occasional inaccuracies.",
  },
  {
    name: "106/120 score on CU-TEP exam (taken in 2020)",
    details:
      "Chulalongkorn University Test of English Proficiency, getting 92-106 scores means being an advanced user.",
  },
];

export const interests = [
  "Areas: Japanese Language, Anime, Geopolitics, Geography, 20th History",
  "Games: RPG, strategy, sandbox games ",
];
