import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./containers/App";
// import LandingPage from "./containers/LandingPage"; // to run landing page in dev env
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<LandingPage />, document.getElementById("root"));
registerServiceWorker();
