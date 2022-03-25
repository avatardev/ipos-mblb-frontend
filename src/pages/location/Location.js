import location from "./location.json";
import Layout from "../../components/layouts/Layout";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";

const Location = () => {

    return ( 
        <>
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <div className="flex items-center gap-2 justify-between mr-10">
                    <h1 className="text-xl py-3 font-semibold">Data Lokasi</h1>
                    <button className="py-1 px-2 bg-button rounded text-white h-10">+ Tambah Lokasi</button>
                </div>
                <div className="grid sm:grid-cols-5 gap-2">
                    {location.map(item => (
                        <div className="bg-white rounded grid justify-center items-center h-32 shadow-md shadow-primary" key={item.no}>
                            <div className="w-32 h-5/6">
                                <h1 className="text-xl text-center font-semibold">{item.location}</h1>
                            </div>
                            <div className="flex gap-5 justify-end items-end h-min py-3 w-full">
                                <FiEdit />
                                <MdOutlineDelete />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Layout>
        </> 
     );
}
 
export default Location;