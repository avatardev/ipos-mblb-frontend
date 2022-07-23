import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";
import useFetch from "../../services/useFetch";

export default function BuyerModal({
  showBuyerModal,
  setShowBuyerModal,
  idBuyer,
  setIdBuyer,
  setChanges,
}) {
  const [vehicle_plate, setVehicle_plate] = useState("");
  const [category_id, setCategory_id] = useState(1);
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pic_name, setPic_name] = useState("");
  const [pic_phone, setPic_phone] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);

  const { data } = useFetch(`/buyers/categories`);

  useEffect(() => {
    if (data) {
      console.log(data.category[0].id);
      setCategory_id(data.category[0].id);
    }
  }, [data]);

  useEffect(() => {
    if (idBuyer) {
      fetchData(`/buyers/${idBuyer}`).then((res) => {
        console.log(res);
        setVehicle_plate(res.data.vehicle_plate);
        setCategory_id(res.data.category_id);
        setCompany(res.data.company);
        setPhone(res.data.phone);
        setAddress(res.data.address);
        setEmail(res.data.email);
        setPic_name(res.data.pic_name);
        setPic_phone(res.data.pic_phone);
        setDescription(res.data.description);
        setStatus(res.data.status);
      });
    }
  }, [idBuyer]);

  const handleSubmitBuyer = () => {
    if (
      vehicle_plate === "" ||
      company === "" ||
      phone === "" ||
      pic_name === "" ||
      description === ""
    ) {
      alert("Form pendaftaran tidak boleh kosong!");
      return 0;
    }

    const body = {
      vehicle_plate,
      category_id: parseInt(category_id),
      company,
      phone,
      address,
      email,
      pic_name,
      pic_phone,
      description,
      status,
    };
    if (!idBuyer) {
      postData("/buyers", body).then(() => {
        setChanges((current) => current + 1);
        alert("Data Berhasil Ditambahkan!");
      });
    } else {
      putData(`/buyers/${idBuyer}`, body).then(() => {
        setChanges((current) => current + 1);
        alert("Data Berhasil Ditambahkan!");
      });
    }
    handleClearInput();
    //setChanges(current => current + 1)
  };

  const handleClearInput = () => {
    setShowBuyerModal(false);
    setIdBuyer(0);
    setVehicle_plate("");
    setCategory_id(1);
    setCompany("");
    setPhone("");
    setAddress("");
    setEmail("");
    setPic_name("");
    setPic_phone("");
    setDescription("");
    setStatus(true);
  };

  return (
    <>
      {showBuyerModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold mt-1">Form Pembeli</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClearInput}
                  >
                    <span className="text-primary">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="md:w-[50vw] w-[90vw]">
                  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex gap-10 items-center">
                      <div className="w-full">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Plat
                          </label>
                          <input
                            value={vehicle_plate}
                            onChange={(e) => setVehicle_plate(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="DK 1234 XX"
                            id="username"
                            type="text"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Perusahaan
                          </label>
                          <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="Nama Perusahaan"
                            id="username"
                            type="text"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Telp
                          </label>
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="08123XXX"
                            id="username"
                            type="number"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Alamat
                          </label>
                          <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="Jl. Raya Gilimanuk, No. 21"
                            id="username"
                            type="text"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="user@email.com"
                            id="username"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Kategori Pembeli
                          </label>
                          <select
                            onChange={(e) => setCategory_id(e.target.value)}
                            value={category_id}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                          >
                            {data?.category.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            PIC
                          </label>
                          <input
                            value={pic_name}
                            onChange={(e) => setPic_name(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="Nama PIC"
                            id="username"
                            type="text"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Telp PIC
                          </label>
                          <input
                            value={pic_phone}
                            onChange={(e) => setPic_phone(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="08123XXX"
                            id="username"
                            type="number"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Keterangan
                          </label>
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="Masukan Keterangan"
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
                            className="text-gray-700 text-sm font-bold mx-2"
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
                    onClick={handleSubmitBuyer}
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
