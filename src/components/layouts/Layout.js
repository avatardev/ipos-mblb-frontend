import React, { useState } from "react";
import Navbar from "../utility/Navbar";
import Sidebar from "../utility/Sidebar";

export default function Layout(props) {
  let screenWidth = "show";

  if (window.screen.width < 600) {
    screenWidth = "hiden";
  }

  const [showSidebar, setShowSidebar] = useState(screenWidth);

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
