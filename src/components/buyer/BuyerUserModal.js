import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";

export default function BuyerUserModal({showBuyerUserModal, setShowBuyerUserModal, idUserBuyer, setIdUserBuyer, corpId, setChanges}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (idUserBuyer) {
      fetchData(`/user/buyers/${idUserBuyer}`)
      .then(res => {
        setUsername(res.data.username);
      })
    }
  }, [idUserBuyer])

  const handleSubmitBuyerUser = () => {
      if (password === confirmPassword) {
        const body = {
          username,
          password,
          vehicle_plate: corpId,
        }
        if (!idUserBuyer) {
          postData('/user/buyers', body)
        .then(setChanges(current => current + 1))
        } else {
          putData(`/user/buyers/${idUserBuyer}`, body)
          .then(setChanges(current => current + 1))
        }
        handleClearInput();
        // setChanges(current => current + 1)
    } else {
      console.log("password and confirm password unmatch");
    }
  }

  const handleClearInput = () => {
    setShowBuyerUserModal(false); 
    setIdUserBuyer(0);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  }
  
    return (
      <>
        {showBuyerUserModal ? (
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
                        Username
                      </label>
                      <input value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username.." />
                    </div>
                    
                      <>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                          </label>
                          <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                          </label>
                          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" />
                        </div>
                      </>
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
                    onClick={handleSubmitBuyerUser}
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