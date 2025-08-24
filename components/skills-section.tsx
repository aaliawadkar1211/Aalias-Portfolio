"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Cloud, Brain, Database, Code, Globe, LucideToolCase } from "lucide-react"

const skills = [
  {
    category: "Software Development",
    icon: Code,
    skills: ["Python", "JavaScript", "RESTful API", "Object-Orriented Programming", "Agile Methodology", "Design Patterns"],
    color: "from-blue-400 to-blue-600",
  },
  {
    category: "Cloud Computing",
    icon: Cloud,
    skills: ["AWS", "EC2", "S3", "IAM", "SageMaker", "Serverless Architechture", "Cloud Deployment", "Vercel"],
    color: "from-red-400 to-red-600",
  },
  {
    category: "Data Science & AI/ML",
    icon: Brain,
    skills: ["SciKit-Learn", "Tensor-Flow", "Keras", "PyTorch", "NLP", "ETL", "EDA", "Pandas", 
            "NumPy", "Matplotlib", "Feature Engineering", "Great-Expectations", "Prophet","Power BI", "Stream-Lit"],
    color: "from-purple-400 to-purple-600",
  },
  {
    category: "Web-Tech",
    icon: Globe,
    skills: ["HTML", "CSS", "Java-Script", "Tailwind", "Node.js","React"],
    color: "from-green-400 to-green-600",
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB"],
    color: "from-orange-400 to-orange-600",
  },
  {
    category: "Tools & Platforms",
    icon: LucideToolCase,
    skills: ["Jupiter", "Visual Studio Code", "Github", "Google Colab", "PyCharm"],
    color: "from-teal-400 to-teal-600",
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} className="py-20 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <Card
                  key={skillGroup.category}
                  className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${skillGroup.color} mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
