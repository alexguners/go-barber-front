import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import DashBoard from '../pages/Dashboard';
import Profile from '../pages/Profile';

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={DashBoard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
