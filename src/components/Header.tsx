function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-900">
            SC
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#sobre"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#experiencia"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Experiência
            </a>
            <a
              href="#habilidades"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
