import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function MenuItem(props) {
  const location = window.location.pathname;
  const splitPath = location.split("/");
  console.log(splitPath[1]);
  const pathParent = splitPath[1];
  const dropdownCondition = pathParent === props.pathParent ? "collapse" : "";
  const [dropdown, setDropdown] = useState(dropdownCondition);
  const dropdownHandler = () => {
    dropdown === "collapse" ? setDropdown("") : setDropdown("collapse");
  };
  if (props.isDropdown) {
    return (
      <div
        className={`mb-5 ${
          pathParent === props.pathParent ? "text-primary" : "text-secondary"
        }`}
      >
        <div
          className="flex justify-between text-lg cursor-pointer "
          onClick={dropdownHandler}
        >
          <div className="flex items-center gap-2">
            <ion-icon name={props.icon}></ion-icon>
            <p className="text-base">{props.name}</p>
          </div>
          <div
            className={` ${
              dropdown == "collapse" ? "rotate-90" : "rotate-0"
            } transition-transform`}
          >
            <ion-icon name="chevron-forward-outline" size="xl"></ion-icon>
          </div>
        </div>
        <div
          className={`transition-all ${
            dropdown === "collapse" ? "" : "hidden"
          } flex mt-3`}
        >
          <div className="border-l ml-2">{props.children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`mb-5  ${
          location === props.href ? "text-primary" : "text-secondary"
        }`}
      >
        <Link to={`${props.href}`}>
          <div className="flex items-center gap-2  text-lg cursor-pointer">
            <ion-icon name={props.icon}></ion-icon>
            <p className="text-base">{props.name}</p>
          </div>
        </Link>
      </div>
    );
  }
}
