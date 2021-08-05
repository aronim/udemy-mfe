import React from "react";
import ReactDom from "react-dom";

import App from "./App";

const app = <App/>;
const element = document.querySelector("#root");

ReactDom.render(app, element);
