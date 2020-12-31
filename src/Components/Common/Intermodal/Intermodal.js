import React, { createElement } from "react";
import PropTypes from "prop-types";
import ButtonX from "../ButtonX/ButtonX";
import "./Intermodal.css";

/**
 * Intermodal overlay
 * @component
 */

function Intermodal(props) {
	const { close, show, children, buttons } = props;

	const makeIntermodalContent = () => {
		if (show) {
			return (
				<div className="Intermodal">
					<div className="background"></div>
					<div className="intermodal-box">
						<ButtonX handleClick={close} />
						{children}
						{!!buttons &&
							buttons.map((button, i) => {
								const { tag, children, className, ...otherProps } = button;
								return createElement(
									tag,
									{
										key: i,
										className: ["intermodal-button", className].join(" "),
										...otherProps,
									},
									children
								);
							})}
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	return <>{makeIntermodalContent()}</>;
}

Intermodal.propTypes = {
	/**
	 * Callback to handle intermodal close button click
	 */
	close: PropTypes.func.isRequired,
	/**
	 * Is intermodal being displayed
	 */
	show: PropTypes.bool,
	/**
	 * List of action Buttons to be implemented
	 */
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			tag: PropTypes.string.isRequired,
			className: PropTypes.string,
			onClick: PropTypes.func,
			href: PropTypes.string,
			children: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.element,
				PropTypes.arrayOf(PropTypes.element),
			]),
		})
	),
	children: PropTypes.element,
};

Intermodal.defaultProps = {
	show: false,
};

export default Intermodal;
