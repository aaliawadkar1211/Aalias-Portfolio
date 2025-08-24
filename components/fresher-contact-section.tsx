"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react"

export function FresherContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">Let&apos;s Connect</h2>

          <div className="text-center mb-12">
            <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
              I&apos;m actively seeking opportunities in cloud computing, data science, and AI. Let&apos;s discuss how I can
              contribute to your team&apos;s success!
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="mailto:aaliasw1211@gmail.com"
              className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-primary/80 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">Email</h3>
              <p className="text-muted-foreground text-sm text-center">aaliasw1211@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/aalia-wadkar-8aa238208"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm text-center">Professional Profile</p>
            </a>

            <a
              href="https://github.com/aalia-wadkar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 mb-4">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm text-center">Code Portfolio</p>
            </a>

            <a
              href="/AaliaWadkarResume.pdf"
              download="AALIA WADKAR RESUME.pdf"
              className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-accent mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">Resume</h3>
              <p className="text-muted-foreground text-sm text-center">Download PDF</p>
            </a>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <ExternalLink className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
