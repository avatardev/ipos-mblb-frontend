import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai";
import { Link } from "react-router-dom";
import BuyerModal from "../../components/buyer/BuyerModal";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/utility/Pagination";
import useFetch from "../../services/useFetch";
import Loading from "../../components/utility/Loading";
import Error from "../../components/utility/Error";
import Limit from "../../components/utility/Limit";
import deleteData from "../../services/deleteData";

const Buyer = () => {
  const [showBuyerModal, setShowBuyerModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState('');
  const offset = (page - 1) * limit;

  const [idBuyer, setIdBuyer] = useState(0);
  const [changes, setChanges] = useState(0);

  const {data, isLoading, error} = useFetch(`/buyers?limit=${limit}&offset=${offset}&keyword=${keyword}`, changes);

  const handleDelete = (id) => {
    deleteData(`/buyers/${id}`)
    .then(res => {
      console.log(res);
      setChanges(current => current + 1)
    })
  }

  return (
    <Layout>
      <div className=" px-[32px] pb-[32px] w-full">
        <h1 className="text-xl py-3">Data Pembeli</h1>
        <div className=" shadow-md rounded-lg bg-white h-fit px-3 overflow-x-auto">
          <div className="flex justify-end gap-5 py-5 px-3">
            <Link
              to={"/pembeli/kategori"}
              className="py-1 px-2 border-2 rounded text-button"
            >
              Kategori
            </Link>
            <button
              onClick={() => setShowBuyerModal(true)}
              className="py-1 px-2 bg-button rounded text-white"
            >
              + Tambah Pembeli
            </button>
          </div>
          <hr className="border-gray" />
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
                            Plat
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Kategori
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
                            Telp
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
                            PIC
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Telp PIC
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
                          data?.buyer.map((item, i) => (
                            <tr key={i} className="bg-white odd:bg-tableOdd">
                              <td className="py-2 px-6 text-md  font-medium text-gray-900 whitespace-nowrap">
                                {i + 1 + offset}
                              </td>
                              <td className="py-2 px-6 text-md  font-medium text-gray-900 whitespace-nowrap">
                                {item.vehicle_plate}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.category}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.company}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.phone}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.address}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.email}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.pic_name}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.pic_phone}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.description}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {item.status ? (
                                  <p className="bg-success text-center py-1 px-2 text-white rounded-full">
                                    Active
                                  </p>
                                ) : (
                                  <p className="bg-red text-center py-1 px-2 text-white rounded-full">
                                    Non Active
                                  </p>
                                )}
                              </td>
                              <td className="py-2 px-6 text-md  text-gray-500 whitespace-nowrap dark:text-gray-400">
                                <div className="flex gap-3">
                                  <Link
                                    to={`/pembeli/${item.vehicle_plate}`}
                                    className="text-white bg-button text-lg p-[4px] rounded"
                                  >
                                    <AiOutlineUserAdd />
                                  </Link>
                                  <button
                                    onClick={() => {
                                      setIdBuyer(item.vehicle_plate);
                                      setShowBuyerModal(true);
                                    }}
                                    className="text-white bg-warning text-lg p-[4px] rounded"
                                  >
                                    <FiEdit />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDelete(item.vehicle_plate)
                                    }
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
      <BuyerModal
        showBuyerModal={showBuyerModal}
        setShowBuyerModal={setShowBuyerModal}
        idBuyer={idBuyer}
        setIdBuyer={setIdBuyer}
        setChanges={setChanges}
      />
    </Layout>
  );
};

export default Buyer;
