
import Layout from "../../components/layouts/Layout";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDelete} from "react-icons/md";
import { useState } from "react";
import useFetch from "../../services/useFetch";
import LocationModal from "../../components/location/LocationModal";
import deleteData from "../../services/deleteData";
import Loading from "../../components/utility/Loading";
import Error from "../../components/utility/Error";

const Location = () => {

    const [showLocationModal, setShowLocationModal] = useState(false);

    const [idLocation, setIdLocation] = useState(0);
    const [changes, setChanges] = useState(0);

    const {data, isLoading, error} = useFetch(`/locations`, changes);

    const handleDelete = (id) => {
        deleteData(`/locations/${id}`)
        .then(res => {
          console.log(res);
          setChanges(current => current + 1)
        })
      }

    return ( 
        <>
        <Layout>
            <div className="bg-secondary pl-5 pr-2 pb-3 w-[84vw]">
                <div className="flex items-center gap-2 justify-between mr-10">
                    <h1 className="text-xl py-3 font-semibold">Data Lokasi</h1>
                    <button onClick={() => setShowLocationModal(true)} className="py-1 px-2 bg-button rounded text-white h-10">+ Tambah Lokasi</button>
                </div>
                {isLoading && <Loading />}
                <div className="grid sm:grid-cols-5 gap-2">
                    {error ?  
                        <tr>
                            <td><Error error={"Data Tidak Ditemukan"} /></td>
                        </tr> 
                        
                        :
                    
                    data?.location.map(item => (
                        <div className="bg-white rounded grid justify-center items-center h-32  shadow-md shadow-primary" key={item.id}>
                            <div className="w-40 py-2">
                                <h1 className="text-xl text-center font-semibold">{item.location_name}</h1>
                            </div>
                            <div className="flex gap-5 justify-end items-end h-12 py-3 w-full">
                                <FiEdit onClick={() => {setIdLocation(item.id); setShowLocationModal(true)}} />
                                <MdOutlineDelete onClick={() => handleDelete(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <LocationModal
                showLocationModal={showLocationModal}
                setShowLocationModal={setShowLocationModal}
                idLocation={idLocation}
                setIdLocation={setIdLocation}
                setChanges={setChanges}
            />
            </Layout>
        </> 
     );
}
 
export default Location;