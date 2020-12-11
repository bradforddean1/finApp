import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import man from "../../assets/man1.svg";
import "./LoginPage.css";
import FullHeaderPage from "../FullHeaderPage/FullHeaderPage";

/**
 * Login page root
 * @component
 */
function LoginPage(props) {
	return (
		<FullHeaderPage>
			<img src={man} alt="man in chair looking for stocks" />
			<Login reRoute={(path) => props.history.push(path)} />
		</FullHeaderPage>
	);
}

LoginPage.propTypes = {
	/**
	 * History object with push function, used to setup the reRoute function for Login.
	 */
	history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

export default LoginPage;
