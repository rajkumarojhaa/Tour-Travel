"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  // Check if the current route matches the link
  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-lg border-b border-primary/10" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          
          <motion.span
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TravelEase
          </motion.span>
        </Link>
        <motion.nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className={cn(
                "transition-colors hover:text-primary relative group py-2",
                isActive("/") ? "text-primary font-semibold" : "text-foreground",
              )}
            >
              Home
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/about"
              className={cn(
                "transition-colors hover:text-primary relative group py-2",
                isActive("/about") ? "text-primary font-semibold" : "text-foreground",
              )}
            >
              About
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                  isActive("/about") ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/tours"
              className={cn(
                "transition-colors hover:text-primary relative group py-2",
                isActive("/tours") ? "text-primary font-semibold" : "text-foreground",
              )}
            >
              Tours
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                  isActive("/tours") ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          </motion.div>
        </motion.nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-primary/20 hover:border-primary/50 transition-all">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="gradient" className="shadow-md hover:shadow-lg transition-all">
              Register
            </Button>
          </Link>
        </div>
        <motion.button
          className="md:hidden bg-primary/10 p-2 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      {/* Mobile menu */}
      <motion.div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 glass transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container py-6 flex flex-col space-y-4">
          <Link
            to="/"
            className={cn(
              "text-lg font-medium py-3 px-4 rounded-lg transition-all",
              isActive("/") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Home</span>
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-lg font-medium py-3 px-4 rounded-lg transition-all",
              isActive("/about") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">About</span>
          </Link>
          <Link
            to="/tours"
            className={cn(
              "text-lg font-medium py-3 px-4 rounded-lg transition-all",
              isActive("/tours") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Tours</span>
          </Link>
          <div className="flex flex-col space-y-3 pt-4 mt-4 border-t">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button variant="gradient" className="w-full">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}

