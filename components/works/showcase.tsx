"use client";

import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./project-card";
import { Button } from "@/components/ui/button";
import data from "@/constants/data.json";

export default function WorksShowcase() {
  // Take only featured projects for the showcase
  const showcaseProjects = data.works.projects
    .filter((project) => project.featured)
    .slice(0, 3);
  const stats = data.works.stats;

  return (
    <section id="works" className="relative w-full overflow-hidden py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent opacity-60" />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="from-primary to-rose-500 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
                {stat.number}
              </h3>
              <p className="text-foreground font-medium text-sm">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-xs">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 text-center"
        >
          <span className="text-primary mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium">
            Our Portfolio
          </span>
          <h2 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Featured Works
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="absolute inset-0 h-full w-full"
              particleColor="#e60a64"
            />
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            Discover innovative solutions that have transformed businesses and
            delighted users worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
          {showcaseProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              withHover
            />
          ))}
        </div>

        {/* View All Works Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="from-primary shadow-primary/10 hover:from-primary/90 group rounded-full border-none bg-gradient-to-r to-rose-500 px-6 shadow-md hover:to-rose-500/90"
          >
            <Link href="/works" className="flex items-center gap-2">
              View All Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
