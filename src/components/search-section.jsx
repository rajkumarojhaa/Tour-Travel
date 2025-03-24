"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"

export function SearchSection() {
  const [destination, setDestination] = useState("")
  const [guests, setGuests] = useState("2")
  const [date, setDate] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log({ destination, guests, date })
  }

  return (
    <section className="py-12 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines opacity-30 -z-10"></div>
      <div className="container">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Find Your Perfect Getaway</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search for hotels, tours, and experiences in your dream destination
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto glass" variant="glass">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <label htmlFor="destination" className="block text-sm font-medium mb-1">
                    Destination
                  </label>
                  <Input
                    id="destination"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-1">
                    Guests
                  </label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5+">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-4 mt-2">
                  <Button
                    type="submit"
                    className="w-full shimmer"
                    variant="gradient"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

