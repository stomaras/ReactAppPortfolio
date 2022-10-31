import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
import { useState } from "react";

const MainApp = () => {


  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package </h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default MainApp;

/*
Provider is a react component that we are going to use to get access to our React Redux store 
throughout al different components 




*/
