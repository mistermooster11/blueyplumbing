export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 249,
    note: "Upfront pricing — no hidden fees",
    title: "Drain Clearing",
    features: ["Kitchen & bathroom sinks", "Shower & tub drains", "Toilet lines", "Washing machine drain", "Floor drains"],
    description:
      "Professional drain snaking clears most household clogs fast. We use the right tool for the line — snake, auger, or blaster.",
  },
  {
    price: 399,
    note: "Upfront pricing — no hidden fees",
    title: "Hydro Jetting",
    features: [
      "Main sewer line cleaning",
      "Removes grease, scale & root buildup",
      "Restores full pipe flow",
      "Residential & commercial",
    ],
    description:
      "High-pressure water cuts through buildup that a snake can't fully remove. The right call for recurring clogs and older lines.\n\nPrice per line. Residential rate.",
    highlight: true,
  },
  {
    price: 299,
    note: "Upfront pricing — no hidden fees",
    title: "Camera Inspection",
    features: [
      "Waterproof sewer line camera",
      "Root, crack & offset detection",
      "Video recorded for your records",
    ],
    description:
      "See exactly what's in the pipe before committing to a repair. We run the camera and show you the footage on the spot.\n\nPrice per line. Pipes must be drained.",
  },
  {
    price: 0,
    note: "Free estimate — no commitment",
    title: "Water & Gas Work",
    features: [
      "Water heater installation & repair",
      "Gas line install & pressure test",
      "Water line repair & repiping",
      "Fixture installation",
    ],
    description:
      "Pricing varies by scope. We assess the job, give you a written estimate, and start only when you approve it. Call or text for a free quote.",
  },
];
