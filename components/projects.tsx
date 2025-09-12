import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "ResQlinK",
      description: "A cross-platform React Native app for offline-first emergency communication using Bluetooth (BLE mesh) and Wi-Fi (WebRTC/Wi-Fi Direct) networking.",
      tech: ["React Native", "Firebase", "Bluetooth Mesh", "Node.js"],
      github: "https://github.com/jaiprakash-k/ResQlinK",
    },
   {
      title: "CitySafari",
      description: "A modern, offline-first Progressive Web App (PWA) designed for Anganwadi workers to monitor child nutrition and identify malnutrition risks in rural communities.",
      tech: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/jaiprakash-k/city-safari",
    },
    {
      title: "AI Outfit Generator",
      description: "Web app where users upload clothes, accessories, and a full-body photo, choose an occasion, and get AI-generated styled outfit previews with virtual try-on support.",
      tech: ["React.js", "Tailwind CSS", "Node.js / FastAPI", "OpenCV", "MediaPipe", "CLIP", "VITON-HD", "Stable Diffusion", "Firebase / MongoDB"],
      github: "https://github.com/jaiprakash-k/AI-Outfit-Generator",
   },
   {
      title: "NutriTrack",
      description: "An offline-first PWA for tracking child nutrition. Allows Anganwadi workers to record height, weight, and age, assess growth risk, view charts, and sync data online. Supports English/Hindi.",
      tech: ["React.js", "Tailwind CSS", "IndexedDB", "Recharts"],
      github: "https://github.com/jaiprakash-k/NutriTrack"
   },
   {
      title: "Portfolio Website",
      description:"Modern, responsive portfolio designed and developed with React.js, featuring dark mode and smooth animations.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/jaiprakash-k/Portfolio-Website",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates application with location-based forecasts using OpenWeather API.",
      tech: ["JavaScript", "OpenWeather API", "CSS", "HTML"],
      github: "https://github.com/jaiprakash-k/Weather-App",
    },
    {
      title: "Smart Alarm Clock Web App",
      description: "A modern, responsive alarm clock built with HTML, CSS, and JavaScript. Supports multiple alarms, snooze, custom labels, sound alerts, vibration, and dark mode.",
      tech: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/jaiprakash-k/Alarm-Clock",
    },
    {
      title: "Currency Converter",
      description: "React-based currency converter app with real-time exchange rates and historical data.",
      tech: ["React.js", "LocalStorage", "CSS", "JavaScript"],
      github: "https://github.com/jaiprakash-k/Currency-converter",
    },
    
    {
      title: "Expense Tracker",
      description: "Financial management app with interactive charts, analytics, and expense categorization.",
      tech: ["JavaScript", "Chart.js", "LocalStorage", "CSS"],
      github: "https://github.com/jaiprakash-k/Expense-Tracker",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <CardHeader>
                <CardTitle className="text-cyan-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
