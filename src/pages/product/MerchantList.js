import { Link } from "react-router-dom";
import Layout from "../../components/layouts/Layout";

import seller from "./sellerUser.json"
const MerchantList = () => {

    return (
        <>
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <h1 className="text-xl py-3 font-semibold">Seller</h1>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {seller.map(item => (
                        <Link to={`/produk/seller/${item.no}`} key={item.no}>
                            <div className="bg-white rounded px-2 py-2 shadow-primary shadow-md sm:h-32 flex justify-center items-center">
                                <div className="sm:w-32">
                                    <h1 className="text-xl font-semibold text-center">{item.corp}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            </Layout>
        </> 
     );
}
 
export default MerchantList;