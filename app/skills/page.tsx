import { Skills } from "@/components/skills"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
