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
        <form className="card mt-5">
          <div className="card-header">
            <h1 className="text-center">Sign Up</h1>
          </div>
          <div className="card-body">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input id="username" className="form-control" onChange={this.onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input id="email" className="form-control" onChange={this.onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input id="password" type="password" className="form-control" onChange={this.onChange} />
          </div>
          <div className="mb-3">  
            <label htmlFor="passwordRepeat" className="form-label">Password Repeat</label>
            <input id="passwordRepeat" type="password" className="form-control" onChange={this.onChange} />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              data-testid="register"
              disabled={disabled}
              onClick={this.submit}
            >
              Register
            </button>
          </div>
          </div>
        </form>
    );
  }
}

export default SignUpPage;
