import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '../data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={counterRef} className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding bg-white overflow-hidden border-t border-slate-100">
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Our Track Record"
          title="Numbers That Speak for Themselves"
          description="Delivering measurable results for organizations across Africa."
        />

        <div className="stats-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center group">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-slate-600 text-[13px] mt-2 font-semibold uppercase tracking-[0.08em] group-hover:text-primary transition-colors">{stat.label}</div>
              <div className="w-8 h-px bg-slate-200 mx-auto mt-4 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
