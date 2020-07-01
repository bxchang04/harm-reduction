import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Content from './Content';
import { useAuthState, AuthStatus } from './Auth';
import Login from './Login';
import PWReset from './ResetPassword';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login/pwReset">
          <PWReset />
        </Route>
        <PrivateRoute path="/">
          <MainPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

const MainPage = () => (
  <div className="App">
    <TopBar />
    <Content />
  </div>
);

// tried this links structure vs using nested switch statements for better readability, but it led to an infinite loop for some reason: https://stackoverflow.com/questions/38370979/nested-switch-statement-in-javascript
// ...so I reverted back to using nested switch statements.

function PrivateRoute({ children, ...rest }) {
  const { status } = useAuthState();
  const pwReset = false; // for testing. Needs to be dynamic.
  return (
    <Route
      {...rest}
      render={({ location }) => {
        switch (status) {
          case AuthStatus.SignedIn:
            return children;
          case AuthStatus.SignedOut:
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location },
                }}
              />
            );
          case AuthStatus.SignedOut: {
            switch (pwReset) {
              case !pwReset:
                return (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: location },
                    }}
                  />
                );
              case pwReset:
                return (
                  <Redirect
                    to={{
                      pathname: '/login/pwReset',
                      state: { from: location },
                    }}
                  />
                );
            }
          }
          case AuthStatus.Loading:
            return (
              <div className="fullscreen">
                <Spinner animation="border" />
              </div>
            );
          default:
            throw Error(`Unexpected status ${status}`);
        }
      }}
    />
  );
}

export default App;
