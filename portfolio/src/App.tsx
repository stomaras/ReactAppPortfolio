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




---------------------------------------------------------------------------------Transpiling Options----------------------------------------------------------------------------------------------
Problem 2 would be solved if we could get Babel working in out React App 

Option 1:
------------------------------------------------
            code          
React App                   Backed API Server
          Transpiled Code

Option 2:
---------------------------------------------

code ------------------------> In-Browser
                               Transpiler
Transpiled
Result    <-------------------                

We run the transpiler directly inside of users browser 
So we get the code throw into that transpile and immediately get out some kind of transpiled result

message.js                        index.js


export default 'Hello there'  import message from "./message"


                  Bundler Webpack

Bundler is going to take multiple different modules and combine them all together and somehow link them into one single file 
Bundler is responsible to ensure that one module communicate with the other module

Let see what webpack does during the transpiling process

Bundler                                                                                                         We want a bundler that works slightly differently 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Read the contents of the entry file (index.js)
Automatically found all the different require/import/export statements
Automatically bundler found all the modules on our hard drive---------------------------------------------------> Automatically find all the modules the user has imported from NPM
Linked these files together into a single output file with all values being correctly communicated around


Bundling Option 1
                  Code
-------------------------------------------------------->  Backend API Server
                                                            Webpack runs

                                                            Webpack finds
React App                                                   missing module

                                                            npm install plugin--------> NPM registry
                                                            gets module
                                                            NpmInstallWebpackPlugin

                                                            Bundle completed
<---------------------------------------------------------
              Bundled Code




Bundling Option 2
                  Code
-------------------------------------------------------->  Backend API Server
                                                            Webpack runs

                                                            Webpack finds
React App                                                   missing module

                                                            We write plugin to-----------------------------> NPM registry
                                                            fetch individual file                            React
                                                            from npm                                          index.js
                                                                                                              renderer.js
                                                            Bundle completed
<---------------------------------------------------------
              Bundled Code


Bundling Option 3
                  Code                                      React App Bundling process here
-------------------------------------------------------->  
                                                            Webpack runs

                                                            Webpack finds
React App                                                   missing module

                                                            We write plugin to-----------------------------> NPM registry
                                                            fetch individual file                            React
                                                            from npm                                          index.js
                                                                                                              renderer.js
                                                            Bundle completed
<---------------------------------------------------------
              Bundled Code


              Transpiling/Bundling Remotely or Locally?


Webpack does not work in the browser

Raw user            Transpiling           Bundling
code--------------> Babel--------------> Webpack------------> Code really to execute


ESBuild is a single standalone tool that completely replaces both Babel and Webpack 
        can transpile and bundle in the browser









*/
