"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { MouseEvent } from "react"

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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Jai Prakash
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
            Aspiring Web Developer | Front-End Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about building modern, user-focused web experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={openPublicOrStored}
            className="bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-purple-500/10 border-purple-500 text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com/jaiprakash-k" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-blue-500/10 border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <a href="https://www.linkedin.com/in/jai-prakash-k-103286355/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-green-500/10 border-green-500 text-green-400 hover:bg-green-500/20 transition-all duration-300 hover:scale-105"
          >
            <a href="mailto:kjaiprakash000@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>

        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
