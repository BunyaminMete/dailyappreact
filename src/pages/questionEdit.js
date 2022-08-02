import InputQuestion from '../components/Input/input';
import UpdateButton from '../components/Button/Submit/update';
import React from 'react';
import data from '../data.json';
import RemoveButton from '../components/Button/RemoveBox';
import './style_panel.css';
import AddButton from '../components/Button/AddBox/add';
import Helmet from 'react-helmet';
import logo from '../assets/logo.svg';

export default class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
    };

    this.addValue = this.addValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
  }

  setQuestionInfo = (value, id) => {
    const questions = [...this.state.questions];
    const mapping = questions.map((data) => {
      if (data.id == id) {
        data.questions = value;
      }
      return data;
    });
    this.setState({ mapping });
  };

  updateEvent = (event) => {
    event.preventDefault();
    window.location.replace('/answers');
  };

  deleteValue = (id) => {
    const questions = [...this.state.questions];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id == id.target.id) {
        questions.splice(i, 1);
      }
    }
    this.setState({ questions });
  };

  addValue(event) {
    const questions = this.state.questions;
    let id_gen = (Math.random() + 1).toString(36).substring(2, 8).toUpperCase();

    questions.push({
      id: id_gen,
      question: '',
      answer: '',
    });
    this.setState({ questions: questions });
    event.preventDefault();
  }

  render() {
    //A key is like an id, but for rendering purposes. Keys help React identify which items have changed, are added, or are removed.
    return (
      <>
        <h1 className="edittext">ADMIN QUERY EDITING PANEL</h1>
        <Helmet>
          <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
        </Helmet>
        <form className="panel">
          <br /> <br />
          <AddButton addElement={this.addValue} />
          <br />
          <br />
          <img className="hublogo" src={logo}></img>
          <p>
            <b className="dailytext">Daily Rapport</b>
          </p>
          {this.state.questions.map((data, index) => (
            <div key={index}>
              <InputQuestion id={data.id} type="text" placeholder={data.question} inputFunc={this.setQuestionInfo} />

              <RemoveButton id={data.id} rmbuttonClick={this.deleteValue} />
            </div>
          ))}
          <UpdateButton buttonClick={this.updateEvent} />
        </form>
      </>
    );
  }
}
