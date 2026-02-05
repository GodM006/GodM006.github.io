import { motion } from "motion/react";
import { FlaskConical, Calendar, User } from "lucide-react";

const researchProjects = [
  {
    title: "Energy-Momentum Complex Computation in General Relativity",
    institution: "BITS Pilani Hyderabad Campus",
    supervisor: "Prof. P.K. Sahoo",
    period: "Jan 2026 - Present",
    type: "Graded Research Project",
    description: "Studying energy–momentum localization in General Relativity using classical complex prescriptions.",
    highlights: [
      "Reviewing Einstein, Landau–Lifshitz, Møller, and Papapetrou energy–momentum formulations",
      "Working on analytic derivations for standard space–time metrics used in gravitational physics",
      "Building initial Python symbolic code using SymPy, with exploration of EinsteinPy for GR tensor utilities",
      "Aiming to validate results with published literature and existing REDUCE/Mathematica implementations",
    ],
    technologies: ["Python", "SymPy", "EinsteinPy", "General Relativity"],
  },
  {
    title: "Data-Centric Vision for PEM Fuel Cell Defect Localization",
    institution: "BITS Pilani",
    supervisor: "Dr. Naveen Shrivastava",
    period: "Dec 2024 - Jan 2026",
    type: "Undergraduate Research",
    description: "Comprehensive study of machine learning methods for PEM fuel cells, focusing on vision-based defect localization using SEM imagery.",
    highlights: [
      "Led the creation of PEMDefect-1107, a curated grayscale SEM dataset comprising 1,107 images with bounding-box annotations for defect localization",
      "Designed a physics-consistent, data-centric preprocessing framework to remove acquisition artifacts and prevent shortcut learning",
      "Established fixed train/validation/test splits with calibrated validation criteria for reproducibility and statistical independence",
      "Performed controlled augmentation ablation studies, demonstrating that physically plausible transformations can degrade performance due to orientation bias",
    ],
    technologies: ["PyTorch", "Computer Vision", "OpenCV", "YOLO", "scikit-learn"],
  },
];

export function ResearchExperience() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Research Experience
          </h2>
          <p className="text-gray-500 text-lg">
            Current and past research projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-blue-700/50 transition-all hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-950/30 rounded-lg group-hover:bg-blue-950/50 transition-colors">
                  <FlaskConical className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-col gap-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{project.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Under {project.supervisor}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-blue-400 bg-blue-950/50 px-3 py-1 rounded">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <span className="text-xs text-gray-500 px-3 py-1 bg-gray-800/50 rounded">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-500">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-400 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
