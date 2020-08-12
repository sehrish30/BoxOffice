import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Starred from './pages/Starred';
import Home from './pages/Home';
import Show from './pages/Show';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/shows/:id">
        <Show />
      </Route>

      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
