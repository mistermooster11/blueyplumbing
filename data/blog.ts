export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/why-bay-area-homes-get-more-drain-clogs/",
    image: "/images/blog-1.png",
    date: "15",
    monthYear: "May '26",
    category: "Drain Services",
    categoryHref: "/drain-services",
    title: "Why Bay Area Homes Get More Drain Clogs (And What You Can Do About It)",
    excerpt:
      "Hard water, aging sewer laterals, and clay soil shifts make Peninsula pipes more prone to buildup. Here's what Menlo Park homeowners should know before calling a plumber.",
  },
  {
    slug: "/blog/gas-line-leak-warning-signs/",
    image: "/images/blog-2.png",
    date: "08",
    monthYear: "May '26",
    category: "Gas Line Services",
    categoryHref: "/gas-line-services",
    title: "5 Warning Signs You May Have a Gas Line Problem",
    excerpt:
      "A rotten-egg smell is the obvious one — but gas line issues often show up in subtler ways first. Know what to look for before a small leak becomes a serious problem.",
  },
  {
    slug: "/blog/water-heater-repair-vs-replace/",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "May '26",
    category: "Water Services",
    categoryHref: "/water-services",
    title: "Water Heater Repair vs. Replace: How to Decide",
    excerpt:
      "If your water heater is over 10 years old and breaking down, repair often isn't worth it. This guide walks through the math — and what a replacement actually costs in the Bay Area.",
  },
  {
    slug: "/blog/sewer-line-warning-signs/",
    image: "/images/blog-1.png",
    date: "22",
    monthYear: "Apr '26",
    category: "Drain Services",
    categoryHref: "/drain-services",
    title: "5 Signs Your Main Sewer Line Needs Attention",
    excerpt:
      "Multiple slow drains, gurgling toilets, and sewage odors in the yard are red flags. Catching a sewer line problem early can save thousands. Here's what to watch for.",
  },
];
