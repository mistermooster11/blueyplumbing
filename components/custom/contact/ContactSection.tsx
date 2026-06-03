"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ContactSection() {
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
        gsap.from(".contact-section__info", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".contact-section__form-wrap", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-section__container">

        {/* ── LEFT: Contact Info ──────────────────── */}
        <div className="contact-section__info">
          <div className="contact-section__eyebrow">Contacts</div>
          <h2 className="contact-section__heading">
            We are always ready <br />to help you and answer your questions
          </h2>

          {/* Inner 2-col: left = Address + Social | right = Phone + Email */}
          <div className="contact-section__details">

            {/* Left sub-col */}
            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Address</h5>
              <p className="contact-detail__value">
                1452 San Antonio Ave, Ste 5,&nbsp;Menlo Park,&nbsp;CA&nbsp;94025
              </p>

              <h5 className="contact-detail__label">Follow us</h5>
              <div className="contact-section__social">
                <Link href="https://www.yelp.com/biz/bluey-plumbing-and-rooter-menlo-park" className="contact-social-icon" aria-label="Yelp" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M20.16 12.73l-4.63 1.4c-.8.25-1.56-.5-1.22-1.28l1.8-4.4c.35-.84 1.5-.84 1.77.05l2.83 3c.5.53.3 1.42-.55 1.67zm-9.04 3.32l-.48 4.8c-.09.9.74 1.58 1.6 1.28l4.4-1.56c.82-.29 1.03-1.35.38-1.93l-3.92-3.24c-.65-.54-1.62-.15-1.68.65zm-3.87-1.35c-.54.6-.36 1.54.36 1.9l4.05 2.05c.77.39 1.66-.18 1.6-1.04l-.3-4.55c-.06-.83-1-.23-1.7.12L7.25 14.7zm-3.06-5.5c-.1.88.62 1.6 1.5 1.5l4.7-.54c.85-.1 1.2-1.13.58-1.72L7.24 5.4c-.6-.57-1.6-.22-1.73.6L4.2 10.95zm5.14-5.6L7.98 9.8c-.2.82.63 1.5 1.4 1.16l4.4-1.93c.8-.35.83-1.47.04-1.86L9.7 5.08C9 4.7 8.12 5.08 7.94 5.86z" />
                  </svg>
                </Link>
                <Link href="https://www.facebook.com/" className="contact-social-icon" aria-label="Facebook — TODO: add Bluey Plumbing Facebook URL" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/" className="contact-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/" className="contact-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right sub-col */}
            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Phone</h5>
              <p className="contact-detail__value">
                <Link href="tel:+16506690007">(650) 669-0007</Link>
              </p>

              <h5 className="contact-detail__label">Email</h5>
              <p className="contact-detail__value">
                {/* TODO: Add Bluey Plumbing email address */}
                <Link href="mailto:info@blueyplumbing.com">info@blueyplumbing.com</Link>
              </p>
            </div>

          </div>
        </div>

        {/* ── RIGHT: Form ─────────────────────────── */}
        <div className="contact-section__form-wrap">
          <h3 className="contact-section__form-heading">Get in Touch</h3>
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="contact-section__input"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <div className="contact-section__row">
              <input
                type="tel"
                placeholder="Phone"
                className="contact-section__input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="contact-section__input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="contact-section__row">
              <input
                type="text"
                placeholder="City"
                className="contact-section__input"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="contact-section__input"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="contact-section__textarea"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="contact-section__submit">
              Get a Quote
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
