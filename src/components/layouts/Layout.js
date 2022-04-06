import React, { useState, useEffect } from "react";
import Navbar from "../utility/Navbar";
import Sidebar from "../utility/Sidebar";

export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState("show");

  return (
    <div className="flex w-full bg-primary">
      <Sidebar condition={showSidebar} />
      <div className="bg-tableOdd w-full overflow-hidden">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div>{props.children}</div>
      </div>
    </div>
  );
}
