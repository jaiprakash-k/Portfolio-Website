import { Achievements } from "@/components/achievements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
