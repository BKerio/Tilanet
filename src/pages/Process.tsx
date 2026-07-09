import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

interface ProcessStep {
  step: string;
  shortTitle: string;
  title: string;
  description: string;
  details: string[];
  /** Optional sub-sections (e.g. key documents, notes, score breakdowns) */
  callouts?: { label: string; items: string[] }[];
  flow?: string[];    // vertical arrow-flow list (step 9 delivery process)
  table?: { label: string; value: string }[]; // score table (step 11)
  matching?: {        // 3-way matching display (step 10)
    parts: string[];
    result: string;
  };
}

const supplierProcessSteps: ProcessStep[] = [
  {
    step: '01',
    shortTitle: 'Identification & Sourcing',
    title: 'Supplier Identification & Sourcing',
    description:
      'Locating the right supplier starts with a thorough understanding of the customer\'s exact requirements — then executing a structured search across local and international markets.',
    details: [
      'Identify customer requirements',
      'Search local and international suppliers',
      'Evaluate supplier capabilities',
      'Compare pricing and product quality',
      'Verify supplier legitimacy',
    ],
  },
  {
    step: '02',
    shortTitle: 'Registration & Verification',
    title: 'Supplier Registration & Verification',
    description:
      'Every supplier must pass rigorous compliance checks before engagement. We collect, verify, and archive all mandatory business and statutory documentation.',
    details: [
      'Collect supplier / company details',
      'Verify business registration',
      'Check tax compliance (KRA)',
      'Verify certifications and licenses',
      'Conduct full supplier due diligence',
    ],
    callouts: [
      {
        label: 'Key Documents Required',
        items: [
          'Certificate of Incorporation / Registration',
          'KRA PIN Certificate',
          'Tax Compliance Certificate',
          'Business permits',
          'Product certifications',
        ],
      },
    ],
  },
  {
    step: '03',
    shortTitle: 'Request for Quotation',
    title: 'Request for Quotation (RFQ)',
    description:
      'A formal, specification-driven RFQ process ensures accurate and comparable responses from all prospective suppliers, enabling objective decision-making.',
    details: [
      'Prepare product / service specifications',
      'Send quotation requests to suppliers',
      'Receive and collate supplier quotations',
      'Compare pricing, quality, and delivery timelines',
      'Negotiate terms and conditions',
    ],
  },
  {
    step: '04',
    shortTitle: 'Evaluation & Selection',
    title: 'Supplier Evaluation & Selection',
    description:
      'A multi-criteria evaluation framework ensures the selected supplier delivers maximum value while meeting all compliance and operational requirements.',
    details: [
      'Product quality assessment',
      'Pricing competitiveness review',
      'Delivery capacity and lead times',
      'Previous experience and references',
      'Warranty and after-sales support',
      'Compliance requirements',
      'Payment terms alignment',
    ],
  },
  {
    step: '05',
    shortTitle: 'Purchase Order Creation',
    title: 'Purchase Order Creation',
    description:
      'Following supplier approval, a formal Purchase Order is raised with all commercial terms clearly defined and approved through the required authorization chain.',
    details: [
      'Create Purchase Order (PO)',
      'Confirm quantities and specifications',
      'Agree on unit pricing',
      'Define delivery schedule',
      'Define payment terms',
      'Obtain all required approvals',
    ],
  },
  {
    step: '06',
    shortTitle: 'Contract Management',
    title: 'Contract & Agreement Management',
    description:
      'Binding agreements protect both parties throughout the engagement. All key commercial, operational, and confidentiality terms are formalized at this stage.',
    details: [
      'Supplier agreements',
      'Service-Level Agreements (SLAs)',
      'Warranty terms',
      'Delivery conditions',
      'Payment schedules',
      'Confidentiality agreements',
    ],
  },
  {
    step: '07',
    shortTitle: 'Import & Logistics',
    title: 'Import & Logistics Management',
    description:
      'For internationally-sourced goods, we coordinate end-to-end logistics — from freight arrangements and shipping documentation through to customs clearance and last-mile delivery.',
    details: [
      'Supplier coordinates shipment',
      'Freight arrangement and booking',
      'Shipping documentation preparation',
      'Customs clearance handling',
      'Import duties and tax management',
      'Port handling and release',
      'Local transportation to site',
    ],
    callouts: [
      {
        label: 'Common Kenyan Entry Points',
        items: [
          'Port of Mombasa',
          'Jomo Kenyatta International Airport',
          'Inland Container Depots (ICDs)',
        ],
      },
    ],
  },
  {
    step: '08',
    shortTitle: 'Quality Inspection',
    title: 'Quality Inspection & Verification',
    description:
      'No goods are accepted without a formal inspection process. Every delivery is checked against the purchase order specifications before acceptance.',
    details: [
      'Product inspection against specifications',
      'Quantity verification',
      'Specification and configuration checks',
      'Certification verification',
      'Damage assessment and reporting',
    ],
  },
  {
    step: '09',
    shortTitle: 'Delivery & Receiving',
    title: 'Delivery & Receiving',
    description:
      'A structured goods receiving process ensures every delivery is correctly documented, inspected, and recorded before being accepted into inventory or forwarded to the customer site.',
    details: [
      'Delivery confirmation and scheduling',
      'Goods Received Note (GRN) generation',
      'Inventory system update',
      'Delivery documentation filing',
    ],
    flow: ['Supplier', 'Transport', 'Warehouse / Customer Site', 'Goods Receiving', 'Inspection', 'Acceptance'],
  },
  {
    step: '10',
    shortTitle: 'Invoice & Payment',
    title: 'Invoice & Payment Processing',
    description:
      'Payment is only released after a three-way matching process validates the supplier invoice against both the original Purchase Order and the Goods Received Note.',
    details: [
      'Supplier submits invoice',
      'Invoice format and content verification',
      'Three-way matching validation',
      'Payment approval workflow',
    ],
    matching: {
      parts: ['Purchase Order', 'Goods Received Note', 'Supplier Invoice'],
      result: 'Payment Approval',
    },
    callouts: [
      {
        label: 'Accepted Payment Methods',
        items: [
          'Bank transfer',
          'M-Pesa Business payments',
          'Letters of credit',
          'Trade finance instruments',
        ],
      },
    ],
  },
  {
    step: '11',
    shortTitle: 'Performance Management',
    title: 'Supplier Performance Management',
    description:
      'Continuous supplier monitoring using a structured scorecard helps maintain high standards and informs future procurement decisions.',
    details: [
      'Delivery performance tracking',
      'Product quality audits',
      'Pricing consistency reviews',
      'Response time benchmarking',
      'Compliance checks',
      'Customer satisfaction measurement',
    ],
    table: [
      { label: 'Quality', value: '95%' },
      { label: 'Delivery', value: '98%' },
      { label: 'Pricing', value: '90%' },
      { label: 'Support', value: '96%' },
      { label: 'Overall', value: '95%' },
    ],
  },
  {
    step: '12',
    shortTitle: 'After-Sales Support',
    title: 'After-Sales Support',
    description:
      'Our relationship with suppliers extends beyond delivery. We actively manage warranties, coordinate technical support, and facilitate any issue resolution on behalf of our customers.',
    details: [
      'Warranty management and claims',
      'Technical support coordination',
      'Spare parts supply',
      'Maintenance services',
      'Supplier issue resolution',
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FlowDiagram({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-col items-start gap-0">
      {items.map((item, i) => (
        <div key={item} className="flex flex-col items-start">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#1a1b1f]/25 bg-[#1a1b1f]/5 text-[13px] font-semibold text-[#1a1b1f]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1b1f] shrink-0" />
            {item}
          </div>
          {i < items.length - 1 && (
            <div className="ml-[22px] w-px h-5 bg-[#1a1b1f]/20" />
          )}
        </div>
      ))}
    </div>
  );
}

function ThreeWayMatch({ parts, result }: { parts: string[]; result: string }) {
  return (
    <div className="mt-8 space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {parts.map((p) => (
          <div
            key={p}
            className="rounded-xl border border-black/10 bg-white/70 px-4 py-4 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-[#1a1b1f]/70"
          >
            {p}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-black/10" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#1a1b1f]/40">equals</span>
        <div className="flex-1 h-px bg-black/10" />
      </div>
      <div className="rounded-xl bg-[#1a1b1f] px-6 py-4 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(214,76,18,0.28)]">
        {result}
      </div>
    </div>
  );
}

function ScoreTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-8 space-y-3">
      {rows.map((row) => {
        const pct = parseInt(row.value, 10);
        const isOverall = row.label === 'Overall';
        return (
          <div key={row.label} className={`flex items-center gap-4 ${isOverall ? 'pt-3 border-t border-black/10' : ''}`}>
            <span className={`w-24 shrink-0 text-[13px] font-semibold ${isOverall ? 'text-[#1a1b1f]' : 'text-[#1a1b1f]/65'}`}>
              {row.label}
            </span>
            <div className="flex-1 h-2 rounded-full bg-black/8 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${isOverall ? 'bg-[#1a1b1f]' : 'bg-[#1a1b1f]/55'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className={`w-10 text-right text-[13px] font-bold ${isOverall ? 'text-[#1a1b1f]' : 'text-[#1a1b1f]/70'}`}>
              {row.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Step content block (no image) ───────────────────────────────────────────

function StepContent({ item, dimmed = false }: { item: ProcessStep; dimmed?: boolean }) {
  return (
    <div className={dimmed ? 'opacity-30 transition-opacity duration-500' : 'hero-content-enter'}>
      {/* Step number + title */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-display text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1b1f]/20 select-none">
          {item.step}
        </span>
        <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#1a1b1f]">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[16px] leading-[1.75] text-[#1a1b1f]/65 mb-8">
        {item.description}
      </p>

      {/* Detail list */}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {item.details.map((detail) => (
          <li
            key={detail}
            className="border-t border-black/8 pt-4 text-[14px] font-medium text-[#1a1b1f]/70 flex items-start gap-2.5"
          >
            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#1a1b1f] shrink-0" />
            {detail}
          </li>
        ))}
      </ul>

      {/* Flow diagram */}
      {item.flow && <FlowDiagram items={item.flow} />}

      {/* Three-way matching */}
      {item.matching && <ThreeWayMatch parts={item.matching.parts} result={item.matching.result} />}

      {/* Score table */}
      {item.table && <ScoreTable rows={item.table} />}

      {/* Callout boxes */}
      {item.callouts?.map((callout) => (
        <div key={callout.label} className="mt-8 rounded-2xl border border-black/8 bg-white/60 p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1b1f]/40 mb-4">
            {callout.label}
          </p>
          <ul className="space-y-2">
            {callout.items.map((item) => (
              <li key={item} className="text-[14px] font-medium text-[#1a1b1f]/75 flex items-start gap-2.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#1a1b1f]/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  // IntersectionObserver — update active step as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(index); },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // GSAP reveal animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const addToRevealRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  // ── Step nav (sticky right column) ────────────────────────────
  const stepNav = (
    <nav aria-label="Supplier process steps">
      <ul>
        {supplierProcessSteps.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={item.step} className="border-t border-black/10">
              <button
                type="button"
                onClick={() => goToStep(index)}
                className={`group flex w-full items-baseline gap-4 py-5 text-left transition-opacity lg:py-6 ${
                  isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                }`}
              >
                <span
                  className={`font-display text-2xl font-medium tracking-tight sm:text-3xl ${
                    isActive ? 'text-[#1a1b1f]' : 'text-[#1a1b1f]'
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`text-[13px] font-semibold uppercase tracking-[0.18em] leading-snug ${
                    isActive ? 'text-[#1a1b1f]' : 'text-[#1a1b1f]'
                  }`}
                >
                  {item.shortTitle}
                </span>
              </button>
            </li>
          );
        })}
        <li className="border-t border-black/10" />
      </ul>
    </nav>
  );

  return (
    <div>
      <PageHero
        eyebrow="Our Process"
        title="How We Source & Deliver"
        description="A transparent, step-by-step view of how Tilanet identifies, procures, and delivers products and services to organizations across Africa."
      />

      {/* ── Main split-column scroll section ── */}
      <section className="editorial-section bg-figure-light text-figure-ink">
        <div className="site-container">

          {/* Section header */}
          <div className="mb-16">
            <p className="eyebrow text-figure-muted mb-6">Procurement workflow</p>
            <h2 className="display-md">
              Supplier Processes
              <br className="hidden sm:block" />
              {' '}in Kenya
            </h2>
          </div>

          {/* Two-column layout — mirrors ServicesGrid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            {/* Left — scrollable step content blocks */}
            <div className="lg:col-span-7 space-y-24 lg:space-y-32">
              {supplierProcessSteps.map((item, index) => (
                <div
                  key={item.step}
                  ref={(el) => { sectionRefs.current[index] = el; }}
                  className="scroll-mt-32"
                >
                  <div ref={addToRevealRefs}>
                    <StepContent item={item} dimmed={index !== activeIndex} />
                  </div>
                </div>
              ))}

              <Link to="/contact" className="text-link inline-flex text-figure-ink mt-4">
                Talk to our procurement team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right — sticky step navigator */}
            <div className="lg:col-span-5 lg:order-last">
              <div className="lg:sticky lg:top-28">{stepNav}</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
