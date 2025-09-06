import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import siteData from "@/constants/data.json";

const companyFirstName = siteData.company.firstName;
const companyLastName = siteData.company.lastName;

const iconMap = {
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

const socialLinks = siteData.social.map((link) => ({
  icon: iconMap[link.icon as keyof typeof iconMap],
  label: link.label,
  href: link.href,
}));

const aboutLinks = siteData.footer.links.about;
const serviceLinks = siteData.footer.links.services;
// const helpLinks = siteData.footer.links.help;

const contactInfo = [
  { icon: Mail, text: siteData.contact.email, type: "email" },
  { icon: Phone, text: siteData.contact.phone, type: "phone" },
  {
    icon: MapPin,
    text: siteData.contact.address,
    type: "address",
  },
];

export default function Footer() {
  return (
    <>
      {/* Gradient divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <footer className="relative bg-white text-gray-600 dark:bg-black dark:text-muted-foreground">
        {/* Subtle background gradient overlay (only in dark mode) */}
        <div className="absolute inset-0 pointer-events-none dark:bg-gradient-to-t dark:from-primary/5 dark:via-transparent dark:to-transparent" />

        <div className="relative mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Company Logo + Info */}
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {/* <Image
                  width={50}
                  height={50}
                  src={data.company.logo}
                  alt="logo"
                  className="h-10 w-10 rounded-full"
                /> */}
                <Link
                  href="/"
                  className="font-medium text-2xl text-black dark:text-white "
                >
                  {companyFirstName}
                  <span className="text-primary text-3xl font-playfair">
                    {companyLastName}
                  </span>
                </Link>
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed sm:text-left text-gray-600 dark:text-muted-foreground">
                {siteData.company.description}
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-600 hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="size-6" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  About Us
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {aboutLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a href={href} className="hover:text-primary transition">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Our Services
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {serviceLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a href={href} className="hover:text-primary transition">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Us
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {contactInfo.map(({ icon: Icon, text, type }) => (
                    <li key={text}>
                      <div className="flex items-center gap-2">
                        <Icon className="text-primary size-5 shrink-0" />
                        {type === "address" ? (
                          <address className="not-italic">{text}</address>
                        ) : (
                          <Link
                            href={
                              type === "phone"
                                ? `tel:${text}`
                                : `mailto:${text}`
                            }
                            className="hover:text-primary transition hover:underline"
                          >
                            {text}
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500 dark:text-muted-foreground">
                <span className="block sm:inline">All rights reserved.</span>
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-muted-foreground sm:order-first sm:mt-0">
                &copy; {new Date().getFullYear()} {siteData.company.name}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
