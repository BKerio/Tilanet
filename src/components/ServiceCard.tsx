import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  index: number;
  icon: React.ElementType;
  tagline: string;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  linkLabel?: string;
};



export default function ServiceCard({
  index,
  icon: Icon,
  tagline,
  title,
  description,
  features,
  href = '/contact',
  linkLabel = 'read more',
}: ServiceCardProps) {
  return (
    <article className="group relative bg-white rounded-xl border border-[#e8ecf1] p-7 sm:p-8 shadow-[0_4px_24px_rgba(24,25,28,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(24,25,28,0.1)] hover:border-golden/40 overflow-hidden h-full flex flex-col">
      <span
        className="absolute top-5 right-6 text-5xl sm:text-6xl font-black text-charcoal/[0.04] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative w-[72px] h-[72px] mb-6 shrink-0">
        <div
          className="absolute inset-0 rounded-2xl bg-golden/15 rotate-6 group-hover:rotate-12 transition-transform duration-300"
          aria-hidden="true"
        />
        <div className="relative w-full h-full rounded-2xl bg-[#f8f6f1] border border-[#ece9e0] flex items-center justify-center group-hover:bg-golden transition-colors duration-300">
          <Icon className="w-8 h-8 text-golden group-hover:text-charcoal transition-colors duration-300" strokeWidth={1.75} />
        </div>
      </div>

      <p className="text-golden text-[13px] font-semibold uppercase tracking-wider mb-2">
        {tagline}
      </p>
      <h3 className="text-xl font-bold text-charcoal mb-3 leading-snug group-hover:text-golden transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#6f7174] text-[15px] leading-[26px] mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="mb-6 space-y-2 text-[13px] text-[#6f7174] border-t border-[#e8ecf1] pt-4 flex-1">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-golden shrink-0 mt-2" />
              <span className="leading-tight">{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        to={href}
        className="inline-flex items-center gap-2 text-charcoal font-semibold text-[13px] uppercase tracking-wider group/link hover:text-golden transition-colors mt-auto pt-2"
      >
        {linkLabel}
        <span className="w-8 h-8 rounded-full bg-[#f4f6f9] border border-[#e8ecf1] flex items-center justify-center group-hover/link:bg-golden group-hover/link:border-golden transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </article>
  );
}
