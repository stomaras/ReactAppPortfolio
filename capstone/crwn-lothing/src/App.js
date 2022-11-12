import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I am the Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
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

*/
