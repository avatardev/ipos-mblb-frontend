import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";

export default function AdminUserModal({showLocationModal, setShowLocationModal, idLocation, setIdLocation, setChanges}) {

    const [location_name, setLocation_name] = useState('');

    useEffect(() => {
      if (idLocation) {
        fetchData(`/locations/${idLocation}`)
        .then(res => {
          setLocation_name(res.data.location_name);
        })
      }
    }, [idLocation])

    const handleSubmitLocation = () => {
          const body = {
            location_name
          }
          if (!idLocation) {
            postData('/locations', body)
          .then(setChanges(current => current + 1))
          } else {
            putData(`/locations/${idLocation}`, body)
            .then(setChanges(current => current + 1))
          }
          handleClearInput();
    }

    const handleClearInput = () => {
      setShowLocationModal(false); 
      setIdLocation(0);
      setLocation_name('');
    }
    
  
    return (
      <>
        {showLocationModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold mt-1">
                      Tambah User Admin
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={handleClearInput}
                    >
                      <span className="text-primary">x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="md:w-[25vw] w-[90vw]">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Nama Lokasi
                        </label>
                        <input value={location_name} onChange={(e) => setLocation_name(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClearInput}
                    >
                      Tutup
                    </button>
                    <button
                      className="bg-button text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmitLocation}
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }