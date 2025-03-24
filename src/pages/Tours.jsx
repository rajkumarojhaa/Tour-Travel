"use client"

import { useState, useEffect } from "react"
import { Banner } from "../components/banner"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { TourCard } from "../components/tour-card"
import { motion } from "framer-motion"
import axios from 'axios';

export default function Tours() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  

  // Fetch tours from API with the query parameters.
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_restaurants_search_v2',
      params: {location: 'india'},
      headers: {
        'x-rapidapi-key': '8b2433d626msha7dee48a2972e2ep1f6e58jsn3405de35e2f0',
        'x-rapidapi-host': 'real-time-tripadvisor-scraper-api.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        setTours(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 gradient-text text-center">Loading...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 gradient-text text-center">Error loading tours</h2>
          <p className="text-muted-foreground text-center">{error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1">
        <Banner
          title="Explore Our Tours"
          subtitle="Discover our handpicked selection of tours and travel experiences"
          height="medium"
          pattern="lines"
        />

        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <TourCard {...tour} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
