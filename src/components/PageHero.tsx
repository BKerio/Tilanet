type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-[180px] pb-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/90" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <p className="sec-subtitle text-white/60">{eyebrow}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-[50px] font-semibold text-white leading-[1.35] tracking-tight pb-[0.06em]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-[15px] leading-[30px] text-white/70">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
