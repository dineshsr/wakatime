import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleLogin from "react-google-login";

const client_id =
	"486612176112-pehebooofba34dg8spmaf9uq26g5eck5.apps.googleusercontent.com";

function Login() {
	const onSuccess = (res) => {
		console.log("Success : " + res.profileObj);
	};
	const onFailure = (res) => {
		console.log("Login Failed");
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<Form.Group size="lg" controlId="email">
					<h2>Login Page</h2>
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button
					block
					size="lg"
					type="submit"
					disabled={!validateForm()}
				>
					Login
				</Button>
				<div>
					<GoogleLogin
						clientId={client_id}
						buttonText="Login"
						onSuccess={onSuccess}
						onFailure={onFailure}
						cookiePolicy={"single_host_origin"}
						style={{ marginTop: "100 px" }}
						isSignedIn={true}
					/>
				</div>
			</Form>
		</div>
	);
}

export default Login;
