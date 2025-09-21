import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import data from "@/constants/data.json";

export default async function Page({
  params,
}: {
  params: Promise<{ serviceName: string }>;
}) {
  const { serviceName } = await params;
  const service = data?.services?.items?.find?.(
    (item: { slug: string }) => item.slug === serviceName
  );

  // If service is not found, show not available message
  if (!service) {
    return (
      <section className="relative w-full min-h-[60vh] overflow-hidden py-24 bg-background">
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            id="service-sparkles"
            background="transparent"
            minSize={0.8}
            maxSize={1.6}
            particleDensity={120}
            className="absolute inset-0 h-full w-full"
            particleColor="#e60a64"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background/100 pointer-events-none" />
        </div>

        <div className="container relative mx-auto max-w-3xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <span className="text-primary mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide">
              Service Not Available
            </span>
            <h1 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Service Not Found
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
              The requested service is not available. Please check our other
              services below.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card/80 p-8 shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Available Services
            </h2>
            <div className="space-y-4">
              {data.services.items.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <h3 className="text-lg font-medium text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                asChild
                size="lg"
                className="from-primary shadow-primary/10 hover:from-primary/90 group rounded-full border-none bg-gradient-to-r to-rose-500 px-6 shadow-md hover:to-rose-500/90"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show service details if found
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden py-24 bg-background">
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="service-sparkles"
          background="transparent"
          minSize={0.8}
          maxSize={1.6}
          particleDensity={120}
          className="absolute inset-0 h-full w-full"
          particleColor="#e60a64"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background/100 pointer-events-none" />
      </div>

      <div className="container relative mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <span className="text-primary mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide">
            Our Services
          </span>
          <h1 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            {service.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            {service.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card/80 p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Why choose our {service.title}?
          </h2>
          <p className="text-foreground/80 mb-6">
            We provide top-notch {service.title} solutions tailored to your
            business needs. Our team ensures quality, innovation, and customer
            satisfaction at every step.
          </p>
          <Button
            asChild
            size="lg"
            className="from-primary shadow-primary/10 hover:from-primary/90 group rounded-full border-none bg-gradient-to-r to-rose-500 px-6 shadow-md hover:to-rose-500/90"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
