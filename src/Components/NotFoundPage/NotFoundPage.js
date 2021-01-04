import React from "react";
import "./NotFoundPage.scss";

/**
 * 404
 * @component
 */
function NotFoundPage(props) {
	return (
		<div className="NotFoundPage page">
			<h1>404</h1>
			<p>Content not found</p>
		</div>
	);
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
