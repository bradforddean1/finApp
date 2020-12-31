import React from "react";
import "./ValidationError.css";
import PropTypes from "prop-types";

/**
 * Validation Error for Form Elements
 * @component
 */
function ValidationError(props) {
	const { children } = props;
	return <div className="ValidationError">{children}</div>;
}

ValidationError.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default ValidationError;
