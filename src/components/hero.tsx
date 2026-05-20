import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // <-- 1. Import Badge
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-6 sm:py-24">
      {/** Background blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-125 w-175 -translate-x-1/2 translate-y-[40%] rounded-full bg-amber-500/20 opacity-50 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/2 h-100 w-125 translate-x-[-30%] translate-y-[50%] rounded-full bg-orange-600/20 opacity-50 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Badge
          variant="outline"
          className="mb-8 border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-400 uppercase backdrop-blur-sm"
        >
          Full-stack Developer
        </Badge>

        <h1 className="mb-6 cursor-default bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl font-bold tracking-tighter text-white transition-colors duration-500 hover:text-transparent sm:text-5xl md:text-7xl">
          Tvorím digitálne produkty <br /> spojením kódu a dizajnu
        </h1>

        <p className="mx-auto mb-10 max-w-150 text-sm leading-relaxed text-zinc-400 sm:text-lg">
          Špecializujem sa na moderné používateľské rozhrania a škálovateľné
          webové aplikácie, ktoré spájajú estetiku s funkčnosťou
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            asChild
            className="rounded-full bg-amber-500 px-8 font-bold text-zinc-950 transition-all hover:scale-105 hover:bg-amber-400"
          >
            <Link to="/projekty">Zobraziť projekty</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full border-zinc-800 bg-zinc-950/50 px-8 text-white backdrop-blur-sm transition-colors hover:bg-zinc-900 hover:text-amber-400"
          >
            <Link to="/kontakt">Kontaktujte ma</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
