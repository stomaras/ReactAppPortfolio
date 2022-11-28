import "./App.css";
import SignUpPage from "../src/pages/SignUpPage";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import logo from "./assets/Hoaxify.jpg";

function App() {
  const {t} = useTranslation();

  const [path, setPath] = useState(window.location.pathname);


  const onClickLink = (event) => {
    event.preventDefault();
    const path = event.currentTarget.attributes.href.value
    window.history.pushState({}, '', path);
    setPath(path);
  }


  return (
    <>
    <nav className="navbar navbar-expand navbar-light bg-light shadow-small">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="/" 
          title="Home" 
          onClick={onClickLink}
        >
          <img src={logo} alt="Hoaxify" width="60"/>
          Hoaxify
        </a>
        <ul className="navbar-nav">
          <a className="nav-link" href="/signup" onClick={onClickLink}>{t('signUp')}</a>
          <a className="nav-link" href="/login" onClick={onClickLink}>Login</a>
        </ul>
      </div>
      
    </nav>
    <div className="container">
      { path === '/' && <HomePage/>}
      { path === '/signup' && <SignUpPage />}
      { path === '/login' && <LoginPage/>}
      { path.startsWith('/user/') && <UserPage/>}
      <LanguageSelector/>
    </div>
    </>

    
  );
}

export default App;

/*

Section 4
- country flex api ---> countryflags.io 
- Component - Language Selector 
  after the tests, we are changing the language, with afterEach Hook which is causing the component to re-render
  we must wait until that re-render the update to complete , we use act for it
  in client side validations messages we can replace text with translation messsages 
  for that we receiving from backend we can not do anything about them

Note: waitForElementToBeRemoved is not compatible with elements queriedBy by findBy

Section 5
- window.history.pushState({},"","/signup")
  the testing environment is rendering the page with this url 
  npm install react-router-dom@5.3.0

*/
