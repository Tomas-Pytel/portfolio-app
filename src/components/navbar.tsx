import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export interface NavLink {
  label: string
  href: string
  icon?: React.ElementType
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links: NavLink[] = [
    { label: "Domov", href: "/" },
    { label: "Projekty", href: "/projekty" },
    { label: "O mne", href: "/o-mne" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <nav className="mx-auto max-w-6xl px-4 sm:px-10">
      {/* Top bar */}
      <div className="flex items-center justify-between py-6">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <img
            src={`${import.meta.env.BASE_URL}portfolio-logo.webp`}
            alt="Logo"
            className="h-12 w-12 rounded-xl object-contain transition-all duration-300"
            style={{ filter: "drop-shadow(0 0 20px rgba(245,158,11,0.6))" }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden gap-1 text-sm font-medium text-zinc-400 md:flex">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              asChild
              className="px-3 font-medium text-zinc-400 hover:bg-amber-500/10 hover:text-amber-400"
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-zinc-700 hover:text-amber-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-800 md:hidden"
          >
            <div className="flex flex-col gap-1 pt-2 pb-4">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-amber-500/10 hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
