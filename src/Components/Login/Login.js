import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CtaButton from "../Common/ButtonCta/ButtonCta";
import { request, authenticatedRequest } from "../../Utils/api/serverRequest";
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

	useEffect(() => {
		// logged in?  use state
		// if logged in log out
		// ***
		if (true) {
			authenticatedRequest("GET", "api/auth/logout");
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setError("");

		const body = { username: username, password: password };

		request("POST", "api/auth/login", body)
			.then((result) => {
				props.reRoute("/search");
			})
			.catch((error) => {
				if (error.message === "UNAUTHORIZED") {
					setError("Invalid login, please try again.");
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
			<CtaButton
				className="cta"
				tag="button"
				type="button"
				onClick={handleSubmit}
			>
				Login / Signup
			</CtaButton>
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
