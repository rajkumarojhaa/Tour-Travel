"use client"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

export function Card({ className, variant = "default", ...props }) {
  const cardVariants = {
    default: "bg-card text-card-foreground",
    glass: "glass text-card-foreground",
    gradient: "bg-gradient-1 text-white",
  }

  return (
    <motion.div
      className={cn("rounded-lg border shadow hover-card", cardVariants[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <motion.h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <motion.p
      className={cn("text-sm text-muted-foreground", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <motion.div
      className={cn("p-6 pt-0", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      {...props}
    />
  )
}

export function CardFooter({ className, ...props }) {
  return (
    <motion.div
      className={cn("flex items-center p-6 pt-0", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      {...props}
    />
  )
}

