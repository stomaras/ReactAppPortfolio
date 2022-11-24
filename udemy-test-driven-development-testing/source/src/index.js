import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initReactI18next} from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .init({
    resources:{
      en: {
        translation: {
          signUp: 'Sign Up',
          username:'Username',
          email:'E-mail',
          password:'Password',
          passwordRepeat:'Password Repeat'
        }
      },
      tr: {
        translation: {
          signUp: 'Kayit Ol',
          username:'Kullanici Adi',
          email:'E-posta',
          password:'Sifre',
          passwordRepeat:'Sifre Tekrari'
        }
      },
    },
    lng:'en',
    fallbacking:'en',
    interpolation:{
      escapeValue:false
    }
  });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
