import classNames from 'classnames';
import React from 'react';
import './style.css';
function InputQuestion(props) {
  // eslint-disable-next-line react/prop-types
  const { type, inputFunc, placeholder, id, errorMsg, eventKeyDown } = props;

  return (
    <>
      <input
        contentEditable
        autoComplete="on"
        type={type}
        onChange={inputFunc}
        placeholder={placeholder}
        id={id}
        error={errorMsg}
        onKeyDown={eventKeyDown}
        className={classNames({
          inputarea: !errorMsg,
          errorarea: errorMsg,
        })}
      />

      {errorMsg && (
        <span className="errMsg">
          <br />
          <b>{errorMsg}</b>
          <br /> <br />
        </span>
      )}
    </>
  );
}

export default InputQuestion;
