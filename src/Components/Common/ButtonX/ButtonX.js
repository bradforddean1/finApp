import React from "react";
import "./ButtonX.css";
import PropTypes from "prop-types";

/**
 * Circular X Button
 * @component
 */
function ButtonX(props) {
	const { handleClick } = props;
	return (
		<button className="ButtonX" onClick={handleClick}>
			(X)
		</button>
	);
}

ButtonX.propTypes = {
	/**
	 * Callback function to handle click event
	 */
	handleClick: PropTypes.func.isRequired,
};

export default ButtonX;
