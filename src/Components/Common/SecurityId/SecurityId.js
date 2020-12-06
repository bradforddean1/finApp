import React from "react";
import PropTypes from "prop-types";
import "./SecurityId.css";

/**
 * Displays secuity identifying information, Logo, Name and Ticker Symbol
 * @component
 */
function SecurityId(props) {
	return (
		<div className="SecurityId card-line">
			{!!props.logo && <img src={props.logo} alt="logo" />}
			<h2>
				{props.name} <span>({props.ticker})</span>
			</h2>
		</div>
	);
}

SecurityId.propTypes = {
	logo: PropTypes.string,
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
};

SecurityId.defaultProps = {
	logo: null,
};

export default SecurityId;
