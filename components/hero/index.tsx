"use client";

import { easeInOut, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import data from "@/constants/data.json";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// ----------------- Shape Components -----------------

// Animated Circle Ring
function AnimatedRing({
  className,
  delay = 0,
  size = 200,
  gradient = "from-white/20 to-transparent",
}: {
  className?: string;
  delay?: number;
  size?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: easeInOut,
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ width: size, height: size }}
        className={cn(
          "rounded-full border-2",
          "bg-gradient-to-r",
          gradient,
          "border-white/40 dark:border-white/60"
        )}
      />
    </motion.div>
  );
}

// Animated Hexagon
function AnimatedHexagon({
  className,
  delay = 0,
  size = 160,
  gradient = "from-rose-400/60 to-transparent",
}: {
  className?: string;
  delay?: number;
  size?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -30 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 2, delay, ease: easeInOut }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: size,
          height: size,
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
        className={cn(
          "bg-gradient-to-tr",
          gradient,
          "border border-white/40 dark:border-white/60 shadow-lg"
        )}
      />
    </motion.div>
  );
}

// Animated Blob
function AnimatedBlob({
  className,
  delay = 0,
  size = 280,
  gradient = "from-violet-400/70 to-transparent",
}: {
  className?: string;
  delay?: number;
  size?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: easeInOut }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: size, height: size }}
        className={cn(
          "rounded-[60%] bg-gradient-to-br blur-xl",
          gradient,
          "border border-white/30 dark:border-white/50 shadow-xl"
        )}
      />
    </motion.div>
  );
}

// Animated Polygon
function AnimatedPolygon({
  className,
  delay = 0,
  size = 140,
  gradient = "from-cyan-400/70 to-transparent",
}: {
  className?: string;
  delay?: number;
  size?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 2, delay, ease: easeInOut }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: size,
          height: size,
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
        className={cn(
          "bg-gradient-to-tr",
          gradient,
          "border border-white/30 dark:border-white/50 shadow-lg"
        )}
      />
    </motion.div>
  );
}

// ----------------- Hero Section -----------------
export default function HeroGeometric({
  badge = data.hero.badge,
  title1 = data.hero.title.line1,
  title2 = data.hero.title.line2,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: easeInOut },
    }),
  };

  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden dark:bg-black">
      {/* Gradient Glow Background */}
      <div className="from-primary/20 dark:from-primary/30 absolute inset-0 bg-gradient-to-br via-transparent to-rose-500/20 blur-3xl dark:to-rose-500/30" />

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedRing
          delay={0.3}
          size={400}
          gradient="from-indigo-500/70 to-transparent"
          className="top-[15%] left-[-10%]"
        />
        <AnimatedHexagon
          delay={0.5}
          size={220}
          gradient="from-rose-400/70 to-transparent"
          className="top-[70%] right-[5%]"
        />
        <AnimatedBlob
          delay={0.6}
          size={300}
          gradient="from-violet-400/60 to-transparent"
          className="bottom-[10%] left-[10%]"
        />
        <AnimatedPolygon
          delay={0.7}
          size={180}
          gradient="from-amber-400/80 to-transparent"
          className="top-[12%] right-[25%]"
        />
        <AnimatedPolygon
          delay={0.9}
          size={120}
          gradient="from-cyan-400/70 to-transparent"
          className="top-[5%] left-[25%]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="border-primary/30 bg-card/50 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm backdrop-blur-sm md:mb-12"
          >
            <Image
              src="/images/logo.png"
              width={24}
              height={24}
              alt="logo"
              className="h-6 w-6"
            />

            <span className="text-foreground text-sm font-medium tracking-wide">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mx-4 mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "from-primary via-primary/90 bg-gradient-to-r to-rose-500 bg-clip-text p-4 text-transparent",
                  pacifico.className,
                  "font-bold"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-muted-foreground mx-auto mb-10 max-w-xl px-4 text-base leading-relaxed sm:text-lg md:text-xl">
              {data.hero.description}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="from-primary shadow-primary/10 hover:from-primary/90 rounded-full border-none bg-gradient-to-r to-rose-500 shadow-md hover:to-rose-500/90"
              asChild
            >
              <Link href={data.hero.ctaButtons[0].link}>
                {data.hero.ctaButtons[0].text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 rounded-full shadow-sm"
              asChild
            >
              <Link href={data.hero.ctaButtons[1].link}>
                {data.hero.ctaButtons[1].text}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="from-background to-background/80 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent dark:from-black dark:to-black/80" />
    </div>
  );
}
