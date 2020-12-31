import React from "react";
import PropTypes from "prop-types";
import SecurityId from "../../Common/SecurityId/SecurityId";
import Quote from "../../Common/Quote/Quote";
import ButtonX from "../../Common/ButtonX/ButtonX";
import "./PortfolioItem.css";
/**
 * Securtiy quote card for the portfolio list
 * @component
 */
function PortfolioItem(props) {
	const {
		deletePortfolioItem,
		name,
		ticker,
		logo,
		currency,
		exchange,
		current,
		change,
		changePct,
	} = props;

	return (
		<li className="PortfolioItem card bg-primary">
			<ButtonX handleClick={() => deletePortfolioItem(ticker)} />
			<SecurityId name={name} ticker={ticker} logo={logo} />
			<Quote
				change={change}
				current={current}
				changePct={changePct}
				currency={currency}
				exchange={exchange}
			/>
		</li>
	);
}

PortfolioItem.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	logo: PropTypes.string,
	exchange: PropTypes.string,
	current: PropTypes.string,
	currency: PropTypes.string,
	change: PropTypes.string,
	changePct: PropTypes.string,
};

PortfolioItem.defaultProps = {
	logo: null,
	exchange: null,
	current: "N/A",
	currency: "",
	change: "N/A",
	changePct: "N/A",
};

export default PortfolioItem;
