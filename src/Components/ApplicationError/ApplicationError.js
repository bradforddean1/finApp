import React from "react";
import PropTypes from "prop-types";
import "./ApplicationError.scss";

/**
 * Outer Error Boundary with handleing for auth erros and any other uncaught errors.
 * @component
 */
class ApplicationError extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <div className="ApplicationError">This is an error</div>;
		}
		return this.props.children;
	}
}

ApplicationError.propTypes = {
	/**
	 * App content that does not reuslt in error passed through.
	 */
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default ApplicationError;
