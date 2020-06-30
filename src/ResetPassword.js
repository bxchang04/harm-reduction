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
    <Form.Control.Feedback type="invalid">
      {state.error.password}
    </Form.Control.Feedback>
    </Form.Group>
    {
}
<Button className='register-button' variant="primary" type="submit" disabled={state.isSigningIn}>
  Reset Password
      </Button>
{
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
}
  </Form >
);
};



