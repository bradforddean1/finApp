import React from "react";
import "./NotFoundPage.css";
import PropTypes from "prop-types";

/**
 * 404
 * @component
 */
function NotFoundPage(props) {
	return <div className="NotFoundPage page">{/* content goes here */}</div>;
}

NotFoundPage.propTypes = {
	/**
	 * Example prop
	 */
	example: PropTypes.string.isRequired,
};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
