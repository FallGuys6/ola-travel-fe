import React from 'react';
import { Route, Switch } from 'react-router'; // react-router v5
import { ConnectedRouter } from 'connected-react-router';
import arrayRouters from '@pages/rootRouter.js';
import { Spin } from 'antd';



function App({ history, context }) {


  return (
    <React.Fragment>
      <ConnectedRouter history={history} context={context}>
        <Switch>
          {arrayRouters.map(({ component: Component, ...rest }, index) => {
            return (
              <Route
                key={index}
                {...rest}
                render={props => (
                  <React.Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          position: 'absolute',
                          zIndex: '999',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    }
                  >
                    <Component {...props} />
                  </React.Suspense>
                )}
              />
            );
          })}
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
