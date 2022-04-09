
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
          <div className="px-5 pb-3 w-full overflow-hidden">
            <div className="flex items-center gap-2 justify-between mr-10">
              <h1 className="text-xl font-medium pt-[32px] pb-[24px]">
                Data Lokasi
              </h1>
              <button
                onClick={() => setShowLocationModal(true)}
                className="py-1 px-2 bg-button rounded text-white "
              >
                + Tambah Lokasi
              </button>
            </div>
            {isLoading && <Loading />}
            <div className="grid sm:grid-cols-5 gap-3">
              {error ? (
                <tr>
                  <td>
                    <Error error={"Data Tidak Ditemukan"} />
                  </td>
                </tr>
              ) : (
                data?.location.map((item) => (
                  <div
                    className="bg-white rounded-lg flex flex-col justify-center items-center py-3 px-5 shadow-md  gap-5"
                    key={item.id}
                  >
                    <div className="w-40 py-2">
                      <h1 className="text-xl text-center font-semibold">
                        {item.location_name}
                      </h1>
                    </div>
                    <div className="flex gap-5 justify-center items-center h-12 py-3 w-full ">
                      <FiEdit
                        className="text-white bg-warning text-lg p-[4px] rounded cursor-pointer"
                        onClick={() => {
                          setIdLocation(item.id);
                          setShowLocationModal(true);
                        }}
                      />
                      <MdOutlineDelete
                        className="text-white bg-red text-lg p-[4px] rounded cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                ))
              )}
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