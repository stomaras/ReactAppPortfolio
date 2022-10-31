import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/MainApp";

function App() {
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;

/*


In a normal redux project, it is worth the time to think about the design of your store before writing code
reducers what is going to hold , actions , action creators 

Redux Store design 

request which is going to do request

registry.npmjs.org/-/v1/search?text=react|| redux

Redux store
repositories --> data  (List of repositories from npm)
             --> loading (True/False whether we are fetchiong data)
             --> error (String, error message if one occured during fetch)


Action Creators                       Actions (objects with type property and payload)
-------------------------       --------------------------------------------------------
searchRepositories(name)        SearchRepositories
                                SearchRepositoriesSuccess
                                SearchRepositoriesError

                                Action Types
                                -------------------------------------------
                                search_repositories
                                search_repositories_success
                                search_repositories_error

src folder
components folder
---------------------------------
App.tsx RepositoriesList.tsx

redux stuff
-----------------------------
reducers action creators middlewares
index.ts file

with useSelector we get advantage of getting all the store 
useSelector does not know what type of data is inside of redux store
react-redux has no idea what type of data is inside of our Redux store









*/
