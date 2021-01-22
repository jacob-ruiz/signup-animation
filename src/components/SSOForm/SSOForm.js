import React from 'react';
import { Or } from '../SignupForm/SignupForm';

const SSOForm = ({ toggleSSO }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <h4
          style={{
            fontWeight: 600,
            fontSize: 13,
            margin: 0,
            marginBottom: 8,
          }}
        >
          SAML SSO
        </h4>
        <p
          style={{
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '18px',
          }}
        >
          Enter your email address to sign up with SAML SSO
        </p>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <button className="button-round">Continue with SAML SSO</button>

      <Or />

      <button
        onClick={toggleSSO}
        className="button-round"
        style={{
          background: 'transparent',
          color: '#3C64FA',
          height: 'auto',
          // marginBottom: 16,
        }}
      >{`< Sign up with email or Google`}</button>
    </div>
  );
};

export default SSOForm;
