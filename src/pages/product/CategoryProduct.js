import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import Layout from "../../components/layouts/Layout";
import CategoryProductModal from "../../components/product/CategoryProductModal";
import Error from "../../components/utility/Error";
import Limit from "../../components/utility/Limit";
import Loading from "../../components/utility/Loading";
import Pagination from "../../components/utility/Pagination";
import deleteData from "../../services/deleteData";
import useFetch from "../../services/useFetch";


const CategoryProduct = () => {

    const [showCategoryProductModal, setShowCategoryProductModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;
    const [idCategory, setIdCategory] = useState(0);

    const [changes, setChanges] = useState(0);

    const {data, isLoading, error} = useFetch(`/products/categories?limit=${limit}&offset=${offset}`, changes);

    const handleDelete = (id) => {
        deleteData(`/products/categories/${id}`)
        .then(res => {
          console.log(res);
          setChanges(current => current + 1)
        })
      }

    return (
      <>
        <Layout>
          <div className="bg-tableOdd shadow-md px-[32px] pb-3 w-[84vw]">
            <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
              Kategori Produk
            </h1>
            <div className="bg-white rounded-lg h-fit px-3 ">
              <div className="flex justify-end gap-5 py-3">
                <button
                  onClick={() => setShowCategoryProductModal(true)}
                  className="py-1 px-2 m-2 bg-button rounded text-white"
                >
                  + Tambah Kategori
                </button>
              </div>
              {/* <div className="text-center py-3">
                <h1 className="text-2xl font-semibold">Company ID</h1>
              </div> */}
              {isLoading && <Loading />}
              <hr className="border-gray" />
              <Limit setLimit={setLimit} limit={limit} setPage={setPage} />

              <div className="w-full overflow-x-auto">
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
                                Nama Kategori
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
                                <td>
                                  <Error error={"Data Tidak Ditemukan"} />
                                </td>
                              </tr>
                            ) : (
                              data?.category.map((item, i) => (
                                <tr
                                  key={item.id}
                                  className="bg-white odd:bg-tableOdd"
                                >
                                  <td className="py-2 px-6 text-md  text-primary whitespace-nowrap">
                                    {i + 1 + offset}
                                  </td>
                                  <td className="py-2 px-6 text-md text-primary whitespace-nowrap dark:text-gray-400">
                                    {item.category_name}
                                  </td>
                                  <td className="py-2 px-6 text-md text-primary whitespace-nowrap dark:text-gray-400">
                                    {item.tax}
                                  </td>
                                  <td className="py-2 px-6 text-md text-primary whitespace-nowrap dark:text-gray-400">
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
                                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <div className="flex gap-3">
                                      <button
                                        onClick={() => {
                                          setIdCategory(item.id);
                                          setShowCategoryProductModal(true);
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
          <CategoryProductModal
            showCategoryProductModal={showCategoryProductModal}
            setShowCategoryProductModal={setShowCategoryProductModal}
            idCategory={idCategory}
            setIdCategory={setIdCategory}
            setChanges={setChanges}
          />
        </Layout>
      </>
    );
}
 
export default CategoryProduct;