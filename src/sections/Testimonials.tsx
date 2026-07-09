import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-panel', {
        opacity: 0, x: 40, duration: 0.8,
        scrollTrigger: { trigger: '.testimonial-panel', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionTitle
              align="left"
              eyebrow="Testimonials"
              title="Client Testimonials"
              description="Trusted by organizations across Africa for reliable supply, on-time delivery, and responsive support."
              className="mb-0"
            />
            <div className="flex items-center gap-3 mt-8">
              <button onClick={prev} className="w-[52px] h-[52px] rounded-full border border-[#e1e2e7] flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-[52px] h-[52px] rounded-full border border-[#e1e2e7] flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 testimonial-panel">
            <div className="testimonial-card-dark">
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <div className="pt-6 border-t border-white/10">
                <div className="font-semibold text-white text-lg">{active.author}</div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-golden mt-1">
                  {active.title}, {active.company}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 transition-all duration-300 ${index === activeIndex ? 'bg-golden w-8' : 'bg-[#d7d7d7] w-3 hover:bg-golden/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
