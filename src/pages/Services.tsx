import {
  Package, Car, FileText,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { services, whyChooseUs } from '../data/siteData';
import CTABanner from '../sections/CTABanner';
import PageHero from '@/components/PageHero';
import ThemeButton from '@/components/ThemeButton';
import ServicesGrid from '@/sections/ServicesGrid';

const mainIconMap: Record<string, React.ElementType> = {
  Package,
  Car,
  FileText,
};

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="General Supply Products & Services"
        description="From everyday office essentials to motor vehicle spares and specialised institutional contracts — Tila-Net delivers quality products at fair prices, on time."
      />

      <div className="bg-charcoal text-white py-6 border-y border-white/10 overflow-hidden relative">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-golden shrink-0">
            Tila-Net Core Focus:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium tracking-wide text-white/90">
            <span>Office & Institutional Supplies</span>
            <span className="text-golden select-none">|</span>
            <span>Motor Vehicle Accessories & Spares</span>
            <span className="text-golden select-none">|</span>
            <span>Specialised Supply Contracts</span>
          </div>
        </div>
      </div>

      <ServicesGrid showImages={false} showCta={false} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="sec-subtitle">Why work with us</p>
              <h2 className="sec-title mt-2">
                A general supplier you can count on
              </h2>
              <p className="mt-4 text-[15px] leading-[30px] text-[#6f7174]">
                We combine a wide product range, competitive pricing, and dependable delivery
                so your organisation gets what it needs — without procurement headaches.
              </p>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-[15px] text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-golden shrink-0 mt-0.5" strokeWidth={2} />
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ThemeButton to="/contact" variant="dark">
                  Request a quote <ArrowRight className="w-4 h-4" />
                </ThemeButton>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {services.map((service) => {
                const Icon = mainIconMap[service.icon] || Package;
                return (
                  <div
                    key={service.id}
                    className="p-5 sm:p-6 rounded-xl bg-[#f4f6f9] border border-[#e8ecf1] hover:border-golden/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-golden/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-golden" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-charcoal text-sm sm:text-base leading-snug">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
