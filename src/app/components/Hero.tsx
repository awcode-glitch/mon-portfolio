import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 text-lg">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Mohamed Aboubacar
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                Étudiant en Genie logiciel et systeme d'information
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionné par le Genie logiciel, je crée des
              expériences numériques innovantes et intuitives. Actuellement en
              Licence 2 Informatique, je recherche un Stage pour mai
              2026.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/CV_Av_Mohamed%20Aboubacar_Aw.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Voir le CV
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                Me contacter
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/awcode-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-aboubacar-aw-790603321"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:maw106277@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/MHDAW.jpeg"
                alt="Workspace"
                className="w-full h-[650px] object-cover object-cover"
                style={{ objectPosition: "100% 100%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
