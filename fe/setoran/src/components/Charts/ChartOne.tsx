import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const chartOptions: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: { show: false },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: { chart: { height: 300 } },
    },
    {
      breakpoint: 1366,
      options: { chart: { height: 350 } },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
  },
  dataLabels: { enabled: false },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    hover: { sizeOffset: 5 },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 
      'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 100,
  },
};

const initialSeries = [
  {
    name: 'Product One',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  },
  {
    name: 'Product Two',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  },
];

const ChartOne: React.FC = () => {
  const [series] = useState(initialSeries);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <LegendItem color="primary" label="Total Revenue" dateRange="12.04.2022 - 12.05.2022" />
          <LegendItem color="secondary" label="Total Sales" dateRange="12.04.2022 - 12.05.2022" />
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <ChartButtonGroup />
        </div>
      </div>

      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

const LegendItem: React.FC<{ color: string; label: string; dateRange: string }> = ({ color, label, dateRange }) => (
  <div className="flex min-w-47.5">
    <span className={`mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-${color}`}>
      <span className={`block h-2.5 w-full max-w-2.5 rounded-full bg-${color}`}></span>
    </span>
    <div className="w-full">
      <p className={`font-semibold text-${color}`}>{label}</p>
      <p className="text-sm font-medium">{dateRange}</p>
    </div>
  </div>
);

const ChartButtonGroup: React.FC = () => (
  <div className="inline-flex items-center rounded-md bg-white p-1.5 dark:bg-meta-4">
    {['Day', 'Week', 'Month'].map((label) => (
      <button
        key={label}
        className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
      >
        {label}
      </button>
    ))}
  </div>
);

export default ChartOne;
