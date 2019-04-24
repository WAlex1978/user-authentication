import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
