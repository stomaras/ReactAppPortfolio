import "./App.css";
import SignUpPage from "../src/pages/SignUpPage";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import {useTranslation} from "react-i18next";
import logo from "./assets/Hoaxify.jpg";
import { BrowserRouter as Router ,Route, Link } from "react-router-dom";
import {useState} from "react";

function App() {
  const {t} = useTranslation();

  const [random, setRandom] = useState(10);

  const generateRandom = () => {
    setRandom(Math.random()*100);
  }

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light shadow-small">
        <div className="container">
          <Link 
            className="navbar-brand" 
            to="/" 
            title="Home" 
          >
            <img src={logo} alt="Hoaxify" width="60"/>
            Hoaxify
          </Link>
          <ul className="navbar-nav">
            <Link className="nav-link" to="/signup">{t('signUp')}</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route path="/signup">
          <SignUpPage random={random}/>
        </Route>
        <Route path="/login">
          <LoginPage random={random}/>
        </Route>
        <Route path="/user/:id" component={UserPage}/>
        <LanguageSelector/>
      </div>
      <button onClick={generateRandom}>Generate Random</button>
    </Router>    
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

anchor is looking for href attribute but link we pass it with to property of this component

React Components have lifecycles 

phases like : 

1) Mounting
2) Updating
3) Unmounting

lifecycle function are part of class components
But after hooks we can react to lifecycle components in functional components to.

*/
