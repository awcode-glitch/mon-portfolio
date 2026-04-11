import { ExternalLink } from "lucide-react";
import senagroImage from "../../assets/SENAGRO.jpeg";
import sunuAvenirImage from "../../assets/SunuAvenir.jpeg";
import sunuActuImage from "../../assets/SunuActu.jpeg";
import cImage from "../../assets/C.jpeg";

export function Projects() {
  
  const projects = [
    {
      title: "Application web d'agriculture, d'elevage et aviculture",
      description:
        "SENAGRO est une plateforme agrobusiness sénégalaise qui connecte producteurs et acheteurs autour de produits agricoles locaux — céréales, produits transformés et équipements. Le site propose une vitrine moderne avec filtrage de produits, formulaire de contact et livraison à Dakar et en régions..",
      image: senagroImage,
      tags: [" HTML", "Tailwind CSS", "TypeScript / JavaScrip", "React"],
      demo: "https://seneagrofim.vercel.app/",
    },
    {
      title: "Application d'orrientation apres bac",
      description:
        "SunuAvenir est une application qui guide les bacheliers sénégalais dans la découverte des filières disponibles et les aide à choisir celle qui correspond le mieux à leur profil et à leurs ambitions. .",
      image: sunuAvenirImage,
      tags: ["React Native", "Firebase", "TypeScript"],
      demo: "https://sunuavenir.vercel.app/",
    },
    {
      title: "application d'actualités numérique ",
      description:
        "SunuActu est une application d'actualités numérique qui centralise et diffuse les informations en temps réel, offrant aux utilisateurs un accès rapide et simplifié à toute l'actualité locale et internationale..",
      image: sunuActuImage,
      tags: ["Php", "Javascript", "Css"],
      demo: "https://sunuactu.free.nf/",
    },
    {
      title: "Système de gestion des étudiants",
      description:
        "Application console développée en langage C permettant de gérer efficacement les notes des étudiants, les classes, les matières et les informations académiques, avec une persistance des données via des fichiers CSV. Le système offre des fonctionnalités complètes de gestion (CRUD), de consultation et de calcul des moyennes par étudiant ou par classe.",
      image: cImage,
      tags: ["Langage C"],
    },
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection de mes projets récents démontrant mes compétences en
            développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Visiter le site
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
