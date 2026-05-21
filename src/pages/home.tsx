import Hero from "@/components/hero"
import ProjectsHero from "@/components/projects-hero"
import TechStack from "@/components/tech-stack"
import { Helmet } from "react-helmet-async"

export default function Home() {
  // Schema for google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tomáš Pytel",
    givenName: "Tomáš",
    familyName: "Pytel",
    jobTitle: "Full-stack Developer",
    url: "https://Tomas-Pytel.github.io/portfolio-app/",
    nationality: {
      "@type": "Country",
      name: "Slovakia",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Čadca",
      addressCountry: "SK",
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Žilinská univerzita v Žiline",
    },

    knowsAbout: [
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwind",
      "PostgreSQL",
      "C#",
      "ASP.NET",
      "Git",
      "Java",
      "Frontend Development",
      "Backend Development",
      "Full-stack Development",
    ],
    sameAs: [
      "https://github.com/Tomas-Pytel",
      "https://www.linkedin.com/in/tomáš-pytel-6272863a4/",
      "mailto:tomas.pytel12@gmail.com",
    ],
  }

  return (
    <div className="animate-in duration-700 fade-in">
      <Helmet>
        <title>Tomáš Pytel | Full-stack Developer</title>
        <meta
          name="description"
          content="Som Tomáš Pytel, junior full-stack developer z Čadce. Tvorím moderné webové aplikácie s využitím React, Next.js a Node.js."
        />
        <link
          rel="canonical"
          href="https://Tomas-Pytel.github.io/portfolio-app/"
        />
        {/* Inserted schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Hero />
      <TechStack />
      <ProjectsHero />
    </div>
  )
}
