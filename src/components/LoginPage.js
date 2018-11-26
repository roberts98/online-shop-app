import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginEmail } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button className="button" onClick={startLoginGoogle}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
