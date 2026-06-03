import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Drain Services & Installations — Menlo Park, CA",
  description:
    "Professional drain clearing, hydro jetting, sewer line repair, and drain installation in Menlo Park and the Bay Area Peninsula. Licensed plumbers — CSLB #1147292.",
};

export default function DrainServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Drain Services & Installations"
        subtitle="Drain clearing, hydro jetting, sewer line repair, and camera inspection — residential and commercial across the Bay Area Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Drain Services & Installations" },
        ]}
      />
      <ServiceDetailSection
        activeService="Drain Services & Installations"
        sidebarImage="/images/plumber-installing-drain-pipe-closeup.jpg"
        sidebarImageWidth={800}
        sidebarImageHeight={534}
        heading="Drain Clearing & Installation — Bay Area"
        intro={[
          "From slow kitchen sinks to full main sewer line backups, Bluey Plumbing & Rooter handles every drain job on the Peninsula. We diagnose first, show you exactly what's wrong, then clear it using the right method — snake, hydro jet, or camera-guided repair.",
          "We serve homes and commercial buildings in Menlo Park, Palo Alto, Redwood City, and surrounding cities. Residential rate, no surprise fees.",
        ]}
        whatWeDo={[
          "Kitchen, bathroom, and floor drain clearing",
          "Main sewer line snaking and hydro jetting",
          "Sewer line camera inspection and video recording",
          "Sewer lateral repair and replacement",
          "New drain line installation and rough-in",
          "Residential and commercial — all building types",
        ]}
        whyChooseUs={[
          "We show you the camera footage — no guesswork repairs",
          "Upfront pricing — you approve before work begins",
          "Licensed CSLB #1147292, insured to $1,000,000",
          "Available for emergency calls — we pick up the phone",
          "Local to Menlo Park — fast Peninsula response",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
