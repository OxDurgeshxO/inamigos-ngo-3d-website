import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const STORY = {
  name: "Sunita Verma",
  location: "Bilaspur, Chhattisgarh",
  project: "Project Udaan",
  quote:
    "\"Before Udaan, I was dependent on my family for everything. Today, I run my own tailoring business from home and support my two children's education. InAmigos Foundation didn't just teach me skills — they gave me back my confidence.\"",
  impact: "Earns ₹12,000/month independently",
  detail:
    "Sunita joined the Project Udaan skill-development workshop in 2022 after losing her husband. Through a 3-month tailoring and digital skills program, she learned garment construction, business basics, and how to market her work on WhatsApp. Today, she employs two other women from her village.",
  imageSrc: "/assets/generated/success-story-priya.dim_800x600.jpg",
  imageAlt:
    "Sunita Verma, Project Udaan beneficiary, proudly holding her handmade textiles",
  stats: [
    { value: "3 months", label: "Training Duration" },
    { value: "2 women", label: "Now Employs" },
    { value: "₹12K/mo", label: "Monthly Income" },
  ],
};

export default function SuccessStory() {
  return (
    <section
      id="stories"
      className="py-20 md:py-28 bg-background overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body font-semibold tracking-wider uppercase mb-3">
            Success Stories
          </span>
          <h2
            id="story-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground text-balance mb-4"
          >
            Lives Changed, <span className="text-accent">Stories Told</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Behind every statistic is a real person whose life was transformed.
            Meet the faces of our mission across India.
          </p>
        </motion.div>

        {/* Main story card */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-3d bg-card border border-border/60"
          data-ocid="stories.feature_card"
        >
          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative min-h-[320px] lg:min-h-[500px] overflow-hidden"
          >
            <img
              src={STORY.imageSrc}
              alt={STORY.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Warm overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/20" />

            {/* Project badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-body font-bold shadow-warm">
                <Star className="w-3 h-3 fill-current" />
                {STORY.project}
              </span>
            </div>

            {/* Mobile: name overlay on image */}
            <div className="absolute bottom-5 left-5 lg:hidden">
              <p className="font-display font-bold text-white text-lg leading-tight">
                {STORY.name}
              </p>
              <p className="text-white/80 text-sm font-body">
                {STORY.location}
              </p>
            </div>
          </motion.div>

          {/* Content panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between"
          >
            {/* Desktop name */}
            <div className="hidden lg:block mb-5">
              <p className="font-display font-bold text-foreground text-xl">
                {STORY.name}
              </p>
              <p className="text-muted-foreground text-sm font-body">
                {STORY.location}
              </p>
            </div>

            {/* Quote */}
            <div className="mb-6">
              <Quote className="w-8 h-8 text-accent/40 mb-3" />
              <blockquote
                className="font-body text-base sm:text-lg text-foreground leading-relaxed italic"
                data-ocid="stories.quote"
              >
                {STORY.quote}
              </blockquote>
            </div>

            {/* Narrative */}
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-7">
              {STORY.detail}
            </p>

            {/* Impact stats */}
            <div
              className="grid grid-cols-3 gap-4 pt-5 border-t border-border/60"
              data-ocid="stories.impact_stats"
            >
              {STORY.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="text-center"
                  data-ocid={`stories.stat.${i + 1}`}
                >
                  <p className="font-display font-bold text-base sm:text-lg text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Secondary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground font-body text-sm">
            Sunita is one of{" "}
            <span className="font-semibold text-foreground">
              50,000+ beneficiaries
            </span>{" "}
            whose lives have been changed by InAmigos Foundation since September
            2020.
          </p>
          <a
            href="https://inamigosfoundation.org.in"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="stories.learn_more_link"
            className="inline-block mt-4 text-sm font-body font-semibold text-primary hover:underline transition-colors"
          >
            Learn more about our work →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
