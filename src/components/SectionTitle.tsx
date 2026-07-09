type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      <p className="sec-subtitle">{eyebrow}</p>
      <h2 className="sec-title mt-2">{title}</h2>
      {description && (
        <p className="mt-4 text-[15px] leading-[30px] text-[#6f7174]">{description}</p>
      )}
    </div>
  );
}
