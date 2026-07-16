import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Send, CheckCircle, Linkedin, Twitter, Facebook,
  ShieldCheck, Zap, Globe2, Clock3,
} from 'lucide-react';
import { companyInfo } from '@/data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const PROMISES = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    detail: 'Every product we source is vetted against international standards before it reaches your hands.',
  },
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    detail: 'We move fast - most quotes are returned within 24 hours so you can keep your projects on schedule.',
  },
  {
    icon: Globe2,
    title: 'Africa-Wide Network',
    detail: "Deep supplier relationships across East Africa let us source what others can't - at prices that compete globally.",
  },
  {
    icon: Clock3,
    title: 'Always Available',
    detail: '24/7 support means your urgent procurement needs never wait until Monday morning.',
  },
];

const ROTATING_WORDS = ['faster.', 'smarter.', 'reliably.', 'at scale.'];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        color: '#801525',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      {ROTATING_WORDS[index]}
    </span>
  );
}

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
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: '.cta-panel', start: 'top 85%' },
      });

      gsap.from('.promise-card', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.promises-grid',
          start: 'top 95%',
          once: true,
        },
      });
    }, sectionRef);

    // Fallback: if ScrollTrigger never plays, force cards visible
    const fallback = window.setTimeout(() => {
      sectionRef.current
        ?.querySelectorAll<HTMLElement>('.promise-card')
        .forEach((el) => {
          if (getComputedStyle(el).opacity === '0') {
            gsap.set(el, { opacity: 1, y: 0, clearProps: 'opacity,transform' });
          }
        });
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch cta-panel shadow-[0_10px_60px_rgba(0,0,0,0.08)]">

          {/* ── Form side ── */}
          <div className="bg-[#f8f6f1] p-8 sm:p-12 lg:p-14">
            <SectionTitle
              align="left"
              eyebrow="Get In Touch"
              title="Request a quote"
              description={`Tell ${companyInfo.shortName} what you need (items, quantities, and timeline) and we'll come back with pricing, lead times, and delivery options.`}
              className="mb-8"
            />

            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
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
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-primary"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-primary resize-none"
                />
                <button type="submit" className="btn-theme w-full justify-center">
                  <span className="relative z-10 flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* ── Why Us panel ── */}
          <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col border-t lg:border-t-0 lg:border-l border-[#e8ecf1] relative">

            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #111111 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="flex items-center gap-3 shrink-0 relative z-10">
              {[
                { href: companyInfo.social.facebook, Icon: Facebook, label: 'Facebook' },
                { href: companyInfo.social.twitter, Icon: Twitter, label: 'Twitter' },
                { href: companyInfo.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#e1e2e7] flex items-center justify-center text-[#8a8b90] hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}

            </div>

            <div className="mt-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6f7174] mb-3">Why choose us</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                Procurement done{' '}
                <RotatingWord />
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#6f7174] max-w-sm">
                We&apos;re not just a supplier - we&apos;re the partner that shows up, every time.
              </p>
            </div>

            {/* Promise cards — 2×2 grid with fade-in */}
            <div className="promises-grid mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {PROMISES.map(({ icon: Icon, title, detail }) => (
                <article
                  key={title}
                  className="promise-card flex flex-col gap-3 p-4 sm:p-5 rounded-xl border border-[#e1e2e7] bg-[#f8f6f1] hover:bg-white hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-charcoal leading-snug">{title}</h4>
                    <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-[#6f7174]">
                      {detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#e8ecf1] shrink-0 relative z-10">
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-[13px] font-medium text-[#6f7174] hover:text-primary transition-colors"
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
