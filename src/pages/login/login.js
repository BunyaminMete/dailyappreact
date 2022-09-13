import React from 'react';
import Helmet from 'react-helmet';

import './style_login.css';
import { vercelAPI } from '../../api';

import RegisterButton from '../../components/Button/Submit/register';
import InputQuestion from '../../components/Input/input';
import Hiddendiv from '../../components/Director/director';
import LabelComp from '../../components/Label/label';

import hub from '../../assets/character.png';
import hubtext from '../../assets/logo.svg';

const isValidEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};

const isValidPassword = (password) => {
  const splitted_pw = password.toString().split('');
  return splitted_pw.length > 7 ? true : false;
};

export default function LoginPage() {
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    password: '',
  });

  const [isLogin, setIsLogin] = React.useState('');
  const [errors, setErrors] = React.useState({
    emailError: '',
    passwordError: '',
  });

  const setInfo = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    //id = email ,
    setUserInfo({
      ...userInfo,
      [id]: value,
    });

    setErrors({
      emailError: '',
      passwordError: '',
    });
  };

  async function showInfo() {
    const { email, password } = userInfo;

    console.log('Process Ongoing');
    const emailValidCheck = isValidEmail(email);
    const passValidCheck = isValidPassword(password);

    if (!email || !password || !emailValidCheck || !passValidCheck) {
      return setErrors({
        emailError:
          (!email && 'You have to enter email information !!') ||
          (!emailValidCheck && 'You entered invalid email address !'),
        passwordError:
          (!password && 'You have to enter password information !!') ||
          (!passValidCheck && 'Password length must be at least 8 !'),
      });
    }

    let redirectURL;
    await vercelAPI()
      .post('/auth/login', userInfo)

      .then((response) => {
        const whoIsIt = JSON.parse(response.config.data);
        console.log(whoIsIt);
        localStorage.setItem('Token', response.data.accessToken);
        console.log(localStorage);

        if (
          localStorage.length === 1 && whoIsIt.email === 'bunyamin@mete.com'
            ? (redirectURL = '/questionpanel')
            : (redirectURL = '/answers')
        ) {
          setIsLogin(true);
          setTimeout(() => {
            localStorage.setItem('email', whoIsIt.email);
            window.location.replace(redirectURL);
          }, 1200);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  const enterToLogIn = (e) => {
    if (e.keyCode === 13) {
      showInfo();
    }
    // ----- TO GET DATA WITH GET METHOD--------
    // TodoAPI()
    //   .get('/todos')
    //   .then((res) => {
    //     console.log(res.data[0]);
    //   });
    //   .catch((error) => {console.log(error)})
  };

  return (
    <>
      <div className="login">
        <p className="toregister">
          <a href="/user-register">REGISTER</a>
        </p>
        <img alt="hubpng" className="hubpng" src={hub}></img>
        <Helmet>
          <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
        </Helmet>
        <img alt="hubtext" className="hubtext" src={hubtext}></img>
        <br />
        <LabelComp text="User ID" forinput="email" />
        <div className="ml-3">
          <InputQuestion
            id="email"
            type="text"
            placeholder="Enter your email."
            inputFunc={setInfo}
            eventKeyDown={enterToLogIn}
            errorMsg={errors.emailError}
          />
        </div>
        <br /> <br />
        <LabelComp text="Password" forinput="password" />
        <div className="ml-3">
          <InputQuestion
            id="password"
            type="password"
            placeholder="Enter your password."
            inputFunc={setInfo}
            eventKeyDown={enterToLogIn}
            errorMsg={errors.passwordError}
          />
        </div>
        <br />
        <RegisterButton buttonClick={showInfo} text="Log-In" />
        <br />
      </div>
      <Hiddendiv activeCheck={isLogin} />
    </>
  );
}
