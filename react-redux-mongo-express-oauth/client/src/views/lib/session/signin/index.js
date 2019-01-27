import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { signin } from '../../../../data/resources/sessions/effects';
import { signIn } from '../../../../data/resources/sessions/actions';


import Button from './Button';

const SignIn = withRouter(({ signIn }) => {

  const handleClick = e => {
    e.preventDefault();
    signIn();
  };

  return (
    <Button handleClick={handleClick} />
  );
});

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signIn()),
});

const Data = connect(null, mapDispatchToProps);

export default Data(SignIn);
