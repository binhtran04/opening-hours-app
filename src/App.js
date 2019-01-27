import React, { Component } from "react";
import "./App.css";

import OpeningHours from "./components/OpeningHours";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OpeningHours />
      </div>
    );
  }
}

export default App;
