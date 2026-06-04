import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Water Services & Installations — Menlo Park, CA",
  description:
    "Water heater installation, water line repair, repiping, and leak detection in Menlo Park and the Bay Area Peninsula. Bluey Plumbing & Rooter — CSLB #1147292.",
};

export default function WaterServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Water Services & Installations"
        subtitle="Water heater installation and repair, water line service, repiping, and leak detection across Menlo Park and the Bay Area Peninsula."
        backgroundImage="/images/plumber-hands-installing-brass-pipe-connector.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Water Services & Installations" },
        ]}
      />
      <ServiceDetailSection
        activeService="Water Services & Installations"
        sidebarImage="/images/modern-boiler-system-installation-brass-pipes.jpg"
        sidebarImageWidth={800}
        sidebarImageHeight={534}
        heading="Water Heater, Water Lines & More"
        intro={[
          "Whether your water heater failed overnight or your water pressure has been dropping for months, Bluey Plumbing & Rooter diagnoses the problem and gives you a clear fix — fast. We install and service tank and tankless water heaters, repair and replace water lines, and handle repiping for older Peninsula homes.",
          "All work is done to California code with permits pulled where required. We assess the job, give you an upfront price, and start only when you approve it.",
        ]}
        whatWeDo={[
          "Water heater installation — tank and tankless",
          "Water heater repair and seismic restraint installation",
          "Water line repair and replacement",
          "Whole-home repiping",
          "Leak detection and repair",
          "Shut-off valve installation and replacement",
        ]}
        whyChooseUs={[
          "Same-day water heater service available",
          "Came out within 24 hours for an inspection deadline — and delivered",
          "Upfront pricing — approved before work starts",
          "Licensed CSLB #1147292, insured to $1,000,000",
          "Flexible scheduling — we work around you",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
