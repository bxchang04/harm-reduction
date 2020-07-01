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
      <div className="pwReset">
        <h1>Harm Reduction - Reset Password</h1>
        <PWReset />
      </div>
    </div>
  );
};

const PWReset = () => {
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

  return (
    <Form onSubmit={resetPassword} style={{ marginBottom: '20px' }}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="text"
        />
      </Form.Group>
      {
      }
      <Button className='pwReset-button' variant="primary" type="submit" >
        Reset Password
      </Button>
      {/*       {
        state.isSigningIn && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            style={{
              marginLeft: '10px',
              alignSelf: 'center',
            }}
          />
        )
      } */}
    </Form >
  );
};

/* const getErrorMessage = code => {
  switch (code) {
    case 'auth/invalid-email':
      return { email: 'Invalid email' };
    case 'auth/user-disabled':
      return { email: 'User is disabled' };
    case 'auth/user-not-found':
      return { email: 'User not found' };
    case 'auth/wrong-password':
      return { password: 'Wrong password' };
    default:
      return { other: 'Something went wrong. Please try again later.' };
  }
};
*/

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
