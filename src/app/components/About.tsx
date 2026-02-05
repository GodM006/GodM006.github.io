import { motion } from "motion/react";
import { Award, TrendingUp, Trophy, Newspaper } from "lucide-react";

const skills = [
  { category: "Programming", items: ["Python", "LaTeX", "MATLAB", "C/C++"] },
  { category: "ML/AI Libraries", items: ["scikit-learn", "OpenCV", "TensorFlow"] },
  // { category: "Mathematics", items: ["Optimization", "Numerical Methods", "Real Analysis", "Algebra", "basic ODEs"] },
  // { category: "Domain Areas", items: ["Machine Learning", "Computer Vision", "Fintech", "Computational Physics"] },
];

const achievements = [
  {
    icon: Award,
    title: "Merit Scholarship - BITS Pilani",
    description: "Top 7% performer in freshman year",
    year: "2025",
  },
  {
    icon: TrendingUp,
    title: "ISI Entrance Examination",
    description: "AIR 290 in Indian Statistical Institute exam",
    year: "2024",
  },
  {
    icon: Trophy,
    title: "IIST Merit List",
    description: "AIR 1508 out of 30k+ JEE Advanced qualifiers",
    year: "2024",
  },
  {
    icon: Award,
    title: "Mathematics Olympiad",
    description: "National Top 10% in Indian Olympiad Qualifier",
    year: "2023",
  },
];

const extracurricular = [
  "Secured Global Rank within Top 10% among 14k participants in IMC Prosperity-3, 2025 Trading Competition",
  "Qualified WorldQuant IQC 2025: College Champion in Stage 1; India Rank under 40, Global Rank under 150",
  "Recognized by President of India at National Energy Conservation Convention 2017",
  "Honored by Chief Minister of Odisha under 'Mu Hero, Mu Odisha' initiative",
  "Awarded Chief Minister's Award for State Debating Championship winner (2017–2019, three consecutive year)",
];

const education = [
  {
    degree: "B.E. Chemical Engineering + M.Sc. Mathematics",
    institution: "BITS Pilani, Hyderabad",
    year: "2024 - 2029",
    cgpa: "7.87/10",
  },
  {
    degree: "Intermediate/+2",
    institution: "Freedom International School",
    year: "2024",
    score: "96%",
  },
  {
    degree: "High School",
    institution: "LR DAV Public School",
    year: "2022",
    score: "98.2%",
  },
];

export function About() {
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
            About Me
          </h2>
          <p className="text-gray-500 text-lg">
            Background, interests, and achievements
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 bg-gray-900/50 p-8 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl text-white mb-4">Background</h3>
          <div className="space-y-4 text-gray-400">
            <p>
              I'm a student interested in how intelligent systems learn, adapt, and sometimes fail. 
              My focus spans machine learning, fintech, and computational decision-making, with an 
              emphasis on understanding structure and robustness rather than optimizing metrics in isolation.
            </p>
            <p>
              I'm drawn to interdisciplinary problems where mathematics, data, and systems thinking 
              intersect. I value principled design, careful reasoning, and clarity over scale.
            </p>
            <p>
              Outside technical work, I enjoy analytical writing, mentoring, and engaging with ideas 
              at the intersection of technology, society, and governance. Selected analytical writing 
              on democratic governance and global order can be found on my Substack, 
              <a 
                href="https://thephiofpolitics.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {" "}The Phi of Politics
              </a>.
            </p>
          </div>
        </motion.div>

        {/* Scholastic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-white mb-6">Scholastic Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-700/50 transition-all"
              >
                <div className="p-2 bg-blue-950/30 rounded">
                  <achievement.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-white mb-1">{achievement.title}</h4>
                    <span className="text-xs text-blue-400 bg-blue-950/30 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-white mb-6">Skills & Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
              >
                <h4 className="text-white mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm border border-gray-700 hover:border-blue-700/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-white mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white text-lg">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-400">{edu.year}</span>
                    {edu.cgpa && (
                      <p className="text-sm text-gray-500 mt-1">CGPA: {edu.cgpa}</p>
                    )}
                    {edu.score && (
                      <p className="text-sm text-gray-500 mt-1">{edu.score}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl text-white mb-6">Extracurricular Achievements</h3>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <ul className="space-y-3">
              {extracurricular.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
