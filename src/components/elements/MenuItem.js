import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function MenuItem(props) {
  const location = window.location.pathname;
  const splitPath = location.split("/");
  // console.log(splitPath[3]);
  const pathParent = splitPath[3];
  const dropdownCondition = pathParent === props.pathParent ? "collapse" : "";
  const [dropdown, setDropdown] = useState(dropdownCondition);
  const dropdownHandler = () => {
    dropdown === "collapse" ? setDropdown("") : setDropdown("collapse");
  };
  if (props.isDropdown) {
    return (
      <div
        className={`${dropdown === "collapse" ? "" : "mb-5"} ${
          pathParent === props.pathParent
            ? "font-medium text-white"
            : "font-normal text-gray"
        }`}
      >
        <div
          className="flex justify-between text-lg cursor-pointer "
          onClick={dropdownHandler}
        >
          <div className="flex items-center gap-2">
            {props.icon}
            <p className="text-base">{props.name}</p>
          </div>
          <div
            className={` ${
              dropdown === "collapse" ? "rotate-90" : "rotate-0"
            } transition-transform`}
          >
            <IoChevronForwardOutline />
          </div>
        </div>
        <div
          className={`transition-all ${
            dropdown === "collapse" ? "" : "hidden"
          } flex mt-3`}
        >
          <div className="border-l parentMenu pl-0 ">{props.children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`mb-5 ${
          location === "/mblb/dev2" + props.href
            ? "font-medium text-white"
            : "font-normal text-gray"
        }`}
      >
        <Link to={`${props.href}`}>
          <div className="flex items-center gap-2  text-lg cursor-pointer">
            {props.isChild ? "-" : ""}
            {props.icon}
            <p className="text-base">{props.name}</p>
          </div>
        </Link>
      </div>
    );
  }
}
