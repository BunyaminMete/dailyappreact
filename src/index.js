import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './routes/route';
import './styles/main.css';
import Provider from './context/context';
import { HighLight } from 'hubstudio-highlight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider />
    <HighLight text="The person u have called is not avaliable at the" search="have" />
  </BrowserRouter>,
);
