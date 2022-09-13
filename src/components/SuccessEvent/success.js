import React from 'react';
import './style.css';
import success from '../../assets/success2.png';

export default function SuccessEvent() {
  const redirectEvent = () => {
    window.location.replace('/answers');
  };
  return (
    <>
      <div className="success">
        <div className="poparea">
          <img alt="successImage" className="successPNG" src={success}></img>
          <p className="text">SUCCESS</p>
          <button onClick={redirectEvent} className="continueButton">
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
}
