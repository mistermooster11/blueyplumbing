"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function NeedServicesSection() {
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
        gsap.from(".need-services__inner > *", {
          y: 35, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="need-services" ref={sectionRef}>
      <div className="need-services__inner">
        <Link href="/contact-us" className="need-services__btn">
          Get a Free Estimate
        </Link>
        <h2 className="need-services__heading">
          Need a Licensed Plumber
          <br />in the Bay Area?
        </h2>
        <p className="need-services__text">
          Call or text (650) 669-0007 — we&apos;ll give you an honest assessment and a clear price
          before <br />anything starts. Serving Menlo Park and the Peninsula.
        </p>
      </div>
    </section>
  );
}
