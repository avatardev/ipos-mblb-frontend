import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import {GrDocument} from "react-icons/gr";
import Pagination from "../../components/utility/Pagination";
import seller from "./seller.json"
import SellerModal from "../../components/seller/SellerModal";
import Layout from "../../components/layouts/Layout";
const Seller = () => {

    const [showSellerModal, setShowSellerModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    return (
        <>
            <Layout>
                <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                    <h1 className="text-2xl py-3 font-semibold">Data Seller</h1>
                    <div className="bg-white h-fit px-3 overflow-x-auto">
                        <div className="flex justify-end gap-5 py-3">
                            <button onClick={() => setShowSellerModal(true)} className="py-1 px-2 bg-button rounded text-white">+ Tambah Seller</button>
                        </div>
                        <hr />
                        <div className="md:flex md:justify-between py-3">
                            <div className="flex gap-2">
                                <p>Show</p>
                                <select value={limit} onChange={(e) => setLimit(e.target.value)} className="border-2">
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
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            No
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Perusahaan
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Telp
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Alamat
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Kecamatan
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Email 
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            PIC
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            PIC Tel
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            NPWP
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            KTP
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            No IUP
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Masa Berlaku
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Keterangan
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Status
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {seller.map(item => (
                                                        <tr key={item.no} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                {item.no}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.name}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.telp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.address}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.kecamatan}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.email}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.pic}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.pic_telp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.npwp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.ktp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.iup}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.exp_date}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.desc}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.isActive ? <p>True</p> : <p>False</p>}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                <div className="flex gap-3">
                                                                    <button className="text-secondary"><GrDocument /></button>
                                                                    <button className="text-button"><FiEdit /></button>
                                                                    <button className="text-nonActive"><MdOutlineDelete /></button>
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

                        <Pagination page={page} setPage={setPage} limit={limit} totalData={50} />
                    
                    </div>
                </div>
                <SellerModal showSellerModal={showSellerModal} setShowSellerModal={setShowSellerModal} />
            </Layout>
        </> 
     );
}
 
export default Seller;