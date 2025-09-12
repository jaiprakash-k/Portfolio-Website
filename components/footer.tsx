import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Jai Prakash
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Science & Engineering student passionate about creating innovative solutions and building
              impactful software applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                About Me
              </a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Experience
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jaiprakash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/jaiprakash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a
                href="mailto:jaiprakash@example.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">© 2025 Jai Prakash. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
