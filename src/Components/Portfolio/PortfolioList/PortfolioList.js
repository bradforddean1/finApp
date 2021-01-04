import React from "react";
import PropTypes from "prop-types";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./PortfolioList.scss";

/**
 * List of securities with current quote
 * @component
 */
function PortfolioList(props) {
	const { items, deletePortfolioItem } = props;

	const makePortfolioCards = () => {
		return items.map((item) => {
			return (
				<PortfolioItem
					deletePortfolioItem={deletePortfolioItem}
					key={item.ticker}
					name={item.name}
					ticker={item.ticker}
					logo={item.logo}
					currency={item.currency}
					exchange={item.exchange}
					current={item.current}
					change={item.change}
					changePct={item.changePct}
				/>
			);
		});
	};

	return <ul className="PortfolioList">{makePortfolioCards()}</ul>;
}

PortfolioList.propTypes = {
	deletePortfolioItem: PropTypes.func.isRequired,
	portfolioItems: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			ticker: PropTypes.string.isRequired,
			logo: PropTypes.string,
			exchange: PropTypes.string,
			current: PropTypes.string,
			currency: PropTypes.string,
			change: PropTypes.string,
			changePct: PropTypes.string,
		})
	),
};

PortfolioList.defaultProps = {
	portfolioItems: [],
};

export default PortfolioList;
