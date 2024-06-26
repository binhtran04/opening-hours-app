import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/circular-std.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
