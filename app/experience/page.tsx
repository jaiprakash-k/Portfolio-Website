import { Experience } from "@/components/experience"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
