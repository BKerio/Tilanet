import {
  Stethoscope,
  HelpCircle,
  Sparkles,
  Cog,
  RefreshCw,
  Settings,
} from 'lucide-react';
import {
  lifecycleStages,
  openingBalanceRows,
  openingBalanceTasks,
  type LifecycleStageId,
  type OpeningBalanceRowId,
} from '@/data/implementationLifecycle';

const stageIcons = {
  Stethoscope,
  HelpCircle,
  Sparkles,
  Cog,
  RefreshCw,
  Settings,
};

const middleStages: Exclude<LifecycleStageId, 'diagnostic' | 'operation'>[] = [
  'analysis',
  'design',
  'development',
  'deployment',
];

function TaskBlock({ text }: { text: string }) {
  return (
    <div className="bg-[#1B3A5C] text-white text-[10px] sm:text-[11px] leading-snug px-2 py-2 sm:px-3 sm:py-2.5 shadow-sm border border-[#152d47]">
      {text}
    </div>
  );
}

function StageChevron({
  label,
  color,
  iconName,
  isLast,
}: {
  label: string;
  color: string;
  iconName: string;
  isLast?: boolean;
}) {
  const Icon = stageIcons[iconName as keyof typeof stageIcons] ?? Cog;

  return (
    <div
      className="relative flex items-center h-14 sm:h-16 min-w-[120px] sm:min-w-0"
      style={{
        clipPath: isLast
          ? 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)'
          : 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
        marginLeft: isLast ? 0 : '-1px',
      }}
    >
      <div
        className="flex items-center gap-2 sm:gap-3 w-full h-full pl-3 sm:pl-4 pr-5 sm:pr-6 text-white"
        style={{ backgroundColor: color }}
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0 bg-white/10">
          <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
        </div>
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}

function getTasksForCell(row: OpeningBalanceRowId, stage: typeof middleStages[number]) {
  return openingBalanceTasks.filter((t) => t.row === row && t.stage === stage);
}

export default function ImplementationLifecycle() {
  return (
    <div className="w-full">
      <h3 className="text-center text-xl sm:text-2xl lg:text-[28px] font-bold text-charcoal tracking-tight mb-8 sm:mb-10">
        Implementation Lifecycle
      </h3>

      <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="min-w-[880px] lg:min-w-0">
          {/* Stage chevrons */}
          <div className="grid grid-cols-6 gap-0 mb-1">
            {lifecycleStages.map((stage, i) => (
              <StageChevron
                key={stage.id}
                label={stage.label}
                color={stage.color}
                iconName={stage.icon}
                isLast={i === lifecycleStages.length - 1}
              />
            ))}
          </div>

          {/* Column canvas */}
          <div className="grid grid-cols-6 gap-1 min-h-[420px] relative">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.id}
                className="bg-[#E8E8E8] min-h-[420px] border border-white/80"
                aria-hidden="true"
              />
            ))}

            {/* Opening balances matrix — spans analysis → deployment */}
            <div
              className="absolute top-3 bottom-3 left-[calc(16.666%+4px)] right-[calc(16.666%+4px)] flex flex-col shadow-lg"
              style={{ backgroundColor: '#9FD5DC' }}
            >
              <div className="bg-[#1B3A5C] text-white text-center py-2.5 px-4">
                <span className="text-[12px] sm:text-sm font-semibold tracking-wide">
                  Deployment of opening balances
                </span>
              </div>

              <div className="flex flex-1 min-h-0">
                {/* Row labels */}
                <div className="w-10 sm:w-12 flex-shrink-0 flex flex-col border-r border-[#7ec4cc]">
                  {openingBalanceRows.map((row) => (
                    <div
                      key={row.id}
                      className="flex-1 flex items-center justify-center border-b border-[#7ec4cc] last:border-b-0 px-1"
                    >
                      <span
                        className="text-[9px] sm:text-[10px] font-bold text-[#1B3A5C] uppercase tracking-wider whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {row.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Task grid */}
                <div className="flex-1 grid grid-rows-3 min-h-0">
                  {openingBalanceRows.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-4 gap-2 p-2 sm:p-3 border-b border-[#7ec4cc] last:border-b-0 items-start content-start"
                    >
                      {middleStages.map((stage) => {
                        const tasks = getTasksForCell(row.id, stage);
                        return (
                          <div key={`${row.id}-${stage}`} className="flex flex-col gap-1.5 min-h-[60px]">
                            {tasks.map((task) => (
                              <TaskBlock key={task.text} text={task.text} />
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stage legend for mobile scroll hint */}
          <p className="text-[11px] text-[#6f7174] text-center mt-4 lg:hidden">
            Scroll horizontally to explore the full lifecycle
          </p>
        </div>
      </div>
    </div>
  );
}
