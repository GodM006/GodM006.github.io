import { motion } from "motion/react";
import { FileText, ExternalLink, Calendar, BookOpen, Database } from "lucide-react";

const publications = [
  {
    title: "Compositional Choke Points: Evidence Of Emergent Rank Collapse Limiting Iterative Generalization",
    authors: "Utkarsh Srivastava, Rishi Mohapatra, Rahul D Ray",
    venue: "ICLR 2026 Workshop on Science for Deep Learning (Sci4DL)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "When Data Amplifies Shortcuts: Gradient-Flow Evidence of Spurious Feature Reinforcement",
    authors: "Rahul D Ray, Rishi Mohapatra",
    venue: "ICLR 2026 Workshop on Science for Deep Learning (Sci4DL)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "Getting the Data Right: A Physics-Consistent, Calibrated Dataset for SEM-Based Defect Localization in PEMFCs",
    authors: "Rahul D Ray, Utkarsh Srivastava, Rishi Mohapatra, Naveen K. Shrivastava",
    venue: "ICLR 2026 Workshop on AI for Materials Science (AI4Mat)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "The Benchmarking Void: A Roadmap for Domain-Adapted Computer Vision in Fuel Cell Defect Detection",
    authors: "Rahul D Ray, Utkarsh Srivastava, Rishi Mohapatra, Naveen K. Shrivastava",
    venue: "ICLR 2026 Workshop on AI for Materials Science (AI4Mat)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "The Upstream Blind Spot: Pegasus And Surveillance Infrastructures As Dual-use AI Risk",
    authors: "Rishi Mohapatra, Rahul D Ray, Utkarsh Srivastava",
    venue: "ICLR 2026 Workshop on AI for Peace (AI4Peace)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "The Epistemic Infrastructure of Algorithmic Triage: Project Maven as a Case in Upstream Filtering",
    authors: "Rahul D Ray, Utkarsh Srivastava, Rishi Mohapatra",
    venue: "ICLR 2026 Workshop on AI for Peace (AI4Peace)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
  {
    title: "From Speech Recognition To Algorithmic Triage: How Post-9/11 Intelligence Automation Reconfigured Power, Bias, And Accountability",
    authors: "Utkarsh Srivastava, Rahul D Ray, Rishi Mohapatra",
    venue: "ICLR 2026 Workshop on AI for Peace (AI4Peace)",
    year: "2026",
    type: "Workshop Paper",
    status: "Under Review",
  },
];

const researchOutput = {
  title: "PEMDefect-1107: Defect Localization Dataset for PEM Fuel Cell Materials",
  type: "Public Dataset",
  year: "2025",
  description: "Curated grayscale microscopy image dataset for single-class defect localization in PEM fuel cell materials. Includes 1,107 images with YOLO-format bounding-box annotations and fixed train/validation/test splits.",
  doi: "10.5281/zenodo.18075743",
  link: "https://doi.org/10.5281/zenodo.18075743",
};

const projects = [
  {
    title: "Physics-Informed Neural Network for 1D Heat Equation",
    period: "Oct 2025",
    type: "Self Project",
    description: "Built a neural network to approximate solutions of the 1D heat equation through physics-constrained optimization.",
    highlights: [
      "Computed spatial and temporal derivatives through PyTorch autograd to enforce the governing relation",
      "Trained on boundary and initial data to learn the temperature profile over the space–time domain",
    ],
    github: "https://github.com/GodM006/PDE-solver-PINN",
  },
  {
    title: "Stochastic Time-Series Modeling for Equity Data",
    period: "Jan 2025",
    type: "Joint Project",
    description: "Applied Kalman filtering and machine learning for equity time-series prediction.",
    highlights: [
      "Applied Kalman filtering to smooth and extract state-based features from equity time-series data",
      "Trained an XGBoost model on balanced data (via SMOTE) with time-series cross-validation",
      "Evaluated model performance using QuantStats metrics, observing consistent Sharpe ratio of more than 1 and lower drawdown relative to baseline",
    ],
    github: "https://github.com/GodM006/Kalman_TB",
  },
];

export function Publications() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Publications & Research Outputs
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Conference papers, datasets, and projects
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <div className="text-3xl text-blue-400 mb-1">
                {publications.length}
              </div>
              <div className="text-sm text-gray-500">Publications</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <div className="text-3xl text-blue-400 mb-1">1</div>
              <div className="text-sm text-gray-500">Public Dataset</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <div className="text-3xl text-blue-400 mb-1">{projects.length}</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Research Output - Dataset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6">Research Outputs</h3>
          <div className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-700/50 transition-all hover:shadow-lg hover:shadow-blue-900/20">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-950/30 rounded group-hover:bg-blue-950/50 transition-colors">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {researchOutput.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                    {researchOutput.type}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{researchOutput.year}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  {researchOutput.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="text-gray-600">DOI: {researchOutput.doi}</span>
                  <a
                    href={researchOutput.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View on Zenodo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6">Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-700/50 transition-all hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-950/30 rounded group-hover:bg-blue-950/50 transition-colors">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {pub.title}
                    </h3>
                    
                    <div className="text-sm text-gray-400 mb-3">
                      {pub.authors}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <BookOpen className="w-4 h-4" />
                        <span>{pub.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        {pub.type}
                      </span>
                      <span className="px-2 py-1 bg-blue-950/50 text-blue-400 rounded text-xs">
                        {pub.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-white mb-6">Projects</h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-700/50 transition-all hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
