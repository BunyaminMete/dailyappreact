import React from 'react';
import './style.css';

export default function LabelComp(props) {
  // eslint-disable-next-line react/prop-types
  const { text, forinput } = props;

  return (
    <>
      <label
        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-violet-600 bg-black-200 uppercase last:mr-0 mr-1"
        htmlFor={forinput}
      >
        <b>
          {text} <br />
        </b>
      </label>
    </>
  );
}
