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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Skills & Technologies</h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 text-purple-400 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <span className="text-sm text-gray-300 text-center group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
