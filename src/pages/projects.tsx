import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Github } from "@/components/footer"
import { Helmet } from "react-helmet-async"

const allProjects = [
  {
    title: "Rentio",
    description:
      "Komplexná webová aplikácia na správu nájomných nehnuteľností. Umožňuje prenajímateľom sledovať platby, zmluvy a komunikáciu s nájomníkmi na jednom mieste.",
    link: "https://rentio-rosy.vercel.app/",
    github: "",
    image: `${import.meta.env.BASE_URL}rentio.png`,
    tags: ["Nextjs", "Supabase", "Tailwind", "Prisma", "Zod"],
  },
  {
    title: "Portfolio 2026",
    description:
      "Táto stránka — osobné portfolio postavené na modernom stacku s dôrazom na animácie, typografiu a čistý kód.",
    link: "https://tomas-pytel.github.io/portfolio-app/",
    github: "https://github.com/tomas-pytel/portfolio-app",
    image: `${import.meta.env.BASE_URL}portfolio.png`,
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
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-amber-500/10"
          >
            {/* Project image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-6 block aspect-video w-full overflow-hidden rounded-xl bg-zinc-950"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
            </a>

            {/* Card content */}
            <div className="flex flex-1 flex-col">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-zinc-100 transition-colors group-hover:text-amber-400">
                  {project.title}
                </h2>

                {/* Link (icons) */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-white"
                      title="Zdrojový kód na GitHube"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-amber-400"
                    title="Otvoriť projekt"
                  >
                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <p className="mb-6 flex-1 text-base leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors group-hover:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
