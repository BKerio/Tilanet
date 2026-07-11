import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyInfo, stats } from '@/data/siteData';
import ThemeButton from '@/components/ThemeButton';

gsap.registerPlugin(ScrollTrigger);

const expertisePoints = [
  'General office stationery, IT accessories, PPE, uniforms, and cleaning materials.',
  'Motor vehicle batteries, tyres, spare parts, and general accessories.',
  'Tailored supply contracts for parastatals, private companies, and government institutions.',
  'Timely delivery, competitive pricing, and dependable after-sales support.',
];

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.welcome-content > *', {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.from('.welcome-image', {
        opacity: 0, x: 40, duration: 0.8,
        scrollTrigger: { trigger: '.welcome-image', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] gap-12 lg:gap-14 xl:gap-16 items-center">
          <div className="welcome-content">
            <p className="sec-subtitle">Welcome</p>
            <h2 className="sec-title mt-2 mb-6">
              {companyInfo.name}
              <span className="block text-2xl sm:text-3xl font-medium text-[#6f7174] mt-2 tracking-normal">
                {companyInfo.description}
              </span>
            </h2>
            <p className="text-[15px] leading-[30px] text-[#6f7174] mb-8">
              {companyInfo.mission}
            </p>

            <ul className="space-y-4 mb-10">
              {expertisePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                  </span>
                  <span className="text-[15px] leading-[28px] text-[#6f7174]">{point}</span>
                </li>
              ))}
            </ul>

            <ThemeButton to="/about">
              Discover More <ArrowRight className="w-4 h-4" />
            </ThemeButton>
          </div>

          <div className="welcome-image relative lg:pl-4 xl:pl-6">
            {/* Layered frame — depth without covering the photo */}
            <div className="relative">
              <div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl bg-golden/25 -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 w-[72%] h-[72%] rounded-2xl bg-charcoal -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden border border-white/80 shadow-[0_24px_64px_rgba(24,25,28,0.14)]">
                <img
                  src="/service-software.jpg"
                  alt="Tila-Net team at work"
                  className="block w-full h-auto max-w-full"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-charcoal/25 via-transparent to-golden/10 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Corner accent */}
              <div
                className="absolute -top-2 -left-2 w-14 h-14 border-t-4 border-l-4 border-golden rounded-tl-xl pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Stat circle + progress bars — in flow, no overlap */}
            <div className="mt-9 lg:mt-11 flex flex-col sm:flex-row sm:items-center gap-7 sm:gap-8 lg:gap-10">
              <div className="flex flex-col items-center shrink-0 sm:items-start">
                <div className="w-[132px] h-[132px] sm:w-[144px] sm:h-[144px] rounded-full bg-charcoal p-[3px] shadow-[0_12px_40px_rgba(24,25,28,0.18)]">
                  <div className="w-full h-full rounded-full bg-white border-[3px] border-golden flex flex-col items-center justify-center text-center px-3">
                    <span className="text-[38px] sm:text-[42px] font-bold text-charcoal leading-none">
                      {stats[0].value}{stats[0].suffix}
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-[#6f7174] mt-1.5 leading-tight">
                      {stats[0].label}
                    </span>
                  </div>
                </div>
                <span className="mt-3 text-[11px] uppercase tracking-[0.14em] text-golden font-semibold">
                  Since {companyInfo.founded}
                </span>
              </div>

              <div className="flex-1 space-y-4 w-full min-w-0">
                <div>
                  <div className="flex justify-between text-[14px] mb-2">
                    <span className="text-charcoal font-medium">Success Rate</span>
                    <span className="text-golden font-semibold">100%</span>
                  </div>
                  <div className="h-3.5 bg-[#f2f3f6] rounded-full overflow-hidden">
                    <div className="h-full bg-golden rounded-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[14px] mb-2">
                    <span className="text-charcoal font-medium">Client Retention</span>
                    <span className="text-golden font-semibold">100%</span>
                  </div>
                  <div className="h-3.5 bg-[#f2f3f6] rounded-full overflow-hidden">
                    <div className="h-full bg-golden rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
