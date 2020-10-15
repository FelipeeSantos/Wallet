import React from "react";
import { Switch, Route } from "react-router-dom";
import LayoutGrid from "../Components/Layout/Layout-Grid";
import Dashboard from "../Pages/Dashboard/Dashboard";
import List from "../Pages/List/List";

const AppRoutes: React.FC = () => {
  return (
    <LayoutGrid>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </LayoutGrid>
  );
};

export default AppRoutes;

