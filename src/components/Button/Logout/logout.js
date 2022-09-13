import React from 'react';
import logoff from '../../../assets/logout.png';
import './style.css';

// eslint-disable-next-line react/prop-types
const Logout = ({ offEvent }) => {
  return (
    <button className="off">
      <img alt="logoff button" onClick={offEvent} src={logoff}></img>
    </button>
  );
};

export default Logout;
