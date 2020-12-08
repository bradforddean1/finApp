import React from "react";
import PropTypes from "prop-types";
import "./ApplicationError.css";

/**
 * Outer Error Boundary with handleing for auth erros and any other uncaught errors.
 * @component
 */
class ApplicationError extends React.Component {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// if (err.message === "UNAUTHORIZED") {
	// 		// TODO: show error
	// 		// TODO: redirect to login (may be button on show error)
	// 		console.log("Invalid login, please try again.");
	// 		return null;
	// 	} else {
	// 		console.log(err);
	// 		throw err;
	//     }

	render() {
		if (this.state.hasError) {
			return <div className="ApplicationError">{/* content goes here */}</div>;
		}
		return this.props.children;
	}
}

ApplicationError.propTypes = {
	/**
	 * Example prop
	 */
	example: PropTypes.string.isRequired,
};

export default ApplicationError;
