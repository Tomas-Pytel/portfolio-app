import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export interface NavLink {
  label: string
  href: string
  icon?: React.ElementType
}

export default function Navbar() {
  const links: NavLink[] = [
    {
      label: "Domov",
      href: "/",
    },
    {
      label: "Projekty",
      href: "/projekty",
    },
    {
      label: "O mne",
      href: "/o-mne",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ]

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-10 py-6">
      <Link
        to="/"
        className="transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <img
          src={`${import.meta.env.BASE_URL}portfolio-logo.png`}
          alt="Logo"
          className="h-12 w-12 rounded-xl object-contain filter-[drop-shadow(0_0_20px_rgba(245,158,11,0.6))] transition-all duration-300 hover:filter-[drop-shadow(0_0_25px_rgba(245,158,11,0.75))]"
        />
      </Link>

      <div className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
        {links.map((link, index) => {
          return (
            <Button
              variant="ghost"
              asChild
              key={index}
              className="font-medium text-zinc-400 hover:bg-amber-500/10 hover:text-amber-400"
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
