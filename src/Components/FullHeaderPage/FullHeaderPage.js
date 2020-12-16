import React from "react";
import PropTypes from "prop-types";
import headerbg from "../../assets/header.svg";
import logo from "../../assets/ztok.svg";
import "./FullHeaderPage.css";

/**
 * Page outline with full branded header.
 * @component
 */
function FullHeaderPage(props) {
	const { children } = props;
	return (
		<div
			className="FullHeaderPage page"
			style={{ backgroundImage: `url(${headerbg})` }}
		>
			<div>
				<h1>
					<img src={logo} alt="ztok" />
				</h1>
				<span className="slogan">Stocks Under Control!</span>
			</div>

			{children}
		</div>
	);
}

FullHeaderPage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default FullHeaderPage;
