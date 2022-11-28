import "./App.css";
import SignUpPage from "../src/pages/SignUpPage";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function App() {
  const {t} = useTranslation();

  const [path, setPath] = useState(window.location.pathname);


  const onClickLink = (event) => {
    event.preventDefault();
    const path = event.target.attributes.href.value
    window.history.pushState({}, '', path);
    setPath(path);
  }


  return (
    <div className="container">
      <div>
        <a href="/" title="Home" onClick={onClickLink}>
          Hoaxify
        </a>
        <a href="/signup" onClick={onClickLink}>{t('signUp')}</a>
        <a href="/login" onClick={onClickLink}>Login</a>
      </div>
      { path === '/' && <HomePage/>}
      { path === '/signup' && <SignUpPage />}
      { path === '/login' && <LoginPage/>}
      { path.startsWith('/user/') && <UserPage/>}
      <LanguageSelector/>
    </div>
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

*/
