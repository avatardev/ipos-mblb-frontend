import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import {IoMdArrowRoundBack} from "react-icons/io";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/utility/Pagination";
import { useParams, Link } from "react-router-dom";

import SellerUserModal from "../../components/seller/SellerUserModal";
import Loading from "../../components/utility/Loading";
import Limit from "../../components/utility/Limit";
import deleteData from "../../services/deleteData";
import useFetch from "../../services/useFetch";
import Error from "../../components/utility/Error";
import DeleteModal from "../../components/utility/DeleteModal";
const SellerUser = () => {
  const [showSellerUserModal, setShowSellerUserModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { corpId, corpName } = useParams();

  const [keyword, setKeyword] = useState("");
  const offset = (page - 1) * limit;

  const [idUserSeller, setIdUserSeller] = useState(0);
  const [changes, setChanges] = useState(0);

  const { data, isLoading, error } = useFetch(
    `/user/sellers?seller_id=${corpId}&offset=${offset}&limit=${limit}&keyword=${keyword}`,
    changes
  );

  const handleDelete = () => {
    deleteData(`/user/sellers/${itemId}`).then((res) => {
      console.log(res);
      setChanges((current) => current + 1);
      setShowModalDelete(false);
    });
  };

  return (
    <>
      <Layout>
        <div className="sm:px-[32px] pb-[32px] w-full">
          <div className="flex items-center gap-3 text-xl font-medium pt-[32px] pb-[24px]">
            <Link to={"/penjual"}>
              <IoMdArrowRoundBack className="text-xl" />
            </Link>
            <h1 className="text-xl py-3 font-semibold">Data User Penjual</h1>
          </div>
          <div className="shadow-lg rounded-lg bg-white h-fit px-3 py-2">
            <div className="flex justify-end gap-5 py-3">
              <button
                onClick={() => setShowSellerUserModal(true)}
                className="py-1 px-2 bg-button rounded text-white"
              >
                + Tambah User
              </button>
            </div>
            <div className="text-center py-3">
              <h1 className="text-2xl font-semibold">{corpName}</h1>
            </div>
            {isLoading && <Loading />}
            <hr className="border-gray my-2" />
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
                    <div className="overflow-hidden sm:rounded-lg">
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
                              Username
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
                              <td colSpan={3} className="py-5 px-3">
                                <Error error={"Data Tidak Ditemukan"} />
                              </td>
                            </tr>
                          ) : (
                            data?.user.map((item, i) => (
                              <tr
                                key={item.id}
                                className="bg-white odd:bg-tableOdd"
                              >
                                <td className="py-2 px-6 text-md font-medium text-gray-900 whitespace-nowrap">
                                  {i + offset + 1}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {item.username}
                                </td>
                                <td className="py-2 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div className="flex gap-3">
                                    <button
                                      onClick={() => {
                                        setIdUserSeller(item.id);
                                        setShowSellerUserModal(true);
                                      }}
                                      className="text-white bg-warning text-lg p-[4px] rounded"
                                    >
                                      <FiEdit />
                                    </button>

                                    <button
                                      onClick={() => {
                                        setItemId(item.id);
                                        setShowModalDelete(true);
                                      }}
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
        <SellerUserModal
          showSellerUserModal={showSellerUserModal}
          setShowSellerUserModal={setShowSellerUserModal}
          setIdUserSeller={setIdUserSeller}
          idUserSeller={idUserSeller}
          setChanges={setChanges}
          corpId={corpId}
        />
        <DeleteModal
          handleDelete={handleDelete}
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
        />
      </Layout>
    </>
  );
};
 
export default SellerUser;