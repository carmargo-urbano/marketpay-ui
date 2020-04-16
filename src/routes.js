import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";



import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SignOut from './pages/Default/SignOut';
import NotFound from './pages/Default/404'

//ADMIN 
import Admin from './pages/Admin/SignIn'


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
      <Route path="/signout" component={SignOut} />
      <PrivateRoute path="/users/me" component={Profile} />
     

      <Route path="/admin" exact component={Admin} />
     
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}
