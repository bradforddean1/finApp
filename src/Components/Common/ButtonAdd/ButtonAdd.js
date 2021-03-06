import React from "react";
import "./ButtonAdd.scss";
import PropTypes from "prop-types";

/**
 * Button w/ + svg - Add item to List
 * @component
 */
function ButtonAdd(props) {
	const { handleClick } = props;

	return (
		<button className="ButtonAdd" type="button" onClick={handleClick}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 57 57"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M45.8507 27.2239H29.5522V10.9254C29.5522 10.6167 29.4296 10.3205 29.2113 10.1022C28.9929 9.88388 28.6968 9.76123 28.3881 9.76123C28.0793 9.76123 27.7832 9.88388 27.5649 10.1022C27.3465 10.3205 27.2239 10.6167 27.2239 10.9254V27.2239H10.9254C10.6166 27.2239 10.3205 27.3466 10.1022 27.5649C9.88385 27.7832 9.7612 28.0793 9.7612 28.3881C9.7612 28.6969 9.88385 28.993 10.1022 29.2113C10.3205 29.4296 10.6166 29.5523 10.9254 29.5523H27.2239V45.8508C27.2239 46.1595 27.3465 46.4557 27.5649 46.674C27.7832 46.8923 28.0793 47.015 28.3881 47.015C28.6968 47.015 28.9929 46.8923 29.2113 46.674C29.4296 46.4557 29.5522 46.1595 29.5522 45.8508V29.5523H45.8507C46.1595 29.5523 46.4556 29.4296 46.674 29.2113C46.8923 28.993 47.0149 28.6969 47.0149 28.3881C47.0149 28.0793 46.8923 27.7832 46.674 27.5649C46.4556 27.3466 46.1595 27.2239 45.8507 27.2239Z"
					fill="black"
				/>
			</svg>
		</button>
	);
}

ButtonAdd.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default ButtonAdd;
