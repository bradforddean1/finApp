import React from "react";
import PageError from "../Common/PageError/PageError";

/**
 * 404
 * @component
 */
function NotFoundPage(props) {
	return (
		<PageError
			// className="ApplicationError"
			title="404"
			content="Content not found."
		></PageError>
	);
}

export default NotFoundPage;
