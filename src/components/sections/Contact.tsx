import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "samuelcustodioes@gmail.com",
      href: "mailto:samuelcustodioes@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(62) 99504-7887",
      href: "tel:+5562995047887",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/samuelcustodio",
      href: "https://linkedin.com/in/samuelcustodio",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SGKolibri",
      href: "https://github.com/SGKolibri",
      external: true,
    },
  ];

  return (
    <section
      id="contato"
      className="py-20"
      style={{ backgroundColor: "var(--bg-section-alt)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            Entre em Contato
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            className="p-8 rounded-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border-primary)",
            }}
          >
            <p
              className="text-center mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Estou sempre aberto a discutir novos projetos, oportunidades e
              colaborações.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ x: 4 }}
                    href={method.href}
                    {...(method.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--tag-bg)" }}
                    >
                      <Icon
                        style={{ color: "var(--accent-primary)" }}
                        size={24}
                      />
                    </div>
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {method.label}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
