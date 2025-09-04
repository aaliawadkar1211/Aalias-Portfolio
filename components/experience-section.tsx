"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Award, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Data Science Intern",
    company: "FastFindFirm",
    location: "Pune, India",
    period: "Jan 2023 - Mar 2023",
    description:
      "During my internship at FastFindFirm, I worked on building data-driven solutions that combined both development and analytics. I collaborated with frontend developers to refine the user experience, supported backend operations by optimizing SQL queries for faster performance, and integrated APIs to deploy machine learning models that scaled efficiently. This role gave me hands-on exposure to the full development cycle—bridging data science, engineering, and real-world product impact.",
    achievements: [
      "Enhanced UI/UX → 25% faster user response",
      "Optimized SQL queries → 30% better performance",
      "Deployed ML models via APIs → 15% more scalability",
    ],
  },
]


const publications = [
  {
    title: "Research Publication - IJCRT",
    description: "Smart Tourism: A Comprehensive Approach Towards Web Development",
    paperLink: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2404019",
    certificateLink: "https://ijcrt.org/generatecerti.php?&pid=IJCRT2404019",
    year: "2024",
    journal: "IJCRT",
    paperId: "IJCRT2404019",
  },
]

const projects = [
  {
    title: "Smart Tourism for Ratnagiri",
    description:
      "AI-powered tourism platform leveraging OpenAI API to provide personalized travel recommendations.",
    impact: "40% increase in user engagement",
    tech: ["AI", "OpenAI API", "Python", "React"],
    year: "2024",
  },
  {
    title: "Music Genre Detection",
    description:
      "Machine learning model for automatic music genre classification using audio feature extraction.",
    impact: "87% accuracy achieved",
    tech: ["Machine Learning", "Python", "TensorFlow", "Audio Processing"],
    year: "2024",
    link: "https://music-genre-detection.vercel.app/",
  },
  {
    title: "Stress Detection",
    description:
      "Real-time stress detection system using physiological signals and machine learning algorithms.",
    impact: "82% accuracy in real-time prediction",
    tech: ["ML", "Python", "Signal Processing", "Real-time Analytics"],
    year: "2023",
   link: "https://stress-detection-ui.vercel.app/",
  },
]

export function ExperienceSection() {
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
    <section ref={sectionRef} className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Experience & Projects
          </h2>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="font-serif font-semibold text-2xl mb-8 text-foreground">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-r from-secondary/30 to-accent/20 border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="font-serif font-semibold text-xl text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span >{exp.location}</span>
                    </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="bg-accent/50 text-accent-foreground">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications section */}
          <div className="mb-16">
            <h3 className="font-serif font-semibold text-2xl mb-8 text-foreground">Publications & Achivements</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-serif font-semibold text-xl text-foreground">{pub.title}</h4>
                        <p className="text-primary font-medium">
                          {pub.journal} • {pub.year}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Paper ID: {pub.paperId}</Badge>
                  </div>
                  <p className="text-foreground/80 mb-4">{pub.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={pub.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Paper
                    </a>
                    <a
                      href={pub.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent-foreground rounded-lg transition-colors duration-200"
                    >
                      <Award className="h-4 w-4" />
                      View Certificate
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
<div>
  <h3 className="font-serif font-semibold text-2xl mb-8 text-foreground">Key Projects</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <Card
        key={index}
        className="p-6 bg-card border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <div className="flex items-start justify-between mb-4">
          <h4 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground group-hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="mb-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">{project.impact}</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">{project.year}</div>
      </Card>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
