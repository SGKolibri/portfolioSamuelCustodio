import { MapPin, Award } from "lucide-react";

function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Sou estudante de Engenharia de Software na Universidade
              Evangélica de Goiás, com previsão de conclusão em dezembro de
              2026. Atualmente trabalho como Desenvolvedor Fullstack na
              Aionz, onde desenvolvo features completas para aplicações SaaS
              Multi-tenant.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Minha experiência inclui desenvolvimento de APIs RESTful
              robustas, interfaces responsivas e otimização de performance
              em aplicações de alto volume. Sou certificado AWS Cloud
              Practitioner e tenho grande interesse em arquitetura de
              software e IA.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span>Anápolis, GO</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Award size={20} className="text-blue-600" />
                <span>AWS Certified</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Destaques</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>
                  Desenvolvimento de aplicações SaaS Multi-tenant escaláveis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Otimização de queries PostgreSQL complexas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>
                  Implementação de pipelines CI/CD e testes automatizados
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Criação de Design Systems com Storybook</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
