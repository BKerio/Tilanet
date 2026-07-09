import { ThumbsUp, GraduationCap, Rocket } from 'lucide-react';

export default function AgileMethodologyDiagram() {
  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
      {/* Left — Agile circular flow */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100 pointer-events-none" />
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-golden/30 pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-rose-500 border-r-orange-500 border-b-blue-500 border-l-purple-500 opacity-20 pointer-events-none" />

          <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full bg-charcoal text-white flex flex-col items-center justify-center text-center p-4 shadow-[0_12px_36px_rgba(0,0,0,0.15)] border-2 border-golden z-10">
            <span className="text-[14px] sm:text-[16px] font-bold leading-tight">Agile</span>
            <span className="text-[12px] sm:text-[13px] font-light text-golden mt-1">Methodology</span>
          </div>

          <div className="absolute top-0 left-0 -translate-x-[15px] translate-y-[25px] sm:-translate-x-[25px] flex items-center gap-2 z-20">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-rose-500 uppercase order-1">Evaluate</span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md order-2 border-2 border-white">01</div>
          </div>

          <div className="absolute top-0 right-0 translate-x-[15px] translate-y-[25px] sm:translate-x-[25px] flex items-center gap-2 z-20">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md border-2 border-white">02</div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-orange-500 uppercase">Define</span>
          </div>

          <div className="absolute bottom-0 right-0 translate-x-[15px] -translate-y-[25px] sm:translate-x-[25px] flex items-center gap-2 z-20">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md border-2 border-white">03</div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-blue-500 uppercase">Develop</span>
          </div>

          <div className="absolute bottom-0 left-0 -translate-x-[15px] -translate-y-[25px] sm:-translate-x-[25px] flex items-center gap-2 z-20">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-purple-500 uppercase order-1">Scope</span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md order-2 border-2 border-white">04</div>
          </div>
        </div>
      </div>

      {/* Right — Project implementation roadmap */}
      <div className="lg:col-span-7 w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-3xl p-5 sm:p-8 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200/80 pb-4 mb-8">
          <span className="text-xl font-black text-charcoal italic tracking-tight">Project</span>
          <div className="bg-[#008DA5] border-2 border-[#009cb7] text-white px-8 py-2 font-bold tracking-wide rounded-md text-[13px] shadow-sm mt-3 sm:mt-0">
            Implementation
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="text-left flex flex-col justify-end">
              <span className="text-[10px] font-bold text-primary tracking-wide leading-tight italic">Project Kick-Off</span>
              <span className="text-sm text-primary font-semibold mt-1">➔</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center justify-end">
                <span className="text-[9px] font-bold text-gray-500 leading-none">Steering</span>
                <span className="text-[9px] font-bold text-gray-500 leading-none mt-0.5">Committee</span>
                <span className="text-xs text-primary font-extrabold mt-1">▲</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2 text-center items-center">
            <div />
            {['Phase 1', 'Phase 2', 'Phase N'].map((phase) => (
              <div
                key={phase}
                className="bg-charcoal/5 border border-charcoal/10 text-charcoal/80 py-1.5 px-2 rounded-full text-[11px] font-semibold"
              >
                {phase}
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-200/60 w-full" />

          <div className="grid grid-cols-4 gap-2 text-center items-center">
            <span className="text-left text-[11px] font-bold text-charcoal/70 uppercase tracking-wider">
              Customer Validation
            </span>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex justify-center ${i < 3 ? 'border-r border-dashed border-gray-200/80' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#008DA5]/10 flex items-center justify-center">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#008DA5]" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2 text-center items-center">
            <span className="text-left text-[11px] font-bold text-charcoal/70 uppercase tracking-wider">
              Customer Training
            </span>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex justify-center ${i < 3 ? 'border-r border-dashed border-gray-200/80' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-rose-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2 text-center items-center bg-[#e6f7f8] rounded-xl py-2 px-1 border border-[#bbf7f0]/30">
            <span className="text-left text-[11px] font-extrabold text-[#008DA5] uppercase tracking-wider pl-2">
              GO LIVE!
            </span>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex justify-center ${i < 3 ? 'border-r border-dashed border-charcoal/10' : ''}`}>
                <Rocket className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
