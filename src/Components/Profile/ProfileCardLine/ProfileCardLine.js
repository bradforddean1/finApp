import React from "react";
import "./ProfileCardLine.css";
import PropTypes from "prop-types";

/**
 * Subject card for profile screen.
 * @component
 */
function ProfileCardLine(props) {
	const { key, name, value } = props;
	return (
		<li className="ProfileCardLine card-line" key={key}>
			<h4>{name}</h4>
			<span className="emphasis">{value}</span>
		</li>
	);
}

ProfileCardLine.propTypes = {
	key: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ProfileCardLine;
