import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Limit from "../../components/utility/Limit";
import Loading from "../../components/utility/Loading";
import Pagination from "../../components/utility/Pagination";
import useFetch from "../../services/useFetch";
import {BsBoxArrowInDownRight} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const DailyReportList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  const offset = (page - 1) * limit;

  const { data, isLoading, error } = useFetch(
    `/sellers?limit=${limit}&offset=${offset}&keyword=${keyword}`
  );

  return (
    <>
      <Layout>
        <div className=" px-5  pb-3 ">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
              Laporan Penjual
            </h1>
          </div>
          <div className="bg-white h-fit p-4 rounded-lg overflow-x-auto">
            {isLoading && <Loading />}
            <Limit
              setLimit={setLimit}
              limit={limit}
              setPage={setPage}
              setKeyword={setKeyword}
            />

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
                            >
                              No
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Perusahaan
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Alamat
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Telp
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Action
                            </th>
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
                            data?.seller.map((item, i) => (
                              <tr
                                key={item.id}
                                className="bg-white odd:bg-tableOdd"
                              >
                                <td className="py-2 px-6 text-md font-medium text-gray-900 whitespace-nowrap">
                                  {i + 1 + offset}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <Link
                                    to={`/laporan/harian/${item.id}/${item.company}`}
                                  >
                                    {item.company}
                                  </Link>
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.address}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.emali}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.phone}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div className="flex gap-3">
                                    <Link
                                      to={`/laporan/harian/${item.id}/${item.company}`}
                                      className="text-white bg-success text-lg p-[4px] rounded"
                                    >
                                      <AiOutlineEye />
                                    </Link>
                                  </div>
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

            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              totalData={data?.total}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
 
export default DailyReportList;