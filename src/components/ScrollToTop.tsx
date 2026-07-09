import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility when scrolled past 150px
      const scrollY = window.scrollY;
      setVisible(scrollY > 150);

      // Calculate scroll progress percentage
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;

      if (totalScrollable > 0) {
        const scrolled = (scrollY / totalScrollable) * 100;
        setProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-[60] w-12 h-12 sm:w-14 sm:h-14
        rounded-full bg-charcoal/95 backdrop-blur-md text-white
        border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        hover:scale-110 hover:border-white/20 active:scale-95
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      {/* Progress Ring SVG */}
      <svg className="absolute w-full h-full transform -rotate-90 select-none pointer-events-none">
        {/* Track circle (semi-transparent grey) */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className="stroke-white/10 fill-none"
          strokeWidth="3"
        />
        {/* Progress circle (bright emerald green) */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className="stroke-[#10b981] fill-none transition-all duration-75"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Inside Up Arrow */}
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors relative z-10" strokeWidth={2.5} />
    </button>
  );
}
