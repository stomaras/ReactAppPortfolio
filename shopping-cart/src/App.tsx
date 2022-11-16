import "./App.css";
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;

/*
Stuff can be represented and can be described baserd on json
List of our products 
Stuff that we are add to cart 

everything that changes the store being described by an action and an action has a type and does have payload 
we creating plain javascript objects that descibe wht we are trying to do and then these actions are being push through 

reducers have some kind of encapsulate dlogic there is as models 

useSelector hook == mapStateToProps function

imagine all of your satte in redux as a json document 


*/
