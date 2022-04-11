import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import {IoMdArrowRoundBack} from "react-icons/io";
import { Link } from "react-router-dom";
import CategoryBuyerModal from "../../components/buyer/CategoryBuyerModal";
import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Limit from "../../components/utility/Limit";
import Loading from "../../components/utility/Loading";
import Pagination from "../../components/utility/Pagination";
import deleteData from "../../services/deleteData";
import useFetch from "../../services/useFetch";


const CategoryBuyer = () => {

    const [showCategoryBuyerModal, setShowCategoryBuyerModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;
    const [idCategory, setIdCategory] = useState(0);
    const [keyword, setKeyword] = useState("");

    const [changes, setChanges] = useState(0);

    const {data, isLoading, error} = useFetch(`/buyers/categories?offset=${offset}&limit=${limit}&keyword=${keyword}`, changes);

    const handleDelete = (id) => {
        deleteData(`/buyers/categories/${id}`)
        .then(res => {
          console.log(res);
          setChanges(current => current + 1)
        })
      }


    return (
      <>
        <Layout>
          <div className="sm:px-[32px] pb-[32px] w-full">
            <div className="flex items-center gap-2">
              <Link to={"/pembeli"}>
                <IoMdArrowRoundBack className="text-xl" />
              </Link>
              <h1 className="text-xl py-3 font-semibold">Kategori Pembeli</h1>
            </div>
            <div className="bg-white rounded-lg h-fit px-3 ">
              <div className="flex justify-end gap-5 py-3">
                <button
                  onClick={() => setShowCategoryBuyerModal(true)}
                  className="py-1 px-2 bg-button rounded text-white"
                >
                  + Tambah Kategori
                </button>
              </div>
              {isLoading && <Loading />}
              <hr className="border-gray" />
              <Limit setLimit={setLimit} limit={limit} setPage={setPage} setKeyword={setKeyword} />

              <div className="w-full">
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
                                Nama Kategori
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Multi Produk
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
                              data?.category.map((item, i) => (
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
                                    {item.multi_product ? "True" : "False"}
                                  </td>
                                  <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <div className="flex gap-3">
                                      <button
                                        onClick={() => {
                                          setIdCategory(item.id);
                                          setShowCategoryBuyerModal(true);
                                        }}
                                        className="text-white bg-warning text-lg p-[4px] rounded"
                                      >
                                        <FiEdit />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-white bg-red text-lg p-[4px] rounded"
                                      >
                                        <MdOutlineDelete />
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
          <CategoryBuyerModal
            showCategoryBuyerModal={showCategoryBuyerModal}
            setShowCategoryBuyerModal={setShowCategoryBuyerModal}
            idCategory={idCategory}
            setIdCategory={setIdCategory}
            setChanges={setChanges}
          />
        </Layout>
      </>
    );
}
 
export default CategoryBuyer;