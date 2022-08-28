import { TokenBalance, TokenBalances } from '@/types/token';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PieChartProps {
  chartData: TokenBalances,
}

interface DataOptions {
  y: number,
  name: string,
}

export const PieChart = ({ chartData }: PieChartProps) => {
  const [ loaded, setLoaded ] = useState(false);
  const [ parsedChartData, setParsedChartData ] = useState<DataOptions[]>([]);

  useEffect(() => {
    if (chartData.tokenBalances !== undefined) {
      setLoaded(true);
      setParsedChartData(chartData.tokenBalances.map((value: TokenBalance) => ({
        name: value.contractAddress,
        y: (value.tokenBalance !== null ? parseInt(value.tokenBalance) : 0),
      })));
    }
  }, [ chartData ]);

  const chartOptions = {
    credits: {
      enabled: false,
    },
    title: {
      text: 'Portfolio',
      style: { color: '#fffffe', fontSize: '24px' },
    },
    legend: {
      itemStyle: { color: '#fffffe' },
    },
    chart: {
      plotShadow: false,
      type: 'pie',
      backgroundColor: null,
    },
    colors: [ '#767b97', '#848baa', '#939abd', '#a6aed4', '#b8c1ec', '#bfc7ee', '#c6cdf0' ],
    tooltip: {
      pointFormat: `{series.name}: <b>{point.percentage:.1f}%</b>`,
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [ {
      name: '% of your portfolio',
      colorByPoint: true,
      data: parsedChartData,
      type: 'pie',
      style: { color: '#fffffe', fontSize: '24px' },
    } ],
  };

  if (loaded) {
    return (<HighchartsReact highcharts={Highcharts} options={chartOptions} />);
  } else {
    return <></>;
  }
};
