import React from "react";
import PropTypes from "prop-types";
import ButtonX from "../ButtonX/ButtonX";
import "./Intermodal.css";

/**
 * Intermodal overlay
 * @component
 */

function Intermodal(props) {
	const { close, show, children } = props;

	const makeIntermodalContent = () => {
		if (show) {
			return (
				<div className="Intermodal">
					<div className="intermodal-box">
						<ButtonX handleClick={close} />
						{children}
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
	children: PropTypes.element,
};

Intermodal.defaultProps = {
	show: false,
};

export default Intermodal;
