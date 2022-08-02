import React from 'react';
import './style.css';

export default function LabelComp(props) {
  // eslint-disable-next-line react/prop-types
  const { text, forinput } = props;

  return (
    <>
      <label className="lbl" htmlFor={forinput}>
        <b>
          {text} <br />
        </b>
      </label>
    </>
  );
}
