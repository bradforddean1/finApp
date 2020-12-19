import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonCta from "../Common/ButtonCta/ButtonCta";
import Intermodal from "../Common/Intermodal/Intermodal";
import { request } from "../../Utils/api/serverRequest";
import "./Login.css";

/**
 * Login a User, auto logs out existing user on render.
 * On Login attempt, if user not found will register a new user.
 * @component
 */
function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [valError, setError] = useState();
	const [showIntermodal, setShowIntermodal] = useState(false);
	const [intermodalContent, setIntermodalContent] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		setError("");

		const body = { username: username, password: password };

		request("POST", "api/auth/login", body)
			.then((result) => {
				props.reRoute("/search");
			})
			.catch((error) => {
				if (error.type === "UNAUTHORIZED") {
					switch (error.message.status) {
						case "already logged in":
							props.reRoute("/search");
							break;
						case "unregistered":
							setIntermodalContent(
								<>
									<p>
										The username: {username} does not already exist. Would you
										like to register as {username} with provided passowrd?
									</p>
									<ButtonCta tag="button" onClick={handleRegister}>
										Register
									</ButtonCta>
									<ButtonCta
										tag="button"
										onClick={() => setShowIntermodal(false)}
									>
										Try Again
									</ButtonCta>
								</>
							);
							setShowIntermodal(true);
							break;
						default:
							setError("Invalid login, please try again.");
							break;
					}
				} else {
					setError("Unexpected error, please try again later");
				}
			});
	};

	const handleRegister = () => {
		setShowIntermodal(false);

		const body = { username: username, password: password };
		request("GET", "api/auth/register", body)
			.then(() => {
				props.reRoute("/search");
			})
			.catch((error) => {
				if (error.type === "REQUESTERROR") {
					switch (error.message.status) {
						case "user exists":
							setIntermodalContent(
								<>
									<p>
										The username: {username} already exists. Please try another
										unsername.
									</p>
									<ButtonCta
										tag="button"
										onClick={() => setShowIntermodal(false)}
									>
										Go Back
									</ButtonCta>
								</>
							);
							setShowIntermodal(true);
							break;
						case "invalid password":
							setIntermodalContent(
								<>
									<p>{error.message.valErrors}</p>
									<ButtonCta
										tag="button"
										onClick={() => setShowIntermodal(false)}
									>
										Go Back
									</ButtonCta>
								</>
							);
							setShowIntermodal(true);
							break;
						default:
							setError("Invalid login, please try again.");
							break;
					}
				} else {
					setError("Unexpected error, please try again later");
				}
			});
	};

	return (
		<div className="Login panel">
			<input
				type="text"
				name="username"
				id="username"
				placeholder="email"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div>{valError}</div>
			<ButtonCta
				className="cta"
				tag="button"
				type="button"
				onClick={handleSubmit}
			>
				Login / Signup
			</ButtonCta>
			<Intermodal show={showIntermodal} close={() => setShowIntermodal(false)}>
				{intermodalContent}
			</Intermodal>
		</div>
	);
}

Login.propTypes = {
	/**
	 * function redirects user afterlogin successful
	 */
	reRoute: PropTypes.func,
};

Login.defaultProps = {
	reRoute: () => {
		return;
	},
};

export default Login;
