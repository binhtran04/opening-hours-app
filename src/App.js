import React, { Component } from "react";
import "./App.css";

import FileInput from "./components/FileInput";
import OpeningHours from "./components/OpeningHours";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <FileInput />
        </div>
        <div className="right">
          <OpeningHours />
        </div>
      </div>
    );
  }
}

export default App;
