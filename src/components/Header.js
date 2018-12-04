import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLoginGoogle } from '../actions/auth';

export const Header = (props) => (
  <div>
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>Shopping Online</h1>
          </Link>
          {props.uid ? (
            <div>
              <Link to="/dashboard">
                <button className="button button--link">My account</button>
                <button className="button button--link" onClick={props.startLogout}>Logout</button>
              </Link>
            </div>
          ) : (
              <button className="button button--link" onClick={props.startLoginGoogle}>Login with Google</button>
            )}
        </div>
      </div>
    </header>
  </div>
);

const mapStateToProps = (state) => ({
  uid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLoginGoogle: () => dispatch(startLoginGoogle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);