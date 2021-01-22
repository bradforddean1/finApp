import React from "react";
import PropTypes from "prop-types";
import { SpinnerDotted } from "spinners-react";
import BarLoader from "react-spinners/BarLoader";
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
				{/* <SpinnerDotted
					size="120px"
					thickness="200"
					сolor={"#fff"}
					secondaryColor="rgba(0,0,0,0.44)"
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				/> */}
				<p>Loading...</p>
				<BarLoader
					color={"#51FF82"}
					loading={true}
					height="40px"
					width="75%"
					css={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
					size={150}
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
