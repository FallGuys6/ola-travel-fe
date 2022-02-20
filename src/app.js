import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Route, Switch } from 'react-router'; // react-router v5
import { ConnectedRouter } from 'connected-react-router';
import Home from '@pages/home'
function App({ history, context }) {
  return (
    <React.Fragment>
      <ConnectedRouter history={history} context={context}>
        <Switch>
          <Route exact path="/" render={() => (<Home/>)} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
