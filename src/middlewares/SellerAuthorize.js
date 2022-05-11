import { Navigate, Outlet } from "react-router-dom";

const SellerAuthoize = () => {
    const role_name = localStorage.getItem("role_name");
    return role_name === "Admin" ? <Outlet /> : role_name === "Kasir" ? <Outlet /> : <Navigate to={'/'} />
}
 
export default SellerAuthoize;