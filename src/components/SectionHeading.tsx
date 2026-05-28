import { motion } from "motion/react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="font-cinema text-[11px] text-primary/70 flex items-center gap-3 mb-4"
    >
      <span className="h-px w-10 bg-primary/40" />
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  variant = "display",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  variant?: "display" | "cinema" | "imperial";
}) {
  const fontClass =
    variant === "cinema"
      ? "font-cinema text-3xl md:text-5xl tracking-tight"
      : variant === "imperial"
        ? "font-imperial text-4xl md:text-6xl"
        : "font-display text-5xl md:text-7xl font-light";

  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`${fontClass} text-balance leading-[1.05]`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
