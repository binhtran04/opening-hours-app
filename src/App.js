import React, { Component } from "react";
import "./App.css";

import FileInput from "./components/FileInput";
import OpeningHours from "./components/OpeningHours";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileInput />
        <OpeningHours />
      </div>
    );
  }
}

export default App;
