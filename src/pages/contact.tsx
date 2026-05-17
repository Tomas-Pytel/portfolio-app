import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

import { Github, Linkedin } from "../components/footer"

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl animate-in px-6 py-32 text-center duration-700 fade-in">
      <h2 className="mb-6 text-sm font-bold tracking-[0.3em] text-amber-500 uppercase">
        Kontakt
      </h2>
      <h1 className="mb-8 text-5xl font-bold tracking-tighter text-white md:text-7xl">
        Máš projekt alebo nápad? <br />
        <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Ozvi sa mi.
        </span>
      </h1>

      <p className="mx-auto mb-12 max-w-125 text-lg text-zinc-400">
        Som otvorený novým príležitostiam a zaujímavým spoluprácam
      </p>

      <div className="flex flex-col items-center justify-center gap-6">
        <Button
          size="lg"
          className="rounded-full bg-amber-500 px-8 py-6 text-lg font-bold text-zinc-950 transition-all hover:scale-105 hover:bg-amber-400"
          asChild
        >
          <a href="mailto:tomas.pytel12@gmail.com">
            Poslať správu
            <Mail className="ml-2 h-5 w-5" />
          </a>
        </Button>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-zinc-800 bg-zinc-900/50 hover:border-amber-500/50 hover:text-amber-400"
            asChild
          >
            <a
              href="https://github.com/Tomas-Pytel"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-zinc-800 bg-zinc-900/50 hover:border-amber-500/50 hover:text-amber-400"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-pytel-6272863a4/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
