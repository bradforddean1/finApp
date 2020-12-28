import { createElement } from "react";
import "./ButtonCta.css";
import PropTypes from "prop-types";

/**
 * Big call to action button
 * @component
 */
function ButtonCta(props) {
	const { tag, children, className, ...otherProps } = props;

	return createElement(
		tag,
		{ className: ["ButtonCta", className].join(" "), ...otherProps },
		children
	);
}

ButtonCta.propTypes = {
	tag: PropTypes.string,
	children: PropTypes.string,
	className: PropTypes.string,
};

ButtonCta.defaultProps = {
	tag: "a",
};

export default ButtonCta;
