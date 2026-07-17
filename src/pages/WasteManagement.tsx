import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap, ArrowDownRight, Database,
  CheckCircle, XCircle, Leaf, Clock, DollarSign,
  Users, Home, Briefcase, Recycle, Map, Factory,
  Cpu,
  Share2,
  TrendingUp,
  Trash2,
  ShieldAlert,
  Wifi
} from "lucide-react";

/* ─────────────────────── DATA ─────────────────────── */

const LC_PRIMARY = "#801525"; // primary
const LC_DARK = "#18191c";    // charcoal
const LC_CREAM = "#F5F5EC";

const lifeCycleSteps = [
  {
    id: 1, phase: "THE STRUGGLE", theme: "dark" as const,
    description: "Overflowing bins, scattered waste, and delayed collection times lead to unhealthy environments.",
    voiceover: "Traditional waste collection is reactive and inefficient.",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
  },
  {
    id: 2, phase: "THE IMPACT", theme: "dark" as const,
    description: "Cities and businesses lose money on unnecessary collection routes and suffer from environmental hazards.",
    voiceover: "Wasted fuel, wasted time, and growing pollution.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
  },
  {
    id: 3, phase: "THE SOLUTION", theme: "primary" as const,
    description: "Transition to Smart Bins with IoT sensors. Real-time fill levels, automated routing, and proactive collection.",
    voiceover: "Then something changed.",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
  },
  {
    id: 4, phase: "THE TRANSFORMATION", theme: "primary" as const,
    description: "Clean streets, optimized fleet routing, and zero overflowing bins.",
    voiceover: "Smart waste management isn't just about cleaning up. It's about efficiency.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
  },
  {
    id: 5, phase: "THE SAVINGS", theme: "primary" as const,
    description: "See the difference in your operational budget.",
    voiceover: "Every optimized route saves fuel. Every month saves more.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
    savings: [
      { icon: Leaf,       label: "LESS EMISSIONS"  },
      { icon: Clock,      label: "MORE TIME"  },
      { icon: DollarSign, label: "LOWER COSTS" },
      { icon: Recycle,    label: "MORE RECYCLING" },
    ],
  },
  {
    id: 6, phase: "THE FUTURE", theme: "primary" as const,
    description: "Sustainable cities, healthier communities, and a circular economy powered by data.",
    voiceover: "Join thousands of municipalities and businesses choosing a smarter way.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop", 
    imageClass: "object-cover",
  },
];

const impactProfiles = [
  { icon: Home,      color: "#801525", persona: "A Neighborhood",  story: "Enjoys consistently clean streets and timely pickups without overflowing bins.",                  metric: "100%",     metricLabel: "elimination of overflow" },
  { icon: Factory,   color: "#801525", persona: "A Factory",       story: "Reduces waste disposal costs and improves compliance with environmental regulations.",          metric: "40%",      metricLabel: "lower disposal cost" },
  { icon: Briefcase, color: "#801525", persona: "A Municipality",  story: "Optimizes collection routes, reducing fuel consumption and wear on the fleet.",                 metric: "35%",      metricLabel: "reduction in fuel" },
  { icon: Users,     color: "#801525", persona: "Citizens",        story: "Experience better air quality and a healthier environment with reduced truck emissions.",       metric: "50%",      metricLabel: "less emissions" },
];

const taglines = [
  "Smart solutions for a cleaner tomorrow",
  "Less waste, more efficiency",
  "Where data meets sustainability",
  "Optimize once, save daily",
  "The future of waste management is here",
];


/* ─────────────────────── LIFE CYCLE INFOGRAPHIC CONSTANTS ─────────────────────── */

const LC_CONT   = 1200;
const LC_HEIGHT = 900;
const LC_CX     = 600;
const LC_CY     = 450;
const LC_RING   = 268;
const LC_NODE   = 180;

const lcPct = (v: number, total: number) => `${(v / total) * 100}%`;

const LC_STEP_ANGLES = [-90, -45, 0, 45, 150, 210];

const lcPolar = (deg: number, r = LC_RING) => {
  const rad = (deg * Math.PI) / 180;
  return { x: LC_CX + r * Math.cos(rad), y: LC_CY + r * Math.sin(rad) };
};

const lcNodeCoords = LC_STEP_ANGLES.map(deg => ({ ...lcPolar(deg), deg }));
const lcEndFrame   = lcPolar(90, LC_RING);

const LC_ARROWS = [
  "M 600 182 A 268 268 0 0 1 706 204",
  "M 790 260 A 268 268 0 0 1 849 350",
  "M 868 450 A 268 268 0 0 1 846 556",
  "M 790 640 A 268 268 0 0 1 694 701",
  "M 600 718 A 268 268 0 0 1 434 661",
  "M 368 584 A 268 268 0 0 1 335 412",
  "M 368 316 A 268 268 0 0 1 500 201"
];

/* ─────────────────────── HOOKS ─────────────────────── */

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref  = useRef<HTMLDivElement>(null!);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return count;
}

/* ─────────────────────── SHARED UI ─────────────────────── */

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: "up"|"left"|"right"; className?: string }> = ({
  children, delay = 0, direction = "up", className = "",
}) => {
  const [ref, inView] = useInView();
  const map = { up: "translateY(28px)", left: "translateX(-28px)", right: "translateX(28px)" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : map[direction],
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const SectionBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-700/10">
    <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-50 pointer-events-none dark:border-gray-700/20" />
    <span className="relative inline-block bg-primary text-white font-bold px-5 py-1.5 rounded-full text-sm shadow-inner">
      {text}
    </span>
  </div>
);

const StatItem: React.FC<{ value: string; label: string; inView: boolean; delay: number }> = ({ value, label, inView, delay }) => (
  <div className="text-center" style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(14px)", transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms` }}>
    <div className="text-3xl md:text-4xl font-black text-white">{value}</div>
    <div className="text-golden-200 text-xs mt-0.5 font-semibold uppercase tracking-widest">{label}</div>
  </div>
);

const CounterSection: React.FC = () => {
  const [ref, inView] = useInView(0.3);
  const c1 = useCountUp(45,    inView);
  const c2 = useCountUp(30,    inView);
  const c3 = useCountUp(50,    inView);
  const c4 = useCountUp(5000,  inView);
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatItem value={`${c1}%`}  label="cost savings"       inView={inView} delay={0}   />
      <StatItem value={`${c2}%`}  label="fewer trucks"       inView={inView} delay={120} />
      <StatItem value={`${c3}%`}  label="less CO2"           inView={inView} delay={240} />
      <StatItem value={`${c4.toLocaleString()}+`} label="smart bins deployed" inView={inView} delay={360} />
    </div>
  );
};

/* ─────────────────────── LIFE CYCLE INFOGRAPHIC ─────────────────────── */

const LifeCycleBrand: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div className={`text-center ${compact ? "px-1" : "px-2"}`}>
    <div className={`relative font-black leading-none text-gray-900 ${compact ? "text-[10px]" : "text-sm sm:text-base"}`}>
      <Recycle
        className={`absolute text-primary ${compact ? "-top-2 left-1/2 -ml-3 h-2.5 w-2.5" : "-top-2.5 left-1/2 -ml-3.5 h-3 w-3"}`}
        aria-hidden
      />
      <span className="uppercase tracking-[0.12em]">Smart Waste</span>
    </div>
    <p className={`mt-0.5 font-black uppercase tracking-[0.2em] text-gray-800 ${compact ? "text-[8px]" : "text-[10px] sm:text-xs"}`}>
      Management
    </p>
    <p className={`mt-2 font-bold leading-snug ${compact ? "text-[7px]" : "text-[9px] sm:text-[10px]"}`}>
      <span style={{ color: LC_PRIMARY }}>Collect Smarter.</span>{" "}
      <span style={{ color: LC_DARK }}>Spend Less.</span>{" "}
      <span style={{ color: LC_PRIMARY }}>Live Better.</span>
    </p>
  </div>
);

const LifeCycleEquation: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div
    className={`mt-2.5 flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 font-extrabold uppercase tracking-wide text-gray-800 ${
      compact ? "text-[6.5px]" : "text-[8px] sm:text-[9px]"
    }`}
  >
    {[
      { icon: Map,        label: "Optimize Routes" },
      { icon: DollarSign, label: "Save Money"      },
      { icon: Leaf,       label: "Cut Emissions"   },
    ].map(({ icon: Icon, label }, i) => (
      <React.Fragment key={label}>
        {i > 0 && <span className="font-bold text-gray-400">+</span>}
        <span className="inline-flex items-center gap-0.5">
          <Icon className={compact ? "h-2 w-2 text-primary" : "h-2.5 w-2.5 text-primary"} />
          {label}
        </span>
      </React.Fragment>
    ))}
    <span className="font-bold text-gray-400">=</span>
    <span className="inline-flex items-center gap-0.5 text-primary">
      <CheckCircle className={compact ? "h-2 w-2" : "h-2.5 w-2.5"} />
      Cleaner City
    </span>
  </div>
);

type LifeCycleStep = (typeof lifeCycleSteps)[number];

const LifeCycleNode: React.FC<{ step: LifeCycleStep; x: number; y: number; deg: number }> = ({ step, x, y, deg }) => {
  const borderColor = step.theme === "dark" ? LC_DARK : LC_PRIMARY;

  const textR = LC_RING + 115; 
  const rad = (deg * Math.PI) / 180;
  const textX = LC_CX + textR * Math.cos(rad);
  const textY = LC_CY + textR * Math.sin(rad);

  let textAnchor = "center";
  let transform = "-50%";
  if (deg > -80 && deg < 80) {
    textAnchor = "left";
    transform = "0";
  } else if (deg > 100 && deg < 260) {
    textAnchor = "right";
    transform = "-100%";
  }

  return (
    <>
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: lcPct(x, LC_CONT),
          top: lcPct(y, LC_HEIGHT),
          width: lcPct(LC_NODE, LC_CONT),
        }}
      >
        <div
          className="relative w-full overflow-hidden rounded-full bg-white shadow-lg"
          style={{ aspectRatio: "1", border: `4px solid ${borderColor}` }}
        >
          <img
            src={step.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${step.imageClass}`}
          />
        </div>
      </div>

      <div
        className="absolute z-20 flex flex-col -translate-y-1/2"
        style={{
          left: lcPct(textX, LC_CONT),
          top: lcPct(textY, LC_HEIGHT),
          width: "22%",
          minWidth: "200px",
          transform: `translate(${transform}, -50%)`,
          textAlign: textAnchor as any,
        }}
      >
        <div 
          className="text-[9px] font-black uppercase leading-tight tracking-wide sm:text-[11px]"
          style={{ color: borderColor }}
        >
          {step.id} {step.phase}
        </div>
        <p className="mt-1 text-[8.5px] font-medium leading-snug text-gray-600 dark:text-gray-400 sm:text-[10px]">
          {step.description}
        </p>
        {"savings" in step && step.savings && (
          <ul className={`mt-1.5 flex flex-wrap gap-x-1.5 gap-y-1 ${textAnchor === "left" ? "justify-start" : textAnchor === "right" ? "justify-end" : "justify-center"}`}>
            {step.savings.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-0.5 text-[7px] font-bold text-gray-500 dark:text-gray-400 sm:text-[8px]">
                <Icon className="h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5" style={{ color: borderColor }} />
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const LifeCycleMobile: React.FC = () => (
  <div className="overflow-hidden rounded-2xl shadow-xl" style={{ backgroundColor: LC_CREAM }}>
    <div className="px-4 py-6">
      <div className="relative">
        {/* vertical connector line */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary/20" aria-hidden />

        <div className="space-y-0">
          {lifeCycleSteps.map((step) => {
            const borderColor = step.theme === "dark" ? LC_DARK : LC_PRIMARY;
            return (
              <div key={step.id} className="relative flex gap-4 pb-6">
                {/* node circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden border-2 shadow-md"
                    style={{ borderColor }}
                  >
                    <img src={step.image} alt={step.phase} className="w-full h-full object-cover" />
                  </div>
                  {/* step number badge */}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white shadow"
                    style={{ backgroundColor: borderColor }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* text */}
                <div className="flex-1 pt-1 min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: borderColor }}>
                    {step.phase}
                  </p>
                  <p className="text-xs text-gray-600 leading-snug">{step.description}</p>
                  {"savings" in step && step.savings && (
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                      {step.savings.map(({ icon: Icon, label }) => (
                        <span key={label} className="flex items-center gap-0.5 text-[9px] font-bold text-gray-500">
                          <Icon className="h-2.5 w-2.5 shrink-0" style={{ color: borderColor }} />
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div
      className="flex flex-col items-center gap-1 px-4 py-3 text-white text-center"
      style={{ backgroundColor: LC_PRIMARY }}
    >
      <p className="text-[10px] font-black uppercase tracking-widest">The Life Cycle of Smart Waste Management</p>
      <p className="text-[10px] font-medium text-white/90">Less Waste • Fewer Trucks • Lower Costs • Cleaner Cities</p>
    </div>
  </div>
);

const LifeCycleWheel: React.FC = () => (
  <div className="overflow-hidden rounded-2xl shadow-xl" style={{ backgroundColor: LC_CREAM }}>
    <div className="px-3 py-6 sm:px-6 sm:py-8">
      <div
        className="relative mx-auto w-full max-w-[920px]"
        style={{ aspectRatio: `${LC_CONT} / ${LC_HEIGHT}` }}
        role="img"
        aria-label="The Life Cycle of Smart Waste Management"
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${LC_CONT} ${LC_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <marker id="lc-arrowhead" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
              <polygon points="0 0, 6 2.5, 0 5" fill="#801525" />
            </marker>
          </defs>
          {LC_ARROWS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#801525"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#lc-arrowhead)"
              className="opacity-100"
            />
          ))}
        </svg>

        <div
          className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gray-200 bg-white text-center shadow-lg"
          style={{
            left: lcPct(LC_CX, LC_CONT),
            top: lcPct(LC_CY, LC_HEIGHT),
            width: "26%",
            maxWidth: 240,
            aspectRatio: "1",
          }}
        >
          <LifeCycleBrand />
          <LifeCycleEquation />
        </div>

        {lifeCycleSteps.map((step, i) => {
          const { x, y, deg } = lcNodeCoords[i];
          return <LifeCycleNode key={step.id} step={step} x={x} y={y} deg={deg} />;
        })}

        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: lcPct(lcEndFrame.x, LC_CONT),
            top: lcPct(lcEndFrame.y, LC_HEIGHT),
            width: lcPct(LC_NODE - 12, LC_CONT),
            maxWidth: 160,
          }}
        >
          <div
            className="flex aspect-square w-full flex-col items-center justify-center rounded-full border-4 bg-white px-2 py-3 shadow-lg sm:px-3"
            style={{ borderColor: LC_PRIMARY }}
          >
            <p className="text-[7px] font-black uppercase tracking-widest sm:text-[8px]" style={{ color: LC_PRIMARY }}>
              End Frame
            </p>
            <div className="mt-0.5 scale-[0.88] sm:scale-90">
              <LifeCycleBrand compact />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="flex flex-col items-center justify-between gap-2 px-6 py-3.5 text-white sm:flex-row"
      style={{ backgroundColor: LC_PRIMARY }}
    >
      <p className="text-xs font-black uppercase tracking-widest">
        The Life Cycle of Smart Waste Management
      </p>
      <p className="text-xs font-medium text-white/95">
        Less Waste &bull; Fewer Trucks &bull; Lower Costs &bull; Cleaner Cities
      </p>
    </div>
  </div>
);


/* ─────────────────────── SAVINGS CALCULATOR ─────────────────────── */

const WasteSavingsCalculator: React.FC = () => {
  const [fleetSize, setFleetSize] = useState(10);
  const [dailyFuelSpend, setDailyFuelSpend] = useState(5000);

  const dailySavings = dailyFuelSpend * fleetSize * 0.35; // 35% fuel savings
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 365;
  const monthlyHoursSaved = fleetSize * 15; // Approximate 15 hours saved per truck monthly

  const getImpactEquivalent = (monthly: number) => {
    if (monthly >= 500000) return "Funding a community recycling program";
    if (monthly >= 100000) return "Adding a new eco-friendly truck to the fleet";
    if (monthly >= 50000) return "Upgrading public park facilities";
    return "Significant improvement in city budgeting";
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <SectionBadge text="Municipality Savings Calculator" />
        <h2 className="mt-4 text-2xl md:text-3xl font-black text-gray-900 dark:text-white">See Your Real Savings</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          Adjust the sliders below to see how much money and time you reclaim when you switch to dynamic route optimization.
        </p>
      </div>

      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="w-full md:w-5/12 p-8 lg:p-10 bg-gray-50 dark:bg-gray-900/50">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Your Operations</h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fleet Size</label>
                <span className="text-xl font-black text-primary dark:text-primary">{fleetSize} Trucks</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" 
                value={fleetSize} onChange={e => setFleetSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                <span>1</span><span>100+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Daily Fuel per Truck</label>
                <span className="text-xl font-black text-primary dark:text-primary">KSh {dailyFuelSpend}</span>
              </div>
              <input 
                type="range" min="1000" max="20000" step="500" 
                value={dailyFuelSpend} onChange={e => setDailyFuelSpend(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                <span>KSh 1,000</span><span>KSh 20,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 text-primary opacity-5 pointer-events-none">
            <DollarSign className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-primary mb-2">Your Projected Savings</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">KSh {Math.round(monthlySavings).toLocaleString()}</span>
              <span className="text-gray-500 dark:text-gray-400 font-semibold">/ month</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-golden-50 dark:bg-charcoal-900/20 border border-golden-100 dark:border-charcoal-800/30 rounded-2xl p-4">
                <div className="text-primary dark:text-primary mb-1"><DollarSign className="w-5 h-5" /></div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">KSh {Math.round(yearlySavings).toLocaleString()}</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Yearly Savings</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-2xl p-4">
                <div className="text-blue-600 dark:text-blue-400 mb-1"><Clock className="w-5 h-5" /></div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{Math.round(monthlyHoursSaved)} hrs</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Saved Per Month</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm text-primary dark:text-primary shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">What this means for you</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Equivalent to <span className="text-primary dark:text-primary">{getImpactEquivalent(monthlySavings)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function WasteManagement() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineFade,  setTaglineFade]  = useState(true);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTaglineFade(false);
      setTimeout(() => { setTaglineIndex(i => (i + 1) % taglines.length); setTaglineFade(true); }, 350);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">

      {/* ══ HERO ══ */}
      <section className="relative pt-20 pb-10 overflow-hidden bg-charcoal-900 dark:bg-charcoal-900">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.35] tracking-tight mb-3 pb-[0.06em]">
                Collect Smarter.<br />
                <span className="text-primary">Spend Less.</span>{" "}
                Live Better.
              </h1>

              <p
                className="text-sm text-white/55 mb-5 transition-all duration-350 max-w-sm mx-auto lg:mx-0 font-medium"
                style={{ opacity: taglineFade ? 1 : 0, transform: taglineFade ? "none" : "translateY(-6px)" }}
              >
                {taglines[taglineIndex]}
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-white shadow-md font-bold text-sm hover:bg-golden-600 transition-colors duration-300"
              >
                <span className="mr-2.5">Get Started</span>
                <span className="w-7 h-7 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowDownRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-shrink-0 w-full lg:w-auto lg:max-w-xs">
              {[
                { icon: Leaf,       val: "45%",   label: "Cost Savings",  color: "#801525" },
                { icon: Map,        val: "30%",   label: "Fewer Trucks",  color: "#D96500" },
                { icon: Clock,      val: "2×",    label: "Faster Pickup", color: "#18191c" },
                { icon: Recycle,    val: "50%",   label: "More Recycling",color: "#801525" },
              ].map(({ icon: Icon, val, label, color }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white flex items-center gap-3"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" style={{ color }} />
                  <div>
                    <div className="text-base font-black leading-none">{val}</div>
                    <div className="text-[10px] text-white/50 mt-0.5 font-semibold">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ORIGIN STORY ══ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <SectionBadge text="Our Vision" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-[1.35] mt-4 pb-[0.06em]">
                  Waste management shouldn't be a guessing game.
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  For decades, garbage trucks have driven the same routes regardless of whether bins were full or empty. This inefficiency wastes fuel, increases carbon emissions, and results in overflowing bins that harm communities.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">waste management changes that.</strong>{" "}
                  Using IoT fill-level sensors and AI-powered route optimization, we make sure trucks only go where they are needed, exactly when they are needed.
                </p>
                <blockquote className="border-l-4 border-primary pl-5 py-1">
                  <p className="text-base italic text-gray-700 dark:text-gray-300">
                    "The goal is simple: zero overflow, zero wasted trips."
                  </p>
                </blockquote>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop" alt="Smart Waste Management" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-5 left-5 right-5 flex gap-2.5">
                  {[
                    { icon: Leaf,  label: "Less CO2",   val: "50%"  },
                    { icon: Clock, label: "Time Saved", val: "30%" },
                    { icon: Map,   label: "Fewer Trips",val: "40%"  },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} className="flex-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-2.5 text-white text-center">
                      <Icon className="h-3.5 w-3.5 mx-auto mb-1 text-primary" />
                      <div className="text-base font-black">{val}</div>
                      <div className="text-[10px] text-white/70">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ IMPACT NUMBERS ══ */}
      <section className="py-16 bg-charcoal-900 dark:bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Real Impact. Measured.</p>
              <h2 className="text-2xl md:text-3xl font-black text-white">Results from forward-thinking municipalities.</h2>
            </div>
          </FadeIn>
          <CounterSection />
          
        </div>
      </section>

      {/* ══ LIFE CYCLE INFOGRAPHIC ══ */}
      <section className="py-20" style={{ backgroundColor: LC_CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <SectionBadge text="The Life Cycle of Smart Waste Management" />
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-gray-900">
                From overflowing bins to smart cities
              </h2>
              <p className="mt-2 text-gray-600 text-sm max-w-lg mx-auto">
                How connected sensors and intelligent routing transform urban cleanliness.
              </p>
            </div>
          </FadeIn>
          {/* Mobile: vertical stepper */}
          <div className="block md:hidden">
            <LifeCycleMobile />
          </div>
          {/* Desktop: radial wheel */}
          <div className="hidden md:block">
            <LifeCycleWheel />
          </div>
        </div>
      </section>

      {/* ══ EMOTIONAL PERSONAS ══ */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionBadge text="Transforming Communities" />
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-gray-900 dark:text-white">It is a city upgrade.</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
                Behind every optimized route is a community that breathes cleaner air and saves public funds.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactProfiles.map(({ icon: Icon, color, persona, story, metric, metricLabel }, i) => (
              <FadeIn key={persona} delay={i * 80} direction="up">
                <div className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="h-1" style={{ backgroundColor: color }} />
                  <div className="p-5 space-y-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: color + "15", border: `1.5px solid ${color}30` }}>
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{persona}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{story}</p>
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                      <div className="text-2xl font-black" style={{ color }}>{metric}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">{metricLabel}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUE EQUATION ══ */}
      <section className="py-16 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">The Formula</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10">Simple math. Powerful results.</h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
              {[
                { icon: Map,        label: "Better Routes", color: "#801525", bg: "#80152512" },
                { label: "+", isOp: true },
                { icon: Clock,      label: "Save Time",     color: "#801525", bg: "#80152512" },
                { label: "+", isOp: true },
                { icon: DollarSign, label: "Lower Costs",   color: "#801525", bg: "#80152512" },
                { label: "=", isOp: true },
                { icon: CheckCircle,label: "Clean City",    color: "#801525", bg: "#80152512", highlight: true },
              ].map((item, i) =>
                "isOp" in item ? (
                  <span key={i} className="text-3xl font-black text-white/30">{item.label}</span>
                ) : (
                  <div key={i}
                    className={`flex flex-col items-center gap-2 rounded-xl border border-white/10 px-7 py-5 ${item.highlight ? "scale-105 shadow-lg" : ""}`}
                    style={{ backgroundColor: item.bg }}
                  >
                    {item.icon && <item.icon className="h-6 w-6" style={{ color: item.color }} />}
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.label}</span>
                  </div>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ SAVINGS CALCULATOR ══ */}
      <section className="py-20 bg-golden-50/40 dark:bg-gray-900">
        <FadeIn>
          <WasteSavingsCalculator />
        </FadeIn>
      </section>

      {/* ══ IOT PLATFORM INTRO ══ */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <SectionBadge text="Smart Bin Sensors" />
                <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-[1.35] mt-4 pb-[0.06em]">
                  Next-Generation IoT Waste Technology
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our sensors install in minutes under any bin lid, measuring fill levels with ultrasound and reporting back via cellular networks.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Zap,       title: "Real-Time Updates",  desc: "Continuous monitoring of fill levels, temperature, and tilt." },
                    { icon: Map,       title: "Dynamic Routing",   desc: "AI automatically calculates the most efficient route for drivers." },
                    { icon: Database,  title: "Open API Integrations",      desc: "Connect seamlessly with your existing municipal or ERP systems." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-golden-50 dark:bg-charcoal-900 rounded-lg text-primary dark:text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">{title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                <img src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=800&auto=format&fit=crop" alt="IoT Waste Platform" className="w-full h-[380px] object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ INNOVATION IN WASTE MANAGEMENT ══ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionBadge text="Innovation" />
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Pioneering the Future of Waste</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                We leverage cutting-edge technology to turn traditional waste management into a highly efficient, data-driven, and sustainable ecosystem.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "AI-Powered Analytics", 
                desc: "Machine learning algorithms analyze historical fill rates to predict future waste generation patterns, enabling proactive resource allocation." 
              },
              { 
                icon: Share2, 
                title: "Connected Ecosystem", 
                desc: "A fully integrated mesh of IoT sensors, driver tablets, and central dispatch dashboards working in perfect synchronization." 
              },
              { 
                icon: TrendingUp, 
                title: "Circular Economy Tech", 
                desc: "Advanced material tracking ensures recyclables are efficiently routed to processing centers, minimizing landfill contribution." 
              }
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100} direction="up">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Icon className="w-24 h-24 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-golden-50 dark:bg-charcoal-900 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HARDWARE & TOOLS SUPPLIER ══ */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionBadge text="Premium Supplier" />
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Waste Management Hardware & Tools</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                As an end-to-end supplier, we provide durable, high-quality hardware designed to withstand the toughest urban environments while staying continuously connected.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Trash2, 
                title: "Smart Bins", 
                desc: "High-capacity, solar-powered waste receptacles with built-in compactors and automatic lock mechanisms." 
              },
              { 
                icon: Cpu, 
                title: "Ultrasonic Sensors", 
                desc: "Retro-fittable IoT sensors that monitor fill levels in real-time, built with IP68 waterproof enclosures." 
              },
              { 
                icon: ShieldAlert, 
                title: "RFID Bin Tags", 
                desc: "Rugged RFID tags for bins to track individual container lifecycles and ensure collection accountability." 
              },
              { 
                icon: Wifi, 
                title: "Fleet Telematics", 
                desc: "In-cab displays and OBD-II trackers for garbage trucks, enabling live route guidance and fuel tracking." 
              }
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100} direction="up">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══ */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                Designed for Efficiency. Not Guesswork.
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Compare traditional scheduled collections against data-driven smart collections.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn direction="left">
              <div className="bg-primary text-white p-7 rounded-2xl shadow-lg border border-primary/80 space-y-5">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" /> Smart Collection
                </h3>
                <ul className="space-y-3">
                  {["Collections based on actual fill levels","Optimized routes generated daily","Zero overflowing bins","Up to 50% fuel savings","Real-time dashboard and alerts"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/90">
                      <span className="text-white font-bold">✔</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={100}>
              <div className="bg-gray-100 dark:bg-gray-900 p-7 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 space-y-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" /> Traditional Collection
                </h3>
                <ul className="space-y-3">
                  {["Fixed routes and schedules","Driving to empty bins","Complaints about overflowing bins","High fuel and maintenance costs","No data on operational efficiency"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-red-500 font-bold">✖</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
    </div>
  );
}
