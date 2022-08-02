import React from 'react';
import RegisterButton from '../components/Button/Submit/register';
import InputQuestion from '../components/Input/input';
import data from '../data.json';
import './style_login.css';
import LabelComp from '../components/Label/label';
import hub from '../assets/character.png';
import hubtext from '../assets/logo.svg';
import Helmet from 'react-helmet';
import Hiddendiv from '../components/Director/director';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '', //false ama bir şey yazdıktan sonra true
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

  sendToPanel = () => {
    window.location.replace('/questionpanel');
  };
  sendToAnswerPage = () => {
    window.location.replace('/answers');
  };

  showInfo = () => {
    const emailValidCheck = this.isValidEmail(this.state.userName);
    const passValidCheck = this.isValidPassword(this.state.password);
    if (!this.state.userName || !this.state.password || !emailValidCheck || !passValidCheck) {
      // console.log('if içindeyim', !this.state.userName);
      //Eğer username ve password boş ise şunu return et
      return this.setState({
        userNameErr:
          (!this.state.userName && 'You have to enter username information !!') ||
          (!emailValidCheck && 'You entered invalid email address'),
        passwordErr:
          (!this.state.password && 'You have to enter password information !!') ||
          (!passValidCheck && 'Password length must be at least 8.'),
      });
    }

    const { login } = data;

    const filteredData = login.filter((info) => {
      return info.username === this.state.userName && info.password === this.state.password;
    });
    if (filteredData.length > 0 && filteredData[0].username == 'admin@hub.studio') {
      this.setState({ isLogin: true });
      setTimeout(this.sendToPanel, 1000);
    } else if (filteredData.length > 0) {
      this.setState({ isLogin: true });
      setTimeout(this.sendToAnswerPage, 1000);
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
