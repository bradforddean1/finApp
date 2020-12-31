import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import PortfolioList from "../PortfolioList/PortfolioList";
import man from "../../../assets/man2.svg";
import background from "../../../assets/elipse.svg";
import "./PortfolioPage.css";
import { request } from "../../../Utils/api/serverRequest";

/**
 * Portfolio Page displays summary cards for securities saved by user.
 * @component
 */
function PortfolioPage(props) {
	const [portfolioItems, setPortfolioItems] = useState([]);

	const fetchPortfolio = () => {
		request("GET", "api/portfolio")
			.then((portfolio) => {
				setPortfolioItems(portfolio);
			})
			.catch((err) => {
				if (err.message === "UNAUTHORIZED") {
					<Redirect
						to={{
							pathname: "/login",
							state: { referrer: "servAuthError" },
						}}
					/>;
				}
			});
	};

	const handleDeletedItem = (ticker) => {
		setPortfolioItems(portfolioItems.filter((item) => item.ticker !== ticker));
	};

	const deletePortfolioItem = (ticker) => {
		request("DELETE", `api/portfolio/${ticker}`).then(() => {
			handleDeletedItem(ticker);
		});
		return null;
	};

	useEffect(() => {
		fetchPortfolio();
	}, []);

	return (
		<div className="PortfolioPage page">
			{portfolioItems.length < 1 ? (
				<div
					className="empty-portfolio"
					style={{ backgroundImage: `url(${background})` }}
				>
					<p>Your Portfolio is Empty!</p>
					<img src={man} alt="looking for stocks" />
				</div>
			) : (
				<PortfolioList
					items={portfolioItems}
					deletePortfolioItem={deletePortfolioItem}
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
