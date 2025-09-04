"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/navbar/resizable-navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

export function WebAppexNavbar({ className }: { className?: string }) {
  const navItems = [
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Process",
      link: "/#process",
    },
    {
      name: "Testimonials",
      link: "/#testimonials",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => setIsMobileMenuOpen(false));
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setIsMobileMenuOpen(false));
  }

  return (
    <div className={cn(className, "relative w-full")}>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              <ThemeToggle />
            </NavbarButton>
            <NavbarButton as={Link} href="/contact" variant="primary">
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full flex gap-2 items-center justify-center"
              >
                <ThemeToggle showThemeName={true} />
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/contact"
                as={Link}
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
