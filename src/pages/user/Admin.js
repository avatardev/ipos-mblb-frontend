import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/utility/Pagination";

import AdminUserModal from "../../components/user/AdminUserModal";
import useFetch from "../../services/useFetch";
import Loading from "../../components/utility/Loading";
import Limit from "../../components/utility/Limit";
import Error from "../../components/utility/Error";
import deleteData from "../../services/deleteData";
const AdminUser = () => {

    const [showAdminUserModal, setShowAdminUserModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState('');
    const offset = (page - 1) * limit;

    const [idUserAdmin, setIdUserAdmin] = useState(0);
    const [changes, setChanges] = useState(0);

    const {data, isLoading, error} = useFetch(`/user/admins?offset=${offset}&limit=${limit}&keyword=${keyword}`, changes);

    const handleDelete = (id) => {
        deleteData(`/user/admins/${id}`)
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
              <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
                Data User Admin
              </h1>
            </div>
            <div className="bg-white h-fit px-3 rounded-lg">
              <div className="flex justify-end gap-5 py-3">
                <button
                  onClick={() => setShowAdminUserModal(true)}
                  className="py-1 px-2 bg-button rounded text-white"
                >
                  + Tambah Admin
                </button>
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
                                <td colSpan={8} className="py-5 px-3">
                                  <Error error={"Data Tidak Ditemukan"} />
                                </td>
                              </tr>
                            ) : (
                              data?.user.map((item, i) => (
                                <tr
                                  key={item.id}
                                  className="bg-white odd:bg-tableOdd"
                                >
                                  <td className="py-2 px-6 text-md ">
                                    {i + 1 + offset}
                                  </td>
                                  <td className="py-2 px-6 text-md text-gray-500">
                                    {item.username}
                                  </td>
                                  <td className="py-2 px-6 text-md text-gray-500">
                                    <div className="flex gap-3">
                                      <button
                                        onClick={() => {
                                          setIdUserAdmin(item.id);
                                          setShowAdminUserModal(true);
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
          <AdminUserModal
            showAdminUserModal={showAdminUserModal}
            setShowAdminUserModal={setShowAdminUserModal}
            idUserAdmin={idUserAdmin}
            setIdUserAdmin={setIdUserAdmin}
            setChanges={setChanges}
          />
        </Layout>
      </>
    );
}
 
export default AdminUser;