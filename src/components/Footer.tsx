import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-charcoal/10 text-charcoal overflow-x-clip">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          {/* Left Column - Branding and Newsletter */}
          <div className="flex flex-col min-w-0">
            <Link to="/" className="inline-block mb-6 select-none max-w-full" aria-label="Tilanet Home">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-[0.04em] sm:tracking-[0.06em] md:tracking-[0.1em] text-charcoal leading-[1.25] uppercase break-words max-w-full">
                {companyInfo.name}
              </h2>
            </Link>

            <div className="max-w-md w-full">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-charcoal mb-2">
                Keep up with us
              </h3>
              <p className="text-[13px] text-charcoal/60 mb-6 leading-relaxed">
                Get news, photos, events, and business updates.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row sm:items-center bg-white rounded-2xl sm:rounded-full p-1 border border-charcoal/10 max-w-sm mb-8 focus-within:ring-2 focus-within:ring-golden/40 transition-shadow"
              >
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="flex-1 bg-transparent px-4 py-2.5 text-[13px] text-charcoal outline-none placeholder:text-charcoal/40 min-w-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-charcoal text-white hover:bg-golden hover:text-charcoal transition-colors px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap m-1 sm:m-0"
                >
                  Sign Up
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-golden hover:border-golden transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-golden hover:border-golden transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-golden hover:border-golden transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Us CTA */}
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-golden transition-colors border-b border-charcoal hover:border-golden pb-1"
                >
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Figure-style Menu Links */}
          <div className="w-full min-w-0">
            <ul className="border-b border-charcoal/10">
              {[
                { num: '01', label: 'About Us', href: '/about' },
                { num: '02', label: 'Services', href: '/services' },
                { num: '03', label: 'Waste Management', href: '/waste-management' },
                { num: '04', label: 'Industries', href: '/industries' },
                { num: '05', label: 'Process', href: '/process' },
                { num: '06', label: 'Clients', href: '/clients' },
                { num: '07', label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href} className="border-t border-charcoal/10">
                  <Link
                    to={link.href}
                    className="flex items-center py-5 group transition-colors hover:text-golden"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-charcoal/40 mr-6 group-hover:text-golden/60 transition-colors shrink-0">
                      {link.num}
                    </span>
                    <span className="text-xl md:text-2xl font-bold tracking-wider text-charcoal uppercase group-hover:translate-x-2 transition-transform duration-300 break-words">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-charcoal/10 pt-8 mt-16 text-[11px] uppercase tracking-wider text-charcoal/50">
          <p className="text-center md:text-left break-words max-w-full">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="#" className="hover:text-golden transition-colors">Terms & Conditions</Link>
            <Link to="#" className="hover:text-golden transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-golden transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
