import React from "react";
import "./Quote.scss";
import PropTypes from "prop-types";

/**
 * Display sceuoruty current price and change for previous close.
 * @component
 */
function Quote(props) {
	const { exchange, current, currency, change, changePct } = props;
	return (
		<div className="Quote card-line">
			<span className="emphasis">
				{current} {currency}
			</span>
			<span className="emphasis">
				{change} ({changePct})
			</span>
			{!!exchange && <p className="de-emphasis">Data from {exchange}</p>}
		</div>
	);
}

Quote.propTypes = {
	exchange: PropTypes.string,
	current: PropTypes.string,
	currency: PropTypes.string,
	change: PropTypes.string,
	changePct: PropTypes.string,
};

Quote.defaultProps = {
	exchange: null,
	current: "N/A",
	currency: "",
	change: "N/A",
	changePct: "N/A",
};

export default Quote;
