/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Search } from "lucide-react";
import { companyInfo, navLinks } from "@/data/siteData";
import logoImg from "@/assets/logo.png";
import KenyanFlag from "@/assets/kenya.webp";
import { SearchModal } from "@/components/SearchModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastScrollYRef.current && y > 120) {
        if (!isOpen) setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollYRef.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  // Transparent ONLY on home page when at top — same as OneTrack style-1 two
  const transparent = isHome && !scrolled;

  const mainLinks = navLinks.filter((l) => l.label !== "Contact Us");

  return (
    <>
      {/* ═══════════════════════════════════════
          FIXED HEADER  (OneTrack header.style-1.two)
      ════════════════════════════════════════ */}
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background: transparent ? "transparent" : "#ffffff",
          boxShadow: transparent ? "none" : "0 2px 24px rgba(0,0,0,0.10)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* ── Topbar (always visible, adapts color) ── */}
        <div
          className="hidden lg:block border-b transition-colors duration-500"
          style={{
            borderColor: transparent ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.07)",
            background: transparent ? "transparent" : "#f8f8f8",
          }}
        >
          <div className="container-custom flex items-center justify-between h-[44px] text-[13px]">
            {/* Left: location + email */}
            <div className="flex items-center gap-6" style={{ color: "#555" }}>
              <span className="flex items-center gap-2">
                <img
                  src={KenyanFlag}
                  alt="Kenya flag"
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-black/10 shrink-0"
                />
                Kenya
              </span>
              
            </div>
            {/* Right: phone */}
            <div className="flex items-center gap-4" style={{ color: "#555" }}>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* ── Main nav row ── */}
        <div className="container-custom">
          <div
            className="flex items-center justify-between transition-all duration-300"
            style={{ height: scrolled ? "80px" : "120px" }}
          >
            {/* Logo */}
            <Link to="/" aria-label="Tilanet Home" className="shrink-0 flex items-center">
              <img
                src={logoImg}
                alt="Tilanet"
                draggable={false}
                className="w-auto object-contain transition-all duration-500"
                style={{
                  height: scrolled ? "68px" : "104px",
                  filter: "none",
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[15px] font-bold uppercase tracking-wider transition-colors duration-300 hover:text-primary"
                  style={{ color: isActive(link.href) ? "var(--color-primary, #801525)" : "#111111" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="hidden sm:flex p-2 hover:text-primary transition-colors"
                style={{ color: "#111111" }}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Get a Quote CTA — solid orange, square, no radius */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#111111]"
                style={{ height: "48px", padding: "0 1.75rem", background: "var(--color-primary, #801525)", fontSize: "13px" }}
              >
                Get a Quote
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83333 4.16667V0H4.16667V4.16667H0V5.83333H4.16667V10H5.83333V5.83333H10V4.16667H5.83333Z" />
                </svg>
              </Link>

              {/* Mobile burger */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 transition-colors"
                style={{ color: "#111111" }}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for non-home pages (home page hero is under the transparent nav) */}
      {!isHome && <div style={{ height: "132px" }} aria-hidden="true" />}

      {/* ═══════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#111111] transition-all duration-300"
        style={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? "visible" : "hidden", pointerEvents: isOpen ? "auto" : "none" }}
        aria-hidden={!isOpen}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <img src={logoImg} alt="Tilanet" className="h-12 w-auto object-contain brightness-0 invert" draggable={false} />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col items-center justify-center px-8 pb-16 -mt-4">
          <ul className="flex flex-col items-center gap-8 w-full max-w-xs">
            {mainLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[16px] uppercase tracking-[0.2em] font-bold transition-colors duration-200"
                  style={{ color: isActive(link.href) ? "var(--color-primary, #801525)" : "rgba(255,255,255,0.7)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-12 inline-flex items-center justify-center gap-3 text-white font-bold uppercase tracking-widest transition-colors"
            style={{ height: "54px", padding: "0 2.5rem", background: "var(--color-primary, #801525)", fontSize: "13px" }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile footer */}
        <div className="px-6 pb-8 pt-4 border-t border-white/10 flex flex-col items-center gap-3 text-[13px] text-white/50">
          <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-primary" /> {companyInfo.email}
          </a>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
