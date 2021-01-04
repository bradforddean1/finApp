import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonCta from "../Common/ButtonCta/ButtonCta";
import Intermodal from "../Common/Intermodal/Intermodal";
import ValidationError from "../Common/ValidationError/ValidationError";
import { login, register } from "../../api/serverRequest";
import "./Login.scss";

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
	const [intermodalContent, setIntermodalContent] = useState({
		children: null,
		buttons: [],
	});

	const launchModal = (content) => {
		setIntermodalContent(content);
		setShowIntermodal(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		login(username, password)
			.then(() => {
				props.reRoute("/search");
			})
			.catch((error) => {
				if (error.type === "UNAUTHORIZED") {
					switch (error.message) {
						case "already logged in":
							props.reRoute("/search");
							break;
						case "unregistered":
							launchModal({
								children: (
									<p>
										The username: {username} does not already exist. Would you
										like to register as {username} with provided passowrd?
									</p>
								),
								buttons: [
									{
										tag: "button",
										onClick: handleRegister,
										children: "Register",
									},
									{
										tag: "button",
										onClick: () => setShowIntermodal(false),
										children: "Try Again",
									},
								],
							});
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

		register(username, password)
			.then(() => {
				props.reRoute("/search");
			})
			.catch((error) => {
				if (error.type === "REQUESTERROR") {
					switch (error.message.status) {
						case "user exists":
							launchModal({
								children: (
									<p>
										The username: {username} already exists. Please try another
										unsername.
									</p>
								),
								buttons: [
									{
										tag: "button",
										onClick: handleRegister,
										children: "Register",
									},
									{
										tag: "button",
										onClick: () => setShowIntermodal(false),
										children: "Go Back",
									},
								],
							});
							break;
						case "invalid password":
							launchModal({
								children: (
									<p>
										Password doen not meet min requirements:{" "}
										{error.passValErrors}
									</p>
								),
								buttons: [
									{
										tag: "button",
										onClick: () => setShowIntermodal(false),
										children: "Go Back",
									},
								],
							});
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
		<div className="Login">
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
			<ValidationError>{valError}</ValidationError>
			<ButtonCta
				className="cta"
				tag="button"
				type="button"
				onClick={handleSubmit}
			>
				Login / Signup
			</ButtonCta>
			<Intermodal
				show={showIntermodal}
				close={() => setShowIntermodal(false)}
				buttons={intermodalContent.buttons}
			>
				{intermodalContent.children}
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
