import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import ReportMenu from "../../components/utility/ReportMenu";
import fetchReport from "../../services/fetchReport";
import useFetch from "../../services/useFetch";
import Formatnumber from "../../components/utility/formatNumber";
const ComparisonReport = () => {
  const pastDate = new Date(new Date().setDate(new Date().getDate() - 35))
    .toISOString()
    .split("T")[0];
  const currentDate = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(pastDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [keyword, setKeyword] = useState('');

  const { data, isLoading, error } = useFetch(
    `/orders/report/comparison?startDate=${startDate}&endDate=${endDate}&company=${keyword}`
  );

  const handleDownloadFile = () => {
    fetchReport(
      `/orders/report/generateComparison?startDate=${startDate}&endDate=${endDate}&company=${keyword}`
    );
  };

  return (
    <Layout>
      <div className="sm:px-[32px] pb-[32px] w-full">
        <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
          Data Pembanding Transaksi
        </h1>
        <div className="shadow-lg rounded-lg bg-white h-fit px-3 py-2">
          <ReportMenu
            handleDownloadFile={handleDownloadFile}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
            keyword={keyword}
            setKeyword={setKeyword}
          />
          <hr className="border-gray my-2" />
          {isLoading && <Loading />}

          <div className="w-full overflow-auto">
            <div className="flex flex-col">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden  sm:rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-grey900  text-white">
                        <tr>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Tgl Transaksi
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Penjual
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Pembeli
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Jenis Material
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Kubikasi
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Harga m3
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Harga Penjualan
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Pajak
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Monitoring BPKAD
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {error ? (
                          <tr>
                            <td colSpan={8} className="py-5 px-3">
                              <Error error={"Data Tidak Ditemukan"} />
                            </td>
                          </tr>
                        ) : (
                          data?.trx_monitor.map((item, i) => (
                            <tr key={i} className="bg-white odd:bg-tableOdd">
                              <td className="py-2 px-4 text-md  text-gray-900 whitespace-nowrap">
                                {i + 1}
                              </td>
                              <td className="py-2 px-4 text-md  text-gray-900 whitespace-nowrap">
                                {item.order_date}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.seller}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.buyer}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.product_name}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.qty}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Rp {Formatnumber(item.volume_price)}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Rp {Formatnumber(item.sell_price)}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Rp {Formatnumber(item.tax)}
                              </td>
                              <td className="py-2 px-4 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Rp {Formatnumber(item.bpkad_tax)}
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
};
 
export default ComparisonReport;