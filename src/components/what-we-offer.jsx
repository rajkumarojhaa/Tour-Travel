"use client"
import { Compass, Hotel, Map, Plane, ShieldCheck, Users } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "Flight Booking",
    description: "Book flights to any destination worldwide with our easy-to-use platform.",
  },
  {
    icon: <Hotel className="h-10 w-10 text-primary" />,
    title: "Hotel Reservations",
    description: "Find and book accommodations that fit your budget and preferences.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Tour Packages",
    description: "Explore our curated tour packages for unforgettable travel experiences.",
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "Custom Itineraries",
    description: "Get personalized travel plans tailored to your interests and schedule.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Travel Insurance",
    description: "Protect your journey with comprehensive travel insurance options.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Group Tours",
    description: "Join group tours to meet fellow travelers and share amazing experiences.",
  },
]

export function WhatWeOffer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50 -z-10"></div>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and memorable
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.div className="mb-4 floating" whileHover={{ scale: 1.1, rotate: 5 }}>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

