import React, { useReducer, useEffect } from 'react';
import { auth } from './Firebase';
import { useHistory, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useAuthState } from './Auth';

export default () => {
  return (
    <div className="fullscreen">
      <div className="resetPassword">
        <h1>Harm Reduction - Reset Password</h1>
        <ResetPassword />
      </div>
    </div>
  );
};

const ResetPassword = () => {
  useSignInRedirect();

  const [state, update] = useReducer(
    (state, update) => ({ ...state, ...update }),
    {
      email: '',
      password: '',
      isSigningIn: false,
      error: {},
    }
  );

  const resetPassword = event => {
    event.preventDefault();
    event.stopPropagation();

    // code here to send reset email
  };

  let history = useHistory();

  function handleBack() {
    history.push("/login");
  }

  return (
    <Form onSubmit={resetPassword} style={{ marginBottom: '20px' }}>
      <Form.Group controlId="email">
        <Form.Label>Email to send password reset link:</Form.Label>
        <Form.Control
          type="text"
        />
      </Form.Group>
      <Button className='resetPassword-button' variant="primary" type="submit" >
        Reset Password
      </Button>
      <br /> <br />
      <Button className='back-button' variant="primary" onClick={handleBack}>
        Go Back
      </Button>
    </Form >
  );
};

/** Replaces the current page with the target page after successful login. */
const useSignInRedirect = () => {
  const history = useHistory();
  const location = useLocation();
  const { user: currentUser } = useAuthState();

  useEffect(() => {
    if (currentUser) {
      let { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  }, [currentUser, history, location.state]);
};