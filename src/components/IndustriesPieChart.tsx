/* eslint-disable */
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { industryMarketShare } from '@/data/siteData';

const RADIAN = Math.PI / 180;

export default function IndustriesPieChart() {
  // Local array to ensure a 100% fresh collision tracking record on every React render pass
  const renderedPositions: { x: number; y: number; side: 'left' | 'right' }[] = [];

  const renderOutsideLabel = (props: any) => {
    const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, name = '', value = 0, fill } = props;
    
    // Start position: exactly on the outer boundary of the pie slice
    const x1 = cx + outerRadius * Math.cos(-midAngle * RADIAN);
    const y1 = cy + outerRadius * Math.sin(-midAngle * RADIAN);
    
    // Pivot position: slightly outside the slice
    const pivotRadius = outerRadius + 16;
    const x2 = cx + pivotRadius * Math.cos(-midAngle * RADIAN);
    const y2 = cy + pivotRadius * Math.sin(-midAngle * RADIAN);
    
    // Determine hemisphere side
    const side = x2 > cx ? 'right' : 'left';
    const textSide = side === 'right' ? 1 : -1;
    
    // End horizontal coordinate of the pointer line
    const x3 = x2 + textSide * 20;
    
    // Spacing guard to shift overlapping labels vertically
    let yTarget = y2;
    const minVerticalSpacing = 22; // strict height spacing budget per label block
    
    for (let i = 0; i < renderedPositions.length; i++) {
      const prev = renderedPositions[i];
      if (prev.side === side && Math.abs(prev.y - yTarget) < minVerticalSpacing) {
        // Shift vertically: top half shifts UP, bottom half shifts DOWN
        if (yTarget < cy) {
          yTarget = prev.y - minVerticalSpacing;
        } else {
          yTarget = prev.y + minVerticalSpacing;
        }
      }
    }

    // Record the resolved non-overlapping coordinate
    renderedPositions.push({ x: x3, y: yTarget, side });

    // Segmented line vector path: slice -> pivot/shift -> label text
    const linePath = `M${x1},${y1} L${x2},${yTarget} L${x3},${yTarget}`;

    return (
      <g className="transition-opacity duration-300">
        {/* High-end dashed connector line */}
        <path
          d={linePath}
          fill="none"
          stroke="#d1d2d6"
          strokeWidth={1.2}
          strokeDasharray="2 3"
          className="opacity-80"
        />
        {/* Tiny matching color anchor dot at the start of text */}
        <circle
          cx={x3}
          cy={yTarget}
          r={2.5}
          fill={fill}
          className="shadow-sm"
        />
        {/* Legend/Name tag */}
        <text
          x={x3 + textSide * 8}
          y={yTarget}
          fill="#18191c"
          textAnchor={side === 'right' ? 'start' : 'end'}
          dominantBaseline="central"
          className="text-[11px] sm:text-[12px] font-bold fill-charcoal"
        >
          {name} ({value}%)
        </text>
      </g>
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-charcoal mb-8 tracking-tight">
        Company Market Share by Industry
      </h2>

      {/* Increased padding margins on chart container to give shifted labels maximum breathing room */}
      <div className="w-full h-[460px] sm:h-[560px] lg:h-[660px] mx-auto max-w-4xl">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 40, right: 140, bottom: 40, left: 140 }}>
            <Pie
              data={industryMarketShare}
              cx="50%"
              cy="50%"
              dataKey="value"
              nameKey="name"
              innerRadius="40%" // High-end Donut shape
              outerRadius="60%" // Balanced size leaving plenty of whitespace around chart
              paddingAngle={1.5} // Elegant spacing between sectors
              stroke="#ffffff"
              strokeWidth={1.5}
              label={renderOutsideLabel}
              labelLine={false} // Custom line rendered inside renderOutsideLabel
            >
              {industryMarketShare.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
