"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const defaultProps = {
  tagline: "MindSpace",
  heading: "Transform Meetings into Actionable Insights",
  description:
    "AI-powered meeting transcription and analysis that helps you focus on what matters most",
  features: [
    "Deal progress tracking",
    "Customer sentiment analysis",
    "Automatic CRM updates",
  ],
  cta: {
    primary: { label: "Get Started", href: "/get-started" },
    secondary: { label: "View Testimonials", href: "#testimonials" },
  },
  image: {
    src: "/Hero.png",
    alt: "Hero visual",
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { scale: 0.98 }
};

export function HeroSection(props) {
  const { tagline, heading, description, features, cta, image } = {
    ...defaultProps,
    ...props,
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      className="bg-secondary section-padding-y px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <motion.div 
          className="flex flex-1 flex-col gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div className="flex flex-col gap-4" variants={containerVariants}>
            {/* Tagline */}
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase w-fit shadow-lg"
            >
              <Star className="h-3 w-3" fill="white" />
              {tagline}
            </motion.span>

            {/* Main Heading */}
<motion.h1
  id="hero-heading"
  variants={itemVariants}
  className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground uppercase"
>
  {heading}
</motion.h1>


            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Feature List */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div 
                className="flex items-center gap-3" 
                key={idx}
                variants={itemVariants}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="text-green-600 h-3 w-3" />
                </div>
                <span className="text-lg text-card-foreground font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a
              href={cta.primary.href}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-500 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                {cta.primary.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>

            <motion.a
              href={cta.secondary.href}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center text-lg font-semibold py-4 px-8 rounded-xl border-2 border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
            >
              {cta.secondary.label}
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex items-center gap-6 text-sm text-muted-foreground"
            variants={itemVariants}
          >
 <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"  // this makes the star filled
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">4.9/5 rating</span>
    </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="w-full flex-1"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AspectRatio ratio={1 / 1}>
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/5 to-background/20" />
            </div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
}

HeroSection.defaultProps = defaultProps;