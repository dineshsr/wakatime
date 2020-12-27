import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Authorize from "./Authorize";
import "./styles/general.css";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/authorize" exact component={Authorize}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
