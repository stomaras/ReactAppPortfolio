import "./App.css";
import SignUpPage from "../src/pages/SignUpPage";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <div className="container">
      <SignUpPage />
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

Note: waitForElementToBeRemoved is not compatible with elements queried by findBy

*/
