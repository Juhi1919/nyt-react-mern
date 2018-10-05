import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import main from "./main";
ReactDOM.render(
	(<BrowserRouter>
		<Route path="/" component={main} />
	</BrowserRouter>),
	document.getElementById("app")
);
