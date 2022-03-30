import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import ReportMenu from "../../components/utility/ReportMenu";
import fetchReport from "../../services/fetchReport";
import useFetch from "../../services/useFetch";
const Order = () => {
    const [changes, setChanges] = useState(0);
  
    const {data, isLoading, error} = useFetch(`/buyers`, changes);
    
    
    const handleDownloadFile = () => {
        fetchReport('/orders/report/generateDetail?startDate=2020-01-01&endDate=2030-12-31');
    }

    return ( 
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <h1 className="text-xl py-3">Data Transaksi</h1>
                <div className="bg-white h-fit px-3 overflow-x-auto">
                    <ReportMenu handleDownloadFile={handleDownloadFile} />
                <hr />
                {isLoading && <Loading />}


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
                                    Tgl Transaksi
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Penjual
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Pembeli
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Pembayaran
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
                                    Produk
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Discount
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
                                    Harga
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                error ?  
                                <tr>
                                    <td><Error error={"Data Tidak Ditemukan"} /></td>
                                </tr>
                                :
                                data?.buyer.map((item, i) => (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                    {i + 1}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                    {item.vehicle_plate}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.category}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.company}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.phone}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.status ? <p>Aktif</p> : <p>Non Aktif</p>}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.address}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.email}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.pic_name}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.pic_phone}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    {item.description}
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
                </div>
            </div>
        </Layout>
     );
}
 
export default Order;