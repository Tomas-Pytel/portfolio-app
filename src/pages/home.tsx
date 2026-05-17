import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"

export default function Home() {
  return (
    <div className="animate-in duration-700 fade-in">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  )
}
