import AboutUs from "@/components/about";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import ProcessSteps from "@/components/process";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials"

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
}
