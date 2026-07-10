import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type HeroSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proof: { value: string; label: string };
  images: {
    center: { src: string; alt: string };  uu
    bottomLeft: { src: string; alt: string };
    topRight: { src: string; alt: string };
    bottomRight: { src: string; alt: string };
  };
};

const slides: HeroSlide[] = [
  {
    eyebrow: 'Supplier company · Nairobi, Kenya',
    title: 'Your trusted partner for sourcing and supply across Africa.',
    subtitle:
      'Tilanet is a supplier company that helps organizations procure ICT hardware, office essentials, and technology products-with clear pricing, verified vendors, and dependable delivery to your door.',
    highlights: ['Procurement & sourcing', 'ICT & office products', 'Nationwide delivery'],
    primaryCta: { label: 'Request a Quote', href: '/contact' },
    secondaryCta: { label: 'Our Supply Services', href: '/services' },
    proof: { value: '30+', label: 'Organizations supplied' },
    images: {
      center: { src: '/hero-mombasa-containers.jpg', alt: 'Shipping containers at Mombasa port, Kenya' },
      bottomLeft: { src: '/hero-africa-business-team.jpg', alt: 'African business team reviewing supply orders' },
      topRight: { src: '/hero-warehouse-boxes.jpg', alt: 'Warehouse stocked with supply boxes' },
      bottomRight: { src: '/hero-kenya-trucks.jpg', alt: 'Delivery trucks on a highway in Kenya' },
    },
  },
  {
    eyebrow: 'From request to delivery',
    title: 'Tell us what you need-we source it and deliver it.',
    subtitle:
      'Share your product list, quantities, and delivery locations. We handle vendor sourcing, purchase coordination, quality checks, and last-mile delivery-so your teams stay focused on operations.',
    highlights: ['RFQ & quotation support', 'Purchase order handling', 'Proof of delivery'],
    primaryCta: { label: 'Get a Quote', href: '/contact' },
    secondaryCta: { label: 'View Products', href: '/solutions' },
    proof: { value: '40+', label: 'Successful deliveries' },
    images: {
      center: { src: '/hero-container-yard.jpg', alt: 'Aerial view of shipping container yard' },
      bottomLeft: { src: '/hero-africa-meeting.jpg', alt: 'African professionals coordinating procurement' },
      topRight: { src: '/hero-cargo-crates.jpg', alt: 'Cargo crates ready for distribution' },
      bottomRight: { src: '/hero-africa-businessman.jpg', alt: 'African businessman managing supply orders' },
    },
  },
  {
    eyebrow: 'Contract & bulk supply',
    title: 'Recurring supply for teams that need consistency.',
    subtitle:
      'For organizations with ongoing procurement needs, Tilanet offers contract supply, bulk ordering, and dedicated account support-so you get the same products, on schedule, every time.',
    highlights: ['Bulk & framework supply', 'Predictable lead times', 'After-sales support'],
    primaryCta: { label: 'Talk to Our Team', href: '/contact' },
    secondaryCta: { label: 'How We Supply', href: '/process' },
    proof: { value: '100%', label: 'Repeat customers' },
    images: {
      center: { src: '/hero-warehouse-boxes.jpg', alt: 'Bulk supply stored in warehouse' },
      bottomLeft: { src: '/hero-africa-business-team.jpg', alt: 'Account team supporting contract supply' },
      topRight: { src: '/hero-mombasa-containers.jpg', alt: 'Import and export logistics in East Africa' },
      bottomRight: { src: '/hero-cargo-crates.jpg', alt: 'Inventory ready for recurring deliveries' },
    },
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length;
    setActiveSlide(next);
  }, []);

  const nextSlide = useCallback(() => goToSlide(activeSlide + 1), [activeSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(activeSlide - 1), [activeSlide, goToSlide]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((s) => (s + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="bg-white flex items-center overflow-hidden">
      <div className="container-custom w-full py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">

          {/* ─── LEFT: Copy block ─── */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#1a1b1f]/55 mb-4">
              {slide.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.06] font-extrabold tracking-tight text-[#1a1b1f]">
              {slide.title}
            </h1>

            {/* Body */}
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] font-semibold text-[#1a1b1f]/75">
              {slide.subtitle}
            </p>

            {/* Supply highlights */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {slide.highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#1a1b1f]/12 bg-[#f8f6f1] px-3 py-1.5 text-[12px] font-semibold text-[#1a1b1f]/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={slide.primaryCta.href}
                id="hero-cta-primary"
                className="inline-flex items-center justify-center h-[48px] px-7 rounded-full bg-primary text-primary-foreground text-[14px] font-bold shadow-[0_10px_28px_rgba(245,130,32,0.28)] hover:bg-primary-dark transition-all duration-200"
              >
                {slide.primaryCta.label}
              </Link>
              <Link
                to={slide.secondaryCta.href}
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center h-[48px] px-7 rounded-full border-2 border-[#1a1b1f]/25 text-[#1a1b1f] text-[14px] font-bold hover:border-[#1a1b1f]/50 hover:bg-black/[0.04] transition-all duration-200"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>

            {/* Social proof row */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['/hero-africa-businessman.jpg', '/hero-africa-business-team.jpg', '/hero-africa-meeting.jpg'].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Tilanet client"
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-[#1a1b1f] leading-none">
                  {slide.proof.value}
                </div>
                <div className="text-[12px] text-[#1a1b1f]/60 font-semibold mt-0.5">
                  {slide.proof.label}
                </div>
              </div>
            </div>

            {/* Slider controls */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-[#1a1b1f]/15 text-[#1a1b1f] hover:bg-black/[0.04] transition-colors"
                aria-label="Previous slide"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeSlide ? 'w-7 bg-primary' : 'w-2 bg-[#1a1b1f]/25 hover:bg-[#1a1b1f]/35'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-[#1a1b1f]/15 text-[#1a1b1f] hover:bg-black/[0.04] transition-colors"
                aria-label="Next slide"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>

          {/* ─── RIGHT: Capsule image collage ─── */}
          {/*
            2-sub-column flex layout (matches reference exactly):
            ┌─────────────────┬──────────────────────┐
            │ [pill: top 71%] │  [circle: w-full 1:1]│
            │                 │                      │
            │ [circle: btm,   │  [capsule: flex-1]   │
            │  82% w, abs]    │                      │
            └─────────────────┴──────────────────────┘
          */}
          <div
            className="relative hidden lg:block w-full"
            style={{ height: 'clamp(480px, 50vw, 550px)' }}
          >
            <div className="absolute inset-0 flex gap-4">

              {/* LEFT sub-column (42% wide): tall pill + overlapping bottom circle */}
              <div className="relative flex-none" style={{ width: '42%' }}>

                {/* ① Tall narrow center pill - top-anchored, full column width */}
                <div
                  className="absolute top-0 inset-x-0 overflow-hidden rounded-[9999px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                  style={{ height: '71%' }}
                >
                  <img
                    src={slide.images.center.src}
                    alt={slide.images.center.alt}
                    draggable={false}
                    className="w-full h-full object-cover object-top transition-opacity duration-500"
                  />
                </div>

                {/* ② Bottom-left circle - centered in column, overlaps pill bottom */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-[#f3e6de] shadow-[0_14px_44px_rgba(0,0,0,0.22)] z-10"
                  style={{ width: '82%', aspectRatio: '1 / 1' }}
                >
                  <img
                    src={slide.images.bottomLeft.src}
                    alt={slide.images.bottomLeft.alt}
                    draggable={false}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* RIGHT sub-column (flex-1): top circle stacked above bottom capsule */}
              <div className="flex-1 flex flex-col gap-3">

                {/* ③ Top-right circle - fills full column width, height = width (1:1) */}
                <div
                  className="w-full flex-none overflow-hidden rounded-full border-[5px] border-[#f3e6de] shadow-[0_14px_44px_rgba(0,0,0,0.16)]"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <img
                    src={slide.images.topRight.src}
                    alt={slide.images.topRight.alt}
                    draggable={false}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>

                {/* ④ Bottom-right capsule — takes all remaining height */}
                <div className="flex-1 overflow-hidden rounded-[9999px] shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
                  <img
                    src={slide.images.bottomRight.src}
                    alt={slide.images.bottomRight.alt}
                    draggable={false}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
