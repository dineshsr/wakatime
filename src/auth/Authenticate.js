import { Form, Button } from "react-bootstrap";
import logo from "./images/logo.png";
import axios from "axios";

const scopes =
	"email,read_logged_time,write_logged_time,read_stats,read_orgs,read_private_leaderboards,write_private_leaderboards";
const redirect_uri = "http://localhost:3000/authorize";
const wakaUrl =
	"https://wakatime.com/oauth/authorize?response_type=code&client_id=";

const loginForm = {
	borderRadius: "15px",
	boxShadow: "3px 3px 30px grey",
	padding: "50px",
	width: "35%"
};
const submitButton = {
	padding: "10px",
	marginTop: "20px",
	width: "35%",
	textAlign: "center"
};
const centerStyle = {
	textAlign: "center"
};
const logoStyle = {
	width: "75px",
	height: "75px"
};

function Home() {
	const handleClick = () => {
		var client_id = document.getElementById("appId").value;
		var client_secret = document.getElementById("appSecret").value;
		var authorizeUrl = wakaUrl;
		authorizeUrl +=
			client_id + "&redirect_uri=" + redirect_uri + "&scope=" + scopes;
		axios
			.post(authorizeUrl)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		/*window.open(authorizeUrl, "_blank");*/
	};

	return (
		<div className="container" style={loginForm}>
			<div style={centerStyle}>
				<span>
					<img style={logoStyle} src={logo} alt="Logo" />
				</span>
				<p style={{ marginTop: 10 }}>
					Wakatime - Your Coding overview platform
				</p>
			</div>

			<Form>
				<Form.Group>
					<Form.Label>App ID</Form.Label>
					<Form.Control
						type="appId"
						id="appId"
						placeholder="App ID from Wakatime"
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>App Secret</Form.Label>
					<Form.Control
						type="appSecret"
						id="appSecret"
						placeholder="App Secret from Wakatime"
					/>
				</Form.Group>
				<div style={centerStyle}>
					<Button
						variant="primary"
						style={submitButton}
						onClick={handleClick}
					>
						Authorize
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default Home;
