import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteModal(props) {
  return (
    <>
      {props.showModalDelete ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" p-[24px] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <MdOutlineDelete
                  size={"42px"}
                  className="text-primary font-light"
                />
                {/*body*/}
                <div className="md:w-[25vw] w-[90vw]  text-primary">
                  <h2 className="font-medium text-xl">Apakah anda yakin?</h2>
                  <p className="font-light mt-4 text-grey900">
                    Data ini akan terhapus secara permanen dan tidak bisa
                    dikembalikan lagi.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center gap-5 justify-center p-3  border-solid border-gray rounded-b w-full">
                  <button
                    className="bg-gray text-grey900 active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModalDelete(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-red text-white active:bg-emerald-600 font-medium text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleDelete}
                  >
                    Hapus
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
