import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/suyogpokhrel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/suyog-pokhrel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:suyogpokhrel13@gmail.com"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-primary-foreground/80">© 2025 Suyog Pokhrel | Built with React</p>
        </div>
      </div>
    </footer>
  )
}
