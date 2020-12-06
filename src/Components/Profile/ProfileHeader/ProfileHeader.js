import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProfileContext from "../Profile/Profile.context";
import SecurityId from "../../Common/SecurityId/SecurityId";
import Quote from "../../Common/Quote/Quote";
import "./ProfileHeader.css";
import SecurityDetails from "../../Common/SecurityDetails/SecurityDetails";

/**
 * Displays general information about a secuity
 * @component
 */
function ProfileHeader(props) {
	const {
		name,
		ticker,
		logo,
		currency,
		exchange,
		website,
		country,
		ipo,
		current,
		change,
		changePct,
	} = useContext(ProfileContext);

	return (
		<div className="ProfileHeader card bg-primary">
			<SecurityId name={name} ticker={ticker} logo={logo} />
			<Quote
				change={change}
				current={current}
				changePct={changePct}
				currency={currency}
				exchange={exchange}
			/>
			<SecurityDetails website={website} country={country} ipo={ipo} />
		</div>
	);
}

ProfileHeader.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	logo: PropTypes.string,
	exchange: PropTypes.string,
	current: PropTypes.string,
	currency: PropTypes.string,
	change: PropTypes.string,
	changePct: PropTypes.string,
	ipo: PropTypes.string,
	website: PropTypes.string,
	country: PropTypes.string,
};

ProfileHeader.defaultProps = {};

export default ProfileHeader;
