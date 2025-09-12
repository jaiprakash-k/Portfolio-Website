import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="h-screen bg-gray-950 text-white overflow-hidden">
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
