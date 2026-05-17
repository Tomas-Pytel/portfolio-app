import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const journey = [
  {
    title: "Programátor / IT Systems Developer",
    company: "IPESOFT spol. s r.o.",
    period: "FEB 2025 - Doteraz",
    description:
      "Vývoj a údržba informačných systémov (Java, React, TS). Práca s databázou Postgres a návrh UX/UI.",
    type: "work",
  },
  {
    title: "Inteligentné informačné systémy (Ing.)",
    company: "Žilinská univerzita (FRI)",
    period: "SEP 2025 - Doteraz",
    description:
      "Pokračovanie v magisterskom štúdiu so zameraním na pokročilé systémy.",
    type: "edu",
  },
  {
    title: "Informatika (Bc.)",
    company: "Žilinská univerzita (FRI)",
    period: "2022 - 2025",
    description: "Získanie bakalárskeho titulu v odbore Informatika.",
    type: "edu",
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-4xl animate-in px-6 py-20 duration-700 fade-in">
      {/* O mne */}
      <section className="mb-20 text-center md:text-left">
        <h1 className="mb-8 text-5xl font-bold tracking-tighter text-white md:text-7xl">
          Kto je{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Tomáš?
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Som juniorný full-stack developer z Čadce, ktorý momentálne pôsobí v
          Žiline. Baví ma riešiť komplexné problémy pomocou moderného kódu a
          čistého dizajnu. Okrem programovania voľný čas venujem hre na hudobný
          nástroj, čo mi pomáha udržiavať kreatívny balans.
        </p>
      </section>

      {/* Moja cesta */}
      <section>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
          Moja cesta
        </h2>
        <div className="space-y-6">
          {journey.map((item, index) => (
            <Card
              key={index}
              className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-amber-500/30"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold text-zinc-100">
                  {item.title}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="border-amber-500/20 bg-amber-500/10 text-amber-400"
                >
                  {item.period}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-amber-500/80">
                  {item.type === "work" ? (
                    <Briefcase size={16} />
                  ) : (
                    <GraduationCap size={16} />
                  )}
                  {item.company}
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
