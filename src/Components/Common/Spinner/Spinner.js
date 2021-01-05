import React from "react";
import PropTypes from "prop-types";
import { SpinnerDotted } from "spinners-react";
import "./Spinner.scss";

/**
 * Container for Spinner Compnent
 * @component
 */
function Spinner(props) {
	const { show } = props;

	return (
		!!show && (
			<div className="Spinner">
				<SpinnerDotted
					size="80px"
					thickness="100"
					сolor={"#a9a7a7"}
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				/>
			</div>
		)
	);
}

Spinner.propTypes = {
	show: PropTypes.bool,
};

Spinner.defaultProps = {
	show: true,
};

export default Spinner;
