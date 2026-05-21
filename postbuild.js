import fs from "node:fs"
import path from "node:path"

// Path to generated code
const distDir = path.resolve("dist")

// Loading of the index.html
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8")

// Data for SEO of my sub-pages
const routes = [
  {
    path: "o-mne",
    title: "O mne | Tomáš Pytel - Full-stack Developer",
    desc: "Zistite viac o mojej ceste k programovaniu. Som študent FRI UNIZA a full-stack developer zameraný na moderný web development a self-hosting.",
  },
  {
    path: "projekty",
    title: "Projekty | Tomáš Pytel - Tvorba webových aplikácií",
    desc: "Prezrite si moje portfólio projektov. Od komplexných full-stack aplikácií po osobné experimenty v React, Tailwind a Typescript.",
  },
  {
    path: "kontakt",
    title: "Kontakt | Ozvite sa mi - Tomáš Pytel",
    desc: "Máte projekt alebo nápad na spoluprácu? Hľadáte šikovného programátora? Ozvite sa mi, som otvorený novým príležitostiam.",
  },
]

// Generation of HTML files for sub-pages
routes.forEach((route) => {
  const routeDir = path.join(distDir, route.path)

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true })
  }

  // Overwriting of title
  let newHtml = indexHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  )

  // Overwriting Meta Description
  newHtml = newHtml.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${route.desc}" />`
  )

  // Overwriting Canonical Link
  newHtml = newHtml.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
    `<link rel="canonical" href="https://Tomas-Pytel.github.io/portfolio-app/${route.path}" />`
  )

  // Saving of updated file
  fs.writeFileSync(path.join(routeDir, "index.html"), newHtml)
})

fs.writeFileSync(path.join(distDir, "404.html"), indexHtml)
