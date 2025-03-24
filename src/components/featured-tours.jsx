"use client"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TourCard } from "./tour-card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import axios from 'axios';

export function FeaturedTours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/30 -z-10"></div>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Our Featured Tours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular and highly-rated travel experiences
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {tours.slice(0, 8).map((tour) => (
    <TourCard key={tour.id} {...tour} />
  ))}
</div>


        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/tours">
            <Button size="lg" variant="gradient" className="glass">
              View All Tours
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}