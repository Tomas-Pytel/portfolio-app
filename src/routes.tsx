import { createBrowserRouter } from "react-router-dom"

// Import your Layout and Pages
import App from "./App.tsx"
import Home from "./pages/home.tsx"
import About from "./pages/about.tsx"
import Contact from "./pages/contact.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/o-mne",
        element: <About />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
    ],
  },
])
