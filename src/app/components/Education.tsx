import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Licence2 Informatique",
      school: "Ecole superieur polytechnique",
      location: "Dakar",
      period: "2025 - 2026",
      description:
        "Spécialisation en développement logiciel  Focus sur les architectures web modernes .",
      achievements: [
        "Mention ABien",
        "Projet de fin d'année primé",
        "Participation à des hackathons",
        "Recherche Stage "
      ],
    },
    {
      degree: "Licence 1 Informatique",
      school: "Ecole superieur polytechnique",
      location: "Dakar",
      period: "2024 - 2025",
      description:
        "Formation complète en informatique avec des bases solides en programmation, algorithmique et bases de données.",
      achievements: [
        "Mention ABIEN",
        "Stage en entreprise de 2 mois",
        "Projet tutoré en équipe",
      ],
    },
    {
      degree: "Licence 1 Informatique",
      school: "Université Virtuelle du Sénégal (UVS)",
      location: "Sébikotane",
      period: "2024 - 2026",
      description:
        "Licence developpement d'applications : web, mobile gaming",
      
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Moderne de rufisque",
      location: "rufisque ",
      period: "2023 - 2024",
      Option:
        "S2.",
      
    },
  ];

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et mes réalisations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {item.school}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{item.description}</p>

                    {item.achievements && (
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900 text-sm">
                          Réalisations :
                        </p>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
