import AboutUs from "@/components/about";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import ProcessSteps from "@/components/process";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WorksShowcase from "@/components/works/showcase";

export default function Page() {
  return (
    <>
      <Hero />
      <WorksShowcase />
      <Services />
      <AboutUs />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
}
