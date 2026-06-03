import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Fixtures Repairs & Installation — Menlo Park, CA",
  description:
    "Toilet, faucet, sink, and appliance installation and repair in Menlo Park and the Bay Area Peninsula. Bluey Plumbing & Rooter — CSLB #1147292.",
};

export default function FixturesRepairsPage() {
  return (
    <>
      <PageHeroSection
        title="Fixtures Repairs & Installation"
        subtitle="Toilets, faucets, sinks, showers, and appliance installation — done right and priced upfront across the Bay Area Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Fixtures Repairs & Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Fixtures Repairs & Installation"
        sidebarImage="/images/plumber-installing-toilet-repair-service.jpg"
        sidebarImageWidth={800}
        sidebarImageHeight={534}
        heading="Fixture Installation & Repair — Peninsula-Wide"
        intro={[
          "Leaky faucets, running toilets, and broken fixtures waste water and drive up your bill. Bluey Plumbing & Rooter repairs and installs the full range of plumbing fixtures — toilets, faucets, sinks, showers, dishwashers, and washing machine connections.",
          "We've handled everything from wall-mount toilet rough-ins to full bathroom plumbing for new builds. Residential and commercial, all sizes. We show up with the right parts and get it done.",
        ]}
        whatWeDo={[
          "Toilet installation, repair, and replacement",
          "Wall-mount toilet rough-in and finish",
          "Faucet and sink installation and repair",
          "Shower and bathtub fixture work",
          "Dishwasher and washing machine connections",
          "Bathroom plumbing rough-in for renovations",
        ]}
        whyChooseUs={[
          "Flexible and responsive — we work around your schedule",
          "Sufian and Mo get the job done right — see our Yelp reviews",
          "Upfront pricing — no surprise fees",
          "Licensed CSLB #1147292, insured to $1,000,000",
          "Serving Menlo Park, Palo Alto, Redwood City, and beyond",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
