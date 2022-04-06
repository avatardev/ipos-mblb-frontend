import Layout from "../../components/layouts/Layout";
import Error from "../../components/utility/Error";
import Loading from "../../components/utility/Loading";
import useFetch from "../../services/useFetch";
import {FaTruck} from "react-icons/fa";
import { BsPersonFill, BsTruck } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { GoLaw } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Dashboard = () => {
  const { data, isLoading, error } = useFetch(`/dashboard/statistics`);
  return (
    <Layout>
      <div className=" px-5 pb-3 w-full overflow-hidden">
        <div className="my-2">
          <h1 className="text-xl font-medium pt-[32px] pb-[24px]">Dashboard</h1>
        </div>
        {isLoading && <Loading />}
        {/* <div className="grid sm:grid-cols-5 gap-2"> */}
        <div className="flex gap-3  flex-wrap ">
          {error ? (
            <tr>
              <td>
                <Error error={"Data Tidak Ditemukan"} />
              </td>
            </tr>
          ) : (
            <>
              <div className="bg-white rounded-lg flex justify-between items-center h-32 px-5 shadow-md  gap-5">
                <div className="w-full pr-2 py-2">
                  <h3>Total Truk Terdaftar</h3>
                  <h2 className="text-xl font-semibold">{data?.buyer_count}</h2>
                </div>
                <div>
                  <BsTruck className="text-[2.2rem]" />
                </div>
              </div>
              <div className="bg-white rounded-lg flex justify-between items-center h-32 px-5 shadow-md gap-5">
                <div className="w-50 py-2">
                  <h3>Total Penjual Terdaftar</h3>
                  <h2 className="text-xl font-semibold">
                    {data?.seller_count}
                  </h2>
                </div>
                <div>
                  <FiUser className="text-[2.2rem]" />
                </div>
              </div>
              <div className="bg-white rounded-lg flex justify-between items-center h-32 px-5 shadow-md gap-5">
                <div className="w-40 py-2">
                  <h3>Total Transaksi</h3>
                  <h2 className="text-xl font-semibold">{data?.trx_count}</h2>
                </div>
                <div>
                  <CgNotes className="text-[2.2rem]" />
                </div>
              </div>
              <div className="bg-white rounded-lg flex justify-between items-center h-32 px-5 shadow-md gap-5">
                <div className="w-40 py-2">
                  <h3>Total Pajak</h3>
                  <h2 className="text-xl font-semibold">
                    Rp. {data?.tax_total}
                  </h2>
                </div>
                <div>
                  <MdOutlineAttachMoney className="text-[2.2rem]" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
 
export default Dashboard;