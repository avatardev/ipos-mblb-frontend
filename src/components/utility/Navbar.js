import React, { useState } from "react";
import { IoExitOutline, IoReorderThreeOutline } from "react-icons/io5";


export default function Navbar(props) {
  const [showLogout, setShowLogout] = useState("hidden");

  const buttonLogoutHandler = () => {
    showLogout === "hidden" ? setShowLogout("block") : setShowLogout("hidden");
  };
  return (
    <div className="w-full flex justify-between bg-white min-h-sm p-[16px]">
      <button className="text-lg p-2 rounded-full" onClick={props.sidebarHandler}>
      <IoReorderThreeOutline />
      </button>
      <div className="flex justify-end gap-5 items-center relative">
        <button
          className="flex items-center gap-3 border-l pl-5 border-secondary"
          onClick={buttonLogoutHandler}
        >
          <p className="text-primary text-sm">Hi, Avatar 123</p>
          <div className="w-[42px] h-[42px] bg-primary rounded-full"></div>
        </button>
        <div
          className={`bg-white shadow-lg py-2 px-4 top-[64px] absolute text-red rounded-md ${showLogout}`}
        >
          <button className="flex items-center gap-1">
            <IoExitOutline />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
