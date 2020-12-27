import { React } from "react";
import GoogleLogout from "react-google-login";

const client_id =
	"486612176112-pehebooofba34dg8spmaf9uq26g5eck5.apps.googleusercontent.com";

function Logout() {
	const onSuccess = () => {
		console.log(" Logout Success !");
	};
	return (
		<div>
			<GoogleLogout
				clientId={client_id}
				buttonText="Logout"
				onLogoutSucces={onSuccess}
			/>
		</div>
	);
}

export default Logout;
