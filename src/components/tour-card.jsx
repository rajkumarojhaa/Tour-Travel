import { Link } from "react-router-dom"
import { MapPin, Star } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

export function TourCard({ id, name, photos, address, price, rating, styles }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img src={photos?.[0] || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
        <motion.h3 className="text-lg font-semibold line-clamp-1" whileHover={{ color: "#6366f1" }}>
            {name}
          </motion.h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
            <span className="text-sm font-medium">{rating?.total}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          {address?.fullAddress}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-center">
          <div>
          <span className="text-lg font-bold gradient-text">${price?.priceMin || "500"}</span>
            <span className="text-muted-foreground text-sm"> / person</span>
          </div>
          <div className="text-sm text-muted-foreground">{styles?.[0]}</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/tours/${id}`} className="w-full">
          <Button variant="gradient" className="w-full shimmer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

