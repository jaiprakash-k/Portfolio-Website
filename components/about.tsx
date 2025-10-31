"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 neon-gradient-text font-display">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative rotating-ring">
              <div className="w-64 h-64 bg-transparent rounded-full flex items-center justify-center">
                <div className="w-52 h-52 glass-card rounded-full flex items-center justify-center">
                  <span className="text-5xl text-cyan-300 font-display">JP</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed font-body">
              ✨ Hi! I'm Jai Prakash, an enthusiastic learner and builder pursuing a B.Tech in Computer Science and
              Engineering (Software Engineering) at SRM University.
            </p>

            <p className="text-lg leading-relaxed font-body">
              Rather than just writing code, I focus on creating meaningful solutions — from intuitive web interfaces to
              innovative hackathon projects. I enjoy tackling challenges that push me to think beyond the obvious and
              turn ideas into impactful applications.
            </p>

            <p className="text-lg leading-relaxed font-body">
              My curiosity drives me across domains like Web Development, iOS Development, AI/ML, and Cloud Computing.
              Whether it's experimenting with new frameworks, optimizing user experience, or brainstorming real-world
              problem statements, I'm always excited to collaborate, learn, and grow with the tech community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
