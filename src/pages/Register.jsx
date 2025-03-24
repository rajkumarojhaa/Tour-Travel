"use client"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { RegisterForm } from "../components/register-form"
import { motion } from "framer-motion"

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1 py-16 relative">
        <div className="absolute inset-0 pattern-dots opacity-30 -z-10"></div>
        <div className="container">
          <motion.div
            className="max-w-md mx-auto text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2 gradient-text">Create Your Account</h1>
            <p className="text-muted-foreground">Join TravelEase to start planning your next adventure</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RegisterForm />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

