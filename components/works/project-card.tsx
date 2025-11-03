"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Lock } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  withHover?: boolean;
}

export default function ProjectCard({
  project,
  index,
  withHover = false,
}: ProjectCardProps) {
  const Card = (
    <div className="border-border/40 relative overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary/20 to-secondary/0 p-1 backdrop-blur-3xl">
      <BorderBeam
        duration={8}
        size={300}
        className="from-primary/30 via-primary/0 to-transparent"
      />

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground/80 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between gap-4 w-full">
          <Link
            href={project.liveUrl}
            className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
            target="_blank"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              Source Code
            </Link>
          ) : (
            <span className="text-muted-foreground flex items-center gap-2 text-sm opacity-50">
              <Lock className="h-4 w-4" />
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative transition-transform duration-300 ease-out"
      {...(withHover && {
        whileHover: { rotateY: 5, rotateX: -5, translateZ: 20 },
      })}
    >
      {Card}
    </motion.div>
  );
}
