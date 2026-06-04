import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Estimate",
  description:
    "Contact Bluey Plumbing & Rooter for drain services, gas lines, water heaters, and fixture work in Menlo Park and the Bay Area Peninsula. Call (650) 669-0007.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Call (650) 669-0007 or fill out the form — we'll give you a clear price before anything starts."
        backgroundImage="/images/plumber-installing-dishwasher-kitchen.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Bluey Plumbing & Rooter — Menlo Park, CA"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d-122.1819!3d37.4530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa3a7c5555555%3A0x0!2s1452+San+Antonio+Ave%2C+Ste+5%2C+Menlo+Park%2C+CA+94025!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
