import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-gray-900">
            Mon Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("projets")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("formation")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Formation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("projets")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("formation")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Formation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
