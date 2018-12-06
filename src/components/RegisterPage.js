import React from 'react';
import { firebase } from '../firebase/firebase';

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
        {this.state.isSuccess && <p>You are registred!</p>}
        {this.state.error && <p>{this.state.error}</p>}
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
            className="btn btn-primary"
            onClick={this.register(this.state.email, this.state.password)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
};

export default RegisterPage;