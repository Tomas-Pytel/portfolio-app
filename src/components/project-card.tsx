import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Github } from "@/components/footer"

export interface ProjectCard {
  title: string
  description: string
  link: string
  github?: string
  image: string
  tags: string[]
}

interface ProjectCardProps {
  project: ProjectCard
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, link, github, image, tags } = {
    ...project,
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Project image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mb-6 block aspect-video w-full overflow-hidden rounded-xl bg-zinc-950"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
      </a>

      {/* Card content */}
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-zinc-100 transition-colors group-hover:text-amber-400">
            {title}
          </h2>

          {/* Link (icons) */}
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                title="Zdrojový kód na GitHube"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            <a
              href={link}
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
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
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
  )
}
