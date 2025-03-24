"use client"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"
import { AnimatePresence } from "framer-motion"
import { ParallaxProvider } from "react-scroll-parallax"
import "aos/dist/aos.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <ThemeProvider attribute="class"  enableSystem disableTransitionOnChange>
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </ThemeProvider>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>,
)

