import React from "react";
import { useApi } from "../../../hooks/useApi";
import PropTypes from "prop-types";
import PortfolioList from "../PortfolioList/PortfolioList";
import Spinner from "../../Common/Spinner/Spinner";
import man from "../../../assets/man2.svg";
import background from "../../../assets/elipse.svg";
import "./PortfolioPage.scss";
import {
	getPortfolioItems,
	deletePortfolioItem,
} from "../../../api/serverRequest";

/**
 * Portfolio Page displays summary cards for securities saved by user.
 * @component
 */
function PortfolioPage(props) {
	const portfolioItems = useApi(getPortfolioItems);

	const [isLoading, data, error] = portfolioItems.initial();

	const handleDeletedItem = (ticker) => {
		portfolioItems.update(data.filter((item) => item.ticker !== ticker));
	};

	return (
		<div className="PortfolioPage page">
			<Spinner show={isLoading} />
			{data.length < 1 ? (
				<div
					className="empty-portfolio"
					style={{ backgroundImage: `url(${background})` }}
				>
					<p>Your Portfolio is Empty!</p>
					<img src={man} alt="looking for stocks" />
				</div>
			) : (
				<PortfolioList
					items={data}
					deletePortfolioItem={(ticker) =>
						deletePortfolioItem(ticker, handleDeletedItem)
					}
				/>
			)}
		</div>
	);
}

PortfolioPage.propTypes = {
	portfolioItems: PropTypes.array,
};

PortfolioPage.defaultProps = {
	portfolioItems: [],
};

export default PortfolioPage;
