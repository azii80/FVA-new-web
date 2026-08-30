import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Workflow } from "@/components/Workflow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Services } from "@/components/Services";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { AutomationOutcomes } from "@/components/AutomationOutcomes";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Workflow />
        <ProcessSteps />
        <Services />
        <PortfolioGrid />
        <AutomationOutcomes />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
