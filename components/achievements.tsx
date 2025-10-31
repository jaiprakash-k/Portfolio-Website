"use client"

import TiltCard from "./tilt-card"

export function Achievements() {
  const achievements = [
    {
      title: "SEISMO Hack 1.0 Finalist",
      description: "Reached finals with ResQlinK project - an innovative emergency communication solution",
      year: "2025",
      type: "Hackathon",
    },
    {
      title: "CodeCrafter Hybrid Hack",
      description: "Participated in competitive coding and development challenge",
      year: "2025",
      type: "Hackathon",
    },
    {
      title: "ECOHACK Ideathon",
      description: "Contributed innovative ideas for environmental sustainability solutions",
      year: "2025",
      type: "Ideathon",
    },
    {
      title: "Foundathon 2.0",
      description: "Participated in startup and entrepreneurship focused hackathon",
      year: "2025",
      type: "Hackathon",
    },
    {
      title: "Hack the Cosmos",
      description: "Space-tech focused hackathon participation with innovative solutions",
      year: "2025",
      type: "Hackathon",
    },
    {
      title: "Ethical Hacking Workshop",
      description: "Completed comprehensive workshop on cybersecurity and ethical hacking practices",
      year: "2025",
      type: "Workshop",
    },
    {
      title: "Vibe Coding Workshop",
      description: "Enhanced coding skills through intensive programming workshop",
      year: "2025",
      type: "Workshop",
    },
    {
      title: "MERN Stack Development Bootcamp",
      description: "Completed full-stack development bootcamp covering MongoDB, Express, React, and Node.js",
      year: "2025",
      type: "Bootcamp",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Achievements & Hackathons</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <TiltCard
              key={index}
              className="glass-card p-6 rounded-lg border border-white/10 hover:border-cyan-400/40"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    achievement.type === "Hackathon"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : achievement.type === "Workshop"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : achievement.type === "Bootcamp"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                  }`}
                >
                  {achievement.type}
                </span>
                <span className="text-sm text-gray-400">{achievement.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
