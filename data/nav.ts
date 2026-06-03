export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Drain Services & Installations", href: "/drain-services" },
      { label: "Gas Line Services & Installation", href: "/gas-line-services" },
      { label: "Water Services & Installations", href: "/water-services" },
      { label: "Fixtures Repairs & Installation", href: "/fixtures-repairs" },
    ],
  },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services-page" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Drain Services & Installations", href: "/drain-services" },
  { label: "Gas Line Services & Installation", href: "/gas-line-services" },
  { label: "Water Services & Installations", href: "/water-services" },
  { label: "Fixtures Repairs & Installation", href: "/fixtures-repairs" },
];
