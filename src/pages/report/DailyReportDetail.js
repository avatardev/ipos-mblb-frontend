import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import ReportMenu from "../../components/utility/ReportMenu";
import fetchReport from "../../services/fetchReport";
import useFetch from "../../services/useFetch";
import {IoMdArrowRoundBack} from "react-icons/io"
const DailyReportDetail = () => {
    const pastDate = new Date(new Date().setDate(new Date().getDate()-35)).toISOString().split('T')[0];
    const currentDate = new Date().toISOString().split('T')[0];

    const [startDate, setStartDate] = useState(pastDate);
    const [endDate, setEndDate] = useState(currentDate);

    const {corpId, corpName} = useParams();
  
    const {data, isLoading, error} = useFetch(`/orders/report/daily/${corpId}`);
    
    
    const handleDownloadFile = () => {
        fetchReport(`/orders/report/generateDaily/${corpId}`);
    }


    return (
      <Layout>
        <div className="sm:px-[32px] pb-[32px] w-full">
          <div className="flex items-center gap-2">
            <Link to={"/laporan/harian"}>
              <IoMdArrowRoundBack className="text-xl" />
            </Link>
            <h1 className="text-xl py-3 font-semibold">
              Laporan Penjualan {corpName}
            </h1>
          </div>
          <div className="bg-white rounded-lg h-fit p-5 ">
            <ReportMenu
              handleDownloadFile={handleDownloadFile}
              setStartDate={setStartDate}
              startDate={startDate}
              setEndDate={setEndDate}
              endDate={endDate}
            />
            <hr />
            {isLoading && <Loading />}

            <div className="w-full overflow-auto">
              <div className="flex flex-col">
                <div className="sm:-mx-6 lg:-mx-8">
                  <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden  sm:rounded-lg">
                      <table className="min-w-full">
                        <thead className="bg-grey900 text-white">
                          <tr>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              rowSpan={2}
                            >
                              Tgl Transaksi
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                              colSpan={5}
                            >
                              Volume Material
                            </th>
                          </tr>
                          <tr>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>10</th>
                            <th>20</th>
                          </tr>
                        </thead>
                        <tbody>
                          {error ? (
                            <tr>
                              <td>
                                <Error error={"Data Tidak Ditemukan"} />
                              </td>
                            </tr>
                          ) : (
                            data?.trx_daily.map((item, i) => (
                              <tr
                                key={i}
                                className="bg-white border-b border-gray"
                              >
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap border-x-2">
                                  {item.order_date}
                                </td>
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap text-center border-x-2">
                                  {item["details"]["6"]}
                                </td>
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap text-center border-x-2">
                                  {item["details"]["7"]}
                                </td>
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap text-center border-x-2">
                                  {item["details"]["8"]}
                                </td>
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap text-center border-x-2">
                                  {item["details"]["10"]}
                                </td>
                                <td className="py-4 px-6 text-md border-gray font-medium text-gray-900 whitespace-nowrap text-center border-x-2">
                                  {item["details"]["20"]}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}
 
export default DailyReportDetail;