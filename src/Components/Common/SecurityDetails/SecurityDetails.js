import React from "react";
import PropTypes from "prop-types";
import World from "../../Common/icons/WorldIcon/WorldIcon";
import "./SecurityDetails.scss";

/**
 * Footer of the header card with basic security summary.
 * @component
 */
function SecurityDetails(props) {
	return (
		<div className="SecurityDetails card-line">
			<div className="web">
				{!!props.website && (
					<>
						<World />
						<a className="small-script" href={props.website}>
							{props.website}
						</a>
					</>
				)}
			</div>
			<span className="small-script">{props.country}</span>
			<span className="small-script">IPO: {props.ipo}</span>
		</div>
	);
}

SecurityDetails.propTypes = {
	/**
	 * Displayable date of IPO
	 */
	ipo: PropTypes.string,
	/**
	 * Displayable headquarters
	 */
	country: PropTypes.string,
	/**
	 * Displayable company wenbsite
	 */
	website: PropTypes.string,
};

SecurityDetails.defaultProps = {
	ipo: "-",
	country: "-",
	website: null,
};

export default SecurityDetails;
