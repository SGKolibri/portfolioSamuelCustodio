import {
  Award,
  Code2,
  Database,
  Cloud,
  Terminal,
  Briefcase,
} from "lucide-react";
import SkillCard from "./SkillCard";
import CertificationCard from "./CertificationCard";

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

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dezembro 2025",
      tags: ["Cloud Computing", "AWS Services", "Security"],
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

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certificações
          </h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
