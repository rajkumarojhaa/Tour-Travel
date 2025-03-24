"use client"

import { Banner } from "../components/banner"
import { FeaturedTours } from "../components/featured-tours"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { ImageGallery } from "../components/image-gallery"
import { SearchSection } from "../components/search-section"
import { WhatWeOffer } from "../components/what-we-offer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen site-wrapper">
      <Header />
      <main className="flex-1 site-content">
        <Banner
          title="Discover the World with Us"
          subtitle="Explore breathtaking destinations and create unforgettable memories with our curated travel experiences"
          buttonText="Start Your Journey"
          pattern="waves"
        />

        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30 -z-10"></div>
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 gradient-text">Experience the Joy of Travel</h2>
                <p className="text-muted-foreground mb-6">
                  At TravelEase, we believe that travel is not just about visiting new places, but about creating
                  meaningful connections and experiences that last a lifetime. Our mission is to make travel accessible,
                  enjoyable, and enriching for everyone.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're seeking adventure, relaxation, cultural immersion, or a mix of everything, our expertly
                  crafted tours and personalized services ensure that your journey is as unique as you are.
                </p>
                <p className="text-muted-foreground">
                  Let us take care of the details while you focus on making memories that will last a lifetime.
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
                  src="/pic1.jpg?height=400&width=600"
                  alt="Travel experience"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <SearchSection />
        <WhatWeOffer />
        <FeaturedTours />
        <ImageGallery />
      </main>
      <Footer className="site-footer" />
    </div>
  )
}

