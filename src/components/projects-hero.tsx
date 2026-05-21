import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Rentio",
    description:
      "Komplexná webová aplikácia na správu nájomných nehnuteľností. Umožňuje prenajímateľom sledovať platby, zmluvy a komunikáciu s nájomníkmi na jednom mieste.",
    link: "https://rentio-rosy.vercel.app/",
    image: `${import.meta.env.BASE_URL}rentio.webp`,
    tags: ["Nextjs", "Supabase", "Tailwind", "Prisma", "Zod"],
  },
  {
    title: "Portfolio 2026",
    description:
      "Táto stránka — osobné portfolio postavené na modernom stacku s dôrazom na animácie, typografiu a čistý kód.",
    link: "https://tomas-pytel.github.io/portfolio-app/",
    image: `${import.meta.env.BASE_URL}portfolio.webp`,
    tags: ["React", "Tailwind", "Framer Motion", "Typescript"],
  },
]

export default function ProjectsHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Moja práca
        </h3>
      </div>

      {/* Projects */}
      <div className="flex flex-col">
        {projects.map((project, i) => {
          const isEven = i % 2 !== 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`group flex flex-col gap-10 border-t border-zinc-800 py-16 md:flex-row md:items-center md:gap-16 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <a
                href={project.link}
                className="relative w-full overflow-hidden rounded-2xl md:w-1/2"
              >
                <div className="aspect-16/10 w-full bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* subtle overlay on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-all duration-300 ring-inset group-hover:ring-amber-500/20" />
              </a>

              {/* Content */}
              <div className="flex w-full flex-col justify-center md:w-1/2">
                <h4 className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-amber-400 md:text-4xl">
                  {project.title}
                </h4>

                <p className="mb-8 text-base leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className="group/btn flex w-fit items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors duration-200 hover:text-amber-400"
                >
                  Zobraziť projekt
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
