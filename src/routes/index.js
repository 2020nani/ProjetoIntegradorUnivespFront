import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Profile from '../pages/Profile';
import NotificarRisco from '../pages/NotificarRisco';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/notificar" component={NotificarRisco} isPrivate />
    </Switch>
  );
}
