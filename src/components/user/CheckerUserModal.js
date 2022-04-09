import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";

export default function CheckerUserModal({showCheckerUserModal, setShowCheckerUserModal, idUserChecker, setIdUserChecker, setChanges}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
      if (idUserChecker) {
        fetchData(`/user/checkers/${idUserChecker}`)
        .then(res => {
          setUsername(res.data.username);
        })
      }
    }, [idUserChecker])

    const handleSubmitCheckerUser = () => {
      if (password === confirmPassword) {
        const body = {
          username,
          password
        }
        if (!idUserChecker) {
          postData('/user/checkers', body)
        .then(setChanges(current => current + 1))
        } else {
          putData(`/user/checkers/${idUserChecker}`, body)
          .then(setChanges(current => current + 1))
        }
        handleClearInput();
        //setChanges(current => current + 1)
    } else {
      console.log("password and confirm password unmatch");
    }
    }

    const handleClearInput = () => {
      setShowCheckerUserModal(false); 
      setIdUserChecker(0);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  
    return (
      <>
        {showCheckerUserModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold mt-1">
                      Tambah User Checker
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
                    <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Username
                        </label>
                        <input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                          type="text"
                          placeholder="Masukan Username"
                        />
                      </div>
                      {!idUserChecker && (
                        <>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Password
                            </label>
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              type="password"
                              placeholder="Masukan Password"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Confirm Password
                            </label>
                            <input
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                              type="password"
                              placeholder="Masukan Ulang Password"
                            />
                          </div>
                        </>
                      )}
                    </form>
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
                      onClick={handleSubmitCheckerUser}
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