import { useState, useEffect } from "react";
import { Banner } from "../components/banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TourCard } from "../components/tour-card";
import { motion } from "framer-motion";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "../components/scroll-to-top";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTours, setPaginatedTours] = useState([]); // Store paginated data
  const itemsPerPage = 8;

  useEffect(() => {
    const storedTours = localStorage.getItem("toursData");

    if (storedTours) {
      const parsedTours = JSON.parse(storedTours);
      setTours(parsedTours);
      updatePaginatedData(parsedTours, 1); // Set first-page data instantly
      setLoading(false);
    } else {
      fetchTours();
    }
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_hotels_search_v2",
        {
          params: { location: "india" },
          headers: {
            "x-rapidapi-key": "8b2433d626msha7dee48a2972e2ep1f6e58jsn3405de35e2f0",
            "x-rapidapi-host": "real-time-tripadvisor-scraper-api.p.rapidapi.com",
          },
        }
      );
      setTours(response.data.data);
      localStorage.setItem("toursData", JSON.stringify(response.data.data));
      updatePaginatedData(response.data.data, 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to update paginated data immediately
  const updatePaginatedData = (allTours, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedTours(allTours.slice(startIndex, endIndex));
  };

  const totalPages = Math.ceil(tours.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage === currentPage) return;
    setCurrentPage(newPage);
    updatePaginatedData(tours, newPage);
    window.scrollTo({ top: 0, behavior: "instant" }); // Instant scroll to top
  };

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 gradient-text text-center">
            Loading...
          </h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 gradient-text text-center">
            Error loading tours
          </h2>
          <p className="text-muted-foreground text-center">{error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Banner
          title="Explore Our Tours"
          subtitle="Discover our handpicked selection of tours and travel experiences"
          height="medium"
          pattern="lines"
        />

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
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                Explore Our All Tours
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular and highly-rated travel experiences
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {paginatedTours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i + 1}
                    variant="outline"
                    className={
                      currentPage === i + 1
                        ? "bg-blue-500 text-white border border-blue-500"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-200"
                    }
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
