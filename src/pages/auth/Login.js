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