import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {IoMdArrowRoundBack} from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import MerchantProductModal from "../../components/product/MerchantProductModal";
import Error from "../../components/utility/Error";
import Formatnumber from "../../components/utility/formatNumber";
import Limit from "../../components/utility/Limit";
import Loading from "../../components/utility/Loading";
import Pagination from "../../components/utility/Pagination";
import useFetch from "../../services/useFetch";

const MerchantProduct = () => {
  const [showMerchantProductModal, setShowMerchantProductModal] =
    useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { merchantId, merchantName } = useParams();
  const [keyword, setKeyword] = useState("");
  const offset = (page - 1) * limit;

  const [idProduct, setIdProduct] = useState(0);
  const [changes, setChanges] = useState(0);

  const { data, isLoading, error } = useFetch(
    `/sellers/${merchantId}/items?keyword=${keyword}&offset=${offset}&limit=${limit}`,
    changes
  );

  return (
    <>
      <Layout>
        <div className="shadow-md px-[32px] pb-[32px] w-full">
          <div className="flex items-center gap-2">
            <Link to={"/produk/seller"}>
              <IoMdArrowRoundBack className="text-xl" />
            </Link>
            <h1 className="text-xl py-3 font-semibold">Data Produk Seller</h1>
          </div>
          <div className="bg-white h-fit px-3 ">
            <div className="text-center py-3">
              <h1 className="text-xl font-semibold">{merchantName}</h1>
            </div>
            {isLoading && <Loading />}
            <hr className="border-gray" />
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
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
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
                              Nama Produk
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Harga
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Keterangan
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Status
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
                              <td colSpan={8} className="py-5 px-3">
                                <Error error={"Data Tidak Ditemukan"} />
                              </td>
                            </tr>
                          ) : (
                            data?.merchant_item.map((item, i) => (
                              <tr
                                key={item.id}
                                className="bg-white odd:bg-tableOdd"
                              >
                                <td className="py-2 px-6 text-md font-medium text-gray-900 whitespace-nowrap">
                                  {i + 1 + offset}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.name}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  Rp {Formatnumber(item.price)}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.description}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.status ? (
                                    <p className="bg-success text-center py-1 px-2 text-white rounded-full">
                                      Active
                                    </p>
                                  ) : (
                                    <p className="bg-red text-center p-1 px-2 text-white rounded-full">
                                      Non Active
                                    </p>
                                  )}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div className="flex justify-center">
                                    <button
                                      onClick={() => {
                                        setIdProduct(item.id);
                                        setShowMerchantProductModal(true);
                                      }}
                                      className="text-white bg-warning text-lg p-[4px] rounded"
                                    >
                                      <FiEdit />
                                    </button>
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
        <MerchantProductModal
          showMerchantProductModal={showMerchantProductModal}
          setShowMerchantProductModal={setShowMerchantProductModal}
          IdProduct={idProduct}
          setIdProduct={setIdProduct}
          merchantId={merchantId}
          setChanges={setChanges}
        />
      </Layout>
    </>
  );
};
 
export default MerchantProduct;