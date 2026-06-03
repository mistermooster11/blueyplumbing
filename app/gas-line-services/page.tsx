import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Gas Line Services & Installation — Menlo Park, CA",
  description:
    "Licensed gas line installation, repair, and pressure testing in Menlo Park and the Bay Area Peninsula. Bluey Plumbing & Rooter — CSLB #1147292.",
};

export default function GasLineServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Gas Line Services & Installation"
        subtitle="Gas line installation, repair, and pressure testing for appliances, water heaters, and whole-home systems across the Bay Area Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Gas Line Services & Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Gas Line Services & Installation"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Gas Line Work — Licensed & Code-Compliant"
        intro={[
          "Gas line work requires a licensed plumber — not a handyman. Bluey Plumbing & Rooter installs and repairs natural gas lines for ranges, dryers, water heaters, fireplaces, and whole-home systems throughout the Peninsula.",
          "All gas work is done to California code. We pressure-test every line and pull permits where required. If you smell gas, shut off your supply and call us immediately.",
        ]}
        whatWeDo={[
          "Gas line installation for appliances and water heaters",
          "New gas line runs and rerouting",
          "Gas leak detection and repair",
          "Pressure testing and code compliance sign-off",
          "Seismic gas shutoff valve installation",
          "Permit coordination for qualifying work",
        ]}
        whyChooseUs={[
          "Licensed CSLB #1147292 — gas work done to California code",
          "We pressure-test every line before sign-off",
          "Upfront pricing — no surprise charges",
          "Insured to $1,000,000 and bonded",
          "Serving Menlo Park and the Bay Area Peninsula",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
