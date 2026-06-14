import StatCounter from "@/components/StatCounter";
import { Award, Building2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { value: 50000, suffix: "+", label: "Meals & Clothing Distributed" },
  { value: 20000, suffix: "+", label: "Trees Planted" },
  { value: 30000, suffix: "+", label: "Interns Trained" },
  { value: 28, suffix: "", label: "States Reached" },
];

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "80G & 12A",
    subtitle: "Tax Exemption Certified",
  },
  {
    icon: Building2,
    title: "NITI Aayog",
    subtitle: "Registered NGO",
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Certified",
  },
];

export default function TrustBar() {
  return (
    <section
      id="impact"
      data-ocid="trust.section"
      className="bg-card border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold tracking-wide border border-primary/20 mb-3">
            Our Impact
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            Real Change, Measurable Impact
          </h2>
        </motion.div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-background border border-border/60 shadow-3d-sm"
          data-ocid="trust.about_card"
        >
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            InAmigos Foundation was founded on September 23, 2020, by Mr. Govind
            Shukla (Founder &amp; CEO). It is a Section 8 registered non-profit
            organization, licensed by the Central Government. It has its base at
            Chhattisgarh. It holds 80G &amp; 12A certifications, ensuring
            transparency, accountability and tax-exempt benefits for donors. Our
            foundation is also CSR-1 registered, allowing us to collaborate with
            corporate partners for impactful Corporate Social Responsibility
            (CSR) initiatives. Additionally, we are NITI Aayog registered,
            aligning our work with national development goals and hold the
            prestigious IAF ISO 9001:2015 certification, signifying our
            commitment to maintaining high-quality standards in operations and
            service delivery.
          </p>
        </motion.div>

        {/* Animated stat counters */}
        <div
          data-ocid="trust.stats_grid"
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-12 max-w-4xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-card px-4 text-xs text-muted-foreground font-body tracking-widest uppercase">
              Trusted &amp; Verified
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div
          data-ocid="trust.badges_grid"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10"
        >
          {TRUST_BADGES.map(({ icon: Icon, title, subtitle }, i) => (
            <motion.div
              key={title}
              data-ocid={`trust.badge.${i + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-background border border-border shadow-3d-sm hover:shadow-3d hover:-translate-y-0.5 transition-smooth min-w-[200px] justify-center"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left min-w-0">
                <div className="font-display font-bold text-sm text-foreground">
                  {title}
                </div>
                <div className="text-xs text-muted-foreground font-body">
                  {subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
