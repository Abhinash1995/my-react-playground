import React from "react";
import render from "react-dom"
import Modal from "./component/Modal";
import Todo from "./component/Todo";

function App() {
    return (
        <div>
          <h1>My Todos</h1>
          <Todo name = "Learn React"/>
          <Todo name = "Master React"/>
        </div>
      );
}

export default App;
