import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import Layout from "../../components/layouts/Layout";
import CheckerUserModal from "../../components/user/CheckerUserModal";
import Pagination from "../../components/utility/Pagination";

import checker from "./admin.json"
const CheckerUser = () => {

    const [showCheckerUserModal, setShowCheckerUserModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    return (
        <>
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl py-3 font-semibold">Data User Checker</h1>
                </div>
                <div className="bg-white h-fit px-3 overflow-x-auto">
                    <div className="flex justify-end gap-5 py-3">
                            <button onClick={() => setShowCheckerUserModal(true)} className="py-1 px-2 bg-button rounded text-white">+ Tambah User Checker</button>
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
                                                        Username
                                                    </th>
                                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {checker.map(item => (
                                                    <tr key={item.no} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            {item.no}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                            {item.username}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                            <div className="flex gap-3">  
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
            <CheckerUserModal showCheckerUserModal={showCheckerUserModal} setShowCheckerUserModal={setShowCheckerUserModal} />
            </Layout>
        </> 
     );
}
 
export default CheckerUser;