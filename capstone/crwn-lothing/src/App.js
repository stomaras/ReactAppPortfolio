import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

/*
In order to use react router dom we need to wrap whole application 
in router component that react router dom give us
Routes is a folder that hold all top level components

Routes and Route Component rely on being wrapped in an outside Browser router component 

<Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

if you match this path index tell this is going to be home component

auth_token between react-google
verification_topken between firebase and google, to verify that auth_token is unique
access_token -> what the user should be able to access
access-token  send from react with a request back to firebase in order to perform operations
              what this accesss_token authorized to do, if you authorized to do this kind of operation will send back an authorized response 


*/
