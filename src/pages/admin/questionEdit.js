import React from 'react';
import Helmet from 'react-helmet';

import data from '../../data.json';

import './style_panel.css';

import InputQuestion from '../../components/Input/input';
import RegisterButton from '../../components/Button/Submit/register';
import RemoveButton from '../../components/Button/RemoveBox';
import AddButton from '../../components/Button/AddBox/add';
import Logout from '../../components/Button/Logout/logout';

import logo from '../../assets/logo.svg';

const AdminPanel = () => {
  const [questions, setQuestions] = React.useState(data.questions);

  const setQuestionsValue = (event) => {
    const { id, value } = event.target;
    const myquestions = [...questions];

    const mapping = myquestions.map((data) => {
      if (data.id === id) {
        data.questions = value;
      }
      return data;
    });
    setQuestions(mapping);
  };

  const updateEvent = (event) => {
    event.preventDefault(); //to disable form method
    console.log(questions);
    window.location.replace('/answers');
  };

  const deleteValue = (event) => {
    const { id } = event.target;
    const getQuestions = [...questions];
    for (let i = 0; i < getQuestions.length; i++) {
      if (getQuestions[i].id === id) {
        getQuestions.splice(i, 1);
      }
    }
    setQuestions(getQuestions);
  };

  const addValue = (event) => {
    event.preventDefault();
    const newQuestion = [...questions];
    let id_gen = (Math.random() + 1).toString(36).substring(2, 8).toUpperCase();
    console.log(newQuestion[0].id);
    newQuestion.push({
      id: id_gen,
      question: '',
      answer: '',
    });
    setQuestions(newQuestion);
  };

  const clearStorage = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('email');
    window.location.replace('/login');
  };

  //A key is like an id, but for rendering purposes. Keys help React identify which items have changed, are added, or are removed.
  return (
    <>
      <Logout offEvent={clearStorage} />
      <h1 className="edittext">ADMIN QUERY EDITING PANEL</h1>
      <Helmet>
        <style>{'body { background-color: rgb(21, 24, 73); }'}</style>
      </Helmet>
      <form className="panel">
        <br /> <br />
        <p className="hublogo">
          <img alt="hublogo" className="hublogo" src={logo}></img>
        </p>
        <AddButton addElement={addValue.bind(this)} />
        <p className="dailytext">
          <b>Daily Rapport</b>
        </p>
        {questions.map((data, index) => (
          <div key={index}>
            <span className="ikiliyiduzelt">
              <InputQuestion id={data.id} type="text" placeholder={data.question} inputFunc={setQuestionsValue} />
              <RemoveButton className="ml-2 bg-red-500" id={data.id} rmbuttonClick={deleteValue} />
            </span>
            <br />
          </div>
        ))}
        <RegisterButton buttonClick={updateEvent} text="UPDATE" />
      </form>
    </>
  );
};

export default AdminPanel;
