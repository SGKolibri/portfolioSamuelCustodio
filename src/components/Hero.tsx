import { Github } from "lucide-react";
import profileImage from "../assets/me.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={profileImage}
              alt="Samuel Custódio"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Samuel Custódio
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
            Desenvolvedor Web Full Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Especialista em criar soluções escaláveis com Node.js, React e
            PostgreSQL. AWS Certified Cloud Practitioner com experiência em
            arquitetura de software e CI/CD.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contato"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="https://github.com/SGKolibri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
