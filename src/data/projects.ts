export type Project = {
  n: string;
  name: string;
  desc: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    n: "01",
    name: "Paylocity Payroll",
    desc: "Payroll platform for Paylocity, a US employee benefits company.",
    stack: ["React", "React Query", "TypeScript", "RTL"],
    href: "https://www.paylocity.com/",
  },
  {
    n: "02",
    name: "GVC Gaesco",
    desc: "Financial platform for GVC Gaesco, a Spanish financial services company.",
    stack: ["React", "C#", "ASP.NET", "SQL Server", "TypeScript"],
    href: "https://gvcgaesco.es/es/inversion/",
  },
  {
    n: "03",
    name: "Native Flow",
    desc: "Multilingual communication platform powered by an AI translation engine.",
    stack: ["Next.js", "SignalR", "Mono-repo", "Material UI"],
    href: "https://native.tech/",
  },
  {
    n: "04",
    name: "Choreo",
    desc: "All-in-one platform to develop and manage APIs, integrations, and digital services.",
    stack: ["React", "GraphQL", "MSW", "RXJS", "Swagger UI"],
    href: "https://wso2.com/choreo/",
  },
  {
    n: "05",
    name: "Diabipal",
    desc: "Smart mobile app predicting diabetes and cardiovascular disease using ML and OCR.",
    stack: ["Ionic", "Python", "TensorFlow", "Keras", "Flask"],
    href: "#",
  },
];
