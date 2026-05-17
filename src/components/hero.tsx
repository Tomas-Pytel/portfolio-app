import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // <-- 1. Import Badge

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-zinc-950">
        <div className="absolute top-0 right-auto bottom-auto left-[20%] h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-amber-500/20 opacity-50 blur-[100px]"></div>
        <div className="absolute top-0 right-[10%] bottom-auto left-auto h-[400px] w-[400px] translate-x-[20%] translate-y-[10%] rounded-full bg-orange-600/15 opacity-50 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Badge
          variant="outline"
          className="mb-8 border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-400 uppercase backdrop-blur-sm"
        >
          Full-stack Developer
        </Badge>

        <h1 className="mb-6 cursor-default bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-5xl font-bold tracking-tighter text-white transition-colors duration-500 hover:text-transparent md:text-7xl">
          Tvorím digitálne produkty <br /> pomocou kódu a dizajnu.
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
