import React, { useState } from 'react';
import './styles.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SignupForm from './components/SignupForm/SignupForm';
import SSOForm from './components/SSOForm/SSOForm';
import HeroContent from './components/HeroContent/HeroContent';

function WithTransition({ isActive, children }) {
  return (
    <TransitionGroup component={null}>
      {isActive && (
        <CSSTransition classNames="box" timeout={400}>
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
        <SignupForm toggleSSO={toggleSSO} />
      </div>
    </WithTransition>
  );
}

function Box2({ sso, toggleSSO }) {
  return (
    <WithTransition isActive={sso === true}>
      <div className="box box-2">
        <SSOForm toggleSSO={toggleSSO} />
      </div>
    </WithTransition>
  );
}

export default function App() {
  const [sso, setSSO] = useState(true);

  function toggleSSO() {
    setSSO(!sso);
  }

  return (
    <div className="App">
      <div className="page-layout">
        <HeroContent />
        <div className="box-container">
          <Box1 sso={sso} toggleSSO={toggleSSO} />
          <Box2 sso={sso} toggleSSO={toggleSSO} />
        </div>
      </div>
    </div>
  );
}
