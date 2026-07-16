import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/data/siteData';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.contact-info-card', { opacity: 0, y: 30, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.contact-info-grid', start: 'top 80%' }});
      gsap.from('.contact-form', { opacity: 0, x: 40, duration: 0.8,
        scrollTrigger: { trigger: '.contact-form', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const inputClass = 'w-full px-5 py-4 bg-[#f4f5f8] border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden';

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        description="Tell us what you need (items, quantities, locations, and timeline). We’ll respond with pricing, lead times, and delivery options."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="contact-info-grid space-y-4">
                {[
                  // { icon: MapPin, label: 'Address', value: companyInfo.address },
                  // { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="contact-info-card flex items-start gap-4 p-5 bg-[#f8f6f1] border border-[#e1e2e7]">
                    <div className="w-12 h-12 bg-golden/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">{label}</h3>
                      {href ? (
                        <a href={href} className="text-[14px] text-[#6f7174] hover:text-golden transition-colors">{value}</a>
                      ) : (
                        <p className="text-[14px] text-[#6f7174]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="contact-info-card flex items-start gap-4 p-5 bg-[#f8f6f1] border border-[#e1e2e7]">
                  <div className="w-12 h-12 bg-golden/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-golden" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Business Hours</h3>
                    <div className="text-[14px] text-[#6f7174] space-y-1">
                      <p>{companyInfo.hours.weekday}</p>
                      <p>{companyInfo.hours.saturday}</p>
                      <p>{companyInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="contact-form bg-[#f8f6f1] p-8 sm:p-10 border border-[#e1e2e7]">
                <h2 className="text-2xl font-semibold text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-[#6f7174] mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <CheckCircle className="w-12 h-12 text-golden mb-4" />
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-[#6f7174] text-center">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="text" required placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                      <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="email" required placeholder="Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                      <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                    </div>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                      <option value="">Select a service</option>
                      <option value="office-institutional">General Office & Institutional Supplies</option>
                      <option value="motor-vehicle">Motor Vehicle Accessories & Spares</option>
                      <option value="specialised-contracts">Specialised Supply Contracts</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea required rows={5} placeholder="Message *" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                    <button type="submit" className="btn-theme w-full justify-center">
                      <span className="relative z-10 flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
