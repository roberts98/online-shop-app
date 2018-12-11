import React from 'react';
import { firebase } from '../../firebase/firebase';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      isSuccess: false,
      error: ''
    };
  };
  register = (email, password) => {
    return () => {
      if (this.state.password === this.state.repeatPassword) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ isSuccess: true, error: '' });
            setTimeout(() => {
              this.props.history.push('/');
            }, 2000);
          })
          .catch((error) => {
            if (error.code === 'auth/invalid-email') {
              error.message = 'Please provide valid e-mail!'
            }
            this.setState({ error: error.message })
          });
      } else {
        this.setState({ error: "Password don't match" });
      }
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
  repeatPasswordChange = (e) => {
    const repeatPassword = e.target.value;
    this.setState({ repeatPassword });
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
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="repeatPassword"
              placeholder="repeat password"
              value={this.state.repeatPassword}
              onChange={this.repeatPasswordChange}
            />
          </div>
          <button
            className="btn btn-primary float-right"
            onClick={this.register(this.state.email, this.state.password)}
          >
            Register
          </button>
        </form>
      </div>
    );
  };
};

export default RegisterPage;