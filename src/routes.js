import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Register from './pages/Register';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={Register} />
    </Switch>
  );
}
