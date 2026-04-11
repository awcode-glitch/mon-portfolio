import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mohamed Aboubacar Aw</h3>
            <p className="text-gray-400">
              Étudiant en Genie logiciel et Systeme d'information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                Dakar  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#projets"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/awcode-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-aboubacar-aw-790603321"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:maw106277@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
