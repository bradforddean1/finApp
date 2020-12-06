import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import headerbg from "../../assets/header.svg";
import logo from "../../assets/ztok.svg";
import man from "../../assets/man1.svg";
import "./LoginPage.css";

/**
 * Login page root
 * @component
 */
function LoginPage(props) {
	return (
		<div
			className="LoginPage page"
			style={{ backgroundImage: `url(${headerbg})` }}
		>
			<h1>
				<img src={logo} alt="ztok" />
			</h1>
			<p>Stocks Under Control!</p>
			<img src={man} alt="man in chair looking for stocks" />
			<Login reRoute={(path) => props.history.push(path)} />
		</div>
	);
}

LoginPage.propTypes = {
	/**
	 * History object with push function, used to setup the reRoute function for Login.
	 */
	history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

export default LoginPage;
