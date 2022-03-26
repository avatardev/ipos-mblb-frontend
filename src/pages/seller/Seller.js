import { useState } from "react";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai";
import Pagination from "../../components/utility/Pagination";
import SellerModal from "../../components/seller/SellerModal";
import Layout from "../../components/layouts/Layout";
import { Link } from "react-router-dom";
import useFetch from "../../services/useFetch";
import Loading from "../../components/utility/Loading";
import Error from "../../components/utility/Error";
import Limit from "../../components/utility/Limit";
import deleteData from "../../services/deleteData";
const Seller = () => {

    const [showSellerModal, setShowSellerModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState('');
    const offset = (page - 1) * limit;
  
    const [idSeller, setIdSeller] = useState(0);
    const [changes, setChanges] = useState(0);
  
    const {data, isLoading, error} = useFetch(`/sellers?limit=${limit}&offset=${offset}&keyword=${keyword}`, changes);

    const handleDelete = (id) => {
        deleteData(`/sellers/${id}`)
        .then(res => {
          console.log(res);
          setChanges(current => current + 1)
        })
      }

    return (
        <>
            <Layout>
                <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                    <h1 className="text-2xl py-3 font-semibold">Data Seller</h1>
                    <div className="bg-white h-fit px-3 overflow-x-auto">
                        <div className="flex justify-end gap-5 py-3">
                            <button onClick={() => setShowSellerModal(true)} className="py-1 px-2 bg-button rounded text-white">+ Tambah Seller</button>
                        </div>
                            {isLoading && <Loading />}
                        <hr />
                        <Limit setLimit={setLimit} limit={limit} setPage={setPage} setKeyword={setKeyword} />

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
                                                {error ?  
                                                        <tr>
                                                            <td><Error error={"Data Tidak Ditemukan"} /></td>
                                                        </tr> 
                                                        
                                                        :
                                                    
                                                    data?.seller.map((item, i) => (
                                                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                {i + 1 + offset}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.company}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.phone}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.address}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.district}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.emali}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.pic_name}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.pic_phone}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.npwp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.ktp}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.no_iup}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.valid_period}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.description}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                {item.status ? <p>Aktif</p> : <p>Non Aktif</p>}
                                                            </td>
                                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                <div className="flex gap-3">
                                                                    <Link to={`/penjual/${item.id}`}><AiOutlineUserAdd /></Link>
                                                                    <button onClick={() => {setIdSeller(item.id); setShowSellerModal(true)}} className="text-button"><FiEdit /></button>
                                                                    <button onClick={() => handleDelete(item.id)} className="text-nonActive"><MdOutlineDelete /></button>
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
                            totalData={data?.total}
                        />
                    
                    </div>
                </div>
                <SellerModal 
                    showSellerModal={showSellerModal} 
                    setShowSellerModal={setShowSellerModal}
                    idSeller={idSeller}
                    setIdSeller={setIdSeller}
                    setChanges={setChanges} 
                />
            </Layout>
        </> 
     );
}
 
export default Seller;