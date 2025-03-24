"use client"

import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Tours from "./pages/Tours"
import Login from "./pages/Login"
import Register from "./pages/Register"
import TourDetail from "./pages/TourDetail"
import AOS from "aos"
import { AnimatePresence } from "framer-motion"
import { ScrollToTop } from "./components/scroll-to-top"

function App() {
  const location = useLocation()

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App

