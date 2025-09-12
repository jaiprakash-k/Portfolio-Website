import * as React from "react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-400/30">
              <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl text-cyan-400">JP</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              ✨ Hi! I'm Jai Prakash, an enthusiastic learner and builder pursuing a B.Tech in Computer Science and
              Engineering (Software Engineering) at SRM University.
            </p>

            <p className="text-lg leading-relaxed">
              Rather than just writing code, I focus on creating meaningful solutions — from intuitive web interfaces to
              innovative hackathon projects. I enjoy tackling challenges that push me to think beyond the obvious and
              turn ideas into impactful applications.
            </p>

            <p className="text-lg leading-relaxed">
              My curiosity drives me across domains like Web Development, iOS Development, AI/ML, and Cloud Computing.
              Whether it's experimenting with new frameworks, optimizing user experience, or brainstorming real-world
              problem statements, I'm always excited to collaborate, learn, and grow with the tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
