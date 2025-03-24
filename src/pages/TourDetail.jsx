"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Heart,
  Share2,
  CheckCircle,
  X,
  Plane,
  Utensils,
  Wifi,
  Home,
  Camera,
} from "lucide-react"

// Sample tour data - in a real app, you would fetch this based on the ID
const toursData = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    price: 1299,
    duration: "7 Days",
    rating: 4.8,
    description:
      "Experience the magic of Bali with our 7-day paradise escape. From pristine beaches to lush rice terraces and ancient temples, this tour offers the perfect blend of relaxation, adventure, and cultural immersion. Enjoy luxury accommodations, expert guides, and unforgettable experiences in one of Indonesia's most beloved destinations.",
    highlights: [
      "Visit the sacred Uluwatu Temple perched on a cliff",
      "Relax on the pristine beaches of Nusa Dua",
      "Explore the artistic center of Ubud",
      "Experience traditional Balinese dance performances",
      "Discover the stunning Tegalalang Rice Terraces",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description:
          "Arrive at Ngurah Rai International Airport. Transfer to your hotel in Kuta. Welcome dinner and brief orientation.",
      },
      {
        day: 2,
        title: "Kuta Beach & Tanah Lot",
        description: "Morning at Kuta Beach. Afternoon visit to Tanah Lot Temple to witness the spectacular sunset.",
      },
      {
        day: 3,
        title: "Ubud Cultural Day",
        description: "Full day exploring Ubud. Visit the Monkey Forest, Ubud Palace, and local art galleries.",
      },
      {
        day: 4,
        title: "Tegalalang & Coffee Plantation",
        description:
          "Morning at Tegalalang Rice Terraces. Afternoon visit to a coffee plantation to taste Luwak coffee.",
      },
      {
        day: 5,
        title: "Mount Batur Sunrise Trek",
        description: "Early morning trek to Mount Batur to witness the sunrise. Afternoon at leisure.",
      },
      {
        day: 6,
        title: "Uluwatu & Beach Day",
        description: "Morning at leisure. Afternoon visit to Uluwatu Temple followed by a Kecak dance performance.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Free time for last-minute shopping. Transfer to the airport for your departure flight.",
      },
    ],
    included: [
      "6 nights accommodation",
      "Daily breakfast, 3 lunches, and 2 dinners",
      "All transportation within Bali",
      "English-speaking guide",
      "Entrance fees to all attractions",
      "Airport transfers",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Meals not mentioned",
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "This tour exceeded all my expectations! The guides were knowledgeable and friendly, and the itinerary was perfectly balanced.",
      },
      {
        name: "Michael Chen",
        rating: 4,
        comment: "Great experience overall. The accommodations were excellent and the activities were well-planned.",
      },
      {
        name: "Emma Wilson",
        rating: 5,
        comment: "Absolutely magical! Bali is stunning and this tour showed us all the best spots. Highly recommend!",
      },
    ],
  },
  {
    id: 2,
    title: "Santorini Island Adventure",
    location: "Santorini, Greece",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    price: 1599,
    duration: "8 Days",
    rating: 4.9,
    description:
      "Discover the breathtaking beauty of Santorini with our 8-day island adventure. Explore picturesque white-washed villages, swim in crystal-clear waters, and witness the famous Santorini sunset. This tour combines relaxation, adventure, and authentic Greek experiences for an unforgettable Mediterranean getaway.",
    highlights: [
      "Watch the famous sunset from Oia",
      "Sail around the caldera on a catamaran cruise",
      "Visit the ancient ruins of Akrotiri",
      "Wine tasting at local vineyards",
      "Relax on the unique red and black beaches",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description:
          "Arrive at Santorini Airport. Transfer to your hotel in Fira. Welcome dinner with views of the caldera.",
      },
      {
        day: 2,
        title: "Fira Exploration",
        description: "Guided walking tour of Fira. Visit the Archaeological Museum and enjoy free time to explore.",
      },
      {
        day: 3,
        title: "Akrotiri & Beaches",
        description: "Morning visit to the ancient city of Akrotiri. Afternoon at Red Beach and Perissa Black Beach.",
      },
      {
        day: 4,
        title: "Catamaran Cruise",
        description: "Full-day catamaran cruise around the caldera. Swim in hot springs and enjoy a BBQ lunch onboard.",
      },
      {
        day: 5,
        title: "Wine Tour",
        description: "Visit three traditional wineries and taste the unique Santorinian wines. Evening at leisure.",
      },
      {
        day: 6,
        title: "Oia Day Trip",
        description:
          "Full day in the picturesque village of Oia. Explore the narrow streets and stay for the famous sunset.",
      },
      {
        day: 7,
        title: "Pyrgos & Traditional Cooking",
        description:
          "Morning visit to the village of Pyrgos. Afternoon cooking class to learn traditional Greek recipes.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Free time for last-minute shopping or relaxation. Transfer to the airport for your departure flight.",
      },
    ],
    included: [
      "7 nights accommodation",
      "Daily breakfast and 3 dinners",
      "All transportation within Santorini",
      "English-speaking guide",
      "Catamaran cruise with BBQ",
      "Wine tasting",
      "Cooking class",
      "Airport transfers",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Meals not mentioned",
    ],
    reviews: [
      {
        name: "David Thompson",
        rating: 5,
        comment:
          "The views in Santorini are unbelievable, and this tour made sure we saw all the best spots. The catamaran cruise was a highlight!",
      },
      {
        name: "Jennifer Lee",
        rating: 5,
        comment:
          "Perfect itinerary! Loved the balance of guided activities and free time. The accommodations had amazing caldera views.",
      },
      {
        name: "Robert Garcia",
        rating: 4,
        comment:
          "Great tour overall. The wine tasting and cooking class added a nice cultural touch to the beautiful scenery.",
      },
    ],
  },
  // Add more tours as needed
]

function TourCard({ id, title, location, image, duration, rating }) {
  return (
    <Link
      to={`/tour/${id}`}
      className="glass rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-w-3 aspect-h-2">
        <img className="object-cover w-full h-full" src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">
          <MapPin className="inline-block h-4 w-4 mr-1" />
          {location}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <Calendar className="inline-block h-4 w-4 mr-1" />
            {duration}
          </span>
          <span className="text-sm">
            <Star className="inline-block h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            {rating}/5
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function TourDetail() {
  const { id } = useParams()
  const [selectedDate, setSelectedDate] = useState("")
  const [travelers, setTravelers] = useState(2)
  const [activeTab, setActiveTab] = useState("overview")
  const [activeImage, setActiveImage] = useState(0)

  // Find the tour based on the ID from the URL
  const tour = toursData.find((tour) => tour.id === Number.parseInt(id)) || toursData[0]

  const handleBookNow = () => {
    alert(`Booking confirmed for ${travelers} travelers on ${selectedDate}`)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${tour.image})` }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-black/40 animated-bg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{tour.title}</h1>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{tour.rating}/5</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="glass">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="glass">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 relative">
          <div className="absolute inset-0 pattern-lines opacity-30 -z-10"></div>
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column - Tour Details */}
              <div className="lg:col-span-2">
                {/* Navigation Tabs */}
                <div className="flex overflow-x-auto mb-8 glass p-2 rounded-lg">
                  <button
                    className={`px-4 py-2 rounded-md mr-2 transition-colors ${activeTab === "overview" ? "bg-primary text-white" : "hover:bg-muted"}`}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md mr-2 transition-colors ${activeTab === "itinerary" ? "bg-primary text-white" : "hover:bg-muted"}`}
                    onClick={() => setActiveTab("itinerary")}
                  >
                    Itinerary
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md mr-2 transition-colors ${activeTab === "included" ? "bg-primary text-white" : "hover:bg-muted"}`}
                    onClick={() => setActiveTab("included")}
                  >
                    Included/Not Included
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md transition-colors ${activeTab === "reviews" ? "bg-primary text-white" : "hover:bg-muted"}`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                </div>

                {/* Tab Content */}
                <div className="glass p-6 rounded-lg">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                      <p className="text-muted-foreground mb-6">{tour.description}</p>

                      <h3 className="text-xl font-semibold mb-3">Tour Highlights</h3>
                      <ul className="space-y-2 mb-6">
                        {tour.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold mb-3">Gallery</h3>
                      <div className="mb-4">
                        <div className="aspect-video relative rounded-lg overflow-hidden mb-2">
                          <img
                            src={tour.gallery[activeImage] || "/placeholder.svg"}
                            alt={`${tour.title} - featured`}
                            className="w-full h-full object-cover transition-transform duration-500"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {tour.gallery.map((image, index) => (
                            <div
                              key={index}
                              className={`aspect-video rounded-md overflow-hidden cursor-pointer ${activeImage === index ? "ring-2 ring-primary" : ""}`}
                              onClick={() => setActiveImage(index)}
                            >
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${tour.title} - gallery ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mt-8">
                        <div className="glass p-4 rounded-lg text-center">
                          <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">{tour.duration}</h4>
                          <p className="text-sm text-muted-foreground">Duration</p>
                        </div>
                        <div className="glass p-4 rounded-lg text-center">
                          <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">2-10 People</h4>
                          <p className="text-sm text-muted-foreground">Group Size</p>
                        </div>
                        <div className="glass p-4 rounded-lg text-center">
                          <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">{tour.rating}/5</h4>
                          <p className="text-sm text-muted-foreground">Rating</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === "itinerary" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                      <div className="space-y-6">
                        {tour.itinerary.map((day, index) => (
                          <motion.div
                            key={index}
                            className="relative pl-8 pb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {/* Timeline dot and line */}
                            <div className="absolute left-0 top-0 h-full w-px bg-primary/30"></div>
                            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                              {day.day}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                            <p className="text-muted-foreground">{day.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Included/Not Included Tab */}
                  {activeTab === "included" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <h2 className="text-2xl font-bold mb-6">What's Included & Not Included</h2>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Included
                          </h3>
                          <ul className="space-y-3">
                            {tour.included.map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <X className="h-5 w-5 text-red-500 mr-2" />
                            Not Included
                          </h3>
                          <ul className="space-y-3">
                            {tour.notIncluded.map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Important Information</h3>
                        <p className="text-muted-foreground">
                          Please note that the itinerary may be subject to change due to weather conditions or
                          unforeseen circumstances. We recommend purchasing travel insurance before your trip.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === "reviews" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Customer Reviews</h2>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-bold">{tour.rating}/5</span>
                          <span className="text-muted-foreground ml-1">({tour.reviews.length} reviews)</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {tour.reviews.map((review, index) => (
                          <motion.div
                            key={index}
                            className="glass p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex justify-between mb-2">
                              <h3 className="font-semibold">{review.name}</h3>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div>
                <Parallax speed={5}>
                  <Card className="glass sticky top-20">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>Book This Tour</span>
                        <span className="text-2xl font-bold gradient-text">${tour.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Select Date</label>
                        <input
                          type="date"
                          className="w-full p-2 rounded-md border bg-background"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Number of Travelers</label>
                        <div className="flex items-center">
                          <button
                            className="w-10 h-10 rounded-l-md border flex items-center justify-center hover:bg-muted"
                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="w-full p-2 border-y text-center bg-background"
                            value={travelers}
                            onChange={(e) => setTravelers(Math.max(1, Number.parseInt(e.target.value) || 1))}
                            min="1"
                          />
                          <button
                            className="w-10 h-10 rounded-r-md border flex items-center justify-center hover:bg-muted"
                            onClick={() => setTravelers(travelers + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between mb-2">
                          <span>Base Price</span>
                          <span>
                            ${tour.price} x {travelers}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Taxes & Fees</span>
                          <span>${Math.round(tour.price * travelers * 0.1)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Total</span>
                          <span>${Math.round(tour.price * travelers * 1.1)}</span>
                        </div>
                      </div>

                      <Button
                        className="w-full shimmer"
                        size="lg"
                        variant="gradient"
                        onClick={handleBookNow}
                        disabled={!selectedDate}
                      >
                        Book Now
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">No payment required now - pay later</p>
                    </CardContent>
                  </Card>
                </Parallax>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Tour Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="glass p-4 rounded-lg text-center">
                  <Plane className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium">Airport Transfers</h4>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium">Luxury Accommodations</h4>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <Utensils className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium">Selected Meals</h4>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <Wifi className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium">Free Wi-Fi</h4>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium">Photo Opportunities</h4>
                </div>
              </div>
            </div>

            {/* Related Tours */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center gradient-text">You Might Also Like</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {toursData
                  .filter((t) => t.id !== tour.id)
                  .slice(0, 3)
                  .map((relatedTour) => (
                    <TourCard key={relatedTour.id} {...relatedTour} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

