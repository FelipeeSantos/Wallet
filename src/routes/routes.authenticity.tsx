import React from 'react';
import { Switch, Route } from "react-router-dom"

import SignIn from "../Pages/SignIn/SingIn";

const routesAuthenticity: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
);

export default routesAuthenticity;
