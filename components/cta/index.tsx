import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="w-full">
      <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8 lg:py-20">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl border border-border shadow-md 
          bg-gray-50 dark:bg-transparent"
          style={{
            background: `
              linear-gradient(
                100.5deg,
                hsla(336, 100%, 50%, 0.06) 29.55%,
                hsla(341, 100%, 55%, 0.04) 93.8%
              ),
              radial-gradient(
                hsla(333, 100%, 85%, 0.08) 0%,
                hsla(327, 100%, 85%, 0.06) 100%
              )
            `,
          }}
        >
          {/* Background grid */}
          <Image
            alt="grid background"
            loading="lazy"
            width="1840"
            height="694"
            src="/grid.svg"
            className="absolute top-0 left-0 w-full h-full pointer-events-none 
            invert dark:invert-0"
          />

          {/* Overlay gradient to fade grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24 flex flex-col items-center justify-center gap-4">
            <p className="w-fit border-transparent bg-gradient-to-r from-secondary/30 to-secondary/70 text-foreground px-6 py-2 rounded-lg font-medium text-xs sm:text-sm uppercase">
              Get in touch
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
              Let&apos;s scale your
              <br />
              <span className="from-primary via-primary/90 to-rose-500 bg-gradient-to-r bg-clip-text text-transparent font-playfair">
                Brand Together
              </span>
            </h1>

            {/* CTA button */}
            <Button asChild className="mt-4">
              <Link
                href="/contact"
                className="h-fit text-md flex gap-2 items-center justify-center text-white"
              >
                <Mail className="h-8 w-8 rounded-full text-white" />
                Send a mail to us
              </Link>
            </Button>

            <p className="text-muted-foreground text-sm text-center">
              We&apos;re here to help you grow your business with modern web &
              app solutions.
            </p>

            {/* Contact links */}
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-base md:flex-row">
              <a
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
                href="mailto:support@grettech.com"
              >
                <Mail className="h-6 w-6 text-red-500" />
                support@grettech.com
              </a>
              <a
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
                href="tel:+91-8840390107"
              >
                <Phone className="h-6 w-6 text-green-500" />
                +91-8840390107
              </a>
              <Link
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
                href="/"
              >
                <Globe className="h-6 w-6 text-blue-500" />
                grettech.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
