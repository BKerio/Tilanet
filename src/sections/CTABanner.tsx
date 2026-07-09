import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';
import { companyInfo } from '@/data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&hl=en&z=16&output=embed`;

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.cta-panel', {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: '.cta-panel', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch cta-panel shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
          {/* Form side */}
          <div className="bg-[#f8f6f1] p-8 sm:p-12 lg:p-14">
            <SectionTitle
              align="left"
              eyebrow="Get In Touch"
              title="Request a quote"
              description={`Tell ${companyInfo.shortName} what you need (items, quantities, locations, and timeline) and we’ll come back with pricing, lead times, and delivery options.`}
              className="mb-8"
            />

            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle className="w-12 h-12 text-golden mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
                <p className="text-[#6f7174]">Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden resize-none"
                />
                <button type="submit" className="btn-theme w-full justify-center">
                  <span className="relative z-10 flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Location + map side */}
          <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col h-full border-t lg:border-t-0 lg:border-l border-[#e8ecf1]">
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#d8dbe0] flex items-center justify-center text-[#8a8b90] hover:text-golden hover:border-golden/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#d8dbe0] flex items-center justify-center text-[#8a8b90] hover:text-golden hover:border-golden/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#d8dbe0] flex items-center justify-center text-[#8a8b90] hover:text-golden hover:border-golden/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-bold text-charcoal shrink-0">Our Location</h3>

            <div className="mt-3 flex-1 relative min-h-[200px] sm:min-h-[240px] rounded-xl border border-[#e1e2e7] bg-white p-2 shadow-[0_4px_24px_rgba(24,25,28,0.06)] overflow-hidden">
              <iframe
                title={`${companyInfo.shortName} office location`}
                src={mapEmbedSrc}
                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-3 shrink-0 flex items-start gap-2.5 text-[14px] leading-relaxed text-[#6f7174]">
              <MapPin className="w-4 h-4 text-golden shrink-0 mt-0.5" strokeWidth={2} />
              <p>{companyInfo.address}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#e8ecf1] shrink-0">
              <p className="text-[11px] uppercase tracking-[0.15em] text-golden mb-2 font-medium">
                Get in touch directly
              </p>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="block text-xl sm:text-2xl font-bold text-charcoal hover:text-golden transition-colors tracking-tight"
              >
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="block mt-1.5 text-[15px] text-[#6f7174] hover:text-golden transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
