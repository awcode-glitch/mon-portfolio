import { Award, Calendar, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import huaweiImage from "../../assets/Huawei.png";
import certificatHdnaImage from "../../assets/certificatHDNA.jpeg";
import cs50Pdf from "../../assets/CS50P.pdf";

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const certifications = [
    
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      category: "Génie Logiciel",
      date: "2025",
      description: "Professional Programming Course",
      skills: ["Python", "Programming"],
      image: cs50Pdf,
      verifyUrl: "https://cs50.harvard.edu/python/",
      certificateUrl: "https://cs50.harvard.edu/certificates/c8a23889-4192-4bbc-9761-0bf4deb64efd",
    },
    {
      title: "HCIA-Datacom V1.0 (French)",
      issuer: "Huawei",
      category: "Cybersécurité",
      date: "2025-04-30",
      description: "Certification Huawei Datacom V1.0 en français",
      skills: ["Datacom", "Réseaux", "Cybersécurité"],
      image: huaweiImage,
      verifyUrl: "https://uniportal.huawei.com/uniportal1/hwid-login.html?x_app_id=com.huawei.prm.talent&lang=en_US&redirect=https%3A%2F%2Fe.huawei.com%2Fen%2Ftalent%2Fusercenter%2F%23%2Fhome&relationKey=600c4ef53dbf4b6091a76f68d76325fb",
      certificateUrl: huaweiImage,
    },
    {
      title: "HackerDNA",
      issuer: "HackerDNA",
      category: "Cybersécurité",
      date: "2026",
      description: "Certification HackerDNA en cybersécurité",
      skills: ["Cyberdéfense", "Sécurité Réseau", "Hacking Éthique"],
      image: certificatHdnaImage,
      verifyUrl: "https://hackerdna.com/fr/dashboard",
      certificateUrl: "https://hackerdna.com/fr/labs/complete/5a43ee53-2e95-48b4-ba32-88625ac894dd",
    },
  ];

  const categories = ["Toutes", "Génie Logiciel", "Cybersécurité"];

  const filteredCertifications =
    activeCategory === "Toutes"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Certifications
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des reconnaissances officielles de mes compétences acquises.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Carousel */}
        <div className="relative">
          <div
            className="flex gap-8 overflow-x-auto pb-4 pr-2 scroll-smooth snap-x snap-mandatory"
          >
            {filteredCertifications.map((cert, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[380px] flex-shrink-0 snap-center rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-auto">
                  {cert.image.toLowerCase().endsWith(".pdf") ? (
                    <object
                      data={cert.image}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                        Aperçu PDF non disponible
                      </div>
                    </object>
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{cert.date}</span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Vérifier
                  </a>
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg transition-colors duration-200"
                  >
                    <FileText size={16} />
                    Fichier
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Empty State */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune certification trouvée pour cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
