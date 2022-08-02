import React from "react";
import "./style.css";

export default function RegisterButton(props) {
  // eslint-disable-next-line react/prop-types
  const { buttonClick } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={buttonClick}
        value="Submit"
        className="log_in"
      >
        Log in
      </button>
    </div>
  );
}
