"use client"

import { Banner } from "../components/banner"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Users, Award, Clock, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden site-wrapper">
      <Header />
      <main className="flex-1 site-content">
        <Banner
          title="About TravelEase"
          subtitle="Learn about our story, mission, and the team behind your travel experiences"
          height="medium"
          pattern="dots"
        />

        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pattern-waves opacity-30 -z-10"></div>
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2010, TravelEase began with a simple mission: to make travel accessible, enjoyable, and
                  enriching for everyone. What started as a small team of passionate travelers has grown into a global
                  company serving thousands of adventurers each year.
                </p>
                <p className="text-muted-foreground">
                  Our journey has taken us to over 100 countries, allowing us to build strong local partnerships and
                  gain invaluable insights into what makes each destination special. This expertise enables us to create
                  authentic experiences that go beyond typical tourism.
                </p>
              </motion.div>

              <motion.div
                className="relative card-image-container rounded-lg overflow-hidden glass"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our team exploring destinations"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-30 -z-10"></div>
          <div className="container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission & Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're guided by a set of principles that ensure we deliver exceptional travel experiences
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="glass p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Users className="h-10 w-10 text-primary mb-4 floating" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize your needs and preferences to create personalized travel experiences.
                </p>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Award className="h-10 w-10 text-primary mb-4 floating" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from planning to execution.
                </p>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Clock className="h-10 w-10 text-primary mb-4 floating" />
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  You can count on us to deliver what we promise, when we promise it.
                </p>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Globe className="h-10 w-10 text-primary mb-4 floating" />
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to responsible tourism that respects local cultures and environments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30 -z-10"></div>
          <div className="container">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of travel experts is passionate about creating unforgettable experiences
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  className="text-center glass p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: item * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                    <img
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={`Team member ${item}`}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Jane Doe</h3>
                  <p className="text-primary">Travel Specialist</p>
                  <p className="text-muted-foreground mt-2">
                    10+ years of experience creating custom travel itineraries.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer className="site-footer" />
    </div>
  )
}

