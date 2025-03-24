"use client"
import { motion } from "framer-motion"

const galleryImages = [
  {
    src: "/pic1.jpg?height=600&width=800",
    alt: "Beach destination with palm trees",
    caption: "Tropical Paradise",
  },
  {
    src: "/pic2.jpg?height=600&width=800",
    alt: "Mountain landscape with snow caps",
    caption: "Mountain Escape",
  },
  {
    src: "/pic3.jpg?height=600&width=800",
    alt: "Historic European city street",
    caption: "Cultural Journey",
  },
  {
    src: "/pic4.jpg?height=600&width=800",
    alt: "Desert safari with camels",
    caption: "Desert Adventure",
  },
  {
    src: "/pic5.jpg?height=600&width=800",
    alt: "Underwater coral reef with fish",
    caption: "Ocean Discovery",
  },
  {
    src: "/hero3.jpg?height=600&width=800",
    alt: "Cityscape at night with lights",
    caption: "Urban Exploration",
  },
]

export function ImageGallery() {
  return (
    <section className="py-16 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pattern-waves -z-10"></div>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Beautiful Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore stunning locations around the world waiting for you to discover
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <motion.p
                    className="text-white font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {image.caption}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

