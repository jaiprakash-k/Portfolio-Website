"use client"

import TiltCard from "./tilt-card"

export function Experience() {
  const experiences = [
  {
    title: "Full-Stack Developer",
    company: "CitySafari & ResQlinK • Self-Driven",
    type: "Full-Stack Projects",
    period: "2025",
    description:
      "Built CitySafari using React, Spring Boot, MySQL with APIs for weather, food & events. Developed ResQlinK, an offline-first emergency app using React Native, Bluetooth Mesh & Firebase.",
  },
  {
    title: "Front-End Developer",
    company: "NutriTrack, ShopEase, Portfolio, Weather, Currency Converter, Smart Alarm, SlideFlow • Self-Driven",
    type: "Front-End Projects",
    period: "2025",
    description:
      "Developed multiple web apps including a nutrition tracker, e-commerce site, portfolio, weather app, currency converter, alarm clock, and image slider with modern UI & responsive design.",
  },
]
  

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
              <TiltCard className="glass-card p-6 rounded-lg border border-white/10 hover:border-cyan-400/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
                  <span className="text-sm text-purple-400">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-2">
                  {exp.company} • <span className="text-purple-300">{exp.type}</span>
                </p>
                <p className="text-gray-400">{exp.description}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
