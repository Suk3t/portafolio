export interface Project {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  github: string;
  accent: string;
}

export const projects: Record<"es" | "en", Project[]> = {
  es: [
    {
      title: "Proyecto Alpha",
      summary: "Aplicación web enfocada en resolver un problema cotidiano.",
      description:
        "Descripción extendida del proyecto. Aquí podrás explicar el problema, las decisiones técnicas, tu aporte y los resultados obtenidos.",
      technologies: ["Astro", "TypeScript", "CSS"],
      github: "https://github.com/",
      accent: "#7357ff",
    },
    {
      title: "Proyecto Beta",
      summary: "Plataforma colaborativa con una experiencia simple y rápida.",
      description:
        "Descripción extendida del proyecto. Este espacio sirve para detallar funcionalidades importantes y aprendizajes durante el desarrollo.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/",
      accent: "#ff6b57",
    },
    {
      title: "Proyecto Gamma",
      summary: "Dashboard para visualizar información y tomar decisiones.",
      description:
        "Descripción extendida del proyecto. Puedes incluir métricas, desafíos resueltos y enlaces relevantes para quien quiera conocer más.",
      technologies: ["Vue", "Express", "Docker"],
      github: "https://github.com/",
      accent: "#16a085",
    },
    {
      title: "Proyecto Delta",
      summary: "Herramienta digital diseñada para automatizar procesos.",
      description:
        "Descripción extendida del proyecto. Reemplaza este contenido con el contexto, alcance y principales logros de tu proyecto.",
      technologies: ["Next.js", "Python", "AWS"],
      github: "https://github.com/",
      accent: "#d68b18",
    },
  ],
  en: [
    {
      title: "Project Alpha",
      summary: "Web application focused on solving an everyday problem.",
      description:
        "Extended project description. Use this space to explain the problem, technical decisions, your contribution, and the results.",
      technologies: ["Astro", "TypeScript", "CSS"],
      github: "https://github.com/",
      accent: "#7357ff",
    },
    {
      title: "Project Beta",
      summary: "Collaborative platform with a simple and fast experience.",
      description:
        "Extended project description. This space is useful for detailing important features and lessons learned during development.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/",
      accent: "#ff6b57",
    },
    {
      title: "Project Gamma",
      summary: "Dashboard for visualizing information and making decisions.",
      description:
        "Extended project description. You can include metrics, solved challenges, and relevant links for anyone who wants to learn more.",
      technologies: ["Vue", "Express", "Docker"],
      github: "https://github.com/",
      accent: "#16a085",
    },
    {
      title: "Project Delta",
      summary: "Digital tool designed to automate processes.",
      description:
        "Extended project description. Replace this content with your project's context, scope, and main achievements.",
      technologies: ["Next.js", "Python", "AWS"],
      github: "https://github.com/",
      accent: "#d68b18",
    },
  ],
};
