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

import data from "@/constants/data.json";

export function WebAppexNavbar({ className }: { className?: string }) {
  const navItems = data.navigation.main;

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
          <NavbarLogo
            companyFirstName={data.company.firstName}
            companyLastName={data.company.lastName}
            companyLogo={data.company.logo}
            homeLink={data.navigation.pages.home.link}
          />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary">
              <ThemeToggle />
            </NavbarButton>
            <NavbarButton
              as={Link}
              href={data.navigation.pages.contact.link}
              variant="primary"
            >
              {data.navigation.pages.contact.title}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
              companyFirstName={data.company.firstName}
              companyLastName={data.company.lastName}
              homeLink={data.navigation.pages.home.link}
            />
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
                href={data.navigation.pages.contact.link}
                as={Link}
              >
                {data.navigation.pages.contact.title}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
