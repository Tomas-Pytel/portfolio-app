import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // <-- 1. Import Badge

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/** Background blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-125 w-175 -translate-x-1/2 translate-y-[40%] rounded-full bg-amber-500/20 opacity-50 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/2 h-100 w-125 translate-x-[-30%] translate-y-[50%] rounded-full bg-orange-600/20 opacity-50 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10flex relative flex-col items-center"
      >
        <Badge
          variant="outline"
          className="mb-8 border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-400 uppercase backdrop-blur-sm"
        >
          Full-stack Developer
        </Badge>

        <h1 className="mb-6 cursor-default bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-5xl font-bold tracking-tighter text-white transition-colors duration-500 hover:text-transparent md:text-7xl">
          Tvorím digitálne produkty <br /> pomocou kódu a dizajnu
        </h1>

        <p className="mx-auto mb-10 max-w-150 text-lg leading-relaxed text-zinc-400">
          Špecializujem sa na moderné používateľské rozhrania a škálovateľné
          webové aplikácie, ktoré spájajú estetiku s funkčnosťou
        </p>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full bg-amber-500 px-8 font-bold text-zinc-950 transition-all hover:scale-105 hover:bg-amber-400"
          >
            Zobraziť projekty
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-zinc-800 bg-zinc-950/50 px-8 text-white backdrop-blur-sm transition-all hover:bg-zinc-900 hover:text-amber-400"
          >
            Kontaktovať ma
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
