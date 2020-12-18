import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Authenticate";
import Authorize from "./Authorize";

function Routes() {
	// const loadCors = () => {
	// 	var cors_api_host = "localhost:3000";
	// 	var cors_api_url = "https://" + cors_api_host + "/";
	// 	var slice = [].slice;
	// 	var origin = window.location.protocol + "//" + window.location.host;
	// 	var open = XMLHttpRequest.prototype.open;
	// 	XMLHttpRequest.prototype.open = function () {
	// 		var args = slice.call(arguments);
	// 		var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
	// 		if (
	// 			targetOrigin &&
	// 			targetOrigin[0].toLowerCase() !== origin &&
	// 			targetOrigin[1] !== cors_api_host
	// 		) {
	// 			args[1] = cors_api_url + args[1];
	// 		}
	// 		return open.apply(this, args);
	// 	};
	// };

	// useEffect(() => {
	// 	loadCors();
	// 	console.log("CORS Loaded");
	// }, []);

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
