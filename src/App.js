import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import NextPage from './NextPage';
import "./App.css"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUpForm />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
