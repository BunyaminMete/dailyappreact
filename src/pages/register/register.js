import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import InputQuestion from '../../components/Input/input';
import hubtext from '../../assets/logo.svg';
import LabelComp from '../../components/Label/label';
import RegisterButton from '../../components/Button/Submit/register';
import axios from 'axios';

const RegisterArea = () => {
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    name: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    email: '',
    name: '',
    password: '',
  });

  const baseURL = process.env.REACT_APP_UNSPLASH_URL;

  const onChange = (event) => {
    const { id, value } = event.target;

    setUserInfo({
      ...userInfo,
      [id]: value,
    });

    setErrors({
      email: '',
      name: '',
      password: '',
    });
  };

  const SubmitEvent = (event) => {
    event.preventDefault();
    const { email, name, password } = userInfo;
    if (!userInfo.email || !userInfo.name || !userInfo.password) {
      //boşsa
      return setErrors({
        email: !email && 'You have to enter your email.',
        name: !name && 'You have to enter your name.',
        password: !password && 'You have to enter your password',
      });
    }

    return axios
      .post(`${baseURL}auth/register`, userInfo)
      .then((response) => {
        console.log(response);
        console.log(response.data.keyValue.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
      </Helmet>
      <div className="registerarea">
        <p className="hubarea">
          <img alt="hubtext" className="hubtext" src={hubtext}></img>
        </p>
        <br />
        <div className="required-informations">
          <LabelComp
            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1"
            text="Email Address"
          ></LabelComp>
          <InputQuestion id="email" inputFunc={onChange} className="inputs" errorMsg={errors.email} />
          <br />
          <LabelComp text="Full Name"></LabelComp>
          <InputQuestion id="name" inputFunc={onChange} className="inputs" errorMsg={errors.name} />
          <br />
          <LabelComp text="Password"></LabelComp>
          <InputQuestion id="password" inputFunc={onChange} className="inputs" errorMsg={errors.password} />
          <br />
          <RegisterButton text="REGISTER" buttonClick={SubmitEvent} />
          <br />
          <p className="linkarea">
            Already have an account &nbsp;
            <a className="log-link" href="/login">
              Log-In
            </a>
          </p>
        </div>
      </div>
      */
    </>
  );
};

export default RegisterArea;
