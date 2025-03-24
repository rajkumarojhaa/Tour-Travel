"use client"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10 -z-10"></div>
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold gradient-text">TravelEase</h3>
          <p className="text-muted-foreground">
            Discover the world with us. We provide unforgettable travel experiences to destinations around the globe.
          </p>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-medium">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/tours" className="text-muted-foreground hover:text-primary transition-colors">
                Tours
              </Link>
            </li>
            <li>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-medium">Popular Destinations</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Bali, Indonesia
              </Link>
            </li>
            <li>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Paris, France
              </Link>
            </li>
            <li>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Santorini, Greece
              </Link>
            </li>
            <li>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Tokyo, Japan
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-medium">Contact Us</h4>
          <address className="not-italic text-sm text-muted-foreground">
            <p>123 Travel Street</p>
            <p>Adventure City, AC 12345</p>
            <p className="mt-2">Email: info@travelease.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </address>
        </motion.div>
      </div>

      <motion.div
        className="container mt-8 pt-8 border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TravelEase. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

