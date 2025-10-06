"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialsShowcase from "../Testimonial";
import ProfessionalCTA from "../ProfessionalCta";
import { Marquee } from "../LogoMarquee";

export function ServiceBody({ service }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Default data that can be overridden by service-specific data
  const testimonials = service?.testimonials || [
    {
      name: "Client Name",
      company: "Company Name",
      rating: 5,
      text: "This service exceeded our expectations. Professional and delivered on time!",
      image: "/testimonials/default.jpg"
    }
  ];

  const processSteps = service?.processSteps || [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your requirements and project goals"
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project planning and strategy development"
    },
    {
      step: "03",
      title: "Execution",
      description: "High-quality delivery with regular updates"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Final delivery and support"
    }
  ];

  const packages = service?.packages || [
    {
      name: "Basic",
      price: "Starting at $499",
      features: [
        "Core service features",
        "Standard support",
        "Basic deliverables",
        "Reasonable timeline"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "Starting at $899",
      features: [
        "Enhanced features",
        "Priority support",
        "Advanced deliverables",
        "Faster timeline",
        "Additional revisions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Full feature set",
        "24/7 dedicated support",
        "Complete solution",
        "Custom timeline",
        "Unlimited revisions",
        "Ongoing maintenance"
      ],
      popular: false
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
      {service?.points && service?.points.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                What You Get
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {service.images && service.images.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Work
              </h2>
              <p className="text-xl text-gray-600">
                See examples of our previous projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.images.slice(0, 6).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${service.name} example ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

{/* Process Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
        How It Works
      </h2>
      <p className="text-xl text-gray-600">
        Simple, transparent process from start to finish
      </p>
    </motion.div>

    <div className="relative">
      {/* Fixed SVG Path Animation */}
      <svg className="absolute top-10 left-0 w-full h-20 hidden lg:block" style={{ zIndex: 0 }}>
        <motion.path
          d="M5,10 C100,10 200,10 300,10 S500,10 600,10 S800,10 950,10"
          stroke="#0E9F6E"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center group"
          >
            <motion.div
              className="w-20 h-20 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              {step.step}
            </motion.div>
            
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              {step.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
<TestimonialsShowcase />

<Marquee/>



<ProfessionalCTA />
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged portfolio image"
                width={1200}
                height={800}
                className="rounded-2xl object-contain max-h-[80vh]"
              />
              <button
                className="absolute -top-12 right-0 text-white text-lg hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                Close ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}