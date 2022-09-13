import React from 'react';
import Helmet from 'react-helmet';

import data from '../../data.json';
import './style_answers.css';

import RegisterButton from '../../components/Button/Submit/register';
import InputQuestion from '../../components/Input/input';
import LabelComp from '../../components/Label/label';
import Logout from '../../components/Button/Logout/logout';
import SuccessEvent from '../../components/SuccessEvent/success';

import hub from '../../assets/logo.svg';

// Oğuzhan ŞİMŞEK was here!!!!
// Roger That.

export default function AnswerPage() {
  const [questions, setQuestions] = React.useState(data.questions);
  const [error, setError] = React.useState([]);
  const [errorMessage] = React.useState('You must enter information.');
  const [success, setSuccess] = React.useState(false);

  const answerSave = (event) => {
    const { id, value } = event.target;
    const getQuestions = [...questions];
    const mapping = getQuestions.map((data) => {
      if (data.id === id) {
        data.answer = value;
      }
      return data;
    });
    setQuestions(mapping);
    setError('');
  };

  const setQuestionInfo = (event) => {
    event.preventDefault(); // to disable form method
    const error = [];
    const getQuestions = [...questions];
    const mapping = getQuestions.map((info) => {
      if (!info.answer) {
        //if (info.answer empty) => then push info.id inside error array.
        error.push(info.id);
      }
      return info;
    });
    setQuestions(mapping);

    error.length > 0 ? setError(error) : setSuccess(true);
  };

  const clearStorage = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('email');
    window.location.replace('/login');
  };

  return (
    <>
      <Logout offEvent={clearStorage} />
      <Helmet>
        <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
      </Helmet>
      {success && <SuccessEvent />}
      <form className="enterForm">
        <img alt="hublogo" className="hubpng" src={hub}></img>
        <br /> <br /> <br />
        {questions.map((data, index) => (
          <div key={index}>
            <LabelComp text={data.question} />
            <div className="ml-3">
              <InputQuestion
                id={data.id}
                labeltext={data.answer}
                inputFunc={answerSave}
                errorMsg={error.includes(data.id) && errorMessage}
              />
            </div>
            <br />
          </div>
        ))}
        <RegisterButton buttonClick={setQuestionInfo} text="SAVE" />
      </form>
    </>
  );
}
