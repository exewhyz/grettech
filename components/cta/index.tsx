import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-20">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl"
          style={{
            background: `
                linear-gradient(
                100.5deg,
                hsla(336, 100%, 50%, 0.08) 29.55%,
                hsla(341, 100%, 55%, 0.04) 93.8%
                ),
                radial-gradient(
                hsla(333, 100%, 85%, 0.08) 0%,
                hsla(327, 100%, 85%, 0.06) 100%
                )
            `,
          }}
        >
          <Image
            alt="bg"
            loading="lazy"
            width="1840"
            height="694"
            className="absolute top-0"
            src="/grid.svg"
          />
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24 flex flex-col items-center justify-center gap-4">
            <p className="w-fit border-transparent bg-gradient-to-r from-secondary/20 to-secondary/60 text-foreground px-6 py-3 rounded-lg font-medium text-sm text-center leading-7 uppercase lg:text-left">
              Get in touch
            </p>
            <h1 className="text-4xl md:text-6xl tracking-tight leading-18 text-center bg-clip-text bg-gradient-to-b from-foreground via-foreground/50 to-foreground/40 text-transparent">
              Let&apos;s scale Your
              <br />
              <span className="from-primary via-primary/90 bg-gradient-to-r to-rose-500 bg-clip-text p-4 text-transparent tracking-tighter font-playfair">
                Brand Together
              </span>
            </h1>
            <Button asChild>
              <Link
                href="/"
                className="h-fit text-md flex gap-2 items-center justify-center text-white"
              >
                <Image
                  className="bg-white rounded-full object-cover h-8 w-8"
                  src="/images/logo.png"
                  width={32}
                  height={32}
                  alt="person image"
                />
                Send a mail to us
              </Link>
            </Button>
            <p className="text-gray-400 text-sm">
              We&apos;re here to help you grow your business.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-white"
                href="mailto:subha9.5roy350@gmail.com"
              >
                <Mail className="h-7 w-7 text-red-500" />
                aniketraj.xyz@gmail.com
              </a>
              <a
                className="flex items-center gap-2 text-white"
                href="tel:+91-8840390107"
              >
                <Phone className="h-7 w-7 text-green-500" />
                +91-8840390107
              </a>
              <Link
                prefetch={false}
                className="flex items-center gap-2 text-white"
                href="/"
              >
                <Globe className="h-7 w-7 text-blue-500" />
                grettech.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
