"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function InfiniteScroll({ items, renderItem, loadMore, hasMore, loading, threshold = 200, className = "" }) {
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (target.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1)
          loadMore(page + 1)
        }
      },
      {
        root: null,
        rootMargin: `0px 0px ${threshold}px 0px`,
        threshold: 0.1,
      },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [hasMore, loading, loadMore, page, threshold])

  return (
    <div className={`infinite-scroll-container ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index % 10) * 0.05, duration: 0.5 }}
        >
          {renderItem(item, index)}
        </motion.div>
      ))}

      <div ref={loaderRef} className="infinite-scroll-loader">
        {loading && (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="ml-2">Loading more tours...</span>
          </div>
        )}

        {!hasMore && items.length > 0 && <p className="text-muted-foreground text-center">No more tours to load</p>}
      </div>
    </div>
  )
}

