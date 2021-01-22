import React, { useState } from 'react';
import './styles.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function WithTransition({ isActive, children }) {
  return (
    <TransitionGroup component={null}>
      {isActive && (
        <CSSTransition classNames="box" timeout={300}>
          {children}
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

function Box1({ sso, toggleSSO }) {
  return (
    <WithTransition isActive={sso === false}>
      <div className="box box-1">
        <div>Box 1</div>
        <button onClick={toggleSSO}>Use SSO</button>
      </div>
    </WithTransition>
  );
}

function Box2({ sso, toggleSSO }) {
  return (
    <WithTransition isActive={sso === true}>
      <div className="box box-2">
        <div>Box 2</div>
        <button onClick={toggleSSO}>Back</button>
      </div>
    </WithTransition>
  );
}

export default function App() {
  const [sso, setSSO] = useState(false);

  function toggleSSO() {
    setSSO(!sso);
  }

  return (
    <div className="App">
      <div className="box-container">
        <Box1 sso={sso} toggleSSO={toggleSSO} />
        <Box2 sso={sso} toggleSSO={toggleSSO} />
      </div>
    </div>
  );
}
