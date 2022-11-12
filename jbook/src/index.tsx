import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import { start } from "repl";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </h1>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

/*
I want to write some amoutt of javascript inside of textarea and when 
we click on Submit , we want to transpile and bundle the code and show 
the result down here inside n pre element

Whenever you install this esbuild NPM module
you are actually getting a rather small amount of Javascript
pass commands in js wrapper 
then pass these commands in go executable.

this code executable inside esbuild is the thing that does the actual transpile + bundling
we install esbuild-wasm NPM module 

esbuild-wasm NPM module
Small           WASM= Web Assembly Binary = can be executed isnide the browser
Amount of JS    


this wasm do all the compiling all the transpiling all the bundling

esbuild.wasm in the compiled go code that can work inside the browser

transform will try to execute some transpiling insome code that we provide
build in order to bundle our code 

with transform we get some jsx and turn into normal javascript

use a ref , you may used to use ref in react component, you can use ref to keep track to any javascript value inside of a component
, not just to a component itself

ESBuild and bunding inside of a browser
Build API 

import react from 'react'
|
|
|
ESBuild
Transpile + Bundle
|
|
|
Sure, no problem, i'll just look
at the file system and find this
'react' module

Your browser does not have access to the file system of your computer
We cannot use ESBuid to do any bundling 

import react from 'react'
            |
            |
            |
            |
------------------------------
ESBuild Transpile + Bundle
-------------------------------
Sure. no problem. Let me begin
by figuring out what path on your file
system i should look at to find React
|                           |
|                           |http://npm/react.js        
|                           |
|                           |
-----------------------------------
You and me 
-----------------------------------          Hey NPM, what's the URL for React?
Het, ESBuild you are woring so hard----------------------------------------------> NPM Registry
Let us figure out what that path
should be!                         <----------------------------------------------
                                                http://npm/react.js


npm view react dist.tarball ... used to show us the link that we can download all react stuff

we are going to write a plugin to intercept all the different path resolutions we are going to make use of unpkg 
and pass that path back into esbuild
*/
