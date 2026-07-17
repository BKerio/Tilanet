import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Box, Truck, Sliders } from 'lucide-react';
import { whyChooseUs } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Award,
  Heart,
  Box,
  Truck,
  Sliders,
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.why-title', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        scrollTrigger: { trigger: '.why-title', start: 'top 85%' },
      });
      gsap.from('.why-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: { trigger: '.why-items-container', start: 'top 85%' },
      });
      gsap.from('.why-person-img', {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        scrollTrigger: { trigger: '.why-person-img', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const leftItems = whyChooseUs.slice(0, 3);
  const rightItems = whyChooseUs.slice(3);

  return (
    <div ref={sectionRef} className="relative">
      <div className="w-full h-6 bg-primary" />

      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <div className="why-items-container space-y-12">
              <h2 className="why-title text-2xl sm:text-3xl font-bold text-black leading-[1.35] pb-[0.06em]">
                Why Choose{' '}
                <span className="text-gray-600 block sm:inline break-words">
                  TILA-NET ENTERPRISES LIMITED
                </span>
                ?
              </h2>

              {leftItems.map((item) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <div key={item.title} className="why-item group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-12 lg:pt-16 flex flex-col items-stretch lg:items-end">
              {rightItems.map((item) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <div key={item.title} className="why-item group w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                      {item.description}
                    </p>
                  </div>
                );
              })}

              <div className="why-person-img relative mt-8 overflow-hidden rounded-3xl border border-[#e1e2e7] shadow-lg max-w-[480px] w-full self-center lg:self-end">
                <img 
                  src="/why-us-woman.png" 
                  draggable="false"
                  alt="Tila-Net specialist" 
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="w-full h-6 bg-primary" />
    </div>
  );
}
