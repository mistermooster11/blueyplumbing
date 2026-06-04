import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import SalePopup from '@/components/custom/popup/SalePopup'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Bluey Plumbing & Rooter — Licensed Plumbers | Menlo Park, CA",
    template: "%s | Bluey Plumbing & Rooter",
  },
  description:
    "Licensed, insured Bay Area plumbers serving Menlo Park and the Peninsula. Drain services, gas lines, water heaters, and fixtures — residential & commercial. CSLB #1147292.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "Bluey Plumbing & Rooter",
    title: "Bluey Plumbing & Rooter — Licensed Plumbers | Menlo Park, CA",
    description:
      "Licensed, insured Bay Area plumbers serving Menlo Park and the Peninsula. Drain services, gas lines, water heaters, and fixtures.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bluey Plumbing & Rooter" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Bluey Plumbing & Rooter",
  "telephone": "+16506690007",
  "url": "https://[TODO: production-domain]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1452 San Antonio Ave, Ste 5",
    "addressLocality": "Menlo Park",
    "addressRegion": "CA",
    "postalCode": "94025",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "City", "name": "Menlo Park" },
    { "@type": "City", "name": "Palo Alto" },
    { "@type": "City", "name": "Redwood City" },
    { "@type": "City", "name": "East Palo Alto" },
    { "@type": "City", "name": "Atherton" },
    { "@type": "City", "name": "Woodside" },
    { "@type": "City", "name": "Mountain View" },
  ],
  "openingHours": "Mo-Fr 08:00-19:00, Sa 09:00-17:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "7",
    "bestRating": "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="Bluey Plumbing & Rooter" expiryDate="June 15, 2026" trade="plumbers" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
