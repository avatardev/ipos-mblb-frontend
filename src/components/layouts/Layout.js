import React, {useState} from "react";
import Navbar from "../utility/Navbar";
import Sidebar from "../utility/Sidebar";

export default function Layout(props) {
const [sidebar, setSidebar] = useState("show");
const sidebarHandler = () => {
  if(sidebar === "show"){
    setSidebar("close");
    
  }else{
    setSidebar("show")
    
  }
}
  return (
    <div className="flex w-full bg-primary ">
      <Sidebar sidebarCondition={sidebar}/>
      <div className="bg-secondary w-full min-h-screen">
        <Navbar sidebarHandler={sidebarHandler}/>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
