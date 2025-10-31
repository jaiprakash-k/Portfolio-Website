"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Phone, FileText } from "lucide-react"
import { MouseEvent } from "react"
import TiltCard from "./tilt-card"

const PUBLIC_RESUME = "/Resume_2520.pdf"
const RESUME_KEY = "jp_resume_v1"

export function Contact() {
  const openPublicOrStored = async (e: MouseEvent) => {
    e.preventDefault()
    try {
      const resp = await fetch(PUBLIC_RESUME, { method: "HEAD" })
      if (resp.ok) {
        window.open(PUBLIC_RESUME, "_blank", "noopener")
        return
      }
    } catch (err) {
      // ignore and fallback
    }

    try {
      const raw = localStorage.getItem(RESUME_KEY)
      if (!raw) {
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
      setTimeout(() => URL.revokeObjectURL(url), 10000)
    } catch (err) {
      console.error(err)
      alert("Failed to open resume.")
    }
  }
  const downloadPublicOrStored = async (e: MouseEvent) => {
    e.preventDefault()
    try {
      const resp = await fetch(PUBLIC_RESUME, { method: "HEAD" })
      if (resp.ok) {
        const a = document.createElement("a")
        a.href = PUBLIC_RESUME
        a.download = PUBLIC_RESUME.split("/").pop() || "resume.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
        return
      }
    } catch (err) {
      // ignore and fallback
    }

    try {
      const raw = localStorage.getItem(RESUME_KEY)
      if (!raw) {
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
      const a = document.createElement("a")
      a.href = url
      a.download = stored.name || "resume"
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 10000)
    } catch (err) {
      console.error(err)
      alert("Failed to download resume.")
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kjaiprakash000@gmail.com",
      href: "mailto:kjaiprakash000@gmail.com",
      color: "text-green-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6281408996",
      href: "tel:+916281408996",
      color: "text-cyan-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: null,
      color: "text-orange-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "jaiprakash-k",
      href: "https://github.com/jaiprakash-k",
      color: "text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jai-prakash-k",
      href: "https://www.linkedin.com/in/jai-prakash-k-103286355/",
      color: "text-blue-400",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download",
      href: "_resume_",
      color: "text-cyan-300",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Get In Touch</h2>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a
            chat about technology and development. Feel free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            const content = (
              <TiltCard className="glass-card rounded-xl h-full border border-white/10 hover:border-cyan-400/40">
                <Card className="bg-transparent border-0 h-full">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mb-3 ${contact.color}`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <CardTitle className="text-lg text-gray-200">{contact.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className={`text-sm ${contact.color} break-all`}>{contact.value}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            )

            // Special handling for our resume card which uses a click handler
            if (contact.href === "_resume_") {
              return (
                <button key={index} onClick={downloadPublicOrStored} className="block text-left">
                  {content}
                </button>
              )
            }

            return contact.href ? (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105"
          >
            <a href="mailto:kjaiprakash000@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
