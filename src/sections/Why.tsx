import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Sliders, Handshake, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyDynatrix() {
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
      gsap.from('.why-right-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: { trigger: '.why-right-item', start: 'top 85%' },
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

  return (
    <div ref={sectionRef} className="relative">
      {/* Top Gold Border */}
      <div className="w-full h-6 bg-primary" />

      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div className="why-items-container space-y-12">
              <h2 className="why-title text-2xl sm:text-3xl font-bold text-black">
                Why Choose <span className="text-gray-600">TILA-NET ENTERPRISES LIMITED</span>?
              </h2>

              {/* Item 1 */}
              <div className="why-item group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Expertise & Insights in the African Market
                  </h3>
                </div>
                <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                  We have a wealth of expertise and insights in the African market with decades of experience and a deep understanding of industry best practices.
                </p>
              </div>

              {/* Item 2 */}
              <div className="why-item group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Strategic Partnerships
                  </h3>
                </div>
                <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                  We value strategic partnerships and work hard to build strong relationships with our clients, based on trust, collaboration, and a shared commitment to success.
                </p>
              </div>

              {/* Item 3 */}
              <div className="why-item group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Scalability & Flexibility
                  </h3>
                </div>
                <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                  Whether you are a small startup or a large corporation, we have services that can be scaled to fit your needs. We are committed to adapting to your growth, providing you with the support you need to achieve your organizational goals.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12 lg:pt-16 flex flex-col items-stretch lg:items-end">
              {/* Item 4 */}
              <div className="why-right-item group w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-golden flex items-center justify-center text-charcoal shadow-md transition-all duration-300 group-hover:scale-105">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Customized Solutions
                  </h3>
                </div>
                <p className="text-[15px] leading-[26px] text-charcoal/80 text-center max-w-lg md:text-left md:pl-18">
                  We work closely with our clients to understand their business objectives, and develop solutions that help them achieve their objectives.
                </p>
              </div>

              {/* Person Image */}
              <div className="why-person-img relative mt-8 overflow-hidden rounded-3xl border border-[#e1e2e7] shadow-lg max-w-[480px] w-full self-center lg:self-end">
                <img 
                  src="/why-us-woman.png" 
                  draggable="false"
                  alt="Tilanet specialist" 
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Gold Border */}
      <div className="w-full h-6 bg-primary" />
    </div>
  );
}
