import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import useFetch from "../../services/useFetch";
import {FaTruck} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {CgNotes} from "react-icons/cg";
import {GoLaw} from "react-icons/go";


const Dashboard = () => {

    const {data, isLoading, error} = useFetch(`/dashboard/statistics`);
    return ( 
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <div className="my-2">
                    <h1 className="text-xl py-3 font-semibold">Dashboard</h1>
                </div>
                {isLoading && <Loading />}
                <div className="grid sm:grid-cols-5 gap-2">
                    {error ?  
                        <tr>
                            <td><Error error={"Data Tidak Ditemukan"} /></td>
                        </tr> 
                        
                        :
                        <>
                            <div className="bg-white rounded flex justify-between items-center h-32 px-5 shadow-md shadow-primary">
                                <div className="w-40 py-2">
                                    <h1>Jumlah Truk Terdaftar</h1>
                                    <h1 className="text-xl font-semibold">{data?.buyer_count}</h1>
                                </div>
                                <div>
                                    <FaTruck className="text-[2.2rem]" />
                                </div>
                            </div>
                            <div className="bg-white rounded flex justify-between items-center h-32 px-5 shadow-md shadow-primary">
                                <div className="w-50 py-2">
                                    <h1>Jumlah Penjual Terdaftar</h1>
                                    <h1 className="text-xl font-semibold">{data?.seller_count}</h1>
                                </div>
                                <div>
                                    <BsPersonFill className="text-[2.2rem]" />
                                </div>
                            </div>
                            <div className="bg-white rounded flex justify-between items-center h-32 px-5 shadow-md shadow-primary">
                                <div className="w-40 py-2">
                                    <h1>Jumlah Transaksi</h1>
                                    <h1 className="text-xl font-semibold">{data?.trx_count}</h1>
                                </div>
                                <div>
                                    <CgNotes className="text-[2.2rem]" />
                                </div>
                            </div>
                            <div className="bg-white rounded flex justify-between items-center h-32 px-5 shadow-md shadow-primary">
                                <div className="w-40 py-2">
                                    <h1>Total Pajak</h1>
                                    <h1 className="text-xl font-semibold">Rp. {data?.tax_total}</h1>
                                </div>
                                <div>
                                    <GoLaw className="text-[2.2rem]" />
                                </div>
                            </div>
                            
                        </>
                        
                        }
                </div>
            </div>
        </Layout>
     );
}
 
export default Dashboard;