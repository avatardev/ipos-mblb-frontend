import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai";
import { Link } from "react-router-dom";
import BuyerModal from "../../components/buyer/BuyerModal";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/utility/Pagination";

import buyer from "./buyer.json";
const Buyer = () => {
  const [showBuyerModal, setShowBuyerModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <Layout>
      <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
        <h1 className="text-xl py-3">Data Pembeli</h1>
        <div className="bg-white h-fit px-3 overflow-x-auto">
          <div className="flex justify-end gap-5 py-3">
            <Link to={'/pembeli/kategori'} className="py-1 px-2 border-2 rounded text-button">
              Kategori
            </Link>
            <button
              onClick={() => setShowBuyerModal(true)}
              className="py-1 px-2 bg-button rounded text-white"
            >
              + Tambah Pembeli
            </button>
          </div>
          <hr />
          <div className="md:flex md:justify-between py-3">
            <div className="flex gap-2">
              <p>Show</p>
              <select
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="border-2"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
              <p>Entries</p>
            </div>
            <div className="flex gap-2">
              <p>Search: </p>
              <input className="border-2 rounded" type="search" />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow-md sm:rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-primary text-white">
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
                        {buyer.map((item) => (
                          <tr
                            key={item.no}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              {item.no}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              {item.plat}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.kategori}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.corp}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.telp}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.address}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.email}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.pic}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.telp_pic}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.keterangan}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {item.isActive ? <p>True</p> : <p>False</p>}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <div className="flex gap-3">
                                <Link to={`/pembeli/${item.no}`}><AiOutlineUserAdd /></Link>
                                <button className="text-button">
                                  <FiEdit />
                                </button>
                                <button className="text-nonActive">
                                  <MdOutlineDelete />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
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
            totalData={50}
          />
        </div>
      </div>
      <BuyerModal
        showBuyerModal={showBuyerModal}
        setShowBuyerModal={setShowBuyerModal}
      />
    </Layout>
  );
};

export default Buyer;
