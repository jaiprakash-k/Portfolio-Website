"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { MouseEvent } from "react"
import { motion } from "framer-motion"

const PUBLIC_RESUME = "/Resume_2520.pdf"
const RESUME_KEY = "jp_resume_v1"

export function Hero() {
  const openPublicOrStored = async (e: MouseEvent) => {
    e.preventDefault()
    // try to open public file first
    try {
      const resp = await fetch(PUBLIC_RESUME, { method: "HEAD" })
      if (resp.ok) {
        window.open(PUBLIC_RESUME, "_blank", "noopener")
        return
      }
    } catch (err) {
      // network error - we'll try fallback
    }

    // fallback: try stored resume in localStorage
    try {
      const raw = localStorage.getItem(RESUME_KEY)
      if (!raw) {
        // no file available
        alert("Resume not found in public folder or stored locally.")
        return
      }
      const stored = JSON.parse(raw) as { name: string; type: string; data: string }
      const binary = atob(stored.data)
      const len = binary.length
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i)
      const blob = new Blob([bytes], { type: stored.type })
      const url = URL.createObjectURL(blob)
      window.open(url, "_blank", "noopener")
      // revoke after some time
      setTimeout(() => URL.revokeObjectURL(url), 10000)
    } catch (err) {
      console.error(err)
      alert("Failed to open resume.")
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="mb-8">
          <h1 className="neon-gradient-text text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Jai Prakash
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
            Aspiring Web Developer · Full-Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Building modern, user-focused web experiences with performance and polish.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
            <Button
              variant="outline"
              size="lg"
              onClick={openPublicOrStored}
              className="neon-button text-cyan-300 hover:text-white"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
            <Button variant="outline" size="lg" asChild className="neon-button text-violet-300 hover:text-white">
              <a href="https://github.com/jaiprakash-k" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
            <Button variant="outline" size="lg" asChild className="neon-button text-cyan-200 hover:text-white">
              <a href="https://www.linkedin.com/in/jai-prakash-k-103286355/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
            <Button variant="outline" size="lg" asChild className="neon-button text-cyan-100 hover:text-white">
              <a href="mailto:kjaiprakash000@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-cyan-400/70 rounded-full mx-auto">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
