import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

const data = {
  facebookLink: "https://www.facebook.com/profile.php?id=61580306403766",
  instaLink: "https://www.instagram.com/grettech_official/",
  twitterLink: "https://x.com/grettech20118",
  githubLink: "https://github.com/exewhyz/",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    appdev: "/app-development",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "contact@grettech.com",
    phone: "+91 8840390107",
    address: "14th Cross Rd., Vinayaka Layout, KR Puram, Bangalore - 560049",
  },
  company: {
    name: "GretTech",
    description:
      "We craft modern, scalable, and visually stunning web solutions to help businesses grow digitally.",
    logo: "/logo.png",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink }
];

const aboutLinks = [
  { text: "Company History", href: data.about.history },
  { text: "Meet the Team", href: data.about.team },
  { text: "Employee Handbook", href: data.about.handbook },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Web Development", href: data.services.webdev },
  { text: "Web Design", href: data.services.webdesign },
  { text: "App Development", href: data.services.appdev },
  { text: "Google Ads", href: data.services.googleads },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, type: "email" },
  { icon: Phone, text: data.contact.phone, type: "phone" },
  {
    icon: MapPin,
    text: data.contact.address,
    type: "address",
  },
];

export default function WebAppexFooter() {
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
                  Gret
                  <span className="text-primary text-3xl font-playfair">
                    Tech
                  </span>
                </Link>
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed sm:text-left text-gray-600 dark:text-muted-foreground">
                {data.company.description}
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
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
                &copy; {new Date().getFullYear()} {data.company.name}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
