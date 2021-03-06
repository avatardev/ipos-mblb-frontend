import { useState } from "react";
import postImg from "../../services/postImg";

export default function ProductImgModal({showProductImgModal, setShowProductImgModal, IdProduct, setIdProduct, setChanges}) {


    const [file, setFile] = useState([]);

    const handleSubmit = () => {

      if (file.length === 0) {
        alert("Gampar tidak boleh kosong!");
        return 0;
      }

      const data = new FormData();
      data.append('img-data', file[0]);

      // console.log(data.get("img-data"));

      postImg(`/products/${IdProduct}/img`, data)
      .then(() => {
        setChanges(current => current + 1);
        alert("Data Berhasil Ditambahkan!");
      })

      handleClearInput();
      
    }

    const handleClearInput = () => {
      setShowProductImgModal(false); 
      setIdProduct(0);
      setFile([])
    }
  
    return (
      <>
        {showProductImgModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
              <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold mt-1">
                      Gambar
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={handleClearInput}
                    >
                      <span className="text-primary">x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="md:w-[50vw] w-[90vw]">
                    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                      <div className="flex gap-10 items-center">
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="name"
                            >
                              Gambar Produk
                            </label>
                            <input
                              onChange={(e) => setFile(e.target.files)}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              id="name"
                              placeholder="Masukan Nama Produk"
                              type="file"
                            />
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-gray rounded-b">
                    <button
                      className="text-red-500 background-transparent font-medium px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClearInput}
                    >
                      Tutup
                    </button>
                    <button
                      className="bg-button text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
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