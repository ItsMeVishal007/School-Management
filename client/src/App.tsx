import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllRoutes } from "./routes/Index";
import "./App.css";

const App: React.FC = (): any => {
  return (
    <Router>
      <Switch>
        {
          AllRoutes.map<React.ReactElement>(({path, component}) => (
            <Route path={path} component={component} />
          ))
        }
      </Switch>
    </Router>
  );
};
export default App;
