"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#F5EFFF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#CDC1FF] rounded-full opacity-8 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#A294F9] rounded-full opacity-8 blur-lg"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#E5D9F2] rounded-full opacity-12 blur-md"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d1b69] leading-tight">About Me</h2>

            <div className="space-y-6 text-[#2d1b69] text-base leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-medium text-lg text-[#2d1b69]">Hello — I&apos;m Aalia Sarfaraz Wadkar.</h3>
                <p>
                  22 years old, and based in <strong>Dubai, United Arab Emirates</strong>. I fell in love with
                  technology because I wanted to understand how things <em>work</em> — and then build them better.
                </p>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
                <div className="flex-1 h-px bg-[#CDC1FF]"></div>
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg text-[#2d1b69]">What I do</h3>
                <p>
                  I&apos;m an IT engineer focused on <strong>Data Science, Cloud Computing, and AI</strong>. I enjoy turning
                  data into clear stories and building cloud systems that scale and stay secure.
                </p>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
                <div className="flex-1 h-px bg-[#CDC1FF]"></div>
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg text-[#2d1b69]">Quick wins</h3>
                <p>
                  I&apos;ve worked on projects like a Smart Tourism AI platform (+40% engagement), a Music Genre Detection
                  model (87% accuracy), and a Stress Detection System (82% precision). I also improved backend
                  performance by 20% and cut data-processing time by 30%.
                </p>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
                <div className="flex-1 h-px bg-[#CDC1FF]"></div>
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg text-[#2d1b69]">Background</h3>
                <p>
                  I graduated with an Honors degree in Data Science (B.E. in Information Technology) from Finolex
                  Academy of Management and Technology in 2024. I&apos;m currently growing my skills in cybersecurity and AWS
                  cloud practices.
                </p>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
                <div className="flex-1 h-px bg-[#CDC1FF]"></div>
                <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full"></div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg text-[#2d1b69]">Let&apos;s build</h3>
                <p>
                  If you need help making data useful, deploying secure cloud systems, or experimenting with AI — I&apos;d
                  love to collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
