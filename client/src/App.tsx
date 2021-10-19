import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AllRoutes } from './routes/Index';
import Login from './Pages/auth/Login';
import Layout from './components/Layout';
import './App.css';

const App: React.FC<{}> = (): any => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Layout>
          {AllRoutes.map<React.ReactElement>(({ path, component }) => (
            <Route path={path} component={component} />
          ))}
        </Layout>
      </Switch>
    </Router>
  );
};
export default App;
