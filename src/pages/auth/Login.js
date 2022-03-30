import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postData from "../../services/postData";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
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
        <input className="border" type={"text"} onChange={(e) => setUsername(e.target.value)} />
        <input className="border" type={"text"} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Submit</button>
        </>
     );
}
 
export default Login;