import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Send, CheckCircle, Linkedin, Twitter, Facebook,
  ShieldCheck, Zap, Globe2, Clock3, ArrowRight
} from 'lucide-react';
import { companyInfo } from '@/data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const PROMISES = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    detail: 'Every product we source is vetted against international standards before it reaches your hands.',
    accent: '#801525',
  },
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    detail: 'We move fast - most quotes are returned within 24 hours so you can keep your projects on schedule.',
    accent: '#801525',
  },
  {
    icon: Globe2,
    title: 'Africa-Wide Network',
    detail: "Deep supplier relationships across East Africa let us source what others can't - at prices that compete globally.",
    accent: '#801525',
  },
  {
    icon: Clock3,
    title: 'Always Available',
    detail: '24/7 support means your urgent procurement needs never wait until Monday morning.',
    accent: '#801525',
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
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: '.cta-panel', start: 'top 85%' },
      });
      gsap.from('.promise-card', {
        opacity: 0, x: 30, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: '.promise-card', start: 'top 88%' },
      });
    }, sectionRef);
    return () => ctx.revert();
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
          <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden">

            {/* Social row */}
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
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Headline */}
            <div className="mt-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Why choose us</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Procurement done{' '}
                <RotatingWord />
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-500 max-w-sm">
                We're not just a supplier - we're the partner that shows up, every time.
              </p>
            </div>

            {/* Promise cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 relative z-10 flex-1">
              {PROMISES.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="promise-card group flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 cursor-default"
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(128,21,37,0.08)' }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-slate-800 leading-snug">{title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-500 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-out">
                      {detail}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Bottom email */}
            <div className="mt-6 pt-5 border-t border-slate-100 shrink-0 relative z-10">
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-[13px] text-slate-400 hover:text-primary transition-colors"
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
