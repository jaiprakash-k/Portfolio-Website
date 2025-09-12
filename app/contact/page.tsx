import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
