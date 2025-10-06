"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
  {
    title: "It Was Design Strategy All Along",
    quote: "We thought our visuals just needed tweaks. Turned out we had a design strategy issue. Fewlix fixed both.",
    author: "Amina",
    role: "Founder, Glow Beauty",
    rating: 5
  },
  {
    title: "Too Many Design Requests to Keep Up",
    quote: "Honestly, we were flooded with design needs that slowed us down. Fewlix handled everything so smoothly, we had to scale up our campaigns.",
    author: "Zain",
    role: "CEO, HomeStyle Furnishings",
    rating: 5
  },
  {
    title: "Beyond Pretty Graphics: Real Clarity",
    quote: "We were stuck with inconsistent branding for months. Fewlix didn’t just fix it, they explained exactly what was wrong and why. Finally, we have a clear vision.",
    author: "Sara",
    role: "Owner, AromaLux Fragrances",
    rating: 5
  },
  {
    title: "Game-Changing Design Results",
    quote: "The transformation was incredible. Our engagement doubled within the first month, and Fewlix’s creative strategy made all the difference.",
    author: "Omar",
    role: "Marketing Lead, TrendWave Apparel",
    rating: 5
  },
  {
    title: "Exceeded All Expectations",
    quote: "Not only did Fewlix deliver stunning designs, but they went above and beyond. Our ROI has never been better, and communication was flawless.",
    author: "Nadia",
    role: "Brand Manager, FreshSip Beverages",
    rating: 5
  },
  {
    title: "Perfect Design Partnership",
    quote: "Working with Fewlix feels like having an extension of our own creative team. They get our brand and deliver consistently.",
    author: "Hassan",
    role: "Creative Director, UrbanPulse Media",
    rating: 5
  },
  {
    title: "Design That Brings Our Brand to Life",
    quote: "Fewlix revamped our logo and packaging with fresh, eye-catching designs. Customer feedback has been amazing.",
    author: "Laila",
    role: "Co-Founder, PureGlow Skincare",
    rating: 5
  },
  {
    title: "Creative Experts Who Get Business",
    quote: "Fewlix doesn’t just make designs—they understand our goals and create visuals that actually convert.",
    author: "Faisal",
    role: "Founder, FreshBites Food Truck",
    rating: 5
  },
  {
    title: "Consistent Quality, On Time",
    quote: "Fewlix has been our go-to for all branding materials. Quality is always exceptional and deadlines are never missed.",
    author: "Maya",
    role: "Marketing Manager, Luxe Interiors",
    rating: 5
  }
]

const clientImages = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
]

export default function TestimonialsShowcase() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)

  // Card width and gap
  const cardWidth = 400
  const gapPx = 24

  const totalCards = testimonials.length * 2
  const totalWidthPx = totalCards * cardWidth + (totalCards - 1) * gapPx
  const slideWidthPx = testimonials.length * cardWidth + (testimonials.length - 1) * gapPx

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Customer Stories</span>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <h2 className="text-xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            More Impactful Projects Delivered
            <br />
            Than Other Agencies Have Clients.
          </h2>
        </div>

        {/* Desktop Scroll */}
        {!isMobile ? (
          <div className="mb-8 relative px-6 overflow-x-hidden">
            <motion.div
              className="flex gap-6"
              style={{ width: `${totalWidthPx}px` }}
              animate={{ x: [0, -slideWidthPx] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="p-6 flex flex-col justify-between h-auto">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-green-400 text-green-400"
                          />
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {testimonial.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed break-words">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Mobile */
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between p-6 h-auto"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-green-400 text-green-400"
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {testimonials[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed break-words">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-6">
              <button onClick={prevSlide} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <motion.div 
          className="bg-green-400 rounded-2xl p-6 flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {clientImages.map((src, index) => (
                <div key={index} className="relative">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Client ${index + 1}`}
                    width={50}
                    height={50}
                    className="rounded-full aspect-square border-2 border-white object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="md:text-lg font-semibold text-gray-900">
              300+ happy clients shared stories
            </span>
          </div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="w-6 h-6 text-gray-900" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
