import { Star, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/siteData';
import { clientageLogos } from '@/data/clientLogos';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';

function GoldBar() {
  return <div className="h-2.5 sm:h-3 w-full bg-golden" aria-hidden="true" />;
}

export default function Clients() {
  return (
    <div>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by Leading Organizations"
        description="We are proud to partner with respected organizations across Africa."
      />

      {/* Clientage — matches business profile layout */}
      <section className="bg-white">
        <GoldBar />

        <div className="container-custom px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[34px] font-bold text-primary tracking-tight mb-12 sm:mb-16 lg:mb-20">
            Some of Our Clientage
          </h2>

          <ul className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 lg:gap-x-16 lg:gap-y-14 max-w-6xl mx-auto list-none p-0 m-0">
            {clientageLogos.map((client) => (
              <li
                key={client.name}
                className="flex flex-col items-center justify-start w-[140px] sm:w-[160px] lg:w-[180px]"
              >
                <div className="flex items-center justify-center w-full min-h-[72px] sm:min-h-[80px]">
                  <img
                    src={client.logo}
                    draggable="false"
                    alt={client.name}
                    title={client.name}
                    className="max-h-14 sm:max-h-16 lg:max-h-[72px] w-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-[12px] sm:text-[13px] font-semibold leading-snug text-charcoal/80">
                  {client.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <GoldBar />
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#f8f6f1]">
        <div className="container-custom">
          <p className="sec-subtitle text-center mb-2">Testimonials</p>
          <h3 className="sec-title text-center mb-12">What Our Clients Say</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="bg-charcoal p-8 relative"
              >
                <Quote className="w-7 h-7 text-golden mb-4 opacity-70" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>
                <blockquote className="text-white/85 text-[15px] leading-[28px] mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-[11px] uppercase tracking-[0.1em] text-golden mt-1">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal text-center">
        <div className="container-custom">
          <p className="text-[12px] uppercase tracking-[0.15em] text-golden mb-3">Join Our Client Portfolio</p>
          <h3 className="text-2xl font-semibold text-white mb-6">Ready to streamline your supply?</h3>
          <a href="/contact" className="btn-theme inline-flex">
            <span className="relative z-10 flex items-center gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
