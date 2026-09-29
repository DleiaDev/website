export type Experience = {
  year: number;
  role: string;
  company: string;
  highlights: string[];
  // Skills used on the job
  tags: string[];
};

// Placeholder content, ordered oldest to newest
export const EXPERIENCE: Experience[] = [
  {
    year: 2018,
    role: "Freelance Web Developer",
    company: "",
    highlights: [
      "Learned how to get clients",
      "Worked on many websites with vanilla JS on front-end and PHP on back-end",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
  },
  {
    year: 2019,
    role: "Junior Engineer",
    company: "Zyrgon Network Group",
    highlights: [
      "Built a reusable front-end calendar library with vanilla JS",
      "Built a WordPress plugin that serves an app for multi-step hotel booking",
      "Integrated PayPal, cryptocurrency and ATM payment options",
    ],
    tags: [
      "WordPress",
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Git",
      "HTML",
      "CSS",
    ],
  },
  {
    year: 2020,
    role: "Front-end Engineer",
    company: "Fintech Market",
    highlights: [
      "Migrated entire application from Vue 2 to Vue 3",
      "Resolved 80% of front-end related tickets that have accumulated over 4 years in 6 months",
      "Increased client happiness with a documentation search that searches across all Markdown files",
      "Mentored junior front-end developers",
      "Updated 5 year old libraries to their latest versions",
    ],
    tags: [
      "Vue.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Git",
      "Unit testing",
      "E2E testing",
    ],
  },
  {
    year: 2022,
    role: "Full-stack Engineer (client facing)",
    company: "Great Agency Inc.",
    highlights: [
      "Facilitated working on prospects by building a “comment thread” for posting comments and attaching files",
      "Reduced data duplication by building a tool to merge duplicate entries of a client",
      "Built insurance forms as they are in PDFs without requiring users to learn new UI",
      "Provided quick access to all data in a database with “search as you type” global search",
    ],
    tags: [
      "Vue.js",
      "TypeScript",
      "Python",
      "Node.js",
      "MySQL",
      "Git",
      "Unit testing",
      "E2E testing",
    ],
  },
  {
    year: 2023,
    role: "Lead Engineer",
    company: "Great Agency Inc.",
    highlights: [
      "Led a team of 4 to design, develop and test features for our client",
      "Reduced deployment time by 60% by caching dependencies in an in-house Docker image",
      "Eliminated data losses with “save as you type” forms",
      "Built a customer ACH intake form meeting PII standards via encryption, access controls, and data minimization.",
      "Moved all company documents to AWS S3 by building a custom document upload module",
      "Developed user friendly form validation, allowing new users to learn the software more quickly",
      "Built graphical visualizations of MySQL data with data filtering that significantly increased data visibility",
    ],
    tags: ["Team Leadership", "SDLC", "Code Review", "CI/CD", "Docker", "AWS"],
  },
  {
    year: 2025,
    role: "Senior Cloud Engineer",
    company: "Auvaria",
    highlights: [
      "Designed and developed an automated invoicing pipeline for AWS cloud reselling, saving CEO 22+ hours/month",
      "Constructed scalable and cost-effective AWS infrastructure for clients, reducing bill for each client on average by 15%",
      "Built and presented data analysis and AI PoCs for clients with a 1/5 go-to-production conversion rate",
      "Cut deploys from days to <1h for 12 teams via standard CI/CD, IaC modules and observability; MTTR down 60%",
      "Ended peak outages by moving on-prem monolith to multi-AZ AWS ECS (Terraform): 99.95% uptime, -30% cost",
    ],
    tags: [
      "AWS",
      "Terraform",
      "Terragrunt",
      "Python",
      "Node.js",
      "TypeScript",
      "Agentic coding",
    ],
  },
];
