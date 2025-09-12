import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
