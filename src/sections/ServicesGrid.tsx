import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

interface ServicesGridProps {
  showCta?: boolean;
  autoAdvance?: boolean;
  autoAdvanceMs?: number;
  mode?: 'panel' | 'scroll';
  showImages?: boolean;
}

const shortTitleMap: Record<string, string> = {
  'office-institutional': 'General & Institutional Supplies',
  'motor-vehicle': 'Motor Vehicle Accessories & Spares',
  'specialised-contracts': 'Specialized Supply Contracts',
};

const imageAltMap: Record<string, string> = {
  'office-institutional': 'Office and institutional supplies in Nairobi, Kenya',
  'motor-vehicle': 'Motor vehicle accessories and spare parts supply',
  'specialised-contracts': 'Bulk and framework supply contracts for institutions',
};

const operationProcessSteps = services.map((item, index) => ({
  step: String(index + 1).padStart(2, '0'),
  shortTitle: shortTitleMap[item.id] || item.title,
  title: item.title,
  description: item.description,
  image: item.image,
  imageAlt: imageAltMap[item.id] || item.title,
  details: item.features,
}));

export default function ServicesGrid({
  showCta = true,
  autoAdvance = false,
  autoAdvanceMs = 8000,
  mode = 'scroll',
  showImages = true,
}: ServicesGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const step = operationProcessSteps[activeIndex];

  useEffect(() => {
    if (!autoAdvance) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % operationProcessSteps.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [autoAdvance, autoAdvanceMs]);

  useEffect(() => {
    if (mode !== 'scroll') return undefined;

    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mode]);

  useEffect(() => {
    if (mode !== 'scroll') return undefined;

    const ctx = gsap.context(() => {
      revealRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [mode]);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    if (mode === 'scroll') {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const addToRevealRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const stepNav = (
    <nav aria-label="Operation flow steps">
      <ul>
        {operationProcessSteps.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={item.step} className="border-t border-black/10">
              <button
                type="button"
                onClick={() => goToStep(index)}
                className={`group flex w-full items-baseline gap-4 py-5 text-left transition-opacity lg:py-7 ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-65'
                }`}
              >
                <span
                  className={`font-display text-3xl font-medium tracking-tight sm:text-4xl ${
                    isActive ? 'text-primary' : 'text-figure-ink'
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`text-base font-medium uppercase tracking-[0.22em] sm:text-lg ${
                    isActive ? 'text-[#3D405B]' : 'text-figure-ink'
                  }`}
                >
                  {item.shortTitle}
                </span>
              </button>
            </li>
          );
        })}
        <li className="border-t border-black/10" />
      </ul>
    </nav>
  );

  const stepContent = (item: (typeof operationProcessSteps)[number], dimmed = false) => (
    <div className={dimmed ? 'opacity-35 transition-opacity duration-500' : 'hero-content-enter'}>
      {showImages && (
        <div className="aspect-[16/10] overflow-hidden bg-black/5 mb-8 lg:mb-10 rounded-xl relative group">
          <img
            draggable={false}
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
        </div>
      )}

      <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-4">
        {item.title}
      </h3>

      <p className="text-base text-figure-muted leading-relaxed mb-8">
        {item.description}
      </p>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {item.details.map((detail) => (
          <li key={detail} className="border-t border-black/10 pt-4 text-sm text-figure-muted">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="services" className="editorial-section bg-figure-light text-figure-ink">
      <div className="site-container">
        <div className="mb-16">
          <p className="eyebrow text-figure-muted mb-6">What we do</p>
          <h2 className="display-md">
            Products and services built for
            <br className="hidden sm:block" />
            {' '}reliable supply
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left — images + explanation */}
          <div className="lg:col-span-7">
            {mode === 'panel' ? (
              <div key={activeIndex}>{stepContent(step)}</div>
            ) : (
              <div className="space-y-24 lg:space-y-32">
                {operationProcessSteps.map((item, index) => (
                  <div
                    key={item.step}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    className="scroll-mt-32"
                  >
                    <div ref={addToRevealRefs}>{stepContent(item, index !== activeIndex)}</div>
                  </div>
                ))}
              </div>
            )}

            {showCta && (
              <Link to="/services" className="text-link mt-12 inline-flex text-figure-ink">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Right — Figure-style step list */}
          <div className="lg:col-span-5 lg:order-last">
            <div className="lg:sticky lg:top-28">{stepNav}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
