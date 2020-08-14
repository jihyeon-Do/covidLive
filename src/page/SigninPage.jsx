// @flow
import React from 'react';
import SigninContainer from '../container/SigninContainer';
import { useSelector }from 'react-redux'
import { Redirect } from 'react-router-dom'

export function SigninPage() {
  const token = useSelector((state) => state.authReducer.token);
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <SigninContainer />
    </div>
  );
};