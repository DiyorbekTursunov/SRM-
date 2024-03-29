import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface CatigoryType {
  label: string;
  id: number;
  series: string;
}


//chartTitle, chart, colors, labels, legend, plotOptions, dataLabels, responsive
export default function ChartThree({ options }: { options: ApexOptions | any }) {

  console.log(options.catigorys);


  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            {options.charttitle}: {options.allValue}
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={options.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {options.catigorys.map((catigory: CatigoryType) => (
          <div key={catigory.id} className="sm:w-1/2 w-full px-8">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span>{catigory.label}</span>
                <span>{typeof(catigory.series) === "string" ? catigory.series : catigory.series + " ta"}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};