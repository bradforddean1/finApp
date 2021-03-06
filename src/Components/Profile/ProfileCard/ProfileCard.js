import React from "react";
import "./ProfileCard.scss";
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
			<h3 className="card-line">{title}</h3>
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
	 * Array of metrics names to be inluded on card.
	 */
	metrics: PropTypes.arrayOf(PropTypes.string),
	/**
	 * Array of metric the values.
	 */
	values: PropTypes.arrayOf(PropTypes.string),
};

ProfileCard.defaultProps = {
	metrics: [],
};

export default ProfileCard;
