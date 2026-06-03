"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Work</div>
          <h2 className="fleet-section__heading">
            Professional Plumbing — Done Right the First Time
          </h2>
          <p className="fleet-section__intro">
            From sewer replacements and hydro jetting to new bathroom rough-ins and
            water heater installs, our team handles the full range of residential and
            commercial plumbing in Menlo Park and across the Bay Area Peninsula.
            We arrive equipped, work clean, and explain every step before we start.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          <Image
            src="/images/plumber-under-sink-repair-inspection.jpg"
            alt="Bluey Plumbing plumber at work"
            width={800}
            height={534}
            className="fleet-section__img"
          />
          <Image
            src="/images/plumber-installing-wall-mounted-sink-bathroom.jpg"
            alt="Bluey Plumbing sink installation"
            width={800}
            height={534}
            className="fleet-section__img"
          />
          <Image
            src="/images/plumber-installing-drain-pipe-closeup.jpg"
            alt="Bluey Plumbing drain installation"
            width={800}
            height={534}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
