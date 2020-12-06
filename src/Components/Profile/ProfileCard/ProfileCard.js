import React from "react";
import "./ProfileCard.css";
import PropTypes from "prop-types";
import Line from "../ProfileCardLine/ProfileCardLine";

/**
 * Data card for security profile page
 * @component
 */
function ProfileCard(props) {
	const { title, metrics, values } = props;
	return (
		<div className="ProfileCard card bg-secondary">
			<h3 className="card-line accent">{title}</h3>
			<ul className="list">
				{metrics.map((metric, i) => (
					<Line key={i} name={metric} value={values[i]} />
				))}
			</ul>
		</div>
	);
}

ProfileCard.propTypes = {
	/**
	 * Header subject name
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Array of metrics to be inluded on card.
	 */
	metrics: PropTypes.arrayOf(PropTypes.object),
};

ProfileCard.defaultProps = {
	metrics: [],
};

export default ProfileCard;
