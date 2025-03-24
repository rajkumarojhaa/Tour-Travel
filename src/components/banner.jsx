"use client";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Banner({
  title,
  subtitle,
  buttonText,
  buttonLink = "/tours",
  backgroundImage = "/inbg.jpg?height=600&width=1200",
  height = "large",
  pattern = "none",
}) {
  const heightClasses = {
    small: "h-[250px] sm:h-[300px]",
    medium: "h-[350px] sm:h-[400px]",
    large: "h-[400px] sm:h-[500px] md:h-[600px]",
  };

  const patternClasses = {
    none: "",
    dots: "pattern-dots",
    lines: "pattern-lines",
    waves: "pattern-waves",
  };

  return (
    <motion.div
      className={`relative w-full ${heightClasses[height]} flex items-center justify-center overflow-hidden ${patternClasses[pattern]} px-4 sm:px-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/50 animated-bg" />

      <div className="relative z-10 container text-center px-2 sm:px-4">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to={buttonLink}>
              <Button size="lg" className="font-medium glass px-5 py-3 sm:px-6 sm:py-4" variant="gradient">
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export { Banner };
