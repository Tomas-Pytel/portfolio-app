import Hero from "@/components/hero"
import ProjectsHero from "@/components/projects-hero"
import TechStack from "@/components/tech-stack"

export default function Home() {
  return (
    <div className="animate-in duration-700 fade-in">
      <Hero />
      <TechStack />
      <ProjectsHero />
    </div>
  )
}
