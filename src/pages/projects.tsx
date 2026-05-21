import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import ProjectCard from "@/components/project-card"

const allProjects = [
  {
    title: "Rentio",
    description:
      "Komplexná webová aplikácia na správu nájomných nehnuteľností. Umožňuje prenajímateľom sledovať platby, zmluvy a komunikáciu s nájomníkmi na jednom mieste.",
    link: "https://rentio-rosy.vercel.app/",
    github: "",
    image: `${import.meta.env.BASE_URL}rentio.webp`,
    tags: ["Nextjs", "Supabase", "Tailwind", "Prisma", "Zod"],
  },
  {
    title: "Portfolio 2026",
    description:
      "Táto stránka — osobné portfolio postavené na modernom stacku s dôrazom na animácie, typografiu a čistý kód.",
    link: "https://tomas-pytel.github.io/portfolio-app/",
    github: "https://github.com/tomas-pytel/portfolio-app",
    image: `${import.meta.env.BASE_URL}portfolio.webp`,
    tags: ["React", "Tailwind", "Framer Motion", "Typescript"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Helmet>
        <title>Projekty | Tomáš Pytel - Tvorba webových aplikácií</title>
        <meta
          name="description"
          content="Prezrite si moje portfólio projektov. Od komplexných full-stack aplikácií po osobné experimenty v React, Tailwind a Typescript."
        />
        <link
          rel="canonical"
          href="https://Tomas-Pytel.github.io/portfolio-app/projekty"
        />
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center md:text-left"
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tighter text-white md:text-7xl">
          Všetky{" "}
          <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            projekty
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Prehľad mojich doterajších prác, od komplexných full-stack aplikácií
          až po osobné experimenty. Každý projekt je pre mňa príležitosťou
          naučiť sa niečo nové.
        </p>
      </motion.div>

      {/* Grid with projects */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
        {allProjects.map((project, i) => (
          <ProjectCard key={project.title} index={i} project={project} />
        ))}
      </div>
    </div>
  )
}
