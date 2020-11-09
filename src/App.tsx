import { ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Chakra } from './Chakra';
import { Page } from './Page';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
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
              <li>
                <Link to="/chakra">Chakra</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/page/:id">
              <Page />
            </Route>
            <Route path="/chakra">
              <Chakra />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};
