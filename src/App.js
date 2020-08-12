import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Starred from './pages/Starred';
import Home from './pages/Home';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#86c4ba',
    gray: '#cedebd',
    dark: '#411f1f',
    light: '#f3f3f3',
  },
};
//theme object pass as props

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
