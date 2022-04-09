import React from "react";

export default function Logo(props) {
  let h = props.h != null ? props.h : "40px";
  return (
    <div style={{ height: h }}>
      <img src={props.img} className="h-full" />
    </div>
  );
}
