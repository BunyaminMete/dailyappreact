import React from 'react';
import Helmet from 'react-helmet';
import UpdateButton from '../components/Button/Submit/update';
import InputQuestion from '../components/Input/input';
import LabelComp from '../components/Label/label';
import data from '../data.json';
import './style_answers.css';
import hub from '../assets/logo.svg';

// Oğuzhan ŞİMŞEK was here!!!!
// Roger That.

export default class AnswerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
      error: [],
      errorMessage: 'You must enter information.',
    };
  }

  answerSave = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    const questions = [...this.state.questions];
    const mapping = questions.map((data) => {
      if (data.id == id) {
        data.answer = value;
      }
      return data;
    });
    this.setState({ mapping, error: '' });
  };

  setQuestionInfo = (event) => {
    event.preventDefault();
    const error = [];
    const questions = [...this.state.questions];
    const mapping = questions.map((info) => {
      if (!info.answer) {
        //if (info.answer empty) => then push info.id inside error array.
        error.push(info.id);
      }
      return info;
    });
    this.setState({ mapping });

    console.log(error);
    if (error.length > 0) {
      this.setState({ error });
    } else {
      alert('Success');
    }
  };

  render() {
    return (
      <>
        <Helmet>
          <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
        </Helmet>
        <form className="enterForm">
          <img className="hubpng" src={hub}></img>
          <br /> <br /> <br />
          {this.state.questions.map((data, index) => (
            <div key={index}>
              <LabelComp text={data.question} />
              <InputQuestion
                id={data.id}
                labeltext={data.answer}
                inputFunc={this.answerSave}
                errorMsg={this.state.error.includes(data.id) && this.state.errorMessage}
              />
              <br /> <br />
            </div>
          ))}
          <UpdateButton buttonClick={this.setQuestionInfo} />
        </form>
      </>
    );
  }
}
