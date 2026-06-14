import HeroGlobe from "@/components/HeroGlobe";
import { Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-background"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-background to-accent/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,oklch(0.48_0.16_145_/_0.08),transparent)] pointer-events-none" />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-80 md:w-[520px] h-80 md:h-[520px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent/8 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span
                data-ocid="hero.badge"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold tracking-wide border border-primary/20 mb-5"
              >
                <Heart className="w-3 h-3 fill-current" />
                Est. 2020 · Bilaspur, Chhattisgarh
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground text-balance mb-6"
            >
              Empowering Lives,{" "}
              <span className="relative">
                <span className="text-primary">Spreading</span>{" "}
                <span className="text-accent">Compassion</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q75 2 150 7 Q225 12 298 5"
                    fill="none"
                    stroke="oklch(0.72 0.19 55)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed max-w-xl mb-8"
            >
              Join a community-driven movement transforming education, women's
              empowerment, animal welfare, and environmental sustainability
              across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="https://inamigosfoundation.org.in/donate"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.donate_button"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground rounded-xl font-body font-bold text-base shadow-warm hover:bg-accent/90 hover:-translate-y-0.5 transition-smooth active:scale-95"
              >
                <Heart className="w-4 h-4 fill-current" />
                Make an Impact
              </a>
              <a
                href="https://inamigosfoundation.org.in/became-volunteer"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.volunteer_button"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary/10 text-primary border border-primary/30 rounded-xl font-body font-bold text-base hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-smooth active:scale-95"
              >
                <Users className="w-4 h-4" />
                Join the Movement
              </a>
            </motion.div>

            {/* Quick trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {[
                "80G & 12A Certified",
                "NITI Aayog Registered",
                "ISO 9001:2015",
                "CSR-1 Registered",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-body text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Glow ring behind globe */}
              <div className="absolute inset-8 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute inset-0">
                <HeroGlobe />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
