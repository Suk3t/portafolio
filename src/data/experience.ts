export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experience: Record<"es" | "en", Experience[]> = {
  es: [
    {
      role: "Desarrollador Full Stack",
      company: "Empresa Placeholder",
      period: "2025 - Presente",
      description:
        "Descripción de tus principales responsabilidades, aportes al equipo y resultados obtenidos durante este periodo.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      role: "Desarrollador Frontend",
      company: "Organización Placeholder",
      period: "2024 - 2025",
      description:
        "Descripción de los productos en los que trabajaste, desafíos técnicos y mejoras que implementaste.",
      technologies: ["Astro", "React", "CSS"],
    },
    {
      role: "Práctica Profesional",
      company: "Estudio Placeholder",
      period: "2023 - 2024",
      description:
        "Descripción de tu experiencia inicial, aprendizajes y proyectos en los que participaste.",
      technologies: ["JavaScript", "Git", "Figma"],
    },
  ],
  en: [
    {
      role: "Full Stack Developer",
      company: "Placeholder Company",
      period: "2025 - Present",
      description:
        "Description of your main responsibilities, team contributions, and results achieved during this period.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      role: "Frontend Developer",
      company: "Placeholder Organization",
      period: "2024 - 2025",
      description:
        "Description of the products you worked on, technical challenges, and improvements you implemented.",
      technologies: ["Astro", "React", "CSS"],
    },
    {
      role: "Professional Internship",
      company: "Placeholder Studio",
      period: "2023 - 2024",
      description:
        "Description of your initial experience, lessons learned, and projects you contributed to.",
      technologies: ["JavaScript", "Git", "Figma"],
    },
  ],
};
