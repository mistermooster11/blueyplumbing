import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Licensed Bay Area Plumbers",
  description:
    "Bluey Plumbing & Rooter is a licensed, insured plumbing company based in Menlo Park, CA. Learn about our team, values, and service area across the Bay Area Peninsula.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Licensed, insured Bay Area plumbers based in Menlo Park — serving the Peninsula since day one."
        backgroundImage="/images/modern-black-kitchen-faucet-chrome.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
