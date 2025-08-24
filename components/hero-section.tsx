"use client"

import { Download, MapPin, Cloud, Shield, Brain, Database} from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["IT Engineer", "Data Analyst", "Cybersecurity Enthusiast", "Artificial Intelligance","Machine Learning"]
  const skills = [
    { icon: Database, label: "Data Science", color: "from-purple-400 to-purple-600", level: 90 },
    { icon: Cloud, label: "Cloud Computing", color: "from-blue-400 to-blue-600", level: 60 },
    { icon: Shield, label: "Cybersecurity", color: "from-green-400 to-green-600", level: 60 },
    { icon: Brain, label: "AI & ML", color: "from-pink-400 to-pink-600", level: 80 },
  ]
  

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(roleInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-popover animate-gradient-shift">
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-40 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-2xl animate-pulse opacity-30 transition-transform duration-1000 ease-out"
          style={{
            animationDelay: "2s",
            transform: `translate(${(mousePosition.x - 50) * -0.05}px, ${(mousePosition.y - 50) * -0.05}px)`,
          }}
        />

        {/* Interactive floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle animate-particle-float"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${(mousePosition.x - 50) * (0.01 + i * 0.002)}px, ${(mousePosition.y - 50) * (0.01 + i * 0.002)}px)`,
            }}
          >
            <div
              className={`w-${(i % 3) + 1} h-${(i % 3) + 1} bg-primary/${20 + i * 2} ${i % 2 === 0 ? "rounded-full" : "rotate-45"} transition-all duration-300 hover:scale-150 hover:bg-primary/60`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 max-w-7xl mx-auto w-full">
        {/* Left side - Main content */}
        <div className="text-center lg:text-left">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight leading-tight font-sans transition-all duration-300 hover:text-primary hover:scale-105 cursor-default animate-text-reveal">
              Aalia Wadkar
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-normal tracking-wide h-8 flex items-center justify-center lg:justify-start">
              <span className="transition-all duration-500 ease-in-out font-serif">{roles[currentRole]}</span>
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 font-serif">Cloud Computing · Cybersecurity · AI</p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-24 h-px bg-primary/30 mx-auto lg:mx-0 mb-8 transition-all duration-300 hover:w-32 hover:bg-primary/60"></div>
          </div>

          <div
            className={`flex items-center justify-center lg:justify-start gap-2 mb-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <MapPin className="h-5 w-5 text-primary/80 transition-all duration-300 hover:scale-125 hover:text-primary" />
            <span className="text-base text-muted-foreground font-serif tracking-wide transition-all duration-300 hover:text-foreground">
              Dubai, United Arab Emirates
            </span>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex justify-center lg:justify-start">
            <a
              href="/AaliaWadkarResume.pdf"
              download="AALIA WADKAR RESUME.pdf"
              className="luxury-button inline-flex items-center text-primary-foreground px-8 py-4 rounded-full font-medium text-base tracking-wide group border-0"
            >
              <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:animate-bounce" />
                Download Resume
            </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.label}
                  className={`interactive-card p-6 rounded-2xl transition-all duration-1000 delay-${800 + index * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-sans">{skill.label}</h3>
                  <div className="w-full bg-border rounded-full h-2">
                  <div className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${1000 + index * 200}`}
                    style={{ width: `${skill.level}%` }}
                  />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
