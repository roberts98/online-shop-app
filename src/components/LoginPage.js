import React from 'react';
import { firebase } from '../firebase/firebase';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSuccess: false,
      error: ''
    };
  };
  login = (email, password) => {
    return () => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          setTimeout(() => {
            this.props.history.push('/');
          }, 2000);
          this.setState({ isSuccess: true, error: '' });
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            error.message = 'Please provide valid e-mail!'
          }
          this.setState({ error: error.message })
        });
    };
  };
  onSubmit = (e) => {
    e.preventDefault();
  }
  emailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };
  passwordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };
  render() {
    return (
      <div className="container">
        {
          this.state.isSuccess &&
          <div className="alert alert-success" role="alert">
            Succes! You are being redirected...
          </div>
        }
        {this.state.error && <div className="alert alert-danger" role="alert">{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.emailChange}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.passwordChange}
            />
          </div>
          <button
            className="btn btn-primary float-right"
            onClick={this.login(this.state.email, this.state.password)}
          >
            Login
          </button>
        </form>
      </div>
    );
  };
};

export default LoginPage;