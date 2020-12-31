import React from "react";
import "./ProfileCardLine.css";
import PropTypes from "prop-types";

/**
 * Subject card for profile screen.
 * @component
 */
function ProfileCardLine(props) {
	const { name, value } = props;
	return (
		<li className="ProfileCardLine card-line">
			<h4>{name}</h4>
			<span className="emphasis">{value}</span>
		</li>
	);
}

ProfileCardLine.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
};

ProfileCardLine.defaultProps = {
	value: "n/a",
};

export default ProfileCardLine;
