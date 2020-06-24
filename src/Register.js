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
      <div className="login">
        <h1>Harm Reduction - Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};


return (
  <Form onSubmit={login} style={{ marginBottom: '20px' }}>
    <Form.Group controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control
        required
        value={state.email}
        type="text"
        onChange={e => update({ email: e.target.value })}
        isInvalid={!!state.error.email}
      />
      <Form.Control.Feedback type="invalid">
        {state.error.email}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control
        required
        value={state.password}
        type="password"
        onChange={e => update({ password: e.target.value })}
        isInvalid={!!state.error.password}
      />
      <Form.Control.Feedback type="invalid">
        {state.error.password}
      </Form.Control.Feedback>
    </Form.Group>
    {state.error.other && (
      <div style={{ color: 'red', marginBottom: '10px' }}>
        {state.error.other}
      </div>
    )}
    <Button className='register-button' variant="primary" type="submit" disabled={state.isSigningIn}>
      Register (first-time users)
      </Button>
    {state.isSigningIn && (
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
    )}
  </Form>
);
};



