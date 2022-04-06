import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import putData from "../../services/putData";

export default function MerchantProductModal({showMerchantProductModal, setShowMerchantProductModal, IdProduct, setIdProduct, merchantId, setChanges}) {

    const [product_id, setProduct_id] = useState(1);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);

    useEffect(() => {
      if (IdProduct) {
        fetchData(`/sellers/${merchantId}/items/${IdProduct}`)
        .then(res => {
          setProduct_id(res.data.product_id);
          setPrice(res.data.price);
          setDescription(res.data.description);
          setStatus(res.data.status);
        })
      }
    }, [IdProduct, merchantId])


    const handleSubmitProduct = () => {
      const body = {
        product_id: parseInt(product_id), 
        price: parseInt(price), 
        description, 
        status
      }
      if (IdProduct) {
        putData(`/sellers/${merchantId}/items/${IdProduct}`, body)
        .then(setChanges(current => current + 1))
      }
      handleClearInput();
      // setChanges(current => current + 1)
    }

    const handleClearInput = () => {
      setShowMerchantProductModal(false); 
      setIdProduct(0);
      setProduct_id(1);
      setPrice(0);
      setDescription('');
      setStatus(false);
    }
  
    return (
      <>
        {showMerchantProductModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
              <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray rounded-t">
                    <h3 className="text-xl font-semibold mt-1">Ubah Produk</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={handleClearInput}
                    >
                      <span className="text-primary">x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="md:w-[40vw] w-[90vw]">
                    <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                      <div className=" gap-10 items-center">
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-medium mb-2"
                              htmlFor="username"
                            >
                              Harga
                            </label>
                            <input
                              onChange={(e) => setPrice(e.target.value)}
                              value={price}
                              className=" appearance-none border border-gray rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                              id="username"
                              type="number"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-medium mb-2"
                              htmlFor="username"
                            >
                              Keterangan
                            </label>
                            <textarea
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                              className=" appearance-none border border-gray rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                            >
                              {description}
                            </textarea>
                          </div>
                          <div className="mb-4">
                            <input
                              checked={status}
                              onChange={(e) => setStatus(e.target.checked)}
                              id="username"
                              type="checkbox"
                            />
                            <label
                              className="text-gray-700 text-sm font-normal mx-2"
                              htmlFor="username"
                            >
                              Aktif
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClearInput}
                    >
                      Tutup
                    </button>
                    <button
                      className="bg-button text-white font-medium text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmitProduct}
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