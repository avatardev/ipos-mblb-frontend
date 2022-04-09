import React from "react";

export default function Logo(props) {
  let h = props.h != null ? props.h : "40px";
  let w = props.h != null ? "auto" : "40px";
  return (
    <div style={{ height: h, width: w }}>
      <img src={props.img} className="h-full" />
    </div>
  );
}
