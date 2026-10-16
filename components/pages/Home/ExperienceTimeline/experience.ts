export type Experience = {
  year: number;
  role: string;
  company: string;
  highlights: string[];
  // Skills used on the job
  tags: string[];
};

// Ordered newest to oldest
export const EXPERIENCE: Experience[] = [

  {
    year: 2025,
    role: "Senior Software Engineer",
    company: "Auvaria",
    highlights: [
      "Designed and developed a Python invoicing pipeline for AWS cloud reselling, saving CEO 25+ hours/month",
      "Built AWS cloud reselling platform end to end with Python, Go and AWS integrations, used by 70+ clients",
      "Joined AWS Billing Transfer beta; built and tested automations, delivering product feedback to Amazon",
      "Constructed scalable and cost-effective AWS infrastructure for clients, reducing bill for each client on average by 15%",
      "Helped 3 teams replace manual releases with CI/CD pipelines (GitHub Actions) which cut deploys from ~1 day to ~2h",
      "Automated onboarding clients into an AWS Billing Transfer by automatically creating accounts and resources",
      "Delivered client-specific RAG prototypes that showed business value of generative AI and supported presales efforts",
    ],
    tags: [
      "AWS",
      "Python",
      "Go",
      "Terraform",
      "Terragrunt",
      "GitHub Actions",
      "RAG",
      "Agentic coding",
    ],
  },
  {
    year: 2023,
    role: "Senior Software Engineer",
    company: "Great Agency Inc.",
    highlights: [
      "Led a team of 4 to design, develop, test, deploy and maintain feature-rich insurance platform on AWS",
      "Reduced deployment time by 60% by caching dependencies in an in-house Docker image and deploying to AWS ECS",
      "Led an effort to build a customer ACH intake form meeting PII standards via AWS KMS encryption and ACL",
      "Planned, designed and led execution of a migration of all company documents to AWS S3 with lifecycle rules",
    ],
    tags: ["Team Leadership", "SDLC", "Code Review", "CI/CD", "Docker", "AWS"],
  },
  {
    year: 2020,
    role: "Software Engineer",
    company: "Great Agency Inc.",
    highlights: [
      "Migrated production from AWS Elastic Beanstalk to AWS ECS",
      "Automated deployments to AWS ECS with Docker, Terraform and GH Actions",
      "Facilitated working on prospects by building a “comment thread” for posting comments and attaching files",
      "Built interactive PostgreSQL data visualizations with sorting, filtering and chart export",
      "Eliminated data losses with “save as you type” forms with request debouncing and backoff",
      "Built a global “search as you type” search for quick access to all the data on the platform",
      "Reduced data duplication by building a tool to merge duplicate entries of a client",
      "Embedded PDF insurance forms into the platform so users don’t have to learn new UI in order to use them",
      "Developed user-friendly forms validation by making the form give constructive error messages to the user",
    ],
    tags: [
      "Vue.js",
      "TypeScript",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    year: 2019,
    role: "Full-stack Engineer",
    company: "Zyrgon Network Group",
    highlights: [
      "Built and deployed landing pages on on-prem CentOS servers for Portuguese businesses",
      "Built a WordPress plugin that serves an app for multi-step hotel booking",
      "Integrated PayPal, cryptocurrency and ATM payment options",
      "Built a reusable front-end calendar library with vanilla JS",
    ],
    tags: [
      "WordPress",
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Linux",
      "Git",
      "HTML",
      "CSS",
    ],
  },
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
];
