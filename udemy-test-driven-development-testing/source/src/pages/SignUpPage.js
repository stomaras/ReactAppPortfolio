/* eslint-disable no-undef */
import axios from "axios";
import { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";

class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    apiProgress: false,
    signUpSuccess: false,
    errors:{}
  };

  onChange = (event) => {
    const { id, value } = event.target;

    const errorsCopy = this.state.errors;
    delete errorsCopy[id];
    this.setState({
      [id]: value,
      errors: errorsCopy
    });
  };

  submit = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const body = {
      username,
      email,
      password,
    };
    this.setState({apiProgress: true});
    try {
      await axios.post("/api/1.0/users", body)
      this.setState({signUpSuccess:true});
    } catch (error) {
      if(error.response.status === 400){
        this.setState({errors: error.response.data.validationErrors});
      }
      this.setState({apiProgress: false});
    }
  };

  onClickTurkish = () => {
    this.props.i18n.changeLanguage("tr")
  }


  render() {
    const { t } = this.props;
    let disabled = true;
    const { password, passwordRepeat, apiProgress, signUpSuccess, errors } = this.state;
    if (password && passwordRepeat) {
      disabled = password !== passwordRepeat;
    }

    let passwordMismatch = password !== passwordRepeat ? 'Password mismatch': "";

    return (
      <div>
      {!signUpSuccess && <form className="card mt-5" data-testid="form-sign-up">
          <div className="card-header">
            <h1 className="text-center">{t('signUp')}</h1>
          </div>
          <div className="card-body">
            <Input id="username" label={t('username')} onChange={this.onChange} help={errors.username}/>
            <Input id="email" label={t('email')} onChange={this.onChange} help={errors.email}/>
            <Input id="password" label={t('password')} onChange={this.onChange} help={errors.password} type="password"/>
            <Input id="passwordRepeat" label={t('passwordRepeat')} onChange={this.onChange} help={passwordMismatch} type="password"/>
          <div className="text-center">
            <button
              className="btn btn-primary"
              data-testid="register"
              disabled={disabled || apiProgress}
              onClick={this.submit}
            >
          {apiProgress && (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>)}
              {t('register')}
            </button>
          </div>
          </div>
        </form>}
        {signUpSuccess && (<div className="alert alert-success mt-3">
          Please check your e-mail to activate your account
        </div>)}
        <span title="Turkce" onClick={() => this.props.i18n.changeLanguage("tr")}>TR</span>
      </div>
    );
  }
}

const SignUpPageWithTranslation = withTranslation()(SignUpPage);
export default SignUpPageWithTranslation;
