"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "IntelliPlan",
      description: "AI-powered study planner web app with smart scheduling and chatbot.",
      tech: ["Django", "React", "Gemini API", "CSS"],
      image: "/ai-study-planner-dashboard-interface.jpg",
      status: "completed",
      githubUrl: "https://github.com/suyogpokhrel/IntelliPlan",
      liveUrl: "https://intelliplan1.onrender.com/",
    },
    {
      title: "LearnCinema",
      description:
        "An online platform guiding users through filmmaking with courses in directing, editing, and cinematography.",
      tech: ["HTML", "CSS", "Figma"],
      image: "/filmmaking-education-platform-interface.jpg",
      status: "completed",
      githubUrl: "https://github.com/suyogpokhrel/LearnCinema",
    },
    {
      title: "AI Income & Expense Tracker",
      description: "Tracks expenses, auto-categorizes them, and predicts future budgets using ML.",
      tech: ["React", "Node.js", "Machine Learning"],
      image: "/expense-tracker-dashboard-with-charts.jpg",
      status: "working",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in AI/ML and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    {project.status === "working" ? (
                      <div className="flex-1 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-sm font-medium">
                          🚧 Working
                        </span>
                      </div>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
