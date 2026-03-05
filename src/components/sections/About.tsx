import { MapPin, Award } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import ScrollReveal from "../reactbits/ScrollReveal";

function About() {
  return (
    <section
      id="sobre"
      className="py-20"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            Sobre Mim
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.1}>
            <div>
              <div className="mb-6" style={{ color: "var(--text-secondary)" }}>
                <ScrollReveal
                  enableBlur
                  baseOpacity={0.15}
                  blurStrength={3}
                  baseRotation={2}
                  textClassName="text-lg leading-relaxed"
                  containerClassName="!m-0"
                >
                  Sou estudante de Engenharia de Software na Universidade
                  Evangélica de Goiás, com previsão de conclusão em dezembro de
                  2026. Atualmente trabalho como Desenvolvedor Fullstack na
                  Aionz, onde desenvolvo features completas para aplicações SaaS
                  Multi-tenant.
                </ScrollReveal>
              </div>
              <div className="mb-6" style={{ color: "var(--text-secondary)" }}>
                <ScrollReveal
                  enableBlur
                  baseOpacity={0.15}
                  blurStrength={3}
                  baseRotation={2}
                  textClassName="text-lg leading-relaxed"
                  containerClassName="!m-0"
                >
                  Minha experiência inclui desenvolvimento de APIs RESTful
                  robustas, interfaces responsivas e otimização de performance
                  em aplicações de alto volume. Sou certificado AWS Cloud
                  Practitioner e tenho grande interesse em arquitetura de
                  software e IA.
                </ScrollReveal>
              </div>
              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <MapPin size={20} style={{ color: "var(--accent-primary)" }} />
                  <span>Anápolis, GO</span>
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Award size={20} style={{ color: "var(--accent-primary)" }} />
                  <span>AWS Certified</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "var(--highlight-bg)",
                color: "var(--highlight-text)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--highlight-text)" }}
              >
                Destaques
              </h3>
              <ul className="space-y-4">
                {[
                  "Desenvolvimento de aplicações SaaS Multi-tenant escaláveis",
                  "Otimização de queries PostgreSQL complexas",
                  "Implementação de pipelines CI/CD e testes automatizados",
                  "Criação de Design Systems com Storybook",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "var(--highlight-text)" }}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
