import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';



export default function ChartTwo({ options }: { options: ApexOptions | any }) {

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {options.charttitle}: {options.allValue}
        </h4>
      </div>
      <div id="chartTwo" className=" flex justify-center items-center">
        <ReactApexChart
          options={options}
          series={options.series}
          type="polarArea"
        />
      </div>
    </div >
  );
};