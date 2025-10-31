"use client"

import { motion } from "framer-motion"
import TiltCard from "./tilt-card"
import SkillsRadar from "./skills-radar"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
    },
    {
      title: "Frontend & Frameworks",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "XCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },

      ],
    },
    {
      title: "Cloud & Others",
      skills: [
        { name: "Cloud Concepts", icon: "https://img.icons8.com/ios-filled/50/00FFFF/cloud.png" },
        { name: "Version Control", icon: "https://img.icons8.com/ios-filled/50/00FFFF/merge-git.png" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 neon-gradient-text">Skills & Technologies</h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 text-center font-display" style={{ color: '#A26BFF' }}>
                {category.title}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  >
                    <TiltCard className="relative group glass-card p-4 rounded-xl border border-white/10 hover:border-cyan-400/40">
                      <div className="w-12 h-12 mb-3 mx-auto flex items-center justify-center">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <span className="block text-sm text-gray-300 text-center group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h4 className="text-lg font-display text-center mb-4" style={{ color: '#A26BFF' }}>Skill Radar</h4>
          <div className="max-w-xl mx-auto">
            <SkillsRadar labels={["JS", "TS", "CSS", "React", "Next", "UX"]} values={[80, 70, 75, 78, 68, 72]} />
          </div>
        </div>
      </div>
    </section>
  )
}
