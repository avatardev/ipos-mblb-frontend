import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postData from "../../services/postData";
import Logo from "../../components/elements/Logo";
import BPDLogo from "../../assets/images/BPD.png";
import KarangasemLogo from "../../assets/images/karangasem.png";

const Login = () => {
    const [username, setUsername] = useState('avatar123');
    const [password, setPassword] = useState('avatar123');
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
        const body = {
            username,
            password
          }
         postData(`/auth`, body)
          .then(res => {
            console.log(res.data);
            localStorage.setItem("access_token", `${res.data.access_token}`);
            localStorage.setItem("refresh_token", `${res.data.refresh_token}`);
            localStorage.setItem("profile_pic", `https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg`);
            localStorage.setItem("username", `${res.data.username}`);
            localStorage.setItem("role_name", `${res.data.role_name}`);
            navigate('/produk/master')
          })
    }

    return ( 
        <>
        {/* <input className="border" type={"text"} onChange={(e) => setUsername(e.target.value)} />
        <input className="border" type={"text"} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Submit</button> */}
        <div className="flex items-center justify-center min-h-screen bg-secondary">
              <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg h-[50vh] w-[70vh]  grid justify-center">
              <div className="w-full flex justify-between items-center gap-5">
                <Logo img={KarangasemLogo} />
                <h1 className="text-xl font-semibold hidden lg:block">IPOS MBLB</h1>
                <Logo img={BPDLogo} />
              </div>
                  <form onSubmit={handleLogin}>
                      <div className="mt-4">
                          <div>
                              <label className="block text-xl">Username</label>
                                      <input value={"avatar123"} type="text" onChange={(e) => setUsername(e.target.value)}
                                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                      <span className="text-xs tracking-wide text-red-600">Username field is required </span>
                          </div>
                          <div className="mt-4">
                              <label className="block text-xl">Password</label>
                                      <input value={"avatar123"} type="password" onChange={(e) => setPassword(e.target.value)}
                                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                          </div>
                          <div className="flex items-baseline justify-between">
                              <button className="px-6 py-2 mt-4 bg-button bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        </>
     );
}
 
export default Login;