import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
      value: "(62) 93504-7887",
      href: "tel:+5562935047887",
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
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Entre em Contato
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-center text-gray-600 mb-8">
            Estou sempre aberto a discutir novos projetos, oportunidades e
            colaborações.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  {...(method.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Icon
                      className="text-blue-600 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{method.label}</p>
                    <p className="text-gray-600 text-sm">{method.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
