import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const journey = [
  {
    title: "Programátor / IT Systems Developer",
    company: "IPESOFT spol. s r.o.",
    period: "FEB 2025 - APR 2026",
    description:
      "Vývoj a údržba informačných systémov (Java, JavaScript, React, TypeScript). Práca s databázou Postgres, návrh UX/UI a návrh a implementácia aplikačného rozhrania pre interný systém.",
    type: "work",
  },
  {
    title: "Inteligentné informačné systémy (Ing.)",
    company: "Žilinská univerzita (FRI)",
    period: "SEP 2025 - Doteraz",
    description:
      "Pokračovanie v inžinierskom štúdiu so zameraním na pokročilé informačné systémy a AI.",
    type: "edu",
  },
  {
    title: "Informatika (Bc.)",
    company: "Žilinská univerzita (FRI)",
    period: "SEP 2022 - JÚN 2025",
    description: "Získanie bakalárskeho titulu v odbore Informatika.",
    type: "edu",
  },
  {
    title: "Bilingválne štúdium (Anglický jazyk)",
    company: "Gymnázium J. M. Hurbana v Čadci",
    period: "SEP 2017 - JÚN 2022",
    description:
      "Stredoškolské štúdium zamerané na anglický jazyk v bilingválnej sekcii.",
    type: "edu",
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-4xl animate-in px-10 py-20 duration-700 fade-in lg:px-6">
      {/* About me */}
      <section className="mb-20 text-left">
        <h1 className="mb-8 text-center text-5xl font-bold tracking-tighter text-white md:text-left lg:text-7xl">
          Niečo o{" "}
          <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            mne
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Kódovanie pre mňa nie je len práca — je to spôsob, ako premieňať
          nápady na reálne produkty. Som junior full-stack developer z Čadce a
          rád tvorím aplikácie, ktoré nielen dobre vyzerajú, ale aj spoľahlivo
          fungujú. Zaujíma ma moderný web development, používateľský zážitok a
          neustále objavovanie nových technológií.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Vo voľnom čase sa venujem hudbe — hrám na gitaru a klavír — a rád
          experimentujem aj mimo samotného programovania. Popri tom som si
          vybudoval vlastný server na testovanie webových aplikácií a domáci
          cloud postavený na platforme Nextcloud, vďaka čomu si rozširujem
          skúsenosti aj v oblasti serverov, self-hostingu a infraštruktúry.
        </p>
      </section>

      {/* My Timeline */}
      <section>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
          Moja cesta
        </h2>

        {/* Timeline container */}
        <div className="relative ml-3 space-y-8 border-l-2 border-amber-500/60 pb-4 md:ml-6">
          {journey.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Ikona na časovej osi (Node) */}
              <div className="absolute top-4 -left-5.25 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#09090b] bg-zinc-800 text-amber-500 shadow-sm transition-colors">
                {item.type === "work" ? (
                  <Briefcase size={18} />
                ) : (
                  <GraduationCap size={18} />
                )}
              </div>

              {/* Card content */}
              <Card className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/80 hover:shadow-lg hover:shadow-amber-500/20">
                <CardHeader className="flex flex-col items-start gap-4 space-y-0 pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-zinc-100">
                      {item.title}
                    </CardTitle>
                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-amber-500/80">
                      {item.company}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="shrink-0 border-amber-500/20 bg-amber-500/10 text-amber-400"
                  >
                    {item.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
