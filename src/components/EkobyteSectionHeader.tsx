type EkobyteSectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function EkobyteSectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: EkobyteSectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-14 sm:mb-16 ${className}`}>
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="w-10 sm:w-14 h-px bg-golden" aria-hidden="true" />
        <span className="text-golden text-[13px] sm:text-sm font-semibold uppercase tracking-[0.15em]">
          {eyebrow}
        </span>
        <span className="w-10 sm:w-14 h-px bg-golden" aria-hidden="true" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-charcoal leading-[1.15] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] leading-[30px] text-[#6f7174]">{description}</p>
      )}
    </div>
  );
}
