import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";

export default function CategoryProductModal({showCategoryProductModal, setShowCategoryProductModal, idCategory, setIdCategory, setChanges}) {

  const [category_name, setCategory_name] = useState('');
  const [tax, setTax] = useState(0);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    console.log(idCategory);
    if (idCategory) {
      fetchData(`/products/categories/${idCategory}`)
      .then(res => {
        setCategory_name(res.data.category_name);
        setTax(res.data.tax);
        setStatus(res.data.status);
      })
    }
  }, [idCategory])

  const handleSubmitCategory = () => {
    const body = {
      category_name, 
      tax: parseInt(tax), 
      status
    }
    if (!idCategory) {
      postData('/products/categories', body)
    .then(res => console.log(res))
    } else {
      putData(`/products/categories/${idCategory}`, body)
      .then(res => console.log(res))
    }
    handleClearInput();
    setChanges(current => current + 1)
  }

  const handleClearInput = () => {
    setShowCategoryProductModal(false); 
    setIdCategory(0);
    setCategory_name('');
    setTax(0);
    setStatus(false);
  }

  return (
    <>
      {showCategoryProductModal ? (
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
                    Tambah Kategori
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCategoryProductModal(false)}
                  >
                    <span className="text-primary">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="md:w-[25vw] w-[90vw]">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Nama Kategori
                      </label>
                      <input value={category_name} onChange={(e) => setCategory_name(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama Kategori.." />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Pajak (%)
                      </label>
                      <input value={tax} onChange={(e) => setTax(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" />
                    </div>
                    <div className="mb-4">
                      <input checked={status} onChange={(e) => setStatus(e.target.checked)} className=""value={true} id="username" type="checkbox" />
                      <label className="text-gray-700 text-sm font-bold mx-2" htmlFor="username">
                        Aktif
                      </label>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowCategoryProductModal(false)}
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