import React from "react";
import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import "./App.css";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  // const personName = {
  //   first: "Spyros",
  //   last: "Tomaras",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* <Greet name="Tom" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;

/*
Index.tsx is the entry point to our react app where we mount the app component onto the root dom node 

type inference comes most of the time we writing code 

Your question you might have is whether to use types or interfaces
Use types when build applications 
Use interfaces when build libraries

we want the message welcome guest to be displayed when the user is not logged in 

Union of string literals as a type 
Chidren Prop 
Chidren Node where the type is React.ReactNode
Finally Optional Props

Two most common used event as props , the click event on a button and the changeEvent on an input element 

half of the time a click handler does not need any parameter and does not return anything for example you can make an api call 
in the function body but does not have to accept a parameter or return a value

With input elements the component would need two props the input value and the onChange handler


*/
