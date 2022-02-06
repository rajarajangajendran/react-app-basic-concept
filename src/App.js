import React from "react";
// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from './Components/FunctionalComp'
import ClassComp from './Components/ClassComp'
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from "./Components/ParentComp";
import Classprops from "./Components/Classprops";

function App() {
  return (
    <div>
    <h1>Hello hi raja</h1>
      <FunctionalComp />
      <ClassComp />
      <Classprops name="This Props 1"> <p>Child Component</p> </Classprops>
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;