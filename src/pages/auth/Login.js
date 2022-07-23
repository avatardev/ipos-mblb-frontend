import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postData from "../../services/postData";
import Logo from "../../components/elements/Logo";
import BPDLogo from "../../assets/images/BPD.png";
import KarangasemLogo from "../../assets/images/karangasem.png";
import IposLogo from "../../assets/images/ipos.png";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    postData(`/auth`, body)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("access_token", `${res.data.access_token}`);
          localStorage.setItem("refresh_token", `${res.data.refresh_token}`);
          localStorage.setItem(
            "profile_pic",
            `https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg`
          );
          localStorage.setItem("username", `${res.data.username}`);
          localStorage.setItem("role_name", `${res.data.role_name}`);
          navigate("/dashboard");
        } else {
          setErrMessage(res.error.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray w-full min-h-screen flex justify-center items-center">
      <div className="bg-button p-3 rounded-xl w-96">
        <div className="w-full flex justify-center items-center gap-5 py-3">
          <Logo img={KarangasemLogo} h={"60px"} />
          <Logo img={BPDLogo} h={"60px"} />
          <img src={IposLogo} className="h-[60px]" alt="iposlogo" />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-xl text-center font-medium py-3">Login</h1>
          {errMessage && (
            <h1 className="text-center font-semibold bg-red mb-2 rounded">
              {errMessage}
            </h1>
          )}
          <form onSubmit={handleLogin}>
            <div>
              <div>
                <label className="block text-md font-medium">Username</label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md border-gray focus:outline-none focus:ring-1 focus:ring-button"
                />
              </div>
              <div className="mt-4">
                <label className="block text-md font-medium">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md border-gray focus:outline-none focus:ring-1 focus:ring-button"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 bg-button rounded-lg text-white">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
