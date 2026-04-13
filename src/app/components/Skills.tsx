export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Javascript", level: 65 },
        { name: "React", level: 45 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "java", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 82 },
        { name: "Php", level: 85 },
      ],
    },
    {
      category: "Outils",
      skills: [
        { name: "Git", level: 90 },
        { name: "suap", level: 95 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", level: 88 },
        { name: "Travail d'équipe", level: 92 },
        { name: "Résolution problèmes", level: 87 },
        { name: "Créativité", level: 85 },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mes compétences techniques et transversales acquises au cours de ma
            formation et de mes projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
