import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";



import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Register from './pages/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/signup" component={Register} />
      <PrivateRoute path="/users/me" component={Profile} />
      <Route path="*" exact component={Home} />
    </Switch>
  );
}
