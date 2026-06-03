# Bluey Plumbing & Rooter — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-06-03
Prospect: https://blueyplumbing.com
Template: Unclog (UnclogMe)
Reference sites: Yelp, MapQuest, BuildZoom, Yahoo Local

---

## Source Material Summary

- **Business Name:** Bluey Plumbing & Rooter
- **Phone:** (650) 669-0007
- **Address:** 1452 San Antonio Ave, Ste 5, Menlo Park, CA 94025
- **License:** CSLB #1147292 (active)
- **Primary Market:** Bay Area Peninsula — Menlo Park, Palo Alto, Redwood City, Atherton, East Palo Alto, Mountain View, Sunnyvale
- **Residential & Commercial:** Yes, both
- **Hours:** Mon–Fri 8:00 AM–7:00 PM, Sat 9:00 AM–5:00 PM (confirmed via MapQuest/BuildZoom)
- **Reviews:** 5★ Yelp — 5 reviews extracted (Destiny O., AJ M., Dino C., Tri N., Abo A.)
- **Social:** Yelp confirmed (https://www.yelp.com/biz/bluey-plumbing-and-rooter-menlo-park); Facebook/Instagram/Twitter TBD

**Source site notes:** blueyplumbing.com is a single-page GoDaddy site with minimal content. Bulk of content was scraped from Yelp, MapQuest, BuildZoom, and Yahoo Local listings.

---

## Service Inventory

Services found across all source listings:
1. Drain Services (drain clearing, drain cleaning)
2. Hydro Jetting
3. Sewer Line Services (sewer line inspection, repair)
4. Camera Inspection (sewer/drain camera)
5. Gas Line Installation & Repair
6. Gas Pressure Testing
7. Seismic Gas Shutoff Valves
8. Water Heater Installation (tank)
9. Tankless Water Heater Installation
10. Water Line Repair & Replacement
11. Repiping
12. Leak Detection
13. Toilet Repair & Replacement
14. Faucet & Fixture Repair
15. Sink & Drain Fixtures
16. Appliance Hookups (dishwasher, refrigerator, washer)
17. Bathroom Rough-In

---

## Services Consolidated

Services 1–4 (drain clearing, hydro jetting, sewer line, camera inspection) → **Drain Services** page
Services 5–7 (gas line work, pressure testing, seismic shutoffs) → **Gas Line Services** page
Services 8–12 (water heaters tank/tankless, water lines, repiping, leak detection) → **Water Services** page
Services 13–17 (toilets, faucets, sinks, appliances, rough-in) → **Fixtures & Repairs** page

**Justification:** These groupings match how Bluey Plumbing describes their work on source listings. Each consolidation combines genuinely related sub-tasks under one trade category — they are not separate services that customers would search independently. No services omitted.

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
- Kept: HeroSection, ServicesSection, AboutSection, PricingSection, WhyChooseSection, TestimonialsSection, BlogSection, CTAFormSection
- Removed: donation/org-specific sections not applicable to plumbing
- Hero H1: "Bay Area Plumbing Experts / Fast, Honest, Reliable."
- Hero video: Cloudflare Stream iframe (swapped from native `<video>` tag — template used `<video>`, not iframe)

### About Us (`app/about-us/page.tsx`)
- Copy drawn from Yelp listing description and reviewer feedback
- Stat box changed from "14+ Years" to "5★ Yelp Rating" (no founding year confirmed)

### Services Page (`app/services-page/page.tsx`)
- Standard service grid pulling from `data/services.ts`

### Service Detail Pages (4 pages)
- `app/drain-services/page.tsx` — drain clearing, hydro jetting, sewer line, camera inspection
- `app/gas-line-services/page.tsx` — gas line installation/repair, pressure testing, seismic shutoffs
- `app/water-services/page.tsx` — tank/tankless water heaters, water lines, repiping, leak detection
- `app/fixtures-repairs/page.tsx` — toilets, faucets, sinks, appliance hookups, bathroom rough-in

### FAQ (`app/faq/page.tsx`)
- 6 Bay Area–specific FAQs covering: emergency response, residential/commercial, service area, CSLB license, upfront pricing, gas line work

### Blog (`app/blog/page.tsx`)
- 4 placeholder posts with realistic Bay Area plumbing topics
- All flagged [TODO: Replace with real content]

### Contact (`app/contact-us/page.tsx`)
- Address: 1452 San Antonio Ave, Ste 5, Menlo Park, CA 94025
- Google Maps embed pointed to Menlo Park address
- Phone: (650) 669-0007

---

## Navigation Changes

Template default nav replaced with flat 5-item structure:
- Home → /
- Services (dropdown: Drain Services, Gas Line Services, Water Services, Fixtures & Repairs)
- About Us → /about-us
- Blog → /blog
- Contact → /contact-us

Removed: template mega-dropdown and franchise-specific items.

---

## Copy Generation Log

All copy extracted from source site listings unless noted below as generated:

**Generated (gap-filled):**
- About section body paragraphs (source site had no "About Us" text)
- Service detail page descriptions (source listings had service names but no descriptions)
- FAQ answers (questions inferred from trade norms + service area)
- Blog post excerpts (placeholder content, flagged as TODO)
- CTAFormSection body copy (right panel paragraphs)
- NeedServicesSection body text

**Extracted from source listings:**
- Business name, phone, address, hours, license number
- All 5 Yelp reviews (verbatim, with reviewer names)
- Service area cities (from MapQuest/BuildZoom service area listings)
- Residential & commercial scope

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created | Disallows all crawlers for staging |
| sitemap.ts | Created | Covers 10 routes: home + 4 service pages + services + about + faq + blog + contact |
| LocalBusiness JSON-LD | Added to layout.tsx | @type: Plumber, real business data |
| Root metadata (title, description, OG, Twitter) | Done | Full metadata block in layout.tsx |
| Production domain | TODO | Placeholder `[TODO: production-domain]` throughout |
| Business hours | Confirmed | Mo-Fr 08:00-19:00, Sa 09:00-17:00 (from MapQuest) |
| OG image (1200x630) | TODO | No suitable image available yet |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Production domain | `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` | Replace all `[TODO: production-domain]` with live domain |
| OG image | `app/layout.tsx` | Add 1200x630 `og-image.jpg` to `/public/` |
| Email address | `components/custom/contact/ContactSection.tsx` | Confirm: is info@blueyplumbing.com correct? |
| Facebook URL | `components/custom/contact/ContactSection.tsx`, `components/custom/footer/Footer.tsx` | Add real Facebook profile URL |
| Instagram URL | `components/custom/footer/Footer.tsx` | Add if they have one |
| Blog posts | `app/blog/page.tsx`, `data/blog.ts` | Replace 4 placeholder posts with real content |
| Service images | All service page mastheads | Replace `/images/` placeholder paths with real photos |
| Hero fallback image | `components/custom/hero/HeroSection.tsx` | Add fallback for when video doesn't load |
| Google Maps embed | `app/contact-us/page.tsx` | Verify embed points to correct Menlo Park address |
| Yelp review count | `components/custom/testimonials/TestimonialsSection.tsx` | Currently shows "7 reviews" — update if count changes |
