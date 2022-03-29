import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";
import useFetch from "../../services/useFetch";

export default function ProductModal({showProductModal, setShowProductModal, IdProduct, setIdProduct, setChanges}) {

    const [category_id, setCategory_id] = useState(1);
    const [name, setName] = useState('');
    const [price_m3, setPrice_m3] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);

    const {data} = useFetch(`/products/categories`);

    useEffect(() => {
      if (IdProduct) {
        fetchData(`/products/${IdProduct}`)
        .then(res => {
          setCategory_id(res.data.category_id);
          setName(res.data.name);
          setPrice_m3(res.data.price_m3);
          setDescription(res.data.description);
          setStatus(res.data.status);
        })
      }
    }, [IdProduct])


    const handleSubmitCategory = () => {
      console.log(category_id, name, price_m3, description, status);
      const body = {
        category_id: parseInt(category_id), 
        name, 
        price_m3: parseInt(price_m3), 
        description, 
        status
      }
      if (!IdProduct) {
        postData('/products', body)
      .then(setChanges(current => current + 1))
      } else {
        putData(`/products/${IdProduct}`, body)
        .then(setChanges(current => current + 1))
      }
      handleClearInput();
      // setChanges(current => current + 1)
    }

    const handleClearInput = () => {
      setShowProductModal(false); 
      setIdProduct(0);
      setCategory_id(1);
      setName('');
      setPrice_m3(0);
      setDescription('');
      setStatus(false);
    }
  
    return (
      <>
        {showProductModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30"
            >
              <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold mt-1">
                      Tambah Produk
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
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex gap-10 items-center">
                            <div className="w-full">
                                <div className="mb-4">
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                       Kategori Produk
                                  </label>
                                <select
                                    onChange={(e) => setCategory_id(e.target.value)} value={category_id}
                                    className="border-2"
                                  >
                                    {data?.category.map(item => (
                                      <option key={item.id} value={item.id}>{item.category_name}</option>
                                    ))}
                                </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Nama Produk
                                    </label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Harga Standar M2
                                    </label>
                                    <input onChange={(e) => setPrice_m3(e.target.value)} value={price_m3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Keterangan
                                    </label>
                                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                      {description}
                                    </textarea>
                                </div>
                                <div className="mb-4">
                                    <input checked={status} onChange={(e) => setStatus(e.target.checked)} id="username" type="checkbox" />
                                    <label className="text-gray-700 text-sm font-bold mx-2" htmlFor="username">
                                    Aktif
                                    </label>
                                </div>
                            </div>
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
                      onClick={handleSubmitCategory}
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