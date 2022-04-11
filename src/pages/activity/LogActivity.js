import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import ActivityMenu from "../../components/utility/ActivityMenu";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import useFetch from "../../services/useFetch";
const LogActivity = () => {
  const pastDate = new Date(new Date().setDate(new Date().getDate() - 35))
    .toISOString()
    .split("T")[0];
  const currentDate = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(pastDate);
  const [endDate, setEndDate] = useState(currentDate);

  const { data, isLoading, error } = useFetch(
    `/orders/report/brief?startDate=${startDate}&endDate=${endDate}`
  );

  return (
    <Layout>
      <div className="sm:px-[32px] pb-[32px] w-full">
        <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
          Log Aktivitas User
        </h1>
        <div className="shadow-lg rounded-lg bg-white h-fit px-3">
          <div className=" py-5 px-3">
            <ActivityMenu
              setStartDate={setStartDate}
              startDate={startDate}
              setEndDate={setEndDate}
              endDate={endDate}
            />
          </div>
          <hr className="border-gray" />
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
                            Tgl & Waktu
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Aktivitas
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            User
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
                          data?.trx_brief.map((item, i) => (
                            <tr key={i} className="bg-white odd:bg-tableOdd">
                              <td className="py-2 px-6 text-md font-normal text-gray-900 whitespace-nowrap">
                                {i + 1}
                              </td>
                              <td className="py-2 px-6 text-md font-normal text-gray-900 whitespace-nowrap">
                                {item.order_date}
                              </td>
                              <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.company}
                              </td>
                              <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.buyer}
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
 
export default LogActivity;