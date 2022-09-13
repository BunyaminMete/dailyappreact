import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from '../pages/login/login';
import AdminPanel from '../pages/admin/questionEdit';
import AnswerPage from '../pages/user_answers/answers';
import RegisterArea from '../pages/register/register';

function App() {
  return (
    <Routes>
      {localStorage.getItem('Token') ? (
        <>
          <Route path="/" element={<Navigate to="/answers" />} />
          {localStorage.getItem('email') === 'bunyamin@mete.com' ? (
            <>
              <Route path="/questionpanel" element={<AdminPanel />} />
              <Route path="/answers" element={<AnswerPage />} />
            </>
          ) : (
            <Route path="/answers" element={<AnswerPage />} />
          )}
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/user-register" element={<RegisterArea />} />
          <Route path="/login" element={<LoginPage />} />
        </>
      )}
      <Route path="/" element={<Navigate to="/user-register" />} />
    </Routes>
  );
}
export default App;
