import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

export interface ProjectCardData {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  href?: string;
}

interface ProjectCard3DProps extends ProjectCardData {
  index: number;
  children?: ReactNode;
}

export default function ProjectCard3D({
  emoji,
  title,
  subtitle,
  description,
  color,
  index,
}: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      data-ocid={`projects.card.${index + 1}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      style={isMobile ? {} : { rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-card rounded-2xl p-6 cursor-default will-change-transform"
    >
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `0 16px 48px oklch(${color} / 0.22), 0 4px 12px oklch(${color} / 0.12)`
            : "0 2px 8px oklch(0.18 0.025 145 / 0.06)",
        }}
      />
      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `oklch(${color} / 0.12)` }}
        >
          {emoji}
        </div>
        <h3 className="font-display font-bold text-foreground text-base mb-0.5">
          {title}
        </h3>
        <p className="text-xs font-body font-medium text-muted-foreground mb-2 tracking-wide uppercase">
          {subtitle}
        </p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, oklch(${color} / 0.06), transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
