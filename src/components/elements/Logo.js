import React from "react";

export default function Logo(props) {
  return (
    <div className=" w-[40px] h-[40px]">
      <img src={props.img} className="h-full" />
    </div>
  );
}
