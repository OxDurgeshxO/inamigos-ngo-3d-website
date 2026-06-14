import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, Users } from "lucide-react";
import { motion } from "motion/react";

interface Pathway {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlight: string;
}

const PATHWAYS: Pathway[] = [
  {
    id: "donate",
    icon: <Heart className="w-7 h-7" />,
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    title: "Donate",
    subtitle: "Fuel the Change",
    description:
      "Your contribution helps us serve meals, educate children, and protect the environment. Every rupee directly funds our six flagship projects across India. All donations are eligible for 80G tax deduction.",
    cta: "Donate Now",
    ctaHref: "https://inamigosfoundation.org.in/donate",
    highlight: "80G Tax-Exempt",
  },
  {
    id: "volunteer",
    icon: <Users className="w-7 h-7" />,
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    title: "Volunteer",
    subtitle: "Step In, Stand Out",
    description:
      "Lead drives and mentor peers in your local city. Step in, stand out, and be the change your community needs. Join our network of dedicated volunteers active across 28+ states in India.",
    cta: "Become a Volunteer",
    ctaHref: "https://inamigosfoundation.org.in/became-volunteer",
    highlight: "28 States Active",
  },
  {
    id: "intern",
    icon: <GraduationCap className="w-7 h-7" />,
    iconBg: "bg-secondary/60",
    iconColor: "text-foreground",
    title: "Intern With Us",
    subtitle: "Grow While You Give",
    description:
      "Gain real-world experience, learn project execution, and earn a certificate while giving back. Our internship program has trained 30,000+ changemakers in data operations, finance, digital marketing, and social work.",
    cta: "Apply Now",
    ctaHref: "https://inamigosfoundation.org.in/became-volunteer",
    highlight: "Certificate Awarded",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="involved"
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="involved-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold tracking-wider uppercase mb-3">
            Get Involved
          </span>
          <h2
            id="involved-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground text-balance mb-4"
          >
            Choose Your Path to <span className="text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you give, serve, or learn — every action creates real
            change. Find the way that works best for you and join our movement.
          </p>
        </motion.div>

        {/* Pathway cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          data-ocid="involved.pathways"
        >
          {PATHWAYS.map((pathway, index) => (
            <motion.article
              key={pathway.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative bg-card rounded-3xl p-7 flex flex-col shadow-3d-sm hover:shadow-3d transition-all duration-300 border border-border/60 hover:border-primary/20"
              data-ocid={`involved.pathway.${index + 1}`}
            >
              {/* Highlight badge */}
              <div className="absolute top-5 right-5">
                <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-body font-semibold">
                  {pathway.highlight}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${pathway.iconBg} ${pathway.iconColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                {pathway.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                  {pathway.subtitle}
                </p>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {pathway.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                  {pathway.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={pathway.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`involved.${pathway.id}_button`}
              >
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 font-body font-semibold"
                >
                  {pathway.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
              </a>

              {/* Hover glow accent */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, oklch(0.48 0.16 145 / 0.04), transparent 60%)",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 text-sm text-muted-foreground font-body"
        >
          All contributions are eligible for 80G tax deduction · NITI Aayog
          Registered · ISO 9001:2015 · CSR-1 Registered
        </motion.p>
      </div>
    </section>
  );
}
