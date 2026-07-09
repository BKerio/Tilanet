/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Search } from 'lucide-react';
import { companyInfo, navLinks } from '@/data/siteData';
import logoImg from '@/assets/logo.png';
import { SearchModal } from '@/components/SearchModal';

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={companyInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>
      <a
        href={companyInfo.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>
      <a
        href={companyInfo.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Hide-on-scroll-down / show-on-scroll-up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      const lastScrollY = lastScrollYRef.current;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        if (!isOpen) setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const navBg =
    scrolled || !isHome
      ? 'bg-white/95 backdrop-blur-md border-b border-black/8'
      : 'bg-white';

  const desktopNavLinks = navLinks.filter((l) => l.label !== 'Contact Us');
  const mobileNavLinks = navLinks.filter((l) => l.label !== 'Contact Us');

  return (
    <>
      {/* ─── Fixed Header ─── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg} ${
          visible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-[76px] items-center justify-between">

            {/* Logo — raw, bigger, no card wrapper */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Tilanet Home">
              <img
                src={logoImg}
                draggable={false}
                alt="Tilanet Logo"
                className="h-24 sm:h-32 lg:h-36 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav links — uppercase, reference-style */}
            <nav className="hidden lg:flex items-center gap-10">
              {desktopNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[13px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-200 text-[#1a1b1f] ${
                    isActive(link.href) ? 'opacity-100' : 'opacity-55 hover:opacity-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right — Search + "Talk to us" (serif italic) + mobile burger */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#1a1b1f] hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center h-10 px-7 rounded-full bg-primary text-primary-foreground text-[15px] font-normal italic font-serif shadow-[0_8px_24px_rgba(245,130,32,0.30)] hover:bg-primary-dark transition-all duration-200"
              >
                Talk to us
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-[#1a1b1f]"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Spacer so page content clears the fixed navbar ─── */}
      <div className="h-[76px]" aria-hidden="true" />

      {/* ─── Mobile fullscreen dark overlay ─── */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden bg-[#1a1b1f] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">

          {/* Close button row */}
          <div className="flex items-center justify-end px-6 pt-6 pb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-white/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links — centered */}
          <nav className="flex-1 flex flex-col items-center justify-center px-8 pb-12 -mt-6">
            <ul className="flex flex-col items-center gap-7 sm:gap-8 w-full max-w-xs">
              {mobileNavLinks.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-[15px] sm:text-base uppercase tracking-[0.22em] font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-12 sm:mt-14 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-4 text-[13px] sm:text-sm font-bold uppercase tracking-[0.18em] shadow-[0_8px_30px_rgba(245,130,32,0.35)] hover:bg-primary-dark transition-colors duration-300"
            >
              Talk to us
            </Link>
          </nav>

          {/* Mobile footer — contact info + social */}
          <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[12px] text-white/50">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <MapPin className="w-3 h-3 text-primary shrink-0" />
                <span>Upperhill, Nairobi, Kenya</span>
              </div>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
