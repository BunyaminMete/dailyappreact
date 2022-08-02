import React from 'react';
import './style.css';
export default function AddButton(props) {
  // eslint-disable-next-line react/prop-types
  const { addElement } = props; //props küçük harfle
  return (
    <>
      <button className="addvalue" onClick={addElement}>
        +
      </button>
    </>
  );
}
