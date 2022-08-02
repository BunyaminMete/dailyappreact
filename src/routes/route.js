import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import AdminPanel from '../pages/questionEdit';
import AnswerPage from '../pages/answers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/questionpanel" element={<AdminPanel />} />
      <Route path="/answers" element={<AnswerPage />} />
    </Routes>
  );
}
export default App;
