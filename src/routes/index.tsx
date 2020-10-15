import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import AppRoutes from "./routes";
import SignIn from "../Pages/SignIn/SingIn";

const Routes: React.FC = () => {
  const { logged } = useAuth();

  return (
    <BrowserRouter>
      {logged ? <AppRoutes /> : <SignIn />}
    </BrowserRouter>
  )
};

export default Routes;
