import React from 'react';
import './style.css';

export default function UpdateButton(props) {
  // eslint-disable-next-line react/prop-types
  const { buttonClick } = props;
  return (
    <div>
      <br />
      <button type="submit" onClick={buttonClick} value="update" className="updatebutton">
        UPDATE
      </button>
    </div>
  );
}
