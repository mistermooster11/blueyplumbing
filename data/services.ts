export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Drain Services & Installations",      href: "/drain-services" },
  { label: "Gas Line Services & Installation",    href: "/gas-line-services" },
  { label: "Water Services & Installations",      href: "/water-services" },
  { label: "Fixtures Repairs & Installation",     href: "/fixtures-repairs" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Drain Services & Installations",
    image: "/images/service-1.png",
    href: "/drain-services",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Gas Line Services & Installation",
    image: "/images/service-2.png",
    href: "/gas-line-services",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Water Services & Installations",
    image: "/images/service-3.webp",
    href: "/water-services",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Fixtures Repairs & Installation",
    image: "/images/service-4.webp",
    href: "/fixtures-repairs",
    width: 535,
    height: 643,
  },
];
