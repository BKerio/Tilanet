import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SLIDE_DURATION = 8000
const STAT_REFRESH_INTERVAL = 10000

type HeroSlide = {
  eyebrow: string
  title: string
  description: string
  src: string
  alt: string
  statIndex: number
}

const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Global Supply Network",
    title: "The supplier you can always count on.",
    description: "We are dynamic, customer-centric general suppliers dedicated to delivering efficient and timely procurement for businesses, parastatals, and government institutions worldwide.",
    src: "/hero-mombasa-containers.jpg",
    alt: "Shipping containers at Mombasa port, Kenya",
    statIndex: 0,
  },
  {
    eyebrow: "Procurement Optimization",
    title: "Right products. Right price. On time.",
    description: "We treat every order as a commitment, not just a transaction. Share your requirements and we will source, price, and deliver - reliably, consistently, and at scale.",
    src: "/hero-container-yard.jpg",
    alt: "Aerial view of shipping container yard",
    statIndex: 1,
  },
  {
    eyebrow: "Public-Private Frameworks",
    title: "Tailored contracts & bulk agreements.",
    description: "For parastatals, private companies, and government institutions, Tila-Net offers bulk and framework supply agreements with dependable delivery and rigorous quality control.",
    src: "/hero-warehouse-boxes.jpg",
    alt: "Bulk supply stored in warehouse",
    statIndex: 2,
  },
]

const heroStats = [
  { value: 30, suffix: '+', label: 'Organizations supplied', detail: 'Serving top-tier institutions across Africa with reliable supply chains.' },
  { value: 100, suffix: '%', label: 'Repeat customers', detail: 'Our commitment to quality ensures long-term partnerships.' },
  { value: 40, suffix: '+', label: 'Successful deliveries', detail: 'Timely and accurate execution of bulk procurement orders.' },
  { value: 24, suffix: '/7', label: 'Support availability', detail: 'Always online to handle urgent supply requests.' },
]

const marqueeItems = [
  'General Supplies',
  'Procurement',
  'Logistics',
  'Framework Agreements',
  'Bulk Sourcing',
  'Tila-Net Enterprises',
  'Quality Assured',
  'Timely Delivery',
]

function useCountUp(target: number, trigger: number, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    setCount(0)
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, trigger, duration])

  return count
}

function StatCard({
  stat,
  isHighlighted,
  refreshKey,
  onSelect,
}: {
  stat: (typeof heroStats)[number]
  isHighlighted: boolean
  refreshKey: number
  onSelect: () => void
}) {
  const count = useCountUp(stat.value, isHighlighted ? refreshKey : 0)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative w-full border p-4 text-left transition-all duration-300 ${
        isHighlighted
          ? 'border-slate-900/25 bg-slate-50'
          : 'border-black/10 bg-transparent hover:border-black/20 hover:bg-slate-50/50'
      }`}
    >
      <div className="text-2xl font-bold tracking-tight text-slate-900">
        {isHighlighted ? count : stat.value}
        {stat.suffix}
      </div>
      <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
        {stat.label}
      </p>
      <p
        className={`mt-2 text-[13px] leading-relaxed text-slate-500 transition-all duration-300 ${
          isHighlighted
            ? 'max-h-20 opacity-100'
            : 'max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100'
        }`}
      >
        {stat.detail}
      </p>
    </button>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeStat, setActiveStat] = useState<number | null>(null)
  const [statCycleIndex, setStatCycleIndex] = useState(0)
  const [statRefreshKey, setStatRefreshKey] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = heroSlides[activeIndex]
  const highlightedStat = activeStat ?? statCycleIndex

  useEffect(() => {
    if (paused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
      setActiveStat(null)
    }, SLIDE_DURATION)

    return () => window.clearInterval(timer)
  }, [paused, activeIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatCycleIndex((current) => (current + 1) % heroStats.length)
      setStatRefreshKey((key) => key + 1)
      setActiveStat(null)
    }, STAT_REFRESH_INTERVAL)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
    setActiveStat(null)
  }

  const selectStat = (index: number) => {
    setActiveStat(index)
    setStatCycleIndex(index)
    setStatRefreshKey((key) => key + 1)
    const relatedSlide = heroSlides.findIndex((s) => s.statIndex === index)
    if (relatedSlide >= 0) setActiveIndex(relatedSlide)
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#fcfdfd] text-slate-900 flex flex-col" style={{ paddingTop: 0 }}>
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Spacer: mobile = 120px nav, desktop = 44px topbar + 120px nav = 164px */}
        <div className="h-[120px] lg:h-[164px] shrink-0" aria-hidden="true" />
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:pb-16 w-full">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* ── Left content ── */}
            <div className="flex flex-col justify-center">
              
              {/* Stats Section (Replaces Geo Locations) */}
              <div className="mb-12">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">By the numbers</p>
                <div className="grid grid-cols-2 gap-4">
                  {heroStats.map((stat, index) => (
                    <StatCard
                      key={stat.label}
                      stat={stat}
                      isHighlighted={highlightedStat === index}
                      refreshKey={statRefreshKey}
                      onSelect={() => selectStat(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic copy */}
              <div key={activeIndex} className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{slide.eyebrow}</span>
                  <span className="h-px w-10 bg-slate-200" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>

                <h1 className="text-slate-900 font-bold tracking-tight text-balance leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}>
                  {slide.title}
                </h1>

                <p className="mt-5 max-w-md text-[16px] sm:text-[17px] font-medium leading-relaxed text-slate-500">
                  {slide.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-6 pb-10 lg:pb-0">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 bg-slate-900 px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:bg-primary hover:-translate-y-0.5"
                >
                  Explore Capabilities
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── Right content: Main image ── */}
            <div
              className="relative flex flex-col justify-center pb-10 lg:pb-0 lg:-mt-16"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-square overflow-hidden bg-slate-100 rounded-none sm:rounded-lg">
                {heroSlides.map((s, index) => (
                  <img
                    draggable={false}
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pointer-events-none">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">{slide.eyebrow}</p>
                  <p className="mt-2 text-lg font-medium text-white">{slide.alt}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    className="flex h-12 w-12 items-center justify-center border border-slate-200 transition-colors hover:border-slate-400 text-slate-600 hover:text-slate-900"
                    aria-label="Previous slide"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    className="flex h-12 w-12 items-center justify-center border border-slate-200 transition-colors hover:border-slate-400 text-slate-600 hover:text-slate-900"
                    aria-label="Next slide"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Marquee ── */}
        <div className="overflow-hidden border-t border-slate-200 py-5 mt-auto bg-white">
          <div className="flex w-max gap-12 animate-[marquee_40s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.35em] text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
