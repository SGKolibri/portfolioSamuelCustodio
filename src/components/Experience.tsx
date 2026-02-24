import ExperienceCard from "./ExperienceCard";
import AnimatedSection from "./ui/AnimatedSection";

function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Fullstack",
      company: "Aionz",
      location: "Anápolis, GO",
      period: "Jul 2025 - Dez 2025",
      isHighlighted: true,
      achievements: [
        "Desenvolvi features completas em aplicação SaaS Multi-tenant, implementando arquitetura escalável com NestJS e PostgreSQL",
        "Aumentei a reutilização de componentes criando biblioteca de componentes documentados com Storybook seguindo padrões de Design System",
        "Otimizei performance de queries refatorando consultas PostgreSQL complexas e implementando índices estratégicos",
        "Reduzi bugs em produção aplicando princípios SOLID e implementando testes unitários do código crítico",
      ],
    },
    {
      title: "Analista de Qualidade",
      company: "SoftNews (Estágio)",
      location: "Anápolis, GO",
      period: "Nov 2024 - Jul 2025",
      achievements: [
        "Validei migrações de bancos de dados utilizando Interactive SQL para verificar integridade e consistência de dados",
        "Reduzi tempo de validação desenvolvendo scripts automatizados de verificação",
        "Diminuí retrabalho implementando checklist padronizado de validação",
      ],
    },
    {
      title: "Desenvolvedor Fullstack Estagiário",
      company: "Fábrica de Tecnologias Turing (FTT)",
      location: "Anápolis, GO",
      period: "Abr 2023 - Jun 2025",
      achievements: [
        "Entreguei projetos completos end-to-end desenvolvendo APIs RESTful com Node.js e interfaces responsivas com React.js",
        "Acelerei desenvolvimento implementando arquitetura modular com TypeScript e componentes reutilizáveis",
        "Aumentei estabilidade implementando testes automatizados (Jest) e pipelines CI/CD",
        "Otimizei experiência do usuário aplicando técnicas de otimização (code splitting, lazy loading) e Redux",
      ],
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-20"
      style={{ backgroundColor: "var(--bg-section-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            Experiência Profissional
          </h2>
        </AnimatedSection>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ExperienceCard {...exp} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
