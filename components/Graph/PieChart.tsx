import { Pie, PieChart as RePieChart, ResponsiveContainer, Sector } from 'recharts';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { TokenBalances } from '@/types';

interface PieChartProps {
  chartData: TokenBalances,
}

interface PieProps {
  stroke: string,
  fill: string,
  legendType: string,
  cx: string,
  cy: string,
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: string,
  paddingAngle: number,
  labelLine: boolean,
  hide: boolean,
  minAngle: number,
  isAnimationActive: boolean,
  animationBegin: number,
  animationDuration: number,
  animationEasing: string,
  nameKey: string,
  blendStroke: boolean,
  midAngle: number,
  payload: any,
  percent: number,
  value: number
}

const renderActiveShape = (props: PieProps) => {
  console.log('props', props);
  const RADIAN = Math.PI / 180;
  const { cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + ((parseInt(outerRadius) + 10) * cos);
  const sy = cy + ((parseInt(outerRadius) + 10) * sin);
  const mx = cx + ((parseInt(outerRadius) + 30) * cos);
  const my = cy + ((parseInt(outerRadius) + 30) * sin);
  const ex = mx + ((cos >= 0 ? 1 : -1) * 22);
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={25} y={cy} textAnchor="start" fill={fill}>
        {payload.contractAddress}
      </text>
      <Sector
        cx={parseInt(cx)}
        cy={parseInt(cy)}
        innerRadius={innerRadius}
        outerRadius={parseInt(outerRadius)}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#8884d8"
      />
      <Sector
        cx={parseInt(cx)}
        cy={parseInt(cy)}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={parseInt(outerRadius) + 6}
        outerRadius={parseInt(outerRadius) + 10}
        fill="#8884d8"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#8884d8" fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} textAnchor={textAnchor} fill="#f6f6f6">{`${value / 10}`}</text>
      <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} dy={18} textAnchor={textAnchor} fill="#F5f5f5">
        {`(${(percent * 100).toFixed(2)}% of your Portfolio)`}
      </text>
    </g>
  );
};

export const PieChart = ({ chartData }: PieChartProps): ReactElement => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    if (chartData !== undefined) {
      setLoaded(true);
    }
  }, [ chartData ]);

  const onPieEnter = useCallback(
    (_: unknown, index: number) => {
      setActiveIndex(index);
    },
    [ setActiveIndex ],
  );

  if (loaded) {
    return <div className='container mx-auto'>
      <ResponsiveContainer width="100%" height={800}>
        <RePieChart width={400} height={400}>
          <Pie
            data={chartData.tokenBalances}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            dataKey="tokenBalance"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
          />
        </RePieChart>
      </ResponsiveContainer>
    </div>;
  } else {
    return <></>;
  }
};

