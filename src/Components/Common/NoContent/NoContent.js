import React from "react";
import "./NoContent.scss";
import PropTypes from "prop-types";

/**
 * Renders standarized content when pendig user input.
 * @component
 */
function NoContent(props) {
	const { children } = props;
	return <div className="NoContent">{children}</div>;
}

NoContent.propTypes = {
	children: PropTypes.string.isRequired,
};

export default NoContent;
