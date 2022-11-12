import { Component } from "react";

class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    disabled: true,
    password: "",
    passwordRepeat: "",
  };

  onChangeUsername = (event) => {
    const currentValue = event.target.value;
    this.setState({
      username: currentValue,
    });
  };

  onChangeEmail = (event) => {
    const currentValue = event.target.value;
    this.setState({
      email: currentValue,
    });
  };

  onChangePassword = (event) => {
    const currentValue = event.target.value;
    this.setState({
      password: currentValue,
    });
  };

  onChangeRepeatPassword = (event) => {
    const currentValue = event.target.value;
    this.setState({
      passwordRepeat: currentValue,
    });
  };

  render() {
    const { password, passwordRepeat } = this.state;
    if (password && passwordRepeat) {
      this.state.disabled = password !== passwordRepeat;
    }

    return (
      <div>
        <h1 role="hea">Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" onChange={this.onChangeUsername} />
        <label htmlFor="email">E-mail</label>
        <input id="email" onChange={this.onChangeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={this.onChangePassword} />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={this.onChangeRepeatPassword}
        />
        <button data-testid="register" disabled={this.state.disabled}>
          Register
        </button>
      </div>
    );
  }
}

export default SignUpPage;
