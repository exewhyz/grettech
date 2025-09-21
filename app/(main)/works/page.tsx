"use client";

import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import ProjectCard from "@/components/works/project-card";

import data from "@/constants/data.json";

const WorksPage = () => {
  return (
    <section className="relative w-full overflow-hidden pb-16 pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.1) 0, hsla(341, 100%, 55%, 0.06) 50%, hsla(336, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.04) 0, hsla(327, 100%, 85%, 0.04) 80%, transparent 100%)"
        />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 text-center"
        >
          <h1 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
            {data.works.title}
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="absolute inset-0 h-full w-full"
              particleColor="#e60a64"
            />
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            {data.works.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {data.works.projects
            .filter((p) => !p.archieved)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
