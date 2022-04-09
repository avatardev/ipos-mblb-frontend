import React, { useState } from "react";
import { IoExitOutline, IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Logo from "../elements/Logo";
import BPDLogo from "../../assets/images/BPD.png";
import KarangasemLogo from "../../assets/images/karangasem.png";

export default function Navbar(props) {
  const [showLogout, setShowLogout] = useState("hidden");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const profile_pic = localStorage.getItem("profile_pic");

  const buttonLogoutHandler = () => {
    showLogout === "hidden" ? setShowLogout("block") : setShowLogout("hidden");
  };

  const handleLogout = () => {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    localStorage.setItem("profile_pic", "");
    localStorage.setItem("username", "");
    localStorage.setItem("role_name", "");
    navigate("/");
  };

  const sidebarHandler = () => {
    if (props.showSidebar === "hidden") {
      props.setShowSidebar("show");
    } else {
      props.setShowSidebar("hidden");
    }
  };

  return (
    <div className="w-full bg-white min-h-sm p-[16px]">
      <div className="flex justify-between items-center gap-5">
        <div className="flex">
          <button className="text-[32px] mr-[24px]" onClick={sidebarHandler}>
            <IoMenuOutline />
          </button>
          <div className="flex gap-2">
            <Logo img={KarangasemLogo} />
            <Logo img={BPDLogo} />
          </div>
        </div>
        <div className="flex justify-end gap-5 items-center relative">
          <button
            className="flex items-center gap-3 border-l pl-5 border-secondary"
            onClick={buttonLogoutHandler}
          >
            <p className="text-primary text-sm">Hi, {username}</p>
            <div className="w-[42px] h-[42px]">
              <img className="rounded-full" src={`${profile_pic}`} alt="user" />
            </div>
          </button>
          <div
            className={`bg-white shadow-lg py-2 px-4 top-[64px] absolute text-red rounded-md ${showLogout}`}
          >
            <button onClick={handleLogout} className="flex items-center gap-1">
              <IoExitOutline />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
