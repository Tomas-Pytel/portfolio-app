import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "react-original.svg" },
  { name: "Next.js", icon: "nextjs-original.svg" },
  { name: "Node.js", icon: "nodejs-original.svg" },
  { name: "Tailwind", icon: "tailwindcss-original.svg" },
  { name: "TypeScript", icon: "typescript-original.svg" },
  { name: "PostgreSQL", icon: "postgresql-original.svg" },
  { name: "Oracle", icon: "oracle-original.svg" },
  { name: "C#", icon: "csharp-original.svg" },
  { name: "ASP.NET", icon: "dotnetcore-original.svg" },
  { name: "Git", icon: "git-original.svg" },
  { name: "Java", icon: "java-original.svg" },
  { name: "Python", icon: "python-original.svg" },
  { name: "Bootstrap", icon: "bootstrap-original.svg" },
]

export default function TechStack() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950/50 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-sm font-medium tracking-widest text-zinc-500 uppercase">
          Technológie, s ktorými pracujem
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-80 md:gap-16">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className="group flex cursor-pointer items-center gap-2 transition-all duration-300"
            >
              <div className="flex h-8 w-8 items-center justify-center grayscale filter transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] group-hover:grayscale-0">
                <img
                  src={`${import.meta.env.BASE_URL}icons/${tech.icon}`}
                  alt={tech.name}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:text-amber-400 md:text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
