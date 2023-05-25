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
    details: "JavaScript, TypeScript, Node.js, Python, Java, Go, C, C++",
  },
  {
    section: "Library and Frameworks:",
    details:
      "React, Next, TailwindCSS, MaterialUI, NestJS, GraphQL, GORM, Gin, JavaFX, PyThaiNLP, NumPy, Pandas",
  },
  {
    section: "Tools:",
    details: "Git, GitHub, Visual Studio, Markdown, LaTeX",
  },
  {
    section: "IaaS, PaaS:",
    details: "Vercel, Cloudflare, Azure",
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
    name: "5th ChAMP Software Engineering Track (2023)",
    details:
      "Mentorship program for engineering students who strives to be software engineers.",
  },
  {
    name: "JSCCE 2023 (The 20th International Joint Conference on Computer Science and Software Engineering)",
    details: "I published a paper about Thai misspelling correction.",
  },
  // {
  //   name: "19th Young Webmaster Camp (2023)",
  //   details:
  //     "Thailand's largest annual web bootcamp. I joined the web programming major.",
  // },
  {
    name: "2th AI Builders Programs (2022)",
    details:
      "8-week program where designated mentors help manifesting ideas into machine learning projects, I made a Natural Language Processing project on Thai words correction.",
  },
];

export const projects = [
  {
    name: "Lyrics2Anki",
    details: "Makes Japanese Anki cards from ANY Spotify lyrics",
    url: "lyrics2anki.vercel.app",
  },
  {
    name: "bookpanda.dev",
    details: "My personal website as gallery for my projects and resume.",
    url: "bookpanda.dev",
  },
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
    name: "PraeAksornSimulator",
    details: "JavaFX game about simulating card stunts (Prae Aksorn).",
    url: "github.com/bookpanda/PraeAksornSimulator",
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
    name: "Two-stage Thai Misspelling Correction Based on Pre-trained Language Models",
    details: "NLP project using WanchanBERTa to correct misspelled Thai words.",
    url: "github.com/bookpanda/Two-stage-Thai-Misspelling-Correction-Based-on-Pre-trained-Language-Models",
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

export const interests = ["Japanese language", "Playing the guitar"];
