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
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 ml-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500':
            !errorMsg,
          'bg-red-50 border border-red-500 text-red-600 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 w-60 ml-24 text-center dark:bg-gray-700 focus:border-red-500 block  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
            errorMsg,
        })}
      />

      {errorMsg && (
        <span className="errMsg">
          <b> {errorMsg}</b>
          <br /> <br />
        </span>
      )}
    </>
  );
}

export default InputQuestion;
