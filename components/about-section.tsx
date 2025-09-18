"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const skills = [
    { category: "💻 Programming", items: ["Python", "JavaScript"] },
    { category: "🌐 Web", items: ["HTML", "CSS", "React", "Node.js"] },
    { category: "🤖 AI/ML", items: ["NumPy", "Pandas", "Scikit-learn"] },
    { category: "📊 Tools", items: ["Git", "Figma", "Django"] },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground mb-6 text-pretty">
                  I'm a Bachelor's student specializing in Artificial Intelligence and Machine Learning. I enjoy
                  building projects that merge creativity with technology — from AI-powered applications to web
                  development projects.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-8 text-pretty">
                  I'm passionate about solving real-world problems with data, algorithms, and code, always exploring new
                  technologies and pushing the boundaries of what's possible.
                </p>
                {/* <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button> */}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Skills Overview</h3>
            <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <motion.h4
                        className="font-semibold text-primary mb-4 text-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skillGroup.category}
                      </motion.h4>
                      <div className="flex-1 flex flex-wrap content-start gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="text-sm text-foreground bg-muted hover:bg-primary/10 px-3 py-2 rounded-full transition-colors duration-200"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
