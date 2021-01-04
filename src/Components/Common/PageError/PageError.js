import React from "react";
import PropTypes from "prop-types";
import background from "../../../assets/elipse.svg";
import "./PageError.scss";

/**
 * Full Page Error
 * @component
 */
function PageError(props) {
	const { title, content } = props;

	return (
		<div
			className="PageError"
			style={{ backgroundImage: `url(${background})` }}
		>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}

PageError.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
};

PageError.defaultProps = {
	content: null,
};

export default PageError;
