import React from 'react';
import './style.css';
import tik from '../../assets/tik2.png';

const Hiddendiv = (props) => {
  // eslint-disable-next-line react/prop-types
  const { activeCheck } = props;
  return (
    <>
      {activeCheck && (
        <div className="afterLogin">
          <div className="afterLoginWindow">
            <img alt="successAnimation" className="tik" src={tik}></img>
            <span className="tik2">LOG-IN SUCCESSFUL</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Hiddendiv;
