import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Page } from './Page';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page/one">Page 1</Link>
            </li>
            <li>
              <Link to="/page/two.anything">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page/:id">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
