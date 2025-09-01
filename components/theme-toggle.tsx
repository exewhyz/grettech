"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function ThemeToggle({
  showThemeName = false,
}: {
  showThemeName?: boolean;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
        origin: "center",
        x: -5,
        y: 5,
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.3 },
        origin: "center",
        x: -1.5,
        y: 1.5,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center cursor-pointer gap-2"
    >
      <Button variant="outline" size="icon" className="cursor-pointer">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {showThemeName && (
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {theme === "light" ? "Dark" : "Light"} Mode
        </span>
      )}
    </motion.div>
  );
}
