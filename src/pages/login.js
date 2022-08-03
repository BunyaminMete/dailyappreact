import React from 'react';
import Helmet from 'react-helmet';

import data from '../data.json';

import './style_login.css';

import RegisterButton from '../components/Button/Submit/register';
import InputQuestion from '../components/Input/input';
import Hiddendiv from '../components/Director/director';
import LabelComp from '../components/Label/label';

import hub from '../assets/character.png';
import hubtext from '../assets/logo.svg';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      userNameErr: '',
      passwordErr: '',
      isLogin: false,
    };
    this.enterToLogIn = this.enterToLogIn.bind(this);
  }

  setInfo = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    this.setState({ [id]: value, [`${id}Err`]: '' });
  };

  isValidEmail = (email) => {
    const pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
  };

  isValidPassword = (password) => {
    const splitted_pw = password.split('');
    return splitted_pw.length > 7 ? true : false;
  };

  sendToURL = (url) => {
    window.location.replace(url);
  };

  showInfo = () => {
    const { userName, password } = this.state;

    const emailValidCheck = this.isValidEmail(userName);
    const passValidCheck = this.isValidPassword(this.state.password);

    if (!userName || !password || !emailValidCheck || !passValidCheck) {
      return this.setState({
        userNameErr:
          (!userName && 'You have to enter username information !!') ||
          (!emailValidCheck && 'You entered invalid email address'),
        passwordErr:
          (!password && 'You have to enter password information !!') ||
          (!passValidCheck && 'Password length must be at least 8.'),
      });
    }

    const { login } = data;

    const filteredData = login.filter((info) => {
      return info.username === userName && info.password === password;
    });
    let redirectURL = filteredData[0].username;
    if (
      filteredData.length > 0 && redirectURL == 'admin@hub.studio'
        ? (redirectURL = '/questionpanel')
        : (redirectURL = '/answers')
    ) {
      this.setState({ isLogin: true });
      this.sendToURL(redirectURL);
    } else {
      alert('Login rejected.');
    }
  };

  enterToLogIn = (e) => {
    if (e.keyCode === 13) {
      this.showInfo();
    }
  };

  render() {
    return (
      <>
        <div className="login">
          <img className="hubpng" src={hub}></img>
          <Helmet>
            <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
          </Helmet>
          <br />
          <br />
          <img src={hubtext}></img>
          <br /> <br />
          <LabelComp text="User ID" forinput="userName" />
          <InputQuestion
            id="userName"
            type="text"
            placeholder="Enter your username."
            inputFunc={this.setInfo}
            eventKeyDown={this.enterToLogIn}
            errorMsg={this.state.userNameErr}
          />
          <br /> <br />
          <LabelComp text="Password" forinput="password" />
          <InputQuestion
            id="password"
            type="password"
            placeholder="Enter your password."
            inputFunc={this.setInfo}
            eventKeyDown={this.enterToLogIn}
            errorMsg={this.state.passwordErr}
          />
          <RegisterButton buttonClick={this.showInfo} />
          <br />
        </div>
        <Hiddendiv activeCheck={this.state.isLogin} />
      </>
    );
  }
}
