import {
  Award,
  Code2,
  Database,
  Cloud,
  Terminal,
  Briefcase,
} from "lucide-react";
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend",
      skills:
        "React.js, Angular, Next.js, Redux, Tailwind CSS, HTML5, CSS3",
    },
    {
      icon: Terminal,
      title: "Backend",
      skills:
        "Node.js, NestJS, Express.js, FastAPI, APIs RESTful, GraphQL",
    },
    {
      icon: Database,
      title: "Bancos de Dados",
      skills: "PostgreSQL, MongoDB, Redis",
    },
    {
      icon: Cloud,
      title: "Cloud & IA",
      skills:
        "AWS (EC2, S3, RDS), RAG, LLMs, Embedding, Document Chunking",
    },
    {
      icon: Briefcase,
      title: "Ferramentas & DevOps",
      skills: "Git, Docker, CI/CD, Jest, Storybook",
    },
    {
      icon: Award,
      title: "Metodologias",
      skills: "Scrum, Agile, SOLID, Clean Architecture, TDD",
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Habilidades Técnicas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl text-center">
          <Award size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            AWS Certified Cloud Practitioner
          </h3>
          <p className="text-blue-100">
            Amazon Web Services - Dezembro 2025
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
