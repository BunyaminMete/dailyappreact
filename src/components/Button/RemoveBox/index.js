import React from "react";
import "./style.css";

export default function RemoveButton(props) {
  // eslint-disable-next-line react/prop-types
  const { rmbuttonClick, id } = props;
  return (
    <button
      value="delete"
      type="button"
      onClick={rmbuttonClick}
      className="rmbutton"
      id={id}
    >
      x
    </button>
  );
}
