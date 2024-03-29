import React, { useState } from 'react';
import ChartThree from '../../components/Charts/ChartThree';
import DefaultLayout from '../../layout/DefaultLayout';
import { options1, options2, options3, options4, options5 } from '../../helpers/chartsData';
import ChartTwo from '../../components/Charts/ChartTwo';

const ECommerce: React.FC = () => {

  const [dropDownData, setdropDownData] = useState<string>("Jami o'quvchilar soni")

  const optionsData = [
    { id: 1, value: "Jami o'quvchilar soni" },
    { id: 2, value: "O'qimoqchi bolganlar soni" },
    { id: 3, value: "Qarzdor o'quvchilar soni" },
    { id: 4, value: "Kirim chiqim pul" },
    { id: 5, value: "Kim tavfsiya qildi" }
  ]


  function handelChangeOption(event: any) {
    setdropDownData(event.target.value)
  }

  function getCorrectOptions() {
    switch (dropDownData) {
      case "Jami o'quvchilar soni":
        return options1
          case "O'qimoqchi bolganlar soni":
            return options2
              case "Qarzdor o'quvchilar soni":
                return options3
                  case "Kirim chiqim pul":
                    return options4
                      case "Kim tavfsiya qildi":
                        return options5
                          default:
                            return options1
    }
  }


  return (
    <DefaultLayout>
      <div className=' text-black dark:text-white px-5 py-3  border-stroke bg-white   shadow-default dark:border-strokedark dark:bg-boxdark inline-block'>
        <select onChange={(event) => handelChangeOption(event)} className=' text-black dark:text-white  border-stroke bg-white   shadow-default dark:border-strokedark dark:bg-boxdark outline-none' name="" id="">
          {optionsData.map(option => (
            <option key={option.id} className='mt-4 outline-none' value={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartTwo /> */}

        <ChartTwo options={getCorrectOptions()}/>
        <ChartThree options={getCorrectOptions()} />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;