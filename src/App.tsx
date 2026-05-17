import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-amber-500/30 selection:text-amber-50">
      {/* Navigation */}
      <Navbar />

      {/** Main section */}
      <div className="min-h-[70vh]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default App
