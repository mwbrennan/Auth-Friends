import React from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import { Router } from 'express';

function App() {
  return (
    <Router>
      <div>
        <h1>View your friends</h1>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
