import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/auth/Login";

import "./App.css";

const App: React.FC = (): any => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
