import React from 'react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route }from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
           <Home/>
          </Route>
          <Route path={'/new'}>
            <New/>
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
