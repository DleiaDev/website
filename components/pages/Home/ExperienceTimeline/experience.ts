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
    company: "Company A",
    highlights: ["Developed this", "Developed that"],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
  },
  {
    year: 2019,
    role: "Junior Engineer",
    company: "Company B",
    highlights: [
      "Developed this",
      "Developed that",
      "Integrated this and this",
    ],
    tags: ["PHP", "Laravel", "MySQL", "jQuery", "Git"],
  },
  {
    year: 2020,
    role: "Full-Stack Engineer",
    company: "Company C",
    highlights: [
      "Developed this",
      "Developed that",
      "Some more lines",
      "Some more lines",
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "E2E Testing"],
  },
  {
    year: 2022,
    role: "Full-Stack Engineer (Client-Facing)",
    company: "Company D",
    highlights: [
      "Developed this",
      "Developed that",
      "Some more lines",
      "Some more lines",
    ],
    tags: ["Next.js", "GraphQL", "Tailwind CSS", "Client Communication"],
  },
  {
    year: 2023,
    role: "Lead Engineer",
    company: "Company E",
    highlights: [
      "Developed this",
      "Developed that",
      "Some more lines",
      "Some more lines",
    ],
    tags: ["Team Leadership", "Code Review", "CI/CD", "Docker", "AWS"],
  },
  {
    year: 2025,
    role: "Cloud Software Engineer",
    company: "Company F",
    highlights: [
      "Developed this",
      "Developed that",
      "Some more lines",
      "Some more lines",
    ],
    tags: ["AWS", "Terraform", "Kubernetes", "Serverless", "Observability"],
  },
];
