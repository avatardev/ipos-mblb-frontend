import { Navigate, Outlet } from "react-router-dom";

const Authoize = () => {
    const role_name = localStorage.getItem("role_name");
    return role_name === "Admin" ? <Outlet /> : <Navigate to={'/'} />
}
 
export default Authoize;