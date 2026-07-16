import { clientageLogos } from '@/data/clientLogos';

function GoldBar() {
  return <div className="h-2.5 sm:h-3 w-full bg-golden" aria-hidden="true" />;
}

export default function ClientLogos() {
  return (
    <section className="bg-white">
      <GoldBar />

      <div className="container-custom px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[34px] font-bold text-primary tracking-tight mb-12 sm:mb-16 lg:mb-20">
          Our Clients
        </h2>

        <ul className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 lg:gap-x-14 lg:gap-y-14 max-w-6xl mx-auto list-none p-0 m-0">
          {clientageLogos.map((client) => (
            <li
              key={client.name}
              className="flex flex-col items-center justify-start w-[130px] sm:w-[150px] lg:w-[170px]"
            >
              <div className="flex items-center justify-center w-full min-h-[64px] sm:min-h-[72px]">
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  draggable="false"
                  className="max-h-12 sm:max-h-14 lg:max-h-16 w-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-[12px] sm:text-[13px] font-semibold leading-snug text-charcoal/80">
                {client.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <GoldBar />
    </section>
  );
}
