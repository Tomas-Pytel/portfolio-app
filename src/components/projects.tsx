import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Rentio",
    description: "Webová aplikácia na správu nájomných nehnuteľností",
    link: "#",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Placeholder zatial",
    description: "X",
    link: "#",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Portfolio 2026",
    description: "Táto stránka",
    link: "#",
    className: "md:col-span-1 md:row-span-1",
  },
]

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h3 className="mb-10 text-3xl font-bold tracking-tight text-white">
        Moja práca
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 ${project.className}`}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-amber-400">
                  {project.title}
                </h4>
                <p className="text-zinc-400">{project.description}</p>
              </div>
              <div className="mt-10 flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 transition-all duration-300 group-hover:border-amber-500/50 group-hover:bg-amber-500/20 group-hover:text-amber-400">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
            {/* Background Glow Effect on Hover */}
            <div className="absolute -inset-px bg-linear-to-br from-amber-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}
