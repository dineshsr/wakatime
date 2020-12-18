import React, { useEffect } from "react";

function Authorize() {
	const getGrantToken = () => {
		var url = window.location.href;
		var grantToken = url.substring(url.indexOf("?code=") + 6, url.length);
		console.log(url);
		console.log(grantToken);
	};
	useEffect(() => {
		getGrantToken();
	}, []);
	return <div>Hello</div>;
}
export default Authorize;
