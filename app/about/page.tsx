import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
