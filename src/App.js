import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
