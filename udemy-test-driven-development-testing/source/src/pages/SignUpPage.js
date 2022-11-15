import axios from "axios";
import { Component } from "react";

class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  onChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  // onChangeUsername = (event) => {
  //   const currentValue = event.target.value;
  //   this.setState({
  //     username: currentValue,
  //   });
  // };

  // onChangeEmail = (event) => {
  //   const currentValue = event.target.value;
  //   this.setState({
  //     email: currentValue,
  //   });
  // };

  // onChangePassword = (event) => {
  //   const currentValue = event.target.value;
  //   this.setState({
  //     password: currentValue,
  //   });
  // };

  // onChangeRepeatPassword = (event) => {
  //   const currentValue = event.target.value;
  //   this.setState({
  //     passwordRepeat: currentValue,
  //   });
  // };

  submit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const body = {
      username,
      email,
      password,
    };
    axios.post("/api/1.0/users", body);
  };

  render() {
    let disabled = true;
    const { password, passwordRepeat } = this.state;
    if (password && passwordRepeat) {
      disabled = password !== passwordRepeat;
    }

    return (
      <div>
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input id="username" onChange={this.onChange} />
          <label htmlFor="email">E-mail</label>
          <input id="email" onChange={this.onChange} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.onChange} />
          <label htmlFor="passwordRepeat">Password Repeat</label>
          <input id="passwordRepeat" type="password" onChange={this.onChange} />
          <button
            data-testid="register"
            disabled={disabled}
            onClick={this.submit}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
