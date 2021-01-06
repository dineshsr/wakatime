import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./auth/SignUp";
import "./styles/general.css";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/signup" exact component={Signup}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
