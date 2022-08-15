import React from 'react';
import './style.css';
export default function AddButton(props) {
  // eslint-disable-next-line react/prop-types
  const { addElement } = props; //props küçük harfle
  return (
    <>
      <button
        className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 absolute ml-44"
        onClick={addElement}
      >
        +
      </button>
    </>
  );
}
