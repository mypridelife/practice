import React from "react";
import "./App.css";
import ToDo from "../example/ToDo";
import FlavorForm from "../example/FlavorForm";
import UrlParams from "../example/UrlParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo />
        <FlavorForm />
        <UrlParams />
      </div>
    );
  }
}

export default App;
