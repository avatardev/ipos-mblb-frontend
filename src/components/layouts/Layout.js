import React from "react";
import Navbar from "../utility/Navbar";
import Sidebar from "../utility/Sidebar";

export default function Layout(props) {
  return (
    <div className="flex w-full bg-primary">
      <Sidebar />
      <div className="bg-tableOdd w-full overflow-hidden">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
}
