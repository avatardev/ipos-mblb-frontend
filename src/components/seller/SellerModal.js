import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import putData from "../../services/putData";

export default function SellerModal({
  showSellerModal,
  setShowSellerModal,
  idSeller,
  setIdSeller,
  setChanges,
}) {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [emali, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pic_name, setPic_name] = useState("");
  const [pic_phone, setPic_phone] = useState("");
  const [npwp, setNpwp] = useState("");
  const [ktp, setKtp] = useState("");
  const [no_iup, setNo_iup] = useState("");
  const [valid_period, setValid_period] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (idSeller) {
      fetchData(`/sellers/${idSeller}`).then((res) => {
        setCompany(res.data.company);
        setAddress(res.data.address);
        setDistrict(res.data.district);
        setEmail(res.data.emali);
        setPhone(res.data.phone);
        setPic_name(res.data.pic_name);
        setPic_phone(res.data.phone);
        setNpwp(res.data.npwp);
        setKtp(res.data.ktp);
        setNo_iup(res.data.no_iup);
        setValid_period(res.data.valid_period);
        setDescription(res.data.description);
        setStatus(res.data.status);
      });
    }
  }, [idSeller]);

  const handleSubmitSeller = () => {
    if (
      company === "" ||
      emali === "" ||
      phone === "" ||
      no_iup === "" ||
      npwp === ""
    ) {
      alert("Form pendaftaran tidak boleh kosong!");
      return 0;
    }

    const body = {
      company,
      address,
      district,
      emali,
      phone,
      pic_name,
      pic_phone,
      npwp,
      ktp,
      no_iup,
      valid_period,
      description,
      status,
    };
    if (!idSeller) {
      postData("/sellers", body).then(() => {
        setChanges((current) => current + 1);
        alert("Data Berhasil Ditambahkan!");
      });
    } else {
      putData(`/sellers/${idSeller}`, body).then(() => {
        setChanges((current) => current + 1);
        alert("Data Berhasil Ditambahkan!");
      });
    }
    handleClearInput();
    // setChanges(current => current + 1)
  };

  const handleClearInput = () => {
    setShowSellerModal(false);
    setIdSeller(0);
    setCompany("");
    setAddress("");
    setDistrict("");
    setEmail("");
    setPhone("");
    setPic_name("");
    setPic_phone("");
    setNpwp("");
    setKtp("");
    setNo_iup("");
    setValid_period("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      {showSellerModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-30">
            <div className="relative w-auto my-6 sm:pt-32 pt-[100vh] mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold mt-1">Form Seller</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClearInput}
                  >
                    <span className="text-primary">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="md:w-[50vw] w-[90vw]">
                  <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <div className="sm:flex gap-10 items-center">
                      <div className="w-full">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="company"
                          >
                            Perusahaan
                          </label>
                          <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="company"
                            type="text"
                            placeholder="PT. MBLB Karangasem"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="telp"
                          >
                            Telp
                          </label>
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="telp"
                            type="number"
                            placeholder="08123XX"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="address"
                          >
                            Alamat
                          </label>
                          <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="address"
                            type="text"
                            placeholder="Jl. Raya Gilimanuk No. 32"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="district"
                          >
                            Kecamatan
                          </label>
                          <input
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="disctrict"
                            type="text"
                            placeholder="Rendang"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            value={emali}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="email"
                            type="email"
                            placeholder="user@email.com"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="pic"
                          >
                            Pic
                          </label>
                          <input
                            value={pic_name}
                            onChange={(e) => setPic_name(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="pic"
                            type="text"
                            placeholder="I Gede PIC"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="pic_phone"
                          >
                            Telp Pic
                          </label>
                          <input
                            value={pic_phone}
                            onChange={(e) => setPic_phone(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="pic_phone"
                            type="text"
                            placeholder="08123XX"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="npwp"
                          >
                            NPWP
                          </label>
                          <input
                            value={npwp}
                            onChange={(e) => setNpwp(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="npwp"
                            type="number"
                            placeholder="2855721XXX"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="ktp"
                          >
                            KTP
                          </label>
                          <input
                            value={ktp}
                            onChange={(e) => setKtp(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="ktp"
                            type="text"
                            placeholder="51030327XXX"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="iup"
                          >
                            No IUP
                          </label>
                          <input
                            value={no_iup}
                            onChange={(e) => setNo_iup(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="iup"
                            type="text"
                            placeholder="2855721XXX"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="valid_period"
                          >
                            Masa Berlaku
                          </label>
                          <input
                            value={valid_period}
                            onChange={(e) => setValid_period(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            id="valid_period"
                            type="date"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="desc"
                          >
                            Keterangan
                          </label>
                          <textarea
                            id="desc"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border border-gray focus:border-primary focus:outline-none w-full rounded py-2 px-3"
                            placeholder="PT. MBLB Merupakan..."
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
                    onClick={handleSubmitSeller}
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
