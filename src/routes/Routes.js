import React from "react";
import { Login } from "../component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CreateUser } from "../component/CreateUser";
import ForgotPassword from "../component/ForgotPassword";
import ResetPassword from "../component/Reset";
const Routes = () => {
  return (
    <Router>
      <Route path="/createAccount" exact component={CreateUser} />
      <Route path="/" exact component={Login} />
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <Route path="/reset/:token" exact component={ResetPassword} />
    </Router>
  );
};
export default  Routes ;
