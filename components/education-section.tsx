"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"


const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Finolex Academy of Management and Technology",
    university:"University of Mumbai",
    period: "Jul 2020 – May 2024",
    cgpa: "8.63/10",
    honors: "Honors in Data Science",
    description:
      "Coursework covered computer science fundamentals, software development, networking, web engineering, security, multimedia processing, IoT, cloud computing, and machine learning. Alongside the core IT subjects, I pursued an honors track in Data Science, gaining hands-on experience with data analytics, big data, and applied AI/ML techniques.",
  },
]


const certifications = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2024",
    description:
      "Comprehensive cybersecurity training covering threat detection, incident response, and security frameworks",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "Ongoing",
    description: "Foundational understanding of AWS cloud services, architecture, and best practices",
  },
]

export function EducationSection() {
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
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-8 text-foreground flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-secondary/30 to-accent/20 border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-serif font-semibold text-xl text-foreground mb-2">{edu.degree}</h4>
                    <p>
  <span className="text-primary font-medium mb-2 block">{edu.institution}</span>
  <span className="text-primary font-medium block">{edu.university}</span>
</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-accent/50 text-accent-foreground">{edu.period}</Badge>
                      <Badge className="bg-primary/20 text-primary">CGPA: {edu.cgpa}</Badge>
                      <Badge className="bg-secondary/50 text-secondary-foreground">{edu.honors}</Badge>
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed">{edu.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-8 text-foreground flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-secondary/30 to-accent/20 border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{cert.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
