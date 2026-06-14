import ProjectCard3D, {
  type ProjectCardData,
} from "@/components/ProjectCard3D";
import { motion } from "motion/react";

const projects: ProjectCardData[] = [
  {
    emoji: "🍲",
    title: "Project Seva",
    subtitle: "Food & Clothing Drives",
    description:
      "Providing food and clothing to the underprivileged. Over 50,000+ meals and clothing items distributed through regular drives across India.",
    color: "0.55 0.18 150",
  },
  {
    emoji: "📚",
    title: "Project Bachpanshala",
    subtitle: "Education for Children",
    description:
      "Ensuring quality education for underprivileged children — bridging educational gaps through digital literacy, life skills, and school education support.",
    color: "0.72 0.19 55",
  },
  {
    emoji: "🐾",
    title: "Project Jeev",
    subtitle: "Animal Welfare",
    description:
      "Animal welfare, including rescue, protection and feeding. Feeding 50+ stray animals daily through our dedicated volunteer network.",
    color: "0.48 0.16 145",
  },
  {
    emoji: "🌸",
    title: "Project Udaan",
    subtitle: "Women Empowerment",
    description:
      "Women empowerment through skill development and financial independence — collaborating with self-help groups to promote menstrual hygiene awareness.",
    color: "0.65 0.22 40",
  },
  {
    emoji: "🌱",
    title: "Project Prakriti",
    subtitle: "Environmental Sustainability",
    description:
      "Environmental conservation and sustainability efforts. Planted 20,000+ saplings and supporting eco-friendly agriculture across India.",
    color: "0.52 0.2 140",
  },
  {
    emoji: "💼",
    title: "Project Vikas",
    subtitle: "Youth Skill Development",
    description:
      "Enhancing employability through skill development programs — trained 30,000+ interns in data operations, finance, digital marketing, and social work.",
    color: "0.60 0.18 60",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.48 0.16 145 / 0.07) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.72 0.19 55 / 0.06) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-accent mb-3 px-3 py-1 rounded-full bg-accent/10">
            What We Do
          </span>
          <h2
            id="projects-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4"
          >
            Our Core Initiatives
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Six flagship programs, one mission — transforming lives through
            education, welfare, environment, and empowerment across India.
          </p>
        </motion.div>

        {/* Projects grid */}
        <ul
          data-ocid="projects.list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0 m-0"
        >
          {projects.map((project, index) => (
            <li key={project.title}>
              <ProjectCard3D {...project} index={index} />
            </li>
          ))}
        </ul>

        {/* Closing statement and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
            At InAmigos Foundation, we believe in the power of collective
            action. Our transparent operations and strong partnerships enable us
            to bring real, measurable change to society. Through our social
            media presence and online platforms, we ensure that every initiative
            reaches the right audience, encouraging more individuals and
            organizations to join our mission. <br />
            <br />
            Whether through volunteering, partnerships, or donations, every
            contribution strengthens our cause and enables us to expand our
            reach and impact.{" "}
            <span className="font-semibold text-foreground">
              Together, we can build a more inclusive, compassionate, and
              empowered society.
            </span>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://inamigosfoundation.org.in/donate"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="projects.donate_button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-body font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Donate Now
            </a>
            <a
              href="https://inamigosfoundation.org.in/became-volunteer"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="projects.volunteer_button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary font-body font-semibold text-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get Involved
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
