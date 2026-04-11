import { Code, Lightbulb, Users, Trophy } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Développement",
      description: "Expertise en java, python et php",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionné par les nouvelles technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe et méthodologie agile",
    },
    {
      icon: Trophy,
      title: "Résultats",
      description: "Projets réussis et performances optimisées",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Étudiant en Licence Informatique, je me spécialise dans le
              Genie logiciel et le systeme d'information. Mon parcours m'a
              permis d'acquérir une solide expertise technique et une capacité
              d'adaptation aux nouvelles technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              J'ai participé à plusieurs projets académiques et personnels qui
              m'ont permis de développer mes compétences en programmation, en
              design d'interface et en gestion de projet. Je suis constamment à
              la recherche de nouveaux défis pour approfondir mes connaissances.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Nom</p>
                <p className="font-semibold text-gray-900">Mohamed Aboubacar AW</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">
                  maw106277@gmail.com
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="font-semibold text-gray-900">+221 709570652</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Localisation</p>
                <p className="font-semibold text-gray-900">Dakar</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
